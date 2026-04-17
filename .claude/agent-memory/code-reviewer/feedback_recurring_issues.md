---
name: 반복 코드 이슈
description: 이 코드베이스에서 반복적으로 발견되는 안티패턴 및 개선 기회 목록
type: feedback
---

## 하드코딩 색상 (Major)

차트 및 상태 표시에 `#3b82f6`, `text-green-600`, `bg-red-100` 같은 직접 색상값 사용.
**Why:** TailwindCSS v4 CSS-first 원칙에서는 CSS 변수 기반 색상을 globals.css에 선언하고 Tailwind 클래스로 참조해야 함.
**How to apply:** 차트는 `--color-chart-N` 변수 참조, 상태 색상은 `--color-success/warning/error` 변수 추가 후 사용.

## 버전 텍스트 불일치 (Minor)

layout.tsx metadata, footer.tsx, feature-grid.tsx에 "v15" 표기가 남아 있고 실제 패키지는 16.2.3.
**Why:** 버전 업그레이드 후 텍스트 동기화 누락.
**How to apply:** 버전 문자열을 상수로 관리하거나, package.json에서 동적으로 읽는 방식 고려.

## setTimeout 사이드이펙트 누수 (Minor)

form-gallery.tsx의 `setTimeout(() => setIsSubmitted(false), 5000)`에 cleanup 없음.
**Why:** 컴포넌트 언마운트 후 setState 호출로 메모리 누수 및 경고 발생 가능.
**How to apply:** useEffect + clearTimeout 패턴 또는 Sonner toast로 대체.

## 설정 폼과 실제 상태 비연동 (Major)

settings-form.tsx AppearanceTab의 theme/language 로컬 useState가 next-themes 및 실제 앱 상태와 연동되지 않아 UX 불일치.
**Why:** 예시 컴포넌트이지만 사용자가 혼동할 수 있음.
**How to apply:** useTheme() 훅으로 실제 테마 연동 또는 "데모 전용" 안내 추가.
