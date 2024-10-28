import React, { Suspense,useState } from "react";
import { List, Page, Icon, useNavigate } from "zmp-ui";
import Navigation from "../components/navigation";

const Home = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("home");
  return (
    <Page className="page">
        <div className="image">
        <img src="image/banner.jpg" alt="banner"></img>
      </div>
      <div className="search-bar-container"> 
            <svg class="search-icon" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_5_1541)">
              <path d="M16.1528 14H15.344L15.0574 13.73C16.0607 12.59 16.6647 11.11 16.6647 9.5C16.6647 5.91 13.6856 3 10.0104 3C6.33514 3 3.35606 5.91 3.35606 9.5C3.35606 13.09 6.33514 16 10.0104 16C11.6586 16 13.1737 15.41 14.3408 14.43L14.6172 14.71V15.5L19.7359 20.49L21.2613 19L16.1528 14V14ZM10.0104 14C7.46126 14 5.40354 11.99 5.40354 9.5C5.40354 7.01 7.46126 5 10.0104 5C12.5595 5 14.6172 7.01 14.6172 9.5C14.6172 11.99 12.5595 14 10.0104 14Z" fill="#919191"/>
              </g>
              <defs>
              <clipPath id="clip0_5_1541">
              <rect width="24.5697" height="24" fill="white" transform="translate(0.284851)"/>
              </clipPath>
              </defs>
            </svg>

            <input class="search-bar" type="text" placeholder="search"></input>
      </div>
      <div className="category">
          <div className="category-items"></div>
          <div className="category-items"></div>
          <div className="category-items"></div>
          <div className="category-items"></div>
          <div className="category-items"></div>
          <div className="category-items"></div>
          <div className="category-items"></div>
          <div className="category-items"></div>
          <div className="category-items"></div>
          <div className="category-items"></div>
          
      </div>
      <div className="items">
        
        <div className="item-preview" onClick={() => navigate("/item-detail")}></div>
        <div className="item-preview" onClick={() => navigate("/item-detail")}></div>
        <div className="item-preview" onClick={() => navigate("/item-detail")}></div>
        <div className="item-preview" onClick={() => navigate("/item-detail")}></div>
        <div className="item-preview" onClick={() => navigate("/item-detail")}></div>
        <div className="item-preview" onClick={() => navigate("/item-detail")}></div>
        <div className="item-preview" onClick={() => navigate("/item-detail")}></div>
        <div className="item-preview" onClick={() => navigate("/item-detail")}></div>
        <div className="item-preview" onClick={() => navigate("/item-detail")}></div>
        <div className="item-preview" onClick={() => navigate("/item-detail")}></div>
        <div className="item-preview" onClick={() => navigate("/item-detail")}></div>
        <div className="item-preview" onClick={() => navigate("/item-detail")}></div>
        <div className="item-preview" onClick={() => navigate("/item-detail")}></div>
        <div className="item-preview" onClick={() => navigate("/item-detail")}></div>
        <div className="item-preview" onClick={() => navigate("/item-detail")}></div>
        <div className="item-preview" onClick={() => navigate("/item-detail")}></div>
        
      </div>


      {/* Pass activeTab and setActiveTab as props to Navigation */}
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
    </Page>
  );
};

export default Home;
