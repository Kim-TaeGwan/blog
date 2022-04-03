import React, { FC } from "react";

interface Props {
  title: string;
  inputName: string;
  value: string;
  onChange: (e: any) => void;
  placeholder: string;
}
const ContactInputList: FC<Props> = ({
  title,
  inputName,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <div className="contact_input_list mb-[16px]">
      <span className="text-[15px]">{title}</span>
      <input
        // type="text"
        name={inputName}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full leading-[22.5px] border border-solid border-[#ccc] p-[8px] block box-border"
      />
    </div>
  );
};

export default ContactInputList;
