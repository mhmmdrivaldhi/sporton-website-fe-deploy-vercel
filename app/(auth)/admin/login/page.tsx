"use client"

import Image from "next/image";
import Button from '@/app/(landing)/components/ui/button';
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { login } from "@/app/services/auth_service";

const LoginPage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            router.push("/admin/products")
        }
    }, [router]);

    const handleLogin = async () => {
        setIsLoading(true)

        try {
            const data = await login({email, password});

            if (data.token) {
                router.push("/admin/products")
            }
        } catch (error: any) {
            setErrorMessage(error.message || "Something went wrong, please try again!")
            console.error("Login error:", error);
        } finally {
            setIsLoading(false)
        }
    }

    return (
    <main className="bg-[#F7F9FA] w-full min-h-screen flex justify-center items-center">
        <div className="max-w-136 w-full bg-white rounded-xl border-t-4 border-primary py-12 px-[72px]">
            <Image
                src="/images/logo-admin.svg"
                alt="Logo Admin"
                width={304}
                height={51}
                className="mx-auto"
            />
            <p className="opacity-50 mt-5 text-center text-sm">Enter your credentials to access the dashboard</p>

            {
                errorMessage && (
                    <div className="px-3 py-1 bg-primary-light border border-primary rounded-md text-primary text-sm text-center mt-5">
                        {errorMessage}
                    </div>
                )
            }

            <div className="mt-8 font-medium">
                <div className="input-group-admin mb-5">
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="email" placeholder="Enter your email address . . ." value={email} onChange={(e) => setEmail(e.target.value)}/>    
                </div>
                <div className="input-group-admin">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Enter your password . . ." value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
            </div>
            <Button className="w-full rounded-lg mt-8" size="small" onClick={handleLogin}>
                {
                    isLoading ? "Signing in . . ." : "Sign in"
                }
            </Button>
        </div>
    </main>
    )
}

export default LoginPage;