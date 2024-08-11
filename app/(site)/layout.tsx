import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="">
            <main className="mt-4">
                <Navbar />
                {children}
                <Footer />
            </main>
        </div>
    );
}
