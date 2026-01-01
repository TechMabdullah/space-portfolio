import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  const event = await req.json()

  if (event.type === "email.received") {
    const email = await resend.emails.receiving.get(
      event.data.email_id
    )

    console.log("Inbound email:", email)
  }

  return NextResponse.json({ ok: true })
}
