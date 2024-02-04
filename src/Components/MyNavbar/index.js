// MyNavbar.jsx
import { Fragment } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import "../MyNavbar/index.css";

export default function MyNavbar() {
  return (
    <>
      <Disclosure as="nav" className="my-navbar shadow-lg sticky top-0 z-50">
        {({ open }) => (
          <>
            <div className="mx-auto p-2 max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center">
                <div className="flex items-center w-full justify-between">
                  <div className="lg:mr-24">
                    <img
                      className="h-10 rounded w-auto navbar-logo ml-5"
                      src="https://media.istockphoto.com/id/1205650605/vector/master-chef-symbol.jpg?s=612x612&w=0&k=20&c=5-Ve09633yClmlP02mOwiIPC3Tn3mCyxcut5WvDU6Wo="
                      alt="AI CHEF MASTER"
                    />
                  </div>

                  <div className="hidden sm:block">
                    <div className="flex self-start space-x-4 ">
                      <a
                        href="/"
                        className={`nav-link ${
                          window.location.pathname === "/" ? "active" : ""
                        } rounded-md px-3 py-2 text-sm font-medium `}
                      >
                        Home
                      </a>
                      <a
                        href="/product"
                        className={`nav-link ${
                          window.location.pathname === "/product"
                            ? "active"
                            : ""
                        } rounded-md px-3 py-2 text-sm font-medium`}
                      >
                        Product
                      </a>
                      <a
                        href="/career"
                        className={`nav-link ${
                          window.location.pathname === "/career" ? "active" : ""
                        } rounded-md px-3 py-2 text-sm font-medium`}
                      >
                        Career
                      </a>
                      <a
                        href="/company"
                        className={`nav-link ${
                          window.location.pathname === "/company"
                            ? "active"
                            : ""
                        } rounded-md px-3 py-2 text-sm font-medium`}
                      >
                        Company
                      </a>
                    </div>
                  </div>
                  <div className="sm:hidden">
                    <Disclosure.Button className="text-white font-extrabold p-2">
                      {open ? (
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                <a
                  href="/"
                  className={` text-black  hover:bg-gray-100 hover:text-white block rounded-md px-3 py-2 text-base font-medium ${
                    window.location.pathname === "/" ? "active" : ""
                  }`}
                >
                  HOME
                </a>
                <a
                  href="/product"
                  className={`text-black  hover:bg-gray-100 hover:text-white block rounded-md px-3 py-2 text-base font-medium ${
                    window.location.pathname === "/product" ? "active" : ""
                  }`}
                >
                  PRODUCT
                </a>
                <a
                  href="/career"
                  className={`text-black hover:bg-gray-100 hover:text-white block rounded-md px-3 py-2 text-base font-medium ${
                    window.location.pathname === "/career" ? "active" : ""
                  }`}
                >
                  CAREER
                </a>
                <a
                  href="/company"
                  className={`text-black hover:bg-gray-100 hover:text-white block rounded-md px-3 py-2 text-base font-medium ${
                    window.location.pathname === "/company" ? "active" : ""
                  }`}
                >
                  COMPANY
                </a>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}
