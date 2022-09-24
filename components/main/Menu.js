import Image from "next/image";

import image1 from "public/img/menu/lobster-bisque.jpg";
import image2 from "public/img/menu/bread-barrel.jpg";
import image3 from "public/img/menu/cake.jpg";
import image4 from "public/img/menu/caesar.jpg";
import image5 from "public/img/menu/tuscan-grilled.jpg";
import image6 from "public/img/menu/mozzarella.jpg";
import image7 from "public/img/menu/greek-salad.jpg";
import image8 from "public/img/menu/spinach-salad.jpg";
import image9 from "public/img/menu/lobster-roll.jpg";
import Link from "next/link";

export default function Menu() {
  return (
    <section id="menu" className="menu section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Menu</h2>
          <p>Check Our Tasty Menu</p>
        </div>

        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="menu-flters">
              <li data-filter="*" className="filter-active">
                All
              </li>
              <li data-filter=".filter-starters">Starters</li>
              <li data-filter=".filter-salads">Salads</li>
              <li data-filter=".filter-specialty">Specialty</li>
            </ul>
          </div>
        </div>

        <div className="row menu-container">
        <div className="col-lg-6 menu-item filter-starters">
            <Image src={image1} className="menu-img" alt="" />
            <div>
              <div className="menu-content">
                <Link href="#">
                  <a>Crab Cake</a>
                </Link>
                <span>$7.95</span>
              </div>
              <div className="menu-ingredients">
                A delicate crab cake served on a toasted roll with lettuce and
                tartar sauce
              </div>
            </div>
          </div>
          <div className="col-lg-6 menu-item filter-starters">
            <Image src={image2} className="menu-img" alt="" />
            <div>
              <div className="menu-content">
                <Link href="#">
                  <a>Crab Cake</a>
                </Link>
                <span>$7.95</span>
              </div>
              <div className="menu-ingredients">
                A delicate crab cake served on a toasted roll with lettuce and
                tartar sauce
              </div>
            </div>
          </div>
          <div className="col-lg-6 menu-item filter-starters">
            <Image src={image3} className="menu-img" alt="" />
            <div>
              <div className="menu-content">
                <Link href="#">
                  <a>Crab Cake</a>
                </Link>
                <span>$7.95</span>
              </div>
              <div className="menu-ingredients">
                A delicate crab cake served on a toasted roll with lettuce and
                tartar sauce
              </div>
            </div>
          </div>
          <div className="col-lg-6 menu-item filter-starters">
            <Image src={image4} className="menu-img" alt="" />
            <div>
              <div className="menu-content">
                <Link href="#">
                  <a>Crab Cake</a>
                </Link>
                <span>$7.95</span>
              </div>
              <div className="menu-ingredients">
                A delicate crab cake served on a toasted roll with lettuce and
                tartar sauce
              </div>
            </div>
          </div>
          <div className="col-lg-6 menu-item filter-starters">
            <Image src={image5} className="menu-img" alt="" />
            <div>
              <div className="menu-content">
                <Link href="#">
                  <a>Crab Cake</a>
                </Link>
                <span>$7.95</span>
              </div>
              <div className="menu-ingredients">
                A delicate crab cake served on a toasted roll with lettuce and
                tartar sauce
              </div>
            </div>
          </div>

          <div className="col-lg-6 menu-item filter-starters">
            <Image src={image6} className="menu-img" alt="" />
            <div>
              <div className="menu-content">
                <Link href="#">
                  <a>Crab Cake</a>
                </Link>
                <span>$7.95</span>
              </div>
              <div className="menu-ingredients">
                A delicate crab cake served on a toasted roll with lettuce and
                tartar sauce
              </div>
            </div>
          </div>
          <div className="col-lg-6 menu-item filter-starters">
            <Image src={image7} className="menu-img" alt="" />
            <div>
              <div className="menu-content">
                <Link href="#">
                  <a>Crab Cake</a>
                </Link>
                <span>$7.95</span>
              </div>
              <div className="menu-ingredients">
                A delicate crab cake served on a toasted roll with lettuce and
                tartar sauce
              </div>
            </div>
          </div>
          <div className="col-lg-6 menu-item filter-starters">
            <Image src={image8} className="menu-img" alt="" />
            <div>
              <div className="menu-content">
                <Link href="#">
                  <a>Crab Cake</a>
                </Link>
                <span>$7.95</span>
              </div>
              <div className="menu-ingredients">
                A delicate crab cake served on a toasted roll with lettuce and
                tartar sauce
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
