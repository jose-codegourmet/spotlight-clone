import Layout from '@/components/Layout';
import ResultList from '@/components/spotlight/ResultList';
import { CLOSE_SPOTLIGHT, OPEN_SPOTLIGHT } from '@/constants/hotkeys';
import useSearch from '@/hooks/useSearch';
import { FC, useState } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import { useQuery } from 'react-query';
import Image from 'next/image';

const HomePage: FC = () => {
  const [search, setSearch] = useState<string>('');
  const [openSpotlight, setOpenSpotlight] = useState<boolean>(false);
  useHotkeys(OPEN_SPOTLIGHT, () => setOpenSpotlight(true));
  useHotkeys(CLOSE_SPOTLIGHT, () => setOpenSpotlight(false));

  const { mutate: searchFn, data: searchResult, isLoading } = useSearch();

  const handleTypeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    searchFn(e.target.value);
  };

  return (
    <Layout className="relative h-screen w-screen overflow-hidden flex items-start  justify-center ">
      {openSpotlight ? (
        <>
          <div className="mt-[20vh] relative z-10 spotlight text-black drop-shadow-lg backdrop-blur-lg shadow-black   w-full max-w-[800px] rounded-lg overflow-hidden">
            <div className="fake-bg absolute  inset-0 w-full h-full bg-white bg-opacity-80 block pointer-events-none"></div>
            <div className="z-[5] relative spotlight__search w-full p-2 ">
              <input
                type="text"
                placeholder="Enter Search term"
                onChange={handleTypeSearch}
                value={search}
                className="text-2xl p-2 w-full bg-transparent outline-none"
              />
            </div>
            <div className="z-[5] relative spotlight__results h-[500px] w-full flex items-stretch">
              {searchResult?.results && searchResult.results.length > 0 && (
                <ResultList className="spotlight__results__list" items={searchResult.results} />
              )}
              <div className="spotlight__results__preview"></div>
            </div>
          </div>
          <div className="backdrop pointer-events-none absolute inset-0 w-full h-full z-[5] bg-white bg-opacity-20 block" />
        </>
      ) : (
        <div className="relative z-[10] p-4 rounded-lg bg-black bg-opacity-90 flex self-center justify-center">
          {`Press "C + Space" to open Spotlight`}
        </div>
      )}
      <div className="absolute inset-0 z-[1]">
        <Image
          src="/mac-bg.jpg"
          alt="bg"
          fill
          className="object-cover animate-[growShrink_50s_linear_infinite_alternate]"
        />
      </div>
    </Layout>
  );
};

export default HomePage;
