import { StaticImageData } from "next/image";
import EddieImage from "@/public/images/team/eddie.jpg";
import EmilyImage from "@/public/images/team/emily.jpg";
import AntheaImage from "@/public/images/team/anthea.jpg";
import GiorgioImage from "@/public/images/team/giorgio.jpg";
import AliceImage from "@/public/images/team/alice.jpg";
import AnnaImage from "@/public/images/team/anna.jpg";
import JiaImage from "@/public/images/team/jia.jpg";
import GenevaImage from "@/public/images/team/geneva.jpg";
import NirupamaImage from "@/public/images/team/nirupama.jpg";
import CristinaImage from "@/public/images/team/cristina.jpg";
import GodwinImage from "@/public/images/team/godwin.jpg";
import KarlImage from "@/public/images/team/KarlDumasia.jpeg";
import SophieImage from "@/public/images/team/sophie.jpeg";
import AfiqImage from "@/public/images/team/afiq.jpeg";
import OliviaImage from "@/public/images/team/olivia.jpeg";

export const teamMembers: {
  name: string;
  role: string;
  image: StaticImageData;
}[] = [
  {
    name: "Eddie Childs",
    role: "Project Lead",
    image: EddieImage,
  },
  {
    name: "Emily Baker",
    role: "Head of Operations",
    image: EmilyImage,
  },
  {
    name: "Anna Charlotte Engelbert",
    role: "Outreach and Partnerships",
    image: AnnaImage,
  },
  {
    name: "Jia En Wong",
    role: "Outreach and Partnerships",
    image: JiaImage,
  },
  {
    name: "Geneva Chan",
    role: "Outreach and Partnerships",
    image: GenevaImage,
  },
  {
    name: "Karl Dumasia",
    role: "Outreach and Partnerships",
    image: KarlImage,
  },
  {
    name: "Giorgio Gastaut",
    role: "Treasurer",
    image: GiorgioImage,
  },
  {
    name: "Alice Wang",
    role: "Head of Recruitment",
    image: AliceImage,
  },
  {
    name: "Godwin Edegware",
    role: "Website Developer",
    image: GodwinImage,
  },
  {
    name: "Cristina Dario",
    role: "Marketing and Fundraising",
    image: CristinaImage,
  },
  {
    name: "Nirupama Rajeev Nair",
    role: "Fundraising and Partnerships",
    image: NirupamaImage,
  },
  {
    name: "Anthea Gabot",
    role: "Head of Educational Workshops",
    image: AntheaImage,
  },
  {
    name: "Sophie Johns",
    role: "Educational Workshop Team",
    image: SophieImage,
  },
  {
    name: "Afiq Fauzan",
    role: "Educational Workshop Team",
    image: AfiqImage,
  },
  {
    name: "Olivia Dutta",
    role: "Educational Workshop Team",
    image: OliviaImage,
  },
];
