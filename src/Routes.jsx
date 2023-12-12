import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const DevtoProfileOne = React.lazy(() => import("pages/DevtoProfileOne"));
const BlogPage = React.lazy(() => import("pages/BlogPage"));
const BlogPageOne = React.lazy(() => import("pages/BlogPageOne"));
const Writeondevto = React.lazy(() => import("pages/Writeondevto"));
const MediumProfile = React.lazy(() => import("pages/MediumProfile"));
const DevtoProfile = React.lazy(() => import("pages/DevtoProfile"));
const Dashboard = React.lazy(() => import("pages/Dashboard"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/devtoprofile" element={<DevtoProfile />} />
          <Route path="/mediumprofile" element={<MediumProfile />} />
          <Route path="/writeondevto" element={<Writeondevto />} />
          <Route path="/blogpageone" element={<BlogPageOne />} />
          <Route path="/blogpage" element={<BlogPage />} />
          <Route path="/devtoprofileone" element={<DevtoProfileOne />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
