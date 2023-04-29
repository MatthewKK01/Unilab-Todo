/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { UserContext } from "../context/UserProvider";

function Header() {
  const [data, setData] = useContext(UserContext);

  return (
    <header className="flex justify-between items-center mb-[35px] bg-black py-6 px-7">
      <h1 className="text-white font-black text-4xl">TODO</h1>
      <article className="flex flex-row items-center gap-20">
        <p className="  text-white font-light text-[22px]">{data.name}</p>
        <img
          src={data.image}
          className="w-[68px] h-[68px] rounded-full"
          alt="photo"
        />
      </article>
    </header>
  );
}

export default Header;