import Link from 'next/link';
import WhatsApp from './common/whatsapp';

const ChatbotAI = () => {
	return (
		<Link
			href="https://api.whatsapp.com/send/?phone=212000000000&text=Hello%2C+I%27m+interested+in+your+services&type=phone_number&app_absent=0"
			target="_blank"
			rel="noopener noreferrer"
			className="fixed bottom-4 lg:bottom-8 right-4 lg:right-8 z-50 cursor-pointer p-3 bg-white rounded-full shadow-lg opacity-60 hover:opacity-100 transition-opacity duration-300"
		>
			<WhatsApp height={20} />
		</Link>
	);
};

export default ChatbotAI;
