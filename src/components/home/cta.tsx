import Image from "next/image";
import Link from "next/link";
import Container from "./container";

export default function HomeCTA() {
  return (
    <section className="py-32 bg-surface-container">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center overflow-hidden rounded-xl bg-surface-container-high p-12">
          {/* Copy */}
          <div>
            <span className="block text-secondary font-bold uppercase tracking-[0.18em] text-xs mb-6">
              Start Here
            </span>
            <h2 className="text-4xl font-black text-on-surface leading-tight mb-6">
              Ready to build your podcast into a real business asset?
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-10">
              We&rsquo;ll look at your goals, your current setup, and whether
              production, repurposing, or full marketing operations support is
              the right fit.
            </p>
            <Link
              href="/apply"
              className="inline-flex items-center px-8 py-4 rounded-lg font-bold text-white transition-transform hover:scale-[1.02] active:scale-[0.98]"
              style={{ background: "linear-gradient(135deg, #2b7ef8, #6aa5fb)" }}
            >
              Apply for a Strategy Call
            </Link>
          </div>

          {/* Image */}
          <div className="relative overflow-hidden rounded-xl shadow-ambient">
            <Image
              src="/images/home/cta-strategy-session.jpg"
              alt="Strategy session with a client planning podcast production and content marketing for their business"
              width={1400}
              height={933}
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
