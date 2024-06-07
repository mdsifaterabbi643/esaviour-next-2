import Hero from "@/app/components/Hero/Hero";
import Layout from "./layout";
import HomeGetQuoteButton from "@/app/components/HomeGetQuoteButton";
import HomeIntro from "@/app/components/HomeIntro/HomeIntro";
import TabContextXSM from "@/app/components/HomeTabIndex/TabContextXSM";
import TabContextSM from "@/app/components/HomeTabIndex/TabContextSM";
import TabContextMD_LG from "@/app/components/HomeTabIndex/TabContextMD_LG";
import TabContextXL from "@/app/components/HomeTabIndex/TabContextXL";
import HomePageSection5 from "@/app/components/HomePageSection5";
import BrandSlider from "@/app/components/BrandSlider/BrandSlider";
import CreativeSlider from "@/app/components/CreativeSlider/CreativeSlider";
import CreativeSliderSM from "@/app/components/CreativeSlider/CreativeSliderSM";
import CreativeSliderMD from "@/app/components/CreativeSlider/CreativeSliderMD";
import CreativeSliderXL from "@/app/components/CreativeSlider/CreativeSliderXL";
import ClientsComments from "@/app/components/ClientSlider/ClientsComments";
import ClientsCommentsSM from "@/app/components/ClientSlider/ClientsCommentsSM";
import ClientsCommentsMD from "@/app/components/ClientSlider/ClientsCommentsMD";
import ClientsCommentsXL from "@/app/components/ClientSlider/ClientsCommentsXL";
import Footer1 from "@/app/components/Footer1/Footer1";
import Footer2 from "@/app/components/Footer2/Footer2";
const Home = () => {
  return (
    <div>
      <Layout>
        <Hero />
        <HomeGetQuoteButton />
        <div className="w-[98vw] mx-auto overflow-hidden">
          <HomeIntro />
        </div>
        <div className="sm:hidden overflow-x-hidden">
          <TabContextXSM />
        </div>
        <div className="hidden sm:block md:hidden overflow-x-hidden">
          {/* For small device only 640px to 767px */}
          <TabContextSM />
        </div>
        <div className="hidden md:block xl:hidden overflow-x-hidden">
          {/* For medium (768px to 1023px) and large devices(1024px to 1279px) */}
          <TabContextMD_LG />
        </div>
        <div className="hidden xl:block overflow-x-hidden">
          {/* For Extra Large Devices 1280px to upper */}
          <TabContextXL />
        </div>
        <HomePageSection5 />
        {/* ================== section 6 (The Brands we have worked with) starts from here =====================*/}
        <div className="flex flex-wrap flex-col justify-center items-center mb-0 py-[20px] overflow-x-hidden">
          <div className="basis-1/1">
            <h1 className="text-center py-[20px] text-[24px] xl:text-[40px]">
              The Brands we have <br></br>
              <span className="text-sky-500 TabContextFontSpan2 font-bold">
                worked with
              </span>
            </h1>
          </div>
          <div className="basis-1/1">
            <div className="relative top-0 left-0 xl:h-[220px] pt-[50px] overflow-hidden">
              <BrandSlider />
              <div className="bg-sky-500 w-[300px] h-[90px] absolute top-[30px] left-[-140px] transform rotate-45 -z-10 hidden xl:block"></div>
              <div className="bg-sky-500 w-[300px] h-[90px] absolute top-[30px] right-[-100px] transform rotate-45 -z-10 hidden xl:block"></div>
            </div>
          </div>
        </div>

        {/* ================== section 7 (A Glimpse into our Creative Universe) starts from here =====================*/}
        <div className="flex flex-wrap flex-col justify-center items-center mb-0 overflow-x-hidden">
          <div className="basis-1/1">
            <h1 className="text-center py-[20px] TabContextFontSpan text-[24px] xl:text-[40px]">
              A Glimpse into our <br></br>
              <span className="text-sky-500 TabContextFontSpan2">
                Creative Universe
              </span>
            </h1>
          </div>
        </div>

        <div className="sm:hidden overflow-x-hidden">
          {/* For extra Small */}
          <CreativeSlider />
        </div>
        <div className="hidden sm:block md:hidden overflow-x-hidden">
          {/* For small device */}
          <CreativeSliderSM />
        </div>
        <div className="hidden md:block lg:hidden xl:hidden overflow-x-hidden">
          {/* for md  devices */}
          <CreativeSliderMD />
        </div>
        <div className="hidden lg:block xl:block overflow-x-hidden">
          {/* for lg and xlg device */}
          <CreativeSliderXL />
        </div>

        {/* ================== section 8 (Clients Comments) start from here =====================*/}
        <div className="sm:hidden overflow-x-hidden">
          {/* For extra small device */}
          <ClientsComments />
        </div>
        <div className="hidden sm:block md:hidden overflow-x-hidden">
          {/* For small device */}
          <ClientsCommentsSM />
        </div>
        <div className="hidden md:block xl:hidden overflow-x-hidden">
          {/* For md and lg device */}
          <ClientsCommentsMD />
        </div>
        <div className="hidden xl:block overflow-x-hidden">
          {/* For xl device */}
          <ClientsCommentsXL />
        </div>

        <div className="w-[98vw] mx-auto overflow-hidden mt-[0px]">
          <Footer1 />
        </div>
        <div className="w-[98vw] mx-auto overflow-hidden">
          <Footer2 />
        </div>
      </Layout>
    </div>
  );
};

export default Home;
