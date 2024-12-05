"use client";

import React from "react";
import Icons from "@/components/icons";
import Button from "@/components/global/Button";
import AreaChartComponent from "../AreaChart";
const Analytics = () => {
	return (
		<div className='w-full mt-9 h-[500px] bg-[#F5F7F2] rounded-3xl p-[24px]'>
			{/* Header */}

			<div className='flex items-center justify-between mb-4'>
				<h1 className='text-[#032900] font-semibold text-[24px]'>Analytics</h1>
				<Button
					text='view all'
					icon={<Icons.Arrowright />}
					className='text-[#586657] border h-[10px]  !rounded-3xl border-[#DFE5DA]'
				/>
			</div>
			<div className='mt-10'>
				<AreaChartComponent />
			</div>
		</div>
	);
};

export default Analytics;
