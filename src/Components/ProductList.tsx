"use client"

import Image from "next/image"
import Link from "next/link"

const ProductList = () => {
  return (
    <div className=" mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
      <div className="relative w-full h-80">

      <Image src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhlc3xlbnwwfHwwfHx8Mg%3D%3D" alt="" fill sizes="25vw" className= " absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
      />

      <Image src="https://images.unsplash.com/photo-1509319117193-57bab727e09d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdGhlc3xlbnwwfHwwfHx8Mg%3D%3D" alt="" fill sizes="25vw" className= " absolute object-cover rounded-md"
      />
      </div>
      <div className="flex justify-between">
        <span className="medium">Product Name</span>
        <span className="font-semibold">$121</span>
      </div>
      <div className="text-sm text-gray-500">My Description  </div>
        <button className="rounded-2xl ring-1 ring-Kritan text-Kritan w-max py-2 px-4 text-xs hover:bg-Kritan hover:text-white">Add to Cart</button>
      </Link>


      
      <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
      <div className="relative w-full h-80">

     <Image src="https://images.unsplash.com/photo-1540221652346-e5dd6b50f3e7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNsb3RoZXN8ZW58MHx8MHx8fDI%3D" alt="" fill sizes="25vw" className= " absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
      /> 

      <Image src="https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNsb3RoZXN8ZW58MHx8MHx8fDI%3D" alt="" fill sizes="25vw" className= " absolute object-cover rounded-md"
      /> 
      </div>
      <div className="flex justify-between">
        <span className="medium">Product Name</span>
        <span className="font-semibold">$121</span>
      </div>
      <div className="text-sm text-gray-500">My Description  </div>
        <button className="rounded-2xl ring-1 ring-Kritan text-Kritan w-max py-2 px-4 text-xs hover:bg-Kritan hover:text-white">Add to Cart</button>
      </Link>


      <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
      <div className="relative w-full h-80">

      <Image src="https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGNsb3RoZXN8ZW58MHx8MHx8fDI%3D" alt="" fill sizes="25vw" className= " absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
      />

      <Image src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D" alt="" fill sizes="25vw" className= " absolute object-cover rounded-md"
      />
      </div>
      <div className="flex justify-between">
        <span className="medium">Product Name</span>
        <span className="font-semibold">$121</span>
      </div>
      <div className="text-sm text-gray-500">My Description  </div>
        <button className="rounded-2xl ring-1 ring-Kritan text-Kritan w-max py-2 px-4 text-xs hover:bg-Kritan hover:text-white">Add to Cart</button>
      </Link>


      <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
      <div className="relative w-full h-80">

      <Image src="https://images.unsplash.com/photo-1524275539700-cf51138f679b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8" alt="" fill sizes="25vw" className= " absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
      />

      <Image src="https://images.unsplash.com/photo-1571455786673-9d9d6c194f90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fGNsb3RoZXN8ZW58MHx8MHx8fDI%3D" alt="" fill sizes="25vw" className= " absolute object-cover rounded-md"
      />
      </div>
      <div className="flex justify-between">
        <span className="medium">Product Name</span>
        <span className="font-semibold">$121</span>
      </div>
      <div className="text-sm text-gray-500">My Description  </div>
        <button className="rounded-2xl ring-1 ring-Kritan text-Kritan w-max py-2 px-4 text-xs hover:bg-Kritan hover:text-white">Add to Cart</button>
      </Link>



    </div>
  )
}

export default ProductList
