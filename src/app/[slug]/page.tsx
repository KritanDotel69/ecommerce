import Add from "@/Components/Add"
import CustomizeProd from "@/Components/CustomizeProd"
import ProductImages from "@/Components/ProductImages"

const Singlepage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* {image} */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
     <ProductImages/>
      </div>
      {/* {text} */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
     <h1 className="text-4xl font-medium">Product Name </h1>
     <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo dicta quia reprehenderit consequatur blanditiis, tempora iusto cumque esse accusantium velit.</p>
     <div className="h-[2px] bg-gray-100"/>
     <div className="flex items-center gap-4">

      <h3 className="text-xl text-gray-500 line-through">$40</h3>
      <h2 className="font-medium text-2xl ">$30</h2>
     </div>

     <div className="h-[2px] bg-gray-100"/>
     <CustomizeProd/>
     <Add/>
     
     <div className="h-[2px] bg-gray-100"/>
     <div className="text-sm">
      <h4 className="font-medium mb-4">Title</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ipsum quibusdam, tempore laudantium necessitatibus aliquid delectus quam laborum accusamus. </p>
     </div>

     
     <div className="text-sm">
      <h4 className="font-medium mb-4">Title</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ipsum quibusdam, tempore laudantium necessitatibus aliquid delectus quam laborum accusamus. </p>
     </div>

     <div className="text-sm">
      <h4 className="font-medium mb-4">Title</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ipsum quibusdam, tempore laudantium necessitatibus aliquid delectus quam laborum accusamus. </p>
     </div>



     </div>


    </div>
  )
}

export default Singlepage
