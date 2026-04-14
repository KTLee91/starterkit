import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CtaSection() {
  return (
    <section className="rounded-2xl bg-primary text-primary-foreground px-6 md:px-12 py-12 md:py-16 text-center space-y-8">
      {/* 헤드라인 */}
      <div className="space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          지금 바로 시작하세요
        </h2>
        <p className="text-base md:text-lg opacity-90 max-w-2xl mx-auto">
          프로덕션 레디 스타터킷으로 몇 분 안에 모던 웹 프로젝트를 시작할 수 있습니다.
        </p>
      </div>

      {/* 코드 스니펫 */}
      <div className="bg-primary-foreground/10 rounded-lg p-4 md:p-6 text-left inline-block">
        <pre className="text-xs md:text-sm font-mono overflow-x-auto">
          <code className="text-primary-foreground/80">
            {`# Clone the repository\ngit clone <repository-url>\ncd claude-nextjs-starterkit\n\n# Install dependencies\nnpm install\n\n# Run development server\nnpm run dev`}
          </code>
        </pre>
      </div>

      {/* CTA 버튼 */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
          <Button
            size="lg"
            variant="outline"
            className="bg-primary-foreground/10 border-primary-foreground/30 hover:bg-primary-foreground/20 text-primary-foreground gap-2 w-full sm:w-auto"
          >
            GitHub에서 보기
          </Button>
        </Link>
        <Link href="/examples/dashboard">
          <Button
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 gap-2 w-full sm:w-auto"
          >
            데모 보기
            <ArrowRight className="h-5 w-5" />
          </Button>
        </Link>
      </div>

      {/* 추가 정보 */}
      <p className="text-xs md:text-sm opacity-75">
        완전 무료 • MIT 라이선스 • 상업적 사용 가능
      </p>
    </section>
  );
}
