import { useParams } from "@remix-run/react";
import { useEffect, useState } from "react";
import DoctorOverview from "~/components/Overview/Overview";

export default function SearchResult() {
  const { slug } = useParams();
  const [originalText, setOriginalText] = useState<string>("");

  useEffect(() => {
    if (slug) {
      // Replace dashes with spaces for the display text
      setOriginalText(slug.replace(/-/g, " "));
      
      // Example for fetching data (uncomment and replace with your actual API)
      // fetch(`https://api.example.com/stocks/${slug}`)
      //   .then(response => response.json())
      //   .then(data => console.log(data));
    }
  }, [slug]);

  return (
    <>
      <DoctorOverview name={originalText} />
    </>
  );
}

// Meta generation cannot use server loaders in SPA mode
export const meta = () => {
  const params = new URLSearchParams(window.location.search); // Parse slug from URL
  const slug = params.get("slug") || "doctor";
  return [
    {
      title: `Best ${slug.replace(/-/g, " ")} In Chennai - Instant Appointment Booking, View Fees, Feedbacks | DocOct`,
    },
    {
      name: "description",
      content: `Best ${slug.replace(/-/g, " ")} in Chennai. Book Doctor&#x27;s Appointment Online, View Fees, User feedbacks, Address &amp; Phone Numbers of ${slug.replace(/-/g, " ")} in Chennai | DocOct`,
    },
  ];
};
