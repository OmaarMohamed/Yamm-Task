import { useState } from "react";
import TableRow from "./TableRow";
import toast from "react-hot-toast";
import ordersData from "../api/orders";

const OrdersTable = () => {
  const [orders, setOrders] = useState(ordersData);

  const toggleStatus = (id) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id ? { ...order, active: !order.active } : order
      )
    );
    toast.success("Order status updated");
  };

  const updateDecision = (id, decision) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id ? { ...order, decision } : order
      )
    );
    toast.success(`Order decision updated to ${decision}`);
  };

  return (
    <div className="p-6 bg-gray-900 rounded-lg shadow-lg text-white">
      <h2 className="text-2xl font-semibold mb-4">Refund Orders</h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          {/* Table Header */}
          <thead className="bg-gray-800">
            <tr>
              {[
                "ID",
                "Reason",
                "Store",
                "Amount",
                "Items",
                "Status",
                "Decision",
                "Actions",
              ].map((heading) => (
                <th
                  key={heading}
                  className="p-3 text-left text-gray-300 border-b border-gray-700"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="bg-gray-900">
            {orders.map((order) => (
              <TableRow
                key={order.id}
                order={order}
                toggleStatus={toggleStatus}
                updateDecision={updateDecision}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersTable;
