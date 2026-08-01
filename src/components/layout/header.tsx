import { LogoIcon } from "@/components/icons";
import { loginLink, navLinks } from "@/data";
import MobileMenu from "./mobile-menu";

export default function Header() {
  return (
    <header className="relative z-10 px-8 pt-9.5 lg:px-10 lg:pt-16">
      <div className="max-w-page relative mx-auto flex items-center justify-between">
        <LogoIcon className="size-6 lg:size-8" />

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="v-nav-link text-label text-very-dark-blue"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li aria-hidden="true">
              <span className="bg-grayish-blue block size-1.5 rounded-full" />
            </li>
            <li className="ms-1.75">
              <a
                href={loginLink.href}
                className="v-nav-link text-label text-very-dark-blue/65"
              >
                {loginLink.label}
              </a>
            </li>
          </ul>
        </nav>

        <MobileMenu />
      </div>
    </header>
  );
}
