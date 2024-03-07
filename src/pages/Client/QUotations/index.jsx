import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../../assets/images";
import { Text } from "../../../components/Text";
import { Input } from "../../../components/Input";
import { Img } from "../../../components/Img";
import { SelectBox } from "../../../components/SelectBox";
import Footer from "../../../components/Footer";
import { ReactTable } from "../../../components/ReactTable";
import { createColumnHelper } from "@tanstack/react-table";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const table7Data = [
  {
    productone: "Supplier Alpha",
    statue: "Active",
    price: "Price: 9999al",
    unitssold: "Units Sold: 4189",
    expenses: "Net Income",
  },
  {
    productone: "Supplier Chettah",
    statue: "Active",
    price: "Price: 9999al",
    unitssold: "Units Sold: 4189",
    expenses: "Net Income",
  },
  {
    productone: "Supplier Rhino",
    statue: "Inactive",
    price: "Price: 9999al",
    unitssold: "Units Sold: 4189",
    expenses: "Net Income",
  },
  {
    productone: "Supplierr Simba",
    statue: "Active",
    price: "Price: 9999al",
    unitssold: "Units Sold: 4189",
    expenses: "Net Income",
  },
];

export default function QUotationsPage() {
  const [searchBarValue67, setSearchBarValue67] = React.useState("");
  const table7Columns = React.useMemo(() => {
    const table7ColumnHelper = createColumnHelper();
    return [
      table7ColumnHelper.accessor("productone", {
        cell: (info) => (
          <div className="flex flex-row justify-start">
            <div className="flex flex-row justify-start items-center w-[57%] mt-[3px] ml-[22px] gap-[18px]">
              <div className="h-[85px] w-[85px] bg-blue_gray-100 rounded-[12px]" />
              <div className="flex flex-col items-start justify-start w-[58%] gap-[9px]">
                <Text as="p">{info?.getValue?.()}</Text>
                <Text size="lg" as="p">
                  Details of product 3600
                </Text>
              </div>
            </div>
          </div>
        ),
        header: (info) => (
          <Text as="p" className="pl-8 py-[23px]">
            Product
          </Text>
        ),
        meta: { width: "447px" },
      }),
      table7ColumnHelper.accessor("statue", {
        cell: (info) => (
          <Text as="p" className="!text-gray-500_02">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Text as="p" className="py-[23px]">
            Statue
          </Text>
        ),
        meta: { width: "208px" },
      }),
      table7ColumnHelper.accessor("price", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Text as="p" className="py-[23px]">
            Price
          </Text>
        ),
        meta: { width: "256px" },
      }),
      table7ColumnHelper.accessor("unitssold", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Text as="p" className="pt-[25px] pb-[21px]">
            Units Sold
          </Text>
        ),
        meta: { width: "326px" },
      }),
      table7ColumnHelper.accessor("expenses", {
        cell: (info) => (
          <Text size="2xl" as="p">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Text as="p" className="py-[23px]">
            Expenses
          </Text>
        ),
        meta: { width: "146px" },
      }),
    ];
  }, []);

  return (
    <>
      <Helmet>
        <title>dApp Hackthon-Javascript</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full pt-7 gap-[63px] bg-gray-200 shadow-sm">
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-col items-end justify-start w-full gap-[35px]">
            <div className="flex flex-row justify-between items-center w-[13%] mr-7">
              <div className="h-[38px] w-[37px] bg-blue_gray-100 rounded-[12px]" />
              <div className="h-[34px] w-[33px] bg-blue_gray-100 rounded-[12px]" />
              <div className="h-[53px] w-[53px] bg-blue_gray-100 rounded-[26px]" />
            </div>
            <div className="flex flex-col items-start justify-start w-full">
              <div className="h-[284px] w-full bg-blue_gray-100 rounded-[12px]" />
              <Text size="13xl" as="p" className="mt-[83px] ml-9">
                Product 3600
              </Text>
              <div className="flex flex-row justify-center w-full mt-[47px] p-7 bg-gray-200 shadow-xs rounded-[12px]">
                <div className="flex flex-row justify-center w-full my-3 max-w-[1383px]">
                  <div className="flex flex-col items-center justify-start w-full gap-[21px]">
                    <div className="flex flex-row justify-between items-center w-full">
                      <Input
                        color="white_A700_01"
                        size="lg"
                        name="search"
                        placeholder="Search for products"
                        value={searchBarValue67}
                        onChange={(e) => setSearchBarValue67(e)}
                        suffix={
                          searchBarValue67?.length > 0 ? (
                            <CloseSVG
                              onClick={() => setSearchBarValue67("")}
                              height={24}
                              width={24}
                              fillColor="#18204aff"
                            />
                          ) : (
                            <Img
                              src="images/img_youtube_searched_for_1.svg"
                              alt="Youtube searched for 1"
                              className="cursor-pointer"
                            />
                          )
                        }
                        className="w-[30%] gap-[35px] border-gray-500_03 border border-solid rounded-[20px]"
                      />
                      <div className="flex flex-row justify-between items-center w-[59%]">
                        <div className="flex flex-row justify-start items-center w-[89%] gap-4">
                          <SelectBox
                            indicator={<Img src="images/img_arrowdown_gray_500_02.svg" alt="arrow_down" />}
                            name="product"
                            placeholder="Product"
                            options={dropDownOptions}
                            className="w-[27%] gap-px border-blue_gray-900_56 border border-solid rounded-[19px]"
                          />
                          <SelectBox
                            indicator={<Img src="images/img_arrowdown_gray_500_02.svg" alt="arrow_down" />}
                            name="price"
                            placeholder="Price"
                            options={dropDownOptions}
                            className="w-[27%] gap-px border-blue_gray-900_56 border border-solid rounded-[19px]"
                          />
                          <div className="flex flex-row justify-between items-center w-[43%] p-[17px] bg-gray-200_02 shadow-xs rounded-[26px]">
                            <Text size="2xl" as="p" className="mt-px ml-4">
                              Most popular
                            </Text>
                            <Text as="p" className="mr-1">
                              Higher priced
                            </Text>
                          </div>
                        </div>
                        <Img src="images/img_grid_view_1.svg" alt="gridviewone_one" className="h-[34px] w-[34px]" />
                      </div>
                    </div>
                    <ReactTable
                      size="xs"
                      variant="simple"
                      bodyProps={{ className: "" }}
                      headerProps={{ className: "bg-gray-200_02 shadow-xs rounded-tl-[30px] rounded-tr-[30px]" }}
                      rowDataProps={{ className: "bg-white-A700_01 shadow-xs rounded-[12px]" }}
                      className="w-[1383px]"
                      columns={table7Columns}
                      data={table7Data}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer className="flex justify-center items-center w-full pl-14 pr-[59px] py-[59px] bg-gray-400 shadow-xs rounded-[12px]" />
      </div>
    </>
  );
}
