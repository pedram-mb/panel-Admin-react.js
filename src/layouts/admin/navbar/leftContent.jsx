const LeftContent = ()=>{
    return(
        <>
            <div className="acount-info col-2">
              <div className="dropdown">
                <button
                  className="btn btn-outline-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    className="profile-img"
                    src="./assets/img/3551911.jpg"
                    alt="profile img"
                  />
                  <span>pedram mb</span>
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="digikala.com">
                      فعالیت کاربری
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="digikala.com">
                      خروج از حساب کاربری
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="badgs col-1">
              <div className="d-flex justify-content-evenly">
                <i className="bi bi-envelope-fill"></i>

                <div className="vr"></div>

                <i className="bi bi-moon"></i>
              </div>
            </div>
        </>
    )
}

export default LeftContent;