import ServiceHero from "@/app/components/ServicePageComponents/ServiceHero";
import Layout from "./layout";
import ServiceTemplate from "@/app/components/ServicePageComponents/ServiceTemplate";
import Footer1 from "@/app/components/Footer1/Footer1";
import Footer2 from "@/app/components/Footer2/Footer2";

const Services = () => {
  return (
    <div>
      <Layout>
        <ServiceHero />
        <h1 className="text-[22px] mt-[30px] xl:text-[40px] text-center xl:mt-[80px] mb-[20px]">
          Our Best
          <span className="text-sky-500 font-bold">&nbsp;Selling Services</span>
        </h1>
        <ServiceTemplate />
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

export default Services;
