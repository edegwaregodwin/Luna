import Image from "next/image";
import WhiteLogo from "@/../public/images/white_logo.png";
import Link from "next/link";
import { routes } from "@/utilities/routes";
import { LunaButton } from "@/components/ui/Buttons";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-luna-blue to-luna-blue-darker text-white min-h-[80vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            <div className="w-full lg:w-1/2 max-w-[280px] sm:max-w-sm md:max-w-md mx-auto">
              <Image
                src={WhiteLogo}
                alt="Luna logo white"
                className="w-full transform hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
            <div className="lg:w-1/2 space-y-6 sm:space-y-8 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Empowering Through Education
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed">
                Join us in our mission to equip young people with the tools they need to thrive in life.
              </p>
              <div className="pt-4 sm:pt-6 md:pt-8">
                <Link href={routes.fundraising} className="inline-block">
                  <LunaButton
                    text="GET INVOLVED"
                    className="w-[200px] sm:w-[250px] bg-white text-luna-blue hover:bg-luna-neutral-100 transition-all duration-300 py-3 sm:py-4 px-6 sm:px-10 rounded-lg font-bold text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-luna-blue text-center mb-10 sm:mb-16">Our Impact</h2>
          <div className="grid gap-6 sm:gap-8 md:gap-10 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-luna-neutral-200">
              <h3 className="text-xl sm:text-2xl font-bold text-luna-blue mb-4">The Challenge</h3>
              <p className="text-luna-neutral-600 leading-relaxed">
                Many important topics and essential life skills are left out of traditional school curriculums.
              </p>
            </div>
            <div className="bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-luna-neutral-200">
              <h3 className="text-xl sm:text-2xl font-bold text-luna-blue mb-4">Our Solution</h3>
              <p className="text-luna-neutral-600 leading-relaxed">
                We deliver engaging educational workshops in schools to equip students with the knowledge and tools for a successful future.
              </p>
            </div>
            <div className="bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-luna-neutral-200">
              <h3 className="text-xl sm:text-2xl font-bold text-luna-blue mb-4">Get Involved</h3>
              <p className="text-luna-neutral-600 leading-relaxed">
                Partner with us, volunteer, or donate to help inspire and empower the next generation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-luna-blue text-white py-16 sm:py-20 md:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">Our Mission</h2>
          <p className="text-lg sm:text-xl leading-relaxed text-white/90">
            Our mission is to inspire and empower young people by providing educational workshops that bridge the gap between classroom learning and real-world skills, helping them build confidence and succeed in life.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16 sm:py-20 md:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-luna-blue mb-4 sm:mb-6">Join Our Mission</h2>
          <p className="text-lg sm:text-xl text-luna-neutral-600 mb-8 sm:mb-10">
            Together, we can make a difference.
          </p>
          <Link href={routes.fundraising} className="inline-block">
            <LunaButton
              text="GET INVOLVED TODAY"
              className="w-[200px] sm:w-[250px] bg-luna-blue text-white hover:bg-luna-blue-light transition-all duration-300 py-3 sm:py-4 px-6 sm:px-10 rounded-lg font-bold text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            />
          </Link>
        </div>
      </section>
    </main>
  );
}
