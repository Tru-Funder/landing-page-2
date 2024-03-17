import { FOOTER_LINKS } from "@/constants/footer";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#070E2A] mt-3 py-16">
      <div className="custom-container grid gap-10">
        <span className="block relative w-40">
          <Image
            src="/assets/logo-white.svg"
            width={1000}
            height={1000}
            alt="TruFunder Logo"
          />
        </span>

        <div className="text-white grid grid-flow-col items-start">
          {/* Contacts and Socials */}
          <div className="grid gap-10">
            {/* Contacts */}
            <div className="grid gap-2">
              <h3 className="text-2xl font-bold">Contacts</h3>
              <ul>
                {FOOTER_LINKS.contacts.map((link, i) => (
                  <li key={i}>
                    <Link href={link.url}>{link.title}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Socials */}
            <div className="grid gap-2">
              <h3 className="text-2xl font-bold">Follow Us On</h3>
              <div className="grid grid-flow-col w-max gap-5">
                {FOOTER_LINKS.socials.map((link, i) => (
                  <Link key={i} href={link.url}>
                    <span
                      className={`relative block w-8 ${
                        link.alt === "Tiktok Icon" && "bg-white rounded-md"
                      }`}
                    >
                      <Image
                        src={link.icon_url}
                        width={1000}
                        height={1000}
                        alt={link.alt}
                      />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Important Links */}
          <div className="grid gap-2">
            <h3 className="text-2xl font-bold">Important Links</h3>
            <ul>
              {FOOTER_LINKS.importantLinks.map((link, i) => (
                <li key={i}>
                  <Link href={link.url}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Models */}
          <div className="grid gap-2">
            <h3 className="text-2xl font-bold">Models</h3>
            <ul>
              {FOOTER_LINKS.models.map((link, i) => (
                <li key={i}>
                  <Link href={link.url}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div className="grid gap-2">
            <h3 className="text-2xl font-bold">Community</h3>
            <ul>
              {FOOTER_LINKS.community.map((link, i) => (
                <li key={i}>
                  <Link href={link.url}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
