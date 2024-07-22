"use client"

import Image from "next/image"
import Link from "next/link"

const ProductList = () => {
  return (
    <div className=" mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
      <div className="relative w-full h-80">

      <Image src="https://www.pexels.com/photo/a-white-plate-with-a-flower-and-bread-on-it-25949536/" alt="" fill sizes="25vw" className= " absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
      />

      <Image src="https://www.pexels.com/photo/cakes-on-a-cake-stand-14913583/" alt="" fill sizes="25vw" className= " absolute object-cover rounded-md"
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

      <Image src="https://www.pexels.com/photo/a-white-plate-with-a-flower-and-bread-on-it-25949536/" alt="" fill sizes="25vw" className= " absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
      />

      <Image src="https://www.pexels.com/photo/cakes-on-a-cake-stand-14913583/" alt="" fill sizes="25vw" className= " absolute object-cover rounded-md"
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

      <Image src="https://www.pexels.com/photo/a-white-plate-with-a-flower-and-bread-on-it-25949536/" alt="" fill sizes="25vw" className= " absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
      />

      <Image src="https://www.pexels.com/photo/cakes-on-a-cake-stand-14913583/" alt="" fill sizes="25vw" className= " absolute object-cover rounded-md"
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

      <Image src="https://www.pexels.com/photo/a-white-plate-with-a-flower-and-bread-on-it-25949536/" alt="" fill sizes="25vw" className= " absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
      />

      <Image src="https://www.pexels.com/photo/cakes-on-a-cake-stand-14913583/" alt="" fill sizes="25vw" className= " absolute object-cover rounded-md"
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
