import Image from "next/image";
import Container from "./container";
import { workflowSteps } from "@/data/home";

export default function HowItWorks() {
  return (
    <section className="py-32 bg-bg-0">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          {/* Left — workflow diagram */}
          <div className="relative">
            <div className="bg-surface-1 aspect-square rounded-card border border-border-subtle flex items-center justify-center overflow-hidden">
              <div
                className="absolute w-[150%] h-[150%] opacity-10 animate-pulse"
                style={{
                  background:
                    "radial-gradient(circle at center, var(--signal-yellow), transparent 60%)",
                }}
              />
              <Image
                src="/images/home/system-diagram.jpg"
                alt="Podcast content production workflow diagram showing record, edit, repurpose, distribute, and optimize stages"
                width={800}
                height={800}
                className="w-3/4 rounded-md shadow-ambient relative z-10 object-cover"
              />
            </div>
          </div>

          {/* Right — numbered steps */}
          <div>
            <h2 className="t-h2 mb-12">The Precision Workflow</h2>
            <div className="space-y-8">
              {workflowSteps.map((step) => (
                <div key={step.number} className="flex items-start gap-6">
                  <span className="font-mono text-2xl font-medium text-signal-yellow min-w-[2rem]">
                    {step.number}
                  </span>
                  <div>
                    <h4 className="t-h4 mb-2">{step.title}</h4>
                    <p className="t-body text-fg-2">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
