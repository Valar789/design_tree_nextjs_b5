import Link from "next/link";

export default function NavBar() {
    return (
        <header id="header" className="fixed-top d-flex align-items-cente">
    <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">

      <h1 className="logo me-auto me-lg-0"><Link href="index.html" ><a >Design Tree</a></Link></h1>

      <nav id="navbar" className="navbar order-last order-lg-0">
        <ul>
          <li><Link href="#hero" ><a className="nav-link scrollto active" >Home</a></Link></li>
          <li><Link href="#about" ><a className="nav-link scrollto" >About</a></Link></li>
          <li><Link href="#menu" ><a className="nav-link scrollto" >Menu</a></Link></li>
          <li><Link href="#specials" ><a className="nav-link scrollto" >Specials</a></Link></li>
          <li><Link href="#events" ><a className="nav-link scrollto" >Events</a></Link></li>
          <li><Link href="#chefs" ><a className="nav-link scrollto" >Chefs</a></Link></li>
          <li><Link href="#gallery" ><a className="nav-link scrollto" >Gallery</a></Link></li>
          <li className="dropdown"><Link href="#" ><a ><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a></Link>
            <ul>
              <li><Link href="#" ><a >Drop Down 1</a></Link></li>
              <li className="dropdown"><Link href="#" ><a ><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a></Link>
                <ul>
                  <li><Link href="#" ><a >Deep Drop Down 1</a></Link></li>
                  <li><Link href="#" ><a >Deep Drop Down 2</a></Link></li>
                  <li><Link href="#" ><a >Deep Drop Down 3</a></Link></li>
                  <li><Link href="#" ><a >Deep Drop Down 4</a></Link></li>
                  <li><Link href="#" ><a >Deep Drop Down 5</a></Link></li>
                </ul>
              </li>
              <li><Link href="#" ><a >Drop Down 2</a></Link></li>
              <li><Link href="#" ><a >Drop Down 3</a></Link></li>
              <li><Link href="#" ><a >Drop Down 4</a></Link></li>
            </ul>
          </li>
          <li><Link href="#contact" ><a className="nav-link scrollto" >Contact</a></Link></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>
      <Link href="#book-a-table" ><a  className="book-a-table-btn scrollto d-none d-lg-flex">Book a table</a></Link>

    </div>
  </header>
    );
}