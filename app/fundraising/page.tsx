import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, HandHeart, Trophy, Calendar } from "lucide-react"
import Link from "next/link"

export default function FundraisingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-blue-50 to-white px-4 py-24 text-center md:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="space-y-4">
          <h1 className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-4xl font-bold tracking-tighter text-transparent md:text-6xl lg:text-7xl xl:text-8xl pb-2 leading-tight">
            Fundraising & Impact
          </h1>
          <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
            Our fundraising initiatives enable us to provide educational resources and workshops to schools across the
            UK.
          </p>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="container mx-auto px-4 py-16 md:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-12 md:text-4xl">Recent Achievements</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="group relative overflow-hidden transition-all hover:shadow-lg">
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
            <CardHeader className="space-y-4">
              <div className="flex items-center justify-between">
                <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                  <HandHeart className="mr-1 h-3 w-3" /> Partnership
                </Badge>
                <span className="text-sm text-muted-foreground">2024</span>
              </div>
              <h3 className="text-xl font-bold">Sodexo Stop Hunger Foundation Partnership</h3>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Enactus partner, Sodexo Stop Hunger Foundation, has recognised LUNA as a project with tremendous
                potential. This additional support and funding will help us achieve our mission.
              </p>
            </CardContent>
          </Card>

          <Card className="group relative overflow-hidden transition-all hover:shadow-lg">
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
            <CardHeader className="space-y-4">
              <div className="flex items-center justify-between">
                <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                  <Trophy className="mr-1 h-3 w-3" /> Competition
                </Badge>
                <span className="text-sm text-muted-foreground">2023</span>
              </div>
              <h3 className="text-xl font-bold">Enactus UK & Ireland Regional Impact Accelerators</h3>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Winners of the accelerator program, securing funding from Schroders. Our team - Jiya Imran, Esther Lo,
                Karenshia Wijaya, Tricia Teo, and Mariyah - brilliantly pitched our project.
              </p>
            </CardContent>
          </Card>

          <Card className="group relative overflow-hidden transition-all hover:shadow-lg">
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
            <CardHeader className="space-y-4">
              <div className="flex items-center justify-between">
                <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                  <Calendar className="mr-1 h-3 w-3" /> Event
                </Badge>
                <span className="text-sm text-muted-foreground">2024</span>
              </div>
              <h3 className="text-xl font-bold">UCL Fundraiser</h3>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Successfully hosted our first fundraiser at UCL, marking the beginning of our community engagement
                initiatives.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Support Section */}
      <section className="container mx-auto px-4 py-16 md:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-blue-50 to-blue-100 p-8 text-center md:p-16">
          <h2 className="mb-4 text-2xl font-bold md:text-3xl">Support Our Mission</h2>
          <p className="mb-8 mx-auto max-w-[700px] text-muted-foreground">
            Your support can help us expand our reach and make a lasting impact. Whether through partnerships,
            donations, or volunteering, every contribution matters.
          </p>
          <div className="space-y-4">
            <Link href="/get-started">
              <Button size="lg" className="rounded-full">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <p className="text-sm text-muted-foreground">Email: team@thelunainitiative.org</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

