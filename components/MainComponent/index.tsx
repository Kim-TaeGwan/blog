import React, { useState, useCallback } from "react";
import Overlay from "@/shared/Overlay";
import Header from "@/layout/Header";
import PortfolioList from "@/components/MainComponent/PortfolioList";
import StudyTable from "@/components/StudyTableComponent/StudyTable";
import TechnicalSkills from "@/components/MainComponent/TechnicalSkills";
import ContactMe from "@/components/MainComponent/ContactMe";
import Footer from "@/layout/Footer";

const MainComponent = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [closeBtn, setCloseBtb] = useState(false);

  // contactme 이메일 전송
  const sendMail = (e: any) => {
    e.preventDefault();
    const data = {
      name,
      email,
      message,
    };
    // fetch("http://localhost:4000/api/sendEmail/sendEmail", {
    fetch("https://blog-back-server.herokuapp.com/api/sendEmail/sendEmail", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((res) => res.json());
    // .then(json => {});
    setCloseBtb(!closeBtn);
    setInputs({
      name: "",
      email: "",
      message: "",
    });
  };

  // contactme onChange
  const { name, email, message } = inputs;
  const handleContact = useCallback((e: any) => {
    const { name, value } = e.target;
    setInputs((inputs) => ({
      ...inputs,
      [name]: value,
    }));
  }, []);

  const openNav = useCallback(() => {}, []);

  const closeModal = () => {
    setCloseBtb(!closeBtn);
  };

  return (
    <>
      {/*<div className="h-screen pt-[16px] pb-[16px] pl-0 pr-0 align-top relative ml-[300px] tablet:ml-0 mobile:ml-0">*/}
      {/*<Overlay />*/}
      {/*<Header onClick={openNav} />*/}
      <PortfolioList />
      <StudyTable main />
      <TechnicalSkills />
      <ContactMe
        name={name}
        email={email}
        message={message}
        sendMail={sendMail}
        onChange={handleContact}
      />
      <Footer />
      {/*</div>*/}
    </>
  );
};

export default MainComponent;
