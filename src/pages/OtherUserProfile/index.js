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
  Grid,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";

const OtherUserProfilePage = () => {
  const [inputvalue, setInputvalue] = React.useState("");
  const [inputvalue1, setInputvalue1] = React.useState("");

  return (
    <>
      <Column className="bg-white_A700 font-urbanist items-center mx-[auto] w-[100%]">
        <Row className="items-center justify-evenly w-[100%]">
          <aside className="items-center w-[21%]">
            <Column className="">
              <Column className="bg-gray_50 border-bw15 border-gray_100 border-solid lg:p-[26px] xl:p-[30px] 2xl:p-[34px] 3xl:p-[40px] w-[100%]">
                <Row className="font-outfit items-center w-[75%]">
                  <Img
                    src="images/img_ellipse1015.png"
                    className="lg:h-[44px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] rounded-radius50 lg:w-[43px] xl:w-[49px] 2xl:w-[56px] 3xl:w-[67px]"
                    alt="Ellipse1015"
                  />
                  <Column className="lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] w-[60%]">
                    <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 tracking-ls1 w-[auto]">
                      Kevin Cranel
                    </Text>
                    <Text className="font-normal 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 tracking-ls1 w-[auto]">
                      @kecrane
                    </Text>
                  </Column>
                </Row>
                <Text className="font-medium font-urbanist lg:mt-[39px] xl:mt-[45px] 2xl:mt-[51px] 3xl:mt-[61px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_900 tracking-ls1 w-[auto]">
                  GENERAL
                </Text>
                <Row className="font-urbanist items-center lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] pl-[2px] py-[2px] w-[56%]">
                  <Img
                    src="images/img_clock.svg"
                    className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                    alt="clock"
                  />
                  <Text className="font-medium lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_500 tracking-ls1 w-[auto]">
                    Dashboard
                  </Text>
                </Row>
                <Row className="font-urbanist lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] pl-[1px] py-[1px] w-[49%]">
                  <Img
                    src="images/img_car.svg"
                    className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] ml-[1px] my-[1px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                    alt="car"
                  />
                  <Text className="font-medium lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_500 tracking-ls1 w-[auto]">
                    Message
                  </Text>
                </Row>
                <Row className="font-urbanist lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] pl-[1px] py-[1px] w-[47%]">
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
                <Row className="font-urbanist items-center lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] pl-[2px] py-[2px] w-[43%]">
                  <Img
                    src="images/img_user.svg"
                    className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] ml-[1px] w-[19%]"
                    alt="user"
                  />
                  <Text className="font-medium lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_500 tracking-ls1 w-[auto]">
                    Market
                  </Text>
                </Row>
                <Row className="font-urbanist items-center lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] pl-[1px] py-[1px] w-[53%]">
                  <Img
                    src="images/img_judge.svg"
                    className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] ml-[1px] mt-[1px] w-[15%]"
                    alt="judge"
                  />
                  <Text className="font-medium lg:ml-[16px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_500 tracking-ls1 w-[auto]">
                    Active Bid
                  </Text>
                </Row>
                <Row className="font-urbanist items-center ml-[2px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[39%]">
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
                <Row className="font-urbanist items-center lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] pl-[2px] py-[2px] w-[52%]">
                  <Img
                    src="images/img_user_20X20.svg"
                    className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                    alt="user One"
                  />
                  <Text className="font-medium lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_500 tracking-ls1 w-[auto]">
                    Collection
                  </Text>
                </Row>
                <Row className="font-urbanist items-center lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] pl-[2px] py-[2px] w-[39%]">
                  <Img
                    src="images/img_computer.svg"
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] my-[1px] w-[22%]"
                    alt="computer"
                  />
                  <Text className="font-medium lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] my-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_500 tracking-ls1 w-[auto]">
                    Wallet
                  </Text>
                </Row>
                <Row className="font-urbanist lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] pl-[1px] py-[1px] w-[42%]">
                  <Img
                    src="images/img_clock_20X20.svg"
                    className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] ml-[1px] my-[1px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                    alt="clock Two"
                  />
                  <Text className="font-medium lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_500 tracking-ls1 w-[auto]">
                    History
                  </Text>
                </Row>
                <Stack className="font-urbanist lg:h-[201px] xl:h-[230px] 2xl:h-[259px] 3xl:h-[310px] lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] w-[100%]">
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
          <Column className="items-center w-[79%]">
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
            <Stack className="3xl:h-[1129px] lg:h-[732px] xl:h-[837px] 2xl:h-[941px] w-[100%]">
              <Img
                src="images/img_rectangle2057.png"
                className="absolute lg:h-[203px] xl:h-[232px] 2xl:h-[261px] 3xl:h-[313px] top-[0] w-[100%]"
                alt="Rectangle2057"
              />
              <Column className="absolute bg-white_A700 items-center justify-center left-[3%] lg:p-[14px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] rounded-radius15 shadow-bs1 top-[19%] w-[21%]">
                <Img
                  src="images/img_ellipse1015_42X42.png"
                  className="2xl:h-[101px] 3xl:h-[121px] lg:h-[78px] xl:h-[89px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] rounded-radius50 2xl:w-[100px] 3xl:w-[120px] lg:w-[77px] xl:w-[88px]"
                  alt="Ellipse1022"
                />
                <Text className="font-semibold lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_900 tracking-ls1 w-[auto]">
                  Eleanor Pena
                </Text>
                <Column className="items-center lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[89%]">
                  <Row className="items-center justify-between pr-[1px] py-[1px] w-[97%]">
                    <Text className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_500 tracking-ls1 w-[auto]">
                      0x864784f44ajf84bskw4w...
                    </Text>
                    <Img
                      src="images/img_lock.svg"
                      className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] mr-[1px] lg:w-[11px] xl:w-[13px] 2xl:w-[15px] 3xl:w-[18px]"
                      alt="lock"
                    />
                  </Row>
                  <Text className="font-normal leading-[180.00%] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center text-gray_500 tracking-ls1 w-[100%]">
                    Dedicated to create amazing for art exhibition information
                    please check link below:
                  </Text>
                  <Row className="items-center justify-center lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] pl-[1px] py-[1px] w-[49%]">
                    <Img
                      src="images/img_globe.svg"
                      className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] lg:w-[11px] xl:w-[13px] 2xl:w-[15px] 3xl:w-[18px]"
                      alt="globe"
                    />
                    <Text className="font-normal lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-black_900 tracking-ls1 w-[auto]">
                      artistictea.io
                    </Text>
                  </Row>
                  <Row className="items-center justify-between lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[97%]">
                    <Button
                      className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-center tracking-ls1 w-[50%]"
                      variant="FillGray902"
                    >
                      Follow
                    </Button>
                    <Button
                      className="flex lg:h-[25px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] items-center justify-center lg:w-[24px] xl:w-[28px] 2xl:w-[32px] 3xl:w-[38px]"
                      shape="icbRoundedBorder8"
                      size="smIcn"
                      variant="icbOutlineGray100"
                    >
                      <Img
                        src="images/img_reply.svg"
                        className="flex items-center justify-center lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px]"
                        alt="reply"
                      />
                    </Button>
                    <Button
                      className="flex lg:h-[25px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] items-center justify-center lg:w-[24px] xl:w-[28px] 2xl:w-[32px] 3xl:w-[38px]"
                      shape="icbRoundedBorder8"
                      size="smIcn"
                      variant="icbOutlineGray100"
                    >
                      <Img
                        src="images/img_camera.svg"
                        className="flex items-center justify-center lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px]"
                        alt="camera"
                      />
                    </Button>
                  </Row>
                </Column>
                <Line className="bg-gray_100 h-[1px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]" />
                <Text className="font-normal 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 tracking-ls1 w-[auto]">
                  Joined April 2021
                </Text>
              </Column>
              <Column className="absolute bottom-[0] items-center right-[3%] w-[70%]">
                <Row className="items-center w-[100%]">
                  <Button
                    className="flex items-center justify-center text-center w-[13%]"
                    leftIcon={
                      <Img
                        src="images/img_grid.svg"
                        className="text-center lg:w-[12px] lg:h-[13px] lg:mr-[8px] xl:w-[14px] xl:h-[15px] xl:mr-[9px] 2xl:w-[16px] 2xl:h-[17px] 2xl:mr-[11px] 3xl:w-[19px] 3xl:h-[20px] 3xl:mr-[13px]"
                        alt="grid"
                      />
                    }
                    shape="CircleBorder18"
                    size="md"
                    variant="FillBlack900"
                  >
                    <div className="bg-transparent font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] tracking-ls1">
                      Created
                    </div>
                  </Button>
                  <Row className="items-center justify-center lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] pl-[1px] py-[1px] rounded-radius10 w-[12%]">
                    <Img
                      src="images/img_folderadd.svg"
                      className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] ml-[1px] mt-[1px] lg:w-[12px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                      alt="folderadd"
                    />
                    <Text className="font-medium 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 tracking-ls1 w-[auto]">
                      Collection
                    </Text>
                  </Row>
                  <Row className="justify-center lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] pl-[1px] py-[1px] rounded-radius10 w-[9%]">
                    <Img
                      src="images/img_clock_20X20.svg"
                      className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] ml-[1px] my-[1px] lg:w-[12px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                      alt="clock Three"
                    />
                    <Text className="font-medium 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] mt-[4px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 tracking-ls1 w-[auto]">
                      History
                    </Text>
                  </Row>
                  <Input
                    value={inputvalue1}
                    onChange={(e) => setInputvalue1(e?.target?.value)}
                    className="font-normal not-italic p-[0] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] placeholder:text-gray_500 text-gray_500 tracking-ls1 w-[100%]"
                    wrapClassName="2xl:ml-[263px] 3xl:ml-[315px] flex lg:ml-[204px] w-[25%] xl:ml-[233px]"
                    name="SearchInput One"
                    placeholder="Search by name"
                    prefix={
                      <Img
                        src="images/img_search.svg"
                        className="cursor-pointer ml-[4px] lg:w-[11px] lg:h-[12px] lg:mr-[11px] xl:w-[13px] xl:h-[14px] xl:mr-[13px] 2xl:w-[15px] 2xl:h-[16px] 2xl:mr-[15px] 3xl:w-[18px] 3xl:h-[19px] 3xl:mr-[18px] my-[auto]"
                        alt="search"
                      />
                    }
                    suffix={
                      inputvalue1?.length > 0 ? (
                        <CloseSVG
                          color="#93989a"
                          className="cursor-pointer lg:w-[11px] lg:h-[12px] lg:ml-[7px] lg:mr-[17px] xl:w-[13px] xl:h-[14px] xl:ml-[8px] xl:mr-[19px] 2xl:w-[15px] 2xl:h-[16px] 2xl:ml-[10px] 2xl:mr-[22px] 3xl:w-[18px] 3xl:h-[19px] 3xl:ml-[12px] 3xl:mr-[26px] my-[auto]"
                          onClick={() => setInputvalue1("")}
                        />
                      ) : (
                        ""
                      )
                    }
                    shape="srcRoundedBorder8"
                    size="smSrc"
                    variant="srcOutlineGray3001_2"
                  ></Input>
                </Row>
                <Grid className="lg:gap-[14px] xl:gap-[16px] 2xl:gap-[19px] 3xl:gap-[22px] grid grid-cols-3 lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[100%]">
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
                          src="images/img_favorite_1.svg"
                          className="flex items-center justify-center"
                          alt="favorite"
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
                              alt="sort"
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
                          alt="Vector One"
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
                              alt="sort One"
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
                      <Text className="bg-gray_900_26 font-medium mt-[1px] 3xl:pb-[10px] lg:pb-[7px] xl:pb-[8px] 2xl:pb-[9px] 2xl:pl-[10px] 3xl:pl-[12px] lg:pl-[7px] xl:pl-[8px] lg:pt-[4px] xl:pt-[5px] 2xl:pt-[6px] 3xl:pt-[7px] rounded-radius14 xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-white_A700 tracking-ls1 w-[75px]">
                        Ended
                      </Text>
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
                        Natural Atomic Circle
                      </Text>
                      <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_500 tracking-ls1 w-[auto]">
                        By Eleanor Pena
                      </Text>
                      <Row className="items-center justify-evenly lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]">
                        <Column className="font-outfit pb-[1px] pr-[1px] w-[61%]">
                          <Text className="font-normal not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-gray_500 tracking-ls1 w-[auto]">
                            Fixed Price
                          </Text>
                          <Row className="font-urbanist lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] pl-[1px] py-[1px] w-[63%]">
                            <Img
                              src="images/img_sort.svg"
                              className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] ml-[3px] mt-[1px] w-[8%]"
                              alt="sort Two"
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
                        backgroundImage: "url('images/img_duration_9.png')",
                      }}
                    >
                      <Text className="bg-gray_900_26 font-medium mt-[1px] 3xl:pb-[10px] lg:pb-[7px] xl:pb-[8px] 2xl:pb-[9px] 2xl:pl-[10px] 3xl:pl-[12px] lg:pl-[7px] xl:pl-[8px] lg:pt-[4px] xl:pt-[5px] 2xl:pt-[6px] 3xl:pt-[7px] rounded-radius14 xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-white_A700 tracking-ls1 w-[75px]">
                        Ended
                      </Text>
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
                        Uowaw Your Face is Good
                      </Text>
                      <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_500 tracking-ls1 w-[auto]">
                        By Eleanor Pena
                      </Text>
                      <Row className="items-center justify-evenly lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]">
                        <Column className="font-outfit pb-[1px] pr-[1px] w-[61%]">
                          <Text className="font-normal not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-gray_500 tracking-ls1 w-[auto]">
                            Fixed Price
                          </Text>
                          <Row className="font-urbanist lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] pl-[1px] py-[1px] w-[55%]">
                            <Img
                              src="images/img_sort.svg"
                              className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] ml-[3px] mt-[1px] w-[10%]"
                              alt="sort Three"
                            />
                            <Text className="font-medium 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                              1,32 ETH
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
                        backgroundImage: "url('images/img_duration_10.png')",
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
                    <Column className="xl:mb-[10px] 2xl:mb-[12px] 3xl:mb-[14px] lg:mb-[9px] lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[93%]">
                      <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 tracking-ls1 w-[auto]">
                        One Blooded Hand
                      </Text>
                      <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_500 tracking-ls1 w-[auto]">
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
                              alt="sort Four"
                            />
                            <Text className="font-medium 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                              5,52 ETH
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
                          src="images/img_favorite_1.svg"
                          className="flex items-center justify-center"
                          alt="favorite One"
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
                              alt="sort Five"
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
                </Grid>
              </Column>
            </Stack>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default OtherUserProfilePage;
