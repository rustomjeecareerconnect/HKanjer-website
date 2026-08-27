import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;
    
    // Validate
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }
    
    // In production, integrate with email service (e.g., Resend, SendGrid, or Formspree)
    // For now, log and return success
    console.log('Contact form submission:', { name, email, subject, message });
    
    return NextResponse.json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
