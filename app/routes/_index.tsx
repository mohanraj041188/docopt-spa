import type { MetaFunction } from "@remix-run/node";
import SearchBanner from "../components/SearchBanner/SearchBanner";

export const meta: MetaFunction = () => {
  return [
    { title: "New App" },
    { name: "description", content: "Welcome to Doctor OPT!" },
  ];
};

export default function Index() {
  return (
    <>
      <SearchBanner />
    </>
  );
}
