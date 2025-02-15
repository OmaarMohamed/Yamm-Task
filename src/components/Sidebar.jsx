const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white h-full p-4">
      <h2 className="text-lg font-bold">Dashboard</h2>
      <ul>
        <li className="mt-4">
          <a href="/" className="hover:text-gray-300">
            Refund Orders
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
