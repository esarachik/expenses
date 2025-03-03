"use client"

import { useState,useEffect } from "react"
import {BsArrowLeftShort} from "react-icons/bs"
import Image from 'next/image'

const Nav = () => {
   const [open, setOpen] = useState(false)
   useEffect(() => {
      setOpen(true);
    }, []);
   return (
     <nav
       className={`bg-slate-300 text-text h-screen p-5 pt-8 ${open ? "w-52" : "w-20"} duration-500 relative`}
     >
       <BsArrowLeftShort
         className={`bg-background text-secondary border border-secondary text-3xl rounded-full absolute -right-3 top-9  cursor-pointer ${!open && "rotate-180"}`}
         onClick={() => setOpen(!open)}
       />
         
      <div className="w-10 h-10 bg-primary dark:bg-primary rounded-md flex justify-center items-center">
        <div className="text-background text-center font-bold">EM</div>
      </div>            
     </nav>
   );
}
export default Nav