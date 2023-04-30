/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserProvider";

function Login() {
  const navigate = useNavigate();

  const [data, setData] = useContext(UserContext);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setData((prev) => ({
      ...prev,
      name: value,
    }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setData((prev) => ({
        ...prev,
        image: reader.result,
      }));
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="h-full flex bg-black">
      <div className="w-[588px] flex flex-col items-center justify-center m-auto  h-[688px] bg-white rounded-[4px]">
        <h1 className="text-5xl capitalize font-semibold mb-11">get started</h1>
        <p className="mb-[10px]">add a photo</p>
        <label className="mb-[53px]" htmlFor="img-upload">
          <div className="bg-[#E6EBFF] flex items-center justify-center w-[122px] h-[122px] cursor-pointer rounded-full hover:bg-[#5EFC8D]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44.3"
              height="40.35"
              viewBox="0 0 44.3 40.35"
            >
              <path
                id="add_a_photo_FILL0_wght400_GRAD0_opsz48"
                d="M38.65,15.3V11h-4.3V8h4.3V3.65h3V8H46v3H41.65v4.3ZM4.7,44a2.878,2.878,0,0,1-2.1-.9A2.878,2.878,0,0,1,1.7,41V15.35a2.906,2.906,0,0,1,.9-2.075,2.841,2.841,0,0,1,2.1-.925h7.35L15.7,8h14v3H17.1l-3.65,4.35H4.7V41h34V20h3V41a2.841,2.841,0,0,1-.925,2.1A2.906,2.906,0,0,1,38.7,44Zm17-7.3a8.37,8.37,0,0,0,8.5-8.55,8.137,8.137,0,0,0-2.45-6.025A8.263,8.263,0,0,0,21.7,19.7a8.287,8.287,0,0,0-8.5,8.45,8.324,8.324,0,0,0,2.425,6.1A8.2,8.2,0,0,0,21.7,36.7Zm0-3a5.305,5.305,0,0,1-3.95-1.575A5.435,5.435,0,0,1,16.2,28.15a5.288,5.288,0,0,1,1.55-3.9A5.35,5.35,0,0,1,21.7,22.7a5.372,5.372,0,0,1,3.925,1.55,5.244,5.244,0,0,1,1.575,3.9,5.388,5.388,0,0,1-1.575,3.975A5.327,5.327,0,0,1,21.7,33.7ZM21.7,28.2Z"
                transform="translate(-1.7 -3.65)"
              />
            </svg>
          </div>
        </label>
        <input
          type="file"
          onChange={handleImageChange}
          id="img-upload"
          className="hidden"
        />

        <label htmlFor="name" className="mb-4">
          fill in your name
        </label>
        <input
          id="name"
          onChange={handleInputChange}
          className="mb-[76px] w-[487px] p-[22px] bg-[#E6EBFF]"
          placeholder="your name"
          type="text"
        />

        <button
          onClick={() => navigate("/todolist")}
          className="capitalize w-[388px] h-[98px] text-black font-light  text-5xl rounded-[4px] pt-4 px-[58px] bg-[#5EFC8D] hover:bg-black hover:text-white"
        >
          sign in
        </button>
      </div>
    </div>
  );
}

export default Login;
