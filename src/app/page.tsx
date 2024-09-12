import Header from "@src/components/Header";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-svh bg-black ">
      <div className="relative min-h-screen">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video
            src="https://cdn.prod.website-files.com/606764a311491eafe0e305af%2F668ceed4243a77799e125361_8_Header_Video%206-transcode.mp4"
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          ></video>

          {/* Blackish Overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <Header />
          <div className="min-h-svh lg:min-h-[85vh] flex justify-center items-center">
            <div className="w-full max-w-4xl  text-center">
              <h1 className="text-4xl md:text-6xl lg:text-[80px] xl:text-8xl font-bold text-[#ff2474] mb-4">
                Feusar
              </h1>
              <p className="text-white text-base md:text-lg font-medium mb-12">
                A Revolutionary Platform for Short Videos, <br /> Earn Money By
                Creating Videos. Explore The Next Generation App.
                {/* Empower Your Ambassadors to Sell: A Revolutionary <br /> Social
                Commerce Platform for Short Videos, Shopping, and Rewards */}
              </p>
              <div className="flex flex-col lg:flex-row gap-5 items-center justify-center">
                <div className="bg-white py-1 px-2 rounded-xl w">
                  <Image
                    src="/images/qr.png"
                    alt="QR Code"
                    width={130}
                    height={130}
                  ></Image>
                </div>
                <div className="flex flex-col gap-4 items-center">
                  <Link href="">
                    <Image
                      src="/images/play-store.png"
                      width={192}
                      height={64}
                      alt="playstore"
                    ></Image>
                  </Link>
                  <Link href="">
                    <Image
                      src="/images/app-store.png"
                      width={192}
                      height={64}
                      alt="appstore"
                    ></Image>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
