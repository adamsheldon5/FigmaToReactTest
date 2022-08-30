import React from "react";
import ModalProvider from "react-modal";

import { Column, Row, Text, Img, List, Line, Button } from "components";

const DashboardNotificationModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] w-[18%]"
        overlayClassName="bg-white_A700 fixed flex h-[100%] inset-y-[0] shadow-bs3 w-[100%]"
        {...props}
      >
        <div className="m-[auto] max-h-[97vh] overflow-y-auto">
          <Row className="font-urbanist justify-end ml-[auto] py-[2px] w-[18%]">
            <Column className="mb-[2px] w-[96%]">
              <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 tracking-ls1 w-[auto]">
                Notification
              </Text>
              <Text className="font-normal 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 tracking-ls1 w-[auto]">
                You have 0 unread messages
              </Text>
            </Column>
            <Img
              src="images/img_close_11X11.svg"
              className="common-pointer xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] mt-[2px] 2xl:w-[11px] 3xl:w-[13px] lg:w-[8px] xl:w-[9px]"
              onClick={props.onRequestClose}
              alt="close"
            />
          </Row>
          <Text className="font-normal font-outfit xl:ml-[1016px] 2xl:ml-[1143px] 3xl:ml-[1372px] lg:ml-[889px] lg:mt-[24px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_500 tracking-ls1 w-[auto]">
            New
          </Text>
          <List
            className="font-outfit gap-[0] lg:mb-[532px] xl:mb-[608px] 2xl:mb-[684px] 3xl:mb-[821px] min-h-[auto] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[100%]"
            orientation="vertical"
          >
            <Row className="items-center lg:my-[10px] xl:my-[12px] 2xl:my-[14px] 3xl:my-[16px] pr-[3px] pt-[3px] w-[100%]">
              <Button
                className="flex lg:h-[30px] xl:h-[34px] 2xl:h-[39px] 3xl:h-[46px] items-center justify-center lg:w-[29px] xl:w-[33px] 2xl:w-[38px] 3xl:w-[45px]"
                shape="icbCircleBorder18"
                size="smIcn"
                variant="icbFillGray100"
              >
                <Img
                  src="images/img_refresh_38X38.svg"
                  className="flex items-center justify-center lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px]"
                  alt="refresh"
                />
              </Button>
              <Column className="lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] w-[70%]">
                <Text className="font-semibold leading-[130.00%] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[100%]">
                  <span className="text-black_900 font-outfit">
                    Your bid is placed{" "}
                  </span>
                  <span className="text-gray_500 font-outfit font-normal not-italic">
                    waiting for
                    <br />
                    auction ended
                  </span>
                </Text>
                <Row className="lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] pl-[1px] py-[1px] w-[60%]">
                  <Img
                    src="images/img_clock_20X20.svg"
                    className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] ml-[1px] my-[1px] lg:w-[11px] xl:w-[13px] 2xl:w-[15px] 3xl:w-[18px]"
                    alt="clock"
                  />
                  <Text className="font-normal 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] mt-[3px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_500 tracking-ls1 w-[auto]">
                    24 Minutes ago
                  </Text>
                </Row>
              </Column>
            </Row>
            <Line className="self-center w-[100%] h-[1.5px] bg-gray_100" />
            <Row className="items-center justify-between lg:my-[10px] xl:my-[12px] 2xl:my-[14px] 3xl:my-[16px] pr-[3px] pt-[3px] w-[100%]">
              <Button
                className="flex lg:h-[30px] xl:h-[34px] 2xl:h-[39px] 3xl:h-[46px] items-center justify-center lg:w-[29px] xl:w-[33px] 2xl:w-[38px] 3xl:w-[45px]"
                shape="icbCircleBorder18"
                size="smIcn"
                variant="icbFillGray100"
              >
                <Img
                  src="images/img_frame162432.png"
                  className="flex items-center justify-center"
                  alt="Frame162432"
                />
              </Button>
              <Column className="mr-[2px] w-[78%]">
                <Text className="font-semibold leading-[130.00%] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[100%]">
                  <span className="text-black_900 font-outfit">
                    You have new message{" "}
                  </span>
                  <span className="text-gray_500 font-outfit font-normal not-italic">
                    2 unread messaeges
                  </span>
                </Text>
                <Row className="2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] pl-[1px] py-[1px] w-[44%]">
                  <Img
                    src="images/img_clock_20X20.svg"
                    className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] ml-[1px] my-[1px] lg:w-[11px] xl:w-[13px] 2xl:w-[15px] 3xl:w-[18px]"
                    alt="clock One"
                  />
                  <Text className="font-normal 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] mt-[3px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_500 tracking-ls1 w-[auto]">
                    1 Hours ago
                  </Text>
                </Row>
              </Column>
            </Row>
            <Line className="self-center w-[100%] h-[1.5px] bg-gray_100" />
            <Row className="items-center justify-between lg:my-[10px] xl:my-[12px] 2xl:my-[14px] 3xl:my-[16px] pr-[3px] pt-[3px] w-[100%]">
              <Button
                className="flex lg:h-[30px] xl:h-[34px] 2xl:h-[39px] 3xl:h-[46px] items-center justify-center lg:w-[29px] xl:w-[33px] 2xl:w-[38px] 3xl:w-[45px]"
                shape="icbCircleBorder18"
                size="smIcn"
                variant="icbFillGray100"
              >
                <Img
                  src="images/img_frame162432_gray_902.png"
                  className="flex items-center justify-center"
                  alt="Frame162432 One"
                />
              </Button>
              <Column className="mr-[2px] w-[78%]">
                <Text className="font-semibold leading-[130.00%] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[100%]">
                  <span className="text-black_900 font-outfit">
                    New collection created{" "}
                  </span>
                  <span className="text-gray_500 font-outfit font-normal not-italic">
                    in nft art category
                  </span>
                </Text>
                <Row className="2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] pl-[1px] py-[1px] w-[43%]">
                  <Img
                    src="images/img_clock_20X20.svg"
                    className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] ml-[1px] my-[1px] lg:w-[11px] xl:w-[13px] 2xl:w-[15px] 3xl:w-[18px]"
                    alt="clock Two"
                  />
                  <Text className="font-normal 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] mt-[3px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_500 tracking-ls1 w-[auto]">
                    4 Days ago
                  </Text>
                </Row>
              </Column>
            </Row>
          </List>
        </div>
      </ModalProvider>
    </>
  );
};

export default DashboardNotificationModal;
