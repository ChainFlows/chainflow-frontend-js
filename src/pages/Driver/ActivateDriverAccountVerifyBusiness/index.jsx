import React from "react";
import { Helmet } from "react-helmet";
// import { Button, Img, Text, Input, SelectBox } from "../../components";
import { Img } from "../../../components/Img";
import { Text } from "../../../components/Text";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { SelectBox } from "../../../components/SelectBox";

import Header1 from "../../../components/Header1";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function ActivateDriverAccountVerifyBusinessPage() {
  return (
    <>
      <Helmet>
        <title>dApp Hackthon-Javascript</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-center w-full pb-[188px] gap-[31px] bg-white-A700_01 shadow-sm">
        <Header1 className="flex flex-row justify-center items-center w-full p-[21px] bg-white-A700_01 shadow-xs" />
        <div className="flex flex-row justify-center w-full max-w-[1083px]">
          <div className="flex flex-col items-start justify-start w-full">
            <Text size="12xl" as="p" className="ml-6">
              Activate your driver account
            </Text>
            <div className="flex flex-row justify-start items-start w-full mt-6 gap-[21px]">
              <div className="flex flex-col items-center justify-center w-[30%] pl-[17px] py-[17px] bg-white-A700_01 rounded-[12px]">
                <div className="flex flex-col items-start justify-start w-[98%] gap-px">
                  <div className="flex flex-row justify-start items-start gap-4">
                    <Text
                      size="3xl"
                      as="p"
                      className="flex justify-center items-center h-[28px] w-[28px] !text-gray-700_02 border-lime-500 border-2 border-solid bg-lime-500 text-shadow-ts1 text-center rounded-[50%]"
                    >
                      1
                    </Text>
                    <Text size="4xl" as="p" className="mt-0.5">
                      Driver Information
                    </Text>
                  </div>
                  <div className="flex flex-row justify-start items-center w-full gap-3">
                    <div className="h-[336px] w-[10%] relative">
                      <div className="h-[322px] w-px top-0 right-0 left-0 m-auto bg-gray-400_02 absolute" />
                      <div className="flex flex-col items-center justify-start w-full gap-12 bottom-0 right-0 left-0 m-auto absolute">
                        <Text
                          size="3xl"
                          as="p"
                          className="flex justify-center items-center h-[28px] w-[28px] !text-gray-800 bg-gray-100 text-center rounded-[50%]"
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
                    <div className="flex flex-col items-start justify-start w-[87%]">
                      <Button
                        color="lime_50"
                        size="8xl"
                        leftIcon={<Img src="images/img_circle_09_lime_900.svg" alt="Circle 09" />}
                        className="w-full gap-2 !rounded-[12px]"
                      >
                        Personal Information
                      </Button>
                      <Text size="4xl" as="p" className="mt-[93px] ml-[3px] !text-gray-600">
                        Vehicle information
                      </Text>
                      <Text size="4xl" as="p" className="mt-14 ml-[3px] !text-gray-600">
                        Connect Wallet
                      </Text>
                      <Text size="4xl" as="p" className="mt-[57px] ml-[3px] !text-gray-600">
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
                  Collecting this information to ensure the security and verify your identity
                </Button>
                <div className="flex flex-row justify-start items-start mt-[19px] ml-[3px] gap-3">
                  <Img
                    src="images/img_container_583.svg"
                    alt="container583"
                    className="h-[36px] w-[36px] rounded-[12px]"
                  />
                  <Text size="6xl" as="p" className="mt-1">
                    Personal Information
                  </Text>
                </div>
                <div className="flex flex-row justify-start w-[92%] mt-3.5 ml-[3px] gap-6">
                  <div className="flex flex-col items-start justify-start w-[49%] gap-[3px]">
                    <Text size="3xl" as="p" className="!text-gray-800">
                      Driver name
                    </Text>
                    <Input type="text" name="name" placeholder="Company name" className="w-full" />
                  </div>
                  <div className="flex flex-col items-start justify-center w-[49%] gap-px">
                    <Text size="3xl" as="p" className="mt-0.5 !text-gray-800">
                      Driver&#39;s Company
                    </Text>
                    <SelectBox
                      color="gray_200_01"
                      size="sm"
                      indicator={<Img src="images/img_arrowdown.svg" alt="arrow_down" />}
                      name="freelance"
                      placeholder="Freelance Driver"
                      options={dropDownOptions}
                      className="w-full gap-px"
                    />
                  </div>
                </div>
                <div className="flex flex-row justify-start items-center w-[92%] mt-4 ml-[3px] gap-[25px]">
                  <div className="flex flex-col items-start justify-start w-[49%] gap-[3px]">
                    <Text size="3xl" as="p" className="!text-gray-800">
                      Phone number
                    </Text>
                    <div className="flex flex-row justify-center items-center w-full p-1.5 bg-gray-200_01 rounded-[12px]">
                      <div className="flex flex-row justify-start items-center w-[14%] gap-[7px]">
                        <Img src="images/img_image_492.svg" alt="image492_one" className="h-[15px]" />
                        <Img
                          src="images/img_arrow_down_gray_800_01.svg"
                          alt="arrowdown_one"
                          className="h-[12px] w-[12px]"
                        />
                      </div>
                      <div className="h-[22px] w-px ml-[15px] bg-gray-400_02" />
                      <Text size="3xl" as="p" className="ml-6">
                        (209)2423858798
                      </Text>
                      <Img src="images/img_lock.svg" alt="lock_one" className="h-[16px] w-[16px] ml-[34px]" />
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-[49%] gap-[3px]">
                    <Text size="3xl" as="p" className="!text-gray-800">
                      Email
                    </Text>
                    <Input type="email" name="email" placeholder="Email" className="w-full" />
                  </div>
                </div>
                <Text size="3xl" as="p" className="mt-[17px] ml-[3px] !text-gray-800">
                  Address
                </Text>
                <Input name="address" placeholder="Add address" className="w-[44%] mt-[3px] ml-[3px]" />
                <Text size="3xl" as="p" className="mt-5 ml-[3px]">
                  Driver trainings
                </Text>
                <div className="flex flex-row justify-start items-center mt-[11px]">
                  <Button
                    color="lime_500"
                    size="md"
                    rightIcon={<Img src="images/img_e_remove.svg" alt="E remove" />}
                    className="gap-1 min-w-[173px] !rounded-[12px]"
                  >
                    Defensive Driving
                  </Button>
                  <Button
                    color="lime_500"
                    size="md"
                    rightIcon={<Img src="images/img_e_remove.svg" alt="E remove" />}
                    className="ml-[11px] gap-[3px] min-w-[268px] !rounded-[12px]"
                  >
                    Carrying Hazardous Materials
                  </Button>
                  <Button
                    color="lime_500"
                    size="md"
                    rightIcon={<Img src="images/img_e_remove.svg" alt="E remove" />}
                    className="ml-[11px] gap-1 min-w-[164px] !rounded-[12px]"
                  >
                    Certification two
                  </Button>
                  <Img src="images/img_library_add_1.svg" alt="libraryaddone" className="h-[24px] w-[24px] ml-[21px]" />
                </div>
                <Button
                  size="md"
                  leftIcon={<Img src="images/img_search.svg" alt="Search" />}
                  className="mt-2.5 ml-[3px] gap-1.5 !text-gray-400_02 border-gray-500_02 border border-solid min-w-[276px] !rounded-[12px]"
                >
                  Search available Certifi...
                </Button>
              </div>
            </div>
            <div className="h-px w-[93%] mt-[306px] ml-6 bg-gray-100" />
            <Button
              color="lime_700"
              size="9xl"
              rightIcon={<Img src="images/img_arrow_right.svg" alt="Arrow right" />}
              className="mt-8 ml-[895px] gap-1.5 min-w-[153px] !rounded-[12px]"
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
