"use client";

import React from "react";

import { EVENTS2 } from "./_shared/EVENTS";
import { MEMBERS } from "./_shared/MEMBERS";
import { PROJECTS } from "./_shared/PROJECTS";
import AboutSection from "@/app/_components/sections/AboutSection";
import EventsSection from "@/app/_components/sections/EventsSection";
import OfficersSection from "@/app/_components/sections/OfficersSection";
import ProjectsSection from "@/app/_components/sections/ProjectsSection";
import MainHeader from "@/app/_components/headers/MainHeader";

export default function Home() {
  return (
    <>
      {/* Site Header */}
      <MainHeader />

      {/* Site Header */}
      {/* About Section */}
      <AboutSection />
      {/* About Section - end */}
      {/* Upcoming Events Section */}
      <EventsSection />
      {/* Upcoming Events Section - end */}
      {/* Officers Section */}
      <OfficersSection members={MEMBERS} />
      {/* Officers Section - end */}
      {/* Projects Section */}
      <ProjectsSection />
    </>
  );
}
