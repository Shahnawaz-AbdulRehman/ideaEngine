import FirstSection from "@/components/firstSection";
import Header from "@/components/Header";
import SecondSection from "@/components/SecondSection";
import Image from "next/image";
import secondImage from "../../public/assets/secondImage.svg";
import secondImageResponsive from "../../public/assets/secondImageResponsive.svg"
import thirdImage from "../../public/assets/thirdImage.svg";
import thirdImageResponsive from "../../public/assets/thirdImageResponsive.svg";
import appleBtn from "../../public/assets/AppStore.png";
import playStore from "../../public/assets/PlayStore.png";
import fourthImage from "../../public/assets/fourthImg.png";
import fourthImageResponsive from "../../public/assets/fourthImgResponsive.png";
import fifthImage from "../../public/assets/fifthImg.png";
import fifthImageResponsive from "../../public/assets/fifthImgResponsive.png";
import subscribe from "../../public/assets/subscribe.png";
import Footer from "@/components/Footer";
import Card from "@/components/Card";
import nft1 from "../../public/assets/nft1.png";
import nft5 from "../../public/assets/nft7.png";
import nft3 from "../../public/assets/nft3.png";
import nft4 from "../../public/assets/nft4.png";
import lineThing1 from "../../public/assets/lineThing3.svg";
import gradient from "../../public/assets/gradientBlue.svg";

export default function Home() {
  return (
    <>
      <div className="flex self-center items-center justify-center bg-black overflow-x-hidden ">

        <main className="maxWidth flex relative z-0 min-h-screen flex-col items-center justify-between px-0  md:px-24 md:pt-0 bg-black max-[1200px] ">

          <Header />
          <FirstSection />

          <div className="absolute left-0 z-[-1] w-[70%] top-[300px]">
            <Image src={lineThing1} />
          </div>

          <SecondSection

            preTitle={"Most loved NFTs of the time"}
            blueText={"Gamified"}
            titleText={"DePin + AI"}
            paragraph={"Mini-games to level up your desired Identity on Smartwatch"}
            sectionImg={secondImage}
            responsiveImage={secondImageResponsive}
          />
          <gradientcontainer className="relative z-2">

            <SecondSection

              preTitle={"Most loved NFTs of the time"}
              blueText={"Quest/NFT"}
              titleText={"Games"}
              paragraph={"Mini-games to level up your desired Identity on Smartwatch"}
              sectionImg={thirdImage}
              responsiveImage={thirdImageResponsive}
            />

            <Image src={gradient} className="absolute top-10 left-[-55%] z-[-1] opacity-70" />
            <Image src={gradient} className="absolute top-60 right-[-55%] z-[-1] opacity-70" />
          </gradientcontainer>

          <div className="gradient-text-container inter">
            <h1 className="gradient-text text-2xl sm:text-4xl xl:text-6xl font-bold mt-10">Swift Blockchain Revolution</h1>
          </div>
          <div className="text-white inter mt-10 inter xl:text-xl  md:w-[55%] text-center">
            Ready to energize your life and turn it into earnings? With Move to Earn, your steps hold real value. Simply walk, run, or exercise to earn. Each step matters.
          </div>
          <div className="sm:w-auto w-[300px]  flex mt-10 gap-4">
            <Image src={playStore} />
            <Image src={appleBtn} />
          </div>


          <SecondSection
            preTitle={"Most loved NFTs of the time"}
            blueText={"Collectibles"}
            titleText={"Marketplace"}
            paragraph={"Mini-games to level up your desired Identity on Smartwatch"}
          />
          <gradientcontainer className="relative z-2">

            <div className=" grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4 my-10 items-center justify-center ms-10">


              <Card img={nft1} hearts={"6"} cryptoName={"Floki Monster"} userName={"User"} ethAmount={"4.89"}/>
              <Card img={nft5} hearts={"7"} cryptoName={"Floki Monster"} userName={"User"} ethAmount={"4.89"}/>
              <Card img={nft3} hearts={"8"} cryptoName={"Floki Monster"} userName={"User"} ethAmount={"4.89"}/>
              <Card img={nft4} hearts={"6"} cryptoName={"Floki Monster"} userName={"User"} ethAmount={"4.89"}/>
            </div>

            <Image src={gradient} className="absolute top-0 left-[-55%] z-[-1] opacity-70" />

          </gradientcontainer>

            <SecondSection

              preTitle={"Most Appreciated NFTs On Sale For the day"}
              titleText={"TokenoMics And Utility"}
              sectionImg={fourthImage}
              responsiveImage={fourthImageResponsive}
            />
          <gradientcontainer className="relative z-2">
          <SecondSection

            preTitle={"Watch and follow celebrities to get the best collection of NFTs"}
            titleText={"Roadmap"}
            sectionImg={fifthImage}
            responsiveImage={fifthImageResponsive}
          />
            <Image src={gradient} className="absolute top-0 left-[-55%] z-[-1] opacity-70" />
            <Image src={gradient} className="absolute bottom-0 right-[-55%] z-[-1] opacity-70" />

          </gradientcontainer>



          <div className="text-white text-5xl mb-5 Oxanium mt-10">
            Join Whitelist
          </div>
          <div>
            <div className="flex p-1 pl-3 rounded-[15px] border text-white border-[#5991ff] ">
              <input className="p-3  bg-opacity-0 reset-input "
                type="email"
                id="email"
                name="email"
                // value={email}
                // onChange={handleChange}
                // required
                placeholder="Enter your email"
              />
              <div className="w-12 ml-10 cursor-pointer">
                <Image src={subscribe} />
              </div>
            </div>
          </div>



          <Footer />
        </main>
      </div>
    </>
  );
}
