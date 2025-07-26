import { Routes, Route } from "react-router-dom";

import { routes } from "../routes/routeConfig";

const PageContent = () => {
  return (
    <div>
      <Routes>
        {routes.map((item) => (
          <Route key={item.id} path={item.path} element={item.element}>
            {item.child?.map((subItem) => (
              <Route
                key={subItem.id}
                path={subItem.path}
                element={subItem.element}
              />
            ))}
          </Route>
        ))}
      </Routes>
    </div>
  );
};

export default PageContent;
