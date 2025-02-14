import logo from "../assets/logo.png.svg";
import vector from "../assets/Vector.svg";
import vector1 from "../assets/Vector (1).png";
import heroimg from "../assets/Anniversary (7) 1 (1).png";
import hero1 from "../assets/Anniversary (8) 1.png";
import group from "../assets/Group 22094.svg";
import groupc from "../assets/Group 22083.png";
import groupr from "../assets/Group 22059.png";
import cap from "../assets/Group.png";
import show from "../assets/Overlay+Border.png";
import img2 from "../assets/div.cta-grad.png";
import footlogo from "../assets/accredainnew.webp.svg";
import plus from "../assets/Vector (1).svg";
import a from "../assets/1.svg";
import b from "../assets/2.svg";
import c from "../assets/3.svg";
import d from "../assets/4.svg";
import e from "../assets/5.svg";
import { useState } from "react";

const LandingPage = ({ setModalOpen }) => {
  return (
    <>
      {/* Navbar section */}
      <nav className="font-inter">
        <div className="bg-[#1A73E826]">
          <div className=" max-w-[1920px] p-[16px] m-auto flex justify-center gap-[20px]">
            <p className="font-inter font-medium text-[16.88px] ">
              Navigate your ideal career path with tailored expert advice{" "}
            </p>
            <p className="text-[#1A73E8] font-inter font-medium text-[17.02px]">
              Contact Expert
            </p>
          </div>
        </div>

        <div className="flex max-w-[1360px] m-auto justify-between mt-[9.6px] p-[10px] items-center">
          <div className="flex gap-[32px] items-center">
            <img src={logo} alt="logo" />
            <button className="bg-[#1A73E8] px-[18px] py-[8px] flex gap-[4px] text-[#FFFFFF] rounded-md">
              <span>Courses</span> <img src={vector} alt="evc" />
            </button>
          </div>
          <div className="flex gap-[32px] items-center">
            <p className="font-medium text-[14.75px]">Refer & Earn</p>
            <p className="font-medium text-[14.75px]">Resources</p>
            <p className="font-medium text-[15px]">About us</p>
            <div className="flex gap-[16.01px] items-center">
              <button className="font-medium text-[15.25px] text-[#1A202C] bg-[#94A3B833] px-[18px] py-[8px] rounded-md">
                Login
              </button>
              <button className="font-medium text-[14.75px] bg-[#1A73E8] text-[#FFFFFF] px-[18px] py-[8px] rounded-md">
                Try for free
              </button>
            </div>
            {/* Mobile Menu Button */}
            <button className="sm:block hidden">☰</button>
          </div>
        </div>
      </nav>
      {/* section with mini bar */}
      <section className="w-[797px] text-[#4B4B4B] mt-[39.8px] font-roboto font-normal text-[25px] bg-[#1A73E81C] rounded-[38px] flex gap-[60px] p-[12px] text-center justify-center m-auto">
        <span>Refer</span>
        <span>Benefits</span>
        <span>FAQs</span>
        <span>Support</span>
      </section>
      {/* section for hero image */}
      <section className="max-w-[1360px]   m-auto mt-[27px] relative overflow-hidden bg-[#EEF5FF]   rounded-[29px] shadow-[0px_4px_65px_1px_#00072B36]">
        <img
          src={hero1}
          className="absolute top-[-57px] left-[0px] rotate-180"
          alt="hero image "
        />
        <img
          src={hero1}
          className="absolute top-[-50px] right-[10px] rotate-250"
          alt="hero image "
        />
        <img
          src={hero1}
          className="absolute bottom-[35px] z-[20] left-[585px]"
          alt="hero image "
        />
        <img
          src={hero1}
          className="absolute top-[247px] right-[10px]  rotate-180"
          alt="hero image "
        />
        <img
          src={hero1}
          className="absolute top-[0px] right-[450px] rotate-250"
          alt="hero image "
        />
        <div className="flex justify-around items-center px-[45px] ">
          <div className=" w-full max-w-[502px]">
            <p className="font-roboto font-bold text-[88px]">
              Let’s Learn & Earn
            </p>
            <p className="font-roboto font-normal text-[40px] mt-[37px] mb-[61px]">
              Get a chance to win up-to{" "}
              <span className="font-bold text-[54px] text-[#1A73E8]">
                Rs. 15,000
              </span>
            </p>
            <button
              className="bg-[#1A73E8] text-[#FFFFFF] font-normal text-[20px] px-[52px] py-[15px] rounded-[8px]"
              onClick={() => setModalOpen(true)}
            >
              Refer Now
            </button>
          </div>
          <div className="z-10">
            <img src={heroimg} alt="hero image" />
          </div>
        </div>
      </section>
      {/* section with image */}
      <section className=" max-w-[1934px] bg-[#EEF5FF] m-auto mt-[75px] p-[25px]">
        <div className="max-w-[1387px] m-auto">
          <p className="font-roboto font-semibold text-[27.66px] text-center">
            How Do I <span className="text-[#1A73E8]">Refer?</span>
          </p>
          <img src={group} className="mt-[40px] mb-[78px]" alt="" />
          <button
            onClick={() => setModalOpen(true)}
            className="text-[#FFFFFF] block mx-auto bg-[#1A73E8] py-[20px] px-[72px] rounded-[8px] font-[Source Sans Pro] font-normal text-[20px]"
          >
            Refer Now
          </button>
        </div>
      </section>
      {/* section with table */}
      <section className=" max-w-[1926px]  m-auto mt-[91px]">
        <div className="max-w-[1231px]  m-auto mb-[35px]">
          <p className="font-roboto font-semibold text-[27.66px] mb-[33px] text-center">
            What Are The{" "}
            <span className="text-[#1A73E8]">Referral Benefits?</span>
          </p>
          <div className=" flex  gap-[40px] m-auto   font-[Source Sans Pro]  text-[18px] pt-[33px]  pb-[65px] relative">
            <div className="absolute top-[0px] right-[0px]">
              <img src={groupc} alt="" />
            </div>
            <div className="absolute bottom-[0px] right-[0px]">
              <img src={show} alt="" />
            </div>
            {/* table 1----------------------- */}
            <table className=" font-semibold flex-2 shadow-[0px_1px_24.4px_1px_#00000029]">
              <thead className="bg-[#1A73E8] text-[#FFFFFF] ">
                <tr className="">
                  <th className="px-4 py-[10px] rounded-t-[8px]">
                    <div className="flex justify-between items-center">
                      ALL PROGRAMS
                      <img src={vector1} alt="" className="w-auto h-auto" />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className=" border-b-[3px] border-gray-200">
                  <td className=" px-4   flex justify-between items-center ">
                    Product Management <img src={vector1} alt="" />
                  </td>
                </tr>
                <tr className=" border-b-[3px] border-gray-200">
                  <td className=" px-4  flex justify-between items-center ">
                    Strategy & Leadership <img src={vector1} alt="" />
                  </td>
                </tr>
                <tr className=" border-b-[3px] border-gray-200">
                  <td className=" px-4  justify-between flex items-center ">
                    Business Management
                    <img src={vector1} alt="" />
                  </td>
                </tr>
                <tr className=" border-b-[3px] border-gray-200">
                  <td className=" px-4  justify-between flex items-center ">
                    Fintech
                    <img src={vector1} alt="" />
                  </td>
                </tr>
                <tr className=" border-b-[3px] border-gray-200">
                  <td className="px-4  justify-between flex items-center  ">
                    Senior Management
                    <img src={vector1} alt="" />
                  </td>
                </tr>
                <tr className=" border-b-[3px] border-gray-200">
                  <td className="px-4  flex justify-between items-center ">
                    Data Science
                    <img src={vector1} alt="" />
                  </td>
                </tr>
                <tr className=" border-b-[3px] border-gray-200">
                  <td className=" px-4 flex justify-between items-center">
                    Digital Transformation
                    <img src={vector1} alt="" />
                  </td>
                </tr>
                <tr className="  ">
                  <td className="px-4   flex justify-between items-center">
                    Business Analytics
                    <img src={vector1} alt="" />
                  </td>
                </tr>
              </tbody>
            </table>

            {/* table 2----------------------------- */}
            <table className="font-normal w-full border-collapse flex-6 shadow-[0px_4px_29.3px_0px_#3C3C3C26]">
              <thead className="font-bold bg-[#1A73E859] text-[#1350A0] rounded-t-[14px] ">
                <tr className="">
                  <th className="rounded-tl-[14px] py-[14px] text-left px-[20px]">
                    Programs
                  </th>
                  <th className="border-l border-r border-gray-600 py-[14px] px-[7px]">
                    Referrer Bonus
                  </th>
                  <th className="rounded-tr-[14px] py-[14px] px-[7px]">
                    Referee Bonus
                  </th>
                </tr>
              </thead>
              <tbody className="text-center">
                <tr>
                  <td className="flex items-center gap-x-2 text-left py-[20px] px-[10px]">
                    <img src={cap} alt="" />
                    Professional Certificate Program in Product Management
                  </td>
                  <td className="border-l border-r border-gray-600">₹ 7,000</td>
                  <td>₹ 9,000</td>
                </tr>
                <tr>
                  <td className="flex items-center gap-x-2 text-left py-[20px] px-[10px]">
                    <img src={cap} alt="" />
                    PG Certificate Program in Strategic Product Management
                  </td>
                  <td className="border-l border-r border-gray-600">₹ 9,000</td>
                  <td>₹ 11,000</td>
                </tr>
                <tr>
                  <td className="flex items-center gap-x-2 text-left py-[20px] px-[10px]">
                    <img src={cap} alt="" />
                    Executive Program in Data Driven Product Management
                  </td>
                  <td className="border-l border-r border-gray-600">
                    ₹ 10,000
                  </td>
                  <td>₹ 10,000</td>
                </tr>
                <tr>
                  <td className="flex items-center gap-x-2 text-left py-[20px] px-[10px]">
                    <img src={cap} alt="" />
                    Executive Program in Product Management and Digital
                    Transformation
                  </td>
                  <td className="border-l border-r border-gray-600">
                    ₹ 10,000
                  </td>
                  <td>₹ 10,000</td>
                </tr>
                <tr>
                  <td className="flex items-center gap-x-2 text-left py-[20px] px-[10px]">
                    <img src={cap} alt="" />
                    Executive Program in Product Management
                  </td>
                  <td className="border-l border-r border-gray-600">
                    ₹ 10,000
                  </td>
                  <td>₹ 10,000</td>
                </tr>
                <tr className="text-center">
                  <td className="flex items-center text-left gap-x-2 py-[20px] px-[10px]">
                    <img src={cap} alt="" />
                    Advanced Certification in Product Management
                  </td>
                  <td className="border-l border-r  border-gray-600">
                    ₹ 10,000
                  </td>
                  <td>₹ 10,000</td>
                </tr>
                <tr>
                  <td className="flex items-center gap-x-2 text-left py-[20px] px-[10px]">
                    <img src={cap} alt="" />
                    Executive Program in Product Management and Project
                    Management
                  </td>
                  <td className="border-l border-r border-gray-600">
                    ₹ 10,000
                  </td>
                  <td>₹ 10,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <button
          onClick={() => setModalOpen(true)}
          className="bg-[#1A73E8] font-[Source Sans Pro] font-normal text-[20px] py-[20px] px-[69px] text-[#FFFFFF] rounded-[8px] block m-auto"
        >
          Refer Now
        </button>
      </section>
      {/* section frequent */}
      <section className="max-w-[1360px] m-auto mt-[177px]">
        <img src={groupr} alt="" />
      </section>

      {/* section lower image */}
      <section className="max-w-[1926px]  m-auto mt-[135px]">
        <div className="max-w-[1360px] m-auto">
          <img src={img2} alt="" />
        </div>
      </section>
      {/* footer section */}
      <footer className=" bg-[#282828] text-[#FFFFFF] font-roboto mt-[120px] py-[32px]">
        <div className="max-w-[1360px] m-auto">
          <div className="flex justify-between m-auto max-w-[1152px]">
            <div>
              <img src={footlogo} alt="" />
            </div>
            <div className=" flex flex-col">
              <button className="font-medium text-[14px] text-center bg-[#007BFF] border rounded-[8px]  py-[7px] px-[39.53px]">
                Schedule 1-on-1 Call Now
              </button>
              <p className="font-normal text-[14px] text-center ">
                Speak with our Learning Advisor
              </p>
            </div>
          </div>
          <div className=" border-t-[2px] border-gray-400 m-auto mt-[32.5px] max-w-[1152px] p-[16px] flex   gap-[20px] justify-between">
            <div className="flex-1  ">
              <p className="font-roboto font-normal text-[20px]">Programs</p>
              <ul className="flex flex-col gap-[30px]">
                <li className="flex items-center justify-between text-[17px] gap-[10px]">
                  Data Science & AI <img src={plus} />
                </li>
                <li className="flex items-center justify-between text-[17px] gap-[10px]">
                  Product Management
                  <img src={plus} />
                </li>
                <li className="flex items-center justify-between text-[17px] gap-[10px]">
                  Business Analytics
                  <img src={plus} />
                </li>
                <li className="flex items-center justify-between text-[17px] gap-[10px]">
                  Digital Transformation
                  <img src={plus} />
                </li>
                <li className="flex items-center justify-between text-[17px] gap-[10px]">
                  Business Management
                  <img src={plus} />
                </li>
                <li className="flex items-center justify-between text-[17px] gap-[10px]">
                  Project Management
                  <img src={plus} />
                </li>
                <li className="flex items-center justify-between text-[17px] gap-[10px]">
                  Strategy & Leadership
                  <img src={plus} />
                </li>
                <li className="flex items-center justify-between text-[17px] gap-[10px]">
                  Senior Management
                  <img src={plus} />
                </li>
                <li className="flex items-center justify-between text-[17px] gap-[10px]">
                  Fintech
                  <img src={plus} />
                </li>
              </ul>
            </div>
            <div className="flex-2  ">
              <p className="font-roboto font-normal text-[20px]">Contact Us </p>
              <div>
                <ul className="font-roboto font-normal text-[14px] ">
                  <li>
                    Email us (For Data Science Queries):
                    admissions@accredian.com
                  </li>
                  <li>
                    Email us (For Product Management Queries):pm@accredian.com
                  </li>
                  <li>
                    Email us (For Product Management Queries):pm@accredian.com
                  </li>
                  <li>Product Management Admission Helpline:+91 9625811095</li>
                  <li>Enrolled Student Helpline: +91 7969322507</li>
                  <li>
                    Office Address: 4th Floor, 250, Phase IV, Udyog Vihar,
                    Sector 18, Gurugram, Haryana 122015
                  </li>
                </ul>
              </div>
              <p className="font-roboto font-normal text-[18px]">
                Why Accredian
              </p>
              <p className="font-roboto font-light text-[20px]">Follow Us</p>

              <div className="flex justify-start gap-[18.26px]">
                <img src={e} />
                <img src={d} />
                <img src={c} />
                <img src={b} />
                <img src={a} />
              </div>
            </div>
            <div className=" flex-1  ">
              <p className="font-roboto font-normal text-[20px]">Accredian</p>
              <ul>
                <li className="flex items-center justify-between text-[14px]">
                  About{" "}
                </li>
                <li className="flex items-center justify-between text-[14px]">
                  Career
                </li>
                <li className="flex items-center justify-between text-[14px]">
                  Blog
                </li>
                <li className="flex items-center justify-between text-[14px]">
                  Admission Policy
                </li>
                <li className="flex items-center justify-between text-[14px]">
                  Referral Policy
                </li>
                <li className="flex items-center justify-between text-[14px]">
                  Privacy Policy
                </li>
                <li className="flex items-center justify-between text-[14px]">
                  Terms Of Service
                </li>
                <li className="flex items-center justify-between text-[14px]">
                  Master FAQs
                </li>
              </ul>
            </div>
          </div>
          <p className=" font-normal text-[14px] text-center py-[40px]">
            © 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights
            Reserved
          </p>
        </div>
      </footer>
    </>
  );
};

export default LandingPage;
