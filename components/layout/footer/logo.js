import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
	return (
		<Link href="/" className="hover:brightness-75">
			<Image
				src="/img/white-logo.png"
				alt="Itri Living Logo"
				width={200}
				height={50}
				className="object-contain h-16 w-auto lg:h-20"
			/>
		</Link>
	);
}
