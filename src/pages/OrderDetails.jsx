import { Link, useParams } from "react-router-dom";
import ordersData from "../api/orders";

const OrderDetail = () => {
  const { id } = useParams();
  const order = ordersData.find((order) => order.id === id);

  if (!order) return <p>Order not found</p>;

  return (
    <div className="p-6 bg-gray-800 rounded-lg shadow-md text-white">
      <h2 className="text-xl font-semibold mb-4">Order Details - {order.id}</h2>
      <p>
        <strong>Reason:</strong> {order.reason}
      </p>
      <p>
        <strong>Store:</strong> {order.store_name}
      </p>
      <p>
        <strong>Amount:</strong> ${order.amount.toFixed(2)}
      </p>
      <h3 className="mt-4 text-lg font-semibold">Items</h3>
      <ul>
        {order.items.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} x {item.quantity}
          </li>
        ))}
      </ul>
      <Link
        to={"/"}
        className="inline-block mt-5 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-md shadow-md transition duration-300"
      >
        ← Back
      </Link>
    </div>
  );
};

export default OrderDetail;
