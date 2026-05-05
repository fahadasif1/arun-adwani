import { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Arun Adwani — finance professional, researcher, and fintech specialist based in the United Kingdom.",
};

export default function ContactPage() {
  return <ContactClient />;
}
