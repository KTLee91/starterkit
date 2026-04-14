# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

Next.js 16 + React 19 + TypeScript + TailwindCSS v4 기반의 프로덕션 레디 스타터킷입니다. shadcn/ui 컴포넌트, next-themes를 통한 다크모드, 그리고 Zod 기반 폼 검증을 포함합니다.

**주의**: Next.js v16은 훈련 데이터와 다른 Breaking Changes를 포함하고 있습니다. 코드 작성 전에 `node_modules/next/dist/docs/`의 관련 가이드를 읽어야 합니다.

## 커맨드

```bash
# 개발 서버 실행 (기본: http://localhost:3000)
npm run dev

# 프로덕션 빌드
npm run build

# 빌드된 앱 실행
npm start

# 린트 체크
npm run lint
```

## 아키텍처 개요

### 디렉토리 구조

```
src/
├── app/                           # Next.js 15+ App Router
│   ├── globals.css               # TailwindCSS v4 설정 (유일한 CSS 설정)
│   ├── layout.tsx                # Root Layout (ThemeProvider, 레이아웃)
│   ├── page.tsx                  # 홈 페이지
│   ├── not-found.tsx             # 404 페이지
│   └── examples/
│       ├── components/page.tsx   # shadcn/ui 컴포넌트 갤러리
│       └── dashboard/page.tsx    # 대시보드 레이아웃 예시
├── components/
│   ├── ui/                       # shadcn/ui 기본 컴포넌트
│   ├── layout/                   # Header, Footer 같은 레이아웃 컴포넌트
│   ├── theme/                    # ThemeProvider, ThemeToggle
│   └── examples/                 # HeroSection, StatsCard 등 예시 컴포넌트
├── lib/
│   └── utils.ts                  # cn() 유틸리티 함수
└── types/
    └── index.ts                  # 공용 타입 정의
```

### 핵심 설계 원칙

#### 1. Server Components 기본 사용
- 모든 컴포넌트는 기본적으로 Server Component입니다.
- 상태나 이벤트 핸들러가 필요한 경우만 `"use client"` 추가합니다.

#### 2. TailwindCSS v4 (CSS-first)
- `tailwind.config.js` 파일을 **생성하지 마세요**.
- 모든 설정은 `src/app/globals.css`의 `@theme inline` 블록에 있습니다.
- 커스텀 색상은 `:root` 및 `.dark` 클래스의 CSS 변수로 관리합니다.
- OKLch 색상 공간 사용: `oklch(L C H)`

#### 3. 다크모드 (next-themes)
- `<ThemeProvider>`는 Root Layout에 설정되어 있습니다.
- `<ThemeToggle />` 컴포넌트로 테마 전환 가능합니다.
- 클라이언트 컴포넌트는 `useTheme()` 훅으로 현재 테마 접근 가능합니다.

#### 4. shadcn/ui 컴포넌트
- UI 컴포넌트는 `src/components/ui/` 디렉토리에 위치합니다.
- 새 컴포넌트 추가: `npx shadcn@latest add [component-name]`
- 컴포넌트 임포트는 `@/components/ui/[component]` 경로 사용합니다.

#### 5. 경로 별칭
- `@/`는 `src/` 디렉토리를 가리킵니다 (tsconfig.json에 설정).
- 예: `@/components/ui/button` → `src/components/ui/button`

### 타입스크립트 설정

- **Target**: ES2017
- **Strict Mode**: 활성화
- **JSX**: react-jsx (React 19)
- **Module Resolution**: bundler

## 주요 기술 스택

| 기술 | 버전 | 용도 |
|------|------|------|
| Next.js | 16.2.3 | App Router, 서버 렌더링 |
| React | 19.2.4 | UI 라이브러리 |
| TypeScript | ^5 | 타입 안전성 |
| TailwindCSS | ^4 | 유틸리티 CSS (CSS-first) |
| shadcn/ui | ^4.2.0 | 접근성 기반 UI 컴포넌트 |
| next-themes | ^0.4.6 | 다크모드 관리 |
| Base UI | ^1.3.0 | 무스타일드 컴포넌트 (Radix 대체) |
| lucide-react | ^1.8.0 | SVG 아이콘 (1000+ 종류) |
| Zod | ^4.3.6 | 폼 검증 및 데이터 파싱 |
| Sonner | ^2.0.7 | 토스트 알림 |
| react-hook-form | ^7.72.1 | 폼 상태 관리 (선택사항) |
| recharts | ^3.8.0 | 반응형 차트 라이브러리 |
| @tanstack/react-table | ^8.21.3 | 고급 테이블 컴포넌트 |

## Next.js 15/16 Breaking Changes

### 주의사항

1. **동적 라우트 params & searchParams**
   - `params`와 `searchParams`는 이제 Promise입니다.
   - 사용 전 `await` 필수: `const params = await props.params`

2. **일부 API 변경**
   - 문서: `node_modules/next/dist/docs/` 참조
   - Deprecation 경고를 주의 깊게 확인하세요.

3. **PostCSS 설정**
   - PostCSS는 `postcss.config.mjs`에 설정되어 있습니다.
   - `@tailwindcss/postcss` 플러그인 사용.

## 스타일링 가이드

### cn() 유틸리티 사용
```tsx
import { cn } from "@/lib/utils"

// Tailwind 클래스 병합
const buttonClass = cn(
  "px-4 py-2 rounded",
  isActive && "bg-primary text-white",
  className // 외부에서 전달된 className
)
```

### 커스텀 색상 추가
`src/app/globals.css`에서:
```css
:root {
  --your-color: oklch(0.5 0.1 45);
}

.dark {
  --your-color: oklch(0.8 0.1 45);
}

@theme inline {
  --color-your-color: var(--your-color);
}
```

그 후 Tailwind 클래스 사용: `bg-your-color`

## 흔한 작업

### 새로운 shadcn/ui 컴포넌트 추가
```bash
npx shadcn@latest add [component-name]
```
예: `npx shadcn@latest add dialog`, `npx shadcn@latest add dropdown-menu`

### 새로운 페이지 생성
1. `src/app/[page-name]/page.tsx` 생성
2. React Server Component로 작성 (필요시 `"use client"` 추가)
3. 레이아웃이 필요하면 `src/app/[page-name]/layout.tsx` 생성

### 새로운 컴포넌트 생성
- 재사용 가능한 UI: `src/components/ui/`
- 레이아웃: `src/components/layout/`
- 페이지별 예시: `src/components/examples/`
- 기타: `src/components/[feature]/`

### 클라이언트 기능 (상태, 이벤트)
```tsx
"use client"

import { useState } from "react"
import { useTheme } from "next-themes"

export default function MyComponent() {
  const [count, setCount] = useState(0)
  const { theme, setTheme } = useTheme()
  // ...
}
```

## 코드 품질

- **ESLint**: Next.js 기본 규칙 + TypeScript
- **린트 명령**: `npm run lint`
- **TypeScript**: strict mode 활성화

## 배포

### Vercel (추천)
```bash
npm install -g vercel
vercel
```

### Docker
Dockerfile을 추가하여 Docker 이미지 빌드 가능.

## 메타데이터 & SEO

Root layout에서 `metadata` 객체로 설정:
```tsx
export const metadata: Metadata = {
  title: { template: "%s | Site Name", default: "Home" },
  description: "페이지 설명",
}
```

## 폰트 설정

Google Fonts (Geist)가 기본으로 설정되어 있습니다:
- `--font-geist-sans`: 본문 폰트
- `--font-geist-mono`: 코드 폰트

커스텀 폰트 사용 시 `src/app/layout.tsx` 수정.

## 폼 처리 및 검증 가이드

### Zod 기반 폼 검증 패턴

폼 검증은 **Zod만 사용**하는 것을 권장합니다. react-hook-form은 선택사항입니다.

```tsx
"use client";

import { useState } from "react";
import * as z from "zod";
import { toast } from "sonner";

// 1. Zod 스키마 정의
const loginSchema = z.object({
  email: z.string().email("올바른 이메일을 입력해주세요"),
  password: z.string().min(6, "비밀번호는 최소 6자 이상이어야 합니다"),
});

export default function LoginForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  // 2. FormEvent에서 FormData 추출
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      // 3. Zod로 검증
      loginSchema.parse({ email, password });
      
      // 4. 성공 처리
      toast.success("로그인 성공!");
      (e.currentTarget as HTMLFormElement).reset();
    } catch (error) {
      // 5. 오류 처리
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.issues.forEach((issue) => {
          if (issue.path[0]) {
            fieldErrors[issue.path[0] as string] = issue.message;
          }
        });
        setErrors(fieldErrors);
      }
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input name="email" type="email" required />
      {errors.email && <p className="text-red-500">{errors.email}</p>}
      
      <input name="password" type="password" required />
      {errors.password && <p className="text-red-500">{errors.password}</p>}
      
      <button type="submit">로그인</button>
    </form>
  );
}
```

### 중요 주의사항

- **폼 리셋**: `(e.currentTarget as HTMLFormElement).reset()` 사용
- **오류 표시**: `error.issues` 배열로 필드별 오류 순회
- **타입 안전성**: `z.infer<typeof schema>` 사용 권장

## Sonner 토스트 알림

```tsx
import { toast } from "sonner";

// 기본 알림
toast("메시지");

// 성공
toast.success("성공했습니다!");

// 오류
toast.error("오류가 발생했습니다.");

// 로딩
const promise = async () => { /* ... */ };
toast.promise(promise, {
  loading: "로딩중...",
  success: "완료!",
  error: "실패했습니다.",
});
```

## Playwright MCP를 이용한 오류 검증

브라우저 콘솔 오류와 UI 렌더링을 확인하려면:

```bash
# 1. 개발 서버 실행
npm run dev

# 2. Playwright MCP로 페이지 방문 및 오류 검증
# Claude Code에서 다음 도구 사용:
# - mcp__playwright__browser_navigate: 페이지 이동
# - mcp__playwright__browser_console_messages: 콘솔 오류 확인
# - mcp__playwright__browser_snapshot: 페이지 구조 확인
```

모든 페이지에서 콘솔 오류(level: "error")가 없어야 합니다.

## 예제 컴포넌트

### 인증 폼 (`src/components/examples/auth-form.tsx`)
- 로그인/회원가입 탭 폼
- Zod 기반 이메일/비밀번호 검증
- 비밀번호 일치 확인 (refine 사용)

### 폼 갤러리 (`src/components/examples/form-gallery.tsx`)
- 다양한 폼 입력 컴포넌트 예시
- 커스텀 오류 메시지 처리
- FormData 기반 검증

### 대시보드 콘텐츠 (`src/components/examples/dashboard-content.tsx`)
- Recharts를 사용한 차트 예시
- 반응형 그리드 레이아웃
- 클라이언트 컴포넌트 (`"use client"`)

### 설정 폼 (`src/components/examples/settings-form.tsx`)
- 탭 기반 설정 UI
- 프로필, 알림, 보안 탭
- 복합 폼 상태 관리

## 참고 자료

- [Next.js 16 Documentation](https://nextjs.org/docs)
- [TailwindCSS v4 Guide](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com)
- [Zod Documentation](https://zod.dev)
- [Sonner Toast](https://sonner.emilkowal.ski)
- [next-themes GitHub](https://github.com/pacocoursey/next-themes)
