"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(formData: FormData) {
  try {
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const message = formData.get("message") as string

    if (!name || !email || !message) {
      throw new Error("Missing fields")
    }

const { error } = await resend.emails.send({
  from: "Portfolio <onboarding@resend.dev>",
  to: [process.env.EMAIL_TO!],
  replyTo: email,
  subject: `New message from ${name}`,
  html: `
    <p><b>Name:</b> ${name}</p>
    <p><b>Email:</b> ${email}</p>
    <p>${message}</p>
  `,
})

    if (error) {
      console.error(error)
      return { success: false }
    }

    return { success: true }
  } catch (err) {
    console.error(err)
    return { success: false }
  }
}
