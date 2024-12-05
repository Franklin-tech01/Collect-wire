"use client";

import React from "react";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
	AreaChart,
	Area,
} from "recharts";

// Dummy data
const data = [
	{ month: "Jan", value: 1200 },
	{ month: "Feb", value: 2000 },
	{ month: "Mar", value: 1800 },
	{ month: "Apr", value: 2200 },
	{ month: "May", value: 2400 },
	{ month: "June", value: 2100 },
	{ month: "July", value: 2500 },
	{ month: "Aug", value: 3000 },
	{ month: "Sept", value: 3500 },
	{ month: "Oct", value: 2800 },
	{ month: "Nov", value: 2600 },
	{ month: "Dec", value: 2900 },
];

// Tooltip Component
const CustomTooltip = ({ active, payload }: any) => {
	if (active && payload && payload.length) {
		return (
			<div className='bg-[#032900] text-white px-3 py-1 rounded'>
				<p className='text-sm font-semibold'> ${payload[0].value}.00</p>
			</div>
		);
	}
	return null;
};

const AreaChartComponent = () => {
	return (
		<div className='w-full h-[300px]'>
			<ResponsiveContainer width='100%' height='100%'>
				<AreaChart data={data}>
					<defs>
						{/* Gradient for the chart area */}
						<linearGradient id='chartGradient' x1='0' y1='0' x2='0' y2='1'>
							<stop offset='0%' stopColor='#B1EF41' stopOpacity={0.5} />
							<stop offset='100%' stopColor='#B1EF41' stopOpacity={0} />
						</linearGradient>
					</defs>
					<CartesianGrid stroke='#DFE5DA' vertical={true} />
					<XAxis
						dataKey='month'
						tick={{ fill: "#748073", fontSize: 12 }}
						axisLine={false}
					/>
					<YAxis
						tick={{ fill: "#748073", fontSize: 12 }}
						axisLine={false}
						domain={[0, 4000]} // Ensure domain ends at 3000
						tickFormatter={(value) => `${value / 1000}k`} // Format ticks as "k"
					/>

					<Tooltip content={<CustomTooltip />} cursor={{ stroke: "#032900" }} />
					{/* Area with gradient */}
					<Area
						type='monotone'
						dataKey='value'
						stroke='#032900'
						strokeWidth={2}
						fill='url(#chartGradient)'
					/>
					{/* Line for the chart */}
					<Line
						type='monotone'
						dataKey='value'
						stroke='#032900'
						strokeWidth={2}
						activeDot={{ r: 6, fill: "#032900" }}
					/>
				</AreaChart>
			</ResponsiveContainer>
		</div>
	);
};

export default AreaChartComponent;
