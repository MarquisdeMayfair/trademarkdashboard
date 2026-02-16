import { NextRequest, NextResponse } from "next/server";
import { addToWaitlist } from "@/lib/db";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 },
      );
    }

    const added = addToWaitlist(email);

    if (added) {
      sendNotification(email).catch(() => {});
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}

async function sendNotification(newEmail: string) {
  const notifyEmail = process.env.WAITLIST_NOTIFY_EMAIL;
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = parseInt(process.env.SMTP_PORT || "587", 10);
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  if (!notifyEmail || !smtpHost || !smtpUser || !smtpPass) return;

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: { user: smtpUser, pass: smtpPass },
  });

  await transporter.sendMail({
    from: smtpUser,
    to: notifyEmail,
    subject: "New Trademark Dashboard Wait List",
    text: `New waitlist signup: ${newEmail}\n\nTime: ${new Date().toISOString()}`,
  });
}
