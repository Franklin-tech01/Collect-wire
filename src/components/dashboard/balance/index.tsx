"use client";

import Button from "@/components/global/Button";
import Icons from "@/components/icons";
const Balance = () => {
	// const { balance } = useBalance();
	return (
		<div className=' h-[300px] bg-[#F5F7F2] flex flex-col  justify-center rounded-3xl p-[24px]'>
			<div>
				<h1 className='text-[#032900] font-semibold text-[24px]'>
					Upcoming payments
				</h1>
				<div className='w-[450px] h-[192px] mt-[16px]  items-center  px-4 rounded-3xl bg-white  mb-[40px] flex justify-between'>
					<div className='flex'>
						<Icons.Pay />
						<div className='pl-3'>
							<h1 className='text-lg text-[#394039]'>24 payments due</h1>
							<p className='text-3xl text-[#032900] font-bold'>$6,500.00</p>
						</div>
					</div>
					<div>
						<Button
							text='Pay'
							className='border border-black w-[92px] !rounded-3xl !text-black'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Balance;
