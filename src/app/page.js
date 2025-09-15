import Image from "next/image";
import Banner from "./components/Banner";
import CommunityHighlight from "./components/CommunityHighlight";

export default function Home() {
  return (
    <div>
    <Banner></Banner>
    <CommunityHighlight></CommunityHighlight>
   </div>
  );
}
