# Next.js v15 Starter Kit

빠른 웹 개발을 위한 프로덕션 레디 스타터킷입니다.

## 🚀 기술 스택

- **Next.js** v16 (App Router)
- **React** 19
- **TypeScript** - 완전한 타입 지원
- **TailwindCSS** v4 (CSS-first, 설정 파일 없음)
- **shadcn/ui** - 접근성 기반 UI 컴포넌트
- **lucide-react** - 1000+ SVG 아이콘
- **next-themes** - 다크모드 지원

## ✨ 포함 기능

- ✅ App Router with Server Components
- ✅ 다크모드/라이트모드 토글
- ✅ 반응형 레이아웃 (Header + Footer)
- ✅ 50+ shadcn/ui 컴포넌트
- ✅ TypeScript strict mode
- ✅ ESLint + Prettier
- ✅ Turbopack (고속 빌드)
- ✅ 프로덕션 최적화

## 📁 프로젝트 구조

```
src/
├── app/
│   ├── globals.css              # TailwindCSS v4 설정 (유일한 설정 파일)
│   ├── layout.tsx               # Root Layout
│   ├── page.tsx                 # 홈 페이지
│   ├── not-found.tsx            # 404 페이지
│   └── examples/
│       ├── components/
│       │   └── page.tsx         # 컴포넌트 갤러리
│       └── dashboard/
│           └── page.tsx         # 대시보드 예시
├── components/
│   ├── ui/                      # shadcn/ui 컴포넌트
│   ├── layout/                  # 레이아웃 컴포넌트
│   ├── theme/                   # 테마 관련 컴포넌트
│   └── examples/                # 예시 컴포넌트
├── lib/
│   └── utils.ts                 # cn() 유틸리티
└── types/
    └── index.ts                 # 타입 정의
```

## 🎯 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

`http://localhost:3000` 에서 확인하세요.

### 프로덕션 빌드

```bash
npm run build
npm start
```

### 타입 체크

```bash
npm run type-check
```

## 🎨 주요 페이지

- **홈** (`/`) - HeroSection, StatsCard, FeatureGrid
- **컴포넌트** (`/examples/components`) - shadcn/ui 컴포넌트 갤러리
- **대시보드** (`/examples/dashboard`) - 대시보드 레이아웃 예시
- **404** (`/nonexistent`) - 404 에러 페이지

## 🔧 설정

### TailwindCSS v4

모든 Tailwind 설정은 `src/app/globals.css`에서 관리됩니다:

```css
@import "tailwindcss";

@custom-variant dark (&:is(.dark *));

@theme inline {
  --color-primary: var(--primary);
  /* ... */
}

:root {
  --primary: oklch(0.205 0 0);
  /* ... */
}

.dark {
  --primary: oklch(0.985 0 0);
  /* ... */
}
```

**주의:** `tailwind.config.js` 파일을 생성하지 마세요. TailwindCSS v4는 CSS-first 방식입니다.

### 다크모드

`next-themes`를 사용하여 다크모드를 구현했습니다:

```tsx
<ThemeToggle />  // 테마 토글 버튼
```

## 📦 shadcn/ui 컴포넌트 추가

새로운 shadcn/ui 컴포넌트를 추가하려면:

```bash
npx shadcn@latest add [component-name]
```

예: `npx shadcn@latest add dialog`

## 🌍 배포

### Vercel (추천)

```bash
npm install -g vercel
vercel
```

### Docker

```bash
docker build -t nextjs-starter-kit .
docker run -p 3000:3000 nextjs-starter-kit
```

## 📝 라이선스

MIT

## 💡 팁

- `@/` 임포트 별칭을 사용하여 상대 경로 없이 컴포넌트를 임포트할 수 있습니다.
- `cn()` 유틸리티 함수를 사용하여 Tailwind 클래스를 결합할 수 있습니다.
- 모든 컴포넌트는 TypeScript로 작성되어 완전한 타입 안전성을 제공합니다.
- 동적 라우트에서는 `params`와 `searchParams`를 `Promise`로 처리해야 합니다. (Next.js 15 변경사항)

## 🚀 다음 단계

1. `src/app/page.tsx`를 수정하여 홈 페이지를 커스터마이징하세요.
2. `src/components/`에 새로운 컴포넌트를 추가하세요.
3. `src/app/globals.css`에서 테마 색상을 조정하세요.
4. 필요한 shadcn/ui 컴포넌트를 추가하세요.
5. 로직을 구현하고 배포하세요!
