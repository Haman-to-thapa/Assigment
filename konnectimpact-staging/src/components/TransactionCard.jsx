export default function TransactionCard({ date, action, points }) {
  const isPositive = points > 0;

  return (
    <li className="p-4 bg-neutral-light dark:bg-gray-700 rounded-2xl shadow-card flex justify-between items-center transition hover:shadow-md">
      <div className="text-sm text-gray-500 dark:text-gray-400 font-roboto">{date}</div>
      <div className="text-base font-medium text-gray-800 dark:text-gray-100 font-montserrat">
        {action}
      </div>
      <div
        className={`text-base font-bold ${isPositive ? 'text-primary' : 'text-red-500'
          } font-roboto`}
      >
        {isPositive ? `+${points}` : points}
      </div>
    </li>
  );
}