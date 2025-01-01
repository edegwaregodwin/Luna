import { LunaButton } from "@/components/ui/Buttons";
import { routes } from "@/utilities/routes";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-8xl">404</h1>
      <h2 className="text-5xl mt-2 mb-1">Page not found</h2>
      <p>Sorry, we can&apos;t find the page you are looking for!</p>
      <Link href={routes.home} className="mt-8">
        <LunaButton
          className="bg-luna-blue text-luna-beige py-2 px-4 rounded-md font-bold"
          text="BACK TO HOMEPAGE"
        />
      </Link>
    </div>
  );
}
