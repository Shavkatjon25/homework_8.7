import Image from "next/image"


function Main2() {
  return (
    <div className="px-6 lg:px-[120px]">

        <div className="mt-20 lg:flex lg:gap-[100px] lg:items-center">
            <div className="lg:order-3 lg:w-[535px]">
            <h2 className="our lg:text-[32px]">Our customers are verry importan to us</h2>
            <p className="oup lg:text-[20px] lg:mt-5 lg:mb-11" >All of our furniture uses the best materials and choices for our customers.All of our furniture uses the best materials and choices for our customers.</p>
            <div className="flex gap-2">
                <Image src='/oo.png' alt="" width={50} height={50}/>
                <div>
                    <h3>Mh Jibon</h3>
                    <p>⭐ 4.8</p>
                </div>
            </div>
            </div>
            <Image src='/sh.png' alt="" width={50} height={250} className="w-full mt-6 lg:w-[459px]"/>
        </div>


        <div className="bg-[#F4F6F6] text-center px-2 py-4 my-[70px] lg:pt-[68px] lg:px-[279px] lg:pb-[55px] lg:flex lg:flex-col lg:items-center">
            <h2 className="our">Subscribe to get the latest news about us</h2>
            <p className="oup lg:mt-5 lg:mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore at dolore.</p>
            <div className="flex px-5 py-2 items-center bg-white lg:w-[471px] lg:justify-between">
                <input type="email" placeholder="Enter your email" className="h-full" />  
                <button className="px-8 py-[15px] bg-[#305F64] text-white">Register</button>

            </div>
        </div>


    </div>
  )
}

export default Main2