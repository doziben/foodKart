import RemoveIcon from "../layout/removeIcon";
import AddIcon from "../layout/addIcon";

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const styles = `bg-[#fafafa] p-1 border border-[#00000012] max-h-9 hover:bg-[#EDEDED]`;

  return (
    <li>
      <div className="flex mt-4 mb-4 justify-between border border-x-[#fff] border-t-[#fff] pb-3 border-b-[#00000012]">
        <div>
          <h2 className="text-xl font-bold">{props.name}</h2>
          <p className="font-bold text-sec">
            {price} <span className="">x {props.amount}</span>
          </p>
        </div>

        <div className="flex justify-between gap-3">
          <button onClick={props.onRemove} className={styles}>
            <RemoveIcon />
          </button>
          <button onClick={props.onAdd} className={styles}>
            <AddIcon />
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
