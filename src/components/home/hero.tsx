import Image from "next/image";
import Link from "next/link";
import Container from "./container";

export default function Hero() {
  return (
    <section className="pt-40 pb-24 bg-bg-0">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — copy */}
          <div>
            <span className="t-label mb-6 block">
              Strategic Production Partner
            </span>
            <h1 className="t-h1 mb-8">
              Most podcasts fail because there&rsquo;s{" "}
              <span className="text-signal-yellow">no system</span> behind them.
            </h1>
            <p className="t-lead text-fg-2 mb-10 max-w-xl">
              We install and run the end-to-end system for you, turning your
              voice into a strategic business asset that scales.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/apply" className="aj-btn-signal">
                Apply for a Strategy Call
              </Link>
              <Link href="/services" className="aj-btn-intel">
                View Services
              </Link>
            </div>
          </div>

          {/* Right — studio image */}
          <div className="relative">
            <div
              className="absolute -inset-4 opacity-10 blur-3xl rounded-full"
              style={{
                background:
                  "linear-gradient(135deg, var(--signal-yellow), var(--accent-blue))",
              }}
            />
            <div className="relative overflow-hidden rounded-card border border-border-subtle shadow-ambient">
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
