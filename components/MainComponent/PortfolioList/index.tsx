import React, { FC } from "react";
import Portfolio from "./Portfolio";
// import Pagination from 'components/common/Pagination';

// import { portfolioApi } from "shared/Api";
import axios from "axios";
import Test from "@/components/MainComponent/PortfolioList/Test";

const PortfolioList: FC = ({ data }: any) => {
  // console.log("portfolio : ", data);
  // const [list, setList] = useState<any>([]);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   async function fetchPortfolioList() {
  //     setIsLoading(true);
  //     try {
  //       const result = await portfolioApi.get<any[]>("/");
  //       setList(result.data);
  //       setList([...result.data]);
  //     } catch (error) {
  //       console.error(error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }
  //   fetchPortfolioList();
  // }, []);

  // const listArray = Object.entries(list);
  // console.log('listArray : ', listArray);
  return (
    <>
      <div className="py-0 px-[8px]">
        {/*{isLoading && (*/}
        {/*  <div*/}
        {/*    style={{ borderTopColor: "transparent" }}*/}
        {/*    className="w-16 h-16 border-4 border-black border-solid rounded-full animate-spin "*/}
        {/*  />*/}
        {/*)}*/}
        {data
          ? data.map((item: any, index: number) => (
              <a
                key={index}
                href={item.url}
                target="black"
                className="no-underline text-black"
              >
                <Portfolio
                  title={item.title}
                  comment={item.comment}
                  img_url={item.img_url}
                />
              </a>
            ))
          : []}
      </div>
      <Test />
      {/*<Pagination />*/}
    </>
  );
};

export default PortfolioList;

export async function getServerSideProps() {
  try {
    const res = await axios.get(
      `${process.env.BACKEND_URL}/api/portfolio/select`
    );
    const data = await res.data;
    console.log("getServerSideProps  : ", getServerSideProps());
    return { props: { data } };
  } catch (error) {
    const res = error;
    console.log("error : ", error);
    return { props: res };
  }
}
