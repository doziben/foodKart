import Counter from "./counter";

export default function Meal(props) {
  const price = `$${props.price}`;
  const countHandler = (count) => {
    return count;
  };

  return (
    <li>
      <div className="flex mt-4 mb-4 justify-between border border-x-[#fff] border-t-[#fff] pb-3 border-b-[#00000012]">
        <div className="text-left">
          <h2 className="text-xl font-bold">{props.name}</h2>
          <p className="italic">{props.description}</p>
          <h2 className="font-bold text-sec">{price}</h2>
        </div>
        <div className="text-right">
          <Counter countHandler={countHandler} />
          <button className="px-4 py-2 mt-2 text-[white] rounded-lg text-xs font-bold bg-pry hover:bg-[#4D7B2E]">
            + Add
          </button>
        </div>
      </div>
    </li>
  );
}
