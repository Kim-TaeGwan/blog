import React, { useState, useEffect, FC } from "react";
import Link from "next/link";
import moment from "moment";
// import PartTitle from 'components/common/PartTitle';
import { studyApi } from "shared/Api";
import Item from "@/components/StudyTableComponent/StudyTable/Item";
// import Pagination from "components/common/Pagination";

interface Props {
  main?: boolean;
}
const StudyTable: FC<Props> = ({ main }) => {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(() => {
    async function fetchStudyList() {
      setIsLoading(true);
      try {
        const result = await studyApi.get("/");
        setList(result.data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    }
    fetchStudyList();
  }, []);

  // pagination

  return (
    <div className=" py-0 px-[16px] mb-[40px] relative">
      <h4 className=" my-[10px] mx-0 font-normal">StudyTable</h4>
      {main && (
        <div className=" absolute top-0 right-[16px] text-[13px]">
          <Link href={"/study"}>전체보기</Link>
        </div>
      )}
      {isLoading && (
        <div
          style={{ borderTopColor: "transparent" }}
          className="w-16 h-16 border-4 border-black border-solid rounded-full animate-spin "
        />
      )}
      <table
        className={`w-full mt-[25px] text-[15px] ${
          main ? "block h-[200px] overflow-hidden" : ""
        }`}
      >
        <tbody>
          {list &&
            list.map((item: any, i) => (
              <Item
                key={i}
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
