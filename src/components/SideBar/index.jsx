import { Link } from "react-router-dom"
import Logo from '../../assets/Logo.svg'
import { IoHomeOutline } from "react-icons/io5";
import { BiGridAlt } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { RiAccountBoxLine } from "react-icons/ri";




const SideBar = () => {
  return (
    <aside className="bg-[#161717] text-gray-200 w-64 min-h-screen max-w-28 fixed left-0 top-0 z-50">
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4 nav-icon">
            <img src={Logo} alt="Logo da empresa" />
        </h2>
        <div className="flex justify-center">
            <ul className="flex flex-col items-center">
                <li className="mb-3">
                    <Link to="/dashboard" className="nav-icon">
                    <div className="my-6 rounded-s-3xl h-12 flex items-center hover:bg-[#000000]">
                        <IoHomeOutline className="w-[106px]" size={30} />
                    </div>
                    </Link>
                </li>
                <li className="mb-3">
                    <Link to="/dashboard" className="nav-icon">
                    <div className="my-6 rounded-s-3xl h-12 flex items-center hover:bg-[#000000]">
                        <BiGridAlt className="w-[106px]" size={30} />
                    </div>
                    </Link>
                </li>
                <li className="mb-3">
                    <Link to="/dashboard" className="nav-icon">
                    <div className="my-6 rounded-s-3xl h-12 flex items-center hover:bg-[#000000]">
                        <RiAccountBoxLine className="w-[106px]" size={30} />
                    </div>
                    </Link>
                </li>
                <li className="mb-3">
                    <Link to="/dashboard" className="nav-icon">
                    <div className="my-6 rounded-s-3xl h-12 flex items-center hover:bg-[#000000]">
                        <IoSettingsOutline className="w-[106px]" size={30} />
                    </div>
                    </Link>
                </li>
            </ul>

        </div>
      </div>
    </aside>
  )
}

export default SideBar
