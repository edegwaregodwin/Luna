import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Team member type
type TeamMember = {
  name: string
  role: string
  image: string
}

// Team members data
const teamMembers: TeamMember[] = [
  { name: "Eddie Childs", role: "Project Lead", image: "/placeholder.svg" },
  { name: "Emily Baker", role: "Head of Operations", image: "/placeholder.svg" },
  { name: "Anna Charlotte Engelbert", role: "Outreach and Partnerships", image: "/placeholder.svg" },
  { name: "Jia En Wong", role: "Outreach and Partnerships", image: "/placeholder.svg" },
  { name: "Geneva Chan", role: "Outreach and Partnerships", image: "/placeholder.svg" },
  { name: "Karl Dumasia", role: "Outreach and Partnerships", image: "/placeholder.svg" },
  { name: "Giorgio Gastaut", role: "Treasurer", image: "/placeholder.svg" },
  { name: "Alice Wang", role: "Head of Recruitment", image: "/placeholder.svg" },
  { name: "Godwin Edegware", role: "Website Developer", image: "/placeholder.svg" },
  { name: "Cristina Dario", role: "Marketing and Fundraising", image: "/placeholder.svg" },
  { name: "Nirupama Rajeev Nair", role: "Fundraising and Partnerships", image: "/placeholder.svg" },
  { name: "Anthea Gabot", role: "Educational Workshops", image: "/placeholder.svg" },
  { name: "Sophie Johns", role: "Educational Workshops", image: "/placeholder.svg" },
  { name: "Afiq Fauzan", role: "Educational Workshops", image: "/placeholder.svg" },
]

export default function TeamPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-blue-50 to-white px-4 py-24 text-center md:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="space-y-4">
          <h1 className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-4xl font-bold tracking-tighter text-transparent md:text-6xl lg:text-7xl xl:text-8xl pb-2 leading-tight">
            Meet Our Team
          </h1>
          <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
            A passionate team dedicated to empowering young people with the skills and knowledge they need for a
            brighter future.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4 py-16 md:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center md:text-4xl">Team</h2>
        <div className="grid gap-4 grid-cols-3 sm:gap-6 md:gap-8">
          {teamMembers.map((member) => (
            <Card key={member.name} className="group relative overflow-hidden transition-all hover:shadow-lg w-full">
              <CardContent className="p-2 sm:p-4 md:p-6">
                <div className="aspect-square overflow-hidden rounded-full mb-2 sm:mb-4">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xs sm:text-sm md:text-xl font-bold">{member.name}</h3>
                  <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-muted-foreground">{member.role}</p>
                </div>
              </CardContent>
              <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </Card>
          ))}
        </div>
      </section>

      {/* Join Section */}
      <section className="container mx-auto px-4 py-16 md:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-blue-50 to-blue-100 p-8 text-center md:p-16">
          <h2 className="mb-4 text-2xl font-bold md:text-3xl">Join Our Team</h2>
          <p className="mb-8 text-muted-foreground">
            We're always looking for passionate individuals who share our vision of making a positive impact in our
            community.
          </p>
          <Link href="/get-started">
            <Button size="lg" className="rounded-full">
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}

