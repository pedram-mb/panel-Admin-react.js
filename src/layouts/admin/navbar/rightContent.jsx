import { useContext } from "react";
import { AdminContext } from "../../../context/adminContextLayout";

const RightContent = () => {
  const { showSidebar, setShowSidebar } = useContext(AdminContext);

  const HandleShowSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      <div className="header-logo text-center ps-5 col-1">
        <i className="bi bi-code-slash"></i>
      </div>

      <div className="show-menu col-1 text-center">
        <i onClick={() => HandleShowSidebar()} className="bi bi-list"></i>
      </div>
    </>
  );
};

export default RightContent;
