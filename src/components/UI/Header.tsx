import { Fragment, use } from "react";
import { NavLink } from "react-router-dom";
import { headerListItems } from "../../data/mockData";
// import Button from "../atoms/Button";
import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";
import { SunIcon } from "../icons/SunIcon";
import { MoonIcon } from "../icons/MoonIcon";

const Header = () => {
  const { toggleTheme, theme } = use(ThemeContext);
  const { isLogin } = use(AuthContext);

  return (
    <Fragment>
      <div className="page-header bg-white text-black dark:bg-gray-900 dark:text-white">
        <nav className="border-b border-gray-300 dark:border-gray-700 p-4">
          <div className="flex items-center justify-between">
            {/* Left side: NavLinks */}
            <div className="flex gap-2 flex-wrap">
              {isLogin &&
                headerListItems.map((item) => (
                  <NavLink
                    key={item.id}
                    to={item.path}
                    className={({ isActive }: { isActive: boolean }) =>
                      `px-4 py-2 rounded text-sm font-medium transition duration-200 ${
                        isActive
                          ? "bg-gray-200 text-black dark:bg-gray-700 dark:text-white"
                          : "text-black hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700"
                      }`
                    }
                  >
                    {item.title}
                  </NavLink>
                ))}
              {isLogin && (
                <div>
                  <button
                    type="button"
                    onClick={toggleTheme}
                    title="Toggle Theme"
                    className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                  >
                    {theme === "dark" ? (
                      <MoonIcon className="w-5 h-5 text-gray-700 dark:text-gray-200" />
                    ) : (
                      <SunIcon className="w-5 h-5 text-yellow-400" />
                    )}
                  </button>
                </div>
              )}
            </div>

            {/* Right side: Button */}
            {/* <div>
              <Button
                type="button"
                title={isLogin ? "Logout" : "Login"}
                color={theme === "dark" ? "purple" : "cyan"}
                clickHandler={() => setIsLogin((prev) => !prev)}
              />
            </div> */}
          </div>
        </nav>
      </div>
    </Fragment>
  );
};

export default Header;
