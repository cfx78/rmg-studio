import Hero from './lib/components/Hero';
import HomePageSection from './lib/components/HomePageSection';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between w-full'>
			<Hero />
			<div className='divider'></div>
			<HomePageSection
				pageTitle='About'
				pageSummary='Learn A Little More About Real Musiq Group'
			/>
			<div className='divider'></div>
			<HomePageSection
				pageTitle='Artist'
				pageSummary='Take a look at the complete list of artist under Real Musiq Group'
			/>
			<div className='divider'></div>
			<HomePageSection
				pageTitle='Contact Us'
				pageSummary='Contact Real Musiq Group For Any Inquiries'
			/>
			<div className='divider'></div>
			<HomePageSection
				pageTitle='Book Studio Session'
				pageSummary='Book A Studio Session With Real Musiq Group'
			/>
		</main>
	);
}
