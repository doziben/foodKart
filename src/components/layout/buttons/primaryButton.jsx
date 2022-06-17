export default function PrimaryButton(props) {
  return (
    <button
      className="px-4 py-2 mt-2 text-[white] rounded-lg text-xs font-bold bg-pry hover:bg-[#4D7B2E]"
      onClick={props.onClick}
    >
      {props.name}
    </button>
  );
}
