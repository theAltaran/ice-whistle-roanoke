import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, quantity, color, notes } = body

    // Validate required fields
    if (!name || !quantity || !notes) {
      return NextResponse.json(
        { error: 'Name, quantity, and contact info are required' },
        { status: 400 }
      )
    }

    // Get email configuration from environment variables
    const SMTP_HOST = process.env.SMTP_HOST
    const SMTP_PORT = process.env.SMTP_PORT
    const SMTP_USER = process.env.SMTP_USER
    const SMTP_PASS = process.env.SMTP_PASS
    const EMAIL_FROM = process.env.EMAIL_FROM || SMTP_USER
    const EMAIL_TO = process.env.EMAIL_TO || 'icewhistleroanoke@gmail.com'

    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
      return NextResponse.json(
        { error: 'Email server not configured' },
        { status: 500 }
      )
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: parseInt(SMTP_PORT || '587'),
      secure: SMTP_PORT === '465',
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    })

    // Email content
    const mailOptions = {
      from: EMAIL_FROM,
      to: EMAIL_TO,
      subject: `Ice Whistle Request from ${name}`,
      text: `
New Ice Whistle Request:

Name: ${name}
Quantity Needed: ${quantity}
Preferred Color: ${color || 'None specified'}
Contact Info & How to Get Whistles: ${notes}

---
Sent from icewhistleroanoke.org
      `,
      html: `
<h2>New Ice Whistle Request</h2>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Quantity Needed:</strong> ${quantity}</p>
<p><strong>Preferred Color:</strong> ${color || 'None specified'}</p>
<p><strong>Contact Info & How to Get Whistles:</strong> ${notes}</p>
<hr>
<p><em>Sent from icewhistleroanoke.org</em></p>
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true, message: 'Request submitted successfully' })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send request' },
      { status: 500 }
    )
  }
}
