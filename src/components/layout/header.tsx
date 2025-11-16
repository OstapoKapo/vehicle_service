'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import logoAnimation from "../../../public/icons/automobile.json";
import { CustomBtn } from "../custom/customBtn.component";


const DynamicLottiePlayer = dynamic(
    () => import("../custom/lottiePlayer.component").then((mod) => mod.LottiePlayer),
    {
        ssr: false,
        loading: () => <div className="w-17.5 h-15 flex items-center justify-center">Logo</div>,
    }
);

export const Header = () => {
    const authPath = ['/login', '/signup'];
    const pathname = usePathname();
    return (
        <div className="w-full min-h-10 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
                <DynamicLottiePlayer animationData={logoAnimation} width={70} height={60} /> 
                <h1 className="text-xl mt-4 font-bold">Vehicle Management System</h1>
            </Link>
            <div className="flex gap-10">
                {!authPath.includes(pathname) && (
                    <>
                        <CustomBtn label="Create Vehicle" style="w-40"/>
                        <CustomBtn label="Logout"/>
                    </>
                )}
            </div>
        </div>
    );
};