import Alice from "@/../public/images/team/alice.jpg";
import Anna from "@/../public/images/team/anna.jpg";
import Anthea from "@/../public/images/team/anthea.jpg";
import Cristina from "@/../public/images/team/cristina.jpg";
import Eddie from "@/../public/images/team/eddie.jpg";
import Emily from "@/../public/images/team/emily.jpg";
import Geneva from "@/../public/images/team/geneva.jpg";
import Giorgio from "@/../public/images/team/giorgio.jpg";
import Jia from "@/../public/images/team/jia.jpg";
import Nirupama from "@/../public/images/team/nirupama.jpg";
import Godwin from "@/../public/images/team/godwin.jpg";
import { StaticImageData } from "next/image";

export const teamInfo: {
  name: string;
  image: StaticImageData;
  position: string;
}[] = [
  { name: "EDDIE CHILDS", image: Eddie, position: "Project Lead" },
  {
    name: "EMILY BAKER",
    image: Emily,
    position: "Head of Operations",
  },
  {
    name: "ANTHEA GABOT",
    image: Anthea,
    position: "Head of Educational Workshops",
  },
  {
    name: "GIORGIO GASTAUT",
    image: Giorgio,
    position: "Head of Manufacturing and Distribution",
  },
  {
    name: "ALICE WANG",
    image: Alice,
    position: "Head of HR",
  },
  {
    name: "ANNA CHARLOTTE ENGELBERT",
    image: Anna,
    position: "VP of Sales",
  },
  { name: "JIA EN WONG", image: Jia, position: "VP of Sales" },
  { name: "GENEVA CHAN", image: Geneva, position: "VP of Sales" },

  {
    name: "NIRUPAMA RAJEEV NAIR",
    image: Nirupama,
    position: "Fundraising and Partnerships",
  },
  {
    name: "CRISTINA DARIO",
    image: Cristina,
    position: "Marketing and Fundraising",
  },

  {
    name: "GODWIN EDEGWARE",
    image: Godwin,
    position: "Website Developer",
  },
];
