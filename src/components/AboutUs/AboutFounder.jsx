import React from "react";
import RectangleImg from "../../assets/images/aboutUsImg/Rectangle.png";
import RectangleMdImg from "../../assets/images/aboutUsImg/RectangleMd.png";

import RectangleSmNewImg from "../../assets/images/aboutUsImg/RectangleSmNew.png";
import chairPersonImg from "../../assets/images/aboutUsImg/chairPersonImg.png";
import chairPersonImgSm from "../../assets/images/aboutUsImg/chiarPersonSmImg.png";
import visionBgImg from "../../assets/images/aboutUsImg/visionBg.png";
import visionBgImgMd from "../../assets/images/aboutUsImg/visionBgImgMd.png";
import visionBgImgSm from "../../assets/images/aboutUsImg/visionBgImgSm.png";
import { useLanguage } from "../../Context/LanguageContext";
import nl2br from "react-nl2br";

const AboutFounder = () => {
  const { translate } = useLanguage();
  return (
    <section>
      <div
        className="relative w-full h-[3480px] bg-cover  md:hidden lg:hidden block mt-[-180px]"
        style={{
          backgroundImage: `url(${RectangleSmNewImg})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className=" relative pt-[260px]">
          <img
            src={chairPersonImgSm}
            alt="chairperson"
            className=" z-10 w-full"
          />
          <div className="px-4 bg-[#D2E1FF] rounded-[24px] mx-4 mt-[-100px]  shadow-[2px_2px_32.2px_2px_rgba(27,8,123,0.27)]">
            <div className="pt-[140px] pl-6 pr-6 pb-[80px]">
              {" "}
              <h2 className="text-[#020C21] font-[Gilroy-SemiBold] pb-4 text-[40px]  font-normal leading-[48px] tracking-[-1.6px]">
                {translate("why-dara")}
              </h2>
              <p className="text-[#555C6A] font-Inter text-[18px] font-normal leading-[25.2px] pb-6 ">
                {nl2br(translate("growing-text"))}
              </p>
              <p className="text-[#555C6A] font-Inter text-[18px] font-normal  leading-[25.2px]  pb-6">
                {nl2br(translate("para-text2"))}
              </p>
              <p className="text-[#555C6A] font-Inter text-[18px] font-normal leading-[25.2px] pb-6 ">
                {nl2br(translate("para-text3"))}.{" "}
              </p>
              <p className="text-[#555C6A] font-Inter text-[18px] font-normal  leading-[25.2px] pb-6 ">
                {nl2br(translate("para-text4"))}
              </p>
              <h2 className="text-[#020C21] font-Inter pb-2 text-[24px]  font-semibold leading-[28.8px] tracking-[-0.48px]">
                Pharm. Bassey Ebong
              </h2>
              <p className="text-[#353D4D] font-Inter text-[18px] font-medium leading-[26.1px]">
                {nl2br(translate("founder-title"))}{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="relative mt-[700px]">
          <div className="absolute inset-0 flex flex-col justify-center items-center gap-[100px]">
            {/* Vision Card */}
            <div
              className="relative  rounded-xl pl-11 pb-11 bg-cover bg-center"
              style={{ backgroundImage: `url(${visionBgImgSm})` }}
            >
              <div
                className="bg-[#F3FAFD] bg-opacity-100 py-12 px-6 rounded-md w-[317px] h-[491px] text-center"
                style={{
                  borderRadius: "14.677px",

                  boxShadow: "-1.835px 4.587px 3.669px rgba(0, 0, 0, 0.24)",
                }}
              >
                <h2 className="text-[#020C21] font-[Gilroy-SemiBold] text-[36px] text-center font-normal leading-[43.2px]  pb-4 tracking-[-1.44px]">
                  {nl2br(translate("Our Vision"))}
                </h2>

                <p className="text-[#555C6A] font-Inter text-[20px] text-center font-medium leading-[28px] w-[269px]">
                  {nl2br(translate("vision-text"))}
                </p>
              </div>
            </div>

            <div
              className="relative  rounded-xl pl-11 pb-11 bg-cover bg-center"
              style={{ backgroundImage: `url(${visionBgImgSm})` }}
            >
              <div
                className="bg-[#F3FAFD] bg-opacity-100 py-12 px-6 rounded-md w-[317px] h-[491px] text-center"
                style={{
                  borderRadius: "14.677px",

                  boxShadow: "-1.835px 4.587px 3.669px rgba(0, 0, 0, 0.24)",
                }}
              >
                <h2 className="text-[#020C21] font-[Gilroy-SemiBold] text-[36px] text-center font-normal leading-[43.2px]  pb-4 tracking-[-1.44px]">
                  {nl2br(translate("mission-title"))}
                </h2>

                <p className="text-[#555C6A] font-Inter text-[20px] text-center font-medium leading-[28px] w-[269px]">
                  {nl2br(translate("mission-text"))}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-contain relative bg-center  h-[2020px] w-full md:hidden hidden lg:block mt-[-320px] lg:px-[80px] md:px-[40px] ">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70 lg:block"
          style={{
            backgroundImage: `url(${RectangleImg})`,
          }}
        ></div>
        <div className="flex pt-[400px]  justify-center items-center relative">
          <img
            src={chairPersonImg}
            alt="chairperson image"
            className="lg:w-[457px] h-[512px] mr-[-40px] z-10 rounded-2xl md:w-[250px] object-contain md:pr-[-1000px]"
          />
          <div
            className="flex flex-col justify-center md:w-[654px] lg:w-[893px] md:p-[40px_20px] lg:p-[80px_60px] items-start bg-[#D2E1FF] rounded-[24px]  shadow-[2px_2px_32.2px_2px_rgba(27,8,123,0.27)]"
            style={{
              width: "893px",
            }}
          >
            <h2 className="text-[#020C21] font-[Gilroy-SemiBold] pb-4 lg:text-[40px] md:text-[36px] font-normal leading-[48px] tracking-[-1.6px]">
              {translate("why-dara")}
            </h2>
            <p className="text-[#555C6A] font-Inter text-[18px] font-normal text-left leading-[25.2px] pb-6">
              {nl2br(translate("growing-text"))}
            </p>
            <p className="text-[#555C6A] font-Inter text-[18px] font-normal text-left leading-[25.2px]  pb-6">
              {nl2br(translate("para-text2"))}
            </p>
            <p className="text-[#555C6A] font-Inter text-[18px] font-normal text-left leading-[25.2px] pb-6 ">
              {nl2br(translate("para-text3"))}.{" "}
            </p>
            <p className="text-[#555C6A] font-Inter text-[18px] font-normal text-left leading-[25.2px] pb-6 ">
              {nl2br(translate("para-text4"))}
            </p>
            <h2 className="text-[#020C21] font-Inter pb-2 text-[24px]  font-semibold leading-[28.8px] tracking-[-0.48px]">
              Pharm. Bassey Ebong
            </h2>
            <p className="text-[#353D4D] font-Inter text-[18px] font-medium leading-[26.1px]">
              {nl2br(translate("founder-title"))}{" "}
            </p>
          </div>
        </div>
        <div className="pt-[650px] relative">
          <div className="absolute inset-0 flex  justify-center items-center gap-[48px]">
            {/* Vision Card */}
            <div
              className="relative  rounded-xl pl-8 pb-8 bg-cover bg-center"
              style={{ backgroundImage: `url(${visionBgImg})` }}
            >
              <div
                className="bg-[#F3FAFD] bg-opacity-100 py-12 px-6 rounded-md w-[532px] h-[374px] text-center"
                style={{
                  borderRadius: "14.677px",

                  boxShadow: "-1.835px 4.587px 3.669px rgba(0, 0, 0, 0.24)",
                }}
              >
                <h2 className="text-[#020C21] font-[Gilroy-SemiBold] text-[36px]  font-normal leading-[43.2px]  pb-4 tracking-[-1.44px]">
                  {nl2br(translate("Our Vision"))}
                </h2>

                <p className="text-[#555C6A] font-Inter text-[20px] font-medium leading-[28px] w-[484px]">
                  {nl2br(translate("vision-text"))}
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div
              className="relative  rounded-xl pl-8 pb-8 bg-cover bg-center"
              style={{ backgroundImage: `url(${visionBgImg})` }}
            >
              <div
                className="bg-[#F3FAFD] bg-opacity-100 py-12 px-6 rounded-md w-[532px] h-[374px] text-center"
                style={{
                  borderRadius: "14.677px",

                  boxShadow: "-1.835px 4.587px 3.669px rgba(0, 0, 0, 0.24)",
                }}
              >
                <h2 className="text-[#020C21] font-[Gilroy-SemiBold] text-[36px]  font-normal leading-[43.2px]  pb-4 tracking-[-1.44px]">
                  {nl2br(translate("mission-title"))}
                </h2>

                <p className="text-[#555C6A] font-Inter text-[20px] font-medium leading-[28px]">
                  {nl2br(translate("mission-text"))}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-contain relative bg-center  h-[2500px] w-full  hidden md:block lg:hidden md:mt-[-300px] md:px-[40px] ">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70 md:block"
          style={{
            backgroundImage: `url(${RectangleMdImg})`,
          }}
        ></div>
        <div className="flex flex-col pt-[350px]  justify-center items-center relative">
          <img
            src={chairPersonImg}
            alt="chairperson image"
            className=" h-[812px]  z-10 rounded-2xl md:w-full object-cover "
          />
          <div
            className="flex flex-col justify-center  mx-4 md:p-[40px_20px]  items-start bg-[#D2E1FF] rounded-[24px]  shadow-[2px_2px_32.2px_2px_rgba(27,8,123,0.27)]"
            style={{
              width: "100%",
            }}
          >
            <h2 className="text-[#020C21] font-[Gilroy-SemiBold] pb-4 lg:text-[40px] md:text-[36px] font-normal leading-[48px] tracking-[-1.6px]">
              {translate("why-dara")}
            </h2>
            <p className="text-[#555C6A] font-Inter text-[18px] font-normal text-left leading-[25.2px] pb-6">
              {nl2br(translate("growing-text"))}
            </p>
            <p className="text-[#555C6A] font-Inter text-[18px] font-normal text-left leading-[25.2px]  pb-6">
              {nl2br(translate("para-text2"))}
            </p>
            <p className="text-[#555C6A] font-Inter text-[18px] font-normal text-left leading-[25.2px] pb-6 ">
              {nl2br(translate("para-text3"))}{" "}
            </p>
            <p className="text-[#555C6A] font-Inter text-[18px] font-normal text-left leading-[25.2px] pb-6 ">
              {nl2br(translate("para-text4"))}
            </p>
            <h2 className="text-[#020C21] font-Inter pb-2 text-[24px]  font-semibold leading-[28.8px] tracking-[-0.48px]">
              Pharm. Bassey Ebong
            </h2>
            <p className="text-[#353D4D] font-Inter text-[18px] font-medium leading-[26.1px]">
              {nl2br(translate("founder-title"))}{" "}
            </p>
          </div>
        </div>
        <div className="pt-[550px] relative">
          <div className="absolute inset-0 flex justify-center items-center gap-[56px] ">
            {/* Vision Card */}
            <div
              className="relative  rounded-xl pl-4 pb-4 bg-cover bg-center w-[300px]"
              style={{ backgroundImage: `url(${visionBgImgMd})` }}
            >
              <div
                className="bg-[#F3FAFD] bg-opacity-100 py-12 px-6 rounded-md w-[300px] h-[392px] text-center"
                style={{
                  borderRadius: "14.677px",

                  boxShadow: "-1.835px 4.587px 3.669px rgba(0, 0, 0, 0.24)",
                }}
              >
                <h2 className="text-[#020C21] font-[Gilroy-SemiBold] text-[36px]  font-normal leading-[43.2px]  pb-4 tracking-[-1.44px]">
                  {nl2br(translate("Our Vision"))}
                </h2>

                <p className="text-[#555C6A] font-Inter text-[16px] font-medium leading-[28px] ">
                  {nl2br(translate("vision-text"))}
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div
              className="relative  rounded-xl pl-4 pb-4 bg-cover bg-center w-[300px]"
              style={{ backgroundImage: `url(${visionBgImgMd})` }}
            >
              <div
                className="bg-[#F3FAFD] bg-opacity-100 py-12 px-6 rounded-md w-[300px] h-[392px]  text-center"
                style={{
                  borderRadius: "14.677px",

                  boxShadow: "-1.835px 4.587px 3.669px rgba(0, 0, 0, 0.24)",
                }}
              >
                <h2 className="text-[#020C21] font-[Gilroy-SemiBold] text-[36px]  font-normal leading-[43.2px]  pb-4 tracking-[-1.44px]">
                  {nl2br(translate("mission-title"))}
                </h2>

                <p className="text-[#555C6A] font-Inter text-[16px] font-medium leading-[28px] ">
                  {nl2br(translate("mission-text"))}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFounder;
