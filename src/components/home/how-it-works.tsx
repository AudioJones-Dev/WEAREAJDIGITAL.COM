import Image from "next/image";
import Container from "./container";
import { workflowSteps } from "@/data/home";

export default function HowItWorks() {
  return (
    <section className="py-32 bg-surface-container-lowest">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          {/* Left — workflow diagram */}
          <div className="relative">
            <div className="bg-surface-container-high aspect-square rounded-xl flex items-center justify-center overflow-hidden">
              <div
                className="absolute w-[150%] h-[150%] opacity-10 animate-pulse"
                style={{ background: "linear-gradient(135deg, #2b7ef8, #6aa5fb)" }}
              />
              <Image
                src="/images/home/system-diagram.jpg"
                alt="Podcast content production workflow diagram showing record, edit, repurpose, distribute, and optimize stages"
                width={800}
                height={800}
                className="w-3/4 rounded-lg shadow-ambient relative z-10 object-cover"
              />
            </div>
          </div>

          {/* Right — numbered steps */}
          <div>
            <h2 className="text-4xl font-black text-on-surface mb-12">
              The Precision Workflow
            </h2>
            <div className="space-y-8">
              {workflowSteps.map((step) => (
                <div key={step.number} className="flex items-start gap-6">
                  <span className="text-secondary font-black text-2xl min-w-[2rem]">
                    {step.number}
                  </span>
                  <div>
                    <h4 className="text-xl font-bold text-on-surface mb-2">
                      {step.title}
                    </h4>
                    <p className="text-on-surface-variant leading-relaxed">
                      {step.description}
                    </p>
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
