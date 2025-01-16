import Image from 'next/image';

export default function Logo() {
	const logo = '/img/logo.png';
	return <Image src={logo} alt="Itri Living" width={130} height={130} />;
}
