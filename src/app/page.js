import Image from "next/image";
import Banner from "./components/Banner";
import HowItWorks from "./components/HowItWorks";
import CommunityHighlight from "./components/CommunityHighlight";

export default function Home() {
  return (
    <div>
      <Banner />
      <HowItWorks />
      <CommunityHighlight />
    </div>
  );
}