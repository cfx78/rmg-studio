import Link from 'next/link';

const HomePageSection = (props: any) => {
	return (
		<section className='min-h-max py-52'>
			<div className='card w-96 bg-base-200 shadow-xl rounded-md border my-auto py-16'>
				<div className='card-body items-center text-center'>
					<h2 className='card-title text-6xl'>{props.pageTitle}</h2>
					<p className='text-2xl pt-6'>{props.pageSummary}</p>
					<div className='card-actions justify-center pt-6'>
						<Link
							href='/'
							className='btn btn-ghost outline outline-1 rounded-md px-6 text-xl'>
							click here
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HomePageSection;
