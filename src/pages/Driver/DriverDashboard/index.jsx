import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Img } from "../../../components/Img";
import { Text } from "../../../components/Text";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";

export default function DriverDashboardOnePage() {
  return (
    <>
      <Helmet>
        <title>dApp Hackthon-Javascript</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex flex-row justify-start w-full bg-gray-200 shadow-sm">
        <div className="flex flex-row justify-start items-start w-full gap-7 mx-auto max-w-[1260px]">
          <div className="flex flex-col items-start justify-start w-[10%] gap-10 p-10 bg-gray-400_70 shadow-xs rounded-[12px]">
            <Img
              src="images/img_image_391.png"
              alt="image391_one"
              className="w-[95%] mt-[59px] object-cover rounded-[12px]"
            />
            <Img
              src="images/img_image_393.png"
              alt="image393_one"
              className="w-[32px] ml-px object-cover rounded-[12px]"
            />
            <Img
              src="images/img_image_415.png"
              alt="image415_one"
              className="w-[32px] ml-px object-cover rounded-[12px]"
            />
            <Img
              src="images/img_image_400.png"
              alt="image400_one"
              className="w-[27px] mb-[647px] ml-px object-cover rounded-[12px]"
            />
          </div>
          <div className="flex flex-col items-center justify-start w-[89%] mt-[23px]">
            <div className="h-[361px] w-full z-[1] relative">
              <div className="flex flex-col items-end justify-center w-full h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <header className="flex flex-col items-center justify-center w-full gap-4 z-[1]">
                      <div className="flex flex-row justify-between items-center w-[97%]">
                        <Text size="7xl" as="p">
                          Driver Overview
                        </Text>
                        <div className="flex flex-row justify-center items-center w-[67%]">
                          <Input
                            color="white_A700_01"
                            size="lg"
                            name="search"
                            placeholder="Search for Quotations"
                            className="w-[36%] border-gray-500_01 border border-solid rounded-[20px]"
                          />
                          <Button
                            color="blue_gray_900_02"
                            size="8xl"
                            className="ml-[9px] min-w-[264px] rounded-[20px]"
                          >
                            Create MaintainanceRecord
                          </Button>
                          <Img
                            src="images/img_image_399.png"
                            alt="image399_one"
                            className="w-[6%] ml-2 object-cover rounded-[12px]"
                          />
                          <Img
                            src="images/img_image_386.png"
                            alt="image386_one"
                            className="w-[36px] ml-[27px] object-cover rounded-[12px]"
                          />
                          <Img
                            src="images/img_image_189.png"
                            alt="image409_one"
                            className="h-[52px] w-[52px] ml-[31px] rounded-[50%]"
                          />
                        </div>
                      </div>
                      <div className="flex flex-row justify-center w-full">
                        <div className="flex flex-row justify-between items-start w-full">
                          <div className="flex flex-row justify-start w-[38%] p-[22px] bg-white-A700_e0 shadow-xs rounded-[19px]">
                            <div className="flex flex-col items-start justify-start w-[76%] mb-[21px] ml-[3px] gap-[7px]">
                              <Text
                                size="2xl"
                                as="p"
                                className="ml-[71px] !text-green-A700_8f opacity-0.59"
                              >
                                Current Job
                              </Text>
                              <div className="flex flex-row justify-between items-center w-full">
                                <Img
                                  src="images/img_truck_1.svg"
                                  alt="truckone_one"
                                  className="h-[32px] w-[32px]"
                                />
                                <Text size="6xl" as="p">
                                  Job Name: 3600
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start w-[58%] mt-6 gap-[29px]">
                            <div className="flex flex-row justify-start items-center p-[5px] bg-white-A700_01 shadow-xs rounded-[25px]">
                              <Button
                                color="blue_gray_900_0c"
                                size="6xl"
                                className="ml-px min-w-[200px] rounded-[20px]"
                              >
                                Completed Jobs
                              </Button>
                              <Text as="p" className="ml-[88px]">
                                On Joblist
                              </Text>
                              <Text as="p" className="ml-[105px]">
                                Maintanance records
                              </Text>
                            </div>
                            <Img
                              src="images/img_image_384.png"
                              alt="image384_one"
                              className="w-[14%] ml-1.5 object-cover rounded-[12px]"
                            />
                          </div>
                        </div>
                      </div>
                    </header>
                    <div className="flex flex-row justify-start w-[18%] mt-[-43px] ml-[222px] p-[17px] bg-blue_gray-900_0c shadow-xs rounded-[19px]">
                      <div className="flex flex-col items-end justify-start w-[80%] my-[5px]">
                        <Text as="p" className="mr-[22px] z-[1]">
                          Expenses
                        </Text>
                        <div className="flex flex-row justify-start items-start w-full mt-[-4px] gap-[13px]">
                          <Img
                            src="images/img_image_417.png"
                            alt="image417_one"
                            className="h-[23px] w-[23px] mb-2.5 rounded-[50%]"
                          />
                          <Text
                            size="4xl"
                            as="p"
                            className="mt-[13px] text-center"
                          >
                            $20,850
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-start w-[18%] mt-[-89px] p-[17px] bg-blue_gray-900_0c shadow-xs rounded-[19px]">
                    <div className="flex flex-row justify-start items-start w-[80%] mt-2.5 mb-[5px] gap-[11px]">
                      <Img
                        src="images/img_image_407.png"
                        alt="image407_one"
                        className="w-[20%] mt-0.5 object-cover rounded-[12px]"
                      />
                      <div className="flex flex-col items-start justify-start w-[73%] gap-1">
                        <Text as="p" className="ml-[5px]">
                          Balance
                        </Text>
                        <Text size="4xl" as="p" className="text-center">
                          $20,850
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-center w-[60%] mt-[-41px] mr-[5px] p-2 bg-white-A700_01 shadow-xs rounded-[12px]">
                  <div className="flex flex-row justify-start items-center w-[94%] gap-[19px]">
                    <Img
                      src="images/img_image_410.png"
                      alt="image410_one"
                      className="w-[84px] object-cover rounded-[12px]"
                    />
                    <div className="flex flex-col items-start justify-start w-[83%]">
                      <div className="flex flex-row justify-start items-end">
                        <Text as="p" className="mb-[15px]">
                          Product Name: 3600
                        </Text>
                        <Text
                          size="2xl"
                          as="p"
                          className="mt-[13px] mb-px ml-3.5"
                        >
                          Price
                        </Text>
                        <Text size="2xl" as="p" className="ml-12">
                          Quantity
                        </Text>
                        <Text size="2xl" as="p" className="mb-px ml-[19px]">
                          Total Sales
                        </Text>
                        <Text size="2xl" as="p" className="mb-px ml-[34px]">
                          Tota
                        </Text>
                      </div>
                      <Text size="md" as="p" className="mt-[-4px]">
                        Learn more about Product
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-[45%] bottom-[36%] right-[3%] m-auto absolute">
                <div className="flex flex-row justify-start items-end">
                  <Text as="p" className="mb-3.5">
                    Product Name: 3600
                  </Text>
                  <Text size="2xl" as="p" className="mt-[13px] mb-px ml-3.5">
                    Price
                  </Text>
                  <Text size="2xl" as="p" className="ml-12">
                    Quantity
                  </Text>
                  <Text size="2xl" as="p" className="mb-px ml-[19px]">
                    Total Sales
                  </Text>
                  <Text size="2xl" as="p" className="mb-px ml-[34px]">
                    Tota
                  </Text>
                </div>
                <Text size="md" as="p" className="mt-[-4px]">
                  Learn more about Product
                </Text>
              </div>
            </div>
            <div className="flex flex-row justify-start items-start w-[98%] mt-[-1px] gap-[7px]">
              <div className="flex flex-col items-start justify-start w-[39%] mt-[29px]">
                <div className="flex flex-row justify-between items-start w-full">
                  <Text size="4xl" as="p" className="mt-[3px]">
                    Productivity view
                  </Text>
                  <div className="flex flex-row justify-start items-center w-[30%] gap-[18px] p-[5px] border-gray-500_03 border border-solid bg-white-A700_01 shadow-xs rounded-[14px]">
                    <Text as="p" className="ml-[7px] !text-gray-400_02">
                      6 Months
                    </Text>
                    <Img
                      src="images/img_image_408.png"
                      alt="image408_one"
                      className="h-[17px] w-[18px] mr-1.5 rounded-[50%]"
                    />
                  </div>
                </div>
                <Img
                  src="images/img_graph.svg"
                  alt="graph_one"
                  className="h-[196px] mt-[35px] ml-[9px]"
                />
                <div className="flex flex-row justify-start items-center mt-[13px] ml-2">
                  <Text size="2xl" as="p">
                    Jul
                  </Text>
                  <Text as="p" className="ml-[42px]">
                    Aug
                  </Text>
                  <Text as="p" className="ml-[33px]">
                    Sept
                  </Text>
                  <Text as="p" className="ml-[30px]">
                    Octo
                  </Text>
                  <Text as="p" className="ml-[29px]">
                    Nov
                  </Text>
                  <Text as="p" className="ml-[35px]">
                    Dec
                  </Text>
                </div>
                <Text size="3xl" as="p" className="mt-[126px] ml-0.5">
                  Select Quotation
                </Text>
                <Text as="p" className="mt-[33px] ml-0.5">
                  Choosing the right supplier is crucial for business success
                </Text>
                <Link to="/Driverfindjob">
                  <Button
                    size="10xl"
                    className="mt-[29px] !text-blue_gray-900_02 border-gray-600_03 border border-solid min-w-[207px] !rounded-[12px]"
                  >
                    Source Jobs
                  </Button>
                </Link>
              </div>
              <div className="flex flex-col w-[61%]">
                <div className="flex flex-row justify-center w-full p-2 bg-white-A700_01 shadow-xs rounded-[12px]">
                  <div className="flex flex-row justify-start items-center w-[95%] gap-[18px]">
                    <Img
                      src="images/img_image_390.png"
                      alt="product"
                      className="w-[86px] object-cover rounded-[12px]"
                    />
                    <div className="flex flex-col items-start justify-start w-[84%]">
                      <div className="flex flex-row justify-start items-end">
                        <Text as="p" className="mb-[15px]">
                          Product Name: 3600
                        </Text>
                        <Text size="2xl" as="p" className="mt-3.5 ml-[13px]">
                          Transpare
                        </Text>
                        <Text size="2xl" as="p" className="mb-px ml-[7px]">
                          Real-time
                        </Text>
                        <Text size="2xl" as="p" className="mb-px ml-[9px]">
                          Efficiency
                        </Text>
                        <Text size="2xl" as="p" className="mb-px ml-[33px]">
                          Supply
                        </Text>
                      </div>
                      <Text size="md" as="p" className="mt-[-4px]">
                        Learn more about Product
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-center w-full p-2 bg-white-A700_01 shadow-xs rounded-[12px]">
                  <div className="flex flex-row justify-start items-center w-[95%] gap-[17px]">
                    <Img
                      src="images/img_image_389.png"
                      alt="image389_one"
                      className="w-[86px] object-cover rounded-[12px]"
                    />
                    <div className="flex flex-col items-start justify-start w-[84%]">
                      <div className="flex flex-row justify-start items-end">
                        <Text as="p" className="mb-[15px]">
                          Product - 3600
                        </Text>
                        <Text size="2xl" as="p" className="mt-3.5 ml-14">
                          Transpare
                        </Text>
                        <Text size="2xl" as="p" className="mb-px ml-[7px]">
                          Real-time
                        </Text>
                        <Text size="2xl" as="p" className="mb-px ml-[9px]">
                          Efficiency
                        </Text>
                        <Text size="2xl" as="p" className="mb-px ml-[33px]">
                          Supply
                        </Text>
                      </div>
                      <Text size="lg" as="p" className="mt-[-4px]">
                        link.product-360o..link
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-center w-full p-[7px] bg-white-A700_01 shadow-xs rounded-[12px]">
                  <div className="flex flex-row justify-start items-center w-[95%] gap-[19px]">
                    <Img
                      src="images/img_image_381.png"
                      alt="image381_one"
                      className="w-[84px] object-cover rounded-[12px]"
                    />
                    <div className="flex flex-col items-start justify-start w-[84%]">
                      <div className="flex flex-row justify-start items-end">
                        <Text as="p" className="mb-[15px]">
                          Product - 3600
                        </Text>
                        <Text size="2xl" as="p" className="mt-3.5 ml-14">
                          Transpare
                        </Text>
                        <Text size="2xl" as="p" className="mb-px ml-[7px]">
                          Real-time
                        </Text>
                        <Text size="2xl" as="p" className="mb-px ml-[9px]">
                          Efficiency
                        </Text>
                        <Text size="2xl" as="p" className="mb-px ml-[33px]">
                          Supply
                        </Text>
                      </div>
                      <Text size="lg" as="p" className="mt-[-4px]">
                        link.product-360o..link
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-end w-full p-[9px] bg-gray-200_02 shadow-xs rounded-md">
                  <div className="flex flex-row justify-start items-center w-[95%] mr-[13px] gap-[18px]">
                    <Img
                      src="images/img_image_412.png"
                      alt="image412_one"
                      className="w-[14%] object-cover rounded-[12px]"
                    />
                    <div className="flex flex-col items-start justify-start w-[84%]">
                      <div className="flex flex-row justify-start items-end">
                        <Text as="p" className="mb-[15px]">
                          Product - 3600
                        </Text>
                        <Text size="2xl" as="p" className="mt-3.5 ml-14">
                          Transpare
                        </Text>
                        <Text size="2xl" as="p" className="mb-px ml-[7px]">
                          Real-time
                        </Text>
                        <Text size="2xl" as="p" className="mb-px ml-[9px]">
                          Efficiency
                        </Text>
                        <Text size="2xl" as="p" className="mb-px ml-[33px]">
                          Supply
                        </Text>
                      </div>
                      <Text size="lg" as="p" className="mt-[-4px]">
                        link.product-360o..link
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
