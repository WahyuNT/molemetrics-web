import Image from "next/image";
import { Inter } from "next/font/google";
import NavbarComp from "../components/NavbarComp";
import SidebarComp from "../components/SidebarComp";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <NavbarComp />
      {/* <SidebarComp /> */}
    </div>
  );
}
