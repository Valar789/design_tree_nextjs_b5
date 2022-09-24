import Image from "next/image"; 

import image1 from "public/img/menu/lobster-bisque.jpg" 
import image2 from "public/img/menu/bread-barrel.jpg"
import image3 from "public/img/menu/cake.jpg"
import image4 from "public/img/menu/caesar.jpg"
import image5 from "public/img/menu/tuscan-grilled.jpg"
import image6 from "public/img/menu/mozzarella.jpg"
import image7 from "public/img/menu/greek-salad.jpg"
import image8 from "public/img/menu/spinach-salad.jpg"
import image9 from "public/img/menu/lobster-roll.jpg"
import Link from "next/link";

export default function Menu() {
    return (
        <section id="menu" className="menu section-bg">
      <div className="container" >

        <div className="section-title">
          <h2>Menu</h2>
          <p>Check Our Tasty Menu</p>
        </div>

        <div className="row"  >
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="menu-flters">
              <li data-filter="*" className="filter-active">All</li>
              <li data-filter=".filter-starters">Starters</li>
              <li data-filter=".filter-salads">Salads</li>
              <li data-filter=".filter-specialty">Specialty</li>
            </ul>
          </div>
        </div>

        <div className="row menu-container"  >

          <div className="col-lg-6 menu-item filter-starters">
            <Image src={image1}className="menu-img" alt=""/>
            <div className="menu-content">
              <Link href="#" ><a >Lobster Bisque</a></Link><span>$5.95</span>
            </div>
            <div className="menu-ingredients">
              Lorem, deren, trataro, filede, nerada
            </div>
          </div>

          <div className="col-lg-6 menu-item filter-specialty">
            <Image src={image2} className="menu-img" alt=""/>
            <div className="menu-content">
              <Link href="#" ><a >Bread Barrel</a></Link><span>$6.95</span>
            </div>
            <div className="menu-ingredients">
              Lorem, deren, trataro, filede, nerada
            </div>
          </div>

          <div className="col-lg-6 menu-item filter-starters">
            <Image src={image3} className="menu-img" alt=""/>
            <div className="menu-content">
              <Link href="#" ><a >Crab Cake</a></Link><span>$7.95</span>
            </div>
            <div className="menu-ingredients">
              A delicate crab cake served on a toasted roll with lettuce and tartar sauce
            </div>
          </div>

          <div className="col-lg-6 menu-item filter-salads">
            <Image src={image4} className="menu-img" alt=""/>
            <div className="menu-content">
              <Link href="#" ><a >Caesar Selections</a></Link><span>$8.95</span>
            </div>
            <div className="menu-ingredients">
              Lorem, deren, trataro, filede, nerada
            </div>
          </div>

          <div className="col-lg-6 menu-item filter-specialty">
            <Image src={image5} className="menu-img" alt=""/>
            <div className="menu-content">
              <Link href="#" ><a >Tuscan Grilled</a></Link><span>$9.95</span>
            </div>
            <div className="menu-ingredients">
              Grilled chicken with provolone, artichoke hearts, and roasted red pesto
            </div>
          </div>

          <div className="col-lg-6 menu-item filter-starters">
            <Image src={image6} className="menu-img" alt=""/>
            <div className="menu-content">
              <Link href="#" ><a >Mozzarella Stick</a></Link><span>$4.95</span>
            </div>
            <div className="menu-ingredients">
              Lorem, deren, trataro, filede, nerada
            </div>
          </div>

          <div className="col-lg-6 menu-item filter-salads">
            <Image src={image7} className="menu-img" alt=""/>
            <div className="menu-content">
              <Link href="#" ><a >Greek Salad</a></Link><span>$9.95</span>
            </div>
            <div className="menu-ingredients">
              Fresh spinach, crisp romaine, tomatoes, and Greek olives
            </div>
          </div>

          <div className="col-lg-6 menu-item filter-salads">
            <Image src={image8} className="menu-img" alt=""/>
            <div className="menu-content">
              <Link href="#" ><a >Spinach Salad</a></Link><span>$9.95</span>
            </div>
            <div className="menu-ingredients">
              Fresh spinach with mushrooms, hard boiled egg, and warm bacon vinaigrette
            </div>
          </div>

          <div className="col-lg-6 menu-item filter-specialty">
            <Image src={image9} className="menu-img" alt=""/>
            <div className="menu-content">
              <Link href="#" ><a >Lobster Roll</a></Link><span>$12.95</span>
            </div>
            <div className="menu-ingredients">
              Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll
            </div>
          </div>

        </div>

      </div>
    </section>
    );
}