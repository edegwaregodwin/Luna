import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, BookOpen, Users, Target } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-blue-50 to-white px-4 py-24 text-center md:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="space-y-4">
          <h1 className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-4xl font-bold tracking-tighter text-transparent md:text-6xl lg:text-7xl xl:text-8xl pb-2 leading-tight">
            Empowering Through Education
          </h1>
          <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
            Join us in our mission to equip young people with the tools they need to thrive in life.
          </p>
          <div className="space-x-4">
            <Link href="/get-started">
              <Button size="lg" className="rounded-full">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg" className="rounded-full">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container mx-auto px-4 py-16 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[800px] space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Mission</h2>
          <p className="text-muted-foreground">
            Our mission is to inspire and empower young people by providing educational workshops that bridge the gap
            between classroom learning and real-world skills, helping them build confidence and succeed in life.
          </p>
        </div>
      </section>

      {/* Cards Section */}
      <section className="container mx-auto px-4 py-16 md:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="group relative overflow-hidden transition-all hover:shadow-lg">
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
            <CardHeader>
              <BookOpen className="h-8 w-8 text-blue-600" />
              <CardTitle className="text-xl font-bold">The Challenge</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Many important topics and essential life skills are left out of traditional school curriculums.
              </p>
            </CardContent>
          </Card>

          <Card className="group relative overflow-hidden transition-all hover:shadow-lg">
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
            <CardHeader>
              <Target className="h-8 w-8 text-blue-600" />
              <CardTitle className="text-xl font-bold">Our Solution</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We deliver engaging educational workshops in schools to equip students with the knowledge and tools for
                a successful future.
              </p>
            </CardContent>
          </Card>

          <Card className="group relative overflow-hidden transition-all hover:shadow-lg">
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
            <CardHeader>
              <Users className="h-8 w-8 text-blue-600" />
              <CardTitle className="text-xl font-bold">Get Involved</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Partner with us, volunteer, or donate to help inspire and empower the next generation.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 md:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-blue-50 to-blue-100 p-8 text-center md:p-16">
          <h2 className="mb-4 text-2xl font-bold md:text-3xl">Ready to Make a Difference?</h2>
          <p className="mb-8 text-muted-foreground">Join us in shaping the future of education.</p>
          <Link href="/get-started">
            <Button size="lg" className="rounded-full">
              Get Started Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}

