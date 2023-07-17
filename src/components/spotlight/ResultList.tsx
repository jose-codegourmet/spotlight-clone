import type { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';

interface ResultListProps {
  className?: string;
  items: any[];
}

const ResultList: FC<ResultListProps> = (props) => {
  const { className = '', items: results } = props;
  const componentClass = twMerge('h-auto flex-col overflow-x-hidden overflow-y-auto p-4 w-full md:w-1/2', className);

  const loopItems = () => {
    return results.map((item, k) => (
      <li key={k} className="w-full p-2 flex items-center justify-start">
        <Image
          src={item.image}
          alt={`${item.username} avatar`}
          width={50}
          height={50}
          className="rounded-full overflow-hidden bg-neutral-600 "
        />
        <span className="ml-auto text-black">
          {item.firstName} {item.lastName}
        </span>
      </li>
    ));
  };

  return (
    <div className={componentClass}>
      <ul>{loopItems()}</ul>
    </div>
  );
};

export default ResultList;
