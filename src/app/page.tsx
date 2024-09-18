"use client";

import Navbar from "~/components/Navbar";
import FirstPage from "./pages/FirstPage";
import { useState } from "react";
import ServicesPage from "./pages/ServicesPage";
import ProjectsPage from "./pages/ProjectsPage";
import ReviewsPage from "./pages/ReviewsPage";

export default function HomePage() {
  const [latestPageInView, setLatestPageInView] = useState(null);

  return (
    <main className="flex flex-col bg-[#0E1206] contain-paint">
      <Navbar />
      <FirstPage />
      <ServicesPage />
      <ProjectsPage />
      <ReviewsPage />
    </main>
  );
}
