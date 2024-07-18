import Link from "next/link"
import Menu from "./Menu"

const Navbar = () => {
  return (
    <div className='h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative'>
        {/* {mobile} */}
      <div className="h-full flex items-center justify-between">
      <Link href={"/"}>
      <div className="text-2xl tracking-wide">KiNAM</div>
      </Link>
      <Menu/>
      </div>

{/* {bigger screen} */}

<div className="hidden md:flex items-center justify-between gap-8 h-full">
  {/* {Left} */}
<div className="w-1/3">
<Link href="/"></Link>
<img src="/logo.png" alt="" width={24}  height={24}/>
<div className="text-2xl tracking-wide">KiNAM</div>
</div>

  {/* {Right} */}
<div className="w-2/3"></div>

</div>
    </div>
  )
}

export default Navbar
