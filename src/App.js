import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyNavbar from "./Components/MyNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home";
import Product from "./Components/Product";
import Technology from "./Components/Career/Technology";

import Company from "./Components/Company";
import SignUpForm from "./Components/SineUpForm";
import LoginForm from "./Components/LoginForm";
import CardAIAssistant from "../src/Components/HomeComponents/CardAIAssistant";
import CardAIKitchen from "../src/Components/HomeComponents/CardAIKitchen";
import CardAINutritionManager from "../src/Components/HomeComponents/CardAINutritionManager";
import NotFound from "./Components/NotFound";
import SearchJobCards from "./Components/Career/searchJobCards";
import FrontendDeveloperEngineer from "./Components/Career/ListOfCareerJobs/FrontendDeveloperEngineer";
import BackendDeveloperEngineer from "./Components/Career/ListOfCareerJobs/BackendDeveloperEngineer";
import AIEngineer from "./Components/Career/ListOfCareerJobs/AIEngineer";
import ServerEngineer from "./Components/Career/ListOfCareerJobs/ServerEngineer";
import UiUxDesigner from "./Components/Career/ListOfCareerJobs/UiUxDesigner";
import AndroidApplicationDeveloperEngineer from "./Components/Career/ListOfCareerJobs/AndroidApplicationDeveloperEngineer";
import IOSApplicationDeveloperEngineer from "./Components/Career/ListOfCareerJobs/IOSApplicationDeveloperEngineer";
import FullStackDeveloperEngineer from "./Components/Career/ListOfCareerJobs/FullStackDeveloperEngineer";
import CustomerSupportAssociate from "./Components/Career/ListOfCareerJobs/CustomerSupportAssociate";
import ResearchDevelopmentEngineer from "./Components/Career/ListOfCareerJobs/ResearchDevelopmentEngineer";
import Application from "./Components/Career/JobApplicationForm/Application";
import MyExperience from "./Components/Career/JobApplicationForm/MyExperience";
import VoluntaryDisclosures from "./Components/Career/JobApplicationForm/VoluntaryDisclosures";
import ApplicationQuestions from "./Components/Career/JobApplicationForm/ApplicationQuestions";
import Review from "./Components/Career/JobApplicationForm/Review";
import CareerHomePage from "./Components/Career/CareerHomePage";
const jobData = [
  {
    title: "Fronend Developer",
  },
  {
    title: "Backend Developer Engineer",
  },
  {
    title: "AI Engineer",
  },
  {
    title: "Android Application Developer Engineer",
  },
  {
    title: "Customer Support Associate",
  },
  {
    title: "iOS Application Developer Engineer",
  },
  {
    title: "Research and Development Engineer",
  },
  {
    title: "Server Engineer",
  },
  {
    title: "UI/UX Designer",
  },
];

const App = () => {
  return (
    <Router>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/career" element={<CareerHomePage />} />
        <Route path="/company" element={<Company />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/aiassistant" element={<CardAIAssistant />} />
        <Route path="/aikitchen" element={<CardAIKitchen />} />
        <Route path="/technology" element={<Technology />} />
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
        <Route
          path="/application"
          element={<Application jobData={jobData[0]} />}
        />
        <Route path="/experience" element={<MyExperience />} />
        <Route path="/voluntary" element={<VoluntaryDisclosures />} />
        <Route path="/questions" element={<ApplicationQuestions />} />
        <Route path="/review" element={<Review />} />

        <Route path="/notfound" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
