import { Fragment } from "react/jsx-runtime";
import { NavLink } from "react-router-dom";

import type { pageListProps } from "../../types";

interface pageListNavigationProps {
  listItems: pageListProps[];
}

const PageNavigation = ({ listItems }: pageListNavigationProps) => {
  return (
    <Fragment>
      <nav className="flex flex-wrap gap-4 text-white rounded-xl ">
        {listItems.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            className={({ isActive }) =>
              `rounded-lg transition duration-200 ${
                isActive
                  ? "text-blue-700 underline hover: hover:text-blue-500"
                  : "text-blue-500 font-semibold hover:underline"
              }`
            }
          >
            {item.title}
          </NavLink>
        ))}
      </nav>
    </Fragment>
  );
};
export default PageNavigation;
