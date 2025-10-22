import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Team", href: "/team" },
    { name: "Fundraising", href: "/fundraising" },
    { name: "Contact", href: "/contact" },
    { name: "Donate", href: "/donate" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t bg-white text-gray-800">
      <div className="container px-4 py-12 md:px-6 lg:py-16">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/images/logo.svg" alt="Luna Initiative Logo" width={24} height={24} className="h-6 w-6 object-contain" />
              <span className="text-lg font-bold text-gray-900">
                Luna Initiative
              </span>
            </Link>
            <p className="text-sm text-gray-600">
              Making education accessible to all.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Mail className="h-4 w-4" />
              <a
                href="mailto:team@thelunainitiative.org"
                className="hover:text-blue-600 transition-colors"
              >
                team@thelunainitiative.org
              </a>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-gray-900">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {navigation.main.slice(0, 3).map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-gray-900">
              Get Involved
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {navigation.main.slice(3).map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 text-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} The Luna Initiative. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
