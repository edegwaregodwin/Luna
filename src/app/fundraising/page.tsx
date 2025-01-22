const pastEvents = [
  {
    title: "Sodexo Stop Hunger Foundation Partnership",
    date: "2024",
    description: "Enactus partner, Sodexo Stop Hunger Foundation, has recognised LUNA as a project with tremendous potential. This additional support and funding will help us achieve our mission.",
    category: "Partnership"
  },
  {
    title: "Enactus UK & Ireland Regional Impact Accelerators",
    date: "2023",
    description: "Winners of the accelerator program, securing funding from Schroders. Our team - Jiya Imran, Esther Lo, Karenshia Wijaya, Tricia Teo, and Mariyah - brilliantly pitched our project.",
    category: "Competition"
  },
  {
    title: "UCL Fundraiser",
    date: "2024",
    description: "Successfully hosted our first fundraiser at UCL, marking the beginning of our community engagement initiatives.",
    category: "Event"
  }
];

/*const upcomingEvents = [
  {
    title: "Enactus UK & Ireland Regional Impact Accelerators",
    date: "2025",
    description: "This year, we have qualified again for the accelerator program. Hats off to Eddie Childs and Nirupama Nair for pitching our project.",
  },
  {
    title: "UCL Fundraisers",
    date: "2025",
    description: "We are planning on hosting fundraisers at UCL. Keep an eye out for updates on our social media for more information.",
  },
];*/

export default function Fundraising() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-luna-blue to-luna-blue-darker text-white">
      {/* Hero Section */}
      <section className="pt-12 sm:pt-16 md:pt-20 pb-20 sm:pb-24 md:pb-32 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">Fundraising & Impact</h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Our fundraising initiatives enable us to provide educational resources and workshops to schools across the UK.
          </p>
        </div>
      </section>

      {/* Stats Section - Now with flex and no gap */}
      <section className="py-12 sm:py-16 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center">
            <div className="text-center p-6 sm:p-8 border-r border-white/20">
              <div className="text-3xl sm:text-4xl font-bold mb-2">3+</div>
              <div className="text-white/80 text-sm sm:text-base">Major Partnerships</div>
            </div>
            <div className="text-center p-6 sm:p-8">
              <div className="text-3xl sm:text-4xl font-bold mb-2">£1.5K+</div>
              <div className="text-white/80 text-sm sm:text-base">Funds Raised</div>
            </div>
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-12 sm:mb-16 text-center">Recent Achievements</h2>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {pastEvents.map((event, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-300"
              >
                <span className="inline-block px-3 sm:px-4 py-1 rounded-full bg-white/10 text-xs sm:text-sm font-medium mb-4">
                  {event.category}
                </span>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{event.title}</h3>
                <p className="text-white/70 text-xs sm:text-sm mb-3 sm:mb-4">{event.date}</p>
                <p className="text-white/90 text-sm sm:text-base leading-relaxed">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 bg-white/5 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Support Our Mission</h2>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-12 leading-relaxed">
            Your support can help us expand our reach and make a lasting impact. Whether through partnerships, donations, or volunteering, every contribution matters.
          </p>
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Get in Touch</h3>
            <a
              href="mailto:team@thelunainitiative.org"
              className="inline-block w-[200px] sm:w-[250px] bg-white text-luna-blue px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-luna-neutral-100 transition-all duration-300 transform hover:-translate-y-1"
            >
              Contact Us
            </a>
            <p className="text-white/80 mt-4 text-sm sm:text-base">
              Email: team@thelunainitiative.org
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
