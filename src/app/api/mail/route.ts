import { NextResponse } from "next/server";
import * as nodeMailer from "nodemailer";

export async function POST(request: Request) {
  const res = await request.json();

  const transporter = nodeMailer.createTransport({
    service: "gmail",
    auth: { user: process.env.AUTH_USER, pass: process.env.AUTH_PASSWORD },
  });

  const mailOptions = {
    to: res.email,
    subject: res.subject,
    html: `
      가입확인 버튼를 누르시면 가입 인증이 완료됩니다.<br/>
      <form action="#" method="POST">
        <button>가입확인</button>
      </form>
      `,
  };
  await transporter.sendMail(mailOptions);

  return NextResponse.json({ res });
}
