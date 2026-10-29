import { motion } from 'framer-motion';
import { assetPath } from '../ui';

export default function OriginalSlide({ number, title }: { number: number; title: string }) {
	const filename = `slides/slide-${String(number).padStart(2, '0')}.png`;
	return (
		<motion.figure
			initial={{ opacity: 0, scale: 0.995 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.28 }}
			aria-label={`第 ${number} 页：${title}`}
			style={{ width: '100%', height: '100%', margin: 0, background: '#fff' }}
		>
			<img
				src={assetPath(filename)}
				alt={`第 ${number} 页：${title}`}
				draggable={false}
				style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block', userSelect: 'none' }}
			/>
		</motion.figure>
	);
}
