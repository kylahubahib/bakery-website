import { useEffect, useState } from 'react';
import Logo from '../assets/logo.png';
import bg from '../assets/bg.png';
import menu from '../menu/menu.json';
import MenuCarousel from './MenuCarousel';
import shopImg from '../assets/bakeshop.png';


export default function Home() {
    const [isScrolled, setIsScrolled] = useState(false);

    const images = import.meta.glob("../menu/*.{png,jpg,jpeg,webp}",{ eager: true, import: "default"});

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 24);

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="relative min-h-screen bg-primary select-none">
            {/* Header */}
            <header className={`fixed z-10 top-0 left-0 w-full h-16 flex items-center justify-between px-2 transition-all duration-300 ${isScrolled ? 'bg-secondary shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
                <div className="mx-6">
                    <a href="#home" className={`${isScrolled ? 'text-primary' : 'text-secondary'} font-dm-serif text-xl`}>Hearth & Crumb</a>
                </div>
                <div className="flex items-center mx-10">
                    <ul className="flex space-x-4 font-inter">
                        <li><a href="#home" className={`${isScrolled ? 'text-primary' : 'text-secondary'} text-md font-medium hover:text-accent`}>Home</a></li>
                        <li><a href="#menu" className={`${isScrolled ? 'text-primary' : 'text-secondary'} text-md font-medium hover:text-accent`}>Our Menu</a></li>
                        <li><a href="#about" className={`${isScrolled ? 'text-primary' : 'text-secondary'} text-md font-medium hover:text-accent`}>About</a></li>
                        <li><a href="#contact" className={`${isScrolled ? 'text-primary' : 'text-secondary'} text-md font-medium hover:text-accent`}>Contact</a></li>
                        <li>
                            <a href="#contact" className="bg-accent text-white text-sm font-medium font-inter px-4 py-1 rounded-full hover:bg-secondary transition duration-300">Order Now</a>
                        </li>
                    </ul>
                </div>
            </header>

            {/* Hero Section */}
            <section id="home" className="scroll-mt-16 flex flex-col items-center justify-center h-screen bg-cover bg-center " style={{ backgroundImage: `url(${bg})` }}>
                <img src={Logo} alt="Bakery Logo" className="w-80 h-70" />
                <h2 className="text-4xl font-bold font-dm-serif text-secondary mb-4">Fresh from our oven, made for your table.</h2>
                <p className="text-xl font-caveat text-secondary mb-6">Handmade breads, pastries, and cakes baked fresh for your day.</p>
                <a href="#contact" className="bg-accent text-white font-inter px-6 py-3 rounded-full hover:bg-secondary transition duration-300">Order Now</a>
            </section>

            {/* Our Menu Section */}
            <section id="menu" className="scroll-mt-16 flex flex-col items-center justify-center h-screen bg-cover bg-center " style={{ backgroundImage: `url(${bg})` }}>
                <h2 className="text-4xl font-bold font-dm-serif text-secondary mb-4">Our Menu</h2>
                <p className="text-xl font-caveat text-secondary mb-6">Explore our delicious offerings, crafted with love and care.</p>
                <MenuCarousel menu={menu} images={images as Record<string, string>} />
            </section>

            {/* About Us Section */}
            <section
                id="about"
                className="scroll-mt-16 flex flex-col justify-center min-h-screen bg-cover bg-center py-20"
                style={{ backgroundImage: `url(${bg})` }}
            >
                <h2 className="text-4xl font-bold font-dm-serif text-secondary mb-10 text-center">
                   ABOUT US
                </h2>

                <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
                    <div className="flex-1 text-left">
                        <h3 className="text-2xl font-bold font-dm-serif text-secondary mb-4">
                            It started with a love for the simple things.
                        </h3>
                        <p className="text-base leading-7 font-inter text-secondary mb-5">
                            Hearth & Crumb began with a small oven, a family recipe book, and a belief that good bread does not need to be complicated. What started as weekend baking for friends and neighbors grew into a bakery where we could share those same recipes with the community.
                        </p>
                        <p className="text-base leading-7 font-inter text-secondary">
                            Today, we make our breads, pastries, and cakes by hand with carefully selected ingredients and time-tested techniques. Whether it is a loaf brought home for breakfast, a pastry shared over coffee, or a cake for a special day, we are happy to be part of your table.
                        </p>
                    </div>

                    <div className="flex-1 flex justify-center">
                        <div className="relative w-full max-w-md p-3 border-2 border-accent/40 rounded-lg">
                            <div className="absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2 border-accent rounded-tr-lg" aria-hidden="true" />
                            <img src={shopImg} alt="Inside the Hearth & Crumb bakery" className="relative w-full h-80 object-cover rounded-md shadow-md"/>
                        </div>
                    </div>
                </div>

                <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 mt-14">
                    <div className="text-center">
                        <p className="text-accent font-dm-serif text-2xl mb-2">01</p>
                        <h3 className="text-lg font-bold font-dm-serif text-secondary mb-1">Handmade</h3>
                        <p className="font-inter text-sm text-secondary/80">Made with care, not mass-produced.</p>
                    </div>
                    <div className="text-center">
                        <p className="text-accent font-dm-serif text-2xl mb-2">02</p>
                        <h3 className="text-lg font-bold font-dm-serif text-secondary mb-1">Quality Ingredients</h3>
                        <p className="font-inter text-sm text-secondary/80">We choose ingredients we genuinely believe in.</p>
                    </div>
                    <div className="text-center">
                        <p className="text-accent font-dm-serif text-2xl mb-2">03</p>
                        <h3 className="text-lg font-bold font-dm-serif text-secondary mb-1">Made for Sharing</h3>
                        <p className="font-inter text-sm text-secondary/80">Baked for everyday moments and special occasions.</p>
                    </div>
                </div>
            </section>

            <section id="contact" className="flex flex-col justify-center bg-cover bg-center pb-30 px-6" style={{ backgroundImage: `url(${bg})` }}>
                <div className="max-w-5xl w-full mx-auto ">
                    <h2 className="text-3xl font-bold font-dm-serif text-secondary text-center mb-3">Contact Us</h2>
                    <p className="text-lg font-caveat text-secondary text-center mb-8">Questions, custom cakes, or just want to talk bread? We would love to hear from you.</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                        <div className="bg-secondary text-primary rounded-lg p-6 flex flex-col justify-between shadow-md">
                            <div>
                                <p className="text-accent font-dm-serif text-xl mb-3">Find us at the oven</p>
                                <p className="font-inter text-sm leading-6 text-primary/80 mb-6">Drop by for something warm, call us with a question, or send a note about your next celebration.</p>

                                <div className="space-y-4 font-inter text-sm">
                                    <div>
                                        <p className="text-accent font-semibold mb-1">Visit</p>
                                        <p>14 Hearth Lane<br />Bakersfield, CA 90210</p>
                                    </div>
                                    <div>
                                        <p className="text-accent font-semibold mb-1">Call or email</p>
                                        <a href="tel:+15550142732" className="block hover:text-accent transition-colors">(555) 014-2732</a>
                                        <a href="mailto:hello@hearthandcrumb.com" className="block hover:text-accent transition-colors">hello@hearthandcrumb.com</a>
                                    </div>
                                    <div>
                                        <p className="text-accent font-semibold mb-1">Bakery hours</p>
                                        <p>Tuesday - Saturday, 7am - 5pm<br />Sunday, 8am - 2pm</p>
                                    </div>
                                </div>
                            </div>
                            <p className="font-caveat text-lg text-primary/80 mt-8">Good things are worth sharing.</p>
                        </div>

                        <form className="bg-white/80 rounded-lg p-6 shadow-md border border-accent/20 flex flex-col gap-4">
                            <div>
                                <label htmlFor="name" className="block text-secondary font-inter text-sm font-semibold mb-1">Your name</label>
                                <input id="name" name="name" type="text" required className="w-full rounded-md border border-secondary/20 bg-primary/50 px-3 py-2.5 font-inter text-sm text-secondary outline-none focus:border-accent" placeholder="Jane Smith" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-secondary font-inter text-sm font-semibold mb-1">Email address</label>
                                <input id="email" name="email" type="email" required className="w-full rounded-md border border-secondary/20 bg-primary/50 px-3 py-2.5 font-inter text-sm text-secondary outline-none focus:border-accent" placeholder="jane@example.com" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-secondary font-inter text-sm font-semibold mb-1">How can we help?</label>
                                <textarea id="message" name="message" required rows={4} className="w-full resize-none rounded-md border border-secondary/20 bg-primary/50 px-3 py-2.5 font-inter text-sm text-secondary outline-none focus:border-accent" placeholder="Tell us what is on your mind..." />
                            </div>
                            <button type="submit" className="self-start bg-accent text-white font-inter px-5 py-2.5 rounded-full hover:bg-secondary transition duration-300">Send a message</button>
                        </form>
                    </div>
                </div>
            </section>

        </div>
    );
}