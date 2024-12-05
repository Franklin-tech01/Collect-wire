"use client";

import Icons from "../../icons";
import { cn } from "../../../lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navigation = () => {
	const pathname = usePathname();
	const router = useRouter();

	// Links for main navigation
	const links = [
		{ name: "Dashboard", to: "/dashboard", icon: <Icons.Dashboard /> },
		{ name: "Wallet", to: "/Wallet", icon: <Icons.Wallet /> },
		{ name: "People", to: "/people", icon: <Icons.People /> },
		{ name: "Payroll", to: "/payroll", icon: <Icons.Payroll /> },
		{ name: "Integration", to: "/integration", icon: <Icons.Integration /> },
	];

	return (
		<nav className='fixed h-screen w-[272px] bg-[#F5F7F2] text-[#7A8075] hover:text-[#032900] flex flex-col justify-between py-4'>
			{/* Logo Section */}
			<div className='h-[416px] flex flex-col justify-between'>
				<div className='flex items-center justify-center'>
					<Image
						src='/assets/image/profile.png'
						alt='PROFILE'
						width={48}
						height={48}
					/>
					<div className='px-4'>
						<h1 className='text-lg flex items-center font-semibold text-[#032900]'>
							PiggyCanvas{" "}
							<span className='ml-1'>
								<Icons.VerificationBadge></Icons.VerificationBadge>
							</span>
						</h1>
						<p className='  text-[#748073]'>Sophia Williamson</p>
					</div>
				</div>

				{/* Main Navigation */}
				<div className='flex flex-col items-center space-y-2'>
					{links.map((link) => (
						<Link
							key={link.name}
							href={link.to}
							className={cn(
								"flex items-center w-[220px] px-4 py-3 space-x-4 rounded-lg transition-all duration-200 ease-in-out",
								{
									" bg-lime-400 rounded-3xl text-[#032900] font-bold":
										pathname === link.to,
									"hover:bg-lime-400 hover:scale-105 hover:rounded-3xl":
										pathname !== link.to,
								}
							)}>
							<div className='text-white'>{link.icon}</div>
							<span className='text-sm font-medium'>{link.name}</span>
						</Link>
					))}
				</div>
			</div>

			<Link href='/home' className='flex justify-center items-center py-4'>
				<Icons.Logo className=' h-auto' />
			</Link>
		</nav>
	);
};

export default Navigation;
