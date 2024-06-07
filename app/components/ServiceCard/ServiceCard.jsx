import Image from "next/image";
import "./MyShadow.css";

const ServiceCard = ({ props }) => {
  const { id, image, heading, paragraph } = props;

  return (
    <>
      <div className="card card-side bg-base-100 my-[5px] sm:w-[95%] sm:ml-[5px] rounded-[8px] xl:w-[90%] xl:min-h-[120px] xl:mx-auto myShadowDiv">
        <figure className="bg-sky-500 min-w-[80px]">
          <Image
            src={image}
            alt={heading}
            width="50"
            height="50"
            layout="responsive"
            className="w-[50px]"
          />
        </figure>
        <div className="card-body shadow-sm py-[0px] px-2 relative top-0 left-0">
          {/* water mark */}
          <div className="absolute top-[-10px] right-[-10px] xl:w-[80px] xl:h-[80px] hidden lg:block">
            <div className="w-[91px] h-[]">
              <Image
                src="/watermarks/xl_home_water_3.png"
                alt="xl_home_water_3.png"
                width="91"
                height="80"
                layout="responsive"
              ></Image>
            </div>
          </div>
          <h2
            className="text-sky-500 text-[18px] xl:text-[24px] pt-[5px] sm:pt-[5px] sm:pb-[5px] md:pt-[5px] md:pb-[10px]"
            style={{
              fontFamily: "Futura PT, sans-serif",
            }}
          >
            {heading}
          </h2>
          <p
            className="spacegrotesk600 text-[13px] pt-[5px] pb-1 mt-[-10px] sm:text-[12px] md:text-[14px] xl:text-[16px]"
            style={{
              fontFamily: "Futura PT, sans-serif",
            }}
          >
            {paragraph}
          </p>
        </div>
      </div>
    </>
  );
};

//export default ServiceCard;
export { ServiceCard };
