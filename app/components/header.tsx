import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <ul className="navigation max-w-[90vw] flex flex-wrap justify-between items-center relative mx-auto py-8">
          <Link href="#">
            <span className="logo">
              <h3 className="font-bold text-2xl">amangLy.</h3>
            </span>
          </Link>
          <input type="checkbox" id="check" className="hidden" />

          <span className="menu">
            <li>
              <Link href="#">
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <span>About</span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <span>Projects</span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <span>Contact</span>
              </Link>
            </li>

            <label htmlFor="check" className="close-menu">
              X
            </label>
          </span>

          <label htmlFor="check" className="open-menu">
            Menu
          </label>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
