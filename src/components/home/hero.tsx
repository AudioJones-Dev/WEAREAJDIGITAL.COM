import Image from "next/image";
import Link from "next/link";
import Container from "./container";

export default function Hero() {
  return (
    <section className="pt-40 pb-24 bg-surface-dim">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — copy */}
          <div>
            <span className="block text-secondary font-bold uppercase tracking-[0.18em] text-xs mb-6">
              Strategic Production Partner
            </span>
            <h1 className="text-5xl lg:text-6xl font-black text-on-surface leading-[1.1] tracking-tight mb-8">
              Most podcasts fail because there&rsquo;s{" "}
              <span className="text-primary">no system</span> behind them.
            </h1>
            <p className="text-on-surface-variant text-xl mb-10 leading-relaxed max-w-xl">
              We install and run the end-to-end system for you, turning your
              voice into a strategic business asset that scales.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/apply"
                className="bg-cinematic-gradient text-white px-8 py-4 rounded-lg font-bold transition-transform hover:scale-[1.02] active:scale-[0.98]"
                style={{ background: "linear-gradient(135deg, #2b7ef8, #6aa5fb)" }}
              >
                Apply for a Strategy Call
              </Link>
              <Link
                href="/services"
                className="border border-outline-variant/20 hover:bg-surface-container-high text-on-surface px-8 py-4 rounded-lg font-bold transition-all"
              >
                View Services
              </Link>
            </div>
          </div>

          {/* Right — studio image */}
          <div className="relative">
            <div className="absolute -inset-4 opacity-10 blur-3xl rounded-full" style={{ background: "linear-gradient(135deg, #2b7ef8, #6aa5fb)" }} />
            <div className="relative overflow-hidden rounded-xl shadow-ambient">
              <Image
                src="/images/home/hero-podcast-studio.jpg"
                alt="Professional podcast production studio in Miami with premium microphones, cinematic lighting, and multi-camera setup"
                width={1400}
                height={933}
                priority
                className="w-full h-[480px] lg:h-[560px] object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
