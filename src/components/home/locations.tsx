import Image from "next/image";
import Container from "./container";
import { locations } from "@/data/home";

export default function Locations() {
  return (
    <section className="py-32 bg-surface-dim">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — copy */}
          <div>
            <h2 className="text-4xl font-black text-on-surface mb-8">
              South Florida&rsquo;s Mobile Production Hub
            </h2>
            <p className="text-on-surface-variant text-lg mb-10 leading-relaxed">
              We bring the studio to you. Our elite mobile production teams are
              operational across the major hubs of the Sunshine State.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {locations.map((city) => (
                <div key={city} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-secondary flex-none" />
                  <span className="font-bold text-on-surface">{city}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — team/location image */}
          <div className="relative overflow-hidden rounded-xl shadow-ambient">
            <Image
              src="/images/home/locations-map-or-team.jpg"
              alt="Professional podcast production team serving Miami, Broward, West Palm, and Fort Myers across South Florida"
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
