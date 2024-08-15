import React from "react";
import Image from "next/image";
import MatchCard from "./MatchCard";

export default function HistoryComp() {
  return (
    <div className=" ">
    <div className="bg-navbar w-full rounded-lg p-4  ">
      History
      <form className="max-w-sm mx-auto mt-3">
        <select
          id="countries"
          className="bg-selectFill text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          <option selected>All Season</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
      </form>
      <div className="flex flex-wrap justify-between  mt-3">
        <div className="w-5/12">
          <form className="max-w-sm mx-auto">
            <select
              id="countries"
              className="bg-selectFill text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              <option selected>Select Team</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </form>
        </div>
        <div className="w-2/12 flex justify-center items-center ">
          <h5 className="">VS</h5>
        </div>
        <div className="w-5/12">
          <form className="max-w-sm mx-auto">
            <select
              id="countries"
              className="bg-selectFill text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              <option selected>Select Team</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </form>
        </div>
      </div>
      <div className="h-[65vh] overflow-auto">
        <div className="py-3 flex items-center text-sm text-white before:flex-1 before:border-t before:border-gray-200 before:me-2 after:flex-1 after:border-t after:border-gray-200 after:ms-2 ">
          Jumat, 9 Agustus 2024
        </div>
        <div className="flex flex-col gap-3 ">
          <div className="w-12/12">
            <MatchCard />
          </div>
          <div className="w-12/12">
            <MatchCard />
          </div>
          <div className="w-12/12">
            <MatchCard />
          </div>
        </div>
        <div className="py-3 flex items-center text-sm text-white before:flex-1 before:border-t before:border-gray-200 before:me-2 after:flex-1 after:border-t after:border-gray-200 after:ms-2 ">
          Sabtu, 10 Agustus 2024
        </div>
        <div className="flex flex-col gap-3 ">
          <div className="w-12/12">
            <MatchCard />
          </div>
          <div className="w-12/12">
            <MatchCard />
          </div>
          <div className="w-12/12">
            <MatchCard />
          </div>
        </div>
      </div>
    </div>
  </div>
//   {/* <div className="  ">
//     <img
//       className="rounded-lg w-full p-3"
//       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEQRguMvR6_wQDV9HotuzETswZkWCHWGh3Lg&s"
//       alt=""
//     />
//   </div> */}
  );
}