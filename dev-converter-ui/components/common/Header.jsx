import Link from "next/link";
import Image from "next/image";
import { useAuth } from "../../lib/auth.context";
import Router from "next/router";

function Header() {
  const { user, logout } = useAuth();
  return (
    <div className="border-rounded-md bg-gray-700 sticky top-0 z-50">
      <div className="mx-auto py-2 px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap">
          <Link href="/home">
            <Image
              className="block h-5  animate-pulse hover: cursor-pointer "
              src={require("../../assets/images/icon.png")}
              alt="converterdev"
              width="250"
              height="70"
            />
          </Link>
          <div></div>
          <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
            <div className="flex">
              <a
                href=""
                className="flex items-center border-gray-400  justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-50 bg-gray-600 border- hover:text-white
                focus:outline-none focus:ring focus:ring-brand-100"
              >
                <a
                  className="hover:cursor-pointer"
                  href="https://imaginecoders.vercel.app/"
                >
                  About as
                </a>
              </a>

              {user && (
                <a
                  onClick={async () => {
                    try {
                      await logout();
                      Router.push("/login");
                    } catch {
                      alert("Failed to log out");
                    }
                  }}
                  className="flex items-center border-gray-400  justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-50 bg-gray-600 border- hover:text-white
      focus:outline-none focus:ring focus:ring-brand-100 cursor-pointer ml-2"
                >
                  Logout
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
