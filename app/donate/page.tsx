"use client";

import type React from "react";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowRight, Heart } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function DonatePage() {
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push("/donate/confirmation");
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-blue-50 to-white px-4 py-24 text-center md:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="space-y-4">
          <h1 className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-4xl font-bold tracking-tighter text-transparent md:text-6xl lg:text-7xl xl:text-8xl pb-2 leading-tight">
            Support Our Cause
          </h1>
          <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
            Your donation helps us empower young people through education and
            life skills workshops.
          </p>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="container mx-auto px-4 py-16 md:px-6 lg:px-8">
        <Card className="mx-auto max-w-2xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Make a Donation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="amount">Donation Amount</Label>
                <RadioGroup defaultValue="25" className="flex flex-wrap gap-4">
                  {[10, 25, 50, 100].map((amount) => (
                    <div key={amount}>
                      <RadioGroupItem
                        value={amount.toString()}
                        id={`amount-${amount}`}
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor={`amount-${amount}`}
                        className="flex cursor-pointer items-center justify-center rounded-md border-2 border-muted bg-popover px-3 py-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                      >
                        £{amount}
                      </Label>
                    </div>
                  ))}
                  <div>
                    <RadioGroupItem
                      value="custom"
                      id="amount-custom"
                      className="peer sr-only"
                    />
                    <Label
                      htmlFor="amount-custom"
                      className="flex cursor-pointer items-center justify-center rounded-md border-2 border-muted bg-popover px-3 py-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      Custom
                    </Label>
                  </div>
                </RadioGroup>
                <Input
                  type="number"
                  id="custom-amount"
                  placeholder="Enter custom amount"
                  className="mt-2"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>
              <Button type="submit" className="w-full">
                Donate Now
                <Heart className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>

      {/* Impact Section */}
      <section className="container mx-auto px-4 py-16 md:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-12 md:text-4xl">
          Your Impact
        </h2>
        <Card className="mx-auto max-w-3xl">
          <CardContent className="p-6">
            <p className="text-center text-lg">
              Your donations allow us to provide educational workshops and
              resources to young people across the UK. Every contribution,
              regardless of size, helps us to:
            </p>
            <ul className="mt-4 space-y-2 list-disc list-inside">
              <li>Develop and deliver engaging life skills workshops</li>
              <li>Create educational materials for students</li>
              <li>Train and support our volunteer educators</li>
              <li>Expand our reach to more schools and communities</li>
              <li>
                Invest in technology and resources to enhance our programs
              </li>
            </ul>
            <p className="mt-4 text-center text-lg font-semibold">
              Together, we can empower the next generation with the knowledge
              and skills they need to succeed.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 max-md:pb-16 max-md:pt-8 md:py-16 md:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-blue-50 to-blue-100 p-8 text-center md:p-16">
          <h2 className="mb-4 text-2xl font-bold md:text-3xl">
            Other Ways to Support
          </h2>
          <p className="mb-8 text-muted-foreground">
            Beyond donations, you can support our mission by volunteering or
            partnering with us.
          </p>
          <Link href="/contact">
            <Button size="lg" className="rounded-full">
              Get Involved
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
