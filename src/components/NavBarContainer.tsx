import React from 'react';
import Link from "next/link";
import type {UrlObject} from "url";
import Image from "next/image";
import profilePic from '../../public/images/avatar.jpeg'

interface NavBarContainerProps {
  children: React.ReactNode;
  title: string;
  links: {
    href: (string | UrlObject);
    title: string
  }[]
}

const NavBarContainer: React.FC<NavBarContainerProps> = ({title, children, links}) => {

  function renderLinks() {
    return links.map((l, i) => {
      return (
          <li key={i}>
            <Link href={l.href}>{l.title}</Link>
          </li>
      );
    })
  }

  return (
      <div className="flex-1 drawer">
        <input id="nav-drawer" type="checkbox" className="drawer-toggle"/>
        <div className="drawer-content flex flex-col">
          <div className="w-full navbar bg-neutral text-neutral-content h-18">
            <div className="flex-none hidden lg:block w-12 h-12">
              <div className="avatar">
                <div className="w-12 rounded-full">
                  <Image alt={'Profile image'} src={profilePic} />
                </div>
              </div>
            </div>
            <div className="flex-none lg:hidden w-12 h-12">
              <label htmlFor="nav-drawer" className="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                     className="inline-block w-6 h-6 stroke-current">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2">
              <Link href="/"><h1 className={'text-4xl font-semibold'}>{title}</h1></Link>
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                {renderLinks()}
              </ul>
            </div>
          </div>
          {children}
        </div>
        <div className="drawer-side">
          <label htmlFor="nav-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200">
            {renderLinks()}
          </ul>
        </div>
      </div>
  );
};
export default NavBarContainer;