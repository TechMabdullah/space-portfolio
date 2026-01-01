"use client";

import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-transparent text-gray-200 px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-around gap-10">
        <div className="min-w-[200px] text-center">
          <h3 className="font-bold mb-4">Community</h3>
          <a className="flex items-center justify-center gap-2 my-2 hover:text-purple-400">
            <FaYoutube /> Youtube
          </a>
          <a className="flex items-center justify-center gap-2 my-2 hover:text-purple-400">
            <RxGithubLogo /> Github
          </a>
          <a className="flex items-center justify-center gap-2 my-2 hover:text-purple-400">
            <RxDiscordLogo /> Discord
          </a>
        </div>

        <div className="min-w-[200px] text-center">
          <h3 className="font-bold mb-4">Social</h3>
          <a className="flex items-center justify-center gap-2 my-2 hover:text-purple-400">
            <RxInstagramLogo /> Instagram
          </a>
          <a className="flex items-center justify-center gap-2 my-2 hover:text-purple-400">
            <RxTwitterLogo /> Twitter
          </a>
          <a className="flex items-center justify-center gap-2 my-2 hover:text-purple-400">
            <RxLinkedinLogo /> LinkedIn
          </a>
        </div>

        <div className="min-w-[200px] text-center">
          <h3 className="font-bold mb-4">About</h3>
          <p className="my-2">Become Sponsor</p>
          <p className="my-2">Learning about me</p>
          <p className="my-2">mifwebchain@gmail.com</p>
        </div>
      </div>

      <p className="text-center text-sm text-gray-400 mt-10">
        © WebChain Dev {new Date().getFullYear()} Inc. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
