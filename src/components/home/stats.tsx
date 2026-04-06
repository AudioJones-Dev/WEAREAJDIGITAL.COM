import Container from "./container";
import { stats } from "@/data/home";

export default function Stats() {
  return (
    <section className="py-16 bg-surface-container">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-5xl font-black text-secondary mb-2">
                {stat.value}
              </div>
              <div className="text-on-surface-variant uppercase tracking-[0.12em] text-sm font-bold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
