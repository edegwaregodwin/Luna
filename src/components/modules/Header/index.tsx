"use client";
import React, { useState } from "react";
import Image from "next/image";
import HamburgerMenu from "@/../public/images/hamburger-menu.svg";
import BlackLogo from "@/../public/images/black_logo.png";
import InstagramLogo from "@/../public/images/instagram_logo.png";
import LinkedinLogo from "@/../public/images/linkedin_logo.png";
import Link from "next/link";
import { routes } from "@/utilities/routes";

const Header: React.FC = () => {
  const [showList, setShowList] = useState(false);

  return (
    <header>
      <div className="bg-luna-beige h-header">
        <div className="flex py-4 justify-between items-center px-6">
          <Link href={routes.home} replace>
            <div>
              <Image src={BlackLogo} alt="Luna black logo" height={50} />
            </div>
          </Link>
          <div className="flex h-fit justify-center items-center relative">
            <span
              className="mr-3"
              onMouseOver={() => setShowList(true)}
              onMouseLeave={() => setShowList(false)}
            >
              <HamburgerMenu className="hover:opacity-50 z-50" />
              {showList && (
                <div className="bg-luna-beige absolute right-14 top-6 font-bold rounded-md text-luna-blue">
                  <ol className="flex flex-col">
                    {navList.map(({ title, route }) => (
                      <Link
                        key={title}
                        href={route}
                        className="hover:opacity-70 pl-4 pr-6 py-2"
                        replace
                        onClick={()=>setShowList(false)}
                      >
                        <li>{title}</li>
                      </Link>
                    ))}
                  </ol>
                </div>
              )}
            </span>
            <div className="z-10 flex">
              <Link href="https://www.instagram.com/the_luna_initiative_/?hl=en">
                <Image src={InstagramLogo} alt="instagram logo" height={30} />
              </Link>
              <Link href="https://www.linkedin.com/company/luna-initiative-enactus/">
                <Image src={LinkedinLogo} alt="linkedin logo" height={30} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const navList = [
  { title: "HOME", route: routes.home },
  { title: "DISPENSERS", route: routes.dispensers },
  { title: "FUNDRAISING", route: routes.fundraising },
  { title: "STRUCTURE", route: routes.structure },
  { title: "TEAM", route: routes.team },
];

export default Header;
