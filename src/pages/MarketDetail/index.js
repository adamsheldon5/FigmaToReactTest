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

const MarketDetailPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-white_A700 font-outfit items-center mx-[auto] w-[100%]">
        <Row className="justify-evenly w-[100%]">
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
            <Column className="lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[94%]">
              <Row className="bg-gray_50 lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] rounded-radius8 w-[18%]">
                <Text className="font-medium 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mt-[3px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 tracking-ls1 w-[auto]">
                  Marketplace
                </Text>
                <Text className="font-medium lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] my-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 tracking-ls1 w-[auto]">
                  {">"}
                </Text>
                <Text className="font-medium lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mt-[3px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_902 tracking-ls1 w-[auto]">
                  Open Bid
                </Text>
              </Row>
              <Row className="items-center justify-between lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[98%]">
                <Img
                  src="images/img_duration_3.png"
                  className="lg:h-[327px] xl:h-[374px] 2xl:h-[421px] 3xl:h-[505px] rounded-radius12 w-[48%]"
                  alt="Rectangle2054"
                />
                <Column className="lg:pt-[6px] xl:pt-[7px] 2xl:pt-[8px] 3xl:pt-[9px] w-[48%]">
                  <Text className="font-semibold lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-black_900 tracking-ls1 w-[auto]">
                    Dayco Serpentine Belt
                  </Text>
                  <Text className="font-normal leading-[180.00%] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_500_ab tracking-ls1 w-[99%]">
                    Open repair of infrarenal aortic aneurysm or dissection,
                    plus repair of associated arterial trauma, following
                    unsuccessful endovascular repair; tube prosthesis...
                  </Text>
                  <Row className="items-center mr-[auto] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[70%]">
                    <Img
                      src="images/img_ellipse1015_42X42.png"
                      className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] rounded-radius50 lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]"
                      alt="Ellipse1015 One"
                    />
                    <Column className="lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] w-[33%]">
                      <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 tracking-ls1 w-[auto]">
                        Creator
                      </Text>
                      <Text className="font-semibold lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 tracking-ls1 w-[auto]">
                        Eleanor Pena
                      </Text>
                    </Column>
                    <Img
                      src="images/img_ellipse1016.png"
                      className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] rounded-radius50 lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]"
                      alt="Ellipse1016"
                    />
                    <Column className="lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] w-[31%]">
                      <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 tracking-ls1 w-[auto]">
                        Owner
                      </Text>
                      <Text className="font-semibold lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 tracking-ls1 w-[auto]">
                        Ahmad Kazuto
                      </Text>
                    </Column>
                  </Row>
                  <Line className="bg-gray_100 h-[1.5px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]" />
                  <Row className="mr-[auto] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] pr-[2px] pt-[2px] w-[67%]">
                    <Column className="w-[63%]">
                      <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_500_ab tracking-ls1 w-[auto]">
                        Auction End In
                      </Text>
                      <Row className="items-center lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[81%]">
                        <Button
                          className="font-semibold lg:h-[35px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[53px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center tracking-ls1 lg:w-[34px] xl:w-[39px] 2xl:w-[44px] 3xl:w-[52px]"
                          size="md"
                          variant="FillGray50"
                        >
                          03
                        </Button>
                        <Img
                          src="images/img__black_900.svg"
                          className="2xl:h-[10px] 3xl:h-[11px] lg:h-[7px] xl:h-[9px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] w-[1%]"
                          alt="Five"
                        />
                        <Button
                          className="font-semibold lg:h-[35px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[53px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center tracking-ls1 lg:w-[34px] xl:w-[39px] 2xl:w-[44px] 3xl:w-[52px]"
                          size="md"
                          variant="FillGray50"
                        >
                          12
                        </Button>
                        <Img
                          src="images/img__black_900.svg"
                          className="2xl:h-[10px] 3xl:h-[11px] lg:h-[7px] xl:h-[9px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] w-[1%]"
                          alt="Six"
                        />
                        <Button
                          className="font-semibold lg:h-[35px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[53px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center tracking-ls1 lg:w-[34px] xl:w-[39px] 2xl:w-[44px] 3xl:w-[52px]"
                          size="md"
                          variant="FillGray50"
                        >
                          42
                        </Button>
                      </Row>
                    </Column>
                    <Column className="w-[36%]">
                      <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_500_ab tracking-ls1 w-[auto]">
                        Current Bid
                      </Text>
                      <Row className="items-center lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] pl-[2px] py-[2px] w-[100%]">
                        <Img
                          src="images/img_sort.svg"
                          className="lg:h-[21px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] w-[13%]"
                          alt="sort"
                        />
                        <Text className="font-semibold lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_900 tracking-ls1 w-[auto]">
                          3,89 ETH
                        </Text>
                      </Row>
                    </Column>
                  </Row>
                  <Row className="items-center mr-[auto] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] w-[55%]">
                    <Button
                      className="flex lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] items-center justify-center lg:w-[38px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
                      shape="icbRoundedBorder8"
                      size="lgIcn"
                      variant="icbOutlineGray100"
                    >
                      <Img
                        src="images/img_favorite_1.svg"
                        className="flex items-center justify-center"
                        alt="favorite"
                      />
                    </Button>
                    <Button
                      className="font-medium lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center tracking-ls1 w-[77%]"
                      size="xl"
                      variant="FillGray902"
                    >
                      Place A Bid
                    </Button>
                  </Row>
                </Column>
              </Row>
              <Text className="font-semibold lg:mt-[43px] xl:mt-[49px] 2xl:mt-[56px] 3xl:mt-[67px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-black_900 w-[auto]">
                More Works by Eleanor Pena
              </Text>
              <List
                className="lg:gap-[14px] xl:gap-[16px] 2xl:gap-[19px] 3xl:gap-[22px] grid grid-cols-4 min-h-[auto] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]"
                orientation="horizontal"
              >
                <Column className="bg-white_A700 items-center lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] rounded-radius15 shadow-bs1 w-[100%]">
                  <Row
                    className="bg-cover bg-repeat justify-end lg:p-[6px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] rounded-radius12 w-[100%]"
                    style={{
                      backgroundImage: "url('images/img_duration_5.png')",
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
                      Person Melirik Kesamping
                    </Text>
                    <Text className="font-medium mt-[4px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_500 tracking-ls1 w-[auto]">
                      By Eleanor Pena
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
                            alt="sort One"
                          />
                          <Text className="font-medium 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                            2,42 ETH
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
                      backgroundImage: "url('images/img_duration_6.png')",
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
                  <Column className="xl:mb-[10px] 2xl:mb-[12px] 3xl:mb-[14px] lg:mb-[9px] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[93%]">
                    <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 tracking-ls1 w-[auto]">
                      Building Reflection Xd
                    </Text>
                    <Text className="font-medium mt-[4px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_500 tracking-ls1 w-[auto]">
                      By Eleanor Pena
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
                            alt="sort Two"
                          />
                          <Text className="font-medium 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                            52,12 ETH
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
                      backgroundImage: "url('images/img_duration_7.png')",
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
                  <Column className="xl:mb-[10px] 2xl:mb-[12px] 3xl:mb-[14px] lg:mb-[9px] lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[93%]">
                    <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 tracking-ls1 w-[auto]">
                      Natural Atomic Circle
                    </Text>
                    <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_500 tracking-ls1 w-[auto]">
                      By Eleanor Pena
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
                            alt="sort Three"
                          />
                          <Text className="font-medium 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                            22,52 ETH
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
                      backgroundImage: "url('images/img_duration_8.png')",
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
                      Oldtown Artistic Alley
                    </Text>
                    <Text className="font-medium mt-[4px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_500 tracking-ls1 w-[auto]">
                      By Eleanor Pena
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
                            alt="sort Four"
                          />
                          <Text className="font-medium 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                            1,224 ETH
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
              </List>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default MarketDetailPage;
