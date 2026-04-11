import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Palette, Shield, Cpu, Globe, Moon, Code } from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "App Router",
    description: "Server Components, 비동기 params 패턴 적용",
    badge: "Next.js 15",
  },
  {
    icon: Palette,
    title: "CSS-First 설정",
    description: "globals.css 단일 파일로 테마 전체 관리",
    badge: "TailwindCSS v4",
  },
  {
    icon: Shield,
    title: "타입 안전성",
    description: "TypeScript strict mode, 완전한 타입 정의",
    badge: "TypeScript",
  },
  {
    icon: Moon,
    title: "다크모드",
    description: "next-themes + class 기반 다크모드 내장",
    badge: "내장",
  },
  {
    icon: Globe,
    title: "shadcn/ui",
    description: "50+ 접근성 기반 컴포넌트, 완전 커스터마이징 가능",
    badge: "Radix UI",
  },
  {
    icon: Code,
    title: "lucide-react",
    description: "1000+ SVG 아이콘, Tree-shaking 최적화",
    badge: "아이콘",
  },
];

export function FeatureGrid() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6 text-center">포함된 기능</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((feature) => (
          <Card
            key={feature.title}
            className="hover:border-primary/50 transition-colors"
          >
            <CardHeader>
              <div className="flex items-center justify-between">
                <feature.icon className="h-6 w-6 text-primary" />
                <Badge variant="secondary">{feature.badge}</Badge>
              </div>
              <CardTitle className="mt-3">{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}
