'use client'
import { useState } from "react"


function Heder() {
  const [modal, setModal]=useState(false)
  function Mod(){
    setModal(!modal)
  }
  return (
    <div className="flex justify-between pt-[33px] px-[30px] lg:px-[120px]">
        <div>
            <h1 className="logo">DudeShape</h1>
        </div>
        <div className="flex flex-col  h-[22px] justify-between cursor-pointer lg:hidden" onClick={Mod}>
            <div className="w-8 h-1 bg-black rounded-md"></div>
            <div className="w-8 h-1 bg-black rounded-md"></div>
            <div className="w-8 h-1 bg-black rounded-md"></div>
        </div>
        <div className="hidden gap-[50px] lg:flex">
          <h3 className="hm">Home</h3>
          <h3 className="hm">About</h3>
          <h3 className="hm">Features</h3>
          <h3 className="hm">Contact</h3>
        </div>
        <div className=" gap-[30px] hidden lg:flex">
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
        <g clipPath="url(#clip0_2435_784)">
          <path d="M10.5691 0.538086C4.74145 0.538086 0 5.27635 0 11.1001C0 16.9241 4.74145 21.6621 10.5691 21.6621C16.3971 21.6621 21.1382 16.9241 21.1382 11.1001C21.1382 5.27635 16.3971 0.538086 10.5691 0.538086ZM10.5691 19.7122C5.81723 19.7122 1.95122 15.8488 1.95122 11.1001C1.95122 6.35145 5.81723 2.48799 10.5691 2.48799C15.321 2.48799 19.187 6.35141 19.187 11.1001C19.187 15.8487 15.321 19.7122 10.5691 19.7122Z" fill="#244D4D"/>
          <path d="M23.712 22.8576L18.1185 17.2678C17.7374 16.887 17.1201 16.887 16.739 17.2678C16.3578 17.6484 16.3578 18.2659 16.739 18.6464L22.3325 24.2362C22.523 24.4266 22.7725 24.5218 23.0223 24.5218C23.2717 24.5218 23.5214 24.4266 23.712 24.2362C24.0932 23.8556 24.0932 23.2381 23.712 22.8576Z" fill="#244D4D"/>
        </g>
        <defs>
          <clipPath id="clip0_2435_784">
            <rect width="24" height="24" fill="white" transform="translate(0 0.520264)"/>
          </clipPath>
        </defs>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
  <g clipPath="url(#clip0_2435_791)">
    <path d="M24.0004 17.8599H9.66016V20.5244H24.0004V17.8599Z" fill="#244D4D"/>
    <path d="M24 11.1978H0V13.8623H24V11.1978Z" fill="#244D4D"/>
    <path d="M14.3865 4.53491H0V7.19944H14.3865V4.53491Z" fill="#244D4D"/>
  </g>
  <defs>
    <clipPath id="clip0_2435_791">
      <rect width="24" height="24" fill="white" transform="translate(0 0.520264)"/>
    </clipPath>
  </defs>
</svg>
        </div>

      <div className={`fixed top-0 w-full h-[100vh] left-0 ${modal ? 'flex' : 'hidden'}`}>
        <div className="bg-[#00000072]  flex-1" onClick={Mod}></div>
        <div className="w-[60vw] h-full bg-white pl-5 pt-20">
          <div className="mb-5" onClick={Mod}>
          <div className="w-8 h-1 absolute bg-black rounded-md rotate-45"></div>
            <div className=" w-8 absolute h-1 bg-black rounded-md rotate-[-45deg]"></div>
          </div>
        <h3 className="about cursor-pointer" onClick={Mod}>Home</h3>
          <h3 className="about cursor-pointer" onClick={Mod}>About</h3>
          <h3 className="about cursor-pointer" onClick={Mod}>Features</h3>
          <h3 className="about cursor-pointer" onClick={Mod}>Contact</h3>
        </div>
      </div>
    </div>
  )
}

export default Heder