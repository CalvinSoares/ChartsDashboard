import Header from "../../components/Header"
import SalesChart from "../../components/Charts";
import SalesField from "../../components/SalesField";
import RevenueField from "../../components/RevenueField";
import LineChart from "../../components/LineBar";
import UsersField from "../../components/UsersField";
import UsersTable from "../../components/Table";

const DashBoard = () => {    
  return (
    <div className="bg-[#242424] h-screen">
      <Header title="Dashboard"/>
      <div className="grid grid-rows-2 grid-flow-col">
        <div className="flex items-center justify-around ml-28 my-8">
          <div>
            <SalesField />
          </div>
          <div>
            <RevenueField />
          </div>
          <div>
            <UsersField />
          </div>
        </div>  
        <div className="flex items-center">
          <div className="bg-[#161717] rounded-3xl w-[480px] ml-40 mx-12">
            <LineChart />
          </div>
          <div>
            <UsersTable />
          </div>        
        </div>
        <aside className="row-span-2 bg-[#161717] rounded-3xl mt-6 mr-4">
          <SalesChart />
        </aside>  
      </div>
    </div>
  )
}

export default DashBoard
