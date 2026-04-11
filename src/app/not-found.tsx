import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center min-h-[60vh] gap-4 text-center">
      <h1 className="text-8xl font-bold text-muted-foreground">404</h1>
      <h2 className="text-2xl font-semibold">페이지를 찾을 수 없습니다</h2>
      <p className="text-muted-foreground">
        요청하신 페이지가 존재하지 않거나 이동되었습니다.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
      >
        홈으로 돌아가기
      </Link>
    </div>
  );
}
