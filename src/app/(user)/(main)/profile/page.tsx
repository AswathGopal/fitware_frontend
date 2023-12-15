"use client";
import React, { useState } from "react";
// import Header from '@/components/main/home/Header'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { GoGoal } from "react-icons/go";
import { IoIosSettings } from "react-icons/io";
import { IoFitnessSharp } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import ProfileDialog from "./components/ProfileDialog";
const page = () => {
  return (
    <div className="h-screen bg-white pt-10">
      <div className="flex justify-center">
        <p className="font-semibold ">Profile</p>
      </div>
      <div className="flex justify-center col">
        <Avatar className="w-24 h-24 mt-10">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <p className="flex justify-center mt-3 font-semibold">Aswath Gopal</p>
      {/* <div className="mt-10">
        <div className="flex">
          <div>Mobile No:</div>
          <div className="mx-10"></div>
          <div>6383781834</div>
        </div>
        <div className="flex">
          <div>email:</div>
          <div className="mx-10"></div>
          <div>aswathgopal@gmail.com</div>
        </div>
      </div> */}
      <div className="flex-col mt-10 items-center">
        <div className="flex flex-1 mx-5 border p-2 rounded-xl items-center">
          <div className="rounded-full bg-slate-400 px-3 py-3 flex justify-center items-center">
            <GoGoal />
          </div>
          <div className="flex flex-1 font-semibold p-2">
            <p>Goal</p>
          </div>
          <ProfileDialog>
            <div className="p-2 rounded bg-slate-200  ">
              <IoIosArrowForward />
            </div>
          </ProfileDialog>
        </div>
        <div className="flex flex-1 mx-5 border p-2 rounded-xl items-center mt-3">
          <div className="rounded-full bg-slate-400 px-3 py-3 flex justify-center items-center">
            <IoFitnessSharp />
          </div>
          <div className="flex flex-1 font-semibold p-2">
            <p>Workout History</p>
          </div>
          <Link href={"/"}>
            <div className="p-2 rounded bg-slate-200  ">
              <IoIosArrowForward />
            </div>
          </Link>
        </div>
        <div className="flex flex-1 mx-5 border p-2 rounded-xl items-center mt-3">
          <div className="rounded-full bg-slate-400 px-3 py-3 flex justify-center items-center">
            <IoIosSettings />
          </div>
          <div className="flex flex-1 font-semibold p-2">
            <p>Settings</p>
          </div>
          <Link href={"/"}>
            <div className="p-2 rounded bg-slate-200  ">
              <IoIosArrowForward />
            </div>
          </Link>
        </div>
        <div className="flex flex-1 mx-5 border p-2 rounded-xl items-center mt-3">
          <div className="rounded-full bg-slate-400 px-3 py-3 flex justify-center items-center">
            <GoGoal />
          </div>
          <div className="flex flex-1 font-semibold p-2">
            <p>View Goals</p>
          </div>
          <Link href={"/"}>
            <div className="p-2 rounded  text-black flex justify-center bg-slate-400">
              view
            </div>
          </Link>
        </div>
      </div>

      {/* <div className="flex justify-center">
        <Link
          href="/profile/profile-edit"
          className="bg-black rounded text-white p-2 w-[25%] border-2 border-black  font-semibold flex justify-center"
        >
          <p>Edit</p>
        </Link>
      </div> */}
    </div>
  );
};

export default page;
