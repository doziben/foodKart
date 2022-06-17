import AddIcon from "../layout/addIcon";
import RemoveIcon from "../layout/removeIcon";
import { useState, useRef } from "react";

const styles = `
 bg-[#fafafa] p-1 border border-[#00000012] hover:bg-[#EDEDED]
`;
export default function Counter(props) {
  let inputRef = useRef();
  const [count, setCount] = useState("0");
  const parseCount = () => {
    props.countHandler();
  };

  return (
    <div className="flex justify-between gap-3">
      <button className={styles}>
        <RemoveIcon />
      </button>
      <input
        min="1"
        className="max-w-[5ch] border border-[#00000012] text-center focus:outline-none focus:border-pry"
        type="number"
        name="amount"
        placeholder="1"
        ref={inputRef}
      />
      <button className={styles}>
        <AddIcon />
      </button>
    </div>
  );
}
