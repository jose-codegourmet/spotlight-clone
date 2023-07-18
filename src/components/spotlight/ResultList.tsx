import type { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';
import ResultItem from './ResultItem';

interface ResultListProps {
  searched: string;
  className?: string;
  items?: any[];
}

const ResultList: FC<ResultListProps> = (props) => {
  const { className = '', items: results = [], searched } = props;
  const componentClass = twMerge('h-auto flex-col overflow-x-hidden overflow-y-auto p-4 w-full md:w-1/2', className);

  const loopItems = () => {
    return results.map((item, k) => (
      <ResultItem
        key={`${k}-${item.id}-${item.firstName.toLowerCase().replace(' ', '-')}`}
        image={item.image}
        title={`${item.firstName} ${item.lastName}`}
        type="user"
      />
    ));
  };

  return (
    <div className={componentClass}>
      {results.length > 0 && <ul>{loopItems()}</ul>}
      {searched !== '' && results.length === 0 && (
        <div className="black h-full w-full">
          <span className="mt-10 w-full block text-center text-sm text-italic text-black dark:text-white">
            No results found
          </span>
        </div>
      )}
    </div>
  );
};

export default ResultList;
