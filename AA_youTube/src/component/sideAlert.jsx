import "./component.css";

function SideAlert({ icon, note, color }) {
  return (
    <main
      className={`absolute bg-white right-5 top-14 border shadow rounded px-4 py-2 opacity-80`}
    >
      <div className="flex items-center justify-center gap-2">
        <img className="h-4 md:h-5 mt-2" src={icon} />
        <p className="text-sm md:text-md">{note}</p>
      </div>
      <div className={`${color} h-1 border sideNote mt-2 rounded`}></div>
    </main>
  );
}

export default SideAlert;
