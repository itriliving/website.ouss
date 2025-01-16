import Logo from './logo';

export default function FooterTop() {
	return (
		<div className="flex flex-col items-center gap-6">
			<Logo />
			<p className="max-w-96 text-center">
				{' '}
				Discover dynamic spaces, engaging events, and an interactive
				online Member Hub.
			</p>
		</div>
	);
}
