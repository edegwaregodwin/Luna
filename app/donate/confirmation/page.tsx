import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function DonationConfirmationPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-grow">
        <section className="container mx-auto px-4 py-16 md:px-6 lg:px-8">
          <Card className="mx-auto max-w-2xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">Uh oh!</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <AlertTriangle className="mx-auto h-16 w-16 text-yellow-500 mb-4" />
              <p className="text-lg mb-6">Our payments system is currently down. Please try again later.</p>
              <p className="text-muted-foreground mb-8">
                We apologize for the inconvenience and appreciate your support.
              </p>
              <Link href="/donate">
                <Button className="rounded-full">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Return to Donation Page
                </Button>
              </Link>
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  )
}

