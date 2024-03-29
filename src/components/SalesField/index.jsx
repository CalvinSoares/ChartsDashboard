
const SalesField = () => {
    // Lógica para buscar os dados de vendas
    const salesData = [
      { date: '2022-01-01', amount: 1000 },
      { date: '2022-01-02', amount: 1500 },
      { date: '2022-01-03', amount: 2000 },
      // Mais dados de vendas...
    ];

    const totalSales = salesData.reduce((total, sale) => total + sale.amount, 0)
  
    return (
      <div className="bg-[#0bf4c8] h-40 w-72 p-4 rounded-3xl shadow">
        <h2 className="text-2xl font-semibold mb-12">Vendas</h2>
        <ul>
            <li className="flex justify-between py-2 border-b border-gray-200 text-lg">
                <span>{totalSales}</span>
            </li>
        </ul>
      </div>
    );
  };
  
  export default SalesField;