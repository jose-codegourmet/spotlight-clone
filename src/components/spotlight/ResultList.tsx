import type { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';
import ResultItem from './ResultItem';
import { SPOTLIGHT_LABELS } from '@/constants/spotlightLabels';

interface ResultListProps {
  searched: string;
  className?: string;
  items?: any[];
  handleItemClick: (item: any) => void;
  entity: string;
}

const ResultList: FC<ResultListProps> = (props) => {
  const { className = '', items: results = [], searched, handleItemClick, entity } = props;
  const componentClass = twMerge(
    `
    w-full
    flex-col
    p-4
  `,
    className,
  );

  const loopItems = () => {
    return results.map((item, k) => (
      <li key={`${k}-${item.id}-${item.firstName.toLowerCase().replace(' ', '-')}`}>
        <ResultItem
          key={`${k}-${item.id}-${item.firstName.toLowerCase().replace(' ', '-')}`}
          image={item.image}
          title={`${item.firstName} ${item.lastName}`}
          type="user"
          handleItemClick={() => handleItemClick({ ...item, entity })}
        />
      </li>
    ));
  };

  return (
    <div className={componentClass}>
      {results.length > 0 && (
        <div className="w-full" data-entity={entity}>
          <p className="text-[10px]  uppercase w-full mb-2">{SPOTLIGHT_LABELS[entity].catergoryLabel}</p>
          <ul>{loopItems()}</ul>
        </div>
      )}
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
