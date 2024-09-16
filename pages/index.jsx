/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import Head from "next/head";
import { ImInstagram, ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function Home({ title, description, keywords, url }) {
  const { t, i18n } = useTranslation();

  const data = [
    {
      icon: "Images/cardimg3.jpg",
      name: t("API Payment Solution"),
      description: t("main-2"),
    },
    {
      icon: "Images/cardimg2.png",
      name: t("Link Payment Solution"),
      description: t("main-3"),
    },
    {
      icon: "Images/cardimg1.jpg",
      name: t("E-commerce Platform"),
      description: t("main-4"),
    },
  ];

  const [currentSection, setCurrentSection] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const section1 = document.getElementById("Home");
      const section2 = document.getElementById("Features");
      const section3 = document.getElementById("Pricing");

      if (
        section1.offsetTop <= currentScrollPos &&
        currentScrollPos < section2.offsetTop
      ) {
        setCurrentSection("Home");
      } else if (
        section2.offsetTop <= currentScrollPos &&
        currentScrollPos < section3.offsetTop
      ) {
        setCurrentSection("Features");
      } else if (section3.offsetTop <= currentScrollPos) {
        setCurrentSection("Pricing");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />

        <link rel="icon" sizes="192x192" href="/ic_logo1.svg"></link>
        <link rel="shortcut icon" href="/ic_logo1.svg" />
        <link rel="canonical" href={url} />
        <link rel="apple-touch-icon" href="/ic_logo1.svg" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content={title} />

        <meta property="article:tag" content="Ecom Store" />
        <meta property="article:section" content="Online Store Application" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:url" content={url} />
      </Head>
      <div
        className="bg-[#52565E] min-h-screen w-[100%] font-Branregular text-white overflow-x-hidden"
        dir={t("local") === "ar" ? "rtl" : "ltr"}
      >
        <nav className="flex justify-between py-2 items-center px-6 xl:px-32 fixed bg-[#52565E] z-10 w-full">
          <div className="flex">
            <a href={"/"} className="inline-flex items-center gap-2">
              <Image src="/Images/logo.jpg" alt="" width={55} height={55} />
              {/* <img src="/Images/logo.jpg" alt=""/> */}
              <h1 className="text-3xl font-AvenirHeavy">{t("ecom")}</h1>
            </a>
          </div>
          <div className="lg:flex justify-between hidden items-center text-lg">
            <ul className="flex items-center gap-12 pt-4">
              <div className="flex items-center flex-col">
                <Link
                  to="Home"
                  href={"/"}
                  smooth={true}
                  duration={900}
                  className="cursor-pointer"
                >
                  {t("Home")}
                </Link>
                <div
                  className={`w-2 h-2 rounded-full ${
                    currentSection === "Home" ? "bg-yellow-500" : "opacity-0"
                  }`}
                ></div>
              </div>
              <div className="flex items-center flex-col">
                <Link
                  to="Features"
                  href={"/"}
                  smooth={true}
                  duration={900}
                  className="cursor-pointer"
                >
                  {t("Features")}
                </Link>
                <div
                  className={`w-2 h-2 rounded-full ${
                    currentSection === "Features"
                      ? "bg-yellow-500"
                      : "opacity-0"
                  }`}
                ></div>
              </div>
              <div className="flex items-center flex-col">
                <Link
                  to="Pricing"
                  href={"/"}
                  smooth={true}
                  duration={900}
                  className="cursor-pointer"
                >
                  {t("Pricing")}
                </Link>
                <div
                  className={`w-2 h-2 rounded-full ${
                    currentSection === "Pricing" ? "bg-yellow-500" : "opacity-0"
                  }`}
                ></div>
              </div>
            </ul>
          </div>
          <div className="lg:flex hidden items-center gap-8 font-Branbold">
            <Link
              className="flex items-center justify-center py-2 w-28 border-2 rounded-full hover:bg-black"
              href="https://admin.ecom.io/login"
              target="_blank"
            >
              {t("Login")}
            </Link>
            <Link
              href="https://admin.ecom.io/signUp"
              target="_blank"
              className="flex items-center justify-center py-2 w-28 border-2 border-yellow-500 rounded-full text-black bg-yellow-500 hover:bg-opacity-0 hover:border-white hover:text-white"
            >
              {t("Sign Up")}
            </Link>
            <button
              className="py-2 w-28 border-2 border-yellow-500 rounded-full text-black bg-yellow-500 hover:bg-opacity-0 hover:border-white hover:text-white"
              onClick={() => changeLanguage(t("local") === "ar" ? "en" : "ar")}
            >
              {t("English")}
            </button>
          </div>
          <div
            className=" text-white lg:hidden"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? (
              <AiOutlineClose size={20} />
            ) : (
              <AiOutlineMenu size={20} />
            )}
          </div>
          <ul
            className={
              toggle
                ? "lg:hidden w-full text-white fixed bg-[#52565E] md:text-4xl text-xl h-full pt-6 px-2 left-0 top-0 ease-in-out duration-500"
                : "ease-in-out duration-500 fixed left-[-100%]"
            }
          >
            <div className="flex justify-between md:p-12 p-4 md:border-b-2 border-b border-white">
              <Link
                to="Home"
                href={"/"}
                smooth={true}
                duration={900}
                className="cursor-pointer"
                onClick={() => setToggle(!toggle)}
              >
                {t("Home")}
              </Link>
              <div onClick={() => setToggle(!toggle)}>
                <AiOutlineClose size={20} />
              </div>
            </div>
            <div className="md:p-12 p-4 md:border-b-2 border-b border-white">
              <Link
                to="Features"
                href={"/"}
                smooth={true}
                duration={900}
                className="cursor-pointer"
                onClick={() => setToggle(!toggle)}
              >
                {t("Features")}
              </Link>
            </div>
            <div className="md:p-12 p-4">
              <Link
                to="Pricing"
                href={"/"}
                smooth={true}
                duration={900}
                className="cursor-pointer"
                onClick={() => setToggle(!toggle)}
              >
                {t("Pricing")}
              </Link>
            </div>
            <div className="w-full mb-16 py-4 my-5 px-2 border-2 rounded-full hover:bg-black text-center">
              <Link
                href="https://admin.ecom.io/login"
                target="_blank"
              >
                {t("Login")}
              </Link>
            </div>
            <div className="w-full mb-4 py-4 my-5 px-2 border-2 rounded-full hover:bg-black text-center">
              <Link
                href="https://admin.ecom.io/signUp"
                target="_blank"
              >
                {t("Sign Up")}
              </Link>
            </div>
            <button
              className="py-4 my-5 w-full px-2 border-2 rounded-full hover:bg-black"
              onClick={() => changeLanguage(t("local") === "ar" ? "en" : "ar")}
            >
              {t("English")}
            </button>
          </ul>
        </nav>

        <div
          id="Home"
          className={`flex flex-col md:flex-row justify-between lg:mb-4 md:pt-10 ${
            t("local") === "ar" ? "pr-5" : "md:pl-16 pl-5"
          }`}
        >
          <div className="lg:my-48 mt-28 md:pr-16 md:w-1/2 w-full">
            <h1 className="lg:text-4xl md:text-3xl text-xl font-Branbold mb-4">
              {t("Boost Your Online Sales with Ecom")} {t("Payments")}
            </h1>
            <h1 className="text-xs lg:text-xl">{t("main_1")}</h1>
            <div className="font-Branbold md:text-xl mt-10 py-2 px-8 border-2 border-yellow-500 w-fit rounded-full text-black bg-yellow-500 hover:bg-opacity-0 hover:border-white hover:text-white">

            <Link
              href="https://admin.ecom.io/signUp"
              target="_blank"
              
            >
              {t("Try ecom Now")}
            </Link>
            </div>
          </div>
          <div className="md:mt-16 justify-end">
            <img
              className={`${t("local") === "ar" && "transform scale-x-[-1]"}`}
              src="Images/1.jpg"
              alt=""
            />
          </div>
        </div>

        <div id="Features" className="bg-white w-full text-black md:pt-[53px]">
          <div className="font-Branbold text-xl md:text-5xl text-center lg:px-24 pt-20 md:pt-12">
            <h1>{t("With ecom, You can create your")}</h1>
            <h1>{t("Online Store")}</h1>
            <p className="font-Branregular md:text-xl text-xs opacity-60 mt-3 pb-10 md:pb-24">
              {t("No Coding | No Setup Fees | Launch in a Day")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 lg:px-24">
            {data.map((item) => (
              <div key={item.name} className="text-center">
                <div className="flex justify-center items-center ">
                  <img src={item.icon} alt="" className="h-[72px]" />
                </div>
                <h1 className="font-Branbold text-2xl mb-1">{item.name}</h1>
                <p>{item.description}</p>
              </div>
            ))}
          </div>

          <div
            id="Pricing"
            className="font-Branbold text-3xl md:text-5xl text-center lg:px-24 pt-32"
          >
            <h1>{t("Packages & Pricing")}</h1>
            <p className="font-Branregular text-xs md:text-xl opacity-60 mt-3 pb-10">
              {t("No Coding | No Setup Fees | Launch in a Day")}
            </p>
          </div>

          <div className="gap-10 pb-10 md:pb-32 px-4 lg:px-32 w-1/2 mx-auto min-w-[320px]">
            <div className="text-center p-2 md:p-5 bg-white rounded-lg shadow-2xl hover:scale-110 ease-in-out duration-1000 flex flex-col items-center">
              <h1 className="text-xs md:text-lg mb-4 md:mb-10">
                {t("main-5")}
              </h1>
              <div className="font-GilroyBold w-fit text-xs md:text-sm bg-[#F9C947] border-2 border-[#F9C947] rounded-full px-10 md:px-20 py-2 md:py-4 hover:bg-white hover:border-2">

              <Link
                href="https://wa.me/96598842795"
                target="_blank"
                
                >
                {t("Contacts us now")}
              </Link>
                </div>
            </div>
          </div>

          <div
            className={`pt-5 flex flex-col md:flex-row ${
              t("local") === "en" && "pl-2 md:pl-16"
            } justify-between`}
          >
            <div className="flex flex-col md:pr-20 justify-center">
              <h1 className="font-GilroyBold text-2xl lg:text-4xl">
                {t("E-com is your All-in-One Payment Gateway")}
              </h1>
              <h1 className="text-xs md:text-lg mb-4 md:mb-10">
                {t(
                  "Maximize your online potential with Ecom Payments – your trusted partner for secure,"
                )}
                <br></br>
                {t("main-6")}
              </h1>
              <div className="flex items-center gap-5 my-4 md:mt-10">
                <Link
                  href="https://admin.ecom.io/signUp"
                  target="_blank"
                  className="font-GilroyBold text-white text-xs md:text-sm lg:text-xl bg-[#F9C947] border-2 border-[#F9C947] rounded-full py-1 px-4 lg:px-8 lg:py-3 hover:bg-white hover:text-yellow-500 hover:border-2"
                >
                  {t("Try ecom Now")}
                </Link>
                <Link
                  href="https://admin.ecom.io/signUp"
                  target="_blank"
                  className="font-GilroyBold text-white text-xs md:text-sm lg:text-xl bg-[#52565E] border-2 border-[#52565E] rounded-full py-1 px-4 lg:px-8 lg:py-3 hover:bg-white hover:text-[#52565E] hover:border-2"
                >
                  {t("Schedule Demo")}
                </Link>
              </div>
            </div>
            <div className="">
              <img
                className={`object-cover ${
                  t("local") === "ar" && "transform scale-x-[-1]"
                }`}
                src="Images/2.jpg"
                alt=""
              />
            </div>
          </div>
        </div>

        <footer className="grid md:grid-cols-3 gap-8 lg:gap-32 py-5 px-5 lg:px-24 font-Branlight text-base">
          <div>
            <a href={"/"} className="inline-flex items-center gap-1">
              <img src="Images/footerlogo.jpg" alt="" />
              <h1 className="text-2xl font-AvenirHeavy">{t("ecom")}</h1>
            </a>
            <h1
              className={`mb-2 ${
                t("local") === "ar" ? "text-right" : "text-left"
              }`}
              dir="ltr"
            >
              +965 9884 2795
            </h1>
            <h1>sales@ecom.com</h1>
            <a
              href="https://drive.google.com/file/d/18s0-b9rjZV2VNdVjf5eGhDMtdlF7qq7f/view?usp=sharing"
              target="_blank"
              className="cursor-pointer"
            >
              fees
            </a>
          </div>
          <div
            className={`mb-2 ${
              t("local") === "ar" ? "text-right" : "text-left"
            }`}
            dir="ltr"
          >
            <h1 className="font-Branbold text-lg mb-1">Kuwait Office</h1>
            <h1>Sharq Jaber Al Mubarak St,</h1>
            <h1>Silk Tower,</h1>
            <h1>10th floor,</h1>
            <h1>Office 25 Kuwait City, Kuwait.</h1>
          </div>
          <div>
            <h1 className="font-Branbold text-lg mb-2">{t("Social Media")}</h1>
            <div className="flex justify-between w-[50%] md:w-[70%] mb-5 text-[22px]">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ImInstagram />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ImFacebook />
              </a>
              <a
                href="https://twitter.com/?lang=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ImTwitter />
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ImYoutube />
              </a>
            </div>
            <h1 className="font-GilroyRegular text-sm">
              {t("Copyrights ©")} {currentYear}{" "}
              <a href={"/"} className="font-GilroyBold">
                {t("ecom")}
              </a>{" "}
              {t("All Rights Reserved")}
            </h1>
          </div>
        </footer>
      </div>
    </>
  );
}

Home.defaultProps = {
  title: "Ecom Payments",
  description:
    "Ecom is a platform that provides businesses an easy way to collect money from their clients. Ecom is a fintech product that empowers businesses / enterprenuers to grow/expand their businesses and collect their money an easy/ fast way securely.",
  keywords:
    "Ecom Store,Ecom,Store,ecom,Online commerce,Digital commerce,commerce,store,clothes, platform, businesses, collect money, fintech, product, entrepreneurs, grow, expand, easy, fast, secure, payment processing, online payments, billing, invoicing, transactions, financial technology, electronic payments, money collection, business growth, payment solutions, secure payments",
  url: "https://ecom.io/",
};
