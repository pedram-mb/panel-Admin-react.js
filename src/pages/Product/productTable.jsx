import React from "react";
import PaginationTable from "../../components/paginationTable";

const ProductTable = ()=>{

    const Data = [
        {
          id: "1",
          category: "aaa",
          title: "aaaa",
          price: "1000",
          stock: "5",
          like_content: "2",
          status: "1",
        },
        {
          id: "2",
          category: "bbb",
          title: "bbbb",
          price: "1000",
          stock: "5",
          like_content: "2",
          status: "1",
        },
        {
            id: "3",
            category: "ccc",
            title: "cccc",
            price: "1000",
            stock: "5",
            like_content: "2",
            status: "1",
          },
          {
            id: "4",
            category: "ddd",
            title: "dddd",
            price: "1000",
            stock: "5",
            like_content: "2",
            status: "1",
          },
      ];
    
      const DataInfo = [
        { field: "id", title: "#" },
        { field: "category", title: "دسته" },
        { field: "category", title: "عنوان" },
        { field : "price" , title : "قیمت"},
        { field : "stock" , title : "موجودی"},
        { field : "like_content" , title : "تعداد لایک"},
        { field : "status" , title : "وضعیت"},
        { field: "title", title: "وضعیت"},
      ];

      const aditionalElements = (itemId)=>{
        console.log(itemId);
        return(
            <>
                <i className="bi bi-x-square"></i>
                <i className="bi bi-pencil-square"></i>
            </>
        )
      }

      const aditionalField = {
        title : "عملیات",
        elements : (itemId)=> aditionalElements(itemId),
      }

    return(
        <>
            {/* <table className="table table-striped table-hover text-center mt-4">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>دسته</th>
                        <th>عنوان</th>
                        <th>قیمت</th>
                        <th>موجودی</th>
                        <th>تعداد لایک</th>
                        <th>وضعیت</th>
                        <th>عملیات</th>
                    </tr>
                </thead>
                <tbody>
                   <tr>
                    <td>1</td>
                    <td>دسته فلان شماره</td>
                    <td>محصول شماره 1</td>
                    <td>20,000میلیون تومان</td>
                    <td>10</td>
                    <td>20-20</td>
                    <td>فعال</td>
                    <td className="d-flex justify-content-evenly">
                        <i className="bi bi-x-square"></i>
                        <i className="bi bi-pencil-square"></i>
                    </td>
                   </tr>
                   
                </tbody>
            </table> */}
            
            <PaginationTable Data={Data} DataInfo={DataInfo} aditionalField={aditionalField}/>

            {/* <div className="mt-4 w-100 d-flex justify-content-center">

                <nav className="" aria-label="...">
                    <ul className="pagination">
                        <li className="page-item disabled">
                            <span className="page-link">قبلی</span>
                        </li>
                        <li className="page-item">
                            <a className="page-link active" href="#">1</a></li>
                        <li className="page-item" aria-current="page">
                        <span className="page-link">2</span>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                            <a className="page-link" href="#">بعدی</a>
                        </li>
                    </ul>
                </nav>

            </div>   */}
        </>
    )
}

export default ProductTable;