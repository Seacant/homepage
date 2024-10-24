"use client";

import Link from "next/link";

import { Github, Linkedin, Mail } from "../components/Icons";

import { usePathname } from "next/navigation";

type NavItemProps = {
  title: string;
  href: string;
  children: React.ReactNode;
};
const NavItem: React.FC<NavItemProps> = ({ title, href, children }) => (
  <a title={title} href={href}>
    {children}
  </a>
);

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};
const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
  <Link href={href}>{children}</Link>
);

export const Header = () => {
  const pathname = usePathname();

  return (
    <header>
      <nav>
        {[
          ["/", "Home"],
          ["/blog", "Blog"],
          ["/resume", "Résumé"],
        ].map(([path, name]) => (
          <NavLink href={path} key={path}>
            {pathname === path ? <h1>{name}</h1> : name}
          </NavLink>
        ))}
      </nav>
      <address>
        <NavItem href="https://github.com/Seacant/" title="GitHub">
          <Github />
        </NavItem>
        <NavItem
          href="https://www.linkedin.com/in/travis-fletcher-a13771173/"
          title="LinkedIn"
        >
          <Linkedin />
        </NavItem>
        <NavItem href="mailto:contact@tfletch.tech" title="Email">
          <Mail />
        </NavItem>
      </address>
    </header>
  );
};
