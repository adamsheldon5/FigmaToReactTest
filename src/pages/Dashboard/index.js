import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  Stack,
  Button,
  Input,
  List,
  Line,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";

const DashboardPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-white_A700 font-outfit items-center mx-[auto] w-[100%]">
        <Row className="items-center justify-evenly w-[100%]">
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
                </Column>
                <Row className="bg-gray_900_5f items-center lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[9px] rounded-radius10 w-[100%]">
                  <Img
                    src="images/img_eye.svg"
                    className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                    alt="eye"
                  />
                  <Text className="font-medium lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_902 tracking-ls1 w-[auto]">
                    Dashboard
                  </Text>
                </Row>
                <Column className="font-urbanist lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:my-[13px] xl:my-[15px] 2xl:my-[17px] 3xl:my-[20px] w-[88%]">
                  <Row className="pl-[1px] py-[1px] w-[49%]">
                    <Img
                      src="images/img_car.svg"
                      className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] ml-[1px] my-[1px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                      alt="car"
                    />
                    <Text className="font-medium lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_500 tracking-ls1 w-[auto]">
                      Message
                    </Text>
                  </Row>
                  <Row className="lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] pl-[1px] py-[1px] w-[47%]">
                    <Img
                      src="images/img_settings.svg"
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] ml-[1px] my-[2px] w-[19%]"
                      alt="settings"
                    />
                    <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_500 tracking-ls1 w-[auto]">
                      Settings
                    </Text>
                  </Row>
                  <Text className="font-medium lg:mt-[31px] xl:mt-[36px] 2xl:mt-[41px] 3xl:mt-[49px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_900 tracking-ls1 w-[auto]">
                    MARKETPLACE
                  </Text>
                  <Row className="items-center lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] pl-[2px] py-[2px] w-[43%]">
                    <Img
                      src="images/img_user.svg"
                      className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] ml-[1px] w-[19%]"
                      alt="user"
                    />
                    <Text className="font-medium lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_500 tracking-ls1 w-[auto]">
                      Market
                    </Text>
                  </Row>
                  <Row className="items-center lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] pl-[1px] py-[1px] w-[53%]">
                    <Img
                      src="images/img_judge.svg"
                      className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] ml-[1px] mt-[1px] w-[15%]"
                      alt="judge"
                    />
                    <Text className="font-medium lg:ml-[16px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_500 tracking-ls1 w-[auto]">
                      Active Bid
                    </Text>
                  </Row>
                  <Row className="items-center ml-[2px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[39%]">
                    <Img
                      src="images/img_clock_17X20.svg"
                      className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] w-[22%]"
                      alt="clock"
                    />
                    <Text className="font-medium mb-[1px] lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_500 tracking-ls1 w-[auto]">
                      Saved
                    </Text>
                  </Row>
                  <Text className="font-medium lg:mt-[34px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[52px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_900 tracking-ls1 w-[auto]">
                    MY PROFILE
                  </Text>
                  <Row className="items-center lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] pl-[2px] py-[2px] w-[52%]">
                    <Img
                      src="images/img_user_20X20.svg"
                      className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                      alt="user One"
                    />
                    <Text className="font-medium lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_500 tracking-ls1 w-[auto]">
                      Collection
                    </Text>
                  </Row>
                  <Row className="items-center lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] pl-[2px] py-[2px] w-[39%]">
                    <Img
                      src="images/img_computer.svg"
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] my-[1px] w-[22%]"
                      alt="computer"
                    />
                    <Text className="font-medium lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] my-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_500 tracking-ls1 w-[auto]">
                      Wallet
                    </Text>
                  </Row>
                  <Row className="lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] pl-[1px] py-[1px] w-[42%]">
                    <Img
                      src="images/img_clock_20X20.svg"
                      className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] ml-[1px] my-[1px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                      alt="clock One"
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
          <Column className="font-urbanist items-center w-[79%]">
            <Row className="bg-white_A700 items-center outline outline-[0.75px] outline-gray_100 lg:p-[26px] xl:p-[30px] 2xl:p-[34px] 3xl:p-[40px] w-[100%]">
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
            <Row className="items-center justify-evenly w-[97%]">
              <Column className="w-[70%]">
                <Column
                  className="bg-cover bg-repeat items-center rounded-radius15 w-[96%]"
                  style={{ backgroundImage: "url('images/img_banner.png')" }}
                >
                  <Column className="bg-gradient  justify-center lg:p-[23px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius15 w-[100%]">
                    <Text className="font-semibold lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-white_A700 tracking-ls1 w-[auto]">
                      Create and Sell Extraordinary NFTs
                    </Text>
                    <Text className="font-medium lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700_a2 tracking-ls1 w-[auto]">
                      The world’s first and largest digital marketplace for
                      crypto NFTs
                    </Text>
                    <Row className="items-center lg:mb-[14px] xl:mb-[16px] 2xl:mb-[19px] 3xl:mb-[22px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[38%]">
                      <Button
                        className="font-semibold lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center tracking-ls1 w-[46%]"
                        size="md"
                        variant="FillWhiteA700"
                      >
                        Explore More
                      </Button>
                      <Button
                        className="font-semibold lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center tracking-ls1 w-[46%]"
                        size="lg"
                        variant="OutlineWhiteA700"
                      >
                        Sell Artwork
                      </Button>
                    </Row>
                  </Column>
                </Column>
                <Row className="lg:mt-[35px] xl:mt-[40px] 2xl:mt-[46px] 3xl:mt-[55px] w-[96%]">
                  <Text className="font-semibold lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-black_900 w-[auto]">
                    Trending Auction
                  </Text>
                  <Text className="font-medium lg:ml-[394px] xl:ml-[451px] 2xl:ml-[507px] 3xl:ml-[608px] mt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_902 tracking-ls1 w-[auto]">
                    View All
                  </Text>
                </Row>
                <List
                  className="lg:gap-[14px] xl:gap-[16px] 2xl:gap-[19px] 3xl:gap-[22px] grid grid-cols-3 min-h-[auto] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[96%]"
                  orientation="horizontal"
                >
                  <Column className="bg-white_A700 items-center lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] rounded-radius15 shadow-bs1 w-[100%]">
                    <Row
                      className="bg-cover bg-repeat justify-end lg:p-[6px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] rounded-radius12 w-[100%]"
                      style={{
                        backgroundImage:
                          "url('images/img_duration_140X222.png')",
                      }}
                    >
                      <Button
                        className="font-medium mt-[1px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-center tracking-ls1 w-[36%]"
                        shape="RoundedBorder14"
                        variant="Outline"
                      >
                        2h 4m 32s
                      </Button>
                      <Button
                        className="flex lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] items-center justify-center 3xl:mb-[112px] lg:mb-[73px] xl:mb-[83px] 2xl:mb-[94px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] rounded-radius50 lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                        size="smIcn"
                      >
                        <Img
                          src="images/img_vector_30X30.svg"
                          className="flex items-center justify-center"
                          alt="Vector One"
                        />
                      </Button>
                    </Row>
                    <Column className="xl:mb-[10px] 2xl:mb-[12px] 3xl:mb-[14px] lg:mb-[9px] lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[93%]">
                      <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 tracking-ls1 w-[auto]">
                        The Unfortable Facer
                      </Text>
                      <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_500 tracking-ls1 w-[auto]">
                        By Bane Riccardo
                      </Text>
                      <Row className="items-center justify-evenly lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]">
                        <Column className="font-outfit pb-[1px] pr-[1px] w-[57%]">
                          <Text className="font-normal not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-gray_500 tracking-ls1 w-[auto]">
                            Current Bid
                          </Text>
                          <Row className="font-urbanist lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] pl-[1px] py-[1px] w-[68%]">
                            <Img
                              src="images/img_sort.svg"
                              className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] ml-[3px] mt-[1px] w-[9%]"
                              alt="sort"
                            />
                            <Text className="font-medium 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                              18,99 ETH
                            </Text>
                          </Row>
                        </Column>
                        <Button
                          className="font-medium font-urbanist xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-center tracking-ls1 w-[43%]"
                          variant="FillGray902"
                        >
                          Place a Bid
                        </Button>
                      </Row>
                    </Column>
                  </Column>
                  <Column className="bg-white_A700 items-center lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] rounded-radius15 shadow-bs1 w-[100%]">
                    <Row
                      className="bg-cover bg-repeat justify-end lg:p-[6px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] rounded-radius12 w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_duration_12.png')",
                      }}
                    >
                      <Button
                        className="font-medium mt-[1px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-center tracking-ls1 w-[36%]"
                        shape="RoundedBorder14"
                        variant="Outline"
                      >
                        2h 4m 32s
                      </Button>
                      <Button
                        className="flex lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] items-center justify-center 3xl:mb-[112px] lg:mb-[73px] xl:mb-[83px] 2xl:mb-[94px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] rounded-radius50 lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                        size="smIcn"
                      >
                        <Img
                          src="images/img_vector_30X30.svg"
                          className="flex items-center justify-center"
                          alt="Vector Two"
                        />
                      </Button>
                    </Row>
                    <Column className="xl:mb-[10px] 2xl:mb-[12px] 3xl:mb-[14px] lg:mb-[9px] lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[93%]">
                      <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 tracking-ls1 w-[auto]">
                        Mad Ballot Holder
                      </Text>
                      <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_500 tracking-ls1 w-[auto]">
                        By Angelina Cruzz
                      </Text>
                      <Row className="items-center justify-evenly lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]">
                        <Column className="font-outfit pb-[1px] pr-[1px] w-[57%]">
                          <Text className="font-normal not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-gray_500 tracking-ls1 w-[auto]">
                            Current Bid
                          </Text>
                          <Row className="font-urbanist lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] pl-[1px] py-[1px] w-[67%]">
                            <Img
                              src="images/img_sort.svg"
                              className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] ml-[3px] mt-[1px] w-[9%]"
                              alt="sort One"
                            />
                            <Text className="font-medium 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                              4,32 ETH
                            </Text>
                          </Row>
                        </Column>
                        <Button
                          className="font-medium font-urbanist xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-center tracking-ls1 w-[43%]"
                          variant="FillGray902"
                        >
                          Place a Bid
                        </Button>
                      </Row>
                    </Column>
                  </Column>
                  <Column className="bg-white_A700 items-center lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] rounded-radius15 shadow-bs1 w-[100%]">
                    <Row
                      className="bg-cover bg-repeat justify-end lg:p-[6px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] rounded-radius12 w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_duration_13.png')",
                      }}
                    >
                      <Button
                        className="font-medium mt-[1px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-center tracking-ls1 w-[36%]"
                        shape="RoundedBorder14"
                        variant="Outline"
                      >
                        2h 4m 32s
                      </Button>
                      <Button
                        className="flex lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] items-center justify-center 3xl:mb-[112px] lg:mb-[73px] xl:mb-[83px] 2xl:mb-[94px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] rounded-radius50 lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                        size="smIcn"
                      >
                        <Img
                          src="images/img_vector_30X30.svg"
                          className="flex items-center justify-center"
                          alt="Vector Three"
                        />
                      </Button>
                    </Row>
                    <Column className="xl:mb-[10px] 2xl:mb-[12px] 3xl:mb-[14px] lg:mb-[9px] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[93%]">
                      <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 tracking-ls1 w-[auto]">
                        Pile of Many Plates
                      </Text>
                      <Text className="font-medium mt-[4px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_500 tracking-ls1 w-[auto]">
                        By Ralphi Arness
                      </Text>
                      <Row className="items-center justify-evenly lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]">
                        <Column className="font-outfit pb-[1px] pr-[1px] w-[57%]">
                          <Text className="font-normal not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-gray_500 tracking-ls1 w-[auto]">
                            Current Bid
                          </Text>
                          <Row className="font-urbanist lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] pl-[1px] py-[1px] w-[67%]">
                            <Img
                              src="images/img_sort.svg"
                              className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] ml-[3px] mt-[1px] w-[9%]"
                              alt="sort Two"
                            />
                            <Text className="font-medium 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                              4,32 ETH
                            </Text>
                          </Row>
                        </Column>
                        <Button
                          className="font-medium font-urbanist xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-center tracking-ls1 w-[43%]"
                          variant="FillGray902"
                        >
                          Place a Bid
                        </Button>
                      </Row>
                    </Column>
                  </Column>
                </List>
                <Row className="lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] w-[96%]">
                  <Text className="font-semibold lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-black_900 w-[auto]">
                    Top Collection
                  </Text>
                  <Text className="font-medium lg:ml-[417px] xl:ml-[477px] 2xl:ml-[537px] 3xl:ml-[644px] mt-[2px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_902 tracking-ls1 w-[auto]">
                    View All
                  </Text>
                </Row>
                <footer className="lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[95%]">
                  <Column className="items-center w-[100%]">
                    <Row className="pb-[2px] w-[100%]">
                      <Text className="font-medium mb-[1px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_500 tracking-ls1 w-[auto]">
                        Collection
                      </Text>
                      <Text className="font-medium mb-[1px] lg:ml-[157px] xl:ml-[179px] 2xl:ml-[202px] 3xl:ml-[242px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_500 tracking-ls1 w-[auto]">
                        Volume
                      </Text>
                      <Text className="font-medium mb-[1px] lg:ml-[54px] xl:ml-[62px] 2xl:ml-[70px] 3xl:ml-[84px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_500 tracking-ls1 w-[auto]">
                        24h %
                      </Text>
                      <Text className="font-medium mb-[1px] lg:ml-[54px] xl:ml-[62px] 2xl:ml-[70px] 3xl:ml-[84px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_500 tracking-ls1 w-[auto]">
                        Floor Price
                      </Text>
                      <Text className="font-medium lg:ml-[54px] xl:ml-[62px] 2xl:ml-[70px] 3xl:ml-[84px] my-[1px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_500 tracking-ls1 w-[auto]">
                        Owners
                      </Text>
                      <Text className="font-medium lg:ml-[54px] xl:ml-[62px] 2xl:ml-[70px] 3xl:ml-[84px] mt-[1px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_500 tracking-ls1 w-[auto]">
                        Items
                      </Text>
                    </Row>
                    <List
                      className="gap-[0] min-h-[auto] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:pr-[5px] xl:pr-[6px] 2xl:pr-[7px] 3xl:pr-[8px] w-[99%]"
                      orientation="vertical"
                    >
                      <Row className="items-center my-[0] pr-[1px] w-[100%]">
                        <Img
                          src="images/img_ellipse1018_25.png"
                          className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] rounded-radius50 lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]"
                          alt="Ellipse1018"
                        />
                        <Column className="font-urbanist lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] w-[26%]">
                          <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 tracking-ls1 w-[auto]">
                            Doodle Lucu
                          </Text>
                          <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_500 tracking-ls1 w-[auto]">
                            By Doodles
                          </Text>
                        </Column>
                        <Img
                          src="images/img_sort.svg"
                          className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] w-[1%]"
                          alt="sort Three"
                        />
                        <Text className="font-medium font-urbanist lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                          14,32
                        </Text>
                        <Text className="font-medium font-outfit lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-green_600 tracking-ls1 w-[auto]">
                          + 20,4%
                        </Text>
                        <Img
                          src="images/img_sort.svg"
                          className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] lg:ml-[44px] xl:ml-[50px] 2xl:ml-[57px] 3xl:ml-[68px] w-[1%]"
                          alt="sort One"
                        />
                        <Text className="font-medium font-urbanist lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                          2,3
                        </Text>
                        <Text className="font-medium font-urbanist 3xl:ml-[109px] lg:ml-[70px] xl:ml-[80px] 2xl:ml-[91px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                          2,2K
                        </Text>
                        <Text className="font-medium font-urbanist 3xl:ml-[102px] lg:ml-[66px] xl:ml-[75px] 2xl:ml-[85px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                          18
                        </Text>
                      </Row>
                      <Line className="self-center w-[100%] h-[1px] bg-gray_100" />
                      <Row className="items-center my-[0] pr-[1px] w-[100%]">
                        <Img
                          src="images/img_ellipse1018_26.png"
                          className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] rounded-radius50 lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]"
                          alt="Ellipse1018 One"
                        />
                        <Column className="font-urbanist lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] w-[26%]">
                          <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 tracking-ls1 w-[auto]">
                            Kimawi Genesis
                          </Text>
                          <Text className="font-medium 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_500 tracking-ls1 w-[auto]">
                            By Kimawi - Japan
                          </Text>
                        </Column>
                        <Img
                          src="images/img_sort.svg"
                          className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] w-[1%]"
                          alt="sort Four"
                        />
                        <Text className="font-medium font-urbanist lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                          6,11
                        </Text>
                        <Text className="font-medium font-outfit lg:ml-[55px] xl:ml-[63px] 2xl:ml-[71px] 3xl:ml-[85px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_600 tracking-ls1 w-[auto]">
                          - 18,2%
                        </Text>
                        <Img
                          src="images/img_sort.svg"
                          className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] lg:ml-[48px] xl:ml-[55px] 2xl:ml-[62px] 3xl:ml-[74px] w-[1%]"
                          alt="sort One One"
                        />
                        <Text className="font-medium font-urbanist lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                          12,52
                        </Text>
                        <Text className="font-medium font-urbanist lg:ml-[60px] xl:ml-[69px] 2xl:ml-[78px] 3xl:ml-[93px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                          1,9K
                        </Text>
                        <Text className="font-medium font-urbanist 3xl:ml-[106px] lg:ml-[69px] xl:ml-[79px] 2xl:ml-[89px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                          21
                        </Text>
                      </Row>
                    </List>
                  </Column>
                </footer>
              </Column>
              <Column className="bg-white_A700 items-center outline outline-[0.5px] outline-gray_100 lg:p-[20px] xl:p-[23px] 2xl:p-[26px] 3xl:p-[31px] w-[30%]">
                <Row className="justify-between lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[100%]">
                  <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
                    Featured Creators
                  </Text>
                  <Text className="font-medium mt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_902 tracking-ls1 w-[auto]">
                    See All
                  </Text>
                </Row>
                <Column className="bg-white_A700 items-center lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] rounded-radius15 shadow-bs4 w-[100%]">
                  <Stack className="lg:h-[114px] xl:h-[130px] 2xl:h-[147px] 3xl:h-[176px] w-[100%]">
                    <Img
                      src="images/img_rectangle2043.png"
                      className="absolute xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] lg:h-[94px] rounded-radius12 top-[0] w-[100%]"
                      alt="Rectangle2043"
                    />
                    <Img
                      src="images/img_ellipse1019.png"
                      className="absolute bottom-[0] lg:h-[41px] xl:h-[47px] 2xl:h-[53px] 3xl:h-[63px] inset-x-[0] mx-[auto] rounded-radius50 lg:w-[40px] xl:w-[46px] 2xl:w-[52px] 3xl:w-[62px]"
                      alt="Ellipse1019"
                    />
                  </Stack>
                  <Column className="items-center lg:mb-[14px] xl:mb-[16px] 2xl:mb-[19px] 3xl:mb-[22px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[94%]">
                    <Row className="items-center justify-evenly w-[100%]">
                      <Column className="font-urbanist w-[74%]">
                        <Row className="items-center pr-[1px] py-[1px] w-[75%]">
                          <Text className="font-semibold lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                            Murakami Flowers
                          </Text>
                          <Img
                            src="images/img_checkmark_15X15.svg"
                            className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] mt-[1px] lg:w-[11px] xl:w-[13px] 2xl:w-[15px] 3xl:w-[18px]"
                            alt="checkmark"
                          />
                        </Row>
                        <Text className="font-medium mt-[4px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_500 tracking-ls1 w-[auto]">
                          @mftmkkus
                        </Text>
                      </Column>
                      <Button
                        className="font-normal font-outfit not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-center tracking-ls1 w-[26%]"
                        shape="RoundedBorder14"
                        variant="Outline1_2"
                      >
                        Follow
                      </Button>
                    </Row>
                    <Line className="bg-gray_100 h-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[100%]" />
                    <Text className="font-normal leading-[180.00%] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_500 tracking-ls1 w-[96%]">
                      Murakami.Flowers is a work in which artist Takashi
                      Murakami’s representative artwork.....
                    </Text>
                  </Column>
                </Column>
                <Row className="justify-between lg:mt-[34px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[52px] w-[100%]">
                  <Text className="font-semibold mt-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
                    Recent Activity
                  </Text>
                  <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_902 tracking-ls1 w-[auto]">
                    See All
                  </Text>
                </Row>
                <List
                  className="gap-[0] lg:mb-[11px] xl:mb-[13px] 2xl:mb-[15px] 3xl:mb-[18px] min-h-[auto] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]"
                  orientation="vertical"
                >
                  <Row className="justify-between lg:my-[15px] xl:my-[17px] 2xl:my-[20px] 3xl:my-[24px] w-[100%]">
                    <Img
                      src="images/img_ellipse1018_27.png"
                      className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] rounded-radius50 lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]"
                      alt="Ellipse1018 Two"
                    />
                    <Column className="mt-[2px] w-[50%]">
                      <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 tracking-ls1 w-[auto]">
                        Uzachi #4390
                      </Text>
                      <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_500 tracking-ls1 w-[auto]">
                        From Ragnarok Meta
                      </Text>
                    </Column>
                    <Img
                      src="images/img_sort.svg"
                      className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] w-[3%]"
                      alt="sort Five"
                    />
                    <Text className="font-medium lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                      2.15 ETH
                    </Text>
                  </Row>
                  <Line className="self-center w-[100%] h-[1px] bg-gray_100" />
                  <Row className="justify-between lg:my-[15px] xl:my-[17px] 2xl:my-[20px] 3xl:my-[24px] w-[100%]">
                    <Img
                      src="images/img_ellipse1018_28.png"
                      className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] rounded-radius50 lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]"
                      alt="Ellipse1018 Three"
                    />
                    <Column className="mt-[2px] w-[48%]">
                      <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 tracking-ls1 w-[auto]">
                        Doodles #3486
                      </Text>
                      <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_500 tracking-ls1 w-[auto]">
                        From Doodles
                      </Text>
                    </Column>
                    <Img
                      src="images/img_sort.svg"
                      className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] w-[3%]"
                      alt="sort Six"
                    />
                    <Text className="font-medium lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                      4.42 ETH
                    </Text>
                  </Row>
                  <Line className="self-center w-[100%] h-[1px] bg-gray_100" />
                  <Row className="justify-between lg:my-[15px] xl:my-[17px] 2xl:my-[20px] 3xl:my-[24px] w-[100%]">
                    <Img
                      src="images/img_ellipse1018_29.png"
                      className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] rounded-radius50 lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]"
                      alt="Ellipse1018 Four"
                    />
                    <Column className="mt-[2px] w-[49%]">
                      <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 tracking-ls1 w-[auto]">
                        Murakami #2766
                      </Text>
                      <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_500 tracking-ls1 w-[auto]">
                        From Murakami
                      </Text>
                    </Column>
                    <Img
                      src="images/img_sort.svg"
                      className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] w-[3%]"
                      alt="sort Seven"
                    />
                    <Text className="font-medium lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                      1.08 ETH
                    </Text>
                  </Row>
                  <Line className="self-center w-[100%] h-[1px] bg-gray_100" />
                  <Row className="justify-between lg:my-[15px] xl:my-[17px] 2xl:my-[20px] 3xl:my-[24px] w-[100%]">
                    <Img
                      src="images/img_ellipse1018_30.png"
                      className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] rounded-radius50 lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]"
                      alt="Ellipse1018 Five"
                    />
                    <Column className="mt-[2px] w-[51%]">
                      <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 tracking-ls1 w-[auto]">
                        Doodles #2761
                      </Text>
                      <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_500 tracking-ls1 w-[auto]">
                        From Murakami
                      </Text>
                    </Column>
                    <Img
                      src="images/img_sort.svg"
                      className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] w-[3%]"
                      alt="sort Eight"
                    />
                    <Text className="font-medium lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                      4.4 ETH
                    </Text>
                  </Row>
                  <Line className="self-center w-[100%] h-[1px] bg-gray_100" />
                  <Row className="items-center justify-between lg:my-[15px] xl:my-[17px] 2xl:my-[20px] 3xl:my-[24px] w-[100%]">
                    <Img
                      src="images/img_ellipse1018_11.png"
                      className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] rounded-radius50 lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]"
                      alt="Ellipse1018 Six"
                    />
                    <Column className="w-[47%]">
                      <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 tracking-ls1 w-[auto]">
                        Peachy Puch#22
                      </Text>
                      <Text className="font-medium mt-[4px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_500 tracking-ls1 w-[auto]">
                        From Mindblowonstudio
                      </Text>
                    </Column>
                    <Img
                      src="images/img_sort.svg"
                      className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] w-[3%]"
                      alt="sort Nine"
                    />
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                      5.62 ETH
                    </Text>
                  </Row>
                  <Line className="self-center w-[100%] h-[1px] bg-gray_100" />
                  <Row className="items-end justify-between lg:my-[15px] xl:my-[17px] 2xl:my-[20px] 3xl:my-[24px] w-[100%]">
                    <Img
                      src="images/img_ellipse1018_31.png"
                      className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] rounded-radius50 lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]"
                      alt="Ellipse1018 Seven"
                    />
                    <Column className="mb-[1px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[49%]">
                      <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 tracking-ls1 w-[auto]">
                        Gemmy #3723
                      </Text>
                      <Text className="font-medium mt-[4px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_500 tracking-ls1 w-[auto]">
                        From GemmySolana
                      </Text>
                    </Column>
                    <Img
                      src="images/img_sort.svg"
                      className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] lg:my-[10px] xl:my-[12px] 2xl:my-[14px] 3xl:my-[16px] w-[3%]"
                      alt="sort Ten"
                    />
                    <Text className="font-medium lg:my-[10px] xl:my-[11px] 2xl:my-[13px] 3xl:my-[15px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                      5.32 ETH
                    </Text>
                  </Row>
                </List>
              </Column>
            </Row>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default DashboardPage;
