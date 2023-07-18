import { useState, type FC, useCallback } from 'react';
import { twMerge } from 'tailwind-merge';
import { BsSearch } from 'react-icons/bs';
import { RootState } from '@/redux/reducers';
import { useDispatch, useSelector } from 'react-redux';
import { closePreview } from '@/redux/reducers/spotlight';
import { debounce } from 'lodash';

interface SearchBarProps {
  className?: string;
  searchFn: (search: string) => void;
}

const SearchBar: FC<SearchBarProps> = (props) => {
  const dispatch = useDispatch();
  const { className = '', searchFn } = props;
  const [search, setSearch] = useState<string>('');
  const { openedObj } = useSelector((state: RootState) => state.spotlight);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const triggerSearch = useCallback(
    debounce((value: string) => {
      searchFn(value);
      if (openedObj) {
        dispatch(closePreview());
      }
    }, 500),
    [openedObj],
  );

  const handleTypeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);

    triggerSearch(e.target.value);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  // const debouncedHandleTypeSearch = useCallback(debounce(handleTypeSearch, 300), []);

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
        placeholder="Spotlight Search"
        onChange={handleTypeSearch}
        value={search}
        className="text-2xl p-2 w-full bg-transparent outline-none"
      />
    </div>
  );
};

export default SearchBar;
