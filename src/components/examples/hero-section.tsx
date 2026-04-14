import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const techStack = [
  "Next.js 16",
  "React 19",
  "TypeScript",
  "TailwindCSS v4",
  "Base UI",
  "lucide-react",
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-24 lg:py-32">
      {/* 배경 장식 요소 */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="flex flex-col items-center text-center gap-8">
        {/* 배지 */}
        <Badge variant="outline" className="border-primary/30 bg-primary/5">
          v16 + React 19 + TailwindCSS v4
        </Badge>

        {/* 메인 헤드라인 */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter max-w-4xl leading-tight">
          빠르게 시작하는
          <br />
          <span className="text-primary">모던 웹</span> 개발
        </h1>

        {/* 설명 */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
          모든 기능이 포함된 프로덕션 레디 스타터킷. 로그인, 대시보드, 폼 검증까지.
          지금 바로 시작하세요.
        </p>

        {/* CTA 버튼 */}
        <div className="flex gap-3 flex-wrap justify-center pt-2">
          <Link href="/examples/components">
            <Button size="lg" className="gap-2">
              컴포넌트 보기
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="/examples/dashboard">
            <Button size="lg" variant="outline">
              대시보드 보기
            </Button>
          </Link>
        </div>

        {/* 기술 스택 배지 행 */}
        <div className="pt-8 border-t border-border w-full">
          <p className="text-xs text-muted-foreground uppercase tracking-wide mb-4">
            기술 스택
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {techStack.map((tech) => (
              <Badge key={tech} variant="secondary" className="px-3 py-1">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
