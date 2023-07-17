import Layout from '@/components/Layout';
import { OPEN_SPOTLIGHT } from '@/constants/hotkeys';
import { FC, useState } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';

const HomePage: FC = () => {
  const [openSpotlight, setOpenSpotlight] = useState();
  useHotkeys(OPEN_SPOTLIGHT, () => alert('open spotlight'));

  return (
    <Layout className="h-screen w-screen overflow-x-hidden overflow-y-auto flex items-center justify-center ">
      {openSpotlight && (
        <div className="spotlight">
          <div className="spotlight__search">test</div>
          <div className="spotlight__results">
            <div className="spotlight__results__list">
              <ul>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
              </ul>
            </div>
            <div className="spotlight__results__preview"></div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default HomePage;
