import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}