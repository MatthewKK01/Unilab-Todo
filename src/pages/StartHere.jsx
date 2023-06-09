/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";

function StartHere() {
  const navigate = useNavigate();

  return (
    <div className="h-full flex flex-col items-center justify-center  bg-black">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="91.135"
        height="165"
        viewBox="0 0 91.135 165"
      >
        <g
          id="Group_3"
          data-name="Group 3"
          transform="translate(-1445.865 -74.998)"
        >
          <g
            id="Rectangle_5"
            data-name="Rectangle 5"
            transform="translate(1456.047 109.998)"
            fill="#5efc8d"
            stroke="#707070"
            strokeWidth="1"
          >
            <rect width="68" height="64" stroke="none" />
            <rect x="0.5" y="0.5" width="67" height="63" fill="none" />
          </g>
          <path
            id="Path_1"
            data-name="Path 1"
            d="M288.528,75.63h-7.962a8.733,8.733,0,0,0-8.483-6.751H226.9a8.733,8.733,0,0,0-8.483,6.751h-7.964A6.134,6.134,0,0,0,204.4,81.69V192.653a6.134,6.134,0,0,0,6.059,6.059H288.7a6.134,6.134,0,0,0,6.059-6.059V81.69a6.282,6.282,0,0,0-6.232-6.059Zm.866,117.022a.818.818,0,0,1-.866.866H210.283a.818.818,0,0,1-.866-.866V81.688a.818.818,0,0,1,.866-.866h8.309a8.831,8.831,0,0,0,8.136,5.713H271.91a8.657,8.657,0,0,0,8.136-5.713h8.309a.818.818,0,0,1,.866.866V192.651Z"
            transform="translate(1241.469 6.119)"
            fill="#fff"
          />
          <path
            id="Path_2"
            data-name="Path 2"
            d="M236.88,138.32v98.672h70.109V138.32Zm64.743,34.622-45.874,25.273a4.6,4.6,0,0,1-2.077.519,4.512,4.512,0,0,1-3.808-2.251l-9.694-16.964a4.3,4.3,0,1,1,7.443-4.328l7.443,13.33,42.239-23.2a4.326,4.326,0,0,1,5.885,1.732,4.007,4.007,0,0,1-1.558,5.885Z"
            transform="translate(1219.026 -41.856)"
            fill="#fff"
          />
          <text
            id="to_do"
            data-name="to do"
            transform="translate(1446 229.998)"
            fill="#fff"
            fontSize="29"
            fontFamily="Poppins-Black, Poppins"
            fontWeight="800"
          >
            <tspan x="0" y="0">
              TO DO
            </tspan>
          </text>
        </g>
      </svg>
      <h1 className="text-white  font-semibold md:mt-[46px] md:mb-[149px] lg:text-[54px] capitalize sm:text-center sm:text-3xl sm:mt-16 sm:mb-24">
        Keep Track Of Daily Tasks In Life
      </h1>
      <button
        onClick={() => navigate("/login")}
        className="sm:w-72  sm:text-3xl sm:pt-2 capitalize md:w-[388px] h-[98px] text-black font-light  md:text-5xl rounded-[4px] md:pt-4 md:px-[58px] bg-[#5EFC8D] hover:bg-white"
      >
        get started
      </button>
    </div>
  );
}

export default StartHere;
