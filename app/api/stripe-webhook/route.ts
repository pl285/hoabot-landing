import { exec } from "child_process";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { promisify } from "util";

const execPromise = promisify(exec);

function getStripe() {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    throw new Error("STRIPE_SECRET_KEY is not set");
  }
  return new Stripe(key, {
    apiVersion: "2026-05-27.dahlia",
  });
}

export async function POST(req: NextRequest) {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!webhookSecret) {
    return NextResponse.json(
      { error: "Webhook secret is not set" },
      { status: 500 },
    );
  }

  const stripe = getStripe();
  const body = await req.text();
  const sig = req.headers.get("stripe-signature");
  if (!sig) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error(`Webhook signature verification failed: ${message}`);
    return NextResponse.json({ error: 'Webhook Error' }, { status: 400 });
  }

  // Handle the event
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;
    
    // Extract customer details
    const customerEmail = session.customer_email || session.customer_details?.email;
    const customerName = session.customer_details?.name || 'there';
    
    if (customerEmail) {
      try {
        // Send welcome email via Gmail API
        await sendWelcomeEmail(customerEmail, customerName);
        console.log(`Welcome email sent to ${customerEmail}`);
      } catch (error) {
        console.error('Failed to send welcome email:', error);
        // Don't fail the webhook - log and continue
      }
    }
  }

  return NextResponse.json({ received: true });
}

async function sendWelcomeEmail(to: string, name: string) {
  const emailBody = `Hi ${name},

Thanks for choosing HOAbot! We're excited to build your AI assistant.

**Next Step: Send Us Your Documents**

Simply reply to this email and attach:
- ✅ Bylaws (PDF)
- ✅ Rules & Regulations (PDF)
- ✅ Any other documents you want residents to ask about (amenity policies, parking rules, pet policies, etc.)
- ✅ Your community logo (optional - PNG or JPG)

**What Happens Next:**

1. We'll receive your documents
2. We'll set up your bot at **[subdomain].hoabot.ai** (we'll confirm the URL with you)
3. You'll receive a link to test it (usually within about an hour after we receive your documents)
4. Once you approve, we'll send you the link to share with residents

**Questions?**

Just reply to this email - we typically respond within a few hours.

Best,
Paul Mecca
President, The Renaissance on Turtle Creek Condominium Association (603 units)
Founder, HOAbot.ai
paul@hoabot.ai
https://hoabot.ai

P.S. Need help? Just reply to this email.`;

  const command = `python ~/.hermes/skills/productivity/google-workspace/scripts/google_api.py gmail send --to "${to}" --subject "Welcome to HOAbot! Send us your documents to get started" --body "${emailBody.replace(/"/g, '\\"')}"`;
  
  await execPromise(command);
}
