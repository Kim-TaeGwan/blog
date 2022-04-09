import React from "react";
import Image from "next/image";

// import { Link } from 'react-router-dom';

import post_img_01 from "assets/image/blog_post_img_01.jpg";
import post_img_02 from "assets/image/blog_post_img_02.jpg";

const Footer = () => {
  return (
    <div className="bg-[#616161] text-white pt-[12px]">
      <div className="footer_box py-[32px] px-[16px]">
        <div className="content_box w-[33.3%] py-0 px-[8px] box-border inline-block align-top mobile:w-full mobile:block mobile:mb-[30px] left">
          <span className="title text-[24px] block mb-[25px] mobile:mb-[10px]">
            FOOTER
          </span>
          <div className="content">
            <span className="block text-[15px] mb-[15px]">
              Praesent tincidunt sed tellus ut rutrum. Sed vitae justo
              condimentum, porta lectus vitae, ultricies congue gravida diam non
              fringilla.
            </span>
            <span className="block text-[15px]">
              Powered by
              <a
                href="https://www.w3schools.com/w3css/default.asp"
                target="black"
                className="ml-[5px] text-white"
              >
                w3.css
              </a>
            </span>
          </div>
        </div>
        <div className="content_box w-[33.3%] py-0 px-[8px] box-border inline-block align-top center mobile:w-full mobile:block mobile:mb-[30px]">
          <span className="title text-[24px] block mb-[25px] mobile:mb-[10px]">
            BLOG POSTS
          </span>
          <div className="content">
            <div className="post_container p-[16px] box-border border-b-[1px] border-solid border-white hover:bg-[#ccc]">
              <div className="post_img w-[50px] h-[50px] inline-block align-middle mr-[15px]">
                <Image
                  src={post_img_01}
                  alt="post_img"
                  width="100%"
                  height="100%"
                />
                {/*<img src={post_img_01} alt="post_img" width="100%" height="100%" />*/}
              </div>
              <div className="post_info inline-block align-middle">
                <span className="block leading-[22px] text-[18px]">Lorem</span>
                <span className="block leading-[22px] text-[15px]">
                  Praes mattis nunc
                </span>
              </div>
            </div>
            <div className="post_container p-[16px] box-border mb-0 hover:bg-[#ccc]">
              <div className="post_img w-[50px] h-[50px] inline-block align-middle mr-[15px]">
                {/*<img src={post_img_02} alt="post_img" width="100%" height="100%" />*/}
                <Image
                  src={post_img_02}
                  alt="post_img"
                  width="100%"
                  height="100%"
                />
              </div>
              <div className="post_info  inline-block align-middle">
                <span className="block leading-[22px] text-[18px]">Lorem</span>
                <span className="block leading-[22px] text-[15px]">
                  Sed mattis nunc
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="content_box w-[33.3%] py-0 px-[8px] box-border inline-block align-top right mobile:w-full mobile:block mobile:mb-[30px]">
          <span className="title text-[24px] block mb-[25px] mobile:mb-[10px]">
            POPULAR TAGS
          </span>
          <div className="content">
            <span className="tag inline-block bg-black text-white py-0 px-[8px] mr-[5px] mb-[15px] text-[15px] insert">
              HTML
            </span>
            <span className="tag inline-block bg-[#9e9e9e] text-black py-0 px-[8px] mr-[5px] mb-[15px] text-[12px]">
              CSS
            </span>
            <span className="tag inline-block bg-[#9e9e9e] text-black py-0 px-[8px] mr-[5px] mb-[15px] text-[12px]">
              JavaScript
            </span>
            <span className="tag inline-block bg-[#9e9e9e] text-black py-0 px-[8px] mr-[5px] mb-[15px] text-[12px]">
              ES6
            </span>
            <span className="tag inline-block bg-[#9e9e9e] text-black py-0 px-[8px] mr-[5px] mb-[15px] text-[12px]">
              React
            </span>
            <span className="tag inline-block bg-[#9e9e9e] text-black py-0 px-[8px] mr-[5px] mb-[15px] text-[12px]">
              Node.js
            </span>
            <span className="tag inline-block bg-[#9e9e9e] text-black py-0 px-[8px] mr-[5px] mb-[15px] text-[12px]">
              MySQL
            </span>
          </div>
        </div>
      </div>
      <div className="footer_end bg-black py-[24px] px-0 text-white text-center">
        <span>Powered by</span>
        <a
          href="https://www.w3schools.com/w3css/default.asp"
          target="black"
          className="ml-[5px] text-white"
        >
          w3.css
        </a>
      </div>
    </div>
  );
};

export default Footer;
