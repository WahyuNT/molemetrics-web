import React from "react";
import Image from "next/image";

export default function MatchCard() {
  return (
    <div className="rounded-xl p-3 bg-match ">
      <div className="flex justify-center items-center">
        <div className="px-2 rounded-lg bg-dark">
          <small className="m-0 p-0">15:15</small>
        </div>
      </div>
      <div className="flex items-center justify-between ">
        <div className="w-3/12 flex justify-center ">
          <div className="bg-dark p-2 rounded-lg">
            <Image
              src="/team/evos.png"
              width={40}
              height={40}
              alt="image"
            ></Image>
          </div>
        </div>
        <div className="w-6/12 flex justify-center ">
          <div className="flex bg-dark rounded-lg px-4 py-2 gap-3">
            <div className="w-3/12 ">
              <p className="m-0 p-0">2</p>
            </div>
            <div className="w-6/12 ">VS</div>
            <div className="w-3/12 ">0</div>
          </div>
        </div>
        <div className="w-3/12 flex justify-center">
          <div className="bg-dark p-2 rounded-lg aspect-square">
            <Image
              src="/team/ae.png"
              width={40}
              height={40}
              alt="image"
            ></Image>
          </div>
        </div>
      </div>
   
    </div>
  );
}
