import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import RouteLinks from "../routeLinks";
import { routes } from "../../routeConfig";
import Link from "next/link";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Example() {
    return (
        <Disclosure as="nav" className="w-full mx-auto bg-white shadow">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-black-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">
                                        Open main menu
                                    </span>
                                    {open ? (
                                        <XIcon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <MenuIcon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex-shrink-0 flex items-center">
                                    <h3 className="text-base text-white font-bold tracking-normal leading-tight ml-3 block lg:hidden h-8 w-auto">
                                        <span className="relative inline-block px-6 py-2">
                                            <div className="absolute inset-0 transform skew-x-12 bg-teal-accent-400" />

                                            <Link href="/dashboard">
                                                <a
                                                    href="#"
                                                    className="relative text-teal-900"
                                                >
                                                    LOGO
                                                </a>
                                            </Link>
                                        </span>
                                    </h3>

                                    <h3 className="text-base text-white font-bold tracking-normal leading-tight ml-3 hidden lg:block h-8 w-auto">
                                        <span className="relative inline-block px-6 py-2">
                                            <div className="absolute inset-0 transform skew-x-12 bg-teal-accent-400" />

                                            <Link href="/dashboard">
                                                <a
                                                    href="#"
                                                    className="relative text-teal-900"
                                                >
                                                    LOGO
                                                </a>
                                            </Link>
                                        </span>
                                    </h3>
                                </div>
                                <div className="hidden sm:block sm:ml-6">
                                    <div className="flex space-x-4">
                                        {routes.map((item, i) => (
                                            <Link
                                                key={i}
                                                href={`/${item.href}`}
                                            >
                                                <a
                                                    key={item.name}
                                                    href="#"
                                                    className={classNames(
                                                        item.current
                                                            ? "bg-gray-900 text-white"
                                                            : "text-black-300 hover:text-teal-accent-400",
                                                        "px-3 py-2 rounded-md text-sm font-medium",
                                                    )}
                                                    aria-current={
                                                        item.current
                                                            ? "page"
                                                            : undefined
                                                    }
                                                >
                                                    {item.name}
                                                </a>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <button className="bg-white-800 p-1 rounded-full text-black-400 hover:text-teal-accent-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-accent-400 focus:ring-teal-accent-400">
                                    <span className="sr-only">
                                        View notifications
                                    </span>
                                    <BellIcon
                                        className="h-6 w-6"
                                        aria-hidden="true"
                                    />
                                </button>

                                {/* Profile dropdown */}
                                <Menu as="div" className="ml-3 relative">
                                    {({ open }) => (
                                        <>
                                            <div>
                                                <Menu.Button className="bg-gray-800 flex text-sm rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-accent-400 focus:ring-white">
                                                    <span className="sr-only">
                                                        Open user menu
                                                    </span>
                                                    <img
                                                        className="h-8 w-8 rounded"
                                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                        alt=""
                                                    />
                                                </Menu.Button>
                                            </div>
                                            <Transition
                                                show={open}
                                                as={Fragment}
                                                enter="transition ease-out duration-100"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >
                                                <Menu.Items
                                                    static
                                                    className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                                                >
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <a
                                                                href="#"
                                                                className={classNames(
                                                                    active
                                                                        ? "bg-gray-100"
                                                                        : "",
                                                                    "block px-4 py-2 text-sm text-black-700",
                                                                )}
                                                            >
                                                                Your Profile
                                                            </a>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <a
                                                                href="#"
                                                                className={classNames(
                                                                    active
                                                                        ? "bg-gray-100"
                                                                        : "",
                                                                    "block px-4 py-2 text-sm text-black-700",
                                                                )}
                                                            >
                                                                Settings
                                                            </a>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <a
                                                                href="#"
                                                                className={classNames(
                                                                    active
                                                                        ? "bg-gray-100"
                                                                        : "",
                                                                    "block px-4 py-2 text-sm text-black-700",
                                                                )}
                                                            >
                                                                Sign out
                                                            </a>
                                                        )}
                                                    </Menu.Item>
                                                </Menu.Items>
                                            </Transition>
                                        </>
                                    )}
                                </Menu>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {routes.map((item) => (
                                <Link key={item.name} href={`/${item.href}`}>
                                    <a
                                        href="#"
                                        className={classNames(
                                            item.current
                                                ? "bg-gray-900 text-white"
                                                : "text-black-300 hover:text-teal-accent-400",
                                            "block px-3 py-2 rounded-md text-base font-medium",
                                        )}
                                        aria-current={
                                            item.current ? "page" : undefined
                                        }
                                    >
                                        {item.name}
                                    </a>
                                </Link>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}
