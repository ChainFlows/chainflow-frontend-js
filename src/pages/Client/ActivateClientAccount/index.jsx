import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Img } from "../../../components/Img";
import { Text } from "../../../components/Text";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { SelectBox } from "../../../components/SelectBox";
import { CheckBox } from "../../../components/CheckBox";

import Header from "../../../components/Header";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function ActivateClientAccountVerifyBusinessPage() {
  return (
    <>
      <Helmet>
        <title>dApp Hackthon-Javascript</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex flex-col items-center justify-center w-full pb-[124px] gap-[31px] bg-white-A700_01 shadow-sm">
        <Header className="flex justify-center items-center w-full p-[21px] bg-white-A700_01 shadow-xs" />
        <div className="flex flex-row justify-center w-full max-w-[1083px]">
          <div className="flex flex-col items-end justify-start w-full">
            <Text size="12xl" as="p" className="mr-[473px]">
              Activate your client account
            </Text>
            <div className="flex flex-row justify-start items-start w-full mt-6 gap-[21px]">
              <div className="flex flex-col items-center justify-center w-[30%] pl-3.5 py-3.5 bg-white-A700_01 rounded-[12px]">
                <div className="flex flex-col items-start justify-start w-full mt-[3px] gap-px">
                  <div className="flex flex-row justify-start items-center gap-4">
                    <Text
                      size="3xl"
                      as="p"
                      className="flex justify-center items-center h-[28px] w-[28px] !text-gray-700_02 border-lime-500 border-2 border-solid bg-lime-500 text-shadow-ts1 text-center rounded-[50%]"
                    >
                      1
                    </Text>
                    <Text size="4xl" as="p">
                      Verify your business
                    </Text>
                  </div>
                  <div className="flex flex-row justify-start items-center w-full gap-2.5">
                    <div className="h-[340px] w-[11%] relative">
                      <div className="h-[322px] w-px top-0 right-0 left-0 m-auto bg-gray-400_02 absolute" />
                      <div className="flex flex-col items-start justify-start w-full gap-[104px] bottom-0 right-0 left-0 m-auto absolute">
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
                          className="flex justify-center items-center h-[28px] w-[28px] ml-1 !text-gray-800 bg-gray-100 text-center rounded-[50%]"
                        >
                          3
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[87%]">
                      <Button
                        color="lime_100"
                        leftIcon={
                          <Img src="images/img_apartment.svg" alt="Apartment" />
                        }
                        className="gap-2 min-w-[254px] !rounded-[12px]"
                      >
                        Business Information
                      </Button>
                      <div className="flex flex-row justify-start items-start mt-[17px] gap-2 p-2">
                        <Img
                          src="images/img_circle_09.svg"
                          alt="image"
                          className="h-[24px] w-[24px] ml-2"
                        />
                        <Text
                          size="3xl"
                          as="p"
                          className="mt-0.5 !text-gray-700_02"
                        >
                          Ower Information
                        </Text>
                      </div>
                      <Text
                        size="4xl"
                        as="p"
                        className="mt-[61px] ml-1 !text-gray-600"
                      >
                        Connect Wallet
                      </Text>
                      <Text
                        size="4xl"
                        as="p"
                        className="mt-[108px] ml-[3px] !text-gray-600"
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
                    Business Information
                  </Text>
                </div>
                <div className="flex flex-row justify-start w-[92%] mt-3.5 ml-[3px] gap-6">
                  <div className="flex flex-col items-start justify-center w-[49%] gap-px">
                    <Text size="3xl" as="p" className="mt-0.5 !text-gray-800">
                      Company name
                    </Text>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Company name"
                      className="w-full"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-center w-[49%] gap-px">
                    <Text size="3xl" as="p" className="mt-0.5 !text-gray-800">
                      Business type
                    </Text>
                    <SelectBox
                      color="gray_200_01"
                      size="sm"
                      indicator={
                        <Img src="images/img_arrowdown.svg" alt="arrow_down" />
                      }
                      name="indivitual"
                      placeholder="Indivitual"
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
                    <div className="flex flex-row justify-center items-center p-1.5 bg-gray-200_01 rounded-[12px]">
                      <Img
                        src="images/img_image_492.svg"
                        alt="image492_one"
                        className="h-[15px]"
                      />
                      <Img
                        src="images/img_arrow_down_gray_800_01.svg"
                        alt="arrowdown_one"
                        className="h-[12px] w-[12px] ml-[7px]"
                      />
                      <div className="h-[22px] w-px ml-[15px] bg-gray-400_02" />
                      <Text size="3xl" as="p" className="ml-6">
                        (209)2423858798
                      </Text>
                      <Img
                        src="images/img_lock.svg"
                        alt="lock_one"
                        className="h-[16px] w-[16px] ml-[34px]"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-[49%] gap-[3px]">
                    <Text size="3xl" as="p" className="!text-gray-800">
                      Email
                    </Text>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="w-full"
                    />
                  </div>
                </div>
                <div className="flex flex-row justify-start w-[92%] mt-4 ml-[3px] gap-6">
                  <div className="flex flex-col items-start justify-start w-[49%] gap-[3px]">
                    <Text size="3xl" as="p" className="!text-gray-800">
                      Address
                    </Text>
                    <Input
                      name="address"
                      placeholder="Add address"
                      className="w-full"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-center w-[49%] gap-0.5">
                    <Text size="3xl" as="p" className="mt-px !text-gray-800">
                      Country/Region
                    </Text>
                    <SelectBox
                      color="gray_200_01"
                      size="sm"
                      indicator={
                        <Img src="images/img_arrowdown.svg" alt="arrow_down" />
                      }
                      name="country"
                      placeholder="Select country/region"
                      options={dropDownOptions}
                      className="w-full gap-px"
                    />
                  </div>
                </div>
                <div className="flex flex-row justify-start w-[92%] mt-4 ml-[3px] gap-6">
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
                <div className="flex flex-row justify-start items-center mt-[60px] ml-[3px] gap-3">
                  <Img
                    src="images/img_container_584.svg"
                    alt="container584"
                    className="h-[36px] w-[36px] rounded-[12px]"
                  />
                  <Text size="6xl" as="p">
                    Owner Information
                  </Text>
                </div>
                <div className="flex flex-row justify-start w-[92%] mt-6 ml-[3px] gap-6">
                  <div className="flex flex-col items-start justify-start w-[49%] gap-[3px]">
                    <Text size="3xl" as="p" className="!text-gray-800">
                      Full name
                    </Text>
                    <Input
                      type="text"
                      name="fullName"
                      placeholder="Full name"
                      className="w-full"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start w-[49%] gap-[3px]">
                    <Text size="3xl" as="p" className="!text-gray-800">
                      ID number
                    </Text>
                    <Input
                      type="number"
                      name="id_number"
                      placeholder="ID number"
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-[63%] mt-4 mr-[61px]">
              <div className="flex flex-row justify-start w-full gap-6">
                <div className="flex flex-col items-start justify-start w-[49%] gap-[3px]">
                  <Text size="3xl" as="p" className="!text-gray-800">
                    Email
                  </Text>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full"
                  />
                </div>
                <div className="flex flex-col items-start justify-start w-[49%] gap-[3px]">
                  <Text size="3xl" as="p" className="!text-gray-800">
                    Phone number
                  </Text>
                  <Input
                    type="number"
                    name="phoneNumber"
                    placeholder="Phone number"
                    className="w-full"
                  />
                </div>
              </div>
              <div className="flex flex-row justify-start w-full mt-4 gap-6">
                <div className="flex flex-col items-start justify-center w-[49%] gap-px">
                  <Text size="3xl" as="p" className="mt-0.5 !text-gray-800">
                    Nationality
                  </Text>
                  <SelectBox
                    color="gray_200_01"
                    size="sm"
                    indicator={
                      <Img src="images/img_arrowdown.svg" alt="arrow_down" />
                    }
                    name="nationality_one"
                    placeholder="Nationality"
                    options={dropDownOptions}
                    className="w-full gap-px"
                  />
                </div>
                <div className="flex flex-col items-start justify-start w-[49%] gap-[3px]">
                  <Text size="3xl" as="p" className="!text-gray-800">
                    DOB
                  </Text>
                  <SelectBox
                    color="gray_200_01"
                    size="sm"
                    indicator={
                      <Img src="images/img_calendar.svg" alt="Calendar" />
                    }
                    name="mmddyyyy"
                    placeholder="mm/dd/yyyy"
                    options={dropDownOptions}
                    className="w-full gap-px"
                  />
                </div>
              </div>
              <Text size="3xl" as="p" className="mt-[19px] !text-gray-800">
                ID image
              </Text>
              <div className="flex flex-row justify-start w-full mt-1 gap-6">
                <div className="flex flex-row justify-start items-center w-[49%] gap-2 p-4 border-gray-400_02 border border-dashed bg-white-A700_01 rounded-[12px]">
                  <Img
                    src="images/img_e_add_4.svg"
                    alt="eaddfour_one"
                    className="h-[20px] w-[20px] my-1.5"
                  />
                  <Text size="3xl" as="p" className="!text-gray-800">
                    Front
                  </Text>
                </div>
                <div className="flex flex-row justify-start items-start w-[49%] gap-2 p-4 border-gray-400_02 border border-dashed bg-white-A700_01 rounded-[12px]">
                  <Img
                    src="images/img_e_add_4.svg"
                    alt="eaddthree_one"
                    className="h-[20px] w-[20px] my-1.5"
                  />
                  <Text size="3xl" as="p" className="mt-1.5 !text-gray-800">
                    Back
                  </Text>
                </div>
              </div>
              <CheckBox
                color="lime_900_01"
                name="samebusinessadd"
                label="Same business address"
                className="mt-4 gap-1.5 text-left"
              />
            </div>
            <div className="h-px w-[93%] mt-[50px] mr-[60px] bg-gray-100" />
            <Link to="/ClientConnectWallet">
              <Button
                color="lime_700"
                size="9xl"
                rightIcon={
                  <Img src="images/img_arrow_right.svg" alt="Arrow right" />
                }
                className="mt-8 mr-[33px] gap-1.5 min-w-[153px] !rounded-[12px]"
              >
                Continue
              </Button>
            </Link>{" "}
          </div>
        </div>
      </div>
    </>
  );
}
