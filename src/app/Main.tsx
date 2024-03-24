

import Image from "next/image"



function Main() {
  
  return (
    <div className="lg:px-[120px]">

        <div className="bg-[#154444] text-[#fff] px-6 pt-[49px] mt-[47px] lg:flex lg:p-0">
            <div className="lg:pl-[100px] pt-[100px] lg:pr-5">
                <h2 className="mainh lg:text-[56px] ">We Help You Make Modern Furniture</h2>
                <p className="mainp mt-3 mb-[30px] lg:text-[20px] lg:w-[448px]">All of our furniture uses the best materials and choices for our customers.All of our furniture uses the best materials </p>
                <button className="mainbtn px-8 py-[10px] bg-white mb-10">Explore More</button>
            </div>
            <Image src='/rasm1.png' width={309} height={326} alt="x" className="mx-auto lg:order-[-1] lg:h-full lg:m-0"/>
        </div>





        <div className="mt-[61px] mb-[98px]  text-center">
          <h2 className="by mb-[26px] lg:text-[32px]">Trusted by 20,000+ companies</h2>
          <div className="flex justify-between px-[5px]">
            <Image src='/next.svg' alt="" width={31} height={24}/>
            <Image src='/vercel.svg' alt="" width={79} height={24}/>
            <Image src='/uber.svg' alt="" width={57} height={24}/>
            <Image src='/paypal.svg' alt="" width={70} height={24}/>
            <Image src='/viza.svg' alt="" width={67} height={24}/>
          </div>
        </div>


      <div className="px-6 lg:flex lg:gap-[100px]">
        <div>
          <h2 className="about lg:text-[32px]">About Us</h2>
          <p className="all w-[322px] mt-4 mb-[30px] lg:text-[20px]">All of our furniture uses the best materials and choices for our customers.All of our furniture uses the best materials </p>
          <div className="flex gap-4 items-start">
              <Image src='/tg.svg' alt="" width={28} height={28}/>
              <div>
                <h3 className="best lg:text-[20px]">Best Quality</h3>
                <p className="bestAll w-[151px] mb-5 mt-1 lg:text-[18px]">All of our furniture uses the best materials and choices</p>
              </div>
          </div>
          <div className="flex gap-4 items-start">
              <Image src='/tg2.svg' alt="" width={28} height={28}/>
              <div>
                <h3 className="best lg:text-[20px]">100% Secure</h3>
                <p className="bestAll w-[151px] mb-5 mt-1 lg:text-[18px]">All of our furniture uses the best materials and choices</p>
              </div>
          </div>
          <div className="flex gap-4 items-start">
              <Image src='/tg3.svg' alt="" width={28} height={28}/>
              <div>
                <h3 className="best lg:text-[20px]">Free Shipping</h3>
                <p className="bestAll w-[151px] mb-5 mt-1 lg:text-[18px]">All of our furniture uses the best materials and choices</p>
              </div>
          </div>
        </div>
        <Image src='/img.png' alt="" width={332} height={321} className="mx-auto lg:order-[-1] lg:m-0 lg:w-[596px]"/>

      </div>



      <div className="px-6 mt-[60px]" >
        <h2 className="about lg:text-[32px]">Our Popular Furniture</h2>
        <p className="all lg:text-[20px] lg:w-[800px]">All of our furniture uses the best materials and choices for our customers.All of our furniture uses the best materials and choices for our customers.</p>
      </div>





      <div className="flex">
      <div className=" mt-[60px] mx-6 shadow-md">
        <div>
          <Image src='/chair.png' alt="" width={300} height={250} className="w-full px-6"/>
        </div>
        <div className="shadow-2xl">
            <div className="flex px-6 justify-between items-center mt-[30px]">
              <h2 className="about">White Swan Chair </h2>
            <div className="flex gap-2">
            <div className="w-[18px] h-[18px] bg-[#EF5423] rounded-full flex justify-center items-center"><Image src='/yurak.svg' alt="" width={10} height={10}/></div>  
                <div className="w-[18px] h-[18px] bg-[#ECF4FF] rounded-full flex justify-center items-center"><Image src='/menu.svg' alt="" width={10} height={10}/></div>  
            </div>
            </div>
            <div className="flex justify-between px-6 mt-5 pb-7">
              <h1 className="a40">$40</h1>
              <button className="px-[14px] py-[5px] bg-black buy">Buy Now</button>
            </div>
        </div>
      </div>      <div className=" mt-[60px] mx-6 shadow-md hidden lg:block">
        <div>
          <Image src='/chair.png' alt="" width={300} height={250} className="w-full px-6"/>
        </div>
        <div className="shadow-2xl">
            <div className="flex px-6 justify-between items-center mt-[30px]">
              <h2 className="about">White Swan Chair </h2>
            <div className="flex gap-2">
            <div className="w-[18px] h-[18px] bg-[#EF5423] rounded-full flex justify-center items-center"><Image src='/yurak.svg' alt="" width={10} height={10}/></div>  
                <div className="w-[18px] h-[18px] bg-[#ECF4FF] rounded-full flex justify-center items-center"><Image src='/menu.svg' alt="" width={10} height={10}/></div>  
            </div>
            </div>
            <div className="flex justify-between px-6 mt-5 pb-7">
              <h1 className="a40">$40</h1>
              <button className="px-[14px] py-[5px] bg-black buy">Buy Now</button>
            </div>
        </div>
      </div>   
         <div className=" mt-[60px] mx-6 shadow-md hidden lg:block">
        <div>
          <Image src='/chair.png' alt="" width={300} height={250} className="w-full px-6"/>
        </div>
        <div className="shadow-2xl">
            <div className="flex px-6 justify-between items-center mt-[30px]">
              <h2 className="about">White Swan Chair </h2>
            <div className="flex gap-2">
            <div className="w-[18px] h-[18px] bg-[#EF5423] rounded-full flex justify-center items-center"><Image src='/yurak.svg' alt="" width={10} height={10}/></div>  
                <div className="w-[18px] h-[18px] bg-[#ECF4FF] rounded-full flex justify-center items-center"><Image src='/menu.svg' alt="" width={10} height={10}/></div>  
            </div>
            </div>
            <div className="flex justify-between px-6 mt-5 pb-7">
              <h1 className="a40">$40</h1>
              <button className="px-[14px] py-[5px] bg-black buy">Buy Now</button>
            </div>
        </div>
      </div>     
      

      </div>







        <div className="mt-[116px] flex px-6 justify-between lg:justify-center lg:flex-col">
          <h2 className="about lg:text-[32px] text-center ">All Furniture</h2>
          <select name="" id="" className="lg:hidden">
            <option value="">Shop By Room</option>
            <option value="">Shop By Category</option>
            <option value="">Shop By Style</option>
          </select>
          <div className="lg:flex justify-around hidden">
            <h2 className="by3 border-b-2 border-black">Shop By Room</h2>
            <h2 className="by2">Shop By Category</h2>
            <h2 className="by2">Shop By Style</h2>
          </div>
        </div>


        <div className="px-6 mt-[60px] lg:flex">
        <div className="flex flex-wrap gap-5  justify-center mr-5 py-2 pb-5 lg:order-3 lg:ml-[147px]">
                  <div className="w-[150px] h-[70px] lg:w-[222px] lg:h-[90px] border-[2px] border-[#D9DCE5] border-solid flex  flex-col justify-center items-center">
                  <Image src='/li.svg' alt="" width={28} height={28}/>
                  <h2 className="olti">Living Room</h2>
                  </div>
                  <div className="w-[150px] h-[70px] lg:w-[222px] lg:h-[90px] border-[2px]  border-[#D9DCE5] border-solid flex  flex-col justify-center items-center">
                  <Image src='/tg.svg' alt="" width={28} height={28}/>
                  <h2 className="olti">Kitchen</h2>
                  </div>
                  <div className="w-[150px] h-[70px] lg:w-[222px] lg:h-[90px] border-[2px] text-white border-[#D9DCE5] border-solid flex  flex-col justify-center items-center">
                  <Image src='/osh.svg' alt="" width={28} height={28}/>
                  <h2 className="olti">Kitchen</h2>
                  </div>
                  <div className="w-[150px] h-[70px] lg:w-[222px] lg:h-[90px] border-[2px] border-[#D9DCE5] bg-black border-solid flex  flex-col justify-center items-center">
                  <Image src='/of.svg' alt="" width={28} height={28}/>
                  <h2 className="olti ">Office</h2>
                  </div>
                  <div className="w-[150px] h-70px] lg:w-[222px] lg:h-[90px] border-[2px] border-[#D9DCE5] border-solid flex  flex-col justify-center items-center">
                  <Image src='/rm.svg' alt="" width={28} height={28}/>
                  <h2 className="olti">Dining Room</h2>
                  </div>
                  <div className="w-[150px] h-[70px] lg:w-[222px] lg:h-[90px] border-[2px] border-[#D9DCE5] border-solid flex  flex-col justify-center items-center">
                  <Image src='/hal.svg' alt="" width={28} height={28}/>
                  <h2 className="olti">Living Room</h2>
                  </div>
          </div>
          <div>
          <Image src='/offise.png' alt="" width={300} height={300} className="w-full block lg:w-[952px] lg:h-[389px]"/>
          </div>

           
        </div>





    </div>
  )
}

export default Main