import SearchInput from './SearchInput';

function SearchBox() {
  return (
    <div className="container px-25 md:px-0 flex items-center justify-between my-35 md:mt-[100px]">
      <div>
        <h1 className="w-full font-semibold text-22 xs:text-28 md:text-[36px] text-center text-baseForeground ">
          Dexifier Swaps Explorer
        </h1>
        <p className="w-full flex flex-col md:flex-row items-center justify-center mt-10 md:mt-0 text-14 xs:text-16 md:text-[14px] text-neutral-200 text-center">
          <span>Track all transactions on Dexifier</span>
          <span className="ml-0 md:ml-5"> Exchange</span>
        </p>
      </div>
      <SearchInput />
    </div>
  );
}

export default SearchBox;
