import { Metadata } from "next";
import CareerClient from "./CareerClient";

export const metadata: Metadata = {
  title: "Career",
  description: "Explore Arun Adwani's professional career timeline — from NHS Financial Planner to fund accounting, regulatory compliance, and internal audit.",
};

export default function CareerPage() {
  return <CareerClient />;
}
