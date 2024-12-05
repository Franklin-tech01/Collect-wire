import Balance from "../balance";
import EmployeeCountry from "../EmployeeCountry";
import RecentPayment from "../RecentPayment";
import PremiumCard from "../Premium";
import Analytics from "../Analytics";

const Dashboard = () => {
	return (
		<div className='w-[90vw] mx-auto lg:w-full'>
			<div className=' flex flex-col lg:grid gap-4 lg:grid-cols-2'>
				<Balance />
				<EmployeeCountry />
				<RecentPayment />
				<PremiumCard />
			</div>
			<Analytics />
		</div>
	);
};

export default Dashboard;
