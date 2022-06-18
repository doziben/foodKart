import AddIcon from "../layout/addIcon";
import RemoveIcon from "../layout/removeIcon";
import { useState, useRef, useEffect } from "react";

const styles = `
 bg-[#fafafa] p-1 border border-[#00000012] hover:bg-[#EDEDED]
`;
export default function Counter(props) {
  let inputRef = useRef();
  const [count, setCount] = useState(1);
  const isMounted = useRef(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      isMounted.current
        ? props.countHandler(count)
        : (isMounted.current = true);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [count]);

  let value = inputRef.current;
  const minusCount = () => {
    value.valueAsNumber > 1 &&
      setCount((prevCount) => {
        return prevCount - 1;
      });
  };

  const addCount = () => {
    setCount((prevCount) => {
      return parseInt(prevCount) + 1;
    });
  };

  const customCount = () => {
    setCount(value.valueAsNumber);
  };

  return (
    <div className="flex justify-between gap-3">
      <button onClick={minusCount} className={styles}>
        <RemoveIcon />
      </button>

      <input
        min="1"
        onChange={customCount}
        className="max-w-[5ch] border border-[#00000012] text-center focus:outline-none focus:border-pry"
        type="number"
        name="amount"
        placeholder="1"
        ref={inputRef}
        value={count}
      />

      <button onClick={addCount} className={styles}>
        <AddIcon />
      </button>
    </div>
  );
}
