import React from 'react';

interface NavbarProps {
  isSignedIn?: boolean;
  userInitials?: string;
  onSignIn?: () => void;
  onSignOut?: () => void;
}

const Navbar = ({
  isSignedIn = false,
  userInitials = 'TA',
  onSignIn,
  onSignOut,
}: NavbarProps) => {
  return (
    <nav className='w-full h-14 bg-white border-b border-gray-200 px-6 fixed'>
      <div className='flex items-center justify-between min-h-full'>
        {/* Logo */}
        <div className='flex items-center'>
          <div className='w-5 h-5 bg-black transform rotate-45 rounded-sm'></div>
          <span className='hidden md:block ml-3 text-xl font-semibold text-gray-900'>
            Zen Tasks
          </span>
        </div>

        {/* Navigation Items */}
        <div className='flex items-center space-x-6'>
          <a
            href='#'
            className='text-gray-600 hover:text-gray-900 transition-colors duration-200'
          >
            About us
          </a>

          {isSignedIn ? (
            <div className='flex items-center space-x-4'>
              <div
                className='w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-600 transition-colors duration-200'
                onClick={onSignOut}
                title='Click to sign out'
              >
                <span className='text-white font-medium text-sm'>
                  {userInitials}
                </span>
              </div>
            </div>
          ) : (
            <button
              onClick={onSignIn}
              className='px-3 py-1 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors duration-200'
            >
              Sign in
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
