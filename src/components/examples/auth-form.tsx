"use client";

import { useState } from "react";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Mail } from "lucide-react";
import { toast } from "sonner";

// 로그인 스키마
const loginSchema = z.object({
  email: z.string().email("올바른 이메일을 입력해주세요"),
  password: z.string().min(6, "비밀번호는 최소 6자 이상이어야 합니다"),
});

// 회원가입 스키마
const signupSchema = z.object({
  name: z.string().min(2, "이름은 최소 2자 이상이어야 합니다"),
  email: z.string().email("올바른 이메일을 입력해주세요"),
  password: z.string().min(6, "비밀번호는 최소 6자 이상이어야 합니다"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "비밀번호가 일치하지 않습니다",
  path: ["confirmPassword"],
});

function LoginForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onLoginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      loginSchema.parse({ email, password });
      toast.success("로그인 성공!", {
        description: `${email}로 로그인되었습니다.`,
      });
      (e.currentTarget as HTMLFormElement).reset();
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
    <form onSubmit={onLoginSubmit} className="space-y-4">
      <div>
        <Label htmlFor="login-email">이메일</Label>
        <Input
          id="login-email"
          name="email"
          placeholder="you@example.com"
          type="email"
          className="mt-1"
        />
        {errors.email && (
          <p className="text-sm text-red-500 mt-1">{errors.email}</p>
        )}
      </div>

      <div>
        <div className="flex items-center justify-between">
          <Label htmlFor="login-password">비밀번호</Label>
          <a href="#" className="text-xs text-primary hover:underline">
            비밀번호 찾기
          </a>
        </div>
        <Input
          id="login-password"
          name="password"
          placeholder="••••••"
          type="password"
          className="mt-1"
        />
        {errors.password && (
          <p className="text-sm text-red-500 mt-1">{errors.password}</p>
        )}
      </div>

      <Button type="submit" className="w-full">
        로그인
      </Button>
    </form>
  );
}

function SignupForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSignupSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;

    try {
      signupSchema.parse({ name, email, password, confirmPassword });
      toast.success("회원가입 성공!", {
        description: `${email}로 계정이 생성되었습니다.`,
      });
      (e.currentTarget as HTMLFormElement).reset();
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
    <form onSubmit={onSignupSubmit} className="space-y-4">
      <div>
        <Label htmlFor="signup-name">이름</Label>
        <Input
          id="signup-name"
          name="name"
          placeholder="홍길동"
          className="mt-1"
        />
        {errors.name && (
          <p className="text-sm text-red-500 mt-1">{errors.name}</p>
        )}
      </div>

      <div>
        <Label htmlFor="signup-email">이메일</Label>
        <Input
          id="signup-email"
          name="email"
          placeholder="you@example.com"
          type="email"
          className="mt-1"
        />
        {errors.email && (
          <p className="text-sm text-red-500 mt-1">{errors.email}</p>
        )}
      </div>

      <div>
        <Label htmlFor="signup-password">비밀번호</Label>
        <Input
          id="signup-password"
          name="password"
          placeholder="••••••"
          type="password"
          className="mt-1"
        />
        {errors.password && (
          <p className="text-sm text-red-500 mt-1">{errors.password}</p>
        )}
      </div>

      <div>
        <Label htmlFor="signup-confirm">비밀번호 확인</Label>
        <Input
          id="signup-confirm"
          name="confirmPassword"
          placeholder="••••••"
          type="password"
          className="mt-1"
        />
        {errors.confirmPassword && (
          <p className="text-sm text-red-500 mt-1">{errors.confirmPassword}</p>
        )}
      </div>

      <p className="text-xs text-muted-foreground">
        가입함으로써{" "}
        <a href="#" className="underline hover:text-foreground">
          이용약관
        </a>
        과{" "}
        <a href="#" className="underline hover:text-foreground">
          개인정보 보호정책
        </a>
        에 동의합니다.
      </p>

      <Button type="submit" className="w-full">
        회원가입
      </Button>
    </form>
  );
}

export function AuthForm() {
  return (
    <Tabs defaultValue="login" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="login">로그인</TabsTrigger>
        <TabsTrigger value="signup">회원가입</TabsTrigger>
      </TabsList>

      <TabsContent value="login" className="space-y-4">
        <LoginForm />

        <Separator />

        <div className="space-y-2">
          <Button variant="outline" className="w-full" disabled>
            GitHub로 로그인
          </Button>
          <Button variant="outline" className="w-full" disabled>
            <Mail className="mr-2 h-4 w-4" />
            Google로 로그인
          </Button>
        </div>
      </TabsContent>

      <TabsContent value="signup">
        <SignupForm />
      </TabsContent>
    </Tabs>
  );
}
