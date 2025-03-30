
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { Suspense, lazy, useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import LoaderGif from './assets/loader.gif';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SavedPage from './pages/Dashboard/SavedPage';
import ThinkScriptPage from './pages/Dashboard/ThinkScriptPage';
import SubscriptionPage from './pages/Dashboard/SubscriptionPage';
import SettingsPage from './pages/Dashboard/SettingsPage';
import LandingPage from './pages/LandingPage';
import AlertPage from './pages/Dashboard/AlertPage';
import AboutPage from './pages/AboutPage';
import FaqPage from './pages/FaqPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import LoginPage from './pages/Auth/LoginPage';
import ResetPage from './pages/Auth/ResetPage';
import PasswordPage from './pages/Auth/PasswordPage';
import AdminLogin from './pages/Admin/AdminLogin';
import AdminRegisterPage from './pages/Admin/AdminRegisterPage';
import AdminForgetPage from './pages/Admin/AdminForgetPage';
import FinalPage from './pages/Admin/FinalPage';
import AdminHomePage from './pages/Admin/Dashboard/AdminHomePage';
import AdminThinkScriptPage from './pages/Admin/Dashboard/AdminThinkScriptPage';
import AdminSubscriptionPage from './pages/Admin/Dashboard/AdminSubscriptionPage';
import AdminUserPage from './pages/Admin/Dashboard/AdminUserPage';

const RegisterPage = lazy(() => import('./pages/Auth/RegisterPage'));
const Layout = lazy(() => import('./components/dashboard/Layout'));
const Scanner = lazy(() => import('./pages/Dashboard/Scanner'));
const AdminLayout = lazy(() => import('./components/admin/Layout'));


function SuspenseWithDelay({ children, fallback, delay = 0, minDisplayTime = 2000 }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), minDisplayTime);
    return () => clearTimeout(timer);
  }, [minDisplayTime]);

  return isLoading ? (
    <div className="flex justify-center items-center w-screen h-screen">
      <img src={LoaderGif} alt="Loading..." className="h-[6rem]" />
    </div>
  ) : (
    <Suspense fallback={fallback}>{children}</Suspense>
  );
}

function App() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <Toaster />
      <BrowserRouter>
        <SuspenseWithDelay fallback={<div className="flex justify-center items-center w-screen h-screen"><img src={LoaderGif} alt="HopOn Dashboard- Loader" className="h-[6rem]" /></div>} minDisplayTime={2000}>

          <Routes>

            <Route path='/admin/login' element={<AdminLogin />} />
            <Route path='/admin/register' element={<AdminRegisterPage />} />
            <Route path='/admin/forget' element={<AdminForgetPage/>} />
            <Route path='/admin/final' element={<FinalPage/>} />
            
            <Route path="/admin/dashboard/" element={<AdminLayout />}>
              <Route path="home" element={<AdminHomePage />} />
              <Route path="user" element={<AdminUserPage />} />
              <Route path="thinkScript" element={<AdminThinkScriptPage />} />
              <Route path="subscription" element={<AdminSubscriptionPage />} />
            </Route>


            <Route path='/' element={<LandingPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/faq' element={<FaqPage />} />
            <Route path='/blog' element={<BlogPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/privacy' element={<PrivacyPage />} />

            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/forget' element={<ResetPage />} />
            <Route path='/password' element={<PasswordPage />} />



            <Route path="/dashboard/" element={<Layout />}>
              <Route path="home" element={<Scanner />} />
              <Route path="saved" element={<SavedPage />} />
              <Route path="thinkScript" element={<ThinkScriptPage />} />
              <Route path="subscription" element={<SubscriptionPage />} />
              <Route path="settings" element={<SettingsPage />} />
              <Route path="alert" element={<AlertPage/>} />
            </Route>


          </Routes>
        </SuspenseWithDelay>
      </BrowserRouter>
    </>
  );
}

export default App;
