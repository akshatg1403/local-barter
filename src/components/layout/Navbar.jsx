import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <Link to="/" className="flex-shrink-0 flex items-center">
                  <span className="text-2xl font-bold text-primary">
                    LocalBarter
                  </span>
                </Link>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <Link
                    to="/browse"
                    className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-primary"
                  >
                    Browse
                  </Link>
                  <Link
                    to="/add-item"
                    className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-primary"
                  >
                    Add Item
                  </Link>
                </div>
              </div>
              
              <div className="flex items-center">
                <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90">
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
