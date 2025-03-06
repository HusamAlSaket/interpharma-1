import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, phone, topic, message } = await req.json();

    if (!email || !message) {
      return NextResponse.json({ message: "Email and message are required" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER as string,
        pass: process.env.EMAIL_PASS as string,
      },
    });

    await transporter.sendMail({
      from: `${firstName} ${lastName} <${process.env.EMAIL_USER as string}>`,
      to: "ghostsora101@gmail.com",
      replyTo: email, // Allows replying to the user's email
      subject: `New Contact Form Submission: ${topic}`,
      text: `From: ${firstName} ${lastName} (${email}, ${phone})\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
  }
}
