import Header from "../../components/Header";
import Sidebar from "./Sidebar";
import PageContent from "./PageContent";
import HeaderMain from "../../components/HeaderMain";
import ModalLayout from "./ModalLayout";

function Layout() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-[calc(100%-256px)]">
        <HeaderMain />
        <PageContent />
      </div>

      <ModalLayout />
    </div>
  );
}

export default Layout;
