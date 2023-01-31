import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Cheuk Kit Tang Portfolio" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <ArticlesSection sectionId="articles" heading="Works" sources={['Blog']} />
        <AboutSection sectionId="about" heading="About Portfolio Minimal" />
        <InterestsSection sectionId="details" heading="My Hobbies" />
        <ProjectsSection sectionId="features" heading="Highlights" />
        <ContactSection sectionId="github" heading="Contact me" />
      </Page>
    </>
  );
}
