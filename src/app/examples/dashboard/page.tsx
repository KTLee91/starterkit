import type { Metadata } from "next";
import { Sidebar } from "@/components/layout/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Activity,
  DollarSign,
  ShoppingCart,
  Users,
  TrendingUp,
  TrendingDown,
  Download,
} from "lucide-react";

export const metadata: Metadata = {
  title: "대시보드",
};

const metrics = [
  {
    title: "총 매출",
    value: "₩45,231,890",
    icon: DollarSign,
    change: "+20.1%",
    isPositive: true,
  },
  {
    title: "구독자",
    value: "+2,350",
    icon: Users,
    change: "+180.1%",
    isPositive: true,
  },
  {
    title: "판매",
    value: "+12,234",
    icon: ShoppingCart,
    change: "+19%",
    isPositive: true,
  },
  {
    title: "활성 사용자",
    value: "+573",
    icon: Activity,
    change: "+201",
    isPositive: true,
  },
];

const chartData = [
  { name: "1월", revenue: 4000, visitors: 2400 },
  { name: "2월", revenue: 3000, visitors: 1398 },
  { name: "3월", revenue: 2000, visitors: 9800 },
  { name: "4월", revenue: 2780, visitors: 3908 },
  { name: "5월", revenue: 1890, visitors: 4800 },
  { name: "6월", revenue: 2390, visitors: 3800 },
  { name: "7월", revenue: 3490, visitors: 4300 },
];

const recentSales = [
  {
    id: 1,
    name: "김민수",
    email: "minsu@example.com",
    amount: "₩1,999,000",
    status: "완료",
  },
  {
    id: 2,
    name: "이지은",
    email: "jieun@example.com",
    amount: "₩399,000",
    status: "완료",
  },
  {
    id: 3,
    name: "박준혁",
    email: "junhyuk@example.com",
    amount: "₩299,000",
    status: "처리중",
  },
  {
    id: 4,
    name: "최수진",
    email: "sujin@example.com",
    amount: "₩99,000",
    status: "완료",
  },
  {
    id: 5,
    name: "정다영",
    email: "dayoung@example.com",
    amount: "₩139,000",
    status: "취소",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "완료":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
    case "처리중":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
    case "취소":
      return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
  }
};

export default function DashboardPage() {
  return (
    <div className="flex h-[calc(100vh-3.5rem)]">
      {/* 사이드바 */}
      <Sidebar />

      {/* 메인 콘텐츠 */}
      <main className="flex-1 overflow-y-auto bg-muted/30">
        <div className="p-6 space-y-8">
          {/* 헤더 */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">대시보드</h1>
              <p className="text-sm text-muted-foreground">
                2024년 1월 1일 - 2024년 1월 31일
              </p>
            </div>
            <Button className="gap-2">
              <Download className="h-4 w-4" />
              리포트 다운로드
            </Button>
          </div>

          {/* 메트릭 카드 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {metrics.map((metric) => {
              const Icon = metric.icon;
              const TrendIcon = metric.isPositive ? TrendingUp : TrendingDown;
              const trendColor = metric.isPositive
                ? "text-green-600 dark:text-green-400"
                : "text-red-600 dark:text-red-400";

              return (
                <Card key={metric.title}>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      {metric.title}
                    </CardTitle>
                    <Icon className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="text-2xl font-bold">{metric.value}</div>
                    <div className="flex items-center gap-1">
                      <TrendIcon className={`h-4 w-4 ${trendColor}`} />
                      <span className={`text-xs font-medium ${trendColor}`}>
                        {metric.change}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* 차트 섹션 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* 월별 매출 */}
            <Card>
              <CardHeader>
                <CardTitle>월별 매출</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="revenue" fill="#3b82f6" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* 방문자 추이 */}
            <Card>
              <CardHeader>
                <CardTitle>방문자 추이</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="visitors"
                      stroke="#10b981"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* 최근 판매 */}
          <Card>
            <CardHeader>
              <CardTitle>최근 판매</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentSales.map((sale) => (
                  <div key={sale.id} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>{sale.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">{sale.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {sale.email}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge className={getStatusColor(sale.status)}>
                        {sale.status}
                      </Badge>
                      <span className="text-sm font-medium">{sale.amount}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
