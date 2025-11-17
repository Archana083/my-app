"use client";
import img1 from "../../public/images/logo.webp";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Header() {
  const pathname = usePathname();
  const menu = [
    { name: "Home", href: "/" },
    { name: "Hardware", href: "/hardware" },
    { name: "Software", href: "/software" },
    { name: "Who We Are", href: "/who-we-are" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  return (
    <div
      className="rounded-[6.188rem] flex flex-col items-start gap-[0.625rem] self-stretch bg-[#202020]"
      style={{
        boxShadow: `
    inset 0 0 0 1px rgba(255,255,255,0.25),
    inset 0 6px 12px rgba(255,255,255,0.10),
    inset 0 -6px 12px rgba(255,255,255,0.08)
  `,
      }}
    >
      <div
        className="flex p-4 flex-col items-center gap-[0.633rem] self-stretch rounded-full"
        style={{ background: "rgba(255, 255, 255, 0.05)" }}
      >
        <div className="flex p-0 justify-between items-center self-stretch ">
          <Image src={img1} alt="Logo" className="2xl:w-[200px] w-[150px]" />
          <nav className="md2:flex items-center lg:gap-5 gap-3 hidden">
            {menu.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={
                  `font-mono text-placeholder-subtle leading-7 2xl:text-[1.125rem] lg:text-[1rem] text-[0.875rem]` +
                  (pathname === item.href
                    ? "text-brand-tertiary_alt font-bold"
                    : "text-placeholder-subtle font-medium")
                }
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button className="md2:hidden text-white">☰</button>
            <button className="md2:flex hidden justify-center items-center py-[0.625rem] 2xl:px-4 px-3 gap-[0.375rem] rounded-full bg-[#535862]">
              {" "}
              <span className="text-[#FFF] font-mono text-[1rem] font-medium leading-6 ">
                Log in
              </span>
            </button>
            <button className="md2:flex hidden justify-center items-center py-[0.625rem] 2xl:px-4 px-3 gap-[0.375rem] rounded-full bg-[#FF8000]">
              {" "}
              <span className="text-[#181D27] font-mono text-[1rem] font-medium leading-6 ">
                Sign up
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
