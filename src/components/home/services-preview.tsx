import Image from "next/image";
import Link from "next/link";
import Container from "./container";
import { services } from "@/data/home";

export default function ServicesPreview() {
  return (
    <section className="py-32 bg-surface-container-low">
      <Container>
        <div className="space-y-32">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`flex flex-col gap-16 items-center ${
                index % 2 === 0
                  ? "lg:flex-row"
                  : "lg:flex-row-reverse"
              }`}
            >
              {/* Image */}
              <div className="lg:w-1/2 relative overflow-hidden rounded-xl shadow-ambient">
                <Image
                  src={service.imageSrc}
                  alt={service.imageAlt}
                  width={1400}
                  height={933}
                  className="w-full h-[360px] object-cover"
                />
              </div>

              {/* Copy */}
              <div className="lg:w-1/2">
                <span className="text-primary font-bold uppercase tracking-[0.16em] text-xs mb-4 block">
                  {service.tag}
                </span>
                <h3 className="text-3xl font-black text-on-surface mb-6">
                  {service.title}
                </h3>
                <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="text-secondary font-bold inline-flex items-center gap-2 group hover:gap-3 transition-all"
                >
                  Learn More
                  <span className="text-xl leading-none transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
