import WelcomeEmail from "@/emails/welcome-email";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_PTtkZcF8_3w4nvSoCNhF4QxM46yMYZJRZ");

export async function GET() {
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "aukuyoma@gmail.com",
    subject: "Welcome to TruFunder",
    react: WelcomeEmail(),
  });

  return NextResponse.json({
    status: "ok",
  });
}
