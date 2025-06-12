import TransactionHistory from "../../config/TransactionHistory";
import "./app.css"; // Ensure Tailwind and global styles are imported
import Header from "../../page/Header"; // Assuming you have a Header component
import Footer from "../../page/TransactionFooter"; // Assuming you have a Footer component
function TranstionDaivesh() {
  return (
    <div className="min-h-screen bg-neutral-dark-gray text-neutral-light-gray flex flex-col">
      {/* Header would go here if un-commented */}
      <Header />
      <main className="flex-grow w-full px-4 sm:px-6 lg:px-8 py-8">
        <TransactionHistory />
      </main>
      {/* Footer would go here if un-commented */}
      <Footer />
    </div>
  );
}

export default TranstionDaivesh;