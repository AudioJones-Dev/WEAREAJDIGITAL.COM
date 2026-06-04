import Container from "./container";
import { stats } from "@/data/home";

export default function Stats() {
  return (
    <section className="py-16 bg-bg-0">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="font-mono text-5xl font-medium text-signal-yellow mb-2">
                {stat.value}
              </div>
              <div className="t-label text-fg-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
