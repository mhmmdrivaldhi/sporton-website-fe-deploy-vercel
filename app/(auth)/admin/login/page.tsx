"use client"

import Image from "next/image";
import Button from '@/app/(landing)/components/ui/button';
import { useRouter } from "next/navigation";

const LoginPage = () => {
    const {push} = useRouter();

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
            <div className="mt-8 font-medium">
                <div className="input-group-admin mb-5">
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="email" placeholder="Enter your email address . . ." />
                </div>
                <div className="input-group-admin">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Enter your password . . ." />
                </div>
            </div>
            <Button className="w-full rounded-lg mt-8" size="small" onClick={() => push("/admin/products")}>
                Sign In
            </Button>
        </div>
    </main>
    )
}

export default LoginPage;