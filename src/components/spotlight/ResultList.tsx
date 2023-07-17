import type { FC } from 'react';
import { twMerge } from 'tailwind-merge';

interface ResultListProps {
  className?: string;
  items: any[];
}

const ResultList: FC<ResultListProps> = (props) => {
  const { className = '', items: results } = props;
  const componentClass = twMerge('', className);

  const loopItems = () => {
    return results.map((item, k) => <li key={k}>test</li>);
  };

  return (
    <div className={componentClass}>
      <ul>{loopItems()}</ul>
    </div>
  );
};

export default ResultList;
