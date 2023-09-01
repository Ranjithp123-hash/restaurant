import React from "react";
import { FiFacebook, FiWifi } from 'react-icons/fi'
import { CiTwitter } from 'react-icons/ci'
import SimpleImageSlider from "react-simple-image-slider";

import Header  from "../Header";

import './index.css'

 const Home = () => {
    const sliderImages = [

       {
          url: "https://img.freepik.com/premium-photo/background-fast-food-burger-junk-american_616652-1337.jpg"
       },
       
       {
          url: "https://evrimagaci.org/public/content_media/e703dd2b566ac71f45bfccd4d708d68a.jpg"
       },
       {
          url: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-905079230-1-1620268699.jpg?resize=1200:*",
       },
       {
          url: "https://c1.wallpaperflare.com/preview/564/844/49/nem-chinese-vegetables-chinese-cabbage.jpg",
       },
       {
          url: "https://content.jdmagicbox.com/comp/def_content/chinese_restaurants/default-chinese-restaurants-5.jpg?clr=#333333"
       },
       {
          url: "https://media.istockphoto.com/id/1363638825/photo/vegan-plant-based-asian-food-recipes-with-rice-and-brown-rice-as.webp?b=1&s=170667a&w=0&k=20&c=EXreVl3ug6ng9updrHKAFagrNctbOCIPDpaziJ6rVXg="
       },
       {
         url: "https://media.istockphoto.com/id/487077896/photo/close-up-of-fast-food-snacks-and-drink-on-table.jpg?s=612x612&w=0&k=20&c=kjSfS7tuG1pQAg6_FvBeji-l3pgQ3DckRS4wpsC8lCY="
      }
    ];
    return (
       <div className="home-container">
          <SimpleImageSlider
             width="100%"
             height="100%"
             background-size = "cover"
             images={sliderImages}
             showNavs={true}
          />
          <nav className="nav-container">
            <div className="container">
            {/* <div className="email-container"> */}
            
            <h4 className="nav-head">Email: info@gmail.com</h4>
            {/* <h4 className="nav-head">Telophone: +1800 234 5678</h4> */}
            </div>
            <div className="nav-icons">
               <FiFacebook className="nav-head"/>
               <CiTwitter className="nav-head"/>
               <a href="." className="nav-head">Be</a>
               <FiWifi className="nav-head"/>
            <buuton className="button">BOOK A TABLE</buuton>  
            {/* </div> */}
            </div>
         </nav>
         <div className="hr-line">
         <hr /> 
         </div>
         <div className="header-container">
            <img className="logo" src="https://img.freepik.com/premium-vector/restaurant-logo-design-template_79169-56.jpg" alt="MAIN LOGO"/>

              <Header/>
            
         </div>
         <div className="head-conatiner">
         <h1 className="head"><span className="span-con">Our Menus </span>SEE WHAT'S <span className="sp-con">NEW</span> TODAY</h1>
         <button className="buttons">TODAYS MENU</button>

         </div>
         

         <div>

         </div>
         
       </div>
    );
 }

 export default Home