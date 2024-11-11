// components/Footer.js
export default function Footer() {
    return (
        <footer className="bg-white mt-auto border-t border-gray-200">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Thrive Point Group LLC. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}