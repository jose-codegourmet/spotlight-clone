import Layout from '@/components/Layout';
import ResultList from '@/components/spotlight/ResultList';
import { CLOSE_SPOTLIGHT, OPEN_SPOTLIGHT } from '@/constants/hotkeys';
import useSearch from '@/hooks/useSearch';
import { FC, useState } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import { useQuery } from 'react-query';
import Image from 'next/image';
import { BsSearch } from 'react-icons/bs';
import SearchBar from '@/components/spotlight/SearchBar';

const HomePage: FC = () => {
  const [openSpotlight, setOpenSpotlight] = useState<boolean>(false);
  useHotkeys(OPEN_SPOTLIGHT, () => setOpenSpotlight(true));
  useHotkeys(CLOSE_SPOTLIGHT, () => setOpenSpotlight(false));

  const { data: searchResult, mutate: searchFn } = useSearch();

  return (
    <Layout className="relative h-screen w-screen overflow-hidden flex items-start  justify-center ">
      {openSpotlight ? (
        <>
          <div className="mt-[20vh] relative z-10 spotlight text-black dark:text-white drop-shadow-lg backdrop-blur-lg shadow-black  p-2 w-full max-w-[800px] rounded-lg overflow-hidden">
            <div className="fake-bg absolute  inset-0 w-full h-full dark:bg-black bg-white opacity-80 block pointer-events-none"></div>
            <SearchBar className="z-[5] relative " searchFn={searchFn} />
            <div className="z-[5] relative spotlight__results h-[500px] w-full flex items-stretch">
              {searchResult?.results && (
                <ResultList
                  className="spotlight__results__list"
                  searched={searchResult.searched}
                  items={searchResult.results}
                />
              )}
              <div className="spotlight__results__preview"></div>
            </div>
          </div>
          <div className="backdrop pointer-events-none absolute inset-0 w-full h-full z-[5] bg-white dark:bg-black opacity-10 block" />
        </>
      ) : (
        <div className="relative z-[10] p-4 rounded-lg bg-white bg-opacity-80 dark:bg-black dark:bg-opacity-90 flex self-center justify-center">
          {`Press "C + Space" to open Spotlight`}
        </div>
      )}
      <div className="absolute inset-0 z-[1]">
        <Image
          src="/mac-bg.jpg"
          alt="bg"
          fill
          className="object-cover animate-[growShrink_50s_linear_infinite_alternate] opacity-100 dark:opacity-10"
        />
      </div>
    </Layout>
  );
};

export default HomePage;
