import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import Navbar from "@/components/Navbar";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        // <div className="relative flex flex-col">
        //     <main className="relative bg-black-3">
        //         <Navbar />
        //         <section className="flex flex-col">
        //             <div className="mx-auto flex w-full flex-col">
        //                 <div className="flex h-16 items-center justify-between md:hidden border-b">
        //                     <h1 className='text-20 font-extrabold'>ZERO | STORY</h1>
        //                     <div className="flex items-center justify-center gap-3">
        //                         {/* <MobileNav /> */}
        //                     </div>
        //                 </div>
        //                 <div className="flex flex-col md:pb-14">
        //                     {/* <Toaster /> */}

        //                     {children}
        //                 </div>
        //             </div>
        //         </section>

        //     </main>

        // </div>
        <div className="">
            <main className="mt-4">
                <div className="lg:hidden">
                    Coming Soon
                </div>
                <div className="max-lg:hidden">
                    <Navbar />
                    {children}
                    <Footer />
                </div>

            </main>
        </div>
    );
}
