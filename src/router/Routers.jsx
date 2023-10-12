import React from "react";
import { Route, Routes } from "react-router-dom";
import Movies from "../Movies";
import Action from "../pages/Action";
import Horror from "../pages/Horror";
import Sports from "../pages/Sports";
import Fantasy from "../pages/Fantasy";

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Movies />} />
      <Route path="/action" element={<Action />} />
      <Route path="/horror" element={<Horror />} />
      <Route path="/sports" element={<Sports />} />
      <Route path="/fantasy" element={<Fantasy />} />
    </Routes>
  );
}
