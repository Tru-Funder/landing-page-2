import WelcomeEmail from "@/emails/welcome-email";
import { Resend } from "resend";

const resend = new Resend("re_7xp4xPQr_6XKiHMMYxH2JqCdNP1QFaQSG");

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
