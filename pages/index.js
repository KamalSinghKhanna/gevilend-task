import React, { useState, useEffect } from "react";
import Image from "next/image";
import TopAnnouncement from "@/components/TopAnnouncement";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import Carousel from "@/components/Carousel";

export default function Home() {
  const IMAGES = [
    { img: "/half1.png", text: "$hosky", bgColor: "rgb(35, 107, 211)" },
    { img: "/half7.png", text: "Danketsu", bgColor: "rgb(162, 82, 208)" },
    { img: "/half3.png", text: "BitFins", bgColor: "rgb(9, 31, 44)" },
    { img: "/half4.png", text: "future fest", bgColor: "rgb(0, 0, 0)" },
    { img: "/half5.png", text: "Vudu Brigada", bgColor: "rgb(0, 0, 0)" },
    { img: "/half6.png", text: "Pendulum", bgColor: "rgb(0, 0, 0)" },
    { img: "/half2.png", text: "CryptoRaggies", bgColor: "rgb(255, 138, 138)" },
  ];

  const [isAnnouncementVisible, setAnnouncementVisible] = useState(true);

 useEffect(() => {
   const handleScroll = () => {
     const scrollPosition = window.scrollY;
     console.log("Scroll Position:", scrollPosition);

     const scrollThreshold = 100;
     setAnnouncementVisible(scrollPosition < scrollThreshold);
   };

   window.addEventListener("scroll", handleScroll);

   return () => {
     window.removeEventListener("scroll", handleScroll);
   };
 }, []);

  return (
    <div className="w-full h-full">
      {/* Show the announcement based on visibility state */}
  

      <div
        className={
          isAnnouncementVisible
            ? "fixed top-0 z-10 w-full"
            : "fixed top-[-3rem] z-10 w-full"
        }
      >
        <TopAnnouncement />
        <Navbar />
      </div>

      <div className={isAnnouncementVisible ? "pt-24" : "pt-44"}>
        <Banner />
        <Carousel images={IMAGES} />
      </div>
    </div>
  );
}
