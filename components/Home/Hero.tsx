import { DollarSign, Newspaper } from "lucide-react"
import { BsPhone } from "react-icons/bs"
import { IoCall } from "react-icons/io5"

export default function Hero() {
    return (
        <div className="flex h-full bg-gray-100">
            <div className="flex-1 wrapper p-5 grid grid-cols-2 gap-5 w-80 ">
                <div className="bg-blue-500 shadow-md relative rounded-none">
                    <img src="https://i.pinimg.com/564x/99/72/37/9972375f4086f7e14b04bd783909028c.jpg" className="h-full w-full top-0 left-0 absolute object-cover rounded-none" alt="" />
                </div>
                <div className="grid gap-5 grid-cols-2 grid-rows-2">
                    <div className="bg-emerald-500 relative shadow-md rounded-none">
                        <img src="https://images.unsplash.com/photo-1700973408133-b45276ec8feb?q=80&w=1958&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="h-full w-full top-0 left-0 absolute object-cover rounded-none" alt="" />
                    </div>
                    <div className="bg-gray-100 text-black flex flex-col justify-between text-xl font-normal border-black border-2 rounded-tr-3xl rounded-bl-3xl p-7 shadow-md ">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 grid border-2 border-black rounded-full place-content-center">
                                <IoCall size={25} />
                            </div>
                            <p >Call to Order</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 grid border-2 border-black rounded-full place-content-center">
                                <DollarSign size={25} />
                            </div>
                            <p>Best Deals</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 grid border-2 border-black rounded-full place-content-center">
                                <Newspaper size={25} />
                            </div>
                            <p>New Products</p>
                        </div>
                    </div>
                    <div className="bg-gray-100 relative flex flex-col justify-between text-2xl font-semibold p-7 shadow-md rounded-none">
                       <img src="https://images.pexels.com/photos/5089122/pexels-photo-5089122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="h-full w-full top-0 left-0 absolute object-cover rounded-none"/>
                    </div>
                    <div className="bg-red-500 relative shadow-md rounded-none">
                        <img src="https://i.pinimg.com/564x/b4/d7/25/b4d72553a142d9b380db3500ae10694d.jpg" className="h-full w-full top-0 left-0 absolute object-cover rounded-none" alt="" />
                    </div>

                </div>
            </div>
        </div>
    )
}
