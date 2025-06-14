import { Outlet, useLocation } from "react-router-dom";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import { ROUTES } from "../constants/routes";

function Layout() {
  const location = useLocation();
  const isHomePage = location.pathname === ROUTES.HOME;

  return (
    <section className="px-5 lg:px-10 bg-charcoal">
      <Navbar />

      <div className="grid lg:grid-cols-5 gap-10 py-5">
        <div
          className={`${
            !isHomePage ? "hidden md:flex" : "flex"
          } lg:sticky lg:top-8 lg:col-span-2 h-[70vh] md:h-[55vh] lg:h-[90vh] rounded-3xl overflow-hidden`}
        >
          <Profile />
        </div>

        <div className="lg:col-span-3 flex flex-col gap-[60px] lg:gap-12">
          <Outlet />
          <Contact />

          <div
            className={`${
              isHomePage ? "hidden" : "flex md:hidden"
            } overflow-hidden rounded-4xl`}
          >
            <Profile />
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
}

export default Layout;
