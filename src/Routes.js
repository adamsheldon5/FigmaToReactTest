import React from "react";
import ActiveBid from "pages/ActiveBid";
import Dashboard from "pages/Dashboard";
import Market from "pages/Market";
import OtherUserProfile from "pages/OtherUserProfile";
import MyProfileHistory from "pages/MyProfileHistory";
import MarketDetail from "pages/MarketDetail";
import MyProfileCollection from "pages/MyProfileCollection";
import Settings from "pages/Settings";
import MyProfileWallet from "pages/MyProfileWallet";
import MyProfilePreview from "pages/MyProfilePreview";
import Message from "pages/Message";
import Saved from "pages/Saved";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/message" element={<Message />} />
        <Route path="/myprofilepreview" element={<MyProfilePreview />} />
        <Route path="/myprofilewallet" element={<MyProfileWallet />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/myprofilecollection" element={<MyProfileCollection />} />
        <Route path="/marketdetail" element={<MarketDetail />} />
        <Route path="/myprofilehistory" element={<MyProfileHistory />} />
        <Route path="/otheruserprofile" element={<OtherUserProfile />} />
        <Route path="/market" element={<Market />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/activebid" element={<ActiveBid />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
