export default function Card(props) {
  return (
    <div className="shadow-lg m-auto bg-[white] mt-6  py-10 px-10 relative max-w-2xl  rounded-2xl">
      {props.children}
    </div>
  );
}
