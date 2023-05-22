import { GetServerSideProps } from 'next';
import { useEffect, useState } from 'react';
import { getLastSwaps, getSummary } from '../services';
import { SummaryType, SwapType } from '../types';
import ChartBox from 'components/home/ChartBox';
import Layout from 'components/common/Layout';
import SearchBox from 'components/common/SearchBox';
import Summary from 'components/home/Summary';
import Table from 'components/common/Table';
import Error from 'components/common/Error';
import RefreshButton from 'components/common/RefreshButton';
import Link from 'next/link';
import Image from 'next/image';

interface PropsType {
  swaps: SwapType[];
  summary: SummaryType;
  status: number;
}

const REFRESH_TIME = 30;

function Home(props: PropsType) {
  const { swaps, summary, status } = props;
  const [lastSwaps, setLastSwaps] = useState<SwapType[]>([]);
  const [second, setSecond] = useState(REFRESH_TIME);

  const handleRefreshClick = async () => {
    const swaps = await getLastSwaps();
    if (Array.isArray(swaps)) setLastSwaps(swaps);
    setSecond(REFRESH_TIME);
  };

  useEffect(() => {
    const interval = setInterval(async () => {
      if (second > 0) {
        setSecond(second - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [second]);

  useEffect(() => setLastSwaps(swaps), []);

  return status ? (
    <Error />
  ) : (
    <Layout title="Dexifier Exchange Explorer">
      <div>
        <div className="flex flex-col items-center relative bg-[url('/img/backgrounds/bg-image.png')] bg-cover bg-bottom h-[595px] md:h-[662px]">
          <SearchBox />
          {/* <div className="w-[calc(100%-3.125rem)] md:container bg-neutral-500 absolute p-20 md:p-[40px] pr-0 md:pr-0 flex flex-col-reverse  md:flex-row  justify-between bottom-0 rounded-normal translate-y-[50%]"> */}
          <div className="container flex w-full gap-10 items-center justify-between">
            <div className="w-full border border-primary-500 rounded-normal p-3 bg-modal h-full md:w-[40%]">
              <ChartBox data={summary.dailyInterval} />
            </div>
            <div className="flex w-full h-full md:w-[60%]">
              <Summary summary={summary} />
            </div>
          </div>
          {/* </div> */}
        </div>
        <div className="relative pt-[1.68rem] flex justify-center">
          <div className="w-[calc(100%-3.125rem)] md:container mt-30 z-[2] md:mt-[3.125rem] rounded-normal backdrop-blur-xl bg-modal-background px-15 py-20 md:p-35 overflow-hidden">
            <div className="flex flex-col">
              <div className="flex justify-between  md:mb-25 items-start">
                <div className="flex flex-col justify-center items-start">
                  <h2 className="text-14 md:text-28 font-semibold text-primary-500">
                    Recent Swaps
                  </h2>
                  <p className="text-12 md:text-16 text-neutral-800">
                    Latest 20 swaps on Dexifier
                  </p>
                </div>
                <div className="flex items-center pt-10">
                  <RefreshButton
                    refreshTime={REFRESH_TIME - 1}
                    onClick={handleRefreshClick}
                  />
                  <span className="text-10 md:text-14 text-neutral-400">
                    Refresh in {second > 9 ? second : `0${second}`} seconds
                  </span>
                </div>
              </div>
              <div>
                <Table data={lastSwaps} />
              </div>
              <div className="flex mx-auto w-fit border bg-green-background border-primary-500 rounded-large justify-center p-3 px-9 mt-8 text-neutral-400 cursor-pointer">
                <Link href="/transactions">See All Transactions</Link>
              </div>
            </div>
          </div>
          <div className="absolute left-[10%] top-[10%] z-[1]">
            <Image
              src={'/img/decoration-1.png'}
              width={300}
              height={300}
              alt="deco-1"
            />
          </div>
          <div className="absolute right-[10%] top-[20%] z-[1]">
            <Image
              src={'/img/decoration-2.png'}
              width={400}
              height={400}
              alt="deco-2"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps<PropsType> = async () => {
  const swaps = await getLastSwaps();
  const summary = await getSummary();
  return {
    props: {
      swaps: swaps.hasError ? {} : swaps,
      summary: summary.hasError ? {} : summary,
      status: swaps?.hasError || summary?.hasError ? 1 : 0,
    },
  };
};

export default Home;
