import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

type Props = {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
};

// Same dark treatment as the home hero so quality doesn't drop between pages of the funnel.
export function PageHeader({ eyebrow, title, intro, children }: Props) {
  return (
    <section className="hero-dark relative overflow-hidden text-white">
      <div className="hero-dark-grid pointer-events-none absolute inset-0" />
      <div className="container relative pb-24 pt-14 sm:pb-28 sm:pt-20">
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-leaf-400">{eyebrow}</p>
          <h1 className="section-heading text-[clamp(2.4rem,4.6vw,4rem)] text-white">{title}</h1>
          {intro && <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">{intro}</p>}
          {children}
        </Reveal>
      </div>
    </section>
  );
}
