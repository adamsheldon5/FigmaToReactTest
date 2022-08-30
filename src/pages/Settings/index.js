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
  TextArea,
  List,
  Switch,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";

const SettingsPage = () => {
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
                </Column>
                <Row className="bg-gray_900_5f items-center lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius10 w-[100%]">
                  <Img
                    src="images/img_settings_18X20.svg"
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] my-[2px] w-[8%]"
                    alt="settings"
                  />
                  <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_902 tracking-ls1 w-[auto]">
                    Settings
                  </Text>
                </Row>
                <Column className="font-urbanist lg:mb-[12px] xl:mb-[14px] 2xl:mb-[16px] 3xl:mb-[19px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[24px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[88%]">
                  <Text className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_900 tracking-ls1 w-[auto]">
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
                  <Stack className="lg:h-[201px] xl:h-[230px] 2xl:h-[259px] 3xl:h-[310px] lg:mt-[371px] xl:mt-[424px] 2xl:mt-[477px] 3xl:mt-[572px] w-[100%]">
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
            <Column className="items-center lg:mt-[31px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[94%]">
              <Row className="justify-evenly w-[100%]">
                <Column className="w-[58%]">
                  <Text className="font-semibold lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-black_900 w-[auto]">
                    General Settings
                  </Text>
                  <Text className="font-medium lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 tracking-ls1 w-[auto]">
                    Update your photo and personal details here.
                  </Text>
                </Column>
                <Text className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                  Every changes automaticly saved
                </Text>
                <Button
                  className="font-medium mt-[3px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center tracking-ls1 w-[10%]"
                  size="md"
                  variant="FillGray902"
                >
                  Preview
                </Button>
                <Button
                  className="font-medium mt-[3px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center tracking-ls1 w-[10%]"
                  size="md"
                  variant="FillGray100"
                >
                  Cancel
                </Button>
              </Row>
              <Row className="justify-evenly lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]">
                <Column className="w-[69%]">
                  <Column className="bg-white_A700 justify-end outline outline-[0.75px] outline-gray_100 lg:py-[18px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] rounded-radius15 shadow-bs1 w-[95%]">
                    <Text className="font-medium lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] mt-[2px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 tracking-ls1 w-[auto]">
                      Personal Information
                    </Text>
                    <Line className="bg-gray_100 h-[1.5px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[100%]" />
                    <Column className="lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[93%]">
                      <Row className="items-center justify-evenly w-[100%]">
                        <Column className="w-[52%]">
                          <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 tracking-ls1 w-[auto]">
                            <span className="text-black_900 font-urbanist">
                              First Name
                            </span>
                            <span className="text-red_600 font-urbanist">
                              *
                            </span>
                          </Text>
                          <Input
                            className="font-normal not-italic p-[0] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] placeholder:text-black_900 text-black_900 tracking-ls1 w-[100%]"
                            wrapClassName="2xl:mt-[14px] 3xl:mt-[16px] flex lg:mt-[10px] w-[93%] xl:mt-[12px]"
                            name="SearchInput One"
                            placeholder="Kevin"
                            prefix={
                              <Img
                                src="images/img_user_2.svg"
                                className="ml-[0] lg:w-[15px] lg:h-[16px] lg:mr-[10px] xl:w-[17px] xl:h-[18px] xl:mr-[12px] 2xl:w-[20px] 2xl:h-[21px] 2xl:mr-[14px] 3xl:w-[24px] 3xl:h-[25px] 3xl:mr-[16px] my-[auto]"
                                alt="user"
                              />
                            }
                            shape="RoundedBorder8"
                            size="sm"
                            variant="OutlineGray400"
                          ></Input>
                        </Column>
                        <Column className="w-[48%]">
                          <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 tracking-ls1 w-[auto]">
                            <span className="text-black_900 font-urbanist">
                              Last Name
                            </span>
                            <span className="text-red_600 font-urbanist">
                              *
                            </span>
                          </Text>
                          <Input
                            className="font-normal not-italic p-[0] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] placeholder:text-black_900 text-black_900 tracking-ls1 w-[100%]"
                            wrapClassName="2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[10px] w-[100%] xl:mt-[12px]"
                            name="SearchInput Two"
                            placeholder="Cranel"
                            shape="RoundedBorder8"
                            size="sm"
                            variant="OutlineGray400"
                          ></Input>
                        </Column>
                      </Row>
                      <Text className="font-medium lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 tracking-ls1 w-[auto]">
                        <span className="text-black_900 font-urbanist">
                          Email Address
                        </span>
                        <span className="text-red_600 font-urbanist">*</span>
                      </Text>
                      <Input
                        className="font-normal not-italic p-[0] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] placeholder:text-black_900 text-black_900 tracking-ls1 w-[100%]"
                        wrapClassName="2xl:mt-[14px] 3xl:mt-[16px] flex lg:mt-[10px] w-[100%] xl:mt-[12px]"
                        type="email"
                        name="email"
                        placeholder="hello.kevincranel@workmail.com"
                        prefix={
                          <Img
                            src="images/img_checkmark_17X20.svg"
                            className="ml-[0] lg:w-[15px] lg:mr-[10px] xl:w-[17px] xl:mr-[12px] 2xl:w-[20px] 2xl:mr-[14px] 3xl:w-[24px] 3xl:mr-[16px] my-[auto]"
                            alt="checkmark"
                          />
                        }
                        suffix={
                          <Img
                            src="images/img_vector_white_A700.svg"
                            className="bg-green_600 lg:w-[6px] lg:mx-[3px] xl:w-[7px] xl:mx-[4px] 2xl:w-[8px] 2xl:mx-[5px] 3xl:w-[9px] 3xl:mx-[6px] rounded-radius10 my-[auto]"
                            alt="Vector"
                          />
                        }
                        shape="RoundedBorder8"
                        size="sm"
                        variant="OutlineGray400"
                      ></Input>
                      <Text className="font-medium lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 tracking-ls1 w-[auto]">
                        Username
                      </Text>
                      <Input
                        className="p-[0] w-[100%]"
                        wrapClassName="2xl:mt-[14px] 2xl:pb-[20px] 2xl:pl-[18px] 2xl:pr-[5px] 2xl:pt-[21px] 3xl:mt-[16px] 3xl:pb-[24px] 3xl:pl-[21px] 3xl:pr-[6px] 3xl:pt-[25px] flex lg:mt-[10px] lg:pb-[15px] lg:pl-[14px] lg:pr-[3px] lg:pt-[16px] w-[100%] xl:mt-[12px] xl:pb-[17px] xl:pl-[16px] xl:pr-[4px] xl:pt-[18px]"
                        name="searchinput Three"
                        placeholder=""
                        prefix={
                          <Img
                            src="images/img_link.svg"
                            className="lg:w-[15px] lg:mr-[27px] xl:w-[17px] xl:mr-[31px] 2xl:w-[20px] 2xl:mr-[35px] 3xl:w-[24px] 3xl:mr-[42px] my-[auto]"
                            alt="link"
                          />
                        }
                        suffix={
                          <Img
                            src="images/img_vector_white_A700.svg"
                            className="bg-green_600 lg:w-[6px] lg:ml-[3px] xl:w-[7px] xl:ml-[4px] 2xl:w-[8px] 2xl:ml-[5px] 3xl:w-[9px] 3xl:ml-[6px] rounded-radius10 my-[auto]"
                            alt="Vector"
                          />
                        }
                        shape="RoundedBorder8"
                        variant="OutlineGray4001_2"
                      ></Input>
                      <Text className="font-medium lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 tracking-ls1 w-[auto]">
                        Biography
                      </Text>
                      <TextArea
                        className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] placeholder:text-black_900 text-black_900 tracking-ls1 w-[100%]"
                        name="searchinput Four"
                        placeholder="Dedicated to create amazing for art exhibition information please check link below:"
                      ></TextArea>
                      <Text className="font-medium lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 tracking-ls1 w-[auto]">
                        Website
                      </Text>
                      <Input
                        className="font-normal not-italic p-[0] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] placeholder:text-black_900 text-black_900 tracking-ls1 w-[100%]"
                        wrapClassName="2xl:mt-[14px] 3xl:mt-[16px] flex lg:mt-[10px] w-[100%] xl:mt-[12px]"
                        name="weburl"
                        placeholder="weloveart.com/kevincranel"
                        prefix={
                          <Img
                            src="images/img_globe_20X20.svg"
                            className="ml-[0] lg:w-[15px] lg:h-[16px] lg:mr-[10px] xl:w-[17px] xl:h-[18px] xl:mr-[12px] 2xl:w-[20px] 2xl:h-[21px] 2xl:mr-[14px] 3xl:w-[24px] 3xl:h-[25px] 3xl:mr-[16px] my-[auto]"
                            alt="globe"
                          />
                        }
                        shape="RoundedBorder8"
                        size="sm"
                        variant="OutlineGray400"
                      ></Input>
                    </Column>
                  </Column>
                  <Column className="bg-white_A700 justify-end lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] outline outline-[0.75px] outline-gray_100 lg:py-[18px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] rounded-radius15 shadow-bs1 w-[95%]">
                    <Text className="font-medium lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] mt-[4px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 tracking-ls1 w-[auto]">
                      Notification Settings
                    </Text>
                    <Line className="bg-gray_100 h-[1.5px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]" />
                    <List
                      className="gap-[0] min-h-[auto] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] pb-[2px] pr-[2px] w-[93%]"
                      orientation="vertical"
                    >
                      <Row className="items-center justify-evenly my-[0] py-[2px] w-[100%]">
                        <Column className="mb-[2px] w-[95%]">
                          <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 tracking-ls1 w-[auto]">
                            Item Sold
                          </Text>
                          <Text className="font-normal lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 tracking-ls1 w-[auto]">
                            When someone purchased one of your items
                          </Text>
                        </Column>
                        <Switch value={true} className="w-[5%]" />
                      </Row>
                      <Line className="self-center w-[100%] h-[1.5px] bg-gray_100" />
                      <Row className="items-center justify-evenly my-[0] py-[2px] w-[100%]">
                        <Column className="mb-[2px] w-[95%]">
                          <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 tracking-ls1 w-[auto]">
                            Successful Purchase
                          </Text>
                          <Text className="font-normal lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 tracking-ls1 w-[auto]">
                            When you successfully buy an item
                          </Text>
                        </Column>
                        <Switch value={true} className="w-[5%]" />
                      </Row>
                      <Line className="self-center w-[100%] h-[1.5px] bg-gray_100" />
                      <Row className="items-center justify-evenly my-[0] py-[4px] w-[100%]">
                        <Column className="mt-[1px] w-[95%]">
                          <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 tracking-ls1 w-[auto]">
                            Auction Expirates
                          </Text>
                          <Text className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 tracking-ls1 w-[auto]">
                            When a timed auction you created ends
                          </Text>
                        </Column>
                        <Switch value={false} className="w-[5%]" />
                      </Row>
                      <Line className="self-center w-[100%] h-[1.5px] bg-gray_100" />
                      <Row className="items-center justify-evenly my-[0] py-[4px] w-[100%]">
                        <Column className="mb-[1px] w-[95%]">
                          <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 tracking-ls1 w-[auto]">
                            Owned Item Updates
                          </Text>
                          <Text className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 tracking-ls1 w-[auto]">
                            When a significant update occurs for one of the
                            items you have purchased on Enefthy
                          </Text>
                        </Column>
                        <Switch value={false} className="w-[5%]" />
                      </Row>
                    </List>
                  </Column>
                </Column>
                <Column className="items-center w-[31%]">
                  <Column className="bg-white_A700 justify-end outline outline-[0.75px] outline-gray_100 lg:py-[18px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] rounded-radius15 shadow-bs1 w-[100%]">
                    <Text className="font-medium lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] mt-[2px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 tracking-ls1 w-[auto]">
                      Your Photo
                    </Text>
                    <Line className="bg-gray_100 h-[1.5px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[100%]" />
                    <Column className="lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[85%]">
                      <Row className="items-center w-[67%]">
                        <Img
                          src="images/img_ellipse1015.png"
                          className="lg:h-[50px] xl:h-[57px] 2xl:h-[65px] 3xl:h-[77px] rounded-radius50 lg:w-[49px] xl:w-[56px] 2xl:w-[64px] 3xl:w-[76px]"
                          alt="Ellipse1023"
                        />
                        <Column className="lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[58%]">
                          <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 tracking-ls1 w-[auto]">
                            Edit your photo
                          </Text>
                          <Row className="font-outfit xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[92%]">
                            <Text className="font-normal mb-[1px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 tracking-ls1 w-[auto]">
                              Delete
                            </Text>
                            <Text className="font-normal 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mt-[1px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_600 tracking-ls1 w-[auto]">
                              Update
                            </Text>
                          </Row>
                        </Column>
                      </Row>
                      <Column className="bg-white_A700 items-center lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] outline-[0.75px] outline-dashed outline-gray_900 lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[16px] rounded-radius15 w-[100%]">
                        <Button
                          className="flex lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] items-center justify-center lg:w-[37px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px]"
                          shape="icbCircleBorder25"
                          size="lgIcn"
                          variant="icbFillGray50"
                        >
                          <Img
                            src="images/img_cloud.svg"
                            className="flex items-center justify-center"
                            alt="cloud"
                          />
                        </Button>
                        <Text className="font-medium lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_902 tracking-ls1 w-[auto]">
                          Click to upload or drag and drop
                        </Text>
                        <Text className="font-medium leading-[130.00%] mb-[3px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-center text-gray_500 tracking-ls1 w-[33%]">
                          PNG, JPG or Gif
                          <br />
                          Max 20Mb
                        </Text>
                      </Column>
                    </Column>
                  </Column>
                  <Column className="bg-white_A700 lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] outline outline-[0.75px] outline-gray_100 lg:py-[20px] xl:py-[23px] 2xl:py-[26px] 3xl:py-[31px] rounded-radius15 shadow-bs1 w-[100%]">
                    <Text className="font-medium lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 tracking-ls1 w-[auto]">
                      Social Linked
                    </Text>
                    <Line className="bg-gray_100 h-[1.5px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[100%]" />
                    <Column className="lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:mt-[24px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[85%]">
                      <Row className="items-center justify-between w-[100%]">
                        <Img
                          src="images/img_signal_28X84.svg"
                          className="lg:h-[22px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] w-[30%]"
                          alt="signal"
                        />
                        <Button
                          className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center tracking-ls1 w-[34%]"
                          variant="FillGreen600"
                        >
                          Connected
                        </Button>
                      </Row>
                      <Text className="font-medium lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 tracking-ls1 w-[auto]">
                        Edit your photo
                      </Text>
                      <Text className="font-normal leading-[180.00%] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 tracking-ls1 w-[83%]">
                        Use Google to sign in to your account.
                        <br />
                        Click here to learn more.
                      </Text>
                    </Column>
                  </Column>
                </Column>
              </Row>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default SettingsPage;
