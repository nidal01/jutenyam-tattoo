import { processSteps } from "@/content/services";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProcessSteps() {
  return (
    <section className="border-y border-border bg-surface py-16 md:py-20">
      <div className="container-page">
        <SectionHeading
          eyebrow="Süreç"
          title="Çalışma yaklaşımı"
          description="Fikir paylaşımından işlem sonrası bilgilendirmeye kadar net ve samimi bir akış."
        />
        <ol className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {processSteps.map((step, index) => (
            <li
              key={step.title}
              className="border border-border bg-background/40 p-5"
            >
              <p className="text-xs tracking-[0.2em] text-accent uppercase">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-serif text-2xl text-text">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-muted">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
