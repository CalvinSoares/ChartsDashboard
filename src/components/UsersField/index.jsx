const UsersField = () => {
    const UsersData = [
      { name: 'calvin', amount: 700 },
      { name: 'jose asis', amount: 500 },
      { name: 'fernando', amount: 300 },
    ];

    const totalUsers = UsersData.length
  
    return (
      <div className="bg-[#fad85d] h-40 w-72 p-4 rounded-3xl shadow">
        <h2 className="text-2xl font-semibold mb-12">Usuarios</h2>
        <ul>
            <li className="flex justify-between py-2 border-b border-gray-200 text-lg">
                <span>{totalUsers}</span>
            </li>
        </ul>
      </div>
    );
  };
  
  export default UsersField;