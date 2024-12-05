import Button from "@/components/global/Button";
import React from "react";
import Image from "next/image";

const PremiumCard = () => {
	return (
		<div className=' relative h-[300px] bg-[#1C4019] flex-col flex justify-between overflow-hidden !rounded-3xl p-[24px]'>
			<div className=' w-full lg:w-[398px]'>
				<h1 className='text-3xl text-[#C6E5C3]'>Get Collectwire Premium</h1>
				<p className=' w-full text-2xl text-[#F5F7F2]'>
					Better service, faster payouts, less blah blah blah text and a better
					government
				</p>
			</div>
			<div>
				<Button
					text='Get Started'
					className='text-[#032900] !w-[138PX] !rounded-full font-medium !text-lg bg-white'
				/>
			</div>
			<div className='absolute bottom-0 right-0'>
				<Image
					src='/assets/image/money.png'
					alt='moneyicon'
					width={316}
					height={178}
					className='w-[150px] lg:w-[316px] '
				/>
			</div>
		</div>
	);
};

export default PremiumCard;
