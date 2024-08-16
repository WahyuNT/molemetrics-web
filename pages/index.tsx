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
        <div className="mx-auto container flex flex-wrap ">
          <div className="w-9/12 pe-9">
            <div className="gap-2 overflow-x-auto flex mt-3">
              <button className="bg-gradient-primary px-5 flex-none  py-2 rounded-xl">
                Week 1
              </button>
              <button className="button-week-off px-5 flex-none  py-2 rounded-xl">
                Week 2
              </button>
              <button className="button-week-off px-5 flex-none  py-2 rounded-xl">
                Week 2
              </button>
              <button className="button-week-off px-5 flex-none  py-2 rounded-xl">
                Week 2
              </button>
              <button className="button-week-off px-5 flex-none  py-2 rounded-xl">
                Week 2
              </button>
              <button className="button-week-off px-5 flex-none  py-2 rounded-xl">
                Week 2
              </button>
              <button className="button-week-off px-5 flex-none  py-2 rounded-xl">
                Week 2
              </button>
              <button className="button-week-off px-5 flex-none  py-2 rounded-xl">
                Week 2
              </button>
              <button className="button-week-off px-5 flex-none  py-2 rounded-xl">
                Week 2
              </button>
              <button className="button-week-off px-5 flex-none  py-2 rounded-xl">
                Week 2
              </button>
              <button className="button-week-off px-5 flex-none  py-2 rounded-xl">
                Week 2
              </button>
              <button className="button-week-off px-5 flex-none  py-2 rounded-xl">
                Week 2
              </button>
              <button className="button-week-off px-5 flex-none  py-2 rounded-xl">
                Week 2
              </button>
              <button className="button-week-off px-5 flex-none  py-2 rounded-xl">
                Week 2
              </button>
              <button className="button-week-off px-5 flex-none  py-2 rounded-xl">
                Week 2
              </button>
              <button className="button-week-off px-5 flex-none  py-2 rounded-xl">
                Week 2
              </button>
            </div>
            <div className="mt-3">
              <div className="card-bg p-3 rounded-lg">
                <div className="flex">
                  <div className="w-6/12">History</div>
                  <div className="w-6/12 flex justify-end gap-2 items-center">
                    <div className="div">
                      <i className="fa-solid fa-list"></i>
                    </div>
                    <div className="w-5/12 justify-end">
                      <button
                        id="dropdownDefaultButton2"
                        data-dropdown-toggle="dropdown"
                        className="text-white bg-blueSecondary hover:bg-blueSecondary hover:opacity-90 focus:ring-2 focus:outline-none focus:ring-blueThird font-medium rounded-lg w-full text-sm px-5 py-2.5 text-center inline-flex items-center justify-between"
                        type="button"
                      >
                        Fnatic Onic{" "}
                        <svg
                          className="w-2.5 h-2.5 ms-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 10 6"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m1 1 4 4 4-4"
                          />
                        </svg>
                      </button>

                      <div
                        id="dropdown"
                        className="z-10 hidden bg-blueSecondary divide-gray-100 rounded-lg shadow w-44 "
                      >
                        <ul
                          className="py-2 text-sm text-gray-200 rounded-lg"
                          aria-labelledby="dropdownDefaultButton2"
                        >
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-blueThird "
                            >
                              Dashboard
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-blueThird "
                            >
                              Settings
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-blueThird "
                            >
                              Earnings
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-blueThird "
                            >
                              Sign out
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="w-5/12 ">
                      <button
                        id="dropdownDefaultButton"
                        data-dropdown-toggle="dropdown"
                        className="text-white bg-blueSecondary hover:bg-blueSecondary hover:opacity-90 focus:ring-2 focus:outline-none focus:ring-blueThird font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center inline-flex items-center justify-between"
                        type="button"
                      >
                        Fnatic Onic{" "}
                        <svg
                          className="w-2.5 h-2.5 ms-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 10 6"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m1 1 4 4 4-4"
                          />
                        </svg>
                      </button>

                      <div
                        id="dropdown"
                        className="z-10 hidden bg-blueSecondary divide-gray-100 rounded-lg shadow w-44 "
                      >
                        <ul
                          className="py-2 text-sm text-gray-200 rounded-lg"
                          aria-labelledby="dropdownDefaultButton"
                        >
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-blueThird "
                            >
                              Dashboard
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-blueThird "
                            >
                              Settings
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-blueThird "
                            >
                              Earnings
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-blueThird "
                            >
                              Sign out
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 overflow-x-auto mt-2 ">
                  <div className="flex-none">
                    <MatchCard />
                  </div>
                  <div className="flex-none">
                    <MatchCard />
                  </div>
                  <div className="flex-none">
                    <MatchCard />
                  </div>
                  <div className="flex-none">
                    <MatchCard />
                  </div>
                  <div className="flex-none">
                    <MatchCard />
                  </div>
                  <div className="flex-none">
                    <MatchCard />
                  </div>
                </div>
              </div>
            </div>
            <div className=" mt-3">
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-white bg-table">
                  <thead className="text-xs text-white uppercase bg-table ">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        No
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Team
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Match Point
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Match W-L
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Net Game Win
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Game W-L
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className=" even:bg-tableEven odd:bg-tableOdd   ">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium  whitespace-nowrap text-white"
                      >
                        1
                      </th>
                      <td className="px-6 py-4">Fnatic Onic</td>
                      <td className="px-6 py-4">2</td>
                      <td className="px-6 py-4">2 - 0</td>
                      <td className="px-6 py-4">3</td>
                      <td className="px-6 py-4">4 - 1</td>
                    </tr>
                    <tr className=" even:bg-tableEven odd:bg-tableOdd   ">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium  whitespace-nowrap text-white"
                      >
                        1
                      </th>
                      <td className="px-6 py-4">DEWA UNITED ESPORTS</td>
                      <td className="px-6 py-4">2</td>
                      <td className="px-6 py-4">2 - 0</td>
                      <td className="px-6 py-4">3</td>
                      <td className="px-6 py-4">4 - 1</td>
                    </tr>
                  </tbody>
                </table>
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
