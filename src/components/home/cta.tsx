import Image from "next/image";
import Link from "next/link";
import Container from "./container";

export default function HomeCTA() {
  return (
    <section className="py-32 bg-bg-0">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center overflow-hidden rounded-card border border-border-subtle bg-surface-1 p-12">
          {/* Copy */}
          <div>
            <span className="t-label mb-6 block">Start Here</span>
            <h2 className="t-h2 mb-6">
              Ready to build your podcast into a real business asset?
            </h2>
            <p className="t-body-lg text-fg-2 mb-10">
              We&rsquo;ll look at your goals, your current setup, and whether
              production, repurposing, or full marketing operations support is
              the right fit.
            </p>
            <Link href="/apply" className="aj-btn-signal">
              Apply for a Strategy Call
            </Link>
          </div>

          {/* Image */}
          <div className="relative overflow-hidden rounded-card border border-border-subtle shadow-ambient">
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
