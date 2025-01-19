import { Fragment, useEffect } from 'react';
import Head from 'next/head';
import { appWithTranslation } from 'next-i18next';
import ChatbotAI from '../components/ChatbotAI';
import { LanguageProvider } from '../components/LanguageContext';
import { TranslationProvider } from '../contexts/TranslationContext';
import { WalletProvider } from '../contexts/WalletContext';

import './global.css';
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		import('bootstrap/dist/css/bootstrap.min.css');
		import('slick-carousel/slick/slick.css');
		import('slick-carousel/slick/slick-theme.css');
	}, []);

	return (
		<Fragment>
			<Head>
				<link rel="icon" href="/favicon.jpg" />
				<title>Itri Living</title>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width"
				/>
			</Head>

			<ChatbotAI />

			<WalletProvider>
				<LanguageProvider>
					<TranslationProvider>
						<Component {...pageProps} />
					</TranslationProvider>
				</LanguageProvider>
			</WalletProvider>
		</Fragment>
	);
}

export default appWithTranslation(MyApp);
