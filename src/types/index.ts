import type { LucideIcon } from "lucide-react";

// 네비게이션 아이템 타입
export interface NavItem {
  href: string;
  label: string;
  description?: string;
  icon?: LucideIcon;
}

// 사이드바 네비게이션 아이템 타입
export interface SidebarNavItem extends NavItem {
  icon: LucideIcon;
}

// 메타데이터 타입 (Next.js 15 동적 라우트용)
export type DynamicParams<
  T extends Record<string, string> = Record<string, string>
> = {
  params: Promise<T>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};
