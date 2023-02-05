import '@/styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import { trustWallet, metaMaskWallet } from '@rainbow-me/rainbowkit/wallets';
import { connectorsForWallets, RainbowKitProvider, darkTheme, Theme } from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import merge from 'lodash.merge';

const { chains, provider } = configureChains([mainnet, polygon, optimism, arbitrum], [alchemyProvider({ apiKey: process.env.ALCHEMY_ID }), publicProvider()]);

const connectors = connectorsForWallets([
  {
    groupName: 'Popular',
    wallets: [metaMaskWallet({ chains }), trustWallet({ chains })],
  },
]);

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const myThemeCus = merge(darkTheme(), {
  colors: {
    accentColor: '#2e2d67',
    modalBackground: '#2e2d67',
    connectButtonBackground: '#2e2d67',
  },
});

export default function App({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} coolMode theme={myThemeCus}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
