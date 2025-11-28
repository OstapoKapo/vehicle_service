'use client';

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation"; // 1. Додаємо useRouter
import dynamic from "next/dynamic";
import logoAnimation from "@/assets/automobile.json"; 
import { CustomBtn } from "../custom/customBtn.component";
import { useLogoutMutation } from "@/api/auth/auth.mutation";

const DynamicLottiePlayer = dynamic(
    () => import("../custom/lottiePlayer.component").then((mod) => mod.LottiePlayer),
    {
        ssr: false,
        loading: () => <div className="w-[70px] h-[60px] bg-gray-200 rounded animate-pulse" />,
    }
);

export const Header = () => {
    const router = useRouter(); 
    const pathname = usePathname();
    const logoutMutation = useLogoutMutation();

    const isAuthPage = ['/login', '/signup'].includes(pathname);
    
    const isVehiclePage = pathname === '/vehicles';
    const isUserPage = pathname === '/users';
    const isHomePage = pathname === '/';
    const isDetailPage = pathname.startsWith('/users/') || pathname.startsWith('/vehicles/');
    const isListPage = isUserPage || isVehiclePage;

    const handleLogout = () => {
        logoutMutation.mutate(undefined); 
    };

    return (
        <header className="w-full min-h-16 flex items-center justify-between px-4 shadow-sm">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <DynamicLottiePlayer animationData={logoAnimation} width={70} height={60} /> 
                <h1 className="text-xl font-bold hidden sm:block mt-5">
                    Vehicle Management System
                </h1>
            </Link>

            <nav className="flex gap-4 items-center">
                {!isAuthPage && (
                    <>
                        {isUserPage && (
                            <CustomBtn 
                                label="Create User" 
                                onClick={() => router.push('/users/create')} 
                                style="w-40"
                            />
                        )}
                        {isHomePage && (
                            <CustomBtn 
                                label="Logout" 
                                onClick={handleLogout} 
                                style="bg-red-500 hover:bg-red-600 text-foreground" 
                            />
                        )}
                        {isListPage && (
                            <CustomBtn 
                                label="Back to Home" 
                                onClick={() => router.push('/')} 
                                style="w-40 variant-secondary" 
                            />
                        )}                    
                        {isDetailPage && (
                            <CustomBtn 
                                label="Back" 
                                onClick={() => router.back()} 
                                style="w-32 variant-secondary"
                            />
                        )}
                    </>
                )}
            </nav>
        </header>
    );
};