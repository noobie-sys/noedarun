
'use client'
import { ThemeSwitch } from "@/components/theme-switch";
import Link from "next/link";
import MobileNav from "./Nav/Nav";
import { ArrowRight, Menu } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { useRecoilState } from "recoil";
import { navbarModalState } from "@/context/navbarModalState";
import "./nav.css";
import NavbarDestop from "./DesktopNavbar";
import { useParams, usePathname } from "next/navigation";
// import {handleCartClick} from useShoppingCart()
import { useShoppingCart } from "use-shopping-cart";


export const Navbar = () => {
  const [open, setOpen] = useRecoilState(navbarModalState);
  const {handleCartClick,cartCount} = useShoppingCart()

  // const data : NavbarCategory[]  = await getProductImage()

  const navModalState = () => {
    setOpen((prev) => ({
      ...prev,
      open: !prev.open,
    }));
  };
  const pathname = usePathname()
  const params = useParams()
  return (
    <nav className="w-full  px-5 lg:px-16 lg:py-6 flex items-center justify-between relative ">
      <div className="logo   flex justify-center items-center ">
        <Link href={"/"} className="relative lg:z-[52] ">
          <svg
            viewBox="0 0 99 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className={`w-24 h-24 fill-black dark:fill-slate-50 ${pathname === '/products/'+params.slug ? "fill-white" : ""}`}
          >
            <path d="M98.327 9.577l-.5 1.096c-.096.192-.192.442-.27.596a6.593 6.593 0 00-.25-.577l-.519-1.134h-.346v1.98h.25v-.634-1.02c.058.155.116.29.193.443l.557 1.192h.231l.538-1.192c.078-.173.135-.308.193-.442v1.654h.25V9.577h-.327zM94.48 9.788h.75v1.77h.27v-1.77h.75v-.211h-1.77v.211zM94 17.27c0-2.116-1.385-3.52-4.885-3.52-3.653 0-5.115 1.52-5.269 4h2.827c.115-1.423.788-1.865 2.423-1.865 1.654 0 2.135.538 2.135 1.461 0 .866-.577 1.212-1.654 1.346l-1.77.154c-3.326.327-4.5 1.712-4.5 3.654 0 2.27 1.731 3.52 4.231 3.52 1.731 0 3-.616 3.77-1.712.038.577.134 1.115.327 1.423H94.5c-.327-.462-.48-1.385-.48-2.231v-6.23H94zm-2.77 3.845c0 2.039-1.5 2.866-3.019 2.866-1.326 0-1.98-.616-1.98-1.596 0-.924.519-1.5 2.115-1.674l1.539-.172c.615-.078 1.038-.212 1.346-.481v1.057zM78.98 15.558c-.788-1.135-2-1.789-3.615-1.789-3.25 0-5.269 2.404-5.269 6.135 0 3.73 2.02 6.134 5.27 6.134 1.672 0 2.903-.73 3.71-1.903v1.634h2.77V9.577h-2.865v5.98zm-2.96 8.115c-1.847 0-3-1.211-3-3.673 0-2.48 1.153-3.865 3-3.865 1.865 0 3.018 1.288 3.018 3.769 0 2.461-1.153 3.77-3.019 3.77zM65.596 16.115V14.02h-2.77V25.75h2.866v-5.962c0-2.23 1.27-3.269 3.385-3.269h.73v-2.634c-.25-.039-.46-.039-.71-.039-1.808 0-2.924.962-3.5 2.27zM55.308 13.75c-3.577 0-5.981 2.404-5.981 6.135 0 3.73 2.404 6.134 5.98 6.134 3.578 0 5.962-2.404 5.962-6.134 0-3.731-2.384-6.135-5.961-6.135zm0 9.923c-1.866 0-3.039-1.288-3.039-3.77 0-2.48 1.173-3.768 3.039-3.768 1.846 0 3.038 1.288 3.038 3.769 0 2.461-1.192 3.77-3.038 3.77zM43.654 13.75c-1.654 0-2.904.846-3.654 1.961V14.04h-2.77v11.73h2.866v-6.577c0-2.096 1.366-2.961 2.616-2.961 1.461 0 2.211.73 2.211 2.23v7.289h2.865v-7.77c-.019-2.788-1.692-4.23-4.134-4.23zM26.673 5.327s-2.923-1-6.98-1.692L20.922.75A4.057 4.057 0 0020 .52c-.154-.02-.327-.058-.48-.078h-.02A37.803 37.803 0 0013.865 0C6.712 0 0 2.308 0 2.308v16.5a16.64 16.64 0 006.692 13.327l-1.23 2.884.73.52.231.153L12.711 40l6.481-4.288a16.624 16.624 0 007.462-14.193V5.327h.02zM3.096 18.557V4.636C5.481 4 9.616 3.096 13.866 3.096c1.75 0 3.46.154 5.057.385L7.943 29.192a13.51 13.51 0 01-4.847-10.634zm14.385 14.558l-4.75 3.154-4.596-3.154a7.521 7.521 0 01-.789-.577l11.096-25.98c1.02.154 1.981.346 2.846.519.866.192 1.635.385 2.289.558v13.942a13.509 13.509 0 01-6.096 11.538z"></path>
          </svg>
        </Link>
      </div>   

      <div className="hidden lg:flex">
        {/* <div className="w-full h-screen opacity-50 bg-black"></div> */}
        <NavbarDestop />
      </div>
      <div className="right-side relative z-[10]  flex gap-5 items-center ">
        <ThemeSwitch />
        <div className="flex gap-2" onClick={() => handleCartClick()}>
          <div className="cart-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`${pathname === '/products/'+params.slug ? " text-white" : ""}`}
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
          </div>
          <div className={`w-5 h-5 rounded-full bg-black dark:bg-white dark:text-black text-white text-[10px] text-center flex justify-center items-center `}>
            {cartCount}
          </div>
        </div>
        <div
          onClick={navModalState}
          className="burger-menu relative  lg:hidden cursor-pointer"
        >
          <Menu />
        </div>
        <AnimatePresence mode="wait">
          {open.open && <MobileNav />}
          {/* {isHovered && <Nav />} */}
        </AnimatePresence>
      </div>
    </nav>
  );
};

{
  /* <ThemeSwitch /> */
}
