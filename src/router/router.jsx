import Dashboard from "@/components/admin/Dashboard";
import Military from "@/pages/BecomePilot_Page/other_Page/Military";
import AdminLayout from "@/layout/AdminLayout";
import Layout from "@/layout/Layout";
import AboutUs from "@/pages/about_us_page/AboutUs";
import BecomeAPilot from "@/pages/BecomePilot_Page/BecomeAPilot";
import Faq from "@/pages/faq_page/Faq";
import Home from "@/pages/home/Home";
import AddYourReview from "@/pages/leave_a_review_Page/AddYourReview";
import LeaveReview from "@/pages/leave_a_review_Page/LeaveReview";
import Parthner from "@/pages/parthnerPage/Parthner";
import PilotNetworkExplained from "@/pages/pilot_etwork_page/PilotNetworkExplained";
import { createBrowserRouter } from "react-router-dom";
import Recreational from "@/pages/BecomePilot_Page/other_Page/Recreational";
import EuropePPL from "@/pages/BecomePilot_Page/other_Page/EuropePPL";
import UKPPL from "@/pages/BecomePilot_Page/other_Page/UKPPL";
import CommercialFlying from "@/pages/BecomePilot_Page/other_Page/CommercialFlying";
import FullTimeEducation from "@/pages/BecomePilot_Page/other_Page/FullTimeEducation";
import OlderThan16 from "@/pages/BecomePilot_Page/other_Page/OlderThan16";
import YoungerThan16 from "@/pages/BecomePilot_Page/other_Page/YoungerThan16";
import FullTimeEmployment from "@/pages/BecomePilot_Page/other_Page/FullTimeEmployment";
import AuthLayout from "@/layout/AuthLayout";
import SignIn from "@/pages/Auth_Pages/SignIn";
import SignUp from "@/pages/Auth_Pages/SignUp";
import ForgetPassword from "@/pages/Auth_Pages/ForgetPassword";
import VerifyCode from "@/pages/Auth_Pages/VerifyCode";
import ResetPassword from "@/pages/Auth_Pages/ResetPassword";
import TrainingCoursesMenu from "@/pages/BecomePilot_Page/other_Page/TrainingCoursesMenu";
import FindTheRightCourse from "@/pages/BecomePilot_Page/other_Page/FindTheRightCourse";
import PilotwithPreviousExperience from "@/pages/BecomePilot_Page/other_Page/PilotwithPreviousExperience";
import ModularFastTrackTraining from "@/pages/BecomePilot_Page/other_Page/ModularFastTrackTraining";
import ModularFastTrack from "@/components/trainingCoursesMenu_Components/ModularFastTrack";
import FirstTimeFlyer from "@/pages/BecomePilot_Page/other_Page/FirstTimeFlyer";
import FullTimeTrainingOptions from "@/pages/BecomePilot_Page/other_Page/FullTimeTrainingOptions";
import ContactUs from "@/pages/contact_page/ContactUs";
import TrainingprovidersPage from "@/pages/training_providers_Page/TrainingprovidersPage";
import TOPFLIGHTSCHOOLS from "@/pages/training_providers_Page/othetr_pages/TOPFLIGHTSCHOOLS";
import IntegratedCoursesPage from "@/pages/training_providers_Page/othetr_pages/IntegratedCoursesPage";
import ModularCoursesPage from "@/pages/training_providers_Page/othetr_pages/ModularCoursesPage";
import FlightSchoolReviewPage from "@/pages/training_providers_Page/othetr_pages/FlightSchoolReviewPage";
import FlightSchoolMap from "@/pages/training_providers_Page/othetr_pages/FlightSchoolMap";
import AllTrainingProviders from "@/pages/training_providers_Page/othetr_pages/AllTrainingProviders";
import LicenceProficiencyChecks from "@/pages/training_providers_Page/othetr_pages/LicenceProficiencyChecks";
import VERIFIEDSCHOOLS from "@/pages/training_providers_Page/othetr_pages/VERIFIEDSCHOOLS";
import PlusSchools from "@/pages/training_providers_Page/othetr_pages/PlusSchools";
import AviationInsights_Page from "@/pages/aviation_Insights_Page/AviationInsights_Page";
import AviationAdvice from "@/pages/aviation_Insights_Page/other_Insight_Page/AviationAdvice";
import Article from "@/pages/aviation_Insights_Page/other_Insight_Page/Article";
import AviationAdviceDetails from "@/pages/aviation_Insights_Page/other_Insight_Page/AviationAdviceDetails";
import AviationArticleDetails from "@/pages/aviation_Insights_Page/other_Insight_Page/AviationArticleDetails";
import Setting from "@/components/admin/Setting";
import NotificationPanel from "@/components/admin/NotificationPanel";
import SchoolProfilePage from "@/pages/school_profile_page/SchoolProfilePage";
import ReviewViewPage from "@/components/leave_a_review_Components/ReviewViewPage";
import ForgetVerifyCode from "@/pages/Auth_Pages/ForgetVerifyCode";
import PrivateRoute from "./PrivateRoute";
import EditReview from "@/pages/leave_a_review_Page/EditReview";


const router = createBrowserRouter([
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/sign-in",
        element: <SignIn />,
      },
      {
        path: "/auth/sign-up",
        element: <SignUp />,
      },
      {
        path: "/auth/forget-password",
        element: <ForgetPassword />,
      },
      {
        path: "/auth/verify-code",
        element: <VerifyCode />,
      },
      {
        path: "/auth/forget-verify-code",
        element: <ForgetVerifyCode />,
      },
      {
        path: "/auth/reset-password",
        element: <ResetPassword />,
      },


    ],
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      // training providers srtart
      {
        path: "/training-providers",
        element: <TrainingprovidersPage />,
      },
      {
        path: "/top-flight-schools",
        element: <TOPFLIGHTSCHOOLS />
      },
      {
        path: "/all-flight-schools",
        element: <AllTrainingProviders />
      },
      {
        path: "/modular-courses",
        element: <ModularCoursesPage />
      },
      {
        path: "/flight-school-map",
        element: <FlightSchoolMap />
      },
      {
        path: "/licence-proficiency-checks",
        element: <LicenceProficiencyChecks />
      },
      {
        path: "/flight-school-reviews",
        element: <FlightSchoolReviewPage />
      },
      {
        path: "/integrated-courses",
        element: <IntegratedCoursesPage />
      },
      {
        path: "/verified-schools",
        element: <VERIFIEDSCHOOLS />
      },
      {
        path: "/plus-schools",
        element: <PlusSchools />
      },
      // training providers end
      // about start
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/pilot-network",
        element: <PilotNetworkExplained />,
      },
      {
        path: "/partner",
        element: <Parthner />,
      },
      // about end
      {
        path: "/review",
        element: <LeaveReview />,
      },
      {
        path: "/add-your-review/:id",
        element: <AddYourReview />,
      },
      {
        path: "/edit-review/:id",
        element: <EditReview />,
      },
      {
        path: "/review-view/:id",
        element: <ReviewViewPage />,
      },
      // Become a pilot start
      {
        path: "/become-pilot",
        element: <BecomeAPilot />,
      },
      {
        path: "/military",
        element: <Military />,
      },
      {
        path: "/recreational",
        element: <Recreational />,
      },
      {
        path: "/europe-ppl",
        element: <EuropePPL />
      },
      {
        path: "/uk-ppl",
        element: <UKPPL />
      },
      {
        path: "/commercial-flying",
        element: <CommercialFlying />
      },
  
      
      // 
      {
        path: "/full-time-education",
        element: <FullTimeEducation />
      },
      {
        path: "/older-than-16",
        element: <OlderThan16 />
      },
      {
        path: "/training-courses-menu",
        element: <TrainingCoursesMenu />
      },
      {
        path: "/find-the-right-course",
        element: <FindTheRightCourse />
      },
      {
        path: "/pilot-with-previous-experience",
        element: <PilotwithPreviousExperience />
      },
      {
        path: "/modular-fast-track-training",
        element: <ModularFastTrackTraining />
      },
      {
        path: "/first-time-flyer",
        element: <FirstTimeFlyer />
      },
      {
        path: "/full-time-training-options",
        element: <FullTimeTrainingOptions />
      },
      
      //
      {
        path: "/younger-than-16",
        element: <YoungerThan16 />
      },
      {
        path: "/younger-than-16",
        element: <YoungerThan16 />
      },
      // 
            {
        path: "/full-time-employment",
        element: <FullTimeEmployment />
      }
      // aviation_Insights_Page start
      ,
      {
        path: "/aviation-insights",
        element: <AviationInsights_Page />
      },
      {
        path: "/aviation-advice",
        element: <AviationAdvice />
      },
      {
        path: "/aviation-advice-details/:id",
        element: <AviationAdviceDetails />
      },
      {
        path: "/aviation-articles",
        element: <Article />
      },
      {
        path: "/aviation-article-details/:id",
        element: <AviationArticleDetails />
      },
      // aviation_Insights_Page end

      //school profile page start
      {
        path: "/school-profile/:id",
        element: <SchoolProfilePage />
      },
      //school profile page end
    ],
  },
  // Admin routes
  {
  path: "/dashboard",
  element: (
    <PrivateRoute>
      <AdminLayout />
    </PrivateRoute>
  ),
  children: [
    {
      index: true, // default route for /dashboard
      element: <Dashboard />,
    },
    {
      path: "settings",
      element: <Setting />,
    },
  ],
}

]);

export default router;
