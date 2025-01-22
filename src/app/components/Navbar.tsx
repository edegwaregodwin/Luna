'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/team', label: 'Team' },
    { href: '/fundraising', label: 'Fundraising' }
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const nav = document.getElementById('mobile-menu');
            if (nav && !nav.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        };

        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    // Prevent scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    return (
        <nav className="bg-luna-blue text-white relative z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link href="/" className="font-bold text-xl">
                        Luna Initiative
                    </Link>
                    <div className="hidden md:flex space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="hover:text-white/80 transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                    <button
                        className="md:hidden p-2 hover:bg-luna-blue-light rounded-lg transition-colors"
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
                    <>
                        <div
                            className="fixed inset-0 bg-black bg-opacity-50 md:hidden"
                            aria-hidden="true"
                            onClick={() => setIsMenuOpen(false)}
                        />
                        <div
                            id="mobile-menu"
                            className="absolute top-16 left-0 right-0 bg-luna-blue md:hidden shadow-lg border-t border-white/10"
                        >
                            <div className="px-4 py-2">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className="block px-4 py-3 rounded-lg hover:bg-luna-blue-light transition-colors"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar; 