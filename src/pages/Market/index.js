import React from "react";

import { Column, Row, Img, Text, Stack, Button, Input, Grid } from "components";
import { CloseSVG } from "../../assets/images/index.js";

const MarketPage = () => {
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
                </Column>
                <Row className="bg-gray_900_5f items-center lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] 2xl:p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] rounded-radius10 w-[100%]">
                  <Img
                    src="images/img_user_21X20.svg"
                    className="lg:h-[17px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px] mb-[1px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] w-[8%]"
                    alt="user"
                  />
                  <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_902 tracking-ls1 w-[auto]">
                    Market
                  </Text>
                </Row>
                <Column className="font-urbanist lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:my-[13px] xl:my-[15px] 2xl:my-[17px] 3xl:my-[20px] w-[88%]">
                  <Row className="items-center pl-[1px] py-[1px] w-[53%]">
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
                      alt="clock One"
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
                      alt="clock Two"
                    />
                    <Text className="font-medium lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_500 tracking-ls1 w-[auto]">
                      History
                    </Text>
                  </Row>
                  <Stack className="lg:h-[201px] xl:h-[230px] 2xl:h-[259px] 3xl:h-[310px] lg:mt-[232px] xl:mt-[265px] 2xl:mt-[299px] 3xl:mt-[359px] w-[100%]">
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
            <Column className="lg:mt-[30px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] w-[94%]">
              <Text className="font-semibold lg:text-[26px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[40px] text-black_900 tracking-ls1 w-[auto]">
                Discover
              </Text>
              <Row className="items-center lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]">
                <Button
                  className="flex items-center justify-center text-center w-[13%]"
                  leftIcon={
                    <Img
                      src="images/img_user_1.svg"
                      className="text-center lg:w-[15px] lg:h-[16px] lg:mr-[9px] xl:w-[17px] xl:h-[18px] xl:mr-[10px] 2xl:w-[20px] 2xl:h-[21px] 2xl:mr-[12px] 3xl:w-[24px] 3xl:h-[25px] 3xl:mr-[14px]"
                      alt="user"
                    />
                  }
                  shape="RoundedBorder14"
                  size="xl"
                  variant="OutlineGray100"
                >
                  <div className="bg-transparent font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] tracking-ls1">
                    Category
                  </div>
                </Button>
                <Button
                  className="2xl:ml-[24px] 3xl:ml-[28px] flex items-center justify-center lg:ml-[18px] text-center w-[13%] xl:ml-[21px]"
                  leftIcon={
                    <Img
                      src="images/img_signal.svg"
                      className="text-center lg:w-[14px] lg:h-[15px] lg:mr-[9px] xl:w-[16px] xl:h-[17px] xl:mr-[10px] 2xl:w-[19px] 2xl:h-[20px] 2xl:mr-[12px] 3xl:w-[22px] 3xl:h-[23px] 3xl:mr-[14px]"
                      alt="signal"
                    />
                  }
                  shape="RoundedBorder14"
                  size="xl"
                  variant="OutlineGray100"
                >
                  <div className="bg-transparent font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] tracking-ls1">
                    Collection
                  </div>
                </Button>
                <Button
                  className="2xl:ml-[24px] 3xl:ml-[28px] flex items-center justify-center lg:ml-[18px] text-center w-[14%] xl:ml-[21px]"
                  leftIcon={
                    <Img
                      src="images/img_clock_1.svg"
                      className="text-center lg:w-[15px] lg:h-[16px] lg:mr-[9px] xl:w-[17px] xl:h-[18px] xl:mr-[10px] 2xl:w-[20px] 2xl:h-[21px] 2xl:mr-[12px] 3xl:w-[24px] 3xl:h-[25px] 3xl:mr-[14px]"
                      alt="clock"
                    />
                  }
                  shape="RoundedBorder14"
                  size="xl"
                  variant="OutlineGray100"
                >
                  <div className="bg-transparent font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] tracking-ls1">
                    Price Range
                  </div>
                </Button>
                <Button
                  className="2xl:ml-[447px] 3xl:ml-[536px] flex items-center justify-center lg:ml-[347px] text-center w-[14%] xl:ml-[397px]"
                  leftIcon={
                    <Img
                      src="images/img_menu.svg"
                      className="text-center lg:w-[14px] lg:mr-[10px] xl:w-[16px] xl:mr-[11px] 2xl:w-[18px] 2xl:mr-[13px] 3xl:w-[21px] 3xl:mr-[15px]"
                      alt="menu"
                    />
                  }
                  shape="RoundedBorder14"
                  size="xl"
                  variant="OutlineGray100"
                >
                  <div className="bg-transparent font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] tracking-ls1">
                    Filter & Sort
                  </div>
                </Button>
              </Row>
              <Grid className="lg:gap-[14px] xl:gap-[16px] 2xl:gap-[19px] 3xl:gap-[22px] grid grid-cols-4 lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]">
                <Column className="bg-white_A700 items-center lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] rounded-radius15 shadow-bs1 w-[100%]">
                  <Row
                    className="bg-cover bg-repeat justify-end lg:p-[6px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] rounded-radius12 w-[100%]"
                    style={{
                      backgroundImage: "url('images/img_duration_193X240.png')",
                    }}
                  >
                    <Button
                      className="font-medium mt-[1px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-center tracking-ls1 w-[33%]"
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
                  <Column className="xl:mb-[10px] 2xl:mb-[12px] 3xl:mb-[14px] lg:mb-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[93%]">
                    <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 tracking-ls1 w-[auto]">
                      Dayco Serpentine Belt
                    </Text>
                    <Text className="font-medium lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_500 tracking-ls1 w-[auto]">
                      By Marvin McKinney
                    </Text>
                    <Row className="items-center justify-evenly lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]">
                      <Column className="font-outfit pb-[1px] pr-[1px] w-[61%]">
                        <Text className="font-normal not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-gray_500 tracking-ls1 w-[auto]">
                          Current Bid
                        </Text>
                        <Row className="font-urbanist lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] pl-[1px] py-[1px] w-[61%]">
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
                        className="font-medium font-urbanist xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-center tracking-ls1 w-[39%]"
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
                      backgroundImage: "url('images/img_duration_4.png')",
                    }}
                  >
                    <Button
                      className="font-medium mt-[1px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-center tracking-ls1 w-[33%]"
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
                      <Column className="font-outfit pb-[1px] pr-[1px] w-[61%]">
                        <Text className="font-normal not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-gray_500 tracking-ls1 w-[auto]">
                          Current Bid
                        </Text>
                        <Row className="font-urbanist lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] pl-[1px] py-[1px] w-[55%]">
                          <Img
                            src="images/img_sort.svg"
                            className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] ml-[3px] mt-[1px] w-[10%]"
                            alt="sort One"
                          />
                          <Text className="font-medium 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                            18,2 ETH
                          </Text>
                        </Row>
                      </Column>
                      <Button
                        className="font-medium font-urbanist xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-center tracking-ls1 w-[39%]"
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
                      backgroundImage: "url('images/img_ellipse1018_12.png')",
                    }}
                  >
                    <Button
                      className="font-medium mt-[1px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-center tracking-ls1 w-[33%]"
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
                      <Column className="font-outfit pb-[1px] pr-[1px] w-[61%]">
                        <Text className="font-normal not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-gray_500 tracking-ls1 w-[auto]">
                          Current Bid
                        </Text>
                        <Row className="font-urbanist lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] pl-[1px] py-[1px] w-[58%]">
                          <Img
                            src="images/img_sort.svg"
                            className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] ml-[3px] mt-[1px] w-[9%]"
                            alt="sort Two"
                          />
                          <Text className="font-medium 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                            4,82 ETH
                          </Text>
                        </Row>
                      </Column>
                      <Button
                        className="font-medium font-urbanist xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-center tracking-ls1 w-[39%]"
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
                      backgroundImage: "url('images/img_ellipse1018_13.png')",
                    }}
                  >
                    <Button
                      className="font-medium mt-[1px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-center tracking-ls1 w-[33%]"
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
                        alt="Vector Four"
                      />
                    </Button>
                  </Row>
                  <Column className="xl:mb-[10px] 2xl:mb-[12px] 3xl:mb-[14px] lg:mb-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[93%]">
                    <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 tracking-ls1 w-[auto]">
                      Worldpac Alternator
                    </Text>
                    <Text className="font-medium mt-[4px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_500 tracking-ls1 w-[auto]">
                      By Annette Black
                    </Text>
                    <Row className="items-center justify-evenly lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]">
                      <Column className="font-outfit pb-[1px] pr-[1px] w-[61%]">
                        <Text className="font-normal not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-gray_500 tracking-ls1 w-[auto]">
                          Current Bid
                        </Text>
                        <Row className="font-urbanist lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] pl-[1px] py-[1px] w-[58%]">
                          <Img
                            src="images/img_sort.svg"
                            className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] ml-[3px] mt-[1px] w-[9%]"
                            alt="sort Three"
                          />
                          <Text className="font-medium 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                            4,82 ETH
                          </Text>
                        </Row>
                      </Column>
                      <Button
                        className="font-medium font-urbanist xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-center tracking-ls1 w-[39%]"
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
                      backgroundImage: "url('images/img_ellipse1018_23.png')",
                    }}
                  >
                    <Button
                      className="font-medium mt-[1px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-center tracking-ls1 w-[33%]"
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
                        alt="Vector Five"
                      />
                    </Button>
                  </Row>
                  <Column className="xl:mb-[10px] 2xl:mb-[12px] 3xl:mb-[14px] lg:mb-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[93%]">
                    <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 tracking-ls1 w-[auto]">
                      Duralast Ball Joint - Upper
                    </Text>
                    <Text className="font-medium mt-[4px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_500 tracking-ls1 w-[auto]">
                      By Jacob Jones
                    </Text>
                    <Row className="items-center justify-evenly lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]">
                      <Column className="font-outfit pb-[1px] pr-[1px] w-[61%]">
                        <Text className="font-normal not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-gray_500 tracking-ls1 w-[auto]">
                          Current Bid
                        </Text>
                        <Row className="font-urbanist lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] pl-[1px] py-[1px] w-[58%]">
                          <Img
                            src="images/img_sort.svg"
                            className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] ml-[3px] mt-[1px] w-[9%]"
                            alt="sort Four"
                          />
                          <Text className="font-medium 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                            4,30 ETH
                          </Text>
                        </Row>
                      </Column>
                      <Button
                        className="font-medium font-urbanist xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-center tracking-ls1 w-[39%]"
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
                      backgroundImage: "url('images/img_ellipse1018_24.png')",
                    }}
                  >
                    <Button
                      className="font-medium mt-[1px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-center tracking-ls1 w-[33%]"
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
                        alt="Vector Six"
                      />
                    </Button>
                  </Row>
                  <Column className="xl:mb-[10px] 2xl:mb-[12px] 3xl:mb-[14px] lg:mb-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[93%]">
                    <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 tracking-ls1 w-[auto]">
                      Rain X Wiper Blade Front
                    </Text>
                    <Text className="font-medium mt-[4px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_500 tracking-ls1 w-[auto]">
                      By Brooklyn Simmons
                    </Text>
                    <Row className="items-center justify-evenly lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]">
                      <Column className="font-outfit pb-[1px] pr-[1px] w-[61%]">
                        <Text className="font-normal not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-gray_500 tracking-ls1 w-[auto]">
                          Current Bid
                        </Text>
                        <Row className="font-urbanist lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] pl-[1px] py-[1px] w-[63%]">
                          <Img
                            src="images/img_sort.svg"
                            className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] ml-[3px] mt-[1px] w-[8%]"
                            alt="sort Five"
                          />
                          <Text className="font-medium 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                            25,70 ETH
                          </Text>
                        </Row>
                      </Column>
                      <Button
                        className="font-medium font-urbanist xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-center tracking-ls1 w-[39%]"
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
                      backgroundImage: "url('images/img_duration_3.png')",
                    }}
                  >
                    <Button
                      className="font-medium mt-[1px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-center tracking-ls1 w-[33%]"
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
                        alt="Vector Seven"
                      />
                    </Button>
                  </Row>
                  <Column className="xl:mb-[10px] 2xl:mb-[12px] 3xl:mb-[14px] lg:mb-[9px] lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[93%]">
                    <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 tracking-ls1 w-[auto]">
                      Fram Oil Filter
                    </Text>
                    <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_500 tracking-ls1 w-[auto]">
                      By Eleanor Pena
                    </Text>
                    <Row className="items-center justify-evenly lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]">
                      <Column className="font-outfit pb-[1px] pr-[1px] w-[61%]">
                        <Text className="font-normal not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-gray_500 tracking-ls1 w-[auto]">
                          Current Bid
                        </Text>
                        <Row className="font-urbanist lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] pl-[1px] py-[1px] w-[57%]">
                          <Img
                            src="images/img_sort.svg"
                            className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] ml-[3px] mt-[1px] w-[9%]"
                            alt="sort Six"
                          />
                          <Text className="font-medium 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                            3,89 ETH
                          </Text>
                        </Row>
                      </Column>
                      <Button
                        className="font-medium font-urbanist xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-center tracking-ls1 w-[39%]"
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
                      backgroundImage: "url('images/img_duration_11.png')",
                    }}
                  >
                    <Button
                      className="font-medium mt-[1px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-center tracking-ls1 w-[33%]"
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
                        alt="Vector Eight"
                      />
                    </Button>
                  </Row>
                  <Column className="xl:mb-[10px] 2xl:mb-[12px] 3xl:mb-[14px] lg:mb-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[93%]">
                    <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 tracking-ls1 w-[auto]">
                      Worldpac Spark Plug
                    </Text>
                    <Text className="font-medium mt-[4px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_500 tracking-ls1 w-[auto]">
                      By Savannah Nguyen
                    </Text>
                    <Row className="items-center justify-evenly lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]">
                      <Column className="font-outfit pb-[1px] pr-[1px] w-[61%]">
                        <Text className="font-normal not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-gray_500 tracking-ls1 w-[auto]">
                          Current Bid
                        </Text>
                        <Row className="font-urbanist lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] pl-[1px] py-[1px] w-[56%]">
                          <Img
                            src="images/img_sort.svg"
                            className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] ml-[3px] mt-[1px] w-[9%]"
                            alt="sort Seven"
                          />
                          <Text className="font-medium 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                            1,54 ETH
                          </Text>
                        </Row>
                      </Column>
                      <Button
                        className="font-medium font-urbanist xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-center tracking-ls1 w-[39%]"
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
                      backgroundImage: "url('images/img_duration.png')",
                    }}
                  >
                    <Button
                      className="font-medium mt-[1px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-center tracking-ls1 w-[33%]"
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
                        alt="Vector Nine"
                      />
                    </Button>
                  </Row>
                  <Column className="xl:mb-[10px] 2xl:mb-[12px] 3xl:mb-[14px] lg:mb-[9px] lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[93%]">
                    <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 tracking-ls1 w-[auto]">
                      Diehard BATTERY-SILVER
                    </Text>
                    <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_500 tracking-ls1 w-[auto]">
                      By Ralph Edwards
                    </Text>
                    <Row className="items-center justify-evenly lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]">
                      <Column className="font-outfit pb-[1px] pr-[1px] w-[61%]">
                        <Text className="font-normal not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-gray_500 tracking-ls1 w-[auto]">
                          Current Bid
                        </Text>
                        <Row className="font-urbanist lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] pl-[1px] py-[1px] w-[58%]">
                          <Img
                            src="images/img_sort.svg"
                            className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] ml-[3px] mt-[1px] w-[9%]"
                            alt="sort Eight"
                          />
                          <Text className="font-medium 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                            2,78 ETH
                          </Text>
                        </Row>
                      </Column>
                      <Button
                        className="font-medium font-urbanist xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-center tracking-ls1 w-[39%]"
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
                      backgroundImage: "url('images/img_duration_140X240.png')",
                    }}
                  >
                    <Button
                      className="font-medium mt-[1px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-center tracking-ls1 w-[33%]"
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
                        alt="Vector Ten"
                      />
                    </Button>
                  </Row>
                  <Column className="xl:mb-[10px] 2xl:mb-[12px] 3xl:mb-[14px] lg:mb-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[93%]">
                    <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 tracking-ls1 w-[auto]">
                      Bosch Spark Plug
                    </Text>
                    <Text className="font-medium mt-[4px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_500 tracking-ls1 w-[auto]">
                      By Guy Hawkins
                    </Text>
                    <Row className="items-center justify-evenly lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]">
                      <Column className="font-outfit pb-[1px] pr-[1px] w-[61%]">
                        <Text className="font-normal not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-gray_500 tracking-ls1 w-[auto]">
                          Current Bid
                        </Text>
                        <Row className="font-urbanist lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] pl-[1px] py-[1px] w-[57%]">
                          <Img
                            src="images/img_sort.svg"
                            className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] ml-[3px] mt-[1px] w-[9%]"
                            alt="sort Nine"
                          />
                          <Text className="font-medium 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                            8,99 ETH
                          </Text>
                        </Row>
                      </Column>
                      <Button
                        className="font-medium font-urbanist xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-center tracking-ls1 w-[39%]"
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
                      backgroundImage: "url('images/img_duration_1.png')",
                    }}
                  >
                    <Button
                      className="font-medium mt-[1px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-center tracking-ls1 w-[33%]"
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
                        alt="Vector Eleven"
                      />
                    </Button>
                  </Row>
                  <Column className="xl:mb-[10px] 2xl:mb-[12px] 3xl:mb-[14px] lg:mb-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[93%]">
                    <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 tracking-ls1 w-[auto]">
                      Valvoline Engine Oil
                    </Text>
                    <Text className="font-medium mt-[4px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_500 tracking-ls1 w-[auto]">
                      By Albert Flores
                    </Text>
                    <Row className="items-center justify-evenly lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]">
                      <Column className="font-outfit pb-[1px] pr-[1px] w-[61%]">
                        <Text className="font-normal not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-gray_500 tracking-ls1 w-[auto]">
                          Current Bid
                        </Text>
                        <Row className="font-urbanist lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] pl-[1px] py-[1px] w-[61%]">
                          <Img
                            src="images/img_sort.svg"
                            className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] ml-[3px] mt-[1px] w-[9%]"
                            alt="sort Ten"
                          />
                          <Text className="font-medium 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                            51,23 ETH
                          </Text>
                        </Row>
                      </Column>
                      <Button
                        className="font-medium font-urbanist xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-center tracking-ls1 w-[39%]"
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
                      backgroundImage: "url('images/img_duration_2.png')",
                    }}
                  >
                    <Button
                      className="font-medium mt-[1px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-center tracking-ls1 w-[33%]"
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
                        alt="Vector Twelve"
                      />
                    </Button>
                  </Row>
                  <Column className="xl:mb-[10px] 2xl:mb-[12px] 3xl:mb-[14px] lg:mb-[9px] lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[93%]">
                    <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 tracking-ls1 w-[auto]">
                      Fram Oil Filter
                    </Text>
                    <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_500 tracking-ls1 w-[auto]">
                      By Jerome Bell
                    </Text>
                    <Row className="items-center justify-evenly lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]">
                      <Column className="font-outfit pb-[1px] pr-[1px] w-[61%]">
                        <Text className="font-normal not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-gray_500 tracking-ls1 w-[auto]">
                          Current Bid
                        </Text>
                        <Row className="font-urbanist lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] pl-[1px] py-[1px] w-[63%]">
                          <Img
                            src="images/img_sort.svg"
                            className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] ml-[3px] mt-[1px] w-[8%]"
                            alt="sort Eleven"
                          />
                          <Text className="font-medium 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                            25,00 ETH
                          </Text>
                        </Row>
                      </Column>
                      <Button
                        className="font-medium font-urbanist xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-center tracking-ls1 w-[39%]"
                        variant="FillGray902"
                      >
                        Place a Bid
                      </Button>
                    </Row>
                  </Column>
                </Column>
              </Grid>
              <Button
                className="font-medium lg:ml-[375px] xl:ml-[429px] 2xl:ml-[483px] 3xl:ml-[579px] lg:mt-[38px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center tracking-ls1 w-[10%]"
                size="md"
                variant="OutlineGray902"
              >
                Load More
              </Button>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default MarketPage;
