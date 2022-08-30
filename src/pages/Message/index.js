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

const MessagePage = () => {
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
                </Column>
                <Row className="bg-gray_900_5f items-center lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius10 w-[100%]">
                  <Img
                    src="images/img_user_19X20.svg"
                    className="lg:h-[15px] xl:h-[17px] 2xl:h-[20px] 3xl:h-[23px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] my-[1px] w-[8%]"
                    alt="user"
                  />
                  <Text className="font-medium lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_902 tracking-ls1 w-[auto]">
                    Message
                  </Text>
                </Row>
                <Column className="font-urbanist lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:my-[13px] xl:my-[15px] 2xl:my-[17px] 3xl:my-[20px] w-[88%]">
                  <Row className="pl-[1px] py-[1px] w-[47%]">
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
                      alt="user One"
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
                      alt="user Two"
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
          <Stack className="2xl:h-[1077px] 3xl:h-[1292px] lg:h-[837px] xl:h-[958px] w-[26%]">
            <Column className="absolute bg-white_A700 bottom-[0] items-center outline outline-[0.5px] outline-gray_100 lg:p-[18px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] w-[100%]">
              <Input
                value={inputvalue}
                onChange={(e) => setInputvalue(e?.target?.value)}
                className="font-normal not-italic p-[0] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] placeholder:text-gray_500 text-gray_500 tracking-ls1 w-[100%]"
                wrapClassName="2xl:mb-[973px] 3xl:mb-[1168px] flex lg:mb-[756px] w-[94%] xl:mb-[865px]"
                name="SearchInput"
                placeholder="Search chat"
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
                variant="srcFillGray50"
              ></Input>
            </Column>
            <List
              className="absolute bottom-[0] font-urbanist gap-[0] inset-x-[0] min-h-[auto] w-[100%]"
              orientation="vertical"
            >
              <Row className="bg-gray_900_67 items-center my-[0] lg:p-[15px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] w-[100%]">
                <Img
                  src="images/img_ellipse1018.png"
                  className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] my-[1px] rounded-radius50 lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]"
                  alt="Ellipse1018"
                />
                <Column className="lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] w-[63%]">
                  <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 tracking-ls1 w-[auto]">
                    Jenny Wilson
                  </Text>
                  <Text className="font-medium lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 tracking-ls1 w-[auto]">
                    How are you?
                  </Text>
                </Column>
                <Text className="font-medium lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_500 tracking-ls1 w-[auto]">
                  16:00
                </Text>
              </Row>
              <Line className="self-center w-[82%] h-[1.5px] bg-gray_100" />
              <Row className="lg:mx-[25px] xl:mx-[29px] 2xl:mx-[33px] 3xl:mx-[39px] my-[0] pt-[1px] w-[82%]">
                <Img
                  src="images/img_ellipse1018_42X42.png"
                  className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] mb-[1px] rounded-radius50 lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]"
                  alt="Ellipse1018 One"
                />
                <Column className="lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] mt-[2px] w-[69%]">
                  <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 tracking-ls1 w-[auto]">
                    Kristin Watson
                  </Text>
                  <Text className="font-medium 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 tracking-ls1 w-[auto]">
                    Wow, this is really epic
                  </Text>
                </Column>
                <Text className="font-medium lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_500 tracking-ls1 w-[auto]">
                  18:00
                </Text>
              </Row>
              <Line className="self-center w-[82%] h-[1.5px] bg-gray_100" />
              <Row className="lg:mx-[25px] xl:mx-[29px] 2xl:mx-[33px] 3xl:mx-[39px] my-[0] pt-[1px] w-[82%]">
                <Img
                  src="images/img_ellipse1018_1.png"
                  className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] mb-[1px] rounded-radius50 lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]"
                  alt="Ellipse1018 Two"
                />
                <Column className="lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] mt-[1px] w-[68%]">
                  <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 tracking-ls1 w-[auto]">
                    Darlene Robertson
                  </Text>
                  <Text className="font-medium 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 tracking-ls1 w-[auto]">
                    Wow, this is really epic
                  </Text>
                </Column>
                <Text className="font-medium lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_500 tracking-ls1 w-[auto]">
                  08:00
                </Text>
              </Row>
              <Line className="self-center w-[82%] h-[1.5px] bg-gray_100" />
              <Row className="lg:mx-[25px] xl:mx-[29px] 2xl:mx-[33px] 3xl:mx-[39px] my-[0] pt-[1px] w-[82%]">
                <Img
                  src="images/img_ellipse1018_2.png"
                  className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] mb-[1px] rounded-radius50 lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]"
                  alt="Ellipse1018 Three"
                />
                <Column className="lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] mt-[3px] w-[70%]">
                  <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 tracking-ls1 w-[auto]">
                    Arlene McCoy
                  </Text>
                  <Text className="font-medium lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 tracking-ls1 w-[auto]">
                    perfect!
                  </Text>
                </Column>
                <Text className="font-medium lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_500 tracking-ls1 w-[auto]">
                  11:00
                </Text>
              </Row>
              <Line className="self-center w-[82%] h-[1.5px] bg-gray_100" />
              <Row className="lg:mx-[25px] xl:mx-[29px] 2xl:mx-[33px] 3xl:mx-[39px] my-[0] py-[1px] w-[82%]">
                <Img
                  src="images/img_ellipse1018_3.png"
                  className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] rounded-radius50 lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]"
                  alt="Ellipse1018 Four"
                />
                <Column className="lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] mt-[3px] w-[70%]">
                  <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 tracking-ls1 w-[auto]">
                    Ralph Edwards
                  </Text>
                  <Text className="font-medium lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 tracking-ls1 w-[auto]">
                    I'll be there in 2 mins
                  </Text>
                </Column>
                <Text className="font-medium lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_500 tracking-ls1 w-[auto]">
                  11:30
                </Text>
              </Row>
              <Line className="self-center w-[82%] h-[1.5px] bg-gray_100" />
              <Row className="lg:mx-[25px] xl:mx-[29px] 2xl:mx-[33px] 3xl:mx-[39px] my-[0] pt-[1px] w-[82%]">
                <Img
                  src="images/img_ellipse1018_4.png"
                  className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] mb-[1px] rounded-radius50 lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]"
                  alt="Ellipse1018 Five"
                />
                <Column className="lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] mt-[1px] w-[69%]">
                  <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 tracking-ls1 w-[auto]">
                    Darrell Steward
                  </Text>
                  <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 tracking-ls1 w-[auto]">
                    Haha that's terrifying 😂
                  </Text>
                </Column>
                <Text className="font-medium lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_500 tracking-ls1 w-[auto]">
                  13:00
                </Text>
              </Row>
              <Line className="self-center w-[82%] h-[1.5px] bg-gray_100" />
              <Row className="lg:mx-[25px] xl:mx-[29px] 2xl:mx-[33px] 3xl:mx-[39px] my-[0] py-[1px] w-[82%]">
                <Img
                  src="images/img_ellipse1018_5.png"
                  className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] rounded-radius50 lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]"
                  alt="Ellipse1018 Six"
                />
                <Column className="lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] mt-[3px] w-[68%]">
                  <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 tracking-ls1 w-[auto]">
                    Kathryn Murphy
                  </Text>
                  <Text className="font-medium lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 tracking-ls1 w-[auto]">
                    woohoooo
                  </Text>
                </Column>
                <Text className="font-medium lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_500 tracking-ls1 w-[auto]">
                  09:30
                </Text>
              </Row>
              <Line className="self-center w-[82%] h-[1.5px] bg-gray_100" />
              <Row className="lg:mx-[25px] xl:mx-[29px] 2xl:mx-[33px] 3xl:mx-[39px] my-[0] pt-[1px] w-[82%]">
                <Img
                  src="images/img_ellipse1018_6.png"
                  className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] mb-[1px] rounded-radius50 lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]"
                  alt="Ellipse1018 Seven"
                />
                <Column className="lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] mt-[1px] w-[68%]">
                  <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 tracking-ls1 w-[auto]">
                    Eleanor Pena
                  </Text>
                  <Text className="font-medium 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 tracking-ls1 w-[auto]">
                    omg, this is amazing
                  </Text>
                </Column>
                <Text className="font-medium lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_500 tracking-ls1 w-[auto]">
                  09:00
                </Text>
              </Row>
              <Line className="self-center w-[82%] h-[1.5px] bg-gray_100" />
              <Row className="lg:mx-[25px] xl:mx-[29px] 2xl:mx-[33px] 3xl:mx-[39px] my-[0] py-[1px] w-[82%]">
                <Img
                  src="images/img_ellipse1018_7.png"
                  className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] rounded-radius50 lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]"
                  alt="Ellipse1018 Eight"
                />
                <Column className="lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] mt-[3px] w-[69%]">
                  <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 tracking-ls1 w-[auto]">
                    Cody Fisher
                  </Text>
                  <Text className="font-medium lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 tracking-ls1 w-[auto]">
                    aww
                  </Text>
                </Column>
                <Text className="font-medium lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_500 tracking-ls1 w-[auto]">
                  12:00
                </Text>
              </Row>
              <Line className="self-center w-[82%] h-[1.5px] bg-gray_100" />
              <Row className="items-center lg:mx-[25px] xl:mx-[29px] 2xl:mx-[33px] 3xl:mx-[39px] my-[0] py-[1px] w-[82%]">
                <Img
                  src="images/img_ellipse1018_8.png"
                  className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] rounded-radius50 lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]"
                  alt="Ellipse1018 Nine"
                />
                <Column className="lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] w-[69%]">
                  <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 tracking-ls1 w-[auto]">
                    Wade Warren
                  </Text>
                  <Text className="font-medium lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 tracking-ls1 w-[auto]">
                    Haha oh man
                  </Text>
                </Column>
                <Text className="font-medium lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_500 tracking-ls1 w-[auto]">
                  12:30
                </Text>
              </Row>
              <Line className="self-center w-[82%] h-[1.5px] bg-gray_100" />
              <Row className="lg:mx-[25px] xl:mx-[29px] 2xl:mx-[33px] 3xl:mx-[39px] my-[0] pt-[1px] w-[82%]">
                <Img
                  src="images/img_ellipse1018_9.png"
                  className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] mb-[1px] rounded-radius50 lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]"
                  alt="Ellipse1018 Ten"
                />
                <Column className="lg:ml-[10px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] mt-[1px] w-[69%]">
                  <Text className="font-semibold ml-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 tracking-ls1 w-[auto]">
                    Theresa Webb
                  </Text>
                  <Text className="font-medium 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 tracking-ls1 w-[auto]">
                    just ideas for next time
                  </Text>
                </Column>
                <Text className="font-medium lg:ml-[10px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_500 tracking-ls1 w-[auto]">
                  14:00
                </Text>
              </Row>
              <Line className="self-center w-[82%] h-[1.5px] bg-gray_100" />
              <Row className="lg:mx-[25px] xl:mx-[29px] 2xl:mx-[33px] 3xl:mx-[39px] my-[0] pt-[1px] w-[82%]">
                <Img
                  src="images/img_ellipse1018_10.png"
                  className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] mb-[1px] rounded-radius50 lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]"
                  alt="Ellipse1018 Eleven"
                />
                <Column className="lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] mt-[3px] w-[69%]">
                  <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 tracking-ls1 w-[auto]">
                    Albertus Marque
                  </Text>
                  <Text className="font-medium lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 tracking-ls1 w-[auto]">
                    Hahahaha, Impossible
                  </Text>
                </Column>
                <Text className="font-medium lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_500 tracking-ls1 w-[auto]">
                  14:00
                </Text>
              </Row>
            </List>
          </Stack>
          <Column className="font-urbanist w-[53%]">
            <Row className="bg-white_A700 items-center outline outline-[0.75px] outline-gray_100 lg:p-[22px] xl:p-[25px] 2xl:p-[29px] 3xl:p-[34px] w-[100%]">
              <Column className="ml-[4px] mt-[3px] w-[83%]">
                <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 tracking-ls1 w-[auto]">
                  Jenny Wilson
                </Text>
                <Text className="font-medium lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-green_600 tracking-ls1 w-[auto]">
                  Online
                </Text>
              </Column>
              <Img
                src="images/img_search.svg"
                className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                alt="search"
              />
              <Img
                src="images/img_clock_2.svg"
                className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:ml-[17px] xl:ml-[20px] 2xl:ml-[23px] 3xl:ml-[27px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                alt="clock Three"
              />
              <Img
                src="images/img_more.svg"
                className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] lg:ml-[24px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] w-[1%]"
                alt="more"
              />
            </Row>
            <Column className="bg-gray_100 border border-gray_300 border-solid items-center lg:ml-[26px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[40px] lg:mt-[38px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-bl-[0] rounded-br-[10px] rounded-tl-[10px] rounded-tr-[10px] w-[51%]">
              <Text className="font-normal leading-[180.00%] lg:my-[3px] xl:my-[4px] 2xl:my-[5px] 3xl:my-[6px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_900_ab tracking-ls1 w-[100%]">
                Amateurs think about how much money they can make.
                <br />
                Professionals think about how much money they could lose
              </Text>
            </Column>
            <Text className="font-medium lg:ml-[26px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[40px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_500 tracking-ls1 w-[auto]">
              4:32 Am
            </Text>
            <Column className="bg-gray_902 items-center lg:ml-[108px] xl:ml-[123px] 2xl:ml-[139px] 3xl:ml-[166px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] lg:p-[11px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-bl-[12px] rounded-br-[0] rounded-tl-[12px] rounded-tr-[12px] w-[77%]">
              <Text className="font-normal leading-[180.00%] my-[4px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700_ab tracking-ls1 w-[100%]">
                The price of a commodity will never go to zero. When you invest
                in commodities futures,
                <br />
                you are not buying a piece of paper that says you own an
                intangible of the company that
                <br />
                can go bankrupt 😌.{" "}
              </Text>
            </Column>
            <Row className="items-center justify-end ml-[auto] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] pl-[1px] py-[1px] w-[10%]">
              <Img
                src="images/img_checkmark.svg"
                className="3xl:h-[10px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] w-[28%]"
                alt="checkmark"
              />
              <Text className="font-medium 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] my-[4px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_500 tracking-ls1 w-[auto]">
                4:10 Am
              </Text>
            </Row>
            <Column className="bg-gray_100 border border-gray_300 border-solid items-center lg:ml-[26px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[40px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-bl-[0] rounded-br-[10px] rounded-tl-[10px] rounded-tr-[10px] w-[51%]">
              <Text className="font-normal leading-[180.00%] lg:my-[3px] xl:my-[4px] 2xl:my-[5px] 3xl:my-[6px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_900_ab tracking-ls1 w-[100%]">
                Amateurs think about how much money they can make.
                <br />
                Professionals think about how much money they could lose
              </Text>
            </Column>
            <Column className="bg-gray_100 border border-gray_300 border-solid items-center lg:ml-[26px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[40px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-bl-[0] rounded-br-[10px] rounded-tl-[10px] rounded-tr-[10px] w-[81%]">
              <Text className="font-normal leading-[180.00%] lg:my-[3px] xl:my-[4px] 2xl:my-[5px] 3xl:my-[6px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_900_ab tracking-ls1 w-[100%]">
                {`It's not always easy to do what's not popular, but that's where you make your money.`}
                <br />
                Buy stocks that look bad to less careful investors and hang on
                until their real value is recognized.
              </Text>
            </Column>
            <Text className="font-medium lg:ml-[26px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[40px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_500 tracking-ls1 w-[auto]">
              4:26 Am
            </Text>
            <Column className="bg-gray_902 items-center xl:ml-[107px] 2xl:ml-[121px] 3xl:ml-[145px] lg:ml-[94px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] lg:p-[11px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-bl-[12px] rounded-br-[0] rounded-tl-[12px] rounded-tr-[12px] w-[80%]">
              <Text className="font-normal leading-[180.00%] my-[4px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-white_A700_ab tracking-ls1 w-[100%]">
                {`99%+ of traders don't care about Ferraris and yachts. They just want to pay their bills, save a`}
                <br />
                little extra money, and sleep well at night. The only way to do
                that is to bat 70% or more.
                <br />
                Anything less, and these goals are nothing more than fantasy.
              </Text>
            </Column>
            <Row className="items-center justify-end ml-[auto] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] pl-[1px] py-[1px] w-[10%]">
              <Img
                src="images/img_checkmark.svg"
                className="3xl:h-[10px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] w-[27%]"
                alt="checkmark One"
              />
              <Text className="font-medium 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] my-[4px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_500 tracking-ls1 w-[auto]">
                5:22 Am
              </Text>
            </Row>
            <Column className="bg-white_A700 font-outfit items-center lg:mt-[146px] xl:mt-[167px] 2xl:mt-[188px] 3xl:mt-[225px] outline outline-[0.75px] outline-gray_100 lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[100%]">
              <Input
                className="font-normal not-italic p-[0] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] placeholder:text-gray_500 text-gray_500 tracking-ls1 w-[100%]"
                wrapClassName="flex w-[95%]"
                name="typingfield"
                placeholder="Write message"
                prefix={
                  <Img
                    src="images/img_vector_gray_500.svg"
                    className="ml-[2px] lg:w-[13px] lg:mr-[14px] xl:w-[15px] xl:mr-[16px] 2xl:w-[17px] 2xl:mr-[19px] 3xl:w-[20px] 3xl:mr-[22px] my-[auto]"
                    alt="Vector"
                  />
                }
                suffix={
                  <Img
                    src="images/img_vector.svg"
                    className="lg:w-[13px] lg:ml-[27px] lg:mr-[8px] xl:w-[15px] xl:ml-[31px] xl:mr-[9px] 2xl:w-[17px] 2xl:ml-[35px] 2xl:mr-[11px] 3xl:w-[20px] 3xl:ml-[42px] 3xl:mr-[13px] my-[auto]"
                    alt="Vector"
                  />
                }
                shape="RoundedBorder15"
                size="md"
                variant="FillGray50"
              ></Input>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default MessagePage;
