import Image from 'next/image';
import Link from 'next/link';
import openseaLogo from '../assets/opensea.png';
import { AiOutlineSearch } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { MdOutlineAccountBalanceWallet } from 'react-icons/md';

const style = {
  wrapper: `bg-white w-screen px-[1.2rem] py-[0.8rem] flex shadow-md`,
  logoContainer: `flex items-center cursor-pointer`,
  logoText: ` ml-[0.8rem] text-[#03111d] font-semibold text-2xl`,
  searchBar: `flex flex-1 mx-[0.8rem] w-max-[520px] items-center bg-white border border-gray rounded-[0.8rem]`,
  searchIcon: `text-[#8a939b] mx-3 font-bold text-lg`,
  searchInput: `h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b]`,
  headerItems: ` flex items-center justify-end`,
  headerItem: `text-white px-4 font-bold text-headerItems-rgba hover:text-headerItems-hover-rgba cursor-pointer`,
  headerIcon: `text-headerItems-rgba text-3xl font-black px-4 hover:text-headerItems-hover-rgba cursor-pointer`,
};

const Header = () => {
  return (
    <div className={style.wrapper} height={72}>
      <Link href='/'>
        <div className={style.logoContainer}>
          <Image src={openseaLogo} height={40} width={40} />
          <div className={style.logoText}>OpenSea</div>
        </div>
      </Link>
      <div className={style.searchBar}>
        <div className={style.searchIcon}>
          <AiOutlineSearch />
        </div>
        <input
          className={style.searchInput}
          placeholder='Search items, collections, and accounts'
        ></input>
      </div>
      <div className={style.headerItems}>
        <Link href='/explore/0x5Dcd580304d16b10b6F8158362AA4791713a8Ee6'>
          <div className={style.headerItem}>Explore</div>
        </Link>
        <div className={style.headerItem}>Stats</div>
        <div className={style.headerItem}>Resources</div>
        <Link href='/create'>
          <div className={style.headerItem}>Create</div>
        </Link>
        <div className={style.headerIcon}>
          <CgProfile />
        </div>
        <div className={style.headerIcon}>
          <MdOutlineAccountBalanceWallet />
        </div>
      </div>
    </div>
  );
};
export default Header;
