import Image from "next/image";
import { Inter } from "next/font/google";
import NavbarComp from "../components/NavbarComp";
import SidebarComp from "../components/SidebarComp";
import MatchCard from "@/components/MatchCard";
import HistoryComp from "@/components/HistoryComp";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <NavbarComp />

      <div className="pt-20 ">
        <div className="mx-auto container flex flex-wrap ">
          <div className="w-9/12">
            <div className="flex justify-center">
              <div className=" w-2/12 bg-color-switch-outside rounded-full justify-between flex flex-wrap px-2 py-2">
                <div className="w-6/12 ">
                  <div className="bg-gradient-primary rounded-bl-full rounded-tl-full   flex justify-center py-1 ">
                    Reguler
                  </div>
                </div>
                <div className="w-6/12">
                  <div className="bg-color-switch-inside rounded-br-full rounded-tr-full   flex justify-center py-1 ">
                    Playoff
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-3/12  h-screen fixed right-10  flex flex-col ">
            <HistoryComp />
          </div>
        </div>
      </div>
    </div>
  );
}
