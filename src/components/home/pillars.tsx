import Image from "next/image";
import Container from "./container";
import { pillarCards } from "@/data/home";

export default function Pillars() {
  return (
    <section className="py-32 bg-bg-1">
      <Container>
        <div className="text-center mb-20">
          <h2 className="t-h2 mb-4">Core Operating Pillars</h2>
          <div className="w-24 h-1 mx-auto rounded-full bg-signal-yellow" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillarCards.map((card) => (
            <article
              key={card.title}
              className="aj-card hover:border-border-strong"
            >
              <div className="relative w-full h-48 overflow-hidden rounded-md mb-6">
                <Image
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <h3 className="t-h4 mb-4">{card.title}</h3>
              <p className="t-body text-fg-2">{card.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
