export default function Spinner() {
  return (
    <div
      className="flex justify-center items-center"
      role="status"
      aria-label="Loading..."
    >
      <div className="h-6 w-6 border-4 border-primary border-t-transparent rounded-full animate-spin transition-transform duration-500 ease-in-out" />
    </div>
  );
}