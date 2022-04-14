import '../styles/globals.css';
import { ThirdwebWeb3Provider } from '@3rdweb/hooks';
/* 
체인아이디 4는 Rinkeby network
injected는 메타마스크를 이용한 web3 연결을 의미한다.
*/

const supportedChainIds = [4];
const connectors = {
  injected: {},
};

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebWeb3Provider
      supportedChainIds={supportedChainIds}
      connectors={connectors}
    >
      <Component {...pageProps} />
    </ThirdwebWeb3Provider>
  );
}

export default MyApp;
