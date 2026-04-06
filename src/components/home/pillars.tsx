import Image from "next/image";
import Container from "./container";
import { pillarCards } from "@/data/home";

export default function Pillars() {
  return (
    <section className="py-32 bg-surface-container-low">
      <Container>
        <div className="text-center mb-20">
          <h2 className="text-4xl font-black text-on-surface mb-4">
            Core Operating Pillars
          </h2>
          <div
            className="w-24 h-1 mx-auto rounded-full"
            style={{ background: "linear-gradient(135deg, #2b7ef8, #6aa5fb)" }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillarCards.map((card) => (
            <article
              key={card.title}
              className="bg-surface-container-high p-8 rounded-xl border border-outline-variant/10 hover:border-primary/20 transition-all"
            >
              <div className="relative w-full h-48 overflow-hidden rounded-lg mb-6">
                <Image
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <h3 className="text-2xl font-bold text-on-surface mb-4">
                {card.title}
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
