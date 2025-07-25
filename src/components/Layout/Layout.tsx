import Header from "../UI/Header";
import PageContent from "../../routes/PageContent";
import { Fragment } from "react/jsx-runtime";
function Layout() {
  return (
    <Fragment>
      <Header />
      <PageContent />
    </Fragment>
  );
}
export default Layout;
