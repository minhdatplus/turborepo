// import { Head } from "../Head";
// import { Topbar } from "../topbar/Topbar";

import dynamic from 'next/dynamic'

import Screen from '../utils/Responsive'
// import { observer } from "mobx-react";
// import { usePageStore } from "../../lib/usePageStore";
import Header from '../header/index'
import Footer from '../footer/index'

// const Navbar = dynamic(import("../Navbar"));
// const Profile = dynamic(import("../Profile"));
// const ThemeSwitch = dynamic(import("../ThemeSwitch"));
// const LanguageSwitch = dynamic(import("../LanguageSwitch"));

const StaticLayout = ({ children }) => {
  // const { dataStore, detailStore } = usePageStore();
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default StaticLayout
