import React, { useState, useEffect, FC } from "react";
import Portfolio from "./Portfolio";
// import Pagination from 'components/common/Pagination';

import { portfolioApi } from "shared/Api";

const PortfolioList: FC = () => {
  const [list, setList] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchPortfolioList() {
      setIsLoading(true);
      try {
        const result = await portfolioApi.get<any[]>("/");
        setList(result.data);
        setList([...result.data]);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchPortfolioList();
  }, []);

  // const listArray = Object.entries(list);
  // console.log('listArray : ', listArray);
  return (
    <>
      <div className="portfolio_list">
        {isLoading && <div className="loader" />}
        {list &&
          list.map((item: any, index: number) => (
            <a key={index} href={item.url} target="black">
              <Portfolio
                title={item.title}
                comment={item.comment}
                img_url={item.img_url}
              />
            </a>
          ))}
      </div>
      {/*<Pagination />*/}
    </>
  );
};

export default PortfolioList;
