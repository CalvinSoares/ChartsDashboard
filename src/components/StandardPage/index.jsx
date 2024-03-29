import { Outlet } from "react-router-dom"
import SideBar from "../SideBar"

const StandardPage = () => {
  return (
    <>
     <SideBar />
     <Outlet /> 
    </>
  )
}

export default StandardPage
