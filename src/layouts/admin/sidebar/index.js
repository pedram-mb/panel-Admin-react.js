import React, { useContext } from "react";
import { AdminContext } from "../../../context/adminContextLayout";
import SidebarItemsTitle from "./SidebarItemsTitle";
import SidebarItems from "./SidebarItems";

const Sidebar = () => {
  const {showSidebar} = useContext(AdminContext)
// console.log(showSidebar);
  return (
    <div className="sidebar bg-white" style={showSidebar ? {right : "-210"} : {}}>
      <ul className="mt-1">
        
        <SidebarItems targetPath="/Dashobord" title="داشبورد" icon="bi bi-house-fill"/>
        <SidebarItemsTitle title="فروشگاه"/>
        
        <SidebarItems targetPath="/productcategory" title="مدیریت گروه محصول" icon="bi bi-cart-plus"/>
        
        <SidebarItems targetPath="/product" title="مدیریت محصول" icon="bi bi-palette2"/>
        
        <SidebarItems title="مدیریت گارانتی ها" icon="bi bi-palette2"/>
        
        <SidebarItems title="مدیریت رنگ ها" icon="bi bi-palette"/>
        
        <SidebarItems title="مدیریت تخفیف ها" icon="bi bi-cash"/>
        <SidebarItemsTitle title="سفارشات و سبد"/>
        
        <SidebarItems title="مدیریت سبد ها" icon="bi bi-cart4"/>
        
        <SidebarItems title="مدیریت سفارشات" icon="bi bi-pencil"/>
        
        <SidebarItems title="مدیریت نحوه ارسال" icon="bi bi-truck"/>
        <SidebarItemsTitle title="کاربران و همکاران"/>
        
        <SidebarItems title="مشاهده کاربران" icon="bi bi-person-fill"/>
        
        <SidebarItems title="نقش ها" icon="bi bi-person-fill"/>
        
        <SidebarItems title="مجوز ها" icon="bi bi-person-fill"/>
        <SidebarItemsTitle title="ارتباطات"/>
        
        <SidebarItems title="سوال ها" icon="bi bi-question-circle"/>
        
        <SidebarItems title="نظرات " icon="bi bi-chat-dots"/>
      </ul>
    </div>
  );
};

export default Sidebar;
