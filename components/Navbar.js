import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrFormClose } from "react-icons/gr";
import { Disclosure } from "@headlessui/react";

const Navigation = [
  { name: "Home", href: "/", current: true },
  { name: "AboutUs", href: "/aboutus", current: false },
  { name: "Service", href: "/service", current: false },
  { name: "Pricing", href: "/pricing", current: false },
  { name: "Testimonial", href: "/testimonial", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white">
      {({ open }) => (
        <>
          <div className="min-w-7xl mx-auto border-b border-gray-50 bg-white px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 mx-0 justify-between items-center md:mx-20">
              <div className="absolute flex items-center left-0 inset-y-0 sm:hidden">
                <Disclosure.Button className="inline-flex justify-center items-center rounded-md p-2 text-orange-500 hover:bg-orange-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <GrFormClose className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <GiHamburgerMenu
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 justify-center items-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <h2 className="cursor-pointer text-xl font-semibold">
                    Pet<span className="text-orange-500">Care</span>
                  </h2>
                </div>
                <div className="hidden sm:block sm:ml-6 md:ml-60">
                  <div className="flex space-x-4">
                    {Navigation.map((item) => (
                      <a
                        href={item.href}
                        key={item.name}
                        className={classNames(
                          item.current
                            ? "bg-orange-500 text-white shadow-lg"
                            : "text-gray-500 hover:bg-orange-500 hover:text-white hover:shadow-lg",
                          "rounded-full px-3 py-2 font-medium text-sm"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute right-0 inset-y-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button className="rounded-full px-3 py-2 text-sm font-medium border border-orange-100 text-orange-500 hover:bg-orange-500 hover:text-white hover:shadow-lg">
                  Register
                </button>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {Navigation.map((item) => (
                <Disclosure.Button
                  as="a"
                  href={item.href}
                  key={item.name}
                  className={classNames(
                    item.current
                      ? "bg-orange-500 text-white shadow-lg"
                      : "text-gray-500 hover:bg-orange-500 hover:text-white hover:shadow-lg",
                    "block rounded-md px-3 py-2 font-medium text-base"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
