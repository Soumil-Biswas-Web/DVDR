import React from "react";
import FooterLink from "./components/FooterLink";
import { Link } from "react-router-dom";
import clipBoard from "../contact/components/clipBoard";

const Footer = () => {

  // console.log(location)
  const contacts = [
    {
      name:"DVDR",
      icon:"/DVDR/images/logos/logo.png",
      url: "https://www.youtube.com/channel/UCh5Lyyb0joDw6Uw3KbQuk1w",
    },      
    {
      name:"DVDRCentral",
      icon:"/DVDR/images/logos/logo-inverted.png",
      url: "https://www.youtube.com/c/DVDRCentral",
    },
    {
      name:"email",
      icon:"/DVDR/images/logos/logo-gmail.png",
      detail:"midnightmauraders420@gmail.com",
    },
    {
      name:"facebook",
      icon:"/DVDR/images/logos/logo-facebook.png",
      url: "https://www.facebook.com/gaming/DVDRcinematics",
    },
    {
      name:"twitter",
      icon:"/DVDR/images/logos/logo-twitter.png",
      url: "https://twitter.com/DVDR_YT",
    },
    {
      name:"SoundCloud",
      icon:"/DVDR/images/logos/logo-soundcloud.png",
      url: "https://soundcloud.com/dvdr-central",
    },
    {
      name:"Reddit",
      icon:"/DVDR/images/logos/logo-reddit.png",
      url: "https://www.reddit.com/user/MidnightMauraders420",
    },
    {
      name:"Djakie",
      icon:"/DVDR/images/logos/logo-djakie.png",
      url: "https://www.youtube.com/channel/UCaRT4zl4lXDt5ZHSm3TGuyw",
    },
    {
      name:"Rugino3",
      icon:"/DVDR/images/logos/logo-mwah.png",
      url: "https://soumil-biswas.github.io/",
    },
    {
      name:"VPlay",
      icon:"/DVDR/images/logos/logo-sayu.png",
      url: "https://www.youtube.com/c/VirtualPlayground0",
    },
  ];

  return (
    <footer className="bg-[--background-color] print:hidden w-full">
      <div className="magic-center justify-center px-16 py-5 gap-10">
        <div className="flex place-items-center w-full justify-around flex-wrap gap-2.5">
          <div className="flex place-items-center gap-2.5">
            {contacts.map((contact, index) => {
              if(index > -1 && index < 2) {
                return (
                  <FooterLink key={index} contact={contact} />
                )
              }
            })}
          </div>
          <div className="flex place-items-center gap-2.5">
            {contacts.map((contact, index) => {
              if(index > 1 && index < 7) {
                return (
                  <FooterLink key={index} contact={contact} />
                )
              }
            })}
          </div>
          <div className="flex place-items-center gap-2.5">
            {contacts.map((contact, index) => {
              if(index > 6 && index < 10) {
                return (
                  <FooterLink key={index} contact={contact} />
                )
              }
            })}
          </div>
        </div>

        {/* copyright part */}
        <p className="text-center">© All Copyright {new Date().getFullYear()} by Soumil Biswas</p>
      </div>
    </footer>
  );
};

export default Footer;
