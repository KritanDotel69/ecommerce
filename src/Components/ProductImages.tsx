"use client"
import Image from "next/image"
import { useState } from "react"


const images = [
  {
    id:1,
    url:"https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGNsb3RoZXN8ZW58MHx8MHx8fDI%3D "
  },
  {
    id:2,
    url:"https://images.unsplash.com/photo-1551488831-68b4d0c92c13?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGNsb3RoZXN8ZW58MHx8MHx8fDI%3D "
  },
  {
    id:3,
    url:"https://images.unsplash.com/photo-1560060141-7b9018741ced?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fGNsb3RoZXN8ZW58MHx8MHx8fDI%3D "
  },
  {
    id:4,
    url:"https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fGNsb3RoZXN8ZW58MHx8MHx8fDI%3D "
  },
]



const ProductImages = () => {

const [index,setIndex] = useState(0)

  return (
    <div className="">
     <div className="h-[500px] relative">
      <Image src={images[index].url} alt="" 
      fill
      sizes="50vw" 
      className="object-contain rounded-md" />
     </div>


     <div className=" flex justify-between gap-4 mt-8 cursor-pointer">

      {images.map((img,i) => (
         <div className=" w-1/4 h-32 relative gap-4 mt-8" key={img.id} onClick={() => setIndex(i)} >
         <Image src={img.url} alt="" 
          fill
          sizes="30vw" 
          className="object-cover rounded-md" />
          </div>
      ))}
     </div>


    </div>
  )
}

export default ProductImages
