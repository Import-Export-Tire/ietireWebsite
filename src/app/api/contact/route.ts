import { NextRequest, NextResponse } from 'next/server';
import { ConvexHttpClient } from 'convex/browser';
import { anyApi } from 'convex/server';

const convex = new ConvexHttpClient(
  process.env.NEXT_PUBLIC_CONVEX_URL || "https://outstanding-dalmatian-787.convex.cloud"
);

export async function POST(request: NextRequest) {
  try {
    const { name, business, email, phone, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Submit to IECentral's contactMessages table
    await convex.mutation(anyApi.contactMessages.submit, {
      name,
      email,
      phone: phone || undefined,
      company: business || undefined,
      subject: `Website Inquiry from ${name}${business ? ` - ${business}` : ""}`,
      message,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error submitting contact message:', error);
    return NextResponse.json(
      { error: 'Failed to submit message' },
      { status: 500 }
    );
  }
}
