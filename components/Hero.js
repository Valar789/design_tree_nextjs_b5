import Link from "next/link";

export default function Hero() {
  return (
    <section id="hero" className="d-flex align-items-center">
      <div
        className="container position-relative text-center text-lg-start"
        
        
      >
        <div className="row">
          <div className="col-lg-8">
            <h1>
              Welcome to <span>Design Three</span>
            </h1>
            <h2>Delivering great food for more than 18 years!</h2>

            <div className="btns">
              <Link href="#menu"  ><a className="btn-menu animated fadeInUp scrollto">
                Our Menu
              </a></Link>
              <Link href="#book-a-table" ><a
                
                className="btn-book animated fadeInUp scrollto"
              >
                Book a Table
              </a></Link>
            </div>
          </div>
          <div
            className="col-lg-4 d-flex align-items-center justify-content-center position-relative"
            
            
          >
            <Link href="https://www.youtube.com/watch?v=GlrxcuEDyF8" ><a
              
              className="glightbox play-btn"
            ></a></Link>
          </div>
        </div>
      </div>
    </section>
  );
}
