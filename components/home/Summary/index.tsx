import React from 'react';
import { SummaryProps } from './Summary.type';
import SummaryItem from './SummaryItem';

function Summary(props: SummaryProps) {
  const { summary } = props;
  return (
    <div className="grid grid-cols-4 gap-10 pr-20 md:pr-0 h-[80%] md:gap-15 font-inter m-auto">
      <SummaryItem
        value={summary.connectedWallets}
        title="Total Wallets"
        image="/img/summary/summary-wallet.png"
      />
      <SummaryItem
        value={summary.supportedDexes}
        title="Supported DEXes"
        image="/img/summary/summary-dexes.png"
      />
      <div className="col-span-2 h-full">
        <SummaryItem
          value={summary.totalTxVolumeUSD + 300000}
          title="Total Volume"
          prefix="$"
          image="/img/summary/summary-volume.png"
        />
      </div>
      <SummaryItem
        value={summary.supportedChains}
        title="Supported Chains"
        image="/img/summary/summary-chain.png"
      />
      <SummaryItem
        value={summary.supportedBridges}
        title="Supported Bridges"
        image="/img/summary/summary-bridge.png"
      />
      <div className="col-span-2">
        <SummaryItem
          value={summary.totalTxCount + 1984}
          title="Total Swaps"
          image="/img/summary/summary-swap.png"
        />
      </div>
    </div>
  );
}

export default Summary;
