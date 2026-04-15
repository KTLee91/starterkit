"use client";

import { useState, useEffect, useRef } from "react";
import * as z from "zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// 폼 스키마
const contactSchema = z.object({
  name: z.string().min(2, "이름은 최소 2자 이상이어야 합니다"),
  email: z.string().email("올바른 이메일을 입력해주세요"),
  subject: z.string().min(1, "주제를 선택해주세요"),
  message: z.string().min(10, "메시지는 최소 10자 이상이어야 합니다"),
  subscribe: z.boolean().optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function FormGallery() {
  const [formData, setFormData] = useState<Partial<ContactFormValues>>({
    name: "",
    email: "",
    subject: "",
    message: "",
    subscribe: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const handleChange = (
    field: keyof ContactFormValues,
    value: string | boolean
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // 입력 시 해당 필드의 에러 제거
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setIsSubmitted(false);

    try {
      contactSchema.parse(formData);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "", subscribe: false });
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.issues.forEach((issue) => {
          if (issue.path[0]) {
            fieldErrors[issue.path[0] as string] = issue.message;
          }
        });
        setErrors(fieldErrors);
      }
    }
  };

  return (
    <Card className="max-w-2xl">
      <CardHeader>
        <CardTitle>폼 예시 (zod 유효성 검사)</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* 성공 메시지 */}
          {isSubmitted && (
            <div className="p-3 rounded-lg bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
              ✓ 폼이 성공적으로 검증되었습니다!
            </div>
          )}

          {/* 이름 입력 */}
          <div>
            <Label htmlFor="name">이름</Label>
            <Input
              id="name"
              placeholder="홍길동"
              value={formData.name || ""}
              onChange={(e) => handleChange("name", e.target.value)}
              className="mt-1"
            />
            {errors.name && (
              <p className="text-sm text-red-500 mt-1">{errors.name}</p>
            )}
          </div>

          {/* 이메일 입력 */}
          <div>
            <Label htmlFor="email">이메일</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email || ""}
              onChange={(e) => handleChange("email", e.target.value)}
              className="mt-1"
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">{errors.email}</p>
            )}
          </div>

          {/* 주제 선택 */}
          <div>
            <Label htmlFor="subject">주제</Label>
            <Select
              value={formData.subject || ""}
              onValueChange={(value) => {
                if (value) handleChange("subject", value);
              }}
            >
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="주제를 선택해주세요" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="bug">버그 리포트</SelectItem>
                <SelectItem value="feature">기능 요청</SelectItem>
                <SelectItem value="feedback">피드백</SelectItem>
                <SelectItem value="other">기타</SelectItem>
              </SelectContent>
            </Select>
            {errors.subject && (
              <p className="text-sm text-red-500 mt-1">{errors.subject}</p>
            )}
          </div>

          {/* 메시지 입력 */}
          <div>
            <Label htmlFor="message">메시지</Label>
            <Textarea
              id="message"
              placeholder="메시지를 입력해주세요 (최소 10자)"
              value={formData.message || ""}
              onChange={(e) => handleChange("message", e.target.value)}
              className="mt-1 min-h-[120px]"
            />
            {errors.message && (
              <p className="text-sm text-red-500 mt-1">{errors.message}</p>
            )}
          </div>

          {/* 체크박스 */}
          <div className="flex items-center gap-2">
            <Checkbox
              id="subscribe"
              checked={formData.subscribe || false}
              onCheckedChange={(checked) =>
                handleChange("subscribe", checked as boolean)
              }
            />
            <Label htmlFor="subscribe" className="font-normal">
              뉴스레터 구독하기
            </Label>
          </div>

          {/* 버튼 */}
          <div className="flex gap-2">
            <Button type="submit">제출</Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                setFormData({
                  name: "",
                  email: "",
                  subject: "",
                  message: "",
                  subscribe: false,
                });
                setErrors({});
              }}
            >
              초기화
            </Button>
          </div>

          {/* 폼 상태 표시 */}
          <div className="p-3 rounded-lg bg-muted">
            <p className="text-xs text-muted-foreground font-mono">
              현재 폼 데이터:
              <br />
              {JSON.stringify(formData, null, 2)}
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
