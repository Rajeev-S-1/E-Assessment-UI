import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes as AppRoutes } from 'react-router-dom';
import ActivityIndicator from '../components/ActivityIndicator/ActivityIndicator';
import AuthComponent from '../components/AuthComponent';


// Import your lazy-loaded components
const LoginPage = lazy(() => import('../pages/Login/LoginPage'));
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const Assessment = lazy(() => import('../pages/Assessment/Assessment'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));
const Layout = lazy(() => import('./Layout'));
const Submitted = lazy(() => import('../pages/Submitted/Submitted'));
const TestSubmitted = lazy(() => import('../pages/TestSubmitted/TestSubmitted'));



const Routes = () => {
  return (
    <Router>
      <Suspense fallback={<ActivityIndicator />}>
        <AppRoutes>
          <Route element={<Layout />}>
            <Route path="/home" element={<AuthComponent><HomePage /></AuthComponent>}></Route>
            <Route path="/assessment/:subjectid" element={<Assessment />}></Route>
            <Route path="/submitted" element={<Submitted />}></Route>
            <Route path="/testsubmitted" element={<TestSubmitted />}></Route>
          </Route>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path='*' element={<NotFound />} />
        </AppRoutes>
      </Suspense>
    </Router>
  );
};

export default Routes;
