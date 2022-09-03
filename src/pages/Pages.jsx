import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { Home } from "../components/home/Home";
import { SideContent } from "../components/side/SideContent";
import { Header } from "../common/Header";
import { Resume } from "../components/page/Resume"
import { Portfolio } from "../components/page/Portfolio"
import { Blog } from "../components/page/Blog"
import { Contact } from "../components/page/Contact"


export const Pages = () => {
  return (
    <>
      <div className="main-div">
        <div className="side">
            <SideContent/>
        </div>
        <main>
            <BrowserRouter>
            <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/resume" element={<Resume/>}/>
                    <Route path="/portfolio" element={<Portfolio/>}/>
                    <Route path="/blog" element={<Blog/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
            </BrowserRouter>
        </main>
      </div>
    </>
  );
};
