import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "어떤 Node.js 버전이 필요한가요?",
    answer:
      "Node.js 18.17 이상이 필요합니다. Next.js 16은 최신 Node.js LTS 버전과 호환됩니다.",
  },
  {
    question: "Radix UI 대신 Base UI를 사용하는 이유는?",
    answer:
      "Base UI (@base-ui/react)는 Radix UI 팀이 개발한 Radix의 공식 스핀오프입니다. 더 가볍고 현대적인 API를 제공하며, shadcn v4의 새로운 base-nova 스타일과 완벽하게 호환됩니다.",
  },
  {
    question: "tailwind.config.js가 없는 이유는?",
    answer:
      "TailwindCSS v4는 CSS-first 방식을 도입했습니다. 모든 설정이 globals.css의 @theme inline 블록에서 관리되므로 별도 config 파일이 필요하지 않습니다.",
  },
  {
    question: "프로덕션에 바로 사용할 수 있나요?",
    answer:
      "네, 기본적인 기능은 모두 포함되어 있습니다. 다만 환경변수 설정, 데이터베이스 연결, 인증 로직 구현 등 프로젝트별 맞춤 개발이 필요합니다.",
  },
  {
    question: "다른 UI 라이브러리로 교체할 수 있나요?",
    answer:
      "네, 가능합니다. 모든 컴포넌트가 독립적으로 설계되어 있고, shadcn/ui를 MUI나 다른 라이브러리로 교체해도 레이아웃과 페이지 로직에 영향을 주지 않습니다.",
  },
  {
    question: "라이선스는 무엇인가요?",
    answer:
      "이 스타터킷은 MIT 라이선스 하에 공개되어 있습니다. 자유롭게 사용, 수정, 배포할 수 있습니다.",
  },
];

export function FaqSection() {
  return (
    <section className="w-full max-w-2xl mx-auto">
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">자주 묻는 질문</h2>
          <p className="text-muted-foreground">
            스타터킷 사용에 관한 일반적인 질문에 대한 답변입니다.
          </p>
        </div>

        <Accordion className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
