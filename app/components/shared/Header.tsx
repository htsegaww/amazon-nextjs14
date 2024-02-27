import { Menu, ShoppingCart } from "lucide-react";
import HeaderLink from "./HeaderLink";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

const Header = () => {
  const linkList = [
    "Medical Care",
    "Groceries",
    "Prime Video",
    "Amazon basics",
    "livestreams",
    "buy Again",
    "Household,Health & Baby care",
    "Shop by Interest",
    "sell",
    "subscribe & save",
    "Gift cards",
    "Amazon Home",
    "Fashion",
  ];
  return (
    <>
      <header className="bg-[#131a21] text-white flex flex-col ">
        <div className="flex items-center justify-evenly">
          <Logo />
          <SearchBar />

          <div className="flex items-center justify-center gap-5">
            <HeaderLink href="/orders">
              <div className="text-xs">
                <p>Returns</p> <span className="font-extrabold ">& Orders</span>
              </div>
            </HeaderLink>

            <HeaderLink href="/cart">
              <div className=" flex justify-center items-center gap-1">
                <ShoppingCart size={30} className="text-xs font-extrabold" />
                <span className="text-sm font-extrabold mt-3">cart</span>
              </div>
            </HeaderLink>
          </div>
        </div>
      </header>

      <div className="bg-[#22303e] text-white px-3 flex items-center justify-between text-sm p-2">
        <HeaderLink href="/all">
          <div className="flex items-center hover:text-orange-400">
            <Menu />
            <span className="font-bold hover:text-orange-400">All</span>
          </div>
        </HeaderLink>

        {linkList.map((link) => {
          return (
            <HeaderLink href={`/${link}`} key={link}>
              <div className="hover:text-orange-400">{link}</div>
            </HeaderLink>
          );
        })}

        <HeaderLink href="black-owned-business">
          <span className="font-bold hover:text-orange-400">
            Shop Black-owned business
          </span>
        </HeaderLink>
      </div>
    </>
  );
};

export default Header;
