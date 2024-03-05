import React from "react";
import { Helmet } from "react-helmet";
// import { Button, Img, Input, Text } from "../../components";
import { Img } from "../../../components/Img";
import { Text } from "../../../components/Text";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";

import Header from "../../../components/Header";

export default function ActivatedriverAccountConnectWalletPage() {
  return (
    <>
      <Helmet>
        <title>dApp Hackthon-Javascript</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-center w-full pb-[168px] gap-[23px] bg-white-A700_01 shadow-sm">
        <Header className="flex justify-center items-center w-full p-[21px] bg-white-A700_01 shadow-xs" />
        <div className="flex flex-row justify-center w-full max-w-[1109px]">
          <div className="flex flex-col items-start justify-start w-full">
            <Text size="12xl" as="p" className="ml-6">
              Activate your driver account
            </Text>
            <div className="flex flex-row justify-start items-center w-full mt-4 gap-[22px]">
              <div className="flex flex-col items-start justify-center w-[29%] p-[15px] bg-white-A700_01 rounded-[12px]">
                <div className="flex flex-col items-center justify-start w-[82%] mt-[3px] ml-2.5">
                  <div className="flex flex-row justify-start items-start w-full gap-[19px]">
                    <Button color="lime_500" size="sm" shape="circle" className="w-[28px]">
                      <Img src="images/img_container_598.svg" />
                    </Button>
                    <Text size="4xl" as="p">
                      Driver Information
                    </Text>
                  </div>
                  <div className="flex flex-row justify-start items-center w-[94%] gap-3">
                    <div className="h-[339px] w-[13%] relative">
                      <div className="flex flex-col items-center justify-center w-max h-max left-0 bottom-0 right-0 top-0 m-auto absolute">
                        <div className="h-[82px] w-[2px] z-[1] bg-lime-500" />
                        <div className="flex flex-row justify-center items-start w-full mt-[-17px]">
                          <div className="h-[82px] w-[2px] mt-[7px] z-[1] bg-lime-500" />
                          <div className="h-[266px] w-px ml-[-1px] bg-gray-400_02" />
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-full gap-[131px] bottom-0 right-0 left-0 m-auto absolute">
                        <Text
                          size="3xl"
                          as="p"
                          className="flex justify-center items-center h-[28px] w-[28px] !text-gray-700_02 border-lime-500 border-2 border-solid bg-lime-500 text-shadow-ts1 text-center rounded-[50%]"
                        >
                          3
                        </Text>
                        <Text
                          size="3xl"
                          as="p"
                          className="flex justify-center items-center h-[28px] w-[28px] !text-gray-800 bg-gray-100 text-center rounded-[50%]"
                        >
                          3
                        </Text>
                      </div>
                      <Button
                        color="lime_500"
                        size="sm"
                        shape="circle"
                        className="w-[28px] top-[15%] right-0 left-0 m-auto border-lime-500 border-2 border-solid shadow-xl absolute"
                      >
                        <Img src="images/img_container_598.svg" />
                      </Button>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[82%]">
                      <Text size="3xl" as="p">
                        Vehicle information
                      </Text>
                      <Text size="5xl" as="p" className="mt-[83px]">
                        Connect Wallet
                      </Text>
                      <Text size="4xl" as="p" className="mt-[129px] !text-gray-600">
                        Complete
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-[70%]">
                <Input
                  color="gray_100_02"
                  size="5xl"
                  name="container589"
                  placeholder="Connecting a wallet enables you to make various payment transactions"
                  prefix={<Img src="images/img_alarm_2.svg" alt="Alarm 3" />}
                  className="w-full gap-4 rounded-[24px]"
                />
                <div className="flex flex-row justify-start items-start mt-5 gap-4">
                  <Img
                    src="images/img_container_590.svg"
                    alt="container590"
                    className="h-[36px] w-[36px] rounded-[12px]"
                  />
                  <Text size="6xl" as="p" className="mt-1">
                    Connect Wallet
                  </Text>
                </div>
                <div className="flex flex-row justify-start w-[43%] mt-1.5 p-[9px] border-lime-500 border border-solid bg-lime-50 rounded-[12px]">
                  <div className="flex flex-row justify-start items-center w-[47%] ml-[15px]">
                    <Img src="images/img_frame.svg" alt="image" className="h-[28px]" />
                    <Img
                      src="images/img_image_503.png"
                      alt="image503_one"
                      className="w-[81%] ml-[-20px] object-cover"
                    />
                  </div>
                </div>
                <div className="flex flex-row justify-start w-[89%] mt-4 gap-6">
                  <div className="flex flex-col items-start justify-center w-[49%] gap-px">
                    <Text size="3xl" as="p" className="mt-0.5 !text-gray-800">
                      Private Key
                    </Text>
                    <Input name="textfield" placeholder="MIICWwIBAAs+LCnCcgGUG4GW" className="w-full" />
                  </div>
                  <div className="flex flex-col items-start justify-center w-[49%] gap-px">
                    <Text size="3xl" as="p" className="mt-0.5 !text-gray-800">
                      Public Key
                    </Text>
                    <Input name="textfield_one" placeholder="MIICWwIBAAs+LCnCcgGUG4GW" className="w-full" />
                  </div>
                </div>
                <div className="flex flex-row justify-start items-end mt-9 gap-4">
                  <Img
                    src="images/img_container_591.svg"
                    alt="container591"
                    className="h-[36px] w-[36px] rounded-[12px]"
                  />
                  <Text size="6xl" as="p" className="mb-[3px]">
                    Integrate Mpesa
                  </Text>
                  <Button
                    color="gray_100_02"
                    size="md"
                    className="mb-[3px] !text-blue_gray-900_02 min-w-[83px] rounded-[14px]"
                  >
                    Optional
                  </Button>
                </div>
                <div className="flex flex-row justify-start w-[43%] mt-6 p-5 border-lime-500 border border-solid bg-lime-50 rounded-[12px]">
                  <div className="flex flex-row justify-start items-center w-[44%] ml-1">
                    <Img src="images/img_frame.svg" alt="image_one" className="h-[28px]" />
                    <Img
                      src="images/img_image_502.png"
                      alt="image502_one"
                      className="w-[72%] ml-[-12px] object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-start w-[62%] mt-4 ml-[340px] gap-6">
              <div className="flex flex-col items-start justify-center w-[49%] gap-px">
                <Text size="3xl" as="p" className="mt-0.5 !text-gray-800">
                  Paybill Number
                </Text>
                <Input type="number" name="textfield_two" placeholder="Enter  your Paybill Number" className="w-full" />
              </div>
              <div className="flex flex-col items-start justify-start w-[49%] gap-[3px]">
                <Text size="3xl" as="p" className="!text-gray-800">
                  Phone Number
                </Text>
                <Input type="number" name="phoneNumber" placeholder="Enter phone number" className="w-full" />
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-[90%] mt-[188px] ml-[33px] gap-8">
              <div className="h-px w-full bg-gray-100" />
              <div className="flex flex-row justify-between w-full">
                <Button
                  color="lime_100_01"
                  size="9xl"
                  leftIcon={<Img src="images/img_arrow_left.svg" alt="Arrow left" />}
                  className="gap-1.5 min-w-[110px] !rounded-[12px]"
                >
                  Back
                </Button>
                <Button
                  color="lime_700"
                  size="9xl"
                  rightIcon={<Img src="images/img_arrow_right.svg" alt="Arrow right" />}
                  className="gap-1.5 min-w-[121px] !rounded-[12px]"
                >
                  Finish
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
