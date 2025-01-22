import Image from "next/image";
import EddieImage from "@/../public/images/team/eddie.jpg";
import EmilyImage from "@/../public/images/team/emily.jpg";
import AntheaImage from "@/../public/images/team/anthea.jpg";
import GiorgioImage from "@/../public/images/team/giorgio.jpg";
import AliceImage from "@/../public/images/team/alice.jpg";
import AnnaImage from "@/../public/images/team/anna.jpg";
import JiaImage from "@/../public/images/team/jia.jpg";
import GenevaImage from "@/../public/images/team/geneva.jpg";
import NirupamaImage from "@/../public/images/team/nirupama.jpg";
import CristinaImage from "@/../public/images/team/cristina.jpg";
import GodwinImage from "@/../public/images/team/godwin.jpg";

const teamCategories = [
  "Leadership",
  "Operations",
  "Education",
  "Sales",
  "Marketing",
  "Development",
  "Partnerships"
] as const;

const teamMembers = [
  {
    name: "Eddie Childs",
    role: "Project Lead",
    image: EddieImage,
    category: "Leadership"
  },
  {
    name: "Emily Baker",
    role: "Head of Operations",
    image: EmilyImage,
    category: "Leadership"
  },
  {
    name: "Anthea Gabot",
    role: "Head of Educational Workshops",
    image: AntheaImage,
    category: "Education"
  },
  {
    name: "Giorgio Gastaut",
    role: "Head of Manufacturing and Distribution",
    image: GiorgioImage,
    category: "Operations"
  },
  {
    name: "Alice Wang",
    role: "Head of HR",
    image: AliceImage,
    category: "Operations"
  },
  {
    name: "Anna Charlotte Engelbert",
    role: "VP of Sales",
    image: AnnaImage,
    category: "Sales"
  },
  {
    name: "Jia En Wong",
    role: "VP of Sales",
    image: JiaImage,
    category: "Sales"
  },
  {
    name: "Geneva Chan",
    role: "VP of Sales",
    image: GenevaImage,
    category: "Sales"
  },
  {
    name: "Nirupama Rajeev Nair",
    role: "Fundraising and Partnerships",
    image: NirupamaImage,
    category: "Partnerships"
  },
  {
    name: "Cristina Dario",
    role: "Marketing and Fundraising",
    image: CristinaImage,
    category: "Marketing"
  },
  {
    name: "Godwin Edegware",
    role: "Website Developer",
    image: GodwinImage,
    category: "Development"
  }
];

export default function Team() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-luna-blue to-luna-blue-darker">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">Meet Our Team</h1>
          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto px-4">
            A passionate team dedicated to empowering young people with the skills and knowledge they need for a brighter future.
          </p>
        </div>

        {/* Team Categories */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 sm:mb-16 px-2">
          {teamCategories.map((category) => (
            <div
              key={category}
              className="px-3 sm:px-4 py-1 sm:py-2 rounded-full bg-white/10 text-white/90 text-xs sm:text-sm font-medium"
            >
              {category}
            </div>
          ))}
        </div>

        {/* Team Grid - Always 3 per row */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg sm:rounded-xl bg-luna-blue-light hover:bg-luna-blue-lighter transition-all duration-300"
            >
              <div className="p-2 sm:p-4 md:p-6">
                <div className="mb-2 sm:mb-4 md:mb-6 relative aspect-square mx-auto">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="rounded-full object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 33vw, (max-width: 1200px) 33vw, 33vw"
                  />
                </div>
                <div className="text-center">
                  <span className="text-white/70 text-[10px] sm:text-xs md:text-sm uppercase tracking-wider mb-1 sm:mb-2 inline-block">
                    {member.category}
                  </span>
                  <h2 className="text-sm sm:text-base md:text-xl font-bold text-white mb-1 sm:mb-2 line-clamp-2">
                    {member.name}
                  </h2>
                  <p className="text-white/90 text-xs sm:text-sm md:text-base font-medium line-clamp-2">
                    {member.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join Our Team Section */}
        <div className="mt-12 sm:mt-16 md:mt-20 text-center bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Join Our Team</h2>
          <p className="text-white/90 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
            We&apos;re always looking for passionate individuals who share our vision of making a positive impact in our community.
          </p>
          <a
            href="mailto:team@thelunainitiative.org"
            className="inline-block w-[200px] sm:w-[250px] bg-white text-luna-blue px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-luna-neutral-100 transition-all duration-300 transform hover:-translate-y-1 text-sm sm:text-base"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </main>
  );
}
