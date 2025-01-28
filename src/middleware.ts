import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  const isApiRoute = request.nextUrl.pathname.startsWith('/api/evaluate');

  // API 요청인 경우
  if (isApiRoute) {
    if (!token) {
      // 비인증 사용자의 경우 사용량 체크
      const ip = request.ip || request.headers.get('x-forwarded-for') || '';
      const usageKey = `usage:${ip}`;

      // Redis나 다른 저장소에서 사용량 체크 (여기서는 예시로 Response 헤더 사용)
      const currentUsage = parseInt(
        request.headers.get('x-usage-count') || '0',
      );

      if (currentUsage >= 10) {
        return NextResponse.json(
          {
            error:
              '무료 사용량을 모두 소진했습니다. 로그인하여 계속 사용하세요.',
          },
          { status: 429 },
        );
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/api/evaluate/:path*'],
};
