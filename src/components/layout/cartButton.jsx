import CartIcon from "./cartIcon";

export default function CartButton(props) {
  let count;
  props.count == null ? (count = "0") : (count = props.count);

  return (
    <button className="rounded-3xl bg-[#191A1C52] text-[white] flex gap-3 p-2 items-center">
      <span>
        <CartIcon />
      </span>
      <span className="font-bold">
        <p>Your Cart</p>
      </span>
      <span className="px-3 py-3 text-xs bg-sec rounded-3xl">
        <p>{count}</p>
      </span>
    </button>
  );
}
