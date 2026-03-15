import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    // Validate inputs
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Hiredin Placements <onboarding@resend.dev>',
      to: 'hr@hiredinplacements.com',
      subject: `New Inquiry from ${name} - Hiredin Placements`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(to right, #dc2626, #1f2937); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; font-size: 24px;">New Inquiry Received</h1>
          </div>
          <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px;">
            <p style="margin: 15px 0; font-size: 14px;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 15px 0; font-size: 14px;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #dc2626; text-decoration: none;">${email}</a></p>
            <p style="margin: 15px 0; font-size: 14px;"><strong>Phone:</strong> <a href="tel:${phone}" style="color: #dc2626; text-decoration: none;">${phone}</a></p>
            <div style="margin: 20px 0; padding: 15px; background: white; border-left: 4px solid #dc2626; border-radius: 4px;">
              <p style="margin: 0; font-weight: bold; font-size: 14px;">Message:</p>
              <p style="margin: 10px 0; color: #374151; font-size: 14px; white-space: pre-wrap;">${message}</p>
            </div>
            <p style="margin-top: 30px; font-size: 12px; color: #6b7280; border-top: 1px solid #e5e7eb; padding-top: 20px;">
              This is an automated email from Hiredin Placements website contact form.
            </p>
          </div>
        </div>
      `,
      replyTo: email,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email. Please try again.' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Your inquiry has been sent successfully. We will contact you soon!',
        id: data?.id,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email. Please try again.' },
      { status: 500 }
    )
  }
}
