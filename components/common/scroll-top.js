'use client';
import ArrowUp from './arrow-up';

export default function ScrollTop() {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<button
			onClick={scrollToTop}
			className="fixed bottom-0 right-0 p-2 mx-10 my-6 text-white bg-midnight opacity-50 hover:opacity-100 transition-opacity rounded-full "
		>
			<ArrowUp height={25} />
		</button>
	);
}
