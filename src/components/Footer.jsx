import { NavLink } from "react-router-dom"

function Footer() {
  return (
    <footer className="bg-primary py-8 text-white ">
            <div className="flex justify-between max-w-[90%] lg:max-w-5xl mx-auto ">

                <div>
                    Copyright &#169; - MasterIT Store
                </div>
                <div className="flex gap-4">
                    <NavLink ot="" className="">Home</NavLink>
                    <NavLink ot="" className="">Contact Us</NavLink>
                    <NavLink ot="" className="">About Us</NavLink>
                    <NavLink ot="" className="">Term and conditional</NavLink>
                </div>
            </div>
        </footer>
  )
   
}

export default Footer

