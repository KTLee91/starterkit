import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Activity, DollarSign, ShoppingCart, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "대시보드",
};

const metrics = [
  {
    title: "총 매출",
    value: "₩45,231,890",
    icon: DollarSign,
    change: "+20.1%",
  },
  { title: "구독자", value: "+2,350", icon: Users, change: "+180.1%" },
  { title: "판매", value: "+12,234", icon: ShoppingCart, change: "+19%" },
  { title: "활성 사용자", value: "+573", icon: Activity, change: "+201" },
];

const recentSales = [
  { name: "김민수", email: "minsu@example.com", amount: "₩1,999,000" },
  { name: "이지은", email: "jieun@example.com", amount: "₩39,000" },
  { name: "박준혁", email: "junhyuk@example.com", amount: "₩299,000" },
  { name: "최수진", email: "sujin@example.com", amount: "₩99,000" },
  { name: "정다영", email: "dayoung@example.com", amount: "₩39,000" },
];

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">대시보드</h1>
        <Button>리포트 다운로드</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric) => (
          <Card key={metric.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {metric.title}
              </CardTitle>
              <metric.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <Badge variant="secondary" className="mt-1">
                {metric.change} 전월 대비
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>최근 판매</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {recentSales.map((sale) => (
            <div key={sale.email} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarFallback>{sale.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">{sale.name}</p>
                  <p className="text-xs text-muted-foreground">{sale.email}</p>
                </div>
              </div>
              <span className="text-sm font-medium">{sale.amount}</span>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
