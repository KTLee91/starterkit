import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { AlertCircle, Check, Info, AlertTriangle } from "lucide-react";
import { FormGallery } from "@/components/examples/form-gallery";

export const metadata: Metadata = {
  title: "컴포넌트 갤러리",
};

export default function ComponentsPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <div>
        <h1 className="text-3xl font-bold">컴포넌트 갤러리</h1>
        <p className="text-muted-foreground">
          모든 shadcn/ui 컴포넌트와 사용 예시입니다
        </p>
      </div>

      {/* Button */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Button</h2>
        <div className="flex flex-wrap gap-3">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button disabled>Disabled</Button>
          <Button size="sm">Small</Button>
          <Button size="lg">Large</Button>
        </div>
      </section>

      {/* Badge */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Badge</h2>
        <div className="flex flex-wrap gap-3">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
        </div>
      </section>

      {/* Input */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Input</h2>
        <div className="max-w-sm space-y-2">
          <Input placeholder="이메일 주소 입력..." type="email" />
          <Input placeholder="비밀번호 입력..." type="password" />
          <Input placeholder="비활성화됨" disabled />
        </div>
      </section>

      {/* Card */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Card</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: "성공", Icon: Check, color: "text-green-600" },
            { label: "정보", Icon: Info, color: "text-blue-600" },
            { label: "오류", Icon: AlertCircle, color: "text-red-600" },
          ].map(({ label, Icon, color }) => (
            <Card key={label}>
              <CardHeader className="flex flex-row items-center gap-2 pb-2">
                <Icon className={`h-4 w-4 ${color}`} />
                <CardTitle className="text-sm">{label}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {label} 상태의 카드 예시입니다.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Alert */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Alert</h2>
        <div className="space-y-3 max-w-lg">
          <Alert>
            <Info className="h-4 w-4" />
            <AlertDescription>
              정보 메시지: 사용자에게 알려줄 일반적인 정보입니다.
            </AlertDescription>
          </Alert>
          <Alert>
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              경고 메시지: 주의가 필요한 상황입니다.
            </AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              오류 메시지: 문제가 발생했습니다.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Checkbox & Switch */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Checkbox & Switch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-lg">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Checkbox</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {["옵션 1", "옵션 2", "옵션 3"].map((option) => (
                <div key={option} className="flex items-center gap-2">
                  <Checkbox id={option} />
                  <Label htmlFor={option} className="font-normal">
                    {option}
                  </Label>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Switch</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {["알림 활성", "다크모드", "자동저장"].map((option) => (
                <div key={option} className="flex items-center justify-between">
                  <Label className="font-normal">{option}</Label>
                  <Switch />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Progress */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Progress</h2>
        <div className="space-y-3 max-w-lg">
          <div>
            <p className="text-sm text-muted-foreground mb-2">25%</p>
            <Progress value={25} />
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-2">50%</p>
            <Progress value={50} />
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-2">100%</p>
            <Progress value={100} />
          </div>
        </div>
      </section>

      {/* Skeleton */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Skeleton (로딩 상태)</h2>
        <div className="max-w-sm space-y-4">
          <div className="flex gap-3">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2 flex-1">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Tabs</h2>
        <Tabs defaultValue="preview" className="max-w-lg">
          <TabsList>
            <TabsTrigger value="preview">미리보기</TabsTrigger>
            <TabsTrigger value="code">코드</TabsTrigger>
            <TabsTrigger value="docs">문서</TabsTrigger>
          </TabsList>
          <TabsContent value="preview" className="p-4 border rounded-lg mt-2">
            <div className="space-y-2">
              <p className="text-sm font-medium">탭 컨텐츠 미리보기</p>
              <p className="text-sm text-muted-foreground">
                이곳에 탭별 콘텐츠를 표시합니다.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="code" className="p-4 border rounded-lg mt-2">
            <code className="text-sm font-mono">
              {`<Tabs>\n  <TabsList>\n    <TabsTrigger>탭1</TabsTrigger>\n  </TabsList>\n</Tabs>`}
            </code>
          </TabsContent>
          <TabsContent value="docs" className="p-4 border rounded-lg mt-2">
            <p className="text-sm">
              Tabs 컴포넌트는 여러 콘텐츠를 탭으로 구분해 표시합니다.
            </p>
          </TabsContent>
        </Tabs>
      </section>

      {/* Form */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Form</h2>
        <p className="text-muted-foreground">
          react-hook-form + zod를 사용한 실시간 검증 예시
        </p>
        <FormGallery />
      </section>
    </div>
  );
}
