export default function Header() {
  return (
    <main className="border-e py-5 flex items-center justify-center bg-gray-600">
      <div></div>
      <div>
        <nav className="text-white">
          <ul className="flex gap-2">
            <li className="cursor-pointer py-1 px-4 border rounded-full">
              <a href="">Home</a>
            </li>
            <li className="cursor-pointer py-1 px-4">
              <a href="">Main</a>
            </li>
            <li className="cursor-pointer py-1 px-4">
              <a href="">About</a>
            </li>
            <li className="cursor-pointer py-1 px-4">
              <a href="">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
      <div></div>
    </main>
  );
}
