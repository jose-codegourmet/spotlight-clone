import { useState, type FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { BsSearch } from 'react-icons/bs';

interface SearchBarProps {
  className?: string;
  searchFn: (search: string) => void;
}

const SearchBar: FC<SearchBarProps> = (props) => {
  const { className = '', searchFn } = props;
  const [search, setSearch] = useState<string>('');

  const handleTypeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    searchFn(e.target.value);
  };

  const componentClass = twMerge(
    `
    spotlight__search
    w-full
    p-2
    flex
    items-center
    flex-nowrap
    border-b-[.5px]
    border-neutral-400
    dark:border-neutral-600
  `,
    className,
  );

  return (
    <div className={componentClass}>
      <div className="shrink-0 flex items-center justify-center p-4  dark:text-white text-black opacity-90 dark:opacity-50">
        <BsSearch size={24} />
      </div>
      <input
        type="text"
        placeholder="Enter Search term"
        onChange={handleTypeSearch}
        value={search}
        className="text-2xl p-2 w-full bg-transparent outline-none"
      />
    </div>
  );
};

export default SearchBar;
