import React from "react";
import { ModeToggle } from "@/components/ModeToggle";
import { DialogDemo } from "@/components/DailogBox";

export default function Navbar() {
  return (
    <header className="border-b shadow-sm">
      <div className="flex items-center justify-between sm:justify-around  gap-2 py-4 px-3 max-w-[1300px] mx-auto">
        <h1 className="flex items-center justify-center gap-2">
          <svg
            className=" dark:bg-foreground rounded-md"
            width="33px"
            height="33px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fillRule="evenodd">
              <path
                fill="#000000"
                fillRule="nonzero"
                d="M10,4.5 C10,4.77614237 9.77614237,5 9.5,5 C9.22385763,5 9,4.77614237 9,4.5 C9,3.67157288 9.67157288,3 10.5,3 L13.5,3 C14.3284271,3 15,3.67157288 15,4.5 C15,4.77614237 14.7761424,5 14.5,5 C14.2238576,5 14,4.77614237 14,4.5 C14,4.22385763 13.7761424,4 13.5,4 L10.5,4 C10.2238576,4 10,4.22385763 10,4.5 Z M6.5,4 C6.77614237,4 7,4.22385763 7,4.5 C7,4.77614237 6.77614237,5 6.5,5 C5.67157288,5 5,5.67157288 5,6.5 L5,18.5 C5,19.3284271 5.67157288,20 6.5,20 L17.5,20 C18.3284271,20 19,19.3284271 19,18.5 L19,6.5 C19,5.67157288 18.3284271,5 17.5,5 C17.2238576,5 17,4.77614237 17,4.5 C17,4.22385763 17.2238576,4 17.5,4 C18.8807119,4 20,5.11928813 20,6.5 L20,18.5 C20,19.8807119 18.8807119,21 17.5,21 L6.5,21 C5.11928813,21 4,19.8807119 4,18.5 L4,6.5 C4,5.11928813 5.11928813,4 6.5,4 Z"
              />
              <path
                fill="#000000"
                fillRule="nonzero"
                d="M15.1464466,9.14644661 C15.3417088,8.95118446 15.6582912,8.95118446 15.8535534,9.14644661 C16.0488155,9.34170876 16.0488155,9.65829124 15.8535534,9.85355339 L10.8535534,14.8535534 C10.6582912,15.0488155 10.3417088,15.0488155 10.1464466,14.8535534 L8.14644661,12.8535534 C7.95118446,12.6582912 7.95118446,12.3417088 8.14644661,12.1464466 C8.34170876,11.9511845 8.65829124,11.9511845 8.85355339,12.1464466 L10.5,13.7928932 L15.1464466,9.14644661 Z"
              />
            </g>
          </svg>{" "}
          <span>Task App</span>
        </h1>
        <nav className="flex items-center justify-center gap-4">
          <div>
            <ModeToggle></ModeToggle>
          </div>
          <div className="">
            <DialogDemo></DialogDemo>
          </div>
        </nav>
      </div>
    </header>
  );
}
