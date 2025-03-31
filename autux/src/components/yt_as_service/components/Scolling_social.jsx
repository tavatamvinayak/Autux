import React from "react";
import "./../../../style/style3.css";
function Scolling_social() {
  return (
    <>
      <div class="stock-ticker">
        <ul>
            <Items/>
            <Items/>
            <Items/>
            <Items/>
            <Items/>
            <Items/>
            <Items/>
            <Items/>
            <Items/>
            <Items/>
            <Items/>
            <Items/>
        </ul>
      </div>
    </>
  );
}

function Items() {
  return (
    <li class="minus">
      <div className="content-center items-center flex flex-none flex-col flex-nowrap gap-[7px] h-min justify-start overflow-visible relative w-min p-0">
        <div className="aspect-square flex-none h-[var(--framer-aspect-ratio-supported,84px)] relative w-[84px] rounded-[100%]">
          <div className="absolute rounded-[inherit] inset-0;">
            <img
              src="https://framerusercontent.com/images/vmC2oc0bQsB4dnV79KZ4duYrX0.png"
              alt=""
              className="block w-full h-full object-[center_center] object-fill rounded-[inherit]"
            />
          </div>
        </div>
        <div className="content-center items-center flex flex-none flex-col flex-nowrap gap-0.5 h-min justify-center overflow-visible relative w-min p-0">
          <div className="flex flex-col justify-start shrink-0">
            <p className="text-white">Vishal</p>
          </div>
          <div className="flex flex-col justify-start shrink-0">
            <p className="text-[10px] w-[100px] text-center text-gray-200">vishal tavatam</p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Scolling_social;
