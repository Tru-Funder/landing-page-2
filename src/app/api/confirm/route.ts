import PaymentConfirmed from "@/emails/payment-confirmed";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(request: Request) {
  const userData = await request.json();

  await resend.emails.send({
    from: "support@trufunder.co",
    to: userData.email,
    subject: "Payment Confirmation for TruFunder Account",
    react: PaymentConfirmed({ userData: userData }),
  });

  return Response.json({ status: "ok" });
}
