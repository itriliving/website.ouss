import React, { Fragment, useEffect, useState } from 'react';
import { Button, Col, Row, Dropdown } from 'react-bootstrap';
import styles from '../components/hero.module.css';
import LanguageSelector from '../components/LanguageSelector';
import { useLanguage } from '../components/LanguageContext';

import englishData from '../public/locales/en/common.json';
import frenchData from '../public/locales/fr/common.json';
import germanData from '../public/locales/de/common.json';

const SignIn = ({ className = '' }) => {
	const { language } = useLanguage(); // Utilisation du contexte pour la langue
	const [data, setData] = useState({
		signIn: 'Sign In',
		createAccount: 'Create an Account',
		a6: '',
	});

	useEffect(() => {
		document.body.style.backgroundColor = '#F1FFFF';
		return () => {
			document.body.style.backgroundColor = ''; // Réinitialiser la couleur de fond lors du démontage du composant
		};
	}, []);

	useEffect(() => {
		// Mise à jour des données en fonction de la langue sélectionnée
		let selectedData;
		if (language === 'English') {
			selectedData = englishData.get_data0;
		} else if (language === 'Français') {
			selectedData = frenchData.get_data0;
		} else if (language === 'Deutsch') {
			selectedData = germanData.get_data0;
		}

		setData({
			signIn: selectedData.signIn,
			createAccount: selectedData.createAccount,
			a6: selectedData.a6,
		});
	}, [language]);

	return (
		<>
			<section className={[styles.hero, className].join(' ')}>
				<header className={styles.heroContainerParent}>
					<div className={styles.heroContainer}>
						<a href={'/'}>
							<Fragment></Fragment>
							<img
								className={styles.captureDEcran20240625AIcon}
								alt="Hero"
								src="/capture-d-ecran-20240625-a-132902removebgpreview-1@2x.png"
							/>
						</a>
						<div className={styles.heroContent}>
							<div className={styles.heroTitle}>
								<div className={styles.vectorWrapper}>
									{/* Sélecteur de langue avec Dropdown */}
									<LanguageSelector />
								</div>
								<div className={styles.vectorWrapper}>
									<img
										className={styles.vectorIcon1}
										alt="Vector Icon"
										src="/vector-1.svg"
									/>
								</div>
								<div className={styles.heroButton}>
									<a
										href="https://calendly.com/admin-itri/itri-living-concept-explained"
										target="_blank"
										rel="noopener noreferrer"
										className={styles.buttonContainer}
										style={{ textDecoration: 'none' }}
									>
										<b
											className={
												styles.requestACallContainer
											}
										>
											<span
												className={styles.aCall}
												style={{ fontSize: '10px' }}
											>
												{data.a6}
											</span>
										</b>
									</a>
								</div>
								{/* Dropdown Menu */}
								<Dropdown>
									<Dropdown.Toggle
										variant="link"
										id="dropdown-basic"
										className={styles.dropdownToggle}
									>
										<img
											className={
												styles.backgroundborderIcon
											}
											alt="Background Border Icon"
											src="/backgroundborder.svg"
										/>
									</Dropdown.Toggle>
									<Dropdown.Menu>
										<Dropdown.Item href="/SignIn">
											{data.signIn}
										</Dropdown.Item>
										<Dropdown.Item href="/SignIn">
											{data.createAccount}
										</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</div>
						</div>
					</div>
				</header>
			</section>

			<Row className="justify-content-center">
				<Col md={8}>
					<Row
						className="align-items-center"
						style={{ backgroundColor: '#F1FFFF', padding: '16px' }}
					>
						{/* Formulaire de connexion */}
						<Col md={6} className="p-3">
							<h3>{data.signIn} to your Itri.living account</h3>
							<div className="mb-3">
								<Button
									variant="primary"
									className="w-100 mb-2"
								>
									<i className="fab fa-facebook-f me-2"></i>
									Continue with Facebook
								</Button>
								<Button
									variant="outline-primary"
									className="w-100"
								>
									<img
										src="/google.png"
										alt="Google"
										style={{
											width: '20px',
											marginRight: '8px',
											borderRadius: '3px',
											backgroundColor: 'white',
										}}
									/>
									Continue with Google
								</Button>
							</div>
						</Col>
						{/* Image */}
						<Col md={6} className="p-0">
							<img
								src="/atman-studios-UPolqOrkbno-unsplash.jpg"
								alt="Poolside"
								className="img-fluid"
								style={{
									width: '100%',
									maxHeight: '450px',
									objectFit: 'cover',
								}}
							/>
						</Col>
					</Row>
				</Col>
			</Row>
		</>
	);
};

export default SignIn;
