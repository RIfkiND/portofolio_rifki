"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
// import { ModeToggle } from "@/components/Theme/ModeToggle";
import { useState } from "react";

export default function MainHeader() {
  const navItems = [
    {
      name: "About",
      link: "#about",
    },
    {
      name: "VSCode Portfolio",
      link: "#vscode",
    },
    {
      name: "Projects",
      link: "/project",
    },
    {
      name: "Blog",
      link: "/blog",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderAuthSection = () => {
    return (
      <>
        <NavbarButton href="/cv/CV_Rifki.pdf" variant="secondary" download>
          Download CV
        </NavbarButton>
        <NavbarButton
          href="mailto:rifkinauvaldzaki08@gmail.com"
          variant="primary"
          className="bg-blue-600 hover:bg-blue-700 text-white shadow-[0_0_24px_rgba(37,99,235,0.3)]"
        >
          Contact Me
        </NavbarButton>
      </>
    );
  };

  const renderMobileAuthSection = () => {
    return (
      <div className="flex w-full flex-col gap-4">
        <NavbarButton
          href="/cv/CV_Rifki.pdf"
          onClick={() => setIsMobileMenuOpen(false)}
          variant="secondary"
          className="w-full"
          download
        >
          Download CV
        </NavbarButton>
        <NavbarButton
          href="mailto:rifkinauvaldzaki08@gmail.com"
          onClick={() => setIsMobileMenuOpen(false)}
          variant="primary"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white"
        >
          Contact Me
        </NavbarButton>
      </div>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-transparent backdrop-blur-md border-b border-white/10">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            {/* <ModeToggle /> */}
            {renderAuthSection()}
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <div className="flex items-center gap-2">
              {/* <ModeToggle /> */}
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </div>
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-white"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            {renderMobileAuthSection()}
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      {/* Navbar */}
    </header>
  );
}
