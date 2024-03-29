
const RevenueField = () => {
    const revenueData = [
      { month: 'Jan', amount: 10000 },
      { month: 'Feb', amount: 15000 },
      { month: 'Mar', amount: 20000 },
    ];

    const totalRevenue = revenueData.reduce((total, revenue) => total + revenue.amount, 0)
  
    return (
      <div className="bg-[#f3a0ff] h-40 w-72 p-4 rounded-3xl shadow ">
        <h2 className="text-2xl font-semibold mb-12">Faturamento</h2>
        <ul>
          <li className="flex justify-between py-2 border-b border-gray-200 text-lg">
            R$ {totalRevenue}
          </li>
        </ul>
      </div>
    );
  };
  
  export default RevenueField;