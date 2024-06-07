import PortfolioHero from "@/app/components/PortfolioHero/PortfolioHero";
import Layout from "./layout";
import PortfolioTabContents from "@/app/components/PortfolioTabContents/PortfolioTabContents";
import FooterPortfolio from "@/app/components/FooterPortfolio/FooterPortfolio";

const Portfolio = () => {
  return (
    <div>
      <Layout>
        <PortfolioHero />
        <div className="w-[98vw] mx-auto overflow-hidden">
          <PortfolioTabContents />
        </div>
        <div className="w-[98vw] mx-auto overflow-hidden">
          <FooterPortfolio />
        </div>
      </Layout>
    </div>
  );
};

export default Portfolio;
