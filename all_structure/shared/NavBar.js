import Link from "next/link";
import { useSelector } from "react-redux";


const NavBar = () => {
    // const user = useSelector(state => state.userR)
    // console.log(user);
  const menuOptions = (
    <>
      <li className="font-semibold ">
        <Link href="/">
          HOME
        </Link>
        <Link href="/dashboard">
          DASHBOARD
        </Link>
        <Link href="/cart">
          CART
        </Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 bg-opacity-20">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 bg-opacity-20 rounded-box w-52"
            >
              {menuOptions}
            </ul>
          </div>
          <Link href="/">
            <div className="flex flex-col items-center">
              <h2 className="font-extrabold text-3xl">Pro-Shop</h2>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuOptions}</ul>
        </div>
        <div className="navbar-end">
          {/* {user?.uid ? (
            <>
              <div className="hidden lg:block font-semibold mr-3">
                <p>{user?.displayName}</p>
              </div>
              <Link
                className="btn btn-sm text-bold bg-red-400 text-white rounded-xs border-none"
                onClick={handleLogOut}
                href="/login"
              >
                Logout
              </Link>
            </>
          ) : (
            <Link
              href="/login"
              className="btn btn-sm text-bold bg-red-400 text-white rounded-xs border-none"
            >
              Login
            </Link>
          )} */}
          <Link
            href="/login"
          >
            <button className="btn btn-outline text-green-500 hover:bg-green-400 hover:border-none ml-3">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;