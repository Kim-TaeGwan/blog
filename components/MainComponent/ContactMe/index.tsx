import React, { FC } from "react";
import ContactInformation from "@/components/MainComponent/ContactMe/ContactInformation";
import ContactInput from "@/components/MainComponent/ContactMe/ContactInput";
import { Element } from "react-scroll";

interface Props {
  email: string;
  message: string;
  sendMail: (e: any) => void;
  name: string;
  onChange: (e: any) => void;
}
const ContactMe: FC<Props> = ({ email, message, sendMail, name, onChange }) => {
  return (
    <Element name="test1">
      <div className="px-[16px] px-[16px] bg-[#9e9e9e]">
        <div className="py-[16px] px-0">
          <div className="my-[10px] mx-0 font-normal">ContactMe</div>
          <ContactInformation />
          <hr />
          <ContactInput
            name={name}
            email={email}
            message={message}
            sendMail={sendMail}
            onChange={onChange}
          />
        </div>
      </div>
    </Element>
  );
};

export default ContactMe;
