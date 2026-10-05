// eslint-disable-next-line no-unused-vars
import React from "react";

function Footer() {
  return (
    <footer className="bg-neutral-primary-soft rounded-base shadow-xs border border-default">
      <div className="w-full mx-auto p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-body sm:text-center">
          © 2023{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Flowbite™
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-body sm:mt-0">
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
             Github
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
