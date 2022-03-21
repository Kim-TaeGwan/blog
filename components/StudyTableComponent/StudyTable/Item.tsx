import React, { FC, memo } from "react";

interface Props {
  title: string;
  date: string;
  url: string;
  category: string;
}
const Item: FC<Props> = memo(({ title, date, url, category }) => {
  const notionUrl = () => {
    let openNewWindow: any = window.open("about:blank");
    openNewWindow.location.href = `${url}`;
  };
  return (
    <tr onClick={notionUrl} className="odd:bg-[#fff] hover:underline">
      <td className="category p-[5px] h-[03px] leading-[30px] text-[13px] text-center">
        {category}
      </td>
      <td className="title p-[5px] h-[03px] leading-[30px] w-full cursor-pointer">
        {title}
      </td>
      <td className="p-[5px] h-[03px] leading-[30px] w-[100px] block text-right pr-[5px]">
        {date}
      </td>
    </tr>
  );
});

export default Item;
