import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Events', path: '/events' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 antialiased">
            <div className={`max-w-5xl mx-auto px-6 py-2 rounded-full transition-all duration-700 flex items-center justify-between ${
                scrolled 
                ? 'bg-black/40 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.4)]' 
                : 'bg-transparent'
            }`}>
                
                {/* Clean Logo Section - Ready for Image/Text */}
                <NavLink to="/" className="flex items-center no-underline group">
                    <img src="public/images/Ncse-Logo.jpeg" alt="Logo" className="h-8 w-auto" /> 
                </NavLink>

                {/* Desktop Nav with Layout Animation */}
                <div className="hidden md:flex items-center gap-2">
                    <LayoutGroup>
                        {navLinks.map((link) => {
                            const isActive = location.pathname === link.path;
                            return (
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    className={`relative px-4 py-2 text-[11px] uppercase tracking-[0.2em] font-semibold transition-colors duration-300 ${
                                        isActive ? 'text-white' : 'text-white/50 hover:text-white'
                                    }`}
                                >
                                    <span className="relative z-10">{link.name}</span>
                                    {isActive && (
                                        <motion.div
                                            layoutId="nav-pill"
                                            className="absolute inset-0 bg-white/10 rounded-full shadow-inner"
                                            transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                                        />
                                    )}
                                </NavLink>
                            );
                        })}
                    </LayoutGroup>
                    
                    {/* Rolling Text Button */}
                    <button className="ml-4 group relative h-9 overflow-hidden rounded-full bg-white px-6 text-[10px] font-bold uppercase tracking-[0.15em] text-black transition-all hover:scale-105 active:scale-95">
                        <motion.div className="flex flex-col transition-transform duration-500 ease-[0.76, 0, 0.24, 1] group-hover:-translate-y-full">
                            <span className="flex h-9 items-center justify-center">Join Us</span>
                            <span className="flex h-9 items-center justify-center bg-blue-600 text-white">Join Us</span>
                        </motion.div>
                    </button>
                </div>

                {/* Mobile Toggle with Rotation */}
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    className="md:hidden text-white p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <AnimatePresence mode="wait">
                        {isOpen ? (
                            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                                <X size={20} />
                            </motion.div>
                        ) : (
                            <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                                <Menu size={20} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.button>
            </div>

            {/* Mobile Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        className="absolute top-24 left-6 right-6 bg-black/80 backdrop-blur-3xl border border-white/10 rounded-[2rem] overflow-hidden md:hidden shadow-2xl"
                    >
                        <div className="flex flex-col p-10 gap-6 items-center">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                >
                                    <NavLink
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className="text-xl font-light tracking-[0.3em] text-white/60 hover:text-white uppercase"
                                    >
                                        {link.name}
                                    </NavLink>
                                </motion.div>
                            ))}
                            <button className="w-full mt-4 bg-white text-black py-4 rounded-2xl font-bold uppercase tracking-widest text-xs">
                                Join Us
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
