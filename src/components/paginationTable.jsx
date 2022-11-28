import { useEffect } from "react";
import { useState } from "react";

let numOfPage = 2;

const PaginationTable = ({Data , DataInfo , aditionalField}) => {
  
  const [tableData , setTableData] = useState([]);
  const [currentPage , setCurrentPage] = useState(1);

  const [Pages , setPages] = useState([]);
  const [pageCount , setPageCount] = useState(1)

  useEffect(()=>{
    let pCount = Data.lenght / numOfPage
    setPageCount(pCount)

    let pageArr = [];
    for (let i = 1 ; i<= pCount; i++) pageArr = [...pageArr , i]
    setPages(pageArr)
    
  } , [])

  useEffect(()=>{
    let start = (currentPage * numOfPage) - numOfPage;
    let end = (currentPage * numOfPage)
    setTableData(Data.slice(start , end))
  } , [currentPage]);

  return (
    <>
        <table className="table table-striped table-hover text-center mt-4">
          <thead>
            <tr>
              {DataInfo.map((i) => (
                <th key={i.field}>{i.title}</th>
              ))}
              {
                aditionalField ? (
                    <th>{aditionalField.title}</th>
                ) : null
              }
            </tr>
          </thead>
          <tbody>
            {tableData.map((d) => (
              <tr>
                {DataInfo.map((i) => (
                  <td key={i.field+"_"+d.id}>{d[i.field]}</td>
                ))}
                {
                    aditionalField ? (
                        <td className="d-flex justify-content-evenly">
                            {aditionalField.elements(d.id)}
                        </td>
                    ) : null
                }
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-4 w-100 d-flex justify-content-center">

                <nav className="" aria-label="...">
                    <ul className="pagination">
                        <li className="page-item disabled">
                            <span className="page-link">قبلی</span>
                        </li>
                        {
                          Pages.map(page => (
                            <li className="page-item">
                              <span className="page-link" onClick={()=>setCurrentPage(page)}>
                                {page}
                              </span>
                            </li>
                          ))
                        }
                        <li className="page-item">
                            <a className="page-link" href="#">بعدی</a>
                        </li>
                    </ul>
                </nav>

            </div>  
  
    </>
  );
};

export default PaginationTable;
