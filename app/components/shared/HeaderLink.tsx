import Link from "next/link";
import React from "react";

interface HeaderLinkInterface {
  href: string;
  children: React.ReactNode;
}
const HeaderLink = ({ children, href }: HeaderLinkInterface) => {
  return <Link href={href}>{children}</Link>;
};

export default HeaderLink;
