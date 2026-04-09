import { Button } from "../ui/button";
import { MenuIcon, WalletIcon } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex py-4 md:py-5 px-6 md:px-15 items-center justify-between w-full">
      <div className="flex items-center gap-3 md:gap-4">
        <Button className="bg-transparent border-1 border-white rounded-full h-12 w-12 md:h-15 md:w-15 p-0 flex items-center justify-center">
          <MenuIcon className="!w-6 !h-6 md:!w-8 md:!h-8" />
        </Button>
        <span className="font-bold text-3xl lg:text-4xl text-white inline-block origin-left scale-y-[1.5] md:scale-y-[2] tracking-[-0.05em] md:tracking-[-0.1em]">
          WEB3
        </span>
      </div>
      <Button className="bg-transparent border-1 border-white h-12 md:h-15 px-4 sm:px-6 md:px-10 rounded-full flex items-center gap-2">
        <WalletIcon className="!w-5 !h-5 md:!w-6 md:!h-6" />
        <span className="hidden sm:inline-block text-sm md:text-base font-semibold">
          CONNECT WALLET
        </span>
      </Button>
    </nav>
  );
};

export default Navbar;
