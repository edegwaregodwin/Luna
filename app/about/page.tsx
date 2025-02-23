import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Lightbulb, Users, Rocket } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-blue-50 to-white px-4 py-24 text-center md:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="space-y-4">
          <h1 className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-4xl font-bold tracking-tighter text-transparent md:text-6xl lg:text-7xl xl:text-8xl pb-2 leading-tight">
            About The Luna Initiative
          </h1>
          <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
            We are a student-led non-profit dedicated to empowering young
            people.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="container mx-auto px-4 max-md:pb-16 md:py-16 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[800px] space-y-8">
          <h2 className="text-3xl font-bold tracking-tighter text-center md:text-4xl">
            Our Story
          </h2>
          <div className="prose prose-blue mx-auto max-w-none max-md:text-center">
            <p className="text-muted-foreground leading-relaxed">
              The Luna Initiative was founded in 2020 by UCL students with the
              aim to have a positive social impact. Since 2020, we have engaged
              in a number of different projects, all with the underlying goal of
              making the world a better place. This year, we are running
              educational workshops in schools across the UK, as we think that
              this will have the biggest social impact, given our skills,
              capabilities and knowledge. We currently operate as both a social
              enterprise and a charity as this gives us the flexibility to
              engage in a greater range of different projects and activities.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Our workshops bridge the gap between classroom learning and
              essential life skills, helping students build confidence and
              succeed in their future endeavors. We believe that education
              should be accessible, engaging, and relevant to today's
              challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="container mx-auto px-4 py-16 md:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-12 md:text-4xl">
          Our Values
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          <Card className="group relative overflow-hidden transition-all hover:shadow-lg">
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
            <CardHeader>
              <Lightbulb className="h-8 w-8 text-blue-600" />
              <CardTitle className="text-xl font-bold">Empowerment</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We believe in equipping young people with the knowledge and
                confidence they need to take control of their future.
              </p>
            </CardContent>
          </Card>

          <Card className="group relative overflow-hidden transition-all hover:shadow-lg">
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
            <CardHeader>
              <Users className="h-8 w-8 text-blue-600" />
              <CardTitle className="text-xl font-bold">Accessibility</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Education should be accessible to all, regardless of background
                or circumstances. We work to break down barriers to learning.
              </p>
            </CardContent>
          </Card>

          <Card className="group relative overflow-hidden transition-all hover:shadow-lg">
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
            <CardHeader>
              <Rocket className="h-8 w-8 text-blue-600" />
              <CardTitle className="text-xl font-bold">Innovation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We continuously adapt and improve our approach to maximise our
                social impact.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 max-md:pb-16 md:py-16 md:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-blue-50 to-blue-100 p-8 text-center md:p-16">
          <h2 className="mb-4 text-2xl font-bold md:text-3xl">Get in Touch</h2>
          <p className="mb-8 text-muted-foreground">
            Want to learn more about The Luna Initiative? We'd love to hear from
            you.
          </p>
          <div className="space-y-4">
            <Link href="/contact">
              <Button size="lg" className="rounded-full">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <p className="text-sm text-muted-foreground">
              Email: team@thelunainitiative.org
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
