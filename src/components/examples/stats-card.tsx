import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, Package, Zap } from "lucide-react";

const stats = [
  {
    title: "빌드 속도",
    value: "5x 빠름",
    icon: Zap,
    desc: "TailwindCSS v4 Lightning CSS",
  },
  { title: "컴포넌트", value: "50+", icon: Package, desc: "shadcn/ui 기반" },
  {
    title: "번들 크기",
    value: "최적화",
    icon: TrendingUp,
    desc: "Tree-shaking 지원",
  },
  {
    title: "타입 지원",
    value: "TypeScript",
    icon: Users,
    desc: "strict 모드 적용",
  },
];

export function StatsCard() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6 text-center">왜 이 스타터킷인가?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1">{stat.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
