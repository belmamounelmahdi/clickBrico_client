/* eslint-disable jsx-a11y/alt-text */

import { faChevronLeft, faUser, faUsers } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { Link } from "react-router-dom"
import logo from '../assets/LogoClickBrico.png'

function SideBar() {
    const [open, setOpen] = useState(false)
    return (
    <div className='flex'>
        <div className={`${open ? "w-72" : "w-20"} p-5 pt-8 duration-300 h-screen relative `}>
            <div onClick={() => setOpen(!open)} className={`absolute cursor-pointer -right-3 top-9 w-7 border-2 bg-white border-gray-500 rounded-full ${!open && "rotate-180"}`}>
            <FontAwesomeIcon className='ml-1' icon={faChevronLeft}  />
            </div>
            <div className='flex gap-x-4 items-center'>
                <img src={logo} className={`cursor-pointer duration-500 w-28 ${open && "rotate-[360deg]"}`} />
            <h1 className={`text-black origin-left font-medium text-xl duration-300 ${!open && "scale-0"}`} >
                Paramétres
            </h1>
            </div>
            <ul className='pt-6'>
                <Link to='/utilisateurs'>
                <li className={`text-gray-600 text-md flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-100 rounded-md`}>
                    <FontAwesomeIcon icon={faUsers} />
                    <span className={`${!open && 'hidden'} origin-left duration-200`}>
                        Utilisiteurs
                    </span>
                </li>
                </Link>
                <li className={`text-gray-600 text-md flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-100 rounded-md`}>
                    <FontAwesomeIcon icon={faUser} />
                    <span className={`${!open && 'hidden'} origin-left duration-200`}>
                        Test
                    </span>
                </li>
                <li className={`text-gray-600 text-md flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-100 rounded-md`}>
                    <FontAwesomeIcon icon={faUser} />
                    <span className={`${!open && 'hidden'} origin-left duration-200`}>
                        Test
                    </span>
                </li>
                <li className={`text-gray-600 text-md flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-100 rounded-md`}>
                    <FontAwesomeIcon icon={faUser} />
                    <span className={`${!open && 'hidden'} origin-left duration-200`}>
                        Test
                    </span>
                </li>
                <li className={`text-gray-600 text-md flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-100 rounded-md`}>
                    <FontAwesomeIcon icon={faUser} />
                    <span className={`${!open && 'hidden'} origin-left duration-200`}>
                        Test
                    </span>
                </li>
                <li className={`text-gray-600 text-md flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-100 rounded-md`}>
                    <FontAwesomeIcon icon={faUser} />
                    <span className={`${!open && 'hidden'} origin-left duration-200`}>
                        Test
                    </span>
                </li>
                <li className={`text-gray-600 text-md flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-100 rounded-md`}>
                    <FontAwesomeIcon icon={faUser} />
                    <span className={`${!open && 'hidden'} origin-left duration-200`}>
                        Test
                    </span>
                </li>
            </ul>
        </div>       
    </div>
    )
}
export default SideBar