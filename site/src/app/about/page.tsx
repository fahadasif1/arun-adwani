import { Metadata } from "next";
import { profile, qualifications, skills } from "@/lib/data";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${profile.name}'s qualifications, skills, and professional background in finance and fintech.`,
};

export default function AboutPage() {
  return <AboutClient qualifications={qualifications} skills={skills} profile={profile} />;
}
