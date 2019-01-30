import React from 'react';

class Header extends React.Component {
  render() {
    return (
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <a className="navbar-brand">Lesson Component</a>
            <ul className="nav navbar-nav">
              <li>
                <a href="#">Home</a>
              </li>
              <li className="active">
                <a href="#">Product</a>
              </li>
            </ul>
          </div>
        </nav>
    )
  }
}

/* BISA JUGA SEPERTI INI, HASILNYA AKAN SAMA DENGAN YANG DI ATAS */
// function Header() {
//   return (
//     <div>
//       <h1>Header </h1>
//     </div>
//   )
// }



export default Header;