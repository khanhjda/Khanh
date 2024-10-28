import React, { Suspense,useState } from "react";
import { List, Page, Icon, useNavigate } from "zmp-ui";
import Navigation from "../components/navigation";



const Notifications = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("notifications");
    return (
        <Page className="page">
            <div>fuckyyoui</div>
        {/* Pass activeTab and setActiveTab as props to Navigation */}
        <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
        </Page>
    );
};

export default Notifications;