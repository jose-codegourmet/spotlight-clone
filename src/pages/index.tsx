import Layout from '@/components/Layout';
import ResultList from '@/components/spotlight/ResultList';
import { OPEN_SPOTLIGHT } from '@/constants/hotkeys';
import useSearch from '@/hooks/useSearch';
import { FC, useState } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import { useQuery } from 'react-query';

const HomePage: FC = () => {
  const [search, setSearch] = useState<string>('');
  const [openSpotlight, setOpenSpotlight] = useState<boolean>(false);
  useHotkeys(OPEN_SPOTLIGHT, () => setOpenSpotlight(true));

  const { mutate: searchFn, data: searchResult, isLoading } = useSearch();

  const handleTypeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    searchFn(e.target.value);
  };

  return (
    <Layout className="h-screen w-screen overflow-x-hidden overflow-y-auto flex items-center justify-center ">
      {openSpotlight && (
        <div className="spotlight text-black">
          <div className="spotlight__search">
            <input type="text" onChange={handleTypeSearch} value={search} />
          </div>
          <div className="spotlight__results">
            {searchResult && (
              <textarea name="" id="" cols="30" rows="10">
                {searchResult}
              </textarea>
            )}
            {/* <ResultList className="spotlight__results__list" /> */}
            <div className="spotlight__results__preview"></div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default HomePage;
