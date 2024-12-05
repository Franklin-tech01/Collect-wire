"use client";

import Button from "@/components/global/Button";
import React from "react";
import Image from "next/image";
import Icons from "@/components/icons";
import Usa from "../../../../public/assets/image/usa.png";
import Nigeria from "../../../../public/assets/image/nigeria.png";
import Japan from "../../../../public/assets/image/japan.png";
import France from "../../../../public/assets/image/france.png";
import Jamaica from "../../../../public/assets/image/jamaica.png";

const countries = [
	{ name: "USA", flag: Usa, value: 16 },
	{ name: "Nigeria", flag: Nigeria, value: 12 },
	{ name: "Japan", flag: Japan, value: 10 },
	{ name: "France", flag: France, value: 8 },
	{ name: "Jamaica", flag: Jamaica, value: 7 },
];

const EmployeeCountry = () => {
	const maxValue = Math.max(...countries.map((country) => country.value)); // Calculate max value for progress bar scaling

	return (
		<div className=' h-[300px] bg-[#F5F7F2] rounded-3xl p-[24px]'>
			{/* Header */}
			<div className='flex items-center justify-between mb-4'>
				<h1 className='text-[#032900] font-semibold text-[24px]'>
					Employee Countries
				</h1>
				<Button
					text='view all'
					icon={<Icons.Arrowright />}
					className='text-[#586657] border h-[10px]  !rounded-3xl border-[#DFE5DA]'
				/>
			</div>

			{/* Country List */}
			<div className='space-y-3'>
				{countries.map((country, index) => (
					<div key={index} className='flex items-center gap-3'>
						<Image
							src={country.flag}
							alt={`${country.name} flag`}
							className='w-6 h-6 rounded-0'
							width={24}
							height={24}
						/>

						<span className='text-[#394039] font-medium text-[16px] w-[100px]'>
							{country.name}
						</span>

						{/* Progress Bar */}
						<div className='flex-1 relative'>
							<div className='flex h-2 items-center rounded-full'>
								<div
									className='h-full bg-[#DFE5DA] rounded-full'
									style={{
										width: `${(country.value / maxValue) * 100}%`,
									}}></div>
								<span className='text-[#586657]  ml-2 font-semibold text-[14px]'>
									{country.value}
								</span>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default EmployeeCountry;
