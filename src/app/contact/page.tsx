import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a video editing project — share your details and get a reply within one business day.",
};

export default function ContactPage() {
  return <ContactContent />;
}
