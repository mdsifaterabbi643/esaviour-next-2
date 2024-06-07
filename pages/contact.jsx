import ContactHero from "@/app/components/ContactHero/ContactHero";
import Layout from "./layout";
import ContactFormAddress from "@/app/components/ContactFormAddress/ContactFormAddress";
import Footer2 from "@/app/components/Footer2/Footer2";

const Contact = () => {
  return (
    <div>
      <Layout>
        <div className="bg-white h-screen">
          <ContactHero />

          <ContactFormAddress />

          <Footer2 />
        </div>
      </Layout>
    </div>
  );
};

export default Contact;
