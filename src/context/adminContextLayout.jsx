import { createContext, useState } from "react";

export const AdminContext = createContext({
    showSidebar : true,
    setShowSidebar : ()=>{}
})

const AdminContextLayout = ({children})=>{
    const [showSidebar , setShowSidebar] = useState(true)

    return(
        <AdminContext.Provider value={{showSidebar , setShowSidebar}}>
            {children}
        </AdminContext.Provider>
    )
}

export default AdminContextLayout;