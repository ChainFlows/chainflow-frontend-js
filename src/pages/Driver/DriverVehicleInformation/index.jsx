import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Img } from "../../../components/Img";
import { Text } from "../../../components/Text";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { SelectBox } from "../../../components/SelectBox";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function ActivateAccountVerifyBusinessPage() {
  return (
    <>
      <Helmet>
        <title>dApp Hackthon-Javascript</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full pb-[111px] gap-[31px] bg-white-A700_01 shadow-sm">
        <header className="flex flex-row justify-center items-center w-full pt-[22px] px-[22px] bg-white-A700_01 shadow-xs">
          <div className="flex flex-row justify-between items-center w-full mx-auto max-w-[1371px]">
            <div className="flex flex-row justify-start items-start gap-3">
              <Img
                src="images/img_image_493.svg"
                alt="image493_one"
                className="h-[33px]"
              />
              <Text size="6xl" as="p" className="mt-[3px]">
                ChainFlow
              </Text>
            </div>
            <div className="flex flex-row justify-between items-start w-[31%] mt-1">
              <div className="flex flex-col items-start justify-start mt-10 gap-[17px]">
                <Text size="3xl" as="p" className="!text-gray-800">
                  Company name
                </Text>
                <Text
                  size="3xl"
                  as="p"
                  className="flex justify-center items-center w-[327px] h-px mb-[51px] pt-[7px] pl-3 pr-[35px] !text-gray-400_02 bg-gray-200_01"
                >
                  Company name
                </Text>
              </div>
              <Img
                src="images/img_help_2.svg"
                alt="helptwo_one"
                className="h-[24px] w-[24px]"
              />
            </div>
          </div>
        </header>
        <div className="flex flex-row justify-center w-full max-w-[1138px]">
          <div className="flex flex-col items-center justify-start w-full">
            <Text size="12xl" as="p">
              Activate your driver account
            </Text>
            <div className="flex flex-row justify-start items-start w-[96%] mt-6 gap-[21px]">
              <div className="flex flex-col items-center justify-center w-[30%] p-[17px] bg-white-A700_01 rounded-[12px]">
                <div className="flex flex-col items-start justify-start w-[92%]">
                  <div className="flex flex-row justify-start items-start gap-[15px] z-[1]">
                    <Button
                      color="lime_500"
                      size="sm"
                      shape="circle"
                      className="w-[28px]"
                    >
                      <Img src="images/img_container_598.svg" />
                    </Button>
                    <Text size="4xl" as="p" className="mt-[3px]">
                      Driver Information
                    </Text>
                  </div>
                  <div className="flex flex-row justify-start items-center w-full mt-[-1px] gap-3">
                    <div className="h-[338px] w-[11%] relative">
                      <div className="h-[322px] w-px top-[1%] right-0 left-0 m-auto bg-gray-400_02 absolute" />
                      <div className="flex flex-col items-end justify-center w-full h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                        <div className="h-[87px] w-[2px] mr-3 bg-lime-500" />
                        <div className="flex flex-col items-center justify-start w-full gap-[83px]">
                          <Text
                            size="3xl"
                            as="p"
                            className="flex justify-center items-center h-[28px] w-[28px] !text-gray-700_02 border-lime-500 border-2 border-solid bg-lime-500 text-shadow-ts1 text-center rounded-[50%]"
                          >
                            2
                          </Text>
                          <Text
                            size="3xl"
                            as="p"
                            className="flex justify-center items-center h-[28px] w-[28px] !text-gray-800 bg-gray-100 text-center rounded-[50%]"
                          >
                            3
                          </Text>
                          <Text
                            size="3xl"
                            as="p"
                            className="flex justify-center items-center h-[28px] w-[28px] pl-2.5 pr-[5px] py-[5px] !text-gray-800 bg-gray-100 rounded-[50%]"
                          >
                            4
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[85%] gap-[90px]">
                      <Text size="5xl" as="p">
                        Vehicle Infomation
                      </Text>
                      <Text size="4xl" as="p" className="ml-2.5 !text-gray-600">
                        Connect Wallet
                      </Text>
                      <Text
                        size="4xl"
                        as="p"
                        className="ml-[3px] !text-gray-600"
                      >
                        Complete
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-[69%]">
                <Button
                  color="gray_100_02"
                  size="17xl"
                  leftIcon={<Img src="images/img_alarm_2.svg" alt="Alarm 2" />}
                  className="w-full gap-4 rounded-[24px]"
                >
                  Collecting this information to ensure the security and verify
                  your identity
                </Button>
                <div className="flex flex-row justify-start items-start mt-[19px] ml-[3px] gap-3">
                  <Img
                    src="images/img_container_583.svg"
                    alt="container583"
                    className="h-[36px] w-[36px] rounded-[12px]"
                  />
                  <Text size="6xl" as="p" className="mt-1">
                    Vehicle Information
                  </Text>
                </div>
                <div className="flex flex-row justify-start w-[92%] mt-3.5 ml-[3px] gap-6">
                  <div className="flex flex-col items-start justify-start w-[49%] gap-[3px]">
                    <Text size="3xl" as="p" className="!text-gray-800">
                      vehicle Make
                    </Text>
                    <SelectBox
                      color="gray_200_01"
                      size="sm"
                      indicator={
                        <Img src="images/img_arrowdown.svg" alt="arrow_down" />
                      }
                      name="scania"
                      placeholder="Scania"
                      options={dropDownOptions}
                      className="w-full gap-px"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start w-[49%] gap-[3px]">
                    <Text size="3xl" as="p" className="!text-gray-800">
                      vehicle Model
                    </Text>
                    <SelectBox
                      color="gray_200_01"
                      size="sm"
                      indicator={
                        <Img src="images/img_arrowdown.svg" alt="arrow_down" />
                      }
                      name="cx5"
                      placeholder="cx5"
                      options={dropDownOptions}
                      className="w-full gap-px"
                    />
                  </div>
                </div>
                <div className="flex flex-row justify-start w-[92%] mt-[7px] ml-[3px] gap-6">
                  <div className="flex flex-col items-start justify-center w-[49%] gap-px">
                    <Text size="3xl" as="p" className="mt-0.5 !text-gray-800">
                      vehicleType
                    </Text>
                    <SelectBox
                      color="gray_200_01"
                      size="sm"
                      indicator={
                        <Img src="images/img_arrowdown.svg" alt="arrow_down" />
                      }
                      name="boxtruck"
                      placeholder="Box Truck"
                      options={dropDownOptions}
                      className="w-full gap-px"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-center w-[49%] gap-px">
                    <Text size="3xl" as="p" className="mt-0.5 !text-gray-800">
                      license expiry date
                    </Text>
                    <div className="flex flex-row justify-between items-center w-full p-[7px] bg-gray-200_01 rounded-[12px]">
                      <Text
                        size="3xl"
                        as="p"
                        className="mt-0.5 ml-1 !text-gray-400_02"
                      >
                        mm/dd/yyyy
                      </Text>
                      <Img
                        src="images/img_calendar.svg"
                        alt="calendar_one"
                        className="h-[16px] w-[16px] mr-[3px]"
                      />
                    </div>
                  </div>
                </div>
                <Text
                  size="3xl"
                  as="p"
                  className="mt-[23px] ml-[3px] !text-gray-800"
                >
                  License Number
                </Text>
                <Input
                  type="number"
                  name="textfield"
                  placeholder="15968191"
                  className="w-[44%] mt-[3px] ml-[3px]"
                />
                <div className="flex flex-row justify-start w-[92%] mt-[17px] ml-[3px] gap-6">
                  <div className="flex flex-col items-start justify-start w-[49%] gap-[3px]">
                    <Text size="3xl" as="p" className="!text-gray-800">
                      Domain
                    </Text>
                    <SelectBox
                      color="gray_200_01"
                      size="sm"
                      indicator={
                        <Img src="images/img_arrowdown.svg" alt="arrow_down" />
                      }
                      name="client"
                      placeholder="Client"
                      options={dropDownOptions}
                      className="w-full gap-px"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-center w-[49%] gap-px">
                    <Text size="3xl" as="p" className="mt-0.5 !text-gray-800">
                      City
                    </Text>
                    <SelectBox
                      color="gray_200_01"
                      size="sm"
                      indicator={
                        <Img src="images/img_arrowdown.svg" alt="arrow_down" />
                      }
                      name="city"
                      placeholder="Select city"
                      options={dropDownOptions}
                      className="w-full gap-px"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-start items-center w-[38%] mt-[60px] gap-3">
              <Img
                src="images/img_container_584.svg"
                alt="container584"
                className="h-[36px] w-[36px] rounded-[12px]"
              />
              <Text size="6xl" as="p">
                Vehicle maintainance record
              </Text>
            </div>
            <div className="h-px w-[88%] mt-[326px] bg-gray-100" />
            <div className="flex flex-row justify-between w-[96%] mt-8">
              <Button
                color="lime_100_01"
                size="9xl"
                leftIcon={
                  <Img src="images/img_arrow_left.svg" alt="Arrow left" />
                }
                className="gap-1.5 min-w-[110px] !rounded-[12px]"
              >
                Back
              </Button>
              <Link to="/DriverConnectWallet">
                <Button
                  color="lime_700"
                  size="9xl"
                  rightIcon={
                    <Img src="images/img_arrow_right.svg" alt="Arrow right" />
                  }
                  className="gap-1.5 min-w-[153px] !rounded-[12px]"
                >
                  Continue
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
