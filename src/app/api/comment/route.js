import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const formData = await request.formData();
    const comment = formData.get('comment');
    const name = formData.get('name');
    const email = formData.get('email');
    const captcha = formData.get('captcha');

    // In a real app, you'd save this to a database or send an email
    console.log('New comment submission:', { comment, name, email, captcha });

    // For now, just return success
    return NextResponse.json({ success: true, message: 'Comment posted successfully!' });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Error processing comment' }, { status: 500 });
  }
}
