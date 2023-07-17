import { FC } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';

const HomePage: FC = () => {
  useHotkeys('c+space', () => alert('open spotlight'));
  return <div>test</div>;
};

export default HomePage;
