
import Link from "next/link";
import About from "./main/About";
import Book_a_Table from "./main/Book_a_Table";
import Chefs from "./main/Chefs";
import ContactSection from "./main/ContactSection";
import Events from "./main/Events";
import Gallery from "./main/Gallery";
import Menu from "./main/Menu";
import Specials from "./main/Specials";
import Testimonials from "./main/Testimonials";
import Why_Us from "./main/Why_Us";


export default function Main() {
  return (
    <>
    
    <About/>
    <Why_Us/>
    <Menu/>
    <Specials/>
    <Events/>
    <Book_a_Table/>
    <Testimonials/>
    <Gallery/>
    <Chefs/>
    <ContactSection/>
    

      <div id=""></div>
      <Link href="#" ><a
        
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a></Link>
    </>
  );
}
