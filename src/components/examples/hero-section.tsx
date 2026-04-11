import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="flex flex-col items-center text-center py-20 gap-6">
      <Badge variant="secondary">Next.js v15 + TailwindCSS v4</Badge>
      <h1 className="text-5xl font-bold tracking-tight max-w-3xl">
        빠르게 시작하는 <span className="text-primary">모던 웹</span> 개발
      </h1>
      <p className="text-xl text-muted-foreground max-w-2xl">
        Next.js 15, TailwindCSS v4, shadcn/ui를 사용한 프로덕션 레디 스타터킷.
        다크모드, TypeScript, App Router 기본 포함.
      </p>
      <div className="flex gap-3 flex-wrap justify-center">
        <Link
          href="/examples/components"
          className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 h-10"
        >
          컴포넌트 보기 <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
        <Link
          href="/examples/dashboard"
          className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground h-10"
        >
          대시보드 보기
        </Link>
      </div>
    </section>
  );
}
