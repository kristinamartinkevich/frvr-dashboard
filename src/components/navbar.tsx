
import { Link } from "@nextui-org/link";
import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";

import { ThemeSwitch } from "@/components/theme-switch";
import Logo from "@/assets/icons/FRVR.svg";
import { useDashboardStore } from "@/store";

export const Navbar = () => {
  const { setLoggedIn } = useDashboardStore();

  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <Link
            className="flex justify-start items-center gap-1"
            color="foreground"
            href="/"
          >
            <img
              src={Logo}
              width="100"
              height="40"
            />
          </Link>
        </NavbarBrand>
        <div className="hidden lg:flex gap-4 justify-start ml-2 justify-between items-center">
          <NavbarItem key={"/"}>
            <Link
              color="foreground"
              href={"/"}
            >
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" onClick={() => setLoggedIn(false)} >Log Out</Link>
          </NavbarItem>
        </div>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          <NavbarMenuItem key={`${"/"}-${1}`}>
            <Link
              color={
                "primary"
              }
              href="#"
              size="lg"
            >
              Home
            </Link>
            <NavbarItem>
              <Link onClick={() => setLoggedIn(false)} >Log Out</Link>
            </NavbarItem>
          </NavbarMenuItem>
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
