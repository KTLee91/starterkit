import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertCircle, Check, Info } from "lucide-react";

export const metadata: Metadata = {
  title: "컴포넌트 갤러리",
};

export default function ComponentsPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <h1 className="text-3xl font-bold">컴포넌트 갤러리</h1>

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

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Badge</h2>
        <div className="flex flex-wrap gap-3">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Input</h2>
        <div className="max-w-sm space-y-2">
          <Input placeholder="이메일 주소 입력..." type="email" />
          <Input placeholder="비밀번호 입력..." type="password" />
          <Input placeholder="비활성화됨" disabled />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Card</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: "성공", Icon: Check },
            { label: "정보", Icon: Info },
            { label: "오류", Icon: AlertCircle },
          ].map(({ label, Icon }) => (
            <Card key={label}>
              <CardHeader className="flex flex-row items-center gap-2 pb-2">
                <Icon className="h-4 w-4" />
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

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Tabs</h2>
        <Tabs defaultValue="preview" className="max-w-lg">
          <TabsList>
            <TabsTrigger value="preview">미리보기</TabsTrigger>
            <TabsTrigger value="code">코드</TabsTrigger>
            <TabsTrigger value="docs">문서</TabsTrigger>
          </TabsList>
          <TabsContent value="preview" className="p-4 border rounded-lg mt-2">
            <p className="text-sm">컴포넌트 미리보기 영역입니다.</p>
          </TabsContent>
          <TabsContent value="code" className="p-4 border rounded-lg mt-2">
            <code className="text-sm font-mono">{"<Button>클릭</Button>"}</code>
          </TabsContent>
          <TabsContent value="docs" className="p-4 border rounded-lg mt-2">
            <p className="text-sm">컴포넌트 문서 영역입니다.</p>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}
