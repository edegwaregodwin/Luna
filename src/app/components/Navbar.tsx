'use client';
import Link from 'next/link';
import { routes } from '@/utilities/routes';
import { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-luna-blue text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link href="/" className="font-bold text-xl">
                        Luna Initiative
                    </Link>
                    <div className="hidden md:flex space-x-8">
                        <Link href={routes.home} className="hover:text-white/80 transition-colors">
                            Home
                        </Link>
                        <Link href={routes.team} className="hover:text-white/80 transition-colors">
                            Team
                        </Link>
                        <Link href={routes.fundraising} className="hover:text-white/80 transition-colors">
                            Fundraising
                        </Link>
                    </div>
                    <button
                        className="md:hidden p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isMenuOpen ? (
                                <path d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
                {isMenuOpen && (
                    <div className="md:hidden py-4 space-y-4">
                        <Link
                            href={routes.home}
                            className="block hover:text-white/80 transition-colors py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            href={routes.team}
                            className="block hover:text-white/80 transition-colors py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Team
                        </Link>
                        <Link
                            href={routes.fundraising}
                            className="block hover:text-white/80 transition-colors py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Fundraising
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar; 