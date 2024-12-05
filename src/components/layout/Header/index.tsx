"use client";

// import Dropdown from "@/components/global/Dropdown";
// import Input from "@/components/global/Input";
import Icons from "../../icons";

// import { useState } from "react";
// import { FormProvider, useForm } from "react-hook-form";

const Header = () => {
	// const [showCreateProjectModal, setShowCreateProjectModal] = useState(false);
	// const methods = useForm({
	// 	mode: "onChange",
	// 	defaultValues: {
	// 		search: "",
	// 	},
	// });

	// const {
	// 	formState: { errors, isValid },
	// } = methods;

	return (
		<>
			<header className='max-lg:container bg-white lg:px-8 py-4 w-full fixed z-50 top-0 right-0 lg:w-[calc(100%-278px)] shadow-sm'>
				<div className='flex items-center justify-between space-x-8 lg:space-x-6'>
					<div>
						<h1 className='text-[24px] text-black font-bold'>
							Good morning, Sophia <span>👋</span>
						</h1>
					</div>

					<div className='flex items-center space-x-4 lg:space-x-6'>
						<button className='flex items-center space-x-4'>
							<button className='flex max-lg:!ml-0 justify-center items-center '>
								{/* <Icons.NotificationsIcon /> */}
								<Icons.Notification />
							</button>
						</button>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
