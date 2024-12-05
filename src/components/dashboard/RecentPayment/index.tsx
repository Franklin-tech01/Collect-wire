"use client";

import Button from "@/components/global/Button";
import Icons from "@/components/icons";

interface TransactionItem {
	name: string;
	time: string;
	status: string;
	currency: string;
	amount: string;
	icon: React.ReactNode;
}

interface Transaction {
	date: string;
	data: TransactionItem[];
}

const transactions: Transaction[] = [
	{
		date: "Today",
		data: [
			{
				name: "Wise (Formerly Transferwise)",
				time: "Aug 30, 2023  |  8:00 pm",
				status: "Completed",
				currency: "USD Balance",
				amount: "$7,000",
				icon: <Icons.Wise />,
			},
			{
				name: "Stripe Inc.",
				time: "Aug 30, 2023  |  8:00 pm",
				status: "Processing",
				currency: "USD Balance",
				amount: "$5,000",
				icon: <Icons.Stripe />,
			},
		],
	},
];

const getStatusColor = (status: string): string => {
	switch (status) {
		case "Completed":
		case "Successful":
			return " text-[#408039]";
		case "Processing":
			return " text-[#2563EB]";
		case "Pending":
			return "bg-[#FAE4B0] text-[#9A6D02]";
		case "Failed":
			return "bg-[#FAB6B0] text-[#D81C0B]";
		default:
			return "bg-gray-200 text-gray-700";
	}
};

const RecentPayment = () => {
	return (
		<div className=' h-[300px] bg-[#F5F7F2]  rounded-3xl p-[24px]'>
			<div className='flex items-center justify-between'>
				<h1 className='text-[#032900] font-semibold text-[24px]'>
					Recent Payments
				</h1>
				<Button
					text='view all'
					icon={<Icons.Arrowright />}
					className='text-[#586657] border h-[10px] !rounded-3xl border-[#DFE5DA]'
				/>
			</div>
			{transactions.map((transaction, index) => (
				<div key={index} className='mb-6'>
					<h3 className='text-gray-500 font-medium mb-3'>{transaction.date}</h3>
					{transaction.data.map((item, i) => (
						<div
							key={i}
							className='flex items-center hover:bg-[#EEF2EB] hover:!rounded-full cursor-pointer justify-between mb-4'>
							<div className='flex items-center py-2 space-x-3'>
								<div className='object-cover rounded-full pl-1'>
									{item.icon}
								</div>
								<div>
									<p className='font-semibold text-[#394039]'>{item.name}</p>
									<p className='text-[#748073] text-sm'>{item.time}</p>
								</div>
							</div>

							<div className='flex flex-col items-center justify-center text-right'>
								{/* <p className='text-gray-500'>{item.currency}</p> */}
								<p
									className={`font-semibold ${
										item.amount.startsWith("-")
											? "text-red-500"
											: "text-[#394039]"
									}`}>
									{item.amount}
								</p>
								<div
									className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
										item.status
									)}`}>
									{item.status}
								</div>
							</div>
						</div>
					))}
				</div>
			))}
			{/* </div> */}
		</div>
	);
};

export default RecentPayment;
