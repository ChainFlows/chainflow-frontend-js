import React from "react";
import { Helmet } from "react-helmet";
import { Img } from "../../../components/Img";
import { Text } from "../../../components/Text";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";

import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";

export default function DriversfindjobOnePage() {
  return (
    <>
      <Helmet>
        <title>dApp Hackthon-Javascript</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-row justify-start items-start w-full gap-[29px] bg-gray-200 shadow-sm">
        <Sidebar
          width="90px !important"
          className="h-screen top-0 bg-gray-400_70 shadow-xs !sticky overflow-auto rounded-[12px]"
        >
          <Menu
            menuItemStyles={{
              button: {
                padding: 0,
                height: "49px !important",
                paddingLeft: "3px",
                paddingRight: "3px",
              },
            }}
            className="flex flex-col items-center justify-start w-full mt-[91px] mb-[569px] gap-[42.00px] px-[19px]"
          >
            <MenuItem>
              <Img src="images/img_image_243.png" alt="image243_one" className="w-[49px] object-cover rounded-[12px]" />
            </MenuItem>
            <MenuItem>
              <Img src="images/img_image_240.png" alt="image240_one" className="w-[60%] object-cover rounded-[12px]" />
            </MenuItem>
            <MenuItem>
              <Img src="images/img_image_235.png" alt="image235_one" className="w-[70%] object-cover rounded-[12px]" />
            </MenuItem>
            <MenuItem>
              <Img src="images/img_image_252.png" alt="image252_one" className="w-[28px] object-cover rounded-[12px]" />
            </MenuItem>
          </Menu>
        </Sidebar>
        <div className="flex flex-row justify-start w-[56%] mt-[47px]">
          <div className="flex flex-col items-start justify-start w-full">
            <Text size="7xl" as="p" className="ml-[3px]">
              Find available jobs
            </Text>
            <div className="flex flex-row justify-start items-center mt-[52px] gap-[13px]">
              <Input
                color="white_A700_01"
                size="xl"
                name="search"
                placeholder="Search job categories"
                className="w-[77%] border-gray-500_03 border border-solid rounded-[18px]"
              />
              <Button color="blue_gray_900_02" size="8xl" className="min-w-[104px] rounded-[20px]">
                Search
              </Button>
            </div>
            <Text size="3xl" as="p" className="mt-[50px] ml-0.5">
              Job categories
            </Text>
            <div className="flex flex-row justify-between items-center w-[61%] mt-[15px] ml-[3px]">
              <div className="flex flex-row justify-between items-center w-auto">
                <Text size="2xl" as="p">
                  Urgent
                </Text>
                <Text size="2xl" as="p">
                  Fragile
                </Text>
                <Button color="blue_gray_900_02" size="lg" className="min-w-[127px] !rounded-[9px]">
                  Long distance
                </Button>
              </div>
              <Text size="2xl" as="p">
                Heavy Goods
              </Text>
            </div>
            <Text size="3xl" as="p" className="mt-10 ml-[3px]">
              Requirements
            </Text>
            <div className="flex flex-row justify-between items-start w-[56%] mt-[30px] ml-[3px]">
              <Text size="2xl" as="p" className="mt-[9px]">
                Entry
              </Text>
              <Button color="blue_gray_900_02" size="lg" className="min-w-[113px] !rounded-[9px]">
                Experienced
              </Button>
              <Text size="2xl" as="p" className="mt-[7px]">
                Senior Level
              </Text>
            </div>
            <div className="flex flex-row justify-between items-start w-full mt-[34px] ml-[7px]">
              <Text as="p" className="mt-[26px]">
                Recommended for you
              </Text>
              <Button size="md" className="mb-[11px] !text-gray-400_02 !shadow-xl min-w-[117px] rounded-[14px]">
                View all Jobs
              </Button>
            </div>
            <div className="flex flex-row w-[99%] mt-[23px] ml-[3px] gap-3.5">
              <div className="flex flex-col items-start justify-start w-[24%]">
                <Img src="images/img_image_244.png" alt="route" className="w-full object-cover rounded-[12px]" />
                <Text size="2xl" as="p" className="mt-[18px] ml-1">
                  Route Optimization
                </Text>
                <Text as="p" className="mt-[9px] ml-0.5">
                  John Smith
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start w-[24%]">
                <Img src="images/img_image_237.png" alt="image237_one" className="w-full object-cover rounded-[12px]" />
                <Text size="3xl" as="p" className="mt-[18px] ml-0.5">
                  Logistics
                </Text>
                <Text as="p" className="mt-1.5 ml-0.5">
                  Warehouse Supervisor
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start w-[24%] gap-[13px]">
                <Img src="images/img_image_246.png" alt="image246_one" className="w-full object-cover rounded-[12px]" />
                <Text size="2xl" as="p" className="ml-[3px]">
                  Supply Chain Basics
                </Text>
                <Text as="p" className="ml-[3px]">
                  Logistics Coordinator
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start w-[25%] gap-3">
                <Img src="images/img_image_242.png" alt="image242_one" className="w-full object-cover rounded-[12px]" />
                <Text size="2xl" as="p" className="ml-1">
                  Delivery Driver Job
                </Text>
                <Text as="p" className="ml-1">
                  Supply Chain Careers
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
