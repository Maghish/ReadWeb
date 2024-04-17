import { BsPlusCircle } from "react-icons/bs";
import { useState } from "react";

function WriteBook() {
  const [chapters, setChapters] = useState([]);
  
  return (
    <div className="absolute min-w-full min-h-screen bg-palette2 flex px-10 py-7">
      <form className="flex flex-col bg-palette9 w-full min-h-full p-10 rounded-lg gap-y-7">
        <h1 className="text-palette2 font-bold text-3xl self-center font-Roboto">
          Write Book
        </h1>
        <input
          className="bg-palette2 w-full md:w-[450px] md:max-w-[450px] mt-10 p-3 px-4 rounded-lg outline-none text-sm font-Roboto placeholder:text-palette4"
          placeholder="Enter book name"
        />
        <div className="bg-[#df5d5f] m-auto w-[200px] h-[200px] rounded-md flex flex-col items-center justify-center cursor-pointer transition delay-75 duration-200 ease-out hover:opacity-90">
          <BsPlusCircle color="#FFFFFF" size="72px" />
          <p className="mt-4 text-lg text-white font-Roboto">
            Write new chapter
          </p>
        </div>
      </form>
    </div>
  );
}

export default WriteBook;
