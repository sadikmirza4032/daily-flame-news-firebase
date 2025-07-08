import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import LatestLayout from "../Components/LatestLayout";
import LeftLayout from "../Components/layout-components/LeftLayout";
import NavBar from "../Components/NavBar";
import RightLayout from "./RightLayout";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto">
          <LatestLayout></LatestLayout>
        </section>
      </header>
      <nav className="w-11/12 mx-auto">
        <NavBar></NavBar>
      </nav>
      <main className="w-11/12 mx-auto grid md:grid-cols-12 gap-3 ">
        <aside className="left col-span-3 "><LeftLayout></LeftLayout></aside>
        <section className="main col-span-6"><Outlet></Outlet></section>
        <aside className="right  col-span-3"><RightLayout></RightLayout></aside>
      </main>
    </div>
  );
};

export default HomeLayout;
