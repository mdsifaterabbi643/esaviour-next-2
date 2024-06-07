import styles from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="xl:w-[80vw] xl:mx-auto">
        <div className="navbar bg-white pt-[10px] pb-[20px]">
          <div className="navbar-start hidden lg:flex">
            <Link href="/" className="btn btn-ghost text-xl">
              <Image
                src="/navbar/Logo.png"
                width="150"
                height="50"
                alt="logo"
                className="lg:w-[150px]"
              ></Image>
            </Link>
          </div>
          <div className="navbar-middle hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link href="/service" className="text-[20px] font-semibold">
                  Service
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-[20px] font-semibold">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[20px] font-semibold">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-[20px] font-semibold">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[20px] font-semibold">
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="bg-[#40b0fd] text-white text-[12px] hover:bg-[#40b0fd] hover:text-white rounded-none px-[5px]"
                >
                  Get a Proposal
                </Link>
              </li>
            </ul>
          </div>
          {/* For extra small, small, medium devices */}
          <div className="lg:hidden w-[100vw] relative">
            <div className=" block lg:hidden absolute left-0">
              <Link href="/" className="btn btn-ghost text-xl">
                <Image
                  src="/navbar/Logo.png"
                  width="150"
                  height="50"
                  alt="logo"
                  className="w-[120px] sm:w-[120px] md:w-[120px]"
                ></Image>
              </Link>
            </div>
            <div className="block lg:hidden absolute right-[10px]">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-sky-200 rounded-box w-52 absolute right-[0px]"
                >
                  <li>
                    <Link href="/service">Service sm</Link>
                  </li>
                  <li>
                    <Link href="/portfolio">Portfolio</Link>
                  </li>
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                  <li>
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
