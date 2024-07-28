import Link from "next/link";

const Header = () => {
    return (
        <div className="flex px-8 py-4 justify-between items-center">
            <div className="font-bold text-3xl">
                amangLy.
            </div>
            <div className="bg-black flex px-2 py-2 space-x-4">
                <Link href="/about">
                    <span className="text-white flex justify-center px-2">About</span>
                </Link>
                <Link href="/projects">
                    <span className="text-white flex justify-center px-2">Projects</span>
                </Link>
                <Link href="/contact">
                    <span className="text-white flex justify-center px-2">Contact</span>
                </Link>
            </div>
        </div>
    );
}

export default Header;
