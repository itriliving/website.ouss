import { Fragment, useEffect } from 'react';
import Head from 'next/head';
// import { useRouter } from 'next/router';
import { appWithTranslation } from 'next-i18next';
import ChatbotAI from '../components/ChatbotAI';
import { LanguageProvider } from '../components/LanguageContext';

import '../styles/globals.css';
import './global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function MyApp({ Component, pageProps }) {
	// const router = useRouter();
	// const isPrivatePremint = router.pathname === '/private-premint';

	// useEffect(() => {
	// 	if (!isPrivatePremint) {
	// 		import('bootstrap/dist/css/bootstrap.min.css');
	// 		import('slick-carousel/slick/slick.css');
	// 		import('slick-carousel/slick/slick-theme.css');
	// 		import('./global.css');
	// 	}
	// }, [isPrivatePremint]);

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

			{!isPrivatePremint && <ChatbotAI />}

			<LanguageProvider>
				<Component {...pageProps} />
			</LanguageProvider>
		</Fragment>
	);
}

export default appWithTranslation(MyApp);
