import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { usageTracker } from '@/lib/usage-store';

export async function GET(request: Request) {
  const session = await getServerSession();
  const ip = request.headers.get('x-forwarded-for') || 'unknown';

  const identifier = session ? `user:${session.user?.id}` : `ip:${ip}`;
  const count = usageTracker.getCount(identifier);

  return NextResponse.json({ count });
}
