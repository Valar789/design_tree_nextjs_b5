import Link from "next/link";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-info">
                <h3>Design Three</h3>
                <p>
                  A108 Adam Street <br />
                  NY 535022, USA
                  <br />
                  <br />
                  <strong>Phone:</strong> +1 5589 55488 55
                  <br />
                  <strong>Email:</strong> info@example.com
                  <br />
                </p>
                <div className="social-links mt-3">
                  <Link href="#" ><a  className="twitter">
                    <i className="bx bxl-twitter"></i>
                  </a></Link>
                  <Link href="#" ><a  className="facebook">
                    <i className="bx bxl-facebook"></i>
                  </a></Link>
                  <Link href="#" ><a  className="instagram">
                    <i className="bx bxl-instagram"></i>
                  </a></Link>
                  <Link href="#" ><a  className="google-plus">
                    <i className="bx bxl-skype"></i>
                  </a></Link>
                  <Link href="#" ><a  className="linkedin">
                    <i className="bx bxl-linkedin"></i>
                  </a></Link>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i> <Link href="#" ><a >Home</a></Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link href="#" ><a >About us</a></Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link href="#" ><a >Services</a></Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link href="#" ><a >Terms of service</a></Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link href="#" ><a >Privacy policy</a></Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link href="#" ><a >Web Design</a></Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link href="#" ><a >Web Development</a></Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link href="#" ><a >Product Management</a></Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link href="#" ><a >Marketing</a></Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link href="#" ><a >Graphic Design</a></Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6 footer-newsletter">
              <h4>Our Newsletter</h4>
              <p>
                Tamen quem nulla quae legam multos aute sint culpa legam noster
                magna
              </p>
              <form action="" method="post">
                <input type="email" name="email" />
                <input type="submit" value="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>Design three</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">
          Designed by <Link href="#" ><a >Michel Restaurant</a></Link>
        </div>
      </div>
    </footer>
  );
}
