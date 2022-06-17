import Card from "../ui/card";
export default function Modal(props) {
  return (
    <>
      <div className="animate-slide fixed top-[20vh] z-30 left-[20%] right-[20%]">
        <Card>{props.children}</Card>
      </div>
      <div className="fixed w-full h-screen z-20 bg-[#191A1C33] left-0 top-0"></div>
    </>
  );
}
