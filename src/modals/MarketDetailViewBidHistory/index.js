import React from "react";
import ModalProvider from "react-modal";

import { Column, Row, Text, Img, List, Line } from "components";

const MarketDetailViewBidHistoryModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] w-[25%]"
        overlayClassName="bg-white_A700 fixed flex h-[100%] inset-y-[0] shadow-bs2 w-[100%]"
        {...props}
      >
        <div className="m-[auto] max-h-[97vh] overflow-y-auto">
          <Row className="justify-end 2xl:ml-[1021px] 3xl:ml-[1225px] lg:ml-[794px] xl:ml-[908px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[25%]">
            <Text className="font-semibold lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-black_900 tracking-ls1 w-[auto]">
              Open Bid History
            </Text>
            <Img
              src="images/img_close.svg"
              className="common-pointer lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px] lg:ml-[112px] xl:ml-[128px] 2xl:ml-[145px] 3xl:ml-[174px] mt-[2px] lg:w-[10px] xl:w-[12px] 2xl:w-[14px] 3xl:w-[16px]"
              onClick={props.onRequestClose}
              alt="close"
            />
          </Row>
          <List
            className="font-urbanist gap-[0] lg:mb-[47px] xl:mb-[54px] 2xl:mb-[61px] 3xl:mb-[73px] min-h-[auto] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] pr-[3px] w-[100%]"
            orientation="vertical"
          >
            <Row className="justify-between my-[0] pt-[1px] w-[100%]">
              <Img
                src="images/img_ellipse1018_14.png"
                className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] rounded-radius50 lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]"
                alt="Ellipse1018"
              />
              <Column className="mt-[3px] w-[59%]">
                <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 tracking-ls1 w-[auto]">
                  Bid placed by Jerremy K.
                </Text>
                <Text className="font-medium lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 tracking-ls1 w-[auto]">
                  May 13, 2022 at 06:21 AM
                </Text>
              </Column>
              <Img
                src="images/img_sort.svg"
                className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] w-[2%]"
                alt="sort"
              />
              <Text className="font-medium lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                4,32 ETH
              </Text>
            </Row>
            <Line className="self-center w-[100%] h-[1.5px] bg-gray_100" />
            <Row className="justify-between my-[0] pt-[1px] w-[100%]">
              <Img
                src="images/img_ellipse1018_15.png"
                className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] rounded-radius50 lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]"
                alt="Ellipse1018 One"
              />
              <Column className="mt-[3px] w-[59%]">
                <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 tracking-ls1 w-[auto]">
                  Bid placed by Anthony
                </Text>
                <Text className="font-medium lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 tracking-ls1 w-[auto]">
                  May 13, 2022 at 06:21 AM
                </Text>
              </Column>
              <Img
                src="images/img_sort.svg"
                className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] w-[2%]"
                alt="sort One"
              />
              <Text className="font-medium lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                8.32 ETH
              </Text>
            </Row>
            <Line className="self-center w-[100%] h-[1.5px] bg-gray_100" />
            <Row className="justify-between my-[0] pt-[1px] w-[100%]">
              <Img
                src="images/img_ellipse1018_16.png"
                className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] rounded-radius50 lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]"
                alt="Ellipse1018 Two"
              />
              <Column className="mt-[3px] w-[59%]">
                <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 tracking-ls1 w-[auto]">
                  Bid placed by Zir3xa
                </Text>
                <Text className="font-medium lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 tracking-ls1 w-[auto]">
                  May 13, 2022 at 06:21 AM
                </Text>
              </Column>
              <Img
                src="images/img_sort.svg"
                className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] w-[2%]"
                alt="sort Two"
              />
              <Text className="font-medium lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                7.23 ETH
              </Text>
            </Row>
            <Line className="self-center w-[100%] h-[1.5px] bg-gray_100" />
            <Row className="justify-between my-[0] pt-[1px] w-[100%]">
              <Img
                src="images/img_ellipse1018_17.png"
                className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] rounded-radius50 lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]"
                alt="Ellipse1018 Three"
              />
              <Column className="mt-[3px] w-[59%]">
                <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 tracking-ls1 w-[auto]">
                  Bid placed by Matic M.
                </Text>
                <Text className="font-medium lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 tracking-ls1 w-[auto]">
                  May 13, 2022 at 06:21 AM
                </Text>
              </Column>
              <Img
                src="images/img_sort.svg"
                className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] w-[2%]"
                alt="sort Three"
              />
              <Text className="font-medium lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                7.22 ETH
              </Text>
            </Row>
            <Line className="self-center w-[100%] h-[1.5px] bg-gray_100" />
            <Row className="justify-between mr-[3px] my-[0] pt-[1px] w-[99%]">
              <Img
                src="images/img_ellipse1018_18.png"
                className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] rounded-radius50 lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]"
                alt="Ellipse1018 Four"
              />
              <Column className="mt-[3px] w-[59%]">
                <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 tracking-ls1 w-[auto]">
                  Bid placed by P. Blinders
                </Text>
                <Text className="font-medium lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 tracking-ls1 w-[auto]">
                  May 13, 2022 at 06:21 AM
                </Text>
              </Column>
              <Img
                src="images/img_sort.svg"
                className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] w-[2%]"
                alt="sort Four"
              />
              <Text className="font-medium lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                7.10 ETH
              </Text>
            </Row>
            <Line className="self-center w-[100%] h-[1.5px] bg-gray_100" />
            <Row className="justify-between my-[0] pt-[1px] w-[100%]">
              <Img
                src="images/img_ellipse1018_19.png"
                className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] rounded-radius50 lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]"
                alt="Ellipse1018 Five"
              />
              <Column className="mt-[3px] w-[59%]">
                <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 tracking-ls1 w-[auto]">
                  Bid placed by Merquey
                </Text>
                <Text className="font-medium lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 tracking-ls1 w-[auto]">
                  May 13, 2022 at 06:21 AM
                </Text>
              </Column>
              <Img
                src="images/img_sort.svg"
                className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] w-[2%]"
                alt="sort Five"
              />
              <Text className="font-medium lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                7.09 ETH
              </Text>
            </Row>
            <Line className="self-center w-[100%] h-[1.5px] bg-gray_100" />
            <Row className="justify-between my-[0] pt-[1px] w-[100%]">
              <Img
                src="images/img_ellipse1018_20.png"
                className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] rounded-radius50 lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]"
                alt="Ellipse1018 Six"
              />
              <Column className="mt-[3px] w-[59%]">
                <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 tracking-ls1 w-[auto]">
                  Bid placed by Tanaka
                </Text>
                <Text className="font-medium lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 tracking-ls1 w-[auto]">
                  May 13, 2022 at 06:21 AM
                </Text>
              </Column>
              <Img
                src="images/img_sort.svg"
                className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] w-[2%]"
                alt="sort Six"
              />
              <Text className="font-medium lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                6.56 ETH
              </Text>
            </Row>
            <Line className="self-center w-[100%] h-[1.5px] bg-gray_100" />
            <Row className="justify-between my-[0] pt-[1px] w-[100%]">
              <Img
                src="images/img_ellipse1018_21.png"
                className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] rounded-radius50 lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]"
                alt="Ellipse1018 Seven"
              />
              <Column className="mt-[3px] w-[59%]">
                <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 tracking-ls1 w-[auto]">
                  Bid placed by Hitomi
                </Text>
                <Text className="font-medium lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 tracking-ls1 w-[auto]">
                  May 13, 2022 at 06:21 AM
                </Text>
              </Column>
              <Img
                src="images/img_sort.svg"
                className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] w-[2%]"
                alt="sort Seven"
              />
              <Text className="font-medium lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                6.42 ETH
              </Text>
            </Row>
            <Line className="self-center w-[100%] h-[1.5px] bg-gray_100" />
            <Row className="justify-between my-[0] pt-[1px] w-[100%]">
              <Img
                src="images/img_ellipse1018_22.png"
                className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] rounded-radius50 lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]"
                alt="Ellipse1018 Eight"
              />
              <Column className="mt-[3px] w-[59%]">
                <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 tracking-ls1 w-[auto]">
                  Bid placed by Kevinjaya
                </Text>
                <Text className="font-medium lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 tracking-ls1 w-[auto]">
                  May 13, 2022 at 06:21 AM
                </Text>
              </Column>
              <Img
                src="images/img_sort.svg"
                className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] w-[2%]"
                alt="sort Eight"
              />
              <Text className="font-medium lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                5.43 ETH
              </Text>
            </Row>
            <Line className="self-center w-[100%] h-[1.5px] bg-gray_100" />
            <Row className="justify-between my-[0] pt-[1px] w-[100%]">
              <Img
                src="images/img_ellipse1018_9.png"
                className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] rounded-radius50 lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]"
                alt="Ellipse1018 Nine"
              />
              <Column className="mt-[3px] w-[59%]">
                <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 tracking-ls1 w-[auto]">
                  Bid placed by Meliodas
                </Text>
                <Text className="font-medium lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_500 tracking-ls1 w-[auto]">
                  May 13, 2022 at 06:21 AM
                </Text>
              </Column>
              <Img
                src="images/img_sort.svg"
                className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] w-[2%]"
                alt="sort Nine"
              />
              <Text className="font-medium lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 tracking-ls1 w-[auto]">
                4.44 ETH
              </Text>
            </Row>
          </List>
        </div>
      </ModalProvider>
    </>
  );
};

export default MarketDetailViewBidHistoryModal;
