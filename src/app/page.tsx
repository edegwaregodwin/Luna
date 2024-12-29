import Image from "next/image";
import WhiteLogo from "@/../public/images/white_logo.png";
import { LunaButton } from "@/components/ui/Buttons";
import Link from "next/link";
import { routes } from "@/utilities/routes";

export default function Home() {
  return (
    <div>
      <section className="flex flex-col items-center bg-luna-blue text-luna-beige">
        <div className="w-fit mt-12">
          <Image
            src={WhiteLogo}
            alt="Luna logo white"
            className="md:w-[560px] w-72"
          />
        </div>
        <div className="md:w-3/5 mt-10">
          <p className="text-lg px-5 leading-tight text-center">
            Addressing period poverty in the UK is essential for promoting
            health, education, and gender equality. Many people face financial
            barriers that prevent them from accessing necessary menstrual
            products, leading to negative health outcomes, increased absenteeism
            from school and work, and a detrimental impact on overall wellbeing.
          </p>
        </div>
        <div className="w-fit my-16">
          <Link href={routes.dispensers} className="w-fit">
            <LunaButton
              text="OUR DISPENSERS"
              className="text-luna-beige outline-luna-beige outline outline-2 py-1 px-6 rounded-sm font-bold text-xl"
            />
          </Link>
        </div>
        <div className="text-center md:w-3/5 mb-16">
          <p className="text-lg">
            The Luna Initiative is dedicated to combating period poverty by
            providing accessible menstrual products and hosting educational
            workshops on menstrual health. We empower people to manage their
            periods with dignity and confidence, contributing to a society where
            no one is held back by the challenges of period poverty.
          </p>
        </div>
      </section>
    </div>
  );
}
