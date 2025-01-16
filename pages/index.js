import Hero from '../components/hero';
import Concept from '../components/concept';
import FrameComponent from '../components/frame-component';
import FrameComponent1 from '../components/frame-component1';
import Exceptional from '../components/exceptional';
import Members from '../components/members';
import Wrapper from '../components/wrapper';
import Layout from '../components/layout';
import Stays from '../components/stays';
import Consultation from '../components/consultation';
import Spaces from '../components/spaces';
import FrameComponent2 from '../components/frame-component2';
import FrameComponent3 from '../components/frame-component3';
import FrameComponent4 from '../components/frame-component4';
import FrameComponent5 from '../components/frame-component5';
import Newsletter1 from '../components/newsletter1';
import Membership from '../components/membership';
import FooterLinksContainer from '../components/footer-links-container';
import Newsletter from '../components/newsletter';
import styles from './index.module.css';
import React, { useState, useEffect, useRef } from 'react';
import Exceptional2 from '../components/Exceptional2';

const LandingPageItriLiving = () => {
	const [isNewsletterVisible, setIsNewsletterVisible] = useState(false);
	const [isMembersVisible, setIsMembersVisible] = useState(false);
	const [isLayoutVisible, setIsLayoutVisible] = useState(false);
	const [isStayVisible, setIsStayVisible] = useState(false);
	const [isConsultationVisible, setIsConsultationVisible] = useState(false);
	const [isSpaceVisible, setIsSpaceVisible] = useState(false);
	const [isFrame2Visible, setIsFrame2Visible] = useState(false);
	const [isFrame3Visible, setIsFrame3Visible] = useState(false);
	const [isFrame4Visible, setIsFrame4Visible] = useState(false);
	const [isFrame5Visible, setIsFrame5Visible] = useState(false);
	const [isNewVisible, setIsNewVisible] = useState(false);

	const NewRef = useRef(null);
	const Frame5Ref = useRef(null);
	const Frame4Ref = useRef(null);
	const Frame3Ref = useRef(null);
	const Frame2Ref = useRef(null);
	const SpaceRef = useRef(null);
	const ConsultationRef = useRef(null);
	const newsletterRef = useRef(null);
	const membersRef = useRef(null);
	const LayoutRef = useRef(null);
	const StayRef = useRef(null);

	useEffect(() => {
		const observers = [];

		const createObserver = (ref, setter) => {
			const observer = new IntersectionObserver(
				(entries) => {
					const entry = entries[0];
					if (entry.isIntersecting) {
						setter(true);
						observer.disconnect(); // Stop observing after the animation is triggered
					}
				},
				{ threshold: 0.05 } // Trigger when 5% of the element is visible
			);

			if (ref.current) {
				observer.observe(ref.current);
			}
			observers.push(observer);
		};

		createObserver(NewRef, setIsNewVisible);
		createObserver(Frame5Ref, setIsFrame5Visible);
		createObserver(Frame3Ref, setIsFrame3Visible);
		createObserver(Frame2Ref, setIsFrame2Visible);
		createObserver(newsletterRef, setIsNewsletterVisible);
		createObserver(membersRef, setIsMembersVisible);
		createObserver(LayoutRef, setIsLayoutVisible);
		createObserver(StayRef, setIsStayVisible);
		createObserver(ConsultationRef, setIsConsultationVisible);
		createObserver(SpaceRef, setIsSpaceVisible);

		const Frame4Observer = new IntersectionObserver(
			(entries) => {
				const entry = entries[0];
				if (entry.isIntersecting) {
					setIsFrame4Visible(true);
					Frame4Observer.disconnect(); // Stop observing after the animation is triggered
				}
			},
			{ threshold: 0.05 } // Trigger when 5% of the element is visible
		);

		if (Frame4Ref.current) {
			Frame4Observer.observe(Frame4Ref.current);
		}

		return () => {
			observers.forEach((observer) => observer.disconnect());
			Frame4Observer.disconnect();
		};
	}, []);

	return (
		<div className={styles.landingPageItriLiving}>
			<Hero /> {/* navbar */}
			<section className={styles.amalfi}>
				<img
					className={styles.amalfi201204112801Icon}
					loading="lazy"
					alt=""
					src="/amalfi2012041-1280-1@2x.png"
				/>
			</section>
			<Concept /> {/* Itri Living Concept */}
			<FrameComponent /> {/* gold picture */}
			<Exceptional2 /> {/* Everything */}
			<FrameComponent1 /> {/* first album */}
			<Exceptional /> {/* Benefits */}
			<Members /> {/* What makes our resorts */}
			<section className={styles.content}>
				<div className={styles.container}>
					<div
						ref={newsletterRef}
						className={`${
							isNewsletterVisible
								? styles.slideInFromRight
								: styles.hidden
						}`}
					>
						<Wrapper /> {/* Exceptionnel value */}
					</div>

					<div
						ref={LayoutRef}
						className={`${
							isLayoutVisible
								? styles.slideInFromBottom
								: styles.hidden
						}`}
					>
						<Layout /> {/* Save up 80% */}
					</div>
				</div>
			</section>
			<div
				ref={StayRef}
				className={`${
					isStayVisible ? styles.slideInFromRight : styles.hidden
				}`}
			>
				<Stays /> {/* Stay with Itri Living */}
			</div>
			<Consultation /> {/* cards */}
			<div id="spaces">
				<Spaces /> {/* villes */}
			</div>
			<FrameComponent2 /> {/* Remender */}
			<FrameComponent3 />
			<div
				ref={Frame4Ref}
				className={`${
					isFrame4Visible ? styles.slideInFromRight : styles.hidden
				}`}
			>
				<FrameComponent4 /> {/* Itri.nft Partnership */}
			</div>
			<FrameComponent5 /> {/* faqs */}
			<Newsletter1 /> {/* signup */}
			<footer className={styles.card}>
				<div className={styles.spacesImage}>
					<img
						className={styles.captureDEcran20240628AIcon}
						loading="lazy"
						alt=""
						src="/capture-d-ecran-20240628-a-193249removebgpreview-1@2x.png"
					/>
				</div>
				<div className={styles.spacesDescription}>
					<div className={styles.discoverDynamicSpaces}>
						Discover dynamic spaces, engaging events, and an
						interactive online Member Hub.
					</div>
				</div>
				<FooterLinksContainer />
				<Newsletter />
				<div className={styles.horizontalborder}>
					<div className={styles.itriLivingAll}>
						© 2024 Itri Living. All rights reserved.
					</div>
				</div>
			</footer>
		</div>
	);
};

export default LandingPageItriLiving;
