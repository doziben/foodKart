import logo from "../../assets/logo.svg";
import heroImg from "../../assets/heroImg.png";
import CartButton from "./cartButton";

export default function Header(props) {
  return (
    <>
      <header className="bg-pry fixed w-full h-20 px-[10%] flex z-10 justify-between items-center">
        <img src={logo} alt="foodKart Logo" />
        <CartButton count="0" />
      </header>
      <div className="w-full h-[25rem] overflow-hidden z-0">
        <img
          className="w-[110%] h-full object-cover translate-x-[-1rem] -translate-y-16 -rotate-[5deg]"
          src={heroImg}
          alt="foodKart Hero Image"
        />
      </div>
    </>
  );
}
