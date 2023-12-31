import React from "react";

import { Button, Img, List, Text } from "components";

const MediumProfilePage = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy items-center justify-start mx-auto w-full">
        <div className="bg-white-A700 flex flex-col justify-start w-full">
          <header className="flex flex-col items-center justify-center md:px-5 w-full">
            <div className="border-b border-blue_gray-100 border-solid flex md:flex-col flex-row md:gap-10 items-center justify-between p-[17px] w-full">
              <div className="header-row ">
                <Img
                  className="h-[41px] w-[215px]"
                  src="images/img_frame9873.svg"
                  alt="frame9873"
                />
                <div className="mobile-menu">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              <div className="flex flex-col sm:hidden items-center justify-start">
                <div className="flex flex-row gap-6 items-start justify-start w-auto">
                  <div className="flex flex-col items-center justify-start w-auto">
                    <Text
                      className="text-base text-center text-gray-900_99 w-auto"
                      size="txtGilroyMedium16"
                    >
                      Dashboard
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start w-auto">
                    <Text
                      className="text-base text-center text-gray-900_99 w-auto"
                      size="txtGilroyMedium16"
                    >
                      Dev.to Profile
                    </Text>
                  </div>
                  <Text
                    className="text-base text-center text-gray-900_01 w-auto"
                    size="txtGilroySemiBold16"
                  >
                    Medium Profile
                  </Text>
                </div>
              </div>
              <div className="flex flex-row gap-6 sm:hidden items-start justify-start mr-[68px] w-[331px]">
                <Button
                  className="cursor-pointer font-medium h-10 min-w-[161px] text-base text-center"
                  shape="round"
                  color="gray_900_02"
                >
                  Write on medium
                </Button>
                <Button
                  className="cursor-pointer font-medium h-10 min-w-[146px] text-base text-center"
                  shape="round"
                  color="gray_900_02"
                >
                  Write on dev.to
                </Button>
              </div>
            </div>
          </header>
          <div className="border border-blue_gray-100 border-solid flex flex-col items-center justify-start max-w-[676px] md:ml-[0] ml-[382px] mt-14 md:px-5 px-[140px] py-8 rounded-lg w-full">
            <div className="flex flex-col gap-4 items-center justify-start w-auto">
              <Img
                className="h-[158px] md:h-auto rounded-[50%] w-[158px]"
                src="images/img_ellipse1.png"
                alt="ellipseOne"
              />
              <div className="flex flex-col gap-1 items-center justify-start w-auto">
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-900 text-center w-auto"
                  size="txtGilroySemiBold36"
                >
                  Jenny Wilson
                </Text>
                <Text
                  className="text-blue_gray-700 text-center text-xl w-auto"
                  size="txtGilroyMedium20"
                >
                  @jennywilson
                </Text>
              </div>
            </div>
          </div>
          <Text
            className="md:ml-[0] ml-[386px] mt-[41px] text-blue_gray-900 text-xl"
            size="txtGilroySemiBold20"
          >
            04 Following
          </Text>
          <List
            className="flex flex-col gap-4 items-center md:ml-[0] ml-[382px] mt-[18px] md:px-5 w-[47%]"
            orientation="vertical"
          >
            <div className="bg-white-A700 border border-blue_gray-200 border-solid flex md:flex-col flex-row gap-4 items-start justify-start max-w-[676px] p-2.5 rounded-lg w-full">
              <Img
                className="h-[60px] md:h-auto rounded-[50%] w-[60px]"
                src="images/img_ellipse2.png"
                alt="ellipseTwo"
              />
              <div className="flex sm:flex-1 flex-col items-end justify-start w-auto sm:w-full">
                <div className="flex flex-col gap-1 items-start justify-start w-auto sm:w-full">
                  <Text
                    className="text-gray-900 text-xl w-full"
                    size="txtGilroyBold20"
                  >
                    Lollypop Design
                  </Text>
                  <Text
                    className="text-base text-gray-900 w-auto"
                    size="txtGilroyRegular16"
                  >
                    Dedicated Experience Design Studio. Website: lollypop.design
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 border border-blue_gray-200 border-solid flex md:flex-col flex-row gap-4 items-start justify-start max-w-[676px] p-2.5 rounded-lg w-full">
              <Img
                className="h-[60px] md:h-auto rounded-[50%] w-[60px]"
                src="images/img_ellipse2_60x60.png"
                alt="ellipseTwo"
              />
              <div className="flex sm:flex-1 flex-col items-end justify-start w-auto sm:w-full">
                <div className="flex flex-col gap-1 items-start justify-start w-auto sm:w-full">
                  <Text
                    className="text-gray-900 text-xl w-full"
                    size="txtGilroyBold20"
                  >
                    FlowMapp
                  </Text>
                  <Text
                    className="text-base text-gray-900 w-auto"
                    size="txtGilroyRegular16"
                  >
                    Design exceptional UX for beautiful websites and products
                    with online{" "}
                  </Text>
                </div>
              </div>
            </div>
          </List>
          <List
            className="flex flex-col gap-4 items-center md:ml-[0] ml-[382px] mt-4 md:px-5 w-[47%]"
            orientation="vertical"
          >
            <div className="bg-white-A700 border border-blue_gray-200 border-solid flex sm:flex-col flex-row gap-4 items-start justify-start max-w-[676px] p-2.5 rounded-lg w-full">
              <Img
                className="h-[60px] md:h-auto rounded-[50%] w-[60px]"
                src="images/img_ellipse2_1.png"
                alt="ellipseTwo"
              />
              <div className="flex flex-col items-end justify-start w-auto">
                <div className="flex flex-col items-start justify-start w-auto">
                  <Text
                    className="text-gray-900 text-xl w-auto"
                    size="txtGilroyBold20"
                  >
                    Google design
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 border border-blue_gray-200 border-solid flex sm:flex-col flex-row gap-4 items-start justify-start max-w-[676px] p-2.5 rounded-lg w-full">
              <Img
                className="h-[60px] md:h-auto rounded-[50%] w-[60px]"
                src="images/img_ellipse2_2.png"
                alt="ellipseTwo"
              />
              <div className="flex flex-col items-end justify-start w-auto">
                <div className="flex flex-col items-start justify-start w-auto">
                  <Text
                    className="text-gray-900 text-xl w-auto"
                    size="txtGilroyBold20"
                  >
                    Muzli - Design Inspiration
                  </Text>
                </div>
              </div>
            </div>
          </List>
          <div className="bg-gray-900_04 flex flex-col gap-6 items-start justify-end mt-[120px] p-7 sm:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start max-w-[1125px] mx-auto md:px-5 w-full">
              <Img
                className="h-[41px] w-[198px]"
                src="images/img_frame9873_white_a700.svg"
                alt="frame9873_One"
              />
              <div className="flex flex-col gap-[15px] items-start justify-start md:ml-[0] ml-[126px]">
                <Text
                  className="text-base text-white-A700"
                  size="txtGilroyMedium16WhiteA700"
                >
                  Quick Links
                </Text>
                <Text
                  className="text-sm text-white-A700"
                  size="txtGilroyMedium14WhiteA700"
                >
                  Dashboard
                </Text>
                <Text
                  className="text-sm text-white-A700"
                  size="txtGilroyMedium14WhiteA700"
                >
                  Dev.to Profile
                </Text>
                <Text
                  className="text-sm text-white-A700"
                  size="txtGilroyMedium14WhiteA700"
                >
                  Medium Profile
                </Text>
                <Text
                  className="text-sm text-white-A700"
                  size="txtGilroyMedium14WhiteA700"
                >
                  Write on Medium
                </Text>
                <Text
                  className="text-sm text-white-A700"
                  size="txtGilroyMedium14WhiteA700"
                >
                  Write on Dev.to
                </Text>
              </div>
              <div className="flex flex-col gap-3.5 items-start justify-start md:ml-[0] ml-[126px]">
                <Text
                  className="text-base text-white-A700"
                  size="txtGilroyMedium16WhiteA700"
                >
                  Company
                </Text>
                <Text
                  className="text-sm text-white-A700"
                  size="txtGilroyMedium14WhiteA700"
                >
                  About
                </Text>
                <a href="javascript:" className="text-sm text-white-A700">
                  <Text size="txtGilroyMedium14WhiteA700">Careers</Text>
                </a>
                <Text
                  className="text-sm text-white-A700"
                  size="txtGilroyMedium14WhiteA700"
                >
                  Writers
                </Text>
                <Text
                  className="text-sm text-white-A700"
                  size="txtGilroyMedium14WhiteA700"
                >
                  Blog
                </Text>
              </div>
              <div className="flex flex-col gap-3.5 items-start justify-start md:ml-[0] ml-[126px]">
                <Text
                  className="text-base text-white-A700"
                  size="txtGilroyMedium16WhiteA700"
                >
                  Help
                </Text>
                <a href="javascript:" className="text-sm text-white-A700">
                  <Text size="txtGilroyMedium14WhiteA700">FAQs</Text>
                </a>
                <a href="javascript:" className="text-sm text-white-A700">
                  <Text size="txtGilroyMedium14WhiteA700">
                    Terms & Conditions
                  </Text>
                </a>
                <a href="javascript:" className="text-sm text-white-A700">
                  <Text size="txtGilroyMedium14WhiteA700">Privacy Policy</Text>
                </a>
              </div>
              <div className="flex md:flex-1 flex-col gap-[19px] items-start justify-start md:ml-[0] ml-[126px] md:mt-0 mt-[37px] w-[11%] md:w-full">
                <Text
                  className="text-lg text-white-A700"
                  size="txtGilroyBold18WhiteA700"
                >
                  Connect on
                </Text>
                <div className="flex flex-row gap-5 items-center justify-between w-full">
                  <Img
                    className="h-[25px] w-[25px]"
                    src="images/img_instagram31.svg"
                    alt="instagramThirtyOne"
                  />
                  <Img
                    className="h-[25px] w-[25px]"
                    src="images/img_whatsapp21.svg"
                    alt="whatsappTwentyOne"
                  />
                  <Img
                    className="h-[25px] w-[25px]"
                    src="images/img_linkedin21.svg"
                    alt="linkedinTwentyOne"
                  />
                </div>
              </div>
            </div>
            <Text
              className="md:ml-[0] ml-[120px] text-center text-sm text-white-A700"
              size="txtGilroyRegular14"
            >
              2022 Writista all rights reserved
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default MediumProfilePage;
