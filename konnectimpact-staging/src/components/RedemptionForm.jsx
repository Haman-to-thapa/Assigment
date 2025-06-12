import { useState } from "react";

function RedemptionForm() {
  const [reward, setReward] = useState("");
  const [quantity, setQuantity] = useState("");
  const [message, setMessage] = useState("");
  const [progress, setProgress] = useState(0);

  const rewards = [
    "Plant a Tree",
    "Clean Water Donation",
    "Education Kit",
    "Food Pack",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!reward || !quantity) {
      alert("Please select a reward and enter a valid quantity.");
      return;
    }

    try {
      const response = await fetch("/api/redeem", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reward, quantity }),
      });

      if (response.ok) {
        setMessage(`✅ You redeemed ${quantity} points for "${reward}".`);
        setProgress((prev) => Math.min(prev + 20, 100));
        setReward("");
        setQuantity("");
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Network error. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white max-w-md w-full mx-4 p-6 rounded-lg shadow-md hover:shadow-lg transition">
        <h2 className="text-2xl font-bold font-[Montserrat] text-[#00897B] mb-6">
          Redeem or Donate Points
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-semibold mb-1 font-[Roboto]">
              Select Reward:
            </label>
            <select
              value={reward}
              onChange={(e) => setReward(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00897B]"
            >
              <option value="">-- Select Reward --</option>
              {rewards.map((item, idx) => (
                <option key={idx} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block font-semibold mb-1 font-[Roboto]">
              Quantity:
            </label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              min="1"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00897B]"
            />
          </div>

          <div className="flex gap-3">
            <button
              type="submit"
              className="bg-[#00897B] text-white font-semibold py-2 px-4 rounded hover:bg-teal-700 transition w-full"
            >
              Confirm
            </button>
            <button
              type="button"
              className="border border-[#00897B] text-[#00897B] font-semibold py-2 px-4 rounded hover:bg-[#00897B] hover:text-white transition w-full"
              onClick={() => {
                setReward("");
                setQuantity("");
                setMessage("");
                setProgress(0);
              }}
            >
              Cancel
            </button>
          </div>
        </form>

        <div className="mt-6">
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-[#CDDC39] h-3 rounded-full transition-all duration-700"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {message && (
          <p className="mt-4 text-red-800 font-semibold font-[Roboto]">
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

export default RedemptionForm;