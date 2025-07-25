import { Fragment } from "react/jsx-runtime";

import { Routes, Route } from "react-router-dom";

import { routes } from "../routes/routeConfig";

const PageContent = () => {
  return (
    <div>
      <Routes>
        {routes.map((item) => (
          <Fragment key={item.id}>
            <Route path={item.path} element={item.element}>
              {item.child &&
                item.child.map((subItem: any) => (
                  <Route
                    key={subItem.id}
                    path={subItem.path}
                    element={subItem.element}
                  />
                ))}
            </Route>
          </Fragment>
        ))}
      </Routes>
    </div>
  );
};

export default PageContent;
