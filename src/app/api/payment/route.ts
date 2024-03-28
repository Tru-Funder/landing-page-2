import WelcomeEmail from "@/emails/welcome-email";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(request: Request) {
  const userData = await request.json();

  await resend.emails.send({
    from: "support@trufunder.co",
    to: userData.email,
    subject: "Confirmation of Purchase Request Received",
    react: WelcomeEmail({ userData: userData }),
  });

  return Response.json({ status: "ok" });
}
