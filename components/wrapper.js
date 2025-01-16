import PropTypes from 'prop-types';
import styles from './wrapper.module.css';
import React, { useEffect, useState } from 'react';
import { useLanguage } from './LanguageContext';

import englishData from '../public/locales/en/common.json';
import frenchData from '../public/locales/fr/common.json';
import germanData from '../public/locales/de/common.json';

const Wrapper = ({ className = '' }) => {
	const { language } = useLanguage(); // Get the current language from the context
	const [data, setData] = useState({
		c1: '',
		c2: '',
		c3: '',
		c4: '',
		c5: '',
		c6: '',
		c7: '',
		c8: '',
		c9: '',
		c10: '',
		c11: '',
	});

	useEffect(() => {
		let selectedData;
		if (language === 'English') {
			selectedData = englishData.get_data4;
		} else if (language === 'Français') {
			selectedData = frenchData.get_data4;
		} else if (language === 'Deutsch') {
			selectedData = germanData.get_data4;
		}

		// Set the selected data to state
		setData(selectedData);
	}, [language]);

	return (
		<div className={[styles.wrapper, className].join(' ')}>
			<div className={styles.membership}>
				<h1 className={styles.heading2Container}>
					<span className={styles.heading2Container1}>
						<span className={styles.exceptionnel}>{data.c1}</span>
						<i className={styles.value}>{data.c2}</i>
						<span className={styles.exceptionnel}>{data.c3}</span>
					</span>
				</h1>
				<div className={styles.benefits}>
					<div className={styles.highlight}>
						<img
							className={styles.leonardoPhoenixAHighlyDetaIcon}
							alt="A detailed gold token"
							src="/leonardo-phoenix-a-highly-detailed-gold-token-with-a-prominent-1-1@2x.png"
						/>
						<div className={styles.atItrilivingWeContainer}>
							<p className={styles.atItrilivingWe}>{data.c4}</p>
							<p className={styles.blankLine}>&nbsp;</p>
							<p className={styles.blankLine}>{data.c5}</p>
							<p className={styles.blankLine}>&nbsp;</p>
							<p className={styles.blankLine}>{data.c6}</p>
							<p className={styles.blankLine}>&nbsp;</p>
							<p className={styles.blankLine}>{data.c7}</p>
						</div>
					</div>
					<div className={styles.customization}>
						<div className={styles.forAllTheseContainer}>
							<p className={styles.blankLine}>{data.c8}</p>
							<p className={styles.blankLine}>&nbsp;</p>
							<p className={styles.blankLine}>{data.c9}</p>
							<p className={styles.blankLine}>&nbsp;</p>
							<p className={styles.blankLine}>{data.c10}</p>
							<p className={styles.blankLine}>&nbsp;</p>
							<p className={styles.blankLine}>{data.c11}</p>
						</div>
						<img
							className={styles.leonardoPhoenixAHighlyDetaIcon1}
							alt="A detailed gold token"
							src="/leonardo-phoenix-a-highly-detailed-gold-token-with-a-prominent-1-2@2x.png"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

Wrapper.propTypes = {
	className: PropTypes.string,
};

export default Wrapper;
