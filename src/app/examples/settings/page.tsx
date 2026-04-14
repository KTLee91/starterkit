import type { Metadata } from "next";
import { SettingsForm } from "@/components/examples/settings-form";

export const metadata: Metadata = {
  title: "설정",
};

export default function SettingsPage() {
  return (
    <div className="min-h-[calc(100vh-3.5rem)] bg-muted/30 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">설정</h1>
          <p className="text-muted-foreground">계정 설정을 관리하세요</p>
        </div>

        <SettingsForm />
      </div>
    </div>
  );
}
