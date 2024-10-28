import React from "react";
import { BottomNavigation, Icon, useNavigate } from "zmp-ui";
import { Home, ShoppingBasket, Notifications, Person } from "@mui/icons-material";

const BottomNavigationPage = ({ activeTab, setActiveTab }) => {
  const navigate = useNavigate();

  return (
    <BottomNavigation
      fixed
      activeKey={activeTab}
      onChange={(key) => setActiveTab(key)}
      className="bottom-navigation"
    >
      <BottomNavigation.Item
        key="home"
        onClick={() => navigate("/")}
        icon={<Home style={{ fontSize: 24 }} />}
        activeIcon={<Home style={{ fontSize: 28, color: "blue" }} />}
        className="bottom-navigation-item"
      />

      <BottomNavigation.Item
        key="cart"
        icon={<ShoppingBasket style={{ fontSize: 24 }} />}
        activeIcon={<ShoppingBasket style={{ fontSize: 28, color: "green" }} />}
        className="bottom-navigation-item"
      />

      <BottomNavigation.Item
        key="notifications"
        onClick={() => navigate("/notifications")}
        icon={<Notifications style={{ fontSize: 24 }} />}
        activeIcon={<Notifications style={{ fontSize: 28, color: "orange" }} />}
        className="bottom-navigation-item"
      />

      <BottomNavigation.Item
        key="profile"
        icon={<Person style={{ fontSize: 24 }} />}
        activeIcon={<Person style={{ fontSize: 28, color: "purple" }} />}
        className="bottom-navigation-item"
      />
    </BottomNavigation>
  );
};

export default BottomNavigationPage;
