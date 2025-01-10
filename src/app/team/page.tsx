import { TeamCard } from "@/components/ui/Cards";
import { teamInfo } from "./constants";

export default function TeamPage() {
  return (
    <div className="bg-luna-beige pb-5">
      <div className="flex flex-col items-center pt-2 pb-20">
        <div className="text-luna-blue text-center mb-14 flex flex-col items-center">
          <h1 className="font-bold text-3xl mt-6 mb-5">MEET THE TEAM</h1>
          <p className="w-10/12">
            To join our team, email us at team@thelunainitiative.org with your
            CV and we will get back to you.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-1 md:gap-5 leading-tight">
          {teamInfo.map(({ name, image, position }) => (
            <TeamCard
              key={name}
              name={name}
              imageSrc={image}
              position={position}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
