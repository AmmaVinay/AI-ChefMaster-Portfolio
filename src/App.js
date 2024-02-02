import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyNavbar from "./Components/MyNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home";
import Product from "./Components/Product";
import Career from "./Components/Career";
import Company from "./Components/Company";
import SignUpForm from "./Components/SineUpForm";
import LoginForm from "./Components/LoginForm";
import CardAIAssistant from "../src/Components/HomeComponents/CardAIAssistant";
import CardAIKitchen from "../src/Components/HomeComponents/CardAIKitchen";
import CardAINutritionManager from "../src/Components/HomeComponents/CardAINutritionManager";
import NotFound from "./Components/NotFound";
import SearchJobCards from "./Components/CareerJobs/searchJobCards";
import FrontendDeveloperEngineer from "./Components/CareerJobs/ListOfCareerJobs/FrontendDeveloperEngineer";
import BackendDeveloperEngineer from "./Components/CareerJobs/ListOfCareerJobs/BackendDeveloperEngineer";
import AIEngineer from "./Components/CareerJobs/ListOfCareerJobs/AIEngineer";
import ServerEngineer from "./Components/CareerJobs/ListOfCareerJobs/ServerEngineer";
import UiUxDesigner from "./Components/CareerJobs/ListOfCareerJobs/UiUxDesigner";
import AndroidApplicationDeveloperEngineer from "./Components/CareerJobs/ListOfCareerJobs/AndroidApplicationDeveloperEngineer";
import IOSApplicationDeveloperEngineer from "./Components/CareerJobs/ListOfCareerJobs/IOSApplicationDeveloperEngineer";
import FullStackDeveloperEngineer from "./Components/CareerJobs/ListOfCareerJobs/FullStackDeveloperEngineer";
import CustomerSupportAssociate from "./Components/CareerJobs/ListOfCareerJobs/CustomerSupportAssociate";
import ResearchDevelopmentEngineer from "./Components/CareerJobs/ListOfCareerJobs/ResearchDevelopmentEngineer";

const App = () => {
  return (
    <Router>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/career" element={<Career />} />
        <Route path="/company" element={<Company />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/aiassistant" element={<CardAIAssistant />} />
        <Route path="/aikitchen" element={<CardAIKitchen />} />
        <Route
          path="/ainutritionmanager"
          element={<CardAINutritionManager />}
        />
        <Route path="/searchJobCards" element={<SearchJobCards />} />
        <Route
          path="/Frontend-Developer-Engineer"
          element={<FrontendDeveloperEngineer />}
        />
        <Route
          path="/Backend-Developer-Engineer"
          element={<BackendDeveloperEngineer />}
        />
        <Route path="/AI-Engineer" element={<AIEngineer />} />
        <Route path="/Server-Engineer" element={<ServerEngineer />} />
        <Route path="/Ui-Ux-Designer" element={<UiUxDesigner />} />
        <Route
          path="/Android-Application-Developer-Engineer"
          element={<AndroidApplicationDeveloperEngineer />}
        />
        <Route
          path="/IOS-Application-Developer-Engineer"
          element={<IOSApplicationDeveloperEngineer />}
        />
        <Route
          path="/Full-Stack-Developer-Engineer"
          element={<FullStackDeveloperEngineer />}
        />
        <Route
          path="/Customer-Support-Associate"
          element={<CustomerSupportAssociate />}
        />
        <Route
          path="/Research-And-Development-Engineer"
          element={<ResearchDevelopmentEngineer />}
        />

        <Route path="/notfound" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
