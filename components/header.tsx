"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Team", href: "/team" },
  { name: "Fundraising", href: "/fundraising" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/images/logo.svg" alt="Luna Initiative Logo" width={24} height={24} className="h-6 w-6 object-contain" />
          <span className="text-lg font-bold">Luna Initiative</span>
        </Link>
        <nav className="hidden md:flex md:items-center md:space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-blue-600"
            >
              {item.name}
            </Link>
          ))}
          <Link href="/donate">
            <Button className="rounded-full">Donate Now</Button>
          </Link>
        </nav>
        <Button variant="ghost" className="md:hidden" onClick={toggleMenu}>
          <span className="sr-only">Toggle menu</span>
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden absolute bg-white w-full">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/donate"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Donate Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
