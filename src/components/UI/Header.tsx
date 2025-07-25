import { Fragment, use } from "react";
import { NavLink } from "react-router-dom";
import { headerListItems } from "../../data/mockData";
import Button from "../atoms/Button";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
  const { toggleTheme, theme } = use(ThemeContext);

  return (
    <Fragment>
      <div className="page-header bg-white text-black dark:bg-gray-900 dark:text-white">
        <nav className="border-b border-gray-300 dark:border-gray-700 p-4">
          <div className="flex items-center justify-between">
            {/* Left side: NavLinks */}
            <div className="flex gap-2 flex-wrap">
              {headerListItems.map((item) => (
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
            </div>

            {/* Right side: Button */}
            <div>
              <Button
                type="button"
                title="toggle theme"
                color={theme === "dark" ? "purple" : "cyan"}
                clickHandler={toggleTheme}
              />
            </div>
          </div>
        </nav>
      </div>
    </Fragment>
  );
};

export default Header;
