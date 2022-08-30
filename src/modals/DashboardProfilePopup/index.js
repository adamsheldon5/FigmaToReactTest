import React from "react";
import ModalProvider from "react-modal";

import { Column, Row, Img, Text, Line, Switch } from "components";

const DashboardProfilePopupModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] w-[14%]"
        overlayClassName="bg-white_A700 fixed flex h-[100%] inset-y-[0] outline outline-[0.75px] outline-gray_100 rounded-radius10 shadow-bs3 w-[100%]"
        {...props}
      >
        <div className="m-[auto] max-h-[97vh] overflow-y-auto">
          <Column className="justify-end lg:mb-[504px] xl:mb-[576px] 2xl:mb-[648px] 3xl:mb-[778px] lg:mt-[52px] xl:mt-[60px] 2xl:mt-[68px] 3xl:mt-[81px] lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[16px] rounded-radius10 w-[100%]">
            <Row className="lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] mr-[auto] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[67%]">
              <Img
                src="images/img_ellipse1015.png"
                className="lg:h-[30px] xl:h-[34px] 2xl:h-[39px] 3xl:h-[46px] rounded-radius50 lg:w-[29px] xl:w-[33px] 2xl:w-[38px] 3xl:w-[45px]"
                alt="Ellipse1021"
              />
              <Column className="2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mt-[2px] w-[64%]">
                <Text className="font-semibold lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                  Kevin Crannel
                </Text>
                <Text className="font-medium mt-[4px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_500 tracking-ls1 w-[auto]">
                  @kecrane
                </Text>
              </Column>
            </Row>
            <Column className="lg:h-[158px] xl:h-[180px] 2xl:h-[203px] 3xl:h-[243px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]">
              <Line className="bg-gray_100 h-[1.5px] w-[100%]" />
              <Row className="items-center lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] pl-[1px] py-[1px] w-[36%]">
                <Img
                  src="images/img_warning.svg"
                  className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] my-[1px] lg:w-[12px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                  alt="warning"
                />
                <Text className="font-medium lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 tracking-ls1 w-[auto]">
                  Home
                </Text>
              </Row>
              <Row className="items-center lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] pl-[1px] py-[1px] w-[36%]">
                <Img
                  src="images/img_user_16X14.svg"
                  className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] ml-[1px] w-[19%]"
                  alt="user"
                />
                <Text className="font-medium lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 tracking-ls1 w-[auto]">
                  Profile
                </Text>
              </Row>
              <Row className="items-center lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[85%]">
                <Img
                  src="images/img_vector_16X16.svg"
                  className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] mb-[1px] lg:w-[12px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                  alt="Vector"
                />
                <Text className="font-medium lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 tracking-ls1 w-[auto]">
                  Dark Mode
                </Text>
                <Switch
                  value={false}
                  className="lg:ml-[30px] xl:ml-[34px] 2xl:ml-[39px] 3xl:ml-[46px] mt-[1px] w-[17%]"
                />
              </Row>
              <Row className="lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] pl-[1px] py-[1px] w-[43%]">
                <Img
                  src="images/img_settings.svg"
                  className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] ml-[1px] my-[1px] w-[19%]"
                  alt="settings"
                />
                <Text className="font-medium lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] mt-[4px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 tracking-ls1 w-[auto]">
                  Settings
                </Text>
              </Row>
              <Line className="bg-gray_100 h-[1.5px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] w-[100%]" />
              <Row className="font-outfit lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] pl-[1px] py-[1px] w-[39%]">
                <Img
                  src="images/img_refresh_15X15.svg"
                  className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] ml-[1px] my-[1px] lg:w-[11px] xl:w-[13px] 2xl:w-[15px] 3xl:w-[18px]"
                  alt="refresh"
                />
                <Text className="font-medium lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] mt-[4px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_600 w-[auto]">
                  Logout
                </Text>
              </Row>
            </Column>
          </Column>
        </div>
      </ModalProvider>
    </>
  );
};

export default DashboardProfilePopupModal;
