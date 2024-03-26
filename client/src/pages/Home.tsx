import Navbar from "../components/major/Navbar";
import { Context } from "../App";
import { useContext } from "react";

function Home() {
  const { userCred } = useContext(Context); 

  return (
    <>
      <Navbar />
      <div className="mt-14 px-16 pb-16 flex flex-col items-center gap-y-16">
        <div className="w-full flex flex-col">
          <span className="text-palette9 font-Roboto font-semibold text-2xl mb-7">
            New Releases
          </span>
          <div className="flex flex-row gap-x-6 overflow-x-auto min-w-full pb-4">
            <div className="w-[150px] h-[250px] bg-black flex-shrink-0 flex-grow-0"></div>
            <div className="w-[150px] h-[250px] bg-black flex-shrink-0 flex-grow-0"></div>
            <div className="w-[150px] h-[250px] bg-black flex-shrink-0 flex-grow-0"></div>
            <div className="w-[150px] h-[250px] bg-black flex-shrink-0 flex-grow-0"></div>
            <div className="w-[150px] h-[250px] bg-black flex-shrink-0 flex-grow-0"></div>
            <div className="w-[150px] h-[250px] bg-black flex-shrink-0 flex-grow-0"></div>
            <div className="w-[150px] h-[250px] bg-black flex-shrink-0 flex-grow-0"></div>
            <div className="w-[150px] h-[250px] bg-black flex-shrink-0 flex-grow-0"></div>
            <div className="w-[150px] h-[250px] bg-black flex-shrink-0 flex-grow-0"></div>
            <div className="w-[150px] h-[250px] bg-black flex-shrink-0 flex-grow-0"></div>
          </div>
        </div>
        <div className="w-full flex flex-col">
          <span className="text-palette9 font-Roboto font-semibold text-2xl mb-7">
            Continue Reading
          </span>
          <div className="flex flex-row gap-x-6 overflow-x-auto min-w-full pb-4">
            <div className="w-[150px] h-[250px] bg-black flex-shrink-0 flex-grow-0"></div>
            <div className="w-[150px] h-[250px] bg-black flex-shrink-0 flex-grow-0"></div>
            <div className="w-[150px] h-[250px] bg-black flex-shrink-0 flex-grow-0"></div>
            <div className="w-[150px] h-[250px] bg-black flex-shrink-0 flex-grow-0"></div>
            <div className="w-[150px] h-[250px] bg-black flex-shrink-0 flex-grow-0"></div>
          </div>
        </div>
        <div className="w-full flex flex-col">
          <span className="text-palette9 font-Roboto font-semibold text-2xl mb-7">
            Most Popular
          </span>
          <div className="flex flex-row gap-x-6 overflow-x-auto min-w-full pb-4">
            <div className="w-[150px] h-[250px] bg-black flex-shrink-0 flex-grow-0"></div>
            <div className="w-[150px] h-[250px] bg-black flex-shrink-0 flex-grow-0"></div>
            <div className="w-[150px] h-[250px] bg-black flex-shrink-0 flex-grow-0"></div>
            <div className="w-[150px] h-[250px] bg-black flex-shrink-0 flex-grow-0"></div>
            <div className="w-[150px] h-[250px] bg-black flex-shrink-0 flex-grow-0"></div>
            <div className="w-[150px] h-[250px] bg-black flex-shrink-0 flex-grow-0"></div>
            <div className="w-[150px] h-[250px] bg-black flex-shrink-0 flex-grow-0"></div>
            <div className="w-[150px] h-[250px] bg-black flex-shrink-0 flex-grow-0"></div>
            <div className="w-[150px] h-[250px] bg-black flex-shrink-0 flex-grow-0"></div>
            <div className="w-[150px] h-[250px] bg-black flex-shrink-0 flex-grow-0"></div>
          </div>
        </div>
      </div>
    </>
  ); 
}
 
export default Home;