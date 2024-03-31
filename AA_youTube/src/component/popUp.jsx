import Close from "/src/assets/close.svg";
import SideAlert from "./sideAlert";
import "./component.css";

function PopUp({
  css,
  Title,
  Click,
  setClick,
  Section,
  misData,
  error,
  note,
  color,
}) {
  return (
    <main
      className={`${
        Click ? "flex animationAdd" : "hidden animationRemove"
      } absolute inset-0 backdrop-blur items-center justify-center`}
    >
      <section
        className={`${css} relative border pb-5 bg-white shadow rounded-lg`}
      >
        <button
          onClick={() => setClick(false)}
          className="absolute right-3 top-2 rounded-full hover:bg-gray-200 transition-all duration-300 hover:scale-110"
        >
          <img className="h-8 opacity-30" src={Close} alt="Close" />
        </button>
        <div className="text-3xl text-gray-700 font-bold px-5 pt-4 cursor-pointer">
          {Title}
        </div>
        {Section}
      </section>

      {misData && <SideAlert icon={error} note={note} color={color} />}
    </main>
  );
}

export default PopUp;
