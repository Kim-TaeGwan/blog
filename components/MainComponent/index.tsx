import React, { useState, useCallback } from "react";
import Overlay from "@/shared/Overlay";
import Header from "@/layout/Header";
import PortfolioList from "@/components/MainComponent/PortfolioList";
import StudyTableComponent from "@/components/StudyTableComponent";
import StudyTable from "@/components/StudyTableComponent/StudyTable";

const MainComponent = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [closeBtn, setCloseBtb] = useState(false);
  const openNav = () => {
    // setNavClose(!navClose);
    // document.getElementById("mySidenav").style.display = "block";
    // document.getElementById("overLay").style.display = "block";
    console.log("nav");
  };

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
    console.log(name, email, message);
    setCloseBtb(!closeBtn);
    setInputs({
      name: "",
      email: "",
      message: "",
    });
  };

  // contactme onChange
  const { name, email, message } = inputs;
  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setInputs((inputs) => ({
      ...inputs,
      [name]: value,
    }));
  }, []);

  const closeModal = () => {
    setCloseBtb(!closeBtn);
  };

  return (
    <div className="h-screen pt-[16px] pb-[16px] pl-0 pr-0 align-top relative ml-[300px] tablet:ml-0 mobile:ml-0">
      <Overlay />
      <Header onClick={openNav} />
      <PortfolioList />
      <StudyTable main />
    </div>
  );
};

export default MainComponent;
