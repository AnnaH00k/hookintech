"use client";

import { useEffect } from "react";
import Link from "next/link";


export default function SelfEmployment() {


  return (
    <div className="min-h-screen bg-[#0A1109] pt-[7vh] text-[#A0A2A0] p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Self Employment</h1>

      <section className="max-w-4xl mx-auto mb-12 bg-[#1A211A]  rounded-lg p-6">
      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link
            href="/ideas"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-4 bg-[#2A312A] rounded-lg hover:bg-[#3A413A] transition-colors duration-200"
          >
            <div className="text-center">
              <h3 className="font-medium text-lg mb-2">Ideas</h3>
              <p className="text-sm text-[#808280]">Digital Products with Businessplans</p>
            </div>
          </Link>

          <Link
            href="/hookbook"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-4 bg-[#2A312A] rounded-lg hover:bg-[#3A413A] transition-colors duration-200"
          >
            <div className="text-center">
              <h3 className="font-medium text-lg mb-2">Writing</h3>
              <p className="text-sm text-[#808280]">
                Write & optimise process
              </p>
            </div>
          </Link>
         
          
        </div>
      </section>







      <section className="flex flex-col items-center opacity-0 justify-center max-w-4xl mx-auto mb-12 bg-[#1A211A]  rounded-lg p-6">
        <h2 className="text-2xl text-center font-semibold mb-4 text-[#C0C2C0]">
           Social Anxiety Ideas
        </h2>
        <div className="grid grid-cols-1  gap-4">
          <Link
            href="/swimmingCourses"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-4 bg-[#2A312A] rounded-lg hover:bg-[#3A413A] transition-colors duration-200"
          >
            <div className="text-center">
              <h3 className="font-medium text-lg mb-2">Swimming Courses</h3>
              <p className="text-sm text-[#808280]">Teach swimming lessons</p>
            </div>
          </Link>
          <Link
            href="/studyvation"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-4 bg-[#2A312A] rounded-lg hover:bg-[#3A413A] transition-colors duration-200"
          >
            <div className="text-center">
              <h3 className="font-medium text-lg mb-2">App Development</h3>
              <p className="text-sm text-[#808280]">Build and launch FaBapp</p>
            </div>
          </Link>
        
       
        
        </div>
      </section>


      
         



    </div>
  );
}
