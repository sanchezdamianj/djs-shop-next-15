import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function ShopLayout({
    children,
}:
    { children: React.ReactNode }
) {

    const session = await auth();
    if( session?.user) {
        redirect('/');
    }
    return (
    <main className="min-h-screen">
       
        <div className="px:0 sm:px-10">
            {children}
        </div>
     
    </main>
    );
}
