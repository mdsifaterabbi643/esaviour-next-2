//import ContactHero from "@/app/components/ContactHero/ContactHero";
import ContactHero2 from "@/SSRcomponents/ContactHero2";
import Layout from "./layout";

import Footer2 from "@/app/components/Footer2/Footer2";
import ContactFormAddress from "@/app/components/ContactFormAddress/ContactFormAddress";

export async function getServerSideProps(context) {
  const res = await fetch(process.env.NEXT_PUBLIC_HERO_GET, {
    next: {
      revalidate: 30, // Revalidate data every 30 seconds
    },
  });
  const data = await res.json();

  return {
    props: { data },
  };
}

const Contact = ({ data }) => {
  return (
    <div>
      <Layout>
        <div className="bg-white h-screen">
          {/* <ContactHero /> */}
          <ContactHero2 data={data} />

          <ContactFormAddress />

          <Footer2 />
        </div>
      </Layout>
    </div>
  );
};

export default Contact;
