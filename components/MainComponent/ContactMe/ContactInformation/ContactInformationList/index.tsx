import React, { VFC } from "react";

interface Props {
  childrenText: string;
  children: React.ReactNode;
}
const ContactInformationList: VFC<Props> = ({ childrenText, children }) => {
  return (
    <div className=" w-[33.3%] bg-[#009688] inline-block align-middle py-[15px] px-0 text-center mobile:block mobile:w-full odd:bg-[#616161]">
      <div className="address_ico w-[36px] h-[36px] my-0 mx-auto mb-[15px]">
        {children}
      </div>
      <div className="contact text-[15px] text-[15px] text-white">
        {childrenText}
      </div>
    </div>
  );
};

export default ContactInformationList;
