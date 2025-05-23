
import { navLists } from '../constants';
import { appleImg, bagImg, searchImg } from '../utils';
const Navbar = () => {
  return (
    <header className='w-full py-5 sm:px-10 flex justify-between items-center'>
      <nav className='flex w-full screen-max-width gap-3'>
        <img src={appleImg} alt="Apple" width={14} height={18} />
        <div className='flex flex-1 items-center justify-center gap-x-5 max-sm:hidden'>
          {navLists.map((nav) => (
            <div
              key={nav}
              className='text-sm cursor-pointer text-gray-500 hover:text-white transition-all'
            >
              {nav}
            </div>
          ))}
        </div>

        <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
          <img src={searchImg} alt="Search" width={14} height={18} />
              <img src={bagImg} alt="Search" width={14} height={18} />
        </div>
    
      </nav>
    </header>
  );
}

export default Navbar