const Footer = () => {
    return (
        <footer className="bg-luna-blue text-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <p className="text-white/90">
                        © {new Date().getFullYear()} The Luna Initiative. All rights reserved.
                    </p>
                    <p className="mt-2 text-white/80">
                        Making education accessible to all.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer; 