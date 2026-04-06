import Image from "next/image";
import Container from "./container";
import { personas } from "@/data/home";

export default function Personas() {
  return (
    <section className="py-32 bg-surface-dim">
      <Container>
        <div className="mb-16">
          <h2 className="text-4xl font-black text-on-surface mb-4">
            Built for Visionaries
          </h2>
          <p className="text-on-surface-variant text-lg">
            We partner with those who have a message worth scaling.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {personas.map((persona) => (
            <article
              key={persona.title}
              className="group relative h-[450px] overflow-hidden rounded-xl"
            >
              <Image
                src={persona.imageSrc}
                alt={persona.imageAlt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              />
              {/* Bottom gradient overlay — tonal, no border */}
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6">
                <h4 className="text-xl font-bold text-on-surface">
                  {persona.title}
                </h4>
                <p className="text-sm text-on-surface-variant">
                  {persona.subtitle}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
