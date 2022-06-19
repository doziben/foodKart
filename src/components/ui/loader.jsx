export default function Loader() {
  return (
    <div className="flex justify-center items-center">
      <div
        className="animate-pulse inline-block w-10 h-10 bg-pry rounded-full opacity-0"
        role="status"
      >
        <span className="visually-hidden"></span>
      </div>
    </div>
  );
}
