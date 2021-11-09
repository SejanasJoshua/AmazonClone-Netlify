import React from "react";
import "./Home.css";
import Product from "./Product";
import homeImage from "../images/HomeImage2.jpg";
import amazonEcho from "../images/amazonEcho.jpg";
import zFold3 from "../images/zFold3.jpg";

function Home() {
  return (
    <>
      <div className="home">
        <div className="home_container">
          <img
            className="home_image"
            // src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Fashion/Diwali-Wave3/TEASER/TopBanner/Revised/PC_top-banner._CB450572186_.jpg"
            src={homeImage}
            alt="Amazon Banner"
          />
          <div className="home_row">
            <Product
              id="001"
              title="Echo Dot (3rd Gen), Certified Refurbished, Black – Improved smart speaker with Alexa – Like new, backed with 1-year warranty"
              price={2999.0}
              image={amazonEcho}
              rating={5}
            />
            <Product
              id="002"
              title="Samsung Galaxy Z Fold3 5G (Phantom Black, 12GB RAM, 512GB Storage) with No Cost EMI/Additional Exchange Offers "
              price={157999.0}
              image={zFold3}
              rating={4}
            />
          </div>
          <div className="home_row">
            <Product
              id="003"
              title="Sony WH-1000XM4 Industry Leading Wireless Noise Cancellation Headphones, Bluetooth Headset with Mic for Phone Calls, 30 Hrs Battery Life, Quick Charge, WFH, Touch Control, Alexa Voice Control (Black)"
              price={22990}
              image="https://m.media-amazon.com/images/I/71o8Q5XJS5L._SL1500_.jpg"
              rating={5}
            />
            <Product
              id="004"
              title="Optimum Nutrition (ON) Gold Standard 100% Whey Protein Powder 2 lbs, 907 g (Double Rich Chocolate), for Muscle Support & Recovery, Vegetarian - Primary Source Whey Isolate"
              price={3059}
              image="https://m.media-amazon.com/images/I/611PHgj6q4L._SL1500_.jpg"
              rating={4}
            />
            <Product
              id="005"
              title="Rich Dad Poor Dad: What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not!"
              price={331}
              image="https://images-na.ssl-images-amazon.com/images/I/81dQwQlmAXL.jpg"
              rating={5}
            />
          </div>
          <div className="home_row">
            <Product
              id="006"
              title="boAt Airdopes 121v2 TWS Earbuds with Bluetooth V5.0(Active Black)"
              price={1299}
              image="https://m.media-amazon.com/images/I/71ByNT34bfL._SL1500_.jpg"
              rating={3}
            />
            <Product
              id="007"
              title="Voltas 1.4 Ton 3 Star Inverter Split Adjustable AC (Copper, 2021 173V ADJ, White)"
              price={31800}
              image="https://m.media-amazon.com/images/I/71h5D0-zXHL._SL1500_.jpg"
              rating={4}
            />
            <Product
              id="008"
              title="Samsung 657 L with Inverter Side-by-Side Refrigerator (RS74T5F01B4/TL, Matt Black)"
              price={164790}
              image="https://m.media-amazon.com/images/I/51vvhIN7wpL._SL1000_.jpg"
              rating={4}
            />
          </div>
          <div className="home_row">
            <Product
              id="009"
              title="LG 7.0Kg 5-Star Inverter Fully-Automatic Front Loading Washing Machine (Luxury Silver, 6 Motion Technology)"
              price={29990}
              image="https://m.media-amazon.com/images/I/81erN8t-57L._SL1500_.jpg"
              rating={5}
            />
            <Product
              id="010"
              title="PHILIPS Brilliance 499P9H1/75 124.46 cm (49-inch) Curved SuperWide Dual QHD LCD Display with Pop-Up Webcam with Windows Hello"
              price={107959}
              // image="https://m.media-amazon.com/images/I/61PnS+zB2QL._SL1181_.jpg"
              image="https://m.media-amazon.com/images/I/81pv0g8bQhL._SL1500_.jpg"
              rating={5}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
