'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BiSearch, BiUser } from "react-icons/bi"
import { BsCart } from "react-icons/bs"
import { IoCallOutline } from "react-icons/io5";

export default function Nav() {
  const links = ['Specials', 'Offices', 'Home', 'Kitchen', 'Wood', 'Finishing', 'Workshop', 'Store']
  const Logo = ['D', 'O', 'U', 'G', 'L', 'A', 'S', '-', 'W', 'O', 'O', 'D', 'S']
  const [value, setValue] = useState('')
  const router = useRouter()
  const search = () => {
    if (value.trim() !== '') router.push(`/search?search=${value}`)
    setValue('')
  }

  return (
    <div className="">
      <div className=" navWrapper flex items-center justify-between h-24 ">
        <Link href={'/'} className="flex gap-[2px]">
          {Logo.map((el, key) => (
            <p key={key} className={` font-bold text-2xl
                ${key === 0 && 'text-[red]'}
                ${key === 1 && 'text-[green]'}
                ${key === 2 && 'text-[blue]'}
                ${key === 3 && 'text-[pink]'}
                ${key === 4 && 'text-[purple]'}
                ${key === 5 && 'text-[orange]'}
                ${key === 6 && 'text-[cyan]'}
                ${key === 7 && 'text-black mx-1'}
                ${key > 7 && 'text-[#964B00]'}
                `}>{el}</p>
          ))}
        </Link>
        <div className="h-12 w-[400px] border-gray-500 rounded-lg border-2 relative">
          <input value={value} onChange={(e) => setValue(e.target.value)} type="text" placeholder="Search" className="w-full h-full outline-none px-5 bg-transparent" />
          <div onClick={search} className="absolute group top-1/2 -translate-y-1/2 right-0 h-full w-12 rounded-r-lg cursor-pointer grid place-content-center">
            <BiSearch size={20} className="duration-300 group-hover:scale-125 group-active:scale-100" />
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex items-center text-13 duration-300 hover:text-blue-500 cursor-pointer font-semibold gap-2">
            <IoCallOutline size={25} />
            <p>Contact</p>
          </div>
          |
          <div className="flex items-center text-13 duration-300 hover:text-blue-500 cursor-pointer font-semibold gap-2">
            <BsCart size={25} />
            <p>Cart</p>
          </div>
          <div className="flex items-center text-13 duration-300 hover:text-blue-500 cursor-pointer font-semibold gap-2">
            <BiUser size={25} />
            <p>Account</p>
          </div>


        </div>
      </div>
      <div className="navWrapper flex justify-between h-14 items-center border-t-2">
        {links.map((elem, key) => (
          <div key={key} className="">
            <p className=" cursor-pointer text-13 font-semibold duration-300 hover:text-blue-600">{elem}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
