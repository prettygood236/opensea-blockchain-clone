import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import { useWeb3 } from '@3rdweb/hooks';
import { useEffect } from 'react';
import { client } from '../lib/sanityClient';
import toast, { Toaster } from 'react-hot-toast';

const style = {
  wrapper: ``,
  walletConnectWrapper: `flex flex-col justify-center items-center h-screen w-screen bg-[#3b3d42] `,
  button: ` relative text-lg font-semibold px-12 py-4 bg-[#2181e2] rounded-lg mr-5 text-white border border-[#2081e2] hover:shadow-xl hover:bg-[#1868b7] cursor-pointer`,
  details: `text-lg text-center text=[#282b2f] font-semibold mt-4`,
};

const Home = () => {
  const { address, connectWallet } = useWeb3();

  const welcomeUser = (userName, toastHandler = toast) => {
    toastHandler.success(
      `Welcome back${userName !== 'Unnamed' ? userName : ''}!`,
      {
        style: {
          background: 'white',
          color: '#282b2f',
        },
      }
    );
  };

  useEffect(() => {
    if (!address) return;
    (async () => {
      const userDoc = {
        _type: 'users',
        _id: address,
        userName: 'Unnamed',
        walletAddress: address,
      };

      const result = await client.createIfNotExists(userDoc);

      welcomeUser(result.userName);
    })();
  }, [address]);

  /* IIFE (immediately invoked functional expressions)
  const someFunction = () => console.log('hello');
  someFunction()
  ===
  ;(() => console.log('hello'))()
  */

  return (
    <div className={style.wrapper}>
      <Toaster position='top-center' reverseOrder={false} />
      {address ? (
        <>
          <Header />
          <Hero />
        </>
      ) : (
        <div className={style.walletConnectWrapper}>
          <button
            className={style.button}
            onClick={() => connectWallet('injected')}
          >
            Connect Wallet
          </button>
          <div className={style.details}>
            You need Chrome to be <br /> able to run this app.
          </div>
        </div>
      )}
    </div>
  );
};
export default Home;
