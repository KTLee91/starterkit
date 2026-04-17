---
name: 프로젝트 아키텍처 패턴
description: Next.js 16 스타터킷의 컴포넌트 구조, 스타일링 패턴, 기술 스택, 알려진 설계 결정
type: project
---

## 기술 스택 (2026-04-15 기준)

- Next.js 16.2.3 + React 19.2.4 + TypeScript strict
- TailwindCSS v4 (CSS-first, tailwind.config.js 없음, globals.css @theme inline 블록)
- shadcn/ui v4 — Base UI(@base-ui/react) 기반으로 Radix UI 대체
- Zod v4.3.6 폼 검증 (react-hook-form은 설치만 되어 있고 실제 사용 없음)
- next-themes 다크모드 (attribute="class")
- Sonner 토스트 (useTheme 기반 테마 연동)
- lucide-react 아이콘, recharts 차트, @tanstack/react-table

## 디렉토리 구조

- src/app/ — App Router 페이지 (Server Component 기본)
- src/components/ui/ — shadcn/ui 기본 컴포넌트
- src/components/layout/ — Header, Footer, Sidebar
- src/components/theme/ — ThemeProvider, ThemeToggle
- src/components/examples/ — 예시 컴포넌트 (auth-form, form-gallery, dashboard-content, settings-form 등)
- src/lib/utils.ts — cn() 유틸
- src/types/index.ts — NavItem, SidebarNavItem, DynamicParams 공용 타입

## 설계 패턴

- 폼 검증: FormData 기반 + Zod.parse() + error.issues 순회, useState<Record<string,string>> 에러 상태
- 색상: OKLch 색상 공간, CSS 변수로 라이트/다크 모드 분리
- 차트 색상: hardcoded hex (#3b82f6, #10b981) — CSS 변수 미활용

## 알려진 이슈 (리뷰 2026-04-15)

- layout.tsx metadata에 "v15" 텍스트가 있어 실제 버전(16)과 불일치
- Footer에 "v15" 텍스트 하드코딩
- feature-grid.tsx에 "Next.js 15" 텍스트 하드코딩
- dashboard-content.tsx 차트 색상이 CSS 변수 미사용 (TailwindCSS v4 원칙 위반)
- faq-section.tsx Accordion key에 index 사용 (고유 ID 권장)
- settings-form.tsx AppearanceTab의 theme 상태가 next-themes useTheme()과 연동되지 않음
- form-gallery.tsx CardTitle에 "react-hook-form + zod" 표기되어 있으나 실제로는 Zod만 사용
- auth-form.tsx의 "비밀번호 찾기", 이용약관 링크가 href="#" 플레이스홀더
- header.tsx SheetTrigger에 asChild 없이 직접 className으로 버튼 스타일 적용 (접근성 개선 여지)
- ThemeToggle Moon 아이콘에 position:absolute 미적용 (겹침 레이아웃 의존)
