import React, { useState, useEffect, FC } from "react";
import Link from "next/link";
import moment from "moment";
// import PartTitle from 'components/common/PartTitle';
import { studyApi } from "shared/Api";
import Item from "@/components/StudyTableComponent/StudyTable/Item";
import axios from "axios";
// import Pagination from "components/common/Pagination";

interface Props {
  main?: boolean;
  list: [];
}
const StudyTable: FC<Props> = ({ main, list }) => {
  return (
    <div className=" py-0 px-[16px] mb-[40px] relative">
      <h4 className=" my-[10px] mx-0 font-normal">StudyTable</h4>
      {main && (
        <div className=" absolute top-[5px] right-[16px] text-[13px]">
          <Link href={"/study"}>전체보기</Link>
        </div>
      )}
      {/*{isLoading && (*/}
      {/*  <div*/}
      {/*    style={{ borderTopColor: "transparent" }}*/}
      {/*    className="w-16 h-16 border-4 border-black border-solid rounded-full animate-spin "*/}
      {/*  />*/}
      {/*)}*/}
      <table
        className={`w-full mt-[25px] text-[15px] ${
          main ? "block h-[200px] overflow-hidden" : ""
        }`}
      >
        <tbody>
          {list &&
            list.map((item: any) => (
              <Item
                key={item._id}
                title={item.title}
                date={moment(item.date).format("YY.MM.DD")}
                category={item.category}
                url={item.url}
              />
            ))}
        </tbody>
      </table>
      {/*{main ? "" : <Pagination />}*/}
    </div>
  );
};

export default StudyTable;
