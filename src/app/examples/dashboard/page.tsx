import type { Metadata } from "next";
import { DashboardContent } from "@/components/examples/dashboard-content";

export const metadata: Metadata = {
  title: "대시보드",
};

export default function DashboardPage() {
  return <DashboardContent />;
}
