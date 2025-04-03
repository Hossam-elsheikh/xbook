import Image from "next/image";
import Store from "@/public/bookstore.jpg";

export default function RootLayout({ children }) {
	return (
		<main className="flex min-h-screen w-full justify-between ">
			{children}
			<div className=" w-full h-screen">
				<Image
					className="w-full h-full object-cover"
					src={Store}
					alt="auth"
					priority
				/>
			</div>
		</main>
	);
}
