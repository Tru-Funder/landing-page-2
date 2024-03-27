import WelcomeEmail from "@/emails/welcome-email";
import { Resend } from "resend";

const resend = new Resend("re_PTtkZcF8_3w4nvSoCNhF4QxM46yMYZJRZ");

export async function POST(request: Request) {
  const userData = await request.json();

  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "devsenpai09@gmail.com",
      subject: "Welcome to TruFunder",
      react: WelcomeEmail({ userData: userData }),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
