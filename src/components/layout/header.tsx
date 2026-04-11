import Link from "next/link";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const navigation = [
  { href: "/", label: "홈" },
  { href: "/examples/components", label: "컴포넌트" },
  { href: "/examples/dashboard", label: "대시보드" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center px-4">
        <Link href="/" className="flex items-center gap-2 font-bold">
          <span className="text-primary">Next.js</span>
          <span className="text-muted-foreground">Starter Kit</span>
        </Link>
        <Separator orientation="vertical" className="mx-4 h-6" />
        <nav className="flex items-center gap-1">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
          <Button size="sm">시작하기</Button>
        </div>
      </div>
    </header>
  );
}
