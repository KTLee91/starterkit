import type { Metadata } from "next";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Lock } from "lucide-react";
import { AuthForm } from "@/components/examples/auth-form";

export const metadata: Metadata = {
  title: "인증",
};

export default function AuthPage() {
  return (
    <div className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center px-4 py-12">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Lock className="h-6 w-6 text-primary" />
            </div>
          </div>
          <CardTitle>계정 접근</CardTitle>
          <CardDescription>로그인 또는 새 계정을 만드세요</CardDescription>
        </CardHeader>

        <CardContent>
          <AuthForm />
        </CardContent>
      </Card>
    </div>
  );
}
