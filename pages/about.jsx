import AboutHero from "@/app/components/AboutComponents/AboutHero";
import Layout from "./layout";
import AboutSection_1 from "@/app/components/AboutComponents/AboutSection_1";
import AboutSection_2 from "@/app/components/AboutComponents/AboutSection_2";
import AboutSection_3 from "@/app/components/AboutComponents/AboutSection_3";
import AboutSection_4 from "@/app/components/AboutComponents/AboutSection_4";
import AboutSection_5 from "@/app/components/AboutComponents/AboutSection_5";
import AboutSection_6 from "@/app/components/AboutComponents/AboutSection_6";
import AboutSection_7 from "@/app/components/AboutComponents/AboutSection_7";
import AboutSection_8 from "@/app/components/AboutComponents/AboutSection_8";
import AboutFAQSection from "@/app/components/AboutComponents/AboutFAQSection";
import Footer1 from "@/app/components/Footer1/Footer1";
import Footer2 from "@/app/components/Footer2/Footer2";
import AboutHero2 from "@/SSRcomponents/AboutHero2";

export async function getServerSideProps(context) {
  const res = await fetch(process.env.NEXT_PUBLIC_ABOUT_GET, {
    next: {
      revalidate: 30, // Revalidate data every 30 seconds
    },
  });
  const data = await res.json();

  return {
    props: { data },
  };
}

const About = ({ data }) => {
  //console.log("==== ", data[0]?.hero);

  return (
    <div>
      <Layout>
        {/* <AboutHero /> */}
        <AboutHero2 data={data} />
        <AboutSection_1 />
        <AboutSection_2 />
        <AboutSection_3 />
        <AboutSection_4 />
        <div className="w-[98vw] mx-auto overflow-x-hidden">
          <AboutSection_5 />
        </div>
        <div className="w-[98vw] mx-auto overflow-x-hidden">
          <AboutSection_6 />
        </div>
        <div className="mb-[50px] lg:mb-[50px] w-[98vw] mx-auto overflow-hidden">
          <AboutSection_7 />
        </div>
        <div className="mb-[50px] lg:mb-[50px] w-[98vw] mx-auto overflow-hidden">
          <AboutSection_8 />
        </div>
        <div className="mb-[50px] w-[98vw] mx-auto overflow-hidden">
          <AboutFAQSection />
        </div>
        <div className="w-[98vw] mx-auto overflow-hidden">
          <Footer1 />
        </div>
        <div className="w-[98vw] mx-auto overflow-hidden">
          <Footer2 />
        </div>
      </Layout>
    </div>
  );
};

export default About;
