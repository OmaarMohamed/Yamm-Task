import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const TableRow = ({ order, toggleStatus, updateDecision }) => {
  const navigate = useNavigate();

  return (
    <tr className="border border-gray-600">
      {/* Order ID */}
      <td className="border border-gray-600 p-2">{order.id}</td>

      {/* Reason */}
      <td className="border border-gray-600 p-2">{order.reason}</td>

      {/* Store Info with Logo */}
      <td className="border border-gray-600 p-2 flex items-center">
        <img
          src={order.store_logo}
          alt={order.store_name}
          className="w-6 h-6 mr-2 rounded-full border border-gray-500"
        />
        <a
          href={order.store_url}
          className="text-blue-400 hover:text-blue-300 transition duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          {order.store_name}
        </a>
      </td>

      {/* Amount */}
      <td className="border border-gray-600 p-2">${order.amount.toFixed(2)}</td>

      {/* Number of Items */}
      <td className="border border-gray-600 p-2">{order.items.length}</td>

      {/* Toggle */}
      <td className="border border-gray-600 p-2">
        <label className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={order.active}
            onChange={() => toggleStatus(order.id)}
            className="hidden"
          />
          <div
            className={`w-10 h-5 flex items-center rounded-full p-1 transition duration-300 ease-in-out ${
              order.active ? "bg-green-500" : "bg-gray-500"
            }`}
          >
            <div
              className={`w-4 h-4 bg-white rounded-full shadow-md transform transition duration-300 ease-in-out ${
                order.active ? "translate-x-5" : ""
              }`}
            ></div>
          </div>
        </label>
      </td>

      {/* Decision Dropdown */}
      <td className="border border-gray-600 p-2">
        <select
          value={order.decision || "not yet"}
          onChange={(e) => updateDecision(order.id, e.target.value)}
          className="border border-gray-500 bg-gray-900 text-white rounded p-1 hover:bg-gray-800 focus:ring focus:ring-blue-500"
        >
          <option value="not yet">Not Yet</option>
          <option value="reject">Reject</option>
          <option value="accept">Accept</option>
          <option value="escalate">Escalate</option>
        </select>
      </td>

      {/* View Button */}
      <td className="border border-gray-600 p-2">
        <button
          onClick={() => navigate(`/order/${order.id}`)}
          className="text-blue-400 hover:text-blue-300 transition duration-200"
        >
          View
        </button>
      </td>
    </tr>
  );
};

TableRow.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.string.isRequired,
    reason: PropTypes.string.isRequired,
    store_name: PropTypes.string.isRequired,
    store_logo: PropTypes.string.isRequired,
    store_url: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    active: PropTypes.bool.isRequired,
    decision: PropTypes.any,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
      })
    ).isRequired,
  }).isRequired,
  toggleStatus: PropTypes.func.isRequired,
  updateDecision: PropTypes.func.isRequired,
};

export default TableRow;
