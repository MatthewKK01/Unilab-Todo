/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { UserContext } from "../context/UserProvider";
import { useEffect } from "react";
import { Link } from "react-router-dom";
function Header() {
  const [data, setData] = useContext(UserContext);

  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);

  return (
    <header className="flex justify-between items-center mb-[35px] bg-black py-6 px-7">
      <Link to="/">
        {" "}
        <h1 className="text-white font-black text-4xl">TODO</h1>
      </Link>
      <article className="flex flex-row items-center gap-5">
        <p className="  text-white font-light text-[22px]">{user.name}</p>
        <img
          src={user.image}
          className="w-[68px] h-[68px] rounded-full"
          alt="photo"
        />
      </article>
    </header>
  );
}

export default Header;
