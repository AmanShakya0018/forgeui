import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, rating, feedback } = body;
    const subject = "Feedback for ForgeUI from user";


    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    })
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: subject,
      text: feedback,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Rating:</strong> ${rating}</p>
        <p><strong>Feedback:</strong></p>
        <p>${feedback}</p>
      `
    };

    await transporter.sendMail(mailOptions);

    // console.log('contact form submitted', { name, email, subject, rating, feedback });


    return NextResponse.json({ message: 'Email sent successfully!' },
      { status: 200 }

    );
  } catch (error) {
    console.log('contact form error', error);

    return NextResponse.json({ message: 'Email failed to send!' },
      { status: 500 },
    );
  }
}