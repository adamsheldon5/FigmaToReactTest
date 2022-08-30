import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  Stack,
  Button,
  Input,
  Line,
  List,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";

const MyProfileHistoryPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-white_A700 font-outfit items-center justify-end mx-[auto] w-[100%]">
        <Row className="items-center justify-evenly w-[100%]">
          <aside className="items-center w-[21%]">
            <Column className="">
              <Column className="bg-gray_50 border-bw15 border-gray_100 border-solid lg:p-[14px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] w-[100%]">
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
                  <Row className="font-urbanist items-center lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] pl-[2px] py-[2px] w-[52%]">
                    <Img
                      src="images/img_computer.svg"
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] my-[1px] w-[22%]"
                      alt="computer"
                    />
                    <Text className="font-medium lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] my-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_500 tracking-ls1 w-[auto]">
                      Wallet
                    </Text>
                  </Row>
                </Column>
                <Row className="bg-gray_900_5f items-center lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius10 w-[100%]">
                  <Img
                    src="images/img_vector_gray_902.svg"
                    className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] my-[1px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                    alt="Vector"
                  />
                  <Text className="font-medium lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_902 tracking-ls1 w-[auto]">
                    History
                  </Text>
                </Row>
                <Stack className="font-urbanist lg:h-[201px] xl:h-[230px] 2xl:h-[259px] 3xl:h-[310px] lg:mb-[12px] xl:mb-[14px] 2xl:mb-[16px] 3xl:mb-[19px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[38px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] w-[88%]">
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
                alt="Vector One"
              />
            </Row>
            <Column className="lg:mt-[34px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[52px] w-[94%]">
              <Text className="font-semibold lg:text-[26px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[40px] text-black_900 tracking-ls1 w-[auto]">
                History
              </Text>
              <Row className="items-center lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
                <Button
                  className="flex items-center justify-center text-center w-[8%]"
                  leftIcon={
                    <Img
                      src="images/img_refresh.svg"
                      className="text-center lg:w-[14px] lg:h-[15px] lg:mr-[9px] xl:w-[16px] xl:h-[17px] xl:mr-[10px] 2xl:w-[19px] 2xl:h-[20px] 2xl:mr-[12px] 3xl:w-[22px] 3xl:h-[23px] 3xl:mr-[14px]"
                      alt="refresh"
                    />
                  }
                  shape="RoundedBorder14"
                  size="xl"
                  variant="OutlineGray100"
                >
                  <div className="bg-transparent font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] tracking-ls1">
                    All
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
                  className="2xl:ml-[497px] 3xl:ml-[596px] flex items-center justify-center lg:ml-[386px] text-center w-[14%] xl:ml-[442px]"
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
              <Column className="bg-white_A700 items-center justify-end lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] outline outline-[0.75px] outline-gray_100 lg:py-[18px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] rounded-radius15 shadow-bs1 w-[100%]">
                <Row className="mt-[1px] w-[94%]">
                  <Text className="font-medium my-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 tracking-ls1 w-[auto]">
                    Item List
                  </Text>
                  <Text className="font-medium lg:ml-[189px] xl:ml-[217px] 2xl:ml-[244px] 3xl:ml-[292px] my-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 tracking-ls1 w-[auto]">
                    Status
                  </Text>
                  <Text className="font-medium 2xl:ml-[100px] 3xl:ml-[120px] lg:ml-[77px] xl:ml-[88px] mt-[2px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 tracking-ls1 w-[auto]">
                    Open Price
                  </Text>
                  <Text className="font-medium mb-[2px] 2xl:ml-[101px] 3xl:ml-[121px] lg:ml-[78px] xl:ml-[89px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 tracking-ls1 w-[auto]">
                    Your Offer
                  </Text>
                  <Text className="font-medium mb-[2px] 2xl:ml-[100px] 3xl:ml-[120px] lg:ml-[77px] xl:ml-[88px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 tracking-ls1 w-[auto]">
                    Recent Offer
                  </Text>
                  <Text className="font-medium mb-[2px] 3xl:ml-[111px] lg:ml-[72px] xl:ml-[82px] 2xl:ml-[93px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 tracking-ls1 w-[auto]">
                    Time Left
                  </Text>
                </Row>
                <Line className="bg-gray_100 h-[1.5px] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[100%]" />
                <List
                  className="gap-[0] min-h-[auto] lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[96%]"
                  orientation="vertical"
                >
                  <Row className="items-center lg:mr-[25px] xl:mr-[29px] 2xl:mr-[33px] 3xl:mr-[39px] my-[0] w-[97%]">
                    <Img
                      src="images/img_ellipse1018_11.png"
                      className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] rounded-radius50 lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]"
                      alt="Ellipse1018"
                    />
                    <Column className="lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] w-[23%]">
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
                      className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] 3xl:ml-[115px] lg:ml-[74px] xl:ml-[85px] 2xl:ml-[96px] w-[1%]"
                      alt="sort"
                    />
                    <Text className="font-medium 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                      5.62 ETH
                    </Text>
                    <Img
                      src="images/img_sort.svg"
                      className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] 3xl:ml-[116px] lg:ml-[75px] xl:ml-[86px] 2xl:ml-[97px] w-[1%]"
                      alt="sort One"
                    />
                    <Text className="font-medium 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                      2.62 ETH
                    </Text>
                    <Img
                      src="images/img_sort.svg"
                      className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] 3xl:ml-[110px] lg:ml-[71px] xl:ml-[81px] 2xl:ml-[92px] w-[1%]"
                      alt="sort Two"
                    />
                    <Text className="font-medium 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                      2.14 ETH
                    </Text>
                    <Text className="font-medium 3xl:ml-[118px] lg:ml-[77px] xl:ml-[88px] 2xl:ml-[99px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                      1h 19m
                    </Text>
                  </Row>
                  <Line className="self-center w-[100%] h-[1.5px] bg-gray_100" />
                  <Row className="items-center lg:mr-[6px] xl:mr-[7px] 2xl:mr-[8px] 3xl:mr-[9px] my-[0] w-[99%]">
                    <Img
                      src="images/img_duration_193X240.png"
                      className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] rounded-radius50 lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]"
                      alt="Ellipse1018 One"
                    />
                    <Column className="lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] w-[23%]">
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
                      className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] 3xl:ml-[100px] lg:ml-[65px] xl:ml-[74px] 2xl:ml-[84px] w-[1%]"
                      alt="sort One"
                    />
                    <Text className="font-medium 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                      11.70 ETH
                    </Text>
                    <Img
                      src="images/img_sort.svg"
                      className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] 3xl:ml-[115px] lg:ml-[74px] xl:ml-[85px] 2xl:ml-[96px] w-[1%]"
                      alt="sort One One"
                    />
                    <Text className="font-medium 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                      17.84 ETH
                    </Text>
                    <Img
                      src="images/img_sort.svg"
                      className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] 3xl:ml-[105px] lg:ml-[68px] xl:ml-[78px] 2xl:ml-[88px] w-[1%]"
                      alt="sort Two One"
                    />
                    <Text className="font-medium 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                      11.99 ETH
                    </Text>
                    <Text className="font-medium 3xl:ml-[114px] lg:ml-[73px] xl:ml-[84px] 2xl:ml-[95px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                      18h 18m 2s
                    </Text>
                  </Row>
                  <Line className="self-center w-[100%] h-[1.5px] bg-gray_100" />
                  <Row className="items-center lg:mr-[6px] xl:mr-[7px] 2xl:mr-[8px] 3xl:mr-[9px] my-[0] w-[99%]">
                    <Img
                      src="images/img_duration_4.png"
                      className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] rounded-radius50 lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]"
                      alt="Ellipse1018 Two"
                    />
                    <Column className="lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] w-[23%]">
                      <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 tracking-ls1 w-[auto]">
                        Mad Ballot Holder
                      </Text>
                      <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_500 tracking-ls1 w-[auto]">
                        From Angelina Cruzz
                      </Text>
                    </Column>
                    <Text className="font-medium lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                      Ended
                    </Text>
                    <Img
                      src="images/img_sort.svg"
                      className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] 2xl:ml-[103px] 3xl:ml-[123px] lg:ml-[80px] xl:ml-[91px] w-[1%]"
                      alt="sort Two"
                    />
                    <Text className="font-medium 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                      6.48 ETH
                    </Text>
                    <Img
                      src="images/img_sort.svg"
                      className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] 3xl:ml-[116px] lg:ml-[75px] xl:ml-[86px] 2xl:ml-[97px] w-[1%]"
                      alt="sort One Two"
                    />
                    <Text className="font-medium 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                      14.81 ETH
                    </Text>
                    <Img
                      src="images/img_sort.svg"
                      className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] 3xl:ml-[110px] lg:ml-[71px] xl:ml-[81px] 2xl:ml-[92px] w-[1%]"
                      alt="sort Two Two"
                    />
                    <Text className="font-medium 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                      12.81 ETH
                    </Text>
                    <Text className="font-medium 3xl:ml-[114px] lg:ml-[73px] xl:ml-[84px] 2xl:ml-[95px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                      12h 1m 24s
                    </Text>
                  </Row>
                  <Line className="self-center w-[100%] h-[1.5px] bg-gray_100" />
                  <Row className="items-center my-[0] w-[100%]">
                    <Img
                      src="images/img_ellipse1018_12.png"
                      className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] rounded-radius50 lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]"
                      alt="Ellipse1018 Three"
                    />
                    <Column className="lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] w-[22%]">
                      <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 tracking-ls1 w-[auto]">
                        Pile of Many Plates
                      </Text>
                      <Text className="font-medium mt-[4px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_500 tracking-ls1 w-[auto]">
                        From Ralphi Arness
                      </Text>
                    </Column>
                    <Text className="font-medium lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                      Ended
                    </Text>
                    <Img
                      src="images/img_sort.svg"
                      className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] 2xl:ml-[103px] 3xl:ml-[123px] lg:ml-[80px] xl:ml-[91px] w-[1%]"
                      alt="sort Three"
                    />
                    <Text className="font-medium 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                      17.84 ETH
                    </Text>
                    <Img
                      src="images/img_sort.svg"
                      className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] 3xl:ml-[111px] lg:ml-[72px] xl:ml-[82px] 2xl:ml-[93px] w-[1%]"
                      alt="sort One Three"
                    />
                    <Text className="font-medium 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                      17.99 ETH
                    </Text>
                    <Img
                      src="images/img_sort.svg"
                      className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] 3xl:ml-[106px] lg:ml-[69px] xl:ml-[79px] 2xl:ml-[89px] w-[1%]"
                      alt="sort Two Three"
                    />
                    <Text className="font-medium 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                      17.84 ETH
                    </Text>
                    <Text className="font-medium 3xl:ml-[109px] lg:ml-[70px] xl:ml-[80px] 2xl:ml-[91px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                      28h 20m 5s
                    </Text>
                  </Row>
                  <Line className="self-center w-[100%] h-[1.5px] bg-gray_100" />
                  <Row className="items-center lg:mr-[10px] xl:mr-[11px] 2xl:mr-[13px] 3xl:mr-[15px] my-[0] w-[99%]">
                    <Img
                      src="images/img_ellipse1018_13.png"
                      className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] rounded-radius50 lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]"
                      alt="Ellipse1018 Four"
                    />
                    <Column className="lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] w-[23%]">
                      <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 tracking-ls1 w-[auto]">
                        Worldpac Alternator
                      </Text>
                      <Text className="font-medium mt-[4px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_500 tracking-ls1 w-[auto]">
                        From Annette Black
                      </Text>
                    </Column>
                    <Text className="font-medium lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                      On Going
                    </Text>
                    <Img
                      src="images/img_sort.svg"
                      className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] 3xl:ml-[100px] lg:ml-[65px] xl:ml-[74px] 2xl:ml-[84px] w-[1%]"
                      alt="sort Four"
                    />
                    <Text className="font-medium 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                      8.99 ETH
                    </Text>
                    <Img
                      src="images/img_sort.svg"
                      className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] 3xl:ml-[117px] lg:ml-[76px] xl:ml-[87px] 2xl:ml-[98px] w-[1%]"
                      alt="sort One Four"
                    />
                    <Text className="font-medium 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                      11.70 ETH
                    </Text>
                    <Img
                      src="images/img_sort.svg"
                      className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] 3xl:ml-[109px] lg:ml-[70px] xl:ml-[80px] 2xl:ml-[91px] w-[1%]"
                      alt="sort Two Four"
                    />
                    <Text className="font-medium 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                      10.22 ETH
                    </Text>
                    <Text className="font-medium 3xl:ml-[108px] lg:ml-[70px] xl:ml-[80px] 2xl:ml-[90px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                      17h 6m 3s
                    </Text>
                  </Row>
                  <Line className="self-center w-[100%] h-[1.5px] bg-gray_100" />
                  <Row className="items-center my-[0] w-[100%]">
                    <Img
                      src="images/img_ellipse1018_23.png"
                      className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] rounded-radius50 lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]"
                      alt="Ellipse1018 Five"
                    />
                    <Column className="lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] w-[22%]">
                      <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 tracking-ls1 w-[auto]">
                        Duralast Ball Joint - Upper
                      </Text>
                      <Text className="font-medium mt-[4px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_500 tracking-ls1 w-[auto]">
                        From Jacob Jones
                      </Text>
                    </Column>
                    <Text className="font-medium lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                      Success
                    </Text>
                    <Img
                      src="images/img_sort.svg"
                      className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] 3xl:ml-[111px] lg:ml-[72px] xl:ml-[82px] 2xl:ml-[93px] w-[1%]"
                      alt="sort Five"
                    />
                    <Text className="font-medium 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                      14.81 ETH
                    </Text>
                    <Img
                      src="images/img_sort.svg"
                      className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] 3xl:ml-[116px] lg:ml-[75px] xl:ml-[86px] 2xl:ml-[97px] w-[1%]"
                      alt="sort One Five"
                    />
                    <Text className="font-medium 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                      16.48 ETH
                    </Text>
                    <Img
                      src="images/img_sort.svg"
                      className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] 3xl:ml-[105px] lg:ml-[68px] xl:ml-[78px] 2xl:ml-[88px] w-[1%]"
                      alt="sort Two Five"
                    />
                    <Text className="font-medium 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                      12.32 ETH
                    </Text>
                    <Text className="font-medium 3xl:ml-[110px] lg:ml-[71px] xl:ml-[81px] 2xl:ml-[92px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                      3h 37m 22s
                    </Text>
                  </Row>
                  <Line className="self-center w-[100%] h-[1.5px] bg-gray_100" />
                  <Row className="items-center my-[0] w-[100%]">
                    <Img
                      src="images/img_duration_3.png"
                      className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] rounded-radius50 lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]"
                      alt="Ellipse1018 Six"
                    />
                    <Column className="lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] w-[22%]">
                      <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 tracking-ls1 w-[auto]">
                        Fram Oil Filter
                      </Text>
                      <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_500 tracking-ls1 w-[auto]">
                        From Eleanor Pena
                      </Text>
                    </Column>
                    <Text className="font-medium lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                      On Going
                    </Text>
                    <Img
                      src="images/img_sort.svg"
                      className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] 3xl:ml-[100px] lg:ml-[65px] xl:ml-[74px] 2xl:ml-[84px] w-[1%]"
                      alt="sort Six"
                    />
                    <Text className="font-medium 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                      5.22 ETH
                    </Text>
                    <Img
                      src="images/img_sort.svg"
                      className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] 3xl:ml-[116px] lg:ml-[75px] xl:ml-[86px] 2xl:ml-[97px] w-[1%]"
                      alt="sort One Six"
                    />
                    <Text className="font-medium 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                      8.99 ETH
                    </Text>
                    <Img
                      src="images/img_sort.svg"
                      className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] 3xl:ml-[111px] lg:ml-[72px] xl:ml-[82px] 2xl:ml-[93px] w-[1%]"
                      alt="sort Two Six"
                    />
                    <Text className="font-medium 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                      6.70 ETH
                    </Text>
                    <Text className="font-medium 3xl:ml-[114px] lg:ml-[73px] xl:ml-[84px] 2xl:ml-[95px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                      34h 36m 6s
                    </Text>
                  </Row>
                  <Line className="self-center w-[100%] h-[1.5px] bg-gray_100" />
                  <Row className="items-center lg:mr-[10px] xl:mr-[12px] 2xl:mr-[14px] 3xl:mr-[16px] my-[0] w-[99%]">
                    <Img
                      src="images/img_ellipse1018_24.png"
                      className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] rounded-radius50 lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]"
                      alt="Ellipse1018 Seven"
                    />
                    <Column className="lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] w-[23%]">
                      <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 tracking-ls1 w-[auto]">
                        Rain X Wiper Blade Front
                      </Text>
                      <Text className="font-medium mt-[4px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_500 tracking-ls1 w-[auto]">
                        From Brooklyn Simmons
                      </Text>
                    </Column>
                    <Text className="font-medium lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                      On Going
                    </Text>
                    <Img
                      src="images/img_sort.svg"
                      className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] 3xl:ml-[100px] lg:ml-[65px] xl:ml-[74px] 2xl:ml-[84px] w-[1%]"
                      alt="sort Seven"
                    />
                    <Text className="font-medium 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                      3.99 ETH
                    </Text>
                    <Img
                      src="images/img_sort.svg"
                      className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] 3xl:ml-[117px] lg:ml-[76px] xl:ml-[87px] 2xl:ml-[98px] w-[1%]"
                      alt="sort One Seven"
                    />
                    <Text className="font-medium 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                      5.22 ETH
                    </Text>
                    <Img
                      src="images/img_sort.svg"
                      className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] 3xl:ml-[110px] lg:ml-[71px] xl:ml-[81px] 2xl:ml-[92px] w-[1%]"
                      alt="sort Two Seven"
                    />
                    <Text className="font-medium 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                      4.84 ETH
                    </Text>
                    <Text className="font-medium 3xl:ml-[114px] lg:ml-[73px] xl:ml-[84px] 2xl:ml-[95px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                      3h 4m 3 s
                    </Text>
                  </Row>
                </List>
              </Column>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default MyProfileHistoryPage;
