import React from "react";
import { Outlet } from "react-router-dom"
import { FooterHome } from "../components/home/FooterHome";

export const Homelayout : React.FC = () => {
  return (
    <div>
      <main>
        <Outlet />
      </main>
      <FooterHome />
    </div>
  )
}