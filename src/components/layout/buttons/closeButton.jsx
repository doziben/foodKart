export default function CloseButton(props) {
  return (
    <button
      className="px-4 py-2 mt-2 border border-sec text-sec rounded-lg text-xs font-bold bg-[white] hover:bg-[#EDEDED]"
      onClick={props.onClick}
    >
      {props.name}
    </button>
  );
}
