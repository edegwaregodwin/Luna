export default function About() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-luna-blue to-luna-blue-darker text-white">
            {/* Hero Section */}
            <section className="pt-8 sm:pt-12 md:pt-20 pb-12 sm:pb-16 md:pb-20 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6 md:mb-8">About The Luna Initiative</h1>
                    <p className="text-sm sm:text-base md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed px-2 sm:px-4">
                        We are a student-led social enterprise and charity dedicated to empowering young people.
                    </p>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-12 sm:py-16 md:py-20 px-4 bg-white/5 backdrop-blur-sm">
                <div className="max-w-4xl mx-auto px-2 sm:px-4">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 md:mb-10 text-center">Our Story</h2>
                    <div className="space-y-4 sm:space-y-6 text-white/90 text-sm sm:text-base md:text-lg leading-relaxed">
                        <p>
                            The Luna Initiative was founded in 2020 by UCL students with the aim to have a positive social impact. Since 2020,
                            we have engaged in a number of different projects, all with the underlying goal of making the world a better place.
                            This year, we are running educational workshops in schools across the UK, as we think that this will have the biggest
                            social impact, given our skills, capabilities and knowledge. We currently operate as both a social enterprise and a charity
                            as this gives us the flexibility to engage in a greater range of different projects and activities.
                        </p>
                        <p>
                            Our workshops bridge the gap between classroom learning and essential life skills, helping students build
                            confidence and succeed in their future endeavors. We believe that education should be accessible, engaging,
                            and relevant to today&apos;s challenges.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Values Section */}
            <section className="py-12 sm:py-16 md:py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-8 sm:mb-10 md:mb-12 text-center">Our Values</h2>
                    <div className="grid gap-4 sm:gap-6 md:gap-8 md:grid-cols-3">
                        <div className="bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-5 sm:p-6 md:p-8">
                            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Empowerment</h3>
                            <p className="text-white/90 text-sm sm:text-base">
                                We believe in equipping young people with the knowledge and confidence they need to take control of their future.
                            </p>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-5 sm:p-6 md:p-8">
                            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Accessibility</h3>
                            <p className="text-white/90 text-sm sm:text-base">
                                Education should be accessible to all, regardless of background or circumstances. We work to break down barriers
                                to learning.
                            </p>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-5 sm:p-6 md:p-8">
                            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Innovation</h3>
                            <p className="text-white/90 text-sm sm:text-base">
                                We continuously adapt and improve our approach to maximise our social impact.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-12 sm:py-16 md:py-20 px-4 bg-white/5 backdrop-blur-sm">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Get in Touch</h2>
                    <p className="text-white/90 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 px-2">
                        Want to learn more about The Luna Initiative? We&apos;d love to hear from you.
                    </p>
                    <a
                        href="mailto:team@thelunainitiative.org"
                        className="inline-block w-[200px] sm:w-[250px] bg-white text-luna-blue px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-luna-neutral-100 transition-all duration-300 transform hover:-translate-y-1 text-sm sm:text-base"
                    >
                        Contact Us
                    </a>
                    <p className="text-white/80 mt-4 text-xs sm:text-sm md:text-base">
                        Email: team@thelunainitiative.org
                    </p>
                </div>
            </section>
        </main>
    );
} 