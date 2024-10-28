import React from "react";
import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Quiz from "../Pages/Quiz";
import Results from "./../Pages/Results";
import Dashboard from "../Pages/Dashboard";
import { LoginSignup } from "../Component/LoginSignup";

const AllRoutes = () => {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Results />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element= {<LoginSignup />} />
      </Routes>
    </Box>
  );
};

export default AllRoutes;
