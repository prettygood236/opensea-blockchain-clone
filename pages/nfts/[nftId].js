import Header from '../../components/Header';
import { useEffect, useMemo, useState } from 'react';
import { useWeb3 } from '@3rdweb/hooks';
import { ThirdwebSDK } from '@3rdweb/sdk';
import { useRouter } from 'next/router';

const style = {
  wrapper: `flex flex-col items-center container-lg text-[#e5e8eb]`,
  container: `container p-6`,
  topContent: `flex`,
  nftImgContainer: `flex-1 mr-4`,
  detailsContainer: `flex-[2] ml-4`,
};

const Nft = () => {
  const { provider } = useWeb3();
  const [selectedNft, setSelectedNft] = useState();
  const [listings, setListings] = useState([]);
  const router = useRouter();

  const nftModule = useMemo(() => {
    if (!provider) return;

    const sdk = new ThirdwebSDK(
      provider.getSigner(),
      'https://eth-rinkeby.alchemyapi.io/v2/jPBlPAu6KJQTR9p7MhNutdsijkUNJ1Ab'
    );
    return sdk.getNFTModule('0x5Dcd580304d16b10b6F8158362AA4791713a8Ee6');
  }, [provider]);

  // get all NFTs in the collection
  useEffect(() => {
    if (!nftModule) return;
    (async () => {
      const nfts = await nftModule.getAll();

      const selectedNftItem = nfts.find((nft) => nft.id === router.query.nftId);

      setSelectedNft(selectedNftItem);
    })();
  }, [nftModule]);

  const marketPlaceModule = useMemo(() => {
    if (!provider) return;

    const sdk = new ThirdwebSDK(
      provider.getSigner(),
      'https://eth-rinkeby.alchemyapi.io/v2/jPBlPAu6KJQTR9p7MhNutdsijkUNJ1Ab'
    );

    return sdk.getMarketplaceModule(
      '0x93A771F7ce845C33381f677489cF21a5964EDD0b'
    );
  }, [provider]);

  useEffect(() => {
    if (!marketPlaceModule) return;
    (async () => {
      setListings(await marketPlaceModule.getAllListings());
    })();
  }, [marketPlaceModule]);

  return (
    <div>
      <Header />
    </div>
  );
};

export default Nft;
