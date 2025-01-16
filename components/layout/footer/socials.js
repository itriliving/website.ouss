import Link from 'next/link';
import Instagram from '../../common/instagram';
import Facebook from '../../common/facebook';
import TwitterX from '../../common/twitter-x';
import Linkedin from '../../common/linkedin';
import Youtube from '../../common/youtube';

export default function Socials() {
	return (
		<div className="flex gap-4">
			<Link
				href="#"
				className="text-white hover:brightness-75 transition-all"
			>
				<Facebook height={25} />
			</Link>
			<Link
				href="#"
				className="text-white hover:brightness-75 transition-all"
			>
				<TwitterX height={25} />
			</Link>
			<Link
				href="#"
				className="text-white hover:brightness-75 transition-all"
			>
				<Instagram height={25} />
			</Link>
			<Link
				href="#"
				className="text-white hover:brightness-75 transition-all"
			>
				<Linkedin height={25} />
			</Link>
			<Link
				href="#"
				className="text-white hover:brightness-75 transition-all"
			>
				<Youtube height={25} />
			</Link>
		</div>
	);
}
