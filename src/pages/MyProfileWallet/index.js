import React from "react";

import {
  Row,
  Column,
  Img,
  Text,
  Stack,
  Button,
  List,
  Line,
  Input,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";

const MyProfileWalletPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Row className="bg-white_A700 font-outfit items-center mx-[auto] w-[100%]">
        <aside className="items-center w-[21%]">
          <Column className="">
            <Column className="bg-gray_50 border-bw15 border-gray_100 border-solid justify-center lg:p-[14px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] w-[100%]">
              <Column className="lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[66%]">
                <Row className="font-outfit items-center justify-between w-[100%]">
                  <Img
                    src="images/img_ellipse1015.png"
                    className="lg:h-[44px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] rounded-radius50 lg:w-[43px] xl:w-[49px] 2xl:w-[56px] 3xl:w-[67px]"
                    alt="Ellipse1015"
                  />
                  <Column className="w-[60%]">
                    <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 tracking-ls1 w-[auto]">
                      Kevin Cranel
                    </Text>
                    <Text className="font-normal 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 tracking-ls1 w-[auto]">
                      @kecrane
                    </Text>
                  </Column>
                </Row>
                <Text className="font-medium font-urbanist lg:mt-[39px] xl:mt-[45px] 2xl:mt-[51px] 3xl:mt-[61px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-black_900 tracking-ls1 w-[auto]">
                  GENERAL
                </Text>
                <Row className="font-urbanist items-center lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] pl-[2px] py-[2px] w-[75%]">
                  <Img
                    src="images/img_clock.svg"
                    className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                    alt="clock"
                  />
                  <Text className="font-medium lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_500 tracking-ls1 w-[auto]">
                    Dashboard
                  </Text>
                </Row>
                <Row className="font-urbanist lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] pl-[1px] py-[1px] w-[65%]">
                  <Img
                    src="images/img_car.svg"
                    className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] ml-[1px] my-[1px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                    alt="car"
                  />
                  <Text className="font-medium lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_500 tracking-ls1 w-[auto]">
                    Message
                  </Text>
                </Row>
                <Row className="font-urbanist lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] pl-[1px] py-[1px] w-[62%]">
                  <Img
                    src="images/img_settings.svg"
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] ml-[1px] my-[2px] w-[19%]"
                    alt="settings"
                  />
                  <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_500 tracking-ls1 w-[auto]">
                    Settings
                  </Text>
                </Row>
                <Text className="font-medium font-urbanist lg:mt-[31px] xl:mt-[36px] 2xl:mt-[41px] 3xl:mt-[49px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_900 tracking-ls1 w-[auto]">
                  MARKETPLACE
                </Text>
                <Row className="font-urbanist items-center lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] pl-[2px] py-[2px] w-[57%]">
                  <Img
                    src="images/img_user.svg"
                    className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] ml-[1px] w-[19%]"
                    alt="user"
                  />
                  <Text className="font-medium lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_500 tracking-ls1 w-[auto]">
                    Market
                  </Text>
                </Row>
                <Row className="font-urbanist items-center lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] pl-[1px] py-[1px] w-[70%]">
                  <Img
                    src="images/img_judge.svg"
                    className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] ml-[1px] mt-[1px] w-[15%]"
                    alt="judge"
                  />
                  <Text className="font-medium lg:ml-[16px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_500 tracking-ls1 w-[auto]">
                    Active Bid
                  </Text>
                </Row>
                <Row className="font-urbanist items-center ml-[2px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[52%]">
                  <Img
                    src="images/img_clock_17X20.svg"
                    className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] w-[22%]"
                    alt="clock One"
                  />
                  <Text className="font-medium mb-[1px] lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_500 tracking-ls1 w-[auto]">
                    Saved
                  </Text>
                </Row>
                <Text className="font-medium font-urbanist lg:mt-[34px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[52px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_900 tracking-ls1 w-[auto]">
                  MY PROFILE
                </Text>
                <Row className="font-urbanist items-center lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] pl-[2px] py-[2px] w-[69%]">
                  <Img
                    src="images/img_user_20X20.svg"
                    className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                    alt="user One"
                  />
                  <Text className="font-medium lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_500 tracking-ls1 w-[auto]">
                    Collection
                  </Text>
                </Row>
              </Column>
              <Row className="bg-gray_900_5f items-center lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[9px] rounded-radius10 w-[100%]">
                <Img
                  src="images/img_calculator.svg"
                  className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] w-[8%]"
                  alt="calculator"
                />
                <Text className="font-medium lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] my-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_902 tracking-ls1 w-[auto]">
                  Wallet
                </Text>
              </Row>
              <Column className="font-urbanist lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:my-[13px] xl:my-[15px] 2xl:my-[17px] 3xl:my-[20px] w-[88%]">
                <Row className="pl-[1px] py-[1px] w-[42%]">
                  <Img
                    src="images/img_clock_20X20.svg"
                    className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] ml-[1px] my-[1px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                    alt="clock Two"
                  />
                  <Text className="font-medium lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_500 tracking-ls1 w-[auto]">
                    History
                  </Text>
                </Row>
                <Stack className="lg:h-[201px] xl:h-[230px] 2xl:h-[259px] 3xl:h-[310px] lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] w-[100%]">
                  <Column className="absolute bg-gray_902 bottom-[0] items-center justify-end lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[16px] rounded-radius15 w-[100%]">
                    <Text className="font-semibold lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-white_A700 tracking-ls1 w-[auto]">
                      Help Center
                    </Text>
                    <Text className="font-normal leading-[180.00%] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center text-gray_400 tracking-ls1 w-[80%]">
                      Having trouble in Enefti?
                      <br />
                      Please contact us for more question
                    </Text>
                    <Button
                      className="font-medium lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center tracking-ls1 w-[100%]"
                      size="md"
                      variant="FillWhiteA700"
                    >
                      Go To Help Center
                    </Button>
                  </Column>
                  <Button
                    className="absolute flex lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] inset-x-[0] items-center justify-center mx-[auto] rounded-radius50 top-[0] lg:w-[38px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
                    size="lgIcn"
                    variant="icbOutlineGray5003f"
                  >
                    <Img
                      src="images/img_question.svg"
                      className="flex items-center justify-center lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px]"
                      alt="question"
                    />
                  </Button>
                </Stack>
              </Column>
            </Column>
          </Column>
        </aside>
        <Stack className="font-urbanist 2xl:h-[1074px] 3xl:h-[1289px] lg:h-[835px] xl:h-[955px] w-[79%]">
          <Column className="absolute bottom-[3%] left-[3%] w-[65%]">
            <Text className="font-semibold lg:text-[26px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[40px] text-black_900 tracking-ls1 w-[auto]">
              Wallet
            </Text>
            <List
              className="lg:gap-[14px] xl:gap-[16px] 2xl:gap-[19px] 3xl:gap-[22px] grid grid-cols-3 min-h-[auto] lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[100%]"
              orientation="horizontal"
            >
              <Column className="bg-white_A700 outline outline-[0.75px] outline-gray_100 lg:p-[18px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius15 shadow-bs1 w-[100%]">
                <Button
                  className="flex lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] items-center justify-center rounded-radius50 lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]"
                  size="mdIcn"
                  variant="icbFillGray50"
                >
                  <Img
                    src="images/img_frame162465.png"
                    className="flex items-center justify-center lg:h-[15px] xl:h-[17px] 2xl:h-[20px] 3xl:h-[23px]"
                    alt="Frame162465"
                  />
                </Button>
                <Text className="font-normal lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_500 tracking-ls1 w-[auto]">
                  Total Spending
                </Text>
                <Text className="font-semibold lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-black_900 w-[auto]">
                  $432,215.32
                </Text>
                <Row className="items-center 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] pl-[1px] py-[1px] w-[91%]">
                  <Img
                    src="images/img_cursor.svg"
                    className="2xl:h-[10px] 3xl:h-[11px] lg:h-[7px] xl:h-[9px] w-[10%]"
                    alt="cursor"
                  />
                  <Text className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] my-[4px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-green_600 tracking-ls1 w-[auto]">
                    +2.4%
                  </Text>
                  <div className="bg-gray_500 xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] rounded-radius50 xl:w-[3px] lg:w-[3px] 3xl:w-[4px] 2xl:w-[4px]"></div>
                  <Text className="font-normal mb-[3px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 tracking-ls1 w-[auto]">
                    May 17, 2022
                  </Text>
                </Row>
              </Column>
              <Column className="bg-white_A700 outline outline-[0.75px] outline-gray_100 lg:p-[18px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius15 shadow-bs1 w-[100%]">
                <Button
                  className="flex lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] items-center justify-center rounded-radius50 lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]"
                  size="mdIcn"
                  variant="icbFillGray50"
                >
                  <Img
                    src="images/img_frame162465_gray_902.png"
                    className="flex items-center justify-center lg:h-[15px] xl:h-[17px] 2xl:h-[20px] 3xl:h-[23px]"
                    alt="Frame162465 One"
                  />
                </Button>
                <Text className="font-normal lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_500 tracking-ls1 w-[auto]">
                  Total Income
                </Text>
                <Text className="font-semibold lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-black_900 w-[auto]">
                  $21,579.22
                </Text>
                <Row className="items-center 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] pl-[1px] py-[1px] w-[89%]">
                  <Img
                    src="images/img_trendingup.svg"
                    className="2xl:h-[10px] 3xl:h-[11px] lg:h-[7px] xl:h-[9px] w-[10%]"
                    alt="trendingup"
                  />
                  <Text className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] my-[4px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_600 tracking-ls1 w-[auto]">
                    -2.32
                  </Text>
                  <div className="bg-gray_500 xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] rounded-radius50 xl:w-[3px] lg:w-[3px] 3xl:w-[4px] 2xl:w-[4px]"></div>
                  <Text className="font-normal mb-[3px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 tracking-ls1 w-[auto]">
                    May 17, 2022
                  </Text>
                </Row>
              </Column>
              <Column className="bg-white_A700 outline outline-[0.75px] outline-gray_100 lg:p-[17px] xl:p-[20px] 2xl:p-[23px] 3xl:p-[27px] rounded-radius15 shadow-bs1 w-[100%]">
                <Button
                  className="flex lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] items-center justify-center ml-[1px] rounded-radius50 lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]"
                  size="mdIcn"
                  variant="icbFillGray50"
                >
                  <Img
                    src="images/img_frame162465_gray_902_42X42.png"
                    className="flex items-center justify-center"
                    alt="Frame162465 Two"
                  />
                </Button>
                <Text className="font-normal ml-[1px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_500 tracking-ls1 w-[auto]">
                  Total Saving
                </Text>
                <Text className="font-semibold ml-[1px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-black_900 w-[auto]">
                  $68,483.16
                </Text>
                <Row className="items-center mb-[2px] ml-[1px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] pl-[1px] py-[1px] w-[90%]">
                  <Img
                    src="images/img_cursor.svg"
                    className="2xl:h-[10px] 3xl:h-[11px] lg:h-[7px] xl:h-[9px] w-[10%]"
                    alt="cursor One"
                  />
                  <Text className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] my-[4px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-green_600 tracking-ls1 w-[auto]">
                    +2.4%
                  </Text>
                  <div className="bg-gray_500 xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] rounded-radius50 xl:w-[3px] lg:w-[3px] 3xl:w-[4px] 2xl:w-[4px]"></div>
                  <Text className="font-normal mb-[3px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 tracking-ls1 w-[auto]">
                    May 17, 2022
                  </Text>
                </Row>
              </Column>
            </List>
            <footer className="lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] w-[100%]">
              <Column className="items-center w-[100%]">
                <Row className="justify-between w-[100%]">
                  <Text className="font-outfit font-semibold lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-black_900 tracking-ls1 w-[auto]">
                    Recent Activity
                  </Text>
                  <Text className="font-medium font-urbanist mt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_902 tracking-ls1 w-[auto]">
                    View All
                  </Text>
                </Row>
                <Column className="bg-white_A700 items-center justify-end lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] outline outline-[0.75px] outline-gray_100 lg:py-[18px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] rounded-radius15 shadow-bs1 w-[100%]">
                  <Row className="mt-[1px] w-[94%]">
                    <Text className="font-medium my-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 tracking-ls1 w-[auto]">
                      Item List
                    </Text>
                    <Text className="font-medium lg:ml-[146px] xl:ml-[167px] 2xl:ml-[188px] 3xl:ml-[225px] my-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 tracking-ls1 w-[auto]">
                      Status
                    </Text>
                    <Text className="font-medium lg:ml-[56px] xl:ml-[64px] 2xl:ml-[72px] 3xl:ml-[86px] mt-[2px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 tracking-ls1 w-[auto]">
                      Open Price
                    </Text>
                    <Text className="font-medium mb-[2px] lg:ml-[55px] xl:ml-[63px] 2xl:ml-[71px] 3xl:ml-[85px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 tracking-ls1 w-[auto]">
                      Your Offer
                    </Text>
                    <Text className="font-medium mb-[2px] lg:ml-[55px] xl:ml-[63px] 2xl:ml-[71px] 3xl:ml-[85px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 tracking-ls1 w-[auto]">
                      Time Left
                    </Text>
                  </Row>
                  <Line className="bg-gray_100 h-[1.5px] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[100%]" />
                  <List
                    className="gap-[0] min-h-[auto] lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] lg:pr-[16px] xl:pr-[18px] 2xl:pr-[21px] 3xl:pr-[25px] w-[94%]"
                    orientation="vertical"
                  >
                    <Row className="items-center my-[0] w-[100%]">
                      <Img
                        src="images/img_ellipse1018_11.png"
                        className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] rounded-radius50 lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]"
                        alt="Ellipse1018"
                      />
                      <Column className="lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] w-[26%]">
                        <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 tracking-ls1 w-[auto]">
                          Peachy Puch#22
                        </Text>
                        <Text className="font-medium mt-[4px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_500 tracking-ls1 w-[auto]">
                          From Mindblowonstudio
                        </Text>
                      </Column>
                      <Text className="font-medium lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                        Actived
                      </Text>
                      <Img
                        src="images/img_sort.svg"
                        className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] lg:ml-[52px] xl:ml-[59px] 2xl:ml-[67px] 3xl:ml-[80px] w-[1%]"
                        alt="sort"
                      />
                      <Text className="font-medium 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                        5.62 ETH
                      </Text>
                      <Img
                        src="images/img_sort.svg"
                        className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] lg:ml-[52px] xl:ml-[59px] 2xl:ml-[67px] 3xl:ml-[80px] w-[1%]"
                        alt="sort One"
                      />
                      <Text className="font-medium 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                        5.62 ETH
                      </Text>
                      <Text className="font-medium lg:ml-[45px] xl:ml-[52px] 2xl:ml-[59px] 3xl:ml-[70px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                        1h 19m
                      </Text>
                    </Row>
                    <Line className="self-center w-[100%] h-[1.5px] bg-gray_100" />
                    <Row className="items-center my-[0] w-[100%]">
                      <Img
                        src="images/img_duration_193X240.png"
                        className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] rounded-radius50 lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]"
                        alt="Ellipse1018 One"
                      />
                      <Column className="lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] w-[26%]">
                        <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 tracking-ls1 w-[auto]">
                          Dayco Serpentine Belt
                        </Text>
                        <Text className="font-medium lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_500 tracking-ls1 w-[auto]">
                          From Marvin McKinney
                        </Text>
                      </Column>
                      <Text className="font-medium lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                        On Going
                      </Text>
                      <Img
                        src="images/img_sort.svg"
                        className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] lg:ml-[42px] xl:ml-[48px] 2xl:ml-[55px] 3xl:ml-[66px] w-[1%]"
                        alt="sort One"
                      />
                      <Text className="font-medium 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                        5.62 ETH
                      </Text>
                      <Img
                        src="images/img_sort.svg"
                        className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] lg:ml-[52px] xl:ml-[59px] 2xl:ml-[67px] 3xl:ml-[80px] w-[1%]"
                        alt="sort One One"
                      />
                      <Text className="font-medium 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                        5.62 ETH
                      </Text>
                      <Text className="font-medium lg:ml-[45px] xl:ml-[52px] 2xl:ml-[59px] 3xl:ml-[70px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                        1h 19m
                      </Text>
                    </Row>
                    <Line className="self-center w-[100%] h-[1.5px] bg-gray_100" />
                    <Row className="items-center my-[0] w-[100%]">
                      <Img
                        src="images/img_ellipse1018_12.png"
                        className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] rounded-radius50 lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]"
                        alt="Ellipse1018 Two"
                      />
                      <Column className="lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] w-[26%]">
                        <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 tracking-ls1 w-[auto]">
                          Pile of Many Plates
                        </Text>
                        <Text className="font-medium mt-[4px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_500 tracking-ls1 w-[auto]">
                          From Ralphi Arness
                        </Text>
                      </Column>
                      <Text className="font-medium lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                        On Going
                      </Text>
                      <Img
                        src="images/img_sort.svg"
                        className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] lg:ml-[42px] xl:ml-[48px] 2xl:ml-[55px] 3xl:ml-[66px] w-[1%]"
                        alt="sort Two"
                      />
                      <Text className="font-medium 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                        5.62 ETH
                      </Text>
                      <Img
                        src="images/img_sort.svg"
                        className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] lg:ml-[52px] xl:ml-[59px] 2xl:ml-[67px] 3xl:ml-[80px] w-[1%]"
                        alt="sort One Two"
                      />
                      <Text className="font-medium 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                        5.62 ETH
                      </Text>
                      <Text className="font-medium lg:ml-[45px] xl:ml-[52px] 2xl:ml-[59px] 3xl:ml-[70px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                        1h 19m
                      </Text>
                    </Row>
                    <Line className="self-center w-[100%] h-[1.5px] bg-gray_100" />
                    <Row className="items-center my-[0] w-[100%]">
                      <Img
                        src="images/img_ellipse1018_13.png"
                        className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] rounded-radius50 lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]"
                        alt="Ellipse1018 Three"
                      />
                      <Column className="lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] w-[26%]">
                        <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 tracking-ls1 w-[auto]">
                          Worldpac Alternator
                        </Text>
                        <Text className="font-medium mt-[4px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_500 tracking-ls1 w-[auto]">
                          From Annette Black
                        </Text>
                      </Column>
                      <Text className="font-medium lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                        Ended
                      </Text>
                      <Img
                        src="images/img_sort.svg"
                        className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] lg:ml-[57px] xl:ml-[65px] 2xl:ml-[74px] 3xl:ml-[88px] w-[1%]"
                        alt="sort Three"
                      />
                      <Text className="font-medium 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                        5.62 ETH
                      </Text>
                      <Img
                        src="images/img_sort.svg"
                        className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] lg:ml-[52px] xl:ml-[59px] 2xl:ml-[67px] 3xl:ml-[80px] w-[1%]"
                        alt="sort One Three"
                      />
                      <Text className="font-medium 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                        5.62 ETH
                      </Text>
                      <Text className="font-medium lg:ml-[45px] xl:ml-[52px] 2xl:ml-[59px] 3xl:ml-[70px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                        1h 19m
                      </Text>
                    </Row>
                    <Line className="self-center w-[100%] h-[1.5px] bg-gray_100" />
                    <Row className="items-center my-[0] w-[100%]">
                      <Img
                        src="images/img_duration_3.png"
                        className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] rounded-radius50 lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]"
                        alt="Ellipse1018 Four"
                      />
                      <Column className="lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] w-[26%]">
                        <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 tracking-ls1 w-[auto]">
                          Fram Oil Filter
                        </Text>
                        <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_500 tracking-ls1 w-[auto]">
                          From Eleanor Pena
                        </Text>
                      </Column>
                      <Text className="font-medium lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                        Actived
                      </Text>
                      <Img
                        src="images/img_sort.svg"
                        className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] lg:ml-[52px] xl:ml-[59px] 2xl:ml-[67px] 3xl:ml-[80px] w-[1%]"
                        alt="sort Four"
                      />
                      <Text className="font-medium 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                        5.62 ETH
                      </Text>
                      <Img
                        src="images/img_sort.svg"
                        className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] lg:ml-[52px] xl:ml-[59px] 2xl:ml-[67px] 3xl:ml-[80px] w-[1%]"
                        alt="sort One Four"
                      />
                      <Text className="font-medium 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                        5.62 ETH
                      </Text>
                      <Text className="font-medium lg:ml-[45px] xl:ml-[52px] 2xl:ml-[59px] 3xl:ml-[70px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                        1h 19m
                      </Text>
                    </Row>
                  </List>
                </Column>
              </Column>
            </footer>
          </Column>
          <Stack className="absolute 2xl:h-[1074px] 3xl:h-[1289px] lg:h-[835px] xl:h-[955px] w-[100%]">
            <Column className="absolute bg-white_A700 bottom-[0] outline outline-[0.5px] outline-gray_100 lg:p-[18px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] right-[0] w-[29%]">
              <Row className="items-center justify-between mt-[3px] w-[96%]">
                <Text className="font-medium mt-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 tracking-ls1 w-[auto]">
                  Wallet
                </Text>
                <Img
                  src="images/img_more.svg"
                  className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] mb-[1px] w-[1%]"
                  alt="more"
                />
              </Row>
              <Column
                className="bg-cover bg-repeat items-center lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] rounded-radius15 w-[100%]"
                style={{ backgroundImage: "url('images/img_card.png')" }}
              >
                <Column className="bg-indigo_A200_26 justify-end lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius15 w-[100%]">
                  <Text className="font-normal ml-[1px] mt-[4px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700 tracking-ls1 w-[auto]">
                    Local Banking Card
                  </Text>
                  <Row className="ml-[3px] mr-[auto] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] w-[69%]">
                    <Img
                      src="images/img_.svg"
                      className="lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] mt-[4px] w-[18%]"
                      alt="One"
                    />
                    <Img
                      src="images/img_.svg"
                      className="lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] mt-[4px] w-[18%]"
                      alt="Two"
                    />
                    <Img
                      src="images/img_.svg"
                      className="lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] mt-[4px] w-[18%]"
                      alt="Three"
                    />
                    <Text className="font-normal lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700_a2 tracking-ls1 w-[auto]">
                      3982
                    </Text>
                  </Row>
                  <Row className="justify-between ml-[3px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] w-[97%]">
                    <Text className="font-normal mt-[4px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700 tracking-ls1 w-[auto]">
                      Kevin Cranel
                    </Text>
                    <Img
                      src="images/img_visalogo.svg"
                      className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] mb-[2px] w-[20%]"
                      alt="visalogo"
                    />
                  </Row>
                </Column>
              </Column>
              <Text className="font-normal 3xl:ml-[105px] lg:ml-[68px] xl:ml-[78px] 2xl:ml-[88px] lg:mt-[42px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[64px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_500 tracking-ls1 w-[auto]">
                Your Balance
              </Text>
              <Text className="font-semibold lg:ml-[59px] xl:ml-[67px] 2xl:ml-[76px] 3xl:ml-[91px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-black_900 w-[auto]">
                $185,424.52
              </Text>
              <Row className="items-center lg:mt-[25px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] w-[100%]">
                <Button
                  className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center tracking-ls1 w-[81%]"
                  size="md"
                  variant="FillGray902"
                >
                  Add New Card
                </Button>
                <Button
                  className="flex lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] items-center justify-center xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]"
                  shape="icbRoundedBorder8"
                  size="mdIcn"
                  variant="icbFillGray90067"
                >
                  <Img
                    src="images/img_topup.png"
                    className="flex items-center justify-center"
                    alt="TopUp"
                  />
                </Button>
              </Row>
              <Text className="font-medium lg:mt-[45px] xl:mt-[52px] 2xl:mt-[59px] 3xl:mt-[70px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 tracking-ls1 w-[auto]">
                Transaction History
              </Text>
              <List
                className="gap-[0] min-h-[auto] lg:my-[14px] xl:my-[16px] 2xl:my-[18px] 3xl:my-[21px] w-[100%]"
                orientation="vertical"
              >
                <Row className="justify-between lg:my-[19px] xl:my-[21px] 2xl:my-[24px] 3xl:my-[29px] w-[100%]">
                  <Button
                    className="flex lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] items-center justify-center rounded-radius50 lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]"
                    size="mdIcn"
                    variant="icbFillGray50"
                  >
                    <Img
                      src="images/img_icon.png"
                      className="flex items-center justify-center"
                      alt="Icon"
                    />
                  </Button>
                  <Column className="mt-[4px] w-[49%]">
                    <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 tracking-ls1 w-[auto]">
                      Exchange to ETH
                    </Text>
                    <Text className="font-medium mt-[4px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_500 tracking-ls1 w-[auto]">
                      Today at 4:13 PM
                    </Text>
                  </Column>
                  <Img
                    src="images/img_sort.svg"
                    className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[2%]"
                    alt="sort Five"
                  />
                  <Text className="font-medium lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                    2.22 ETH
                  </Text>
                </Row>
                <Line className="self-center w-[100%] h-[1.5px] bg-gray_100" />
                <Row className="justify-between lg:my-[19px] xl:my-[21px] 2xl:my-[24px] 3xl:my-[29px] w-[100%]">
                  <Button
                    className="flex lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] items-center justify-center rounded-radius50 lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]"
                    size="mdIcn"
                    variant="icbFillGray50"
                  >
                    <Img
                      src="images/img_topup.png"
                      className="flex items-center justify-center"
                      alt="Frame162471"
                    />
                  </Button>
                  <Column className="mt-[4px] w-[51%]">
                    <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 tracking-ls1 w-[auto]">
                      Enefty Top Up
                    </Text>
                    <Text className="font-medium mt-[4px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_500 tracking-ls1 w-[auto]">
                      Today at 4:23 PM
                    </Text>
                  </Column>
                  <Img
                    src="images/img_sort.svg"
                    className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[2%]"
                    alt="sort Six"
                  />
                  <Text className="font-medium lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                    1.32 ETH
                  </Text>
                </Row>
                <Line className="self-center w-[100%] h-[1.5px] bg-gray_100" />
                <Row className="justify-between lg:my-[19px] xl:my-[21px] 2xl:my-[24px] 3xl:my-[29px] w-[100%]">
                  <Button
                    className="flex lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] items-center justify-center rounded-radius50 lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]"
                    size="mdIcn"
                    variant="icbFillGray50"
                  >
                    <Img
                      src="images/img_icon_gray_902.png"
                      className="flex items-center justify-center lg:h-[15px] xl:h-[17px] 2xl:h-[20px] 3xl:h-[23px]"
                      alt="Icon One"
                    />
                  </Button>
                  <Column className="mt-[4px] w-[49%]">
                    <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 tracking-ls1 w-[auto]">
                      Open Bid Success
                    </Text>
                    <Text className="font-medium mt-[4px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_500 tracking-ls1 w-[auto]">
                      Yesterday at 5:12 AM
                    </Text>
                  </Column>
                  <Img
                    src="images/img_sort.svg"
                    className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[2%]"
                    alt="sort Seven"
                  />
                  <Text className="font-medium lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                    5.56 ETH
                  </Text>
                </Row>
                <Line className="self-center w-[100%] h-[1.5px] bg-gray_100" />
                <Row className="justify-between lg:my-[19px] xl:my-[21px] 2xl:my-[24px] 3xl:my-[29px] pt-[1px] w-[100%]">
                  <Button
                    className="flex items-center justify-center w-[15%]"
                    shape="icbCircleBorder21"
                    size="mdIcn"
                    variant="icbFillGray50"
                  >
                    <Img
                      src="images/img_icon_gray_902.png"
                      className="flex items-center justify-center lg:h-[15px] xl:h-[17px] 2xl:h-[20px] 3xl:h-[23px]"
                      alt="Icon Two"
                    />
                  </Button>
                  <Column className="mt-[4px] w-[50%]">
                    <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 tracking-ls1 w-[auto]">
                      Open Bid Success
                    </Text>
                    <Text className="font-medium mt-[4px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_500 tracking-ls1 w-[auto]">
                      Yesterday at 3:12 AM
                    </Text>
                  </Column>
                  <Img
                    src="images/img_sort.svg"
                    className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] w-[2%]"
                    alt="sort Eight"
                  />
                  <Text className="font-medium lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                    2.21 ETH
                  </Text>
                </Row>
                <Line className="self-center w-[100%] h-[1.5px] bg-gray_100" />
                <Row className="justify-between lg:my-[19px] xl:my-[21px] 2xl:my-[24px] 3xl:my-[29px] w-[100%]">
                  <Button
                    className="flex lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] items-center justify-center rounded-radius50 lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]"
                    size="mdIcn"
                    variant="icbFillGray50"
                  >
                    <Img
                      src="images/img_topup.png"
                      className="flex items-center justify-center"
                      alt="Frame162471 One"
                    />
                  </Button>
                  <Column className="mt-[4px] w-[49%]">
                    <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 tracking-ls1 w-[auto]">
                      Enefty Top Up
                    </Text>
                    <Text className="font-medium mt-[4px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_500 tracking-ls1 w-[auto]">
                      Yesterday at 3:12 AM
                    </Text>
                  </Column>
                  <Img
                    src="images/img_sort.svg"
                    className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[2%]"
                    alt="sort Nine"
                  />
                  <Text className="font-medium lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                    2.32 ETH
                  </Text>
                </Row>
              </List>
            </Column>
            <Row className="absolute bg-white_A700 items-center outline outline-[0.75px] outline-gray_100 lg:p-[26px] xl:p-[30px] 2xl:p-[34px] 3xl:p-[40px] top-[0] w-[100%]">
              <Input
                value={inputvalue}
                onChange={(e) => setInputvalue(e?.target?.value)}
                className="font-normal font-outfit not-italic p-[0] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] placeholder:text-gray_500 text-gray_500 tracking-ls1 w-[100%]"
                wrapClassName="flex my-[2px] w-[44%]"
                name="SearchInput"
                placeholder="Search items, collections, and users"
                prefix={
                  <Img
                    src="images/img_search.svg"
                    className="cursor-pointer ml-[1px] lg:w-[15px] lg:h-[16px] lg:mr-[14px] xl:w-[17px] xl:h-[18px] xl:mr-[16px] 2xl:w-[20px] 2xl:h-[21px] 2xl:mr-[18px] 3xl:w-[24px] 3xl:h-[25px] 3xl:mr-[21px] my-[auto]"
                    alt="search"
                  />
                }
                suffix={
                  inputvalue?.length > 0 ? (
                    <CloseSVG
                      color="#93989a"
                      className="cursor-pointer lg:w-[15px] lg:h-[16px] lg:ml-[7px] lg:mr-[17px] xl:w-[17px] xl:h-[18px] xl:ml-[8px] xl:mr-[19px] 2xl:w-[20px] 2xl:h-[21px] 2xl:ml-[10px] 2xl:mr-[22px] 3xl:w-[24px] 3xl:h-[25px] 3xl:ml-[12px] 3xl:mr-[26px] my-[auto]"
                      onClick={() => setInputvalue("")}
                    />
                  ) : (
                    ""
                  )
                }
                size="mdSrc"
              ></Input>
              <Button
                className="2xl:ml-[260px] 3xl:ml-[312px] flex items-center justify-center lg:ml-[202px] my-[2px] text-center w-[13%] xl:ml-[231px]"
                leftIcon={
                  <Img
                    src="images/img_sort.svg"
                    className="text-center lg:w-[8px] lg:mr-[12px] xl:w-[9px] xl:mr-[14px] 2xl:w-[11px] 2xl:mr-[16px] 3xl:w-[13px] 3xl:mr-[19px]"
                    alt="sort"
                  />
                }
                size="xl"
                variant="OutlineGray100"
              >
                <div className="bg-transparent font-medium font-urbanist lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] tracking-ls1">
                  3,421 ETH
                </div>
              </Button>
              <Stack className="lg:h-[41px] xl:h-[47px] 2xl:h-[53px] 3xl:h-[63px] lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] my-[2px] outline outline-[0.75px] outline-gray_100 lg:px-[10px] xl:px-[12px] 2xl:px-[14px] 3xl:px-[16px] rounded-radius50 lg:w-[40px] xl:w-[46px] 2xl:w-[52px] 3xl:w-[62px]">
                <Img
                  src="images/img_notification.svg"
                  className="absolute lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] inset-[0] justify-center m-[auto] w-[31%]"
                  alt="notification"
                />
                <div className="absolute bg-red_600 lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] right-[0] rounded-radius50 top-[0] lg:w-[4px] xl:w-[5px] 2xl:w-[6px] 3xl:w-[7px]"></div>
              </Stack>
              <Img
                src="images/img_ellipse1015.png"
                className="lg:h-[41px] xl:h-[47px] 2xl:h-[53px] 3xl:h-[63px] lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] my-[2px] rounded-radius50 lg:w-[40px] xl:w-[46px] 2xl:w-[52px] 3xl:w-[62px]"
                alt="Ellipse1020"
              />
              <Img
                src="images/img_vector_black_901.svg"
                className="lg:h-[6px] xl:h-[7px] 2xl:h-[8px] 3xl:h-[9px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[1%]"
                alt="Vector"
              />
            </Row>
          </Stack>
        </Stack>
      </Row>
    </>
  );
};

export default MyProfileWalletPage;
