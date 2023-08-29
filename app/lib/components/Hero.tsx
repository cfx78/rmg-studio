import Image from 'next/image';
import logo from '@/public/images/Real_Muziq_Group_Logo_White.png';

const Hero = () => {
	return (
		<div className='hero min-h-screen my-auto'>
			<div className='hero-content text-center'>
				<div className='max-w-md'>
					<Image src={logo} width={250} height={250} alt='rmg-logo' />
				</div>
			</div>
		</div>
	);
};

export default Hero;
