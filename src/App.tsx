import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Container } from './components/Container';
import { Button } from './components/Button';
import { Flame, Compass, Heart, HelpCircle, Mail, Sparkles, Star, Leaf, Clock, Truck, Users, Gift, X, ChevronLeft, ChevronRight, Camera, Quote, ChevronDown, MapPin, Phone, Instagram, Facebook, ArrowUp, Send } from 'lucide-react';

const heroCandleImage = 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1200&q=80';
const aboutCandleImage = 'https://images.unsplash.com/photo-1596436889106-be35e843f974?auto=format&fit=crop&w=1200&q=80';

const candleVanillaImg = 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80';
const candleLavenderImg = 'https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?auto=format&fit=crop&w=800&q=80';
const candleOceanImg = 'https://images.unsplash.com/photo-1509223197845-458d87318791?auto=format&fit=crop&w=800&q=80';
const candleRoseImg = 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80';
const candleSandalwoodImg = 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80';
const candleGiftboxImg = 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=800&q=80';

const galleryItems = [
  {
    title: 'Cozy Evenings',
    image: heroCandleImage,
    category: 'Ambiance',
  },
  {
    title: 'Morning Ritual',
    image: candleVanillaImg,
    category: 'Comfort',
  },
  {
    title: 'Relax & Unwind',
    image: candleLavenderImg,
    category: 'Therapy',
  },
  {
    title: 'Thoughtful Gifts',
    image: candleGiftboxImg,
    category: 'Curation',
  },
  {
    title: 'Warm Interiors',
    image: aboutCandleImage,
    category: 'Atelier',
  },
  {
    title: 'Weekend Comfort',
    image: candleRoseImg,
    category: 'Floral',
  },
  {
    title: 'Home Décor',
    image: candleSandalwoodImg,
    category: 'Luxury',
  },
  {
    title: 'Calm Moments',
    image: candleOceanImg,
    category: 'Freshness',
  },
];

export default function App() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(0);
  
  // Contact Form States
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [contactSubmitted, setContactSubmitted] = useState(false);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev !== null ? (prev + 1) % galleryItems.length : null));
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev !== null ? (prev - 1 + galleryItems.length) % galleryItems.length : null));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  // Lock body scroll when Lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxIndex]);

  return (
    <div className="min-h-screen bg-glow-bg flex flex-col text-glow-text font-sans antialiased selection:bg-glow-secondary/30 selection:text-glow-primary">
      {/* Sticky Premium Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow pt-24 pb-20">
        
        {/* 1. HERO SECTION (#home) */}
        <section
          id="home"
          className="relative min-h-[calc(100vh-96px)] flex items-center py-12 lg:py-20 overflow-hidden border-b border-glow-border/30"
        >
          {/* Abstract decorative blurred background elements */}
          <div className="absolute top-1/4 -left-20 w-80 h-80 bg-glow-secondary/15 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-glow-primary/5 rounded-full blur-[120px] pointer-events-none" />

          <Container size="lg" className="relative z-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Content */}
              <div className="lg:col-span-7 flex flex-col items-start text-left">
                {/* Small premium badge */}
                <div className="inline-flex items-center gap-2 px-4.5 py-1.5 rounded-full bg-glow-secondary/15 border border-glow-secondary/30 text-glow-primary text-xs font-semibold tracking-wider uppercase mb-6 animate-fade-in shadow-xs">
                  <span>✨ Handcrafted Soy Candles</span>
                </div>

                {/* Exquisite Headline */}
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-glow-text leading-[1.15] font-medium tracking-tight mb-6 animate-fade-in-up">
                  Fill Your Home with <br className="hidden sm:inline" />
                  <span className="text-glow-primary italic font-normal">Warmth</span> & Fragrance
                </h1>

                {/* Body description */}
                <p className="text-glow-muted text-base sm:text-lg leading-relaxed max-w-xl mb-8 sm:mb-10 animate-fade-in-up">
                  Discover handcrafted soy candles made with natural soy wax and premium fragrances. Perfect for cozy evenings, thoughtful gifts, and beautiful spaces.
                </p>

                {/* Direct Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-10 sm:mb-12 w-full sm:w-auto animate-fade-in-up">
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => {
                      const el = document.getElementById('collection');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Shop Collection
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => {
                      const el = document.getElementById('contact');
                      if (el) {
                        const headerOffset = 80;
                        const elementPosition = el.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                      }
                    }}
                  >
                    Order on WhatsApp
                  </Button>
                </div>

                {/* Trust Row */}
                <div className="flex items-center gap-3 mb-6 border-t border-glow-border/40 pt-6 w-full max-w-md animate-fade-in-up">
                  <div className="flex gap-1" aria-label="5 star rating">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-glow-accent text-glow-accent" />
                    ))}
                  </div>
                  <span className="text-sm font-semibold tracking-wide text-glow-text">
                    500+ Happy Customers
                  </span>
                </div>

                {/* Eco & Craft Bullet Line */}
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-glow-muted font-semibold tracking-wider uppercase animate-fade-in-up">
                  <span>Eco-friendly</span>
                  <span className="text-glow-secondary font-light select-none">•</span>
                  <span>Long Burning</span>
                  <span className="text-glow-secondary font-light select-none">•</span>
                  <span>Handmade</span>
                </div>
              </div>

              {/* Right Column: Premium Lifestyle Image */}
              <div className="lg:col-span-5 relative w-full aspect-[3/4] max-w-md mx-auto lg:max-w-none animate-float">
                {/* Soft warm glow effect behind the container */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-glow-secondary/25 to-glow-accent/15 rounded-[2.5rem] blur-2xl opacity-70 pointer-events-none" />

                {/* Exquisite Rounded Image Container */}
                <div className="absolute inset-0 w-full h-full rounded-[2rem] overflow-hidden shadow-2xl border border-glow-border/60 bg-white">
                  <img
                    src={heroCandleImage}
                    alt="Premium luxury GlowNest handmade scented candle inside a beautiful textured ceramic jar on a wooden plate with organic elements"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                  {/* Subtle inner warm shadow mask */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Aesthetic Detail Float Badge */}
                <div className="absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-md px-5 py-4.5 rounded-2xl border border-glow-border/80 shadow-xl max-w-[210px] hidden sm:block">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-glow-accent block mb-1">Authentic Craft</span>
                  <p className="font-serif text-sm font-medium text-glow-text leading-tight">
                    Hand-poured with 100% natural organic soy wax.
                  </p>
                </div>
              </div>

            </div>
          </Container>
        </section>

        {/* 1.5 TRUST BAR */}
        <section className="bg-glow-secondary/10 border-y border-glow-border/40 py-12 animate-fade-in">
          <Container size="lg">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
              {/* Item 1 */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 p-2 transition-transform duration-300 hover:translate-y-[-4px]">
                <div className="w-12 h-12 shrink-0 rounded-2xl bg-white border border-glow-border flex items-center justify-center text-glow-primary shadow-sm">
                  <Leaf className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-sans font-bold text-base text-glow-text mb-1">100% Natural Soy Wax</h3>
                  <p className="text-xs text-glow-muted leading-relaxed font-normal">Clean burning, biodegradable & entirely non-toxic ingredients.</p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 p-2 transition-transform duration-300 hover:translate-y-[-4px]">
                <div className="w-12 h-12 shrink-0 rounded-2xl bg-white border border-glow-border flex items-center justify-center text-glow-primary shadow-sm">
                  <Clock className="w-6 h-6 animate-pulse" />
                </div>
                <div>
                  <h3 className="font-sans font-bold text-base text-glow-text mb-1">Up to 40 Hours Burn Time</h3>
                  <p className="text-xs text-glow-muted leading-relaxed font-normal">Slow, even burn profile for long-lasting aromatherapy.</p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 p-2 transition-transform duration-300 hover:translate-y-[-4px]">
                <div className="w-12 h-12 shrink-0 rounded-2xl bg-white border border-glow-border flex items-center justify-center text-glow-primary shadow-sm">
                  <Truck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-sans font-bold text-base text-glow-text mb-1">Pan-India Delivery</h3>
                  <p className="text-xs text-glow-muted leading-relaxed font-normal">Carefully packed & shipped safely to your doorstep.</p>
                </div>
              </div>

              {/* Item 4 */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 p-2 transition-transform duration-300 hover:translate-y-[-4px]">
                <div className="w-12 h-12 shrink-0 rounded-2xl bg-white border border-glow-border flex items-center justify-center text-glow-primary shadow-sm">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-sans font-bold text-base text-glow-text mb-1">500+ Happy Customers</h3>
                  <p className="text-xs text-glow-muted leading-relaxed font-normal">Highly rated fragrances that illuminate living spaces.</p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* 2. ABOUT SECTION */}
        <section id="about" className="py-24 border-b border-glow-border/30 relative overflow-hidden">
          {/* Subtle gradient background element */}
          <div className="absolute top-1/2 -right-20 w-72 h-72 bg-glow-secondary/10 rounded-full blur-[90px] pointer-events-none" />

          <Container size="lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Large lifestyle image with reveal animation */}
              <div className="lg:col-span-5 relative w-full aspect-[3/4] max-w-md mx-auto lg:max-w-none">
                <div className="absolute -inset-4 bg-glow-secondary/10 rounded-[2.5rem] blur-xl pointer-events-none" />
                <div className="absolute inset-0 w-full h-full rounded-[2rem] overflow-hidden shadow-xl border border-glow-border/40 bg-white">
                  <img
                    src={aboutCandleImage}
                    alt="Artisanal soy candle making workspace with organic dried flowers, botanicals, and delicate pouring setups"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Right Column: Content and Statistics */}
              <div className="lg:col-span-7 flex flex-col items-start text-left">
                <span className="text-xs font-bold uppercase tracking-widest text-glow-primary mb-3">
                  About GlowNest
                </span>
                
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-glow-text leading-tight mb-6 font-medium">
                  Handcrafted Candles <br />
                  <span className="text-glow-primary italic font-normal">Made with Passion</span>
                </h2>

                <p className="text-glow-muted text-base leading-relaxed mb-8 max-w-xl">
                  GlowNest Candles creates premium handmade soy candles designed to bring warmth, fragrance, and elegance into every home. Every candle is carefully hand-poured in small batches using eco-friendly soy wax and premium fragrance oils.
                </p>

                {/* Statistic Cards */}
                <div className="grid grid-cols-3 gap-4 w-full mb-8">
                  {/* Card 1 */}
                  <div className="bg-white border border-glow-border rounded-2xl p-5 text-center shadow-xs transition-all duration-300 hover:shadow-md hover:border-glow-primary/30 group">
                    <span className="block font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-glow-primary mb-1 transition-transform duration-300 group-hover:scale-105">
                      500+
                    </span>
                    <span className="block text-[11px] sm:text-xs font-semibold tracking-wide text-glow-muted uppercase">
                      Happy Customers
                    </span>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-white border border-glow-border rounded-2xl p-5 text-center shadow-xs transition-all duration-300 hover:shadow-md hover:border-glow-primary/30 group">
                    <span className="block font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-glow-primary mb-1 transition-transform duration-300 group-hover:scale-105">
                      20+
                    </span>
                    <span className="block text-[11px] sm:text-xs font-semibold tracking-wide text-glow-muted uppercase">
                      Unique Fragrances
                    </span>
                  </div>

                  {/* Card 3 */}
                  <div className="bg-white border border-glow-border rounded-2xl p-5 text-center shadow-xs transition-all duration-300 hover:shadow-md hover:border-glow-primary/30 group">
                    <span className="block font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-glow-primary mb-1 transition-transform duration-300 group-hover:scale-105">
                      100%
                    </span>
                    <span className="block text-[11px] sm:text-xs font-semibold tracking-wide text-glow-muted uppercase">
                      Handmade
                    </span>
                  </div>
                </div>

                {/* Learn More CTA */}
                <Button
                  variant="primary"
                  onClick={() => {
                    const el = document.getElementById('collection');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Learn More
                </Button>
              </div>

            </div>
          </Container>
        </section>

        {/* 3. COLLECTION SECTION */}
        <section id="collection" className="py-24 border-b border-glow-border/30 relative overflow-hidden bg-white/50">
          <Container size="lg">
            {/* SECTION HEADER */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-glow-primary/5 border border-glow-primary/10 text-glow-primary text-xs font-semibold tracking-wider uppercase mb-4 animate-fade-in">
                <Sparkles className="w-3.5 h-3.5" /> Our Collection
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-glow-text mb-4 font-medium">
                Find Your <span className="text-glow-primary italic font-normal">Perfect Fragrance</span>
              </h2>
              <p className="text-glow-muted text-base sm:text-lg max-w-2xl mx-auto font-normal">
                Explore our handcrafted soy candles made for cozy evenings, thoughtful gifts, and everyday relaxation.
              </p>
            </div>

            {/* PRODUCT GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {[
                {
                  id: 'vanilla-bliss',
                  name: 'Vanilla Bliss',
                  price: '₹199',
                  description: 'Soft vanilla fragrance with a warm, comforting aroma.',
                  badge: 'Comforting',
                  image: candleVanillaImg,
                },
                {
                  id: 'lavender-calm',
                  name: 'Lavender Calm',
                  price: '₹249',
                  description: 'Relaxing lavender scent for peaceful evenings.',
                  badge: 'Relaxing',
                  image: candleLavenderImg,
                },
                {
                  id: 'ocean-breeze',
                  name: 'Ocean Breeze',
                  price: '₹229',
                  description: 'Fresh aquatic fragrance with clean notes.',
                  badge: 'Fresh',
                  image: candleOceanImg,
                },
                {
                  id: 'rose-bloom',
                  name: 'Rose Bloom',
                  price: '₹199',
                  description: 'Elegant floral aroma inspired by fresh roses.',
                  badge: 'Floral',
                  image: candleRoseImg,
                },
                {
                  id: 'sandalwood-aura',
                  name: 'Sandalwood Aura',
                  price: '₹299',
                  description: 'Rich woody fragrance with a luxurious feel.',
                  badge: 'Luxurious',
                  image: candleSandalwoodImg,
                },
                {
                  id: 'glow-gift-box',
                  name: 'Glow Gift Box',
                  price: '₹399',
                  description: 'A curated candle gift set perfect for special occasions.',
                  badge: 'Curated Set',
                  image: candleGiftboxImg,
                },
              ].map((product, idx) => (
                <div
                  key={product.id}
                  id={`product-card-${product.id}`}
                  className="bg-white border border-glow-border/60 rounded-[1.75rem] overflow-hidden shadow-xs hover:shadow-xl hover:border-glow-primary/20 transition-all duration-500 flex flex-col group"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  {/* Image Container */}
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-glow-bg">
                    <img
                      src={product.image}
                      alt={`${product.name} luxury handcrafted soy candle`}
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    {/* Fragrance badge absolute */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="inline-flex px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-xs text-glow-primary text-[10px] font-bold tracking-widest uppercase shadow-xs">
                        {product.badge}
                      </span>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="p-6 flex flex-col flex-grow text-left">
                    <div className="flex justify-between items-start gap-4 mb-3">
                      <h3 className="font-serif text-xl sm:text-2xl font-semibold text-glow-text group-hover:text-glow-primary transition-colors duration-300">
                        {product.name}
                      </h3>
                      <span className="font-serif text-xl font-bold text-glow-accent whitespace-nowrap bg-glow-secondary/10 px-3 py-1 rounded-full text-sm">
                        {product.price}
                      </span>
                    </div>

                    <p className="text-glow-muted text-sm leading-relaxed mb-6 flex-grow font-normal">
                      {product.description}
                    </p>

                    {/* Order Button */}
                    <Button
                      variant="outline"
                      fullWidth
                      className="group-hover:bg-glow-primary group-hover:text-white group-hover:border-glow-primary transition-all duration-300"
                      onClick={() => {
                        // Smoothly scroll down to contact with details or open WhatsApp directly
                        const message = encodeURIComponent(`Hi GlowNest Candles! I'd like to order the ${product.name} (${product.price}).`);
                        window.open(`https://wa.me/919999999999?text=${message}`, '_blank', 'noopener,noreferrer');
                      }}
                    >
                      Order on WhatsApp
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* SECTION END CUSTOM SET INQUIRY CTA */}
            <div className="mt-16 sm:mt-20 text-center bg-white border border-glow-border/50 rounded-3xl p-8 sm:p-10 max-w-2xl mx-auto shadow-sm relative overflow-hidden">
              <div className="absolute right-0 top-0 w-24 h-24 bg-glow-secondary/15 rounded-full blur-2xl pointer-events-none" />
              <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
                <div>
                  <h4 className="font-serif text-2xl font-medium text-glow-text mb-2">
                    Looking for a custom gift set?
                  </h4>
                  <p className="text-glow-muted text-sm max-w-md font-normal leading-relaxed">
                    We hand-pour custom bulk orders for weddings, corporate gifts, and festive celebrations. Contact us for bespoke scents and custom designs.
                  </p>
                </div>
                <Button
                  variant="primary"
                  onClick={() => {
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="shrink-0"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* Why GlowNest Section */}
        <section id="why-glownest" className="py-24 border-b border-glow-border/30 bg-glow-secondary/10 relative overflow-hidden">
          {/* Subtle gradient background element */}
          <div className="absolute top-1/3 left-10 w-72 h-72 bg-white/40 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-glow-accent/5 rounded-full blur-[120px] pointer-events-none" />

          <Container size="lg">
            {/* SECTION HEADER */}
            <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-glow-primary/5 border border-glow-primary/10 text-glow-primary text-xs font-semibold tracking-wider uppercase mb-4">
                Why GlowNest
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-glow-text mb-4 font-medium">
                Crafted with Care, <span className="text-glow-primary italic font-normal">Designed to Last</span>
              </h2>
              <p className="text-glow-muted text-base sm:text-lg max-w-2xl mx-auto font-normal">
                Every GlowNest candle is thoughtfully handmade using premium ingredients to create a beautiful experience from the first light to the final burn.
              </p>
            </div>

            {/* FEATURE GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Leaf,
                  title: 'Natural Soy Wax',
                  description: 'Made using eco-friendly soy wax for a cleaner and longer burn.',
                },
                {
                  icon: Flame,
                  title: 'Long Burn Time',
                  description: 'Enjoy up to 40 hours of slow, even burning.',
                },
                {
                  icon: Gift,
                  title: 'Beautiful Gift Packaging',
                  description: 'Perfectly packed for birthdays, anniversaries, and celebrations.',
                },
                {
                  icon: Sparkles,
                  title: 'Premium Fragrances',
                  description: 'Carefully selected fragrance oils with rich and lasting aromas.',
                },
                {
                  icon: Heart,
                  title: 'Handcrafted with Love',
                  description: 'Every candle is poured by hand in small batches for exceptional quality.',
                },
                {
                  icon: Truck,
                  title: 'Fast & Safe Delivery',
                  description: 'Reliable packaging and quick shipping across India.',
                },
              ].map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white border border-glow-border/40 rounded-[1.5rem] p-8 shadow-xs hover:shadow-md hover:translate-y-[-6px] transition-all duration-300 group text-left"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <div className="w-14 h-14 rounded-2xl bg-glow-secondary/15 flex items-center justify-center text-glow-primary mb-6 transition-transform duration-300 group-hover:scale-110">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="font-sans font-bold text-lg text-glow-text mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-glow-muted text-sm leading-relaxed font-normal">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* BOTTOM CTA */}
            <div className="mt-16 sm:mt-20 text-center flex flex-col items-center animate-fade-in-up">
              <h4 className="font-serif text-2xl sm:text-3xl font-medium text-glow-text mb-6">
                Experience the GlowNest Difference
              </h4>
              <Button
                variant="primary"
                onClick={() => {
                  const el = document.getElementById('collection');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Shop Collection
              </Button>
            </div>
          </Container>
        </section>

        {/* 3.8 GALLERY SECTION */}
        <section id="gallery" className="py-24 border-b border-glow-border/30 bg-white relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-glow-secondary/10 rounded-full blur-[120px] pointer-events-none" />

          <Container size="lg">
            {/* SECTION HEADER */}
            <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-glow-primary/5 border border-glow-primary/10 text-glow-primary text-xs font-semibold tracking-wider uppercase mb-4">
                <Camera className="w-3.5 h-3.5" /> Gallery
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-glow-text mb-4 font-medium">
                Moments <span className="text-glow-primary italic font-normal">That Glow</span>
              </h2>
              <p className="text-glow-muted text-base sm:text-lg max-w-2xl mx-auto font-normal">
                See how GlowNest candles transform everyday spaces into warm, inviting moments. From cozy evenings to thoughtful gifts, every candle is designed to create a beautiful atmosphere.
              </p>
            </div>

            {/* GALLERY MASONRY-STYLE GRID */}
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8 [column-fill:_balance] animate-fade-in-up">
              {galleryItems.map((item, idx) => (
                <div
                  key={idx}
                  className="break-inside-avoid relative overflow-hidden rounded-[20px] shadow-xs hover:shadow-xl hover:translate-y-[-4px] transition-all duration-500 group cursor-pointer bg-glow-bg border border-glow-border/40 focus:outline-none focus:ring-2 focus:ring-glow-primary focus:ring-offset-2"
                  role="button"
                  tabIndex={0}
                  aria-label={`View larger image of ${item.title}`}
                  onClick={() => setLightboxIndex(idx)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setLightboxIndex(idx);
                    }
                  }}
                >
                  <div className="relative overflow-hidden w-full h-auto">
                    <img
                      src={item.image}
                      alt={`${item.title} lifestyle ambient candle setup`}
                      referrerPolicy="no-referrer"
                      className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                      <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-white/70 mb-1.5 block">
                          {item.category}
                        </span>
                        <h3 className="font-serif text-lg sm:text-xl font-medium text-white">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* BOTTOM CTA */}
            <div className="mt-16 sm:mt-20 text-center flex flex-col items-center">
              <p className="font-serif text-xl sm:text-2xl font-medium text-glow-text mb-6">
                Love what you see?
              </p>
              <Button
                variant="primary"
                onClick={() => {
                  const el = document.getElementById('collection');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Order Your Favorite Candle
              </Button>
            </div>
          </Container>
        </section>

        {/* 4. REVIEWS SECTION */}
        <section id="reviews" className="py-24 border-b border-glow-border/30 relative overflow-hidden bg-glow-secondary/5">
          <Container size="lg">
            {/* SECTION HEADER */}
            <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-glow-primary/5 border border-glow-primary/10 text-glow-primary text-xs font-semibold tracking-wider uppercase mb-4">
                <Heart className="w-3.5 h-3.5 fill-glow-primary" /> Testimonials
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-glow-text mb-4 font-medium">
                Loved by <span className="text-glow-primary italic font-normal">Candle Lovers</span>
              </h2>
              <p className="text-glow-muted text-base sm:text-lg max-w-2xl mx-auto font-normal">
                Our customers love the quality, fragrance, and cozy experience that GlowNest brings into their homes.
              </p>
            </div>

            {/* TOP STATS */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
              {[
                {
                  stars: true,
                  value: '4.9/5 Rating',
                  label: 'Based on 500+ reviews',
                },
                {
                  value: '500+',
                  label: 'Happy Customers',
                },
                {
                  value: '2,000+',
                  label: 'Candles Sold',
                },
                {
                  value: '95%',
                  label: 'Repeat Customers',
                },
              ].map((stat, idx) => (
                <div 
                  key={idx}
                  className="bg-white border border-glow-border/50 rounded-2xl p-6 text-center shadow-xs transition-all duration-300 hover:shadow-md hover:border-glow-primary/20"
                >
                  {stat.stars ? (
                    <div className="flex justify-center gap-0.5 mb-1.5" aria-label="5 stars">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-glow-accent text-glow-accent" />
                      ))}
                    </div>
                  ) : null}
                  <span className="block font-serif text-2xl sm:text-3xl font-bold text-glow-text mb-1">
                    {stat.value}
                  </span>
                  <span className="block text-xs font-semibold tracking-wider text-glow-muted uppercase">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* TESTIMONIALS GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: 'Priya Sharma',
                  location: 'Mumbai',
                  initials: 'PS',
                  bg: 'bg-[#FDF6EE] text-glow-primary',
                  review: 'The Lavender Calm candle smells amazing. It instantly makes my room feel cozy and relaxing.',
                },
                {
                  name: 'Rahul Verma',
                  location: 'Delhi',
                  initials: 'RV',
                  bg: 'bg-[#F5F8F5] text-emerald-800',
                  review: 'Beautiful packaging and excellent quality. I gifted it to my sister and she loved it.',
                },
                {
                  name: 'Ananya Patel',
                  location: 'Ahmedabad',
                  initials: 'AP',
                  bg: 'bg-[#FBF1F1] text-rose-700',
                  review: 'Perfect balance of fragrance—not too strong, not too light. I\'ll definitely order again.',
                },
                {
                  name: 'Neha Kapoor',
                  location: 'Jaipur',
                  initials: 'NK',
                  bg: 'bg-[#F1F5FB] text-blue-700',
                  review: 'These candles have become part of my evening routine. Highly recommended.',
                },
                {
                  name: 'Aarav Mehta',
                  location: 'Pune',
                  initials: 'AM',
                  bg: 'bg-[#F9F5FF] text-purple-700',
                  review: 'Fast delivery and premium quality. Worth every rupee.',
                },
                {
                  name: 'Sneha Iyer',
                  location: 'Bengaluru',
                  initials: 'SI',
                  bg: 'bg-[#FBF8F1] text-amber-700',
                  review: 'The gift box looked beautiful and arrived perfectly packed.',
                },
              ].map((testimonial, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-glow-border/40 rounded-[1.75rem] p-8 shadow-xs hover:shadow-lg hover:translate-y-[-6px] transition-all duration-300 relative overflow-hidden text-left flex flex-col justify-between group"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  {/* Decorative Quote mark */}
                  <Quote className="absolute right-6 top-6 w-12 h-12 text-glow-secondary/10 transition-colors duration-300 group-hover:text-glow-primary/10" />

                  <div className="relative z-10">
                    {/* Stars */}
                    <div className="flex gap-0.5 mb-5" aria-label="5 star rating">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-glow-accent text-glow-accent" />
                      ))}
                    </div>

                    {/* Review text */}
                    <p className="text-glow-text/90 text-sm leading-relaxed mb-6 font-normal italic">
                      "{testimonial.review}"
                    </p>
                  </div>

                  {/* Customer Info */}
                  <div className="flex items-center gap-4 pt-4 border-t border-glow-border/40 mt-auto relative z-10">
                    <div className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm tracking-wide shadow-xs ${testimonial.bg}`}>
                      {testimonial.initials}
                    </div>
                    <div>
                      <h4 className="font-sans font-bold text-sm text-glow-text">
                        {testimonial.name}
                      </h4>
                      <p className="text-[11px] font-semibold tracking-wider text-glow-muted uppercase">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* BOTTOM CTA */}
            <div className="mt-16 sm:mt-20 text-center flex flex-col items-center animate-fade-in-up">
              <h4 className="font-serif text-2xl sm:text-3xl font-medium text-glow-text mb-2">
                Ready to create your own cozy moments?
              </h4>
              <p className="text-glow-muted text-sm max-w-md mx-auto mb-8 font-normal leading-relaxed">
                Choose from our hand-poured individual soy candles or custom gift sets to warm up your space.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <Button
                  variant="primary"
                  onClick={() => {
                    const el = document.getElementById('collection');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto"
                >
                  Shop Collection
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    const message = encodeURIComponent("Hi GlowNest Candles! I'd like to inquire about ordering candles.");
                    window.open(`https://wa.me/919999999999?text=${message}`, '_blank', 'noopener,noreferrer');
                  }}
                  className="w-full sm:w-auto"
                >
                  Order on WhatsApp
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* 5. FAQ SECTION */}
        <section id="faq" className="py-24 border-b border-glow-border/30 bg-white relative overflow-hidden">
          <div className="absolute top-10 right-10 w-80 h-80 bg-glow-secondary/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-glow-accent/5 rounded-full blur-[100px] pointer-events-none" />

          <Container size="md">
            {/* SECTION HEADER */}
            <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-glow-primary/5 border border-glow-primary/10 text-glow-primary text-xs font-semibold tracking-wider uppercase mb-4">
                <HelpCircle className="w-3.5 h-3.5" /> Frequently Asked Questions
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-glow-text mb-4 font-medium">
                Everything You <span className="text-glow-primary italic font-normal">Need to Know</span>
              </h2>
              <p className="text-glow-muted text-base sm:text-lg max-w-2xl mx-auto font-normal">
                Find answers to the most common questions about our candles, delivery, and ordering process.
              </p>
            </div>

            {/* FAQ LIST */}
            <div className="space-y-4 max-w-3xl mx-auto animate-fade-in-up">
              {[
                {
                  q: 'Are your candles made from natural soy wax?',
                  a: 'Yes. Every GlowNest candle is handcrafted using premium natural soy wax for a cleaner and longer-lasting burn.',
                },
                {
                  q: 'How long do the candles burn?',
                  a: 'Depending on the size, our candles typically burn between 25 and 40 hours when cared for properly.',
                },
                {
                  q: 'Do you offer gift packaging?',
                  a: 'Absolutely. Our gift boxes are designed for birthdays, anniversaries, weddings, and festive occasions.',
                },
                {
                  q: 'How do I place an order?',
                  a: 'Simply browse our collection and click the WhatsApp Order button. We\'ll confirm your order and delivery details directly with you.',
                },
                {
                  q: 'Do you deliver across India?',
                  a: 'Yes, we ship our handcrafted candles to customers across India with secure packaging.',
                },
                {
                  q: 'Can I request custom fragrances or bulk orders?',
                  a: 'Yes. We accept custom orders and bulk gifting requests for weddings, events, and corporate gifting.',
                },
              ].map((faq, idx) => {
                const isOpen = faqOpenIndex === idx;
                return (
                  <div
                    key={idx}
                    className="bg-glow-bg border border-glow-border/40 hover:border-glow-primary/20 rounded-2xl shadow-xs transition-all duration-300"
                  >
                    <button
                      className="w-full flex justify-between items-center text-left p-6 font-sans font-bold text-base sm:text-lg text-glow-text hover:text-glow-primary transition-colors focus:outline-none cursor-pointer"
                      onClick={() => setFaqOpenIndex(isOpen ? null : idx)}
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-glow-muted transition-transform duration-300 shrink-0 ml-4 ${
                          isOpen ? 'rotate-180 text-glow-primary' : ''
                        }`}
                      />
                    </button>
                    <div
                      className={`grid transition-all duration-300 ease-in-out overflow-hidden ${
                        isOpen ? 'grid-rows-[1fr] opacity-100 border-t border-glow-border/20' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="p-6 text-glow-muted text-sm sm:text-base leading-relaxed font-normal">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* BOTTOM CTA */}
            <div className="mt-16 text-center flex flex-col items-center animate-fade-in-up">
              <h4 className="font-serif text-xl sm:text-2xl font-medium text-glow-text mb-6">
                Still have questions?
              </h4>
              <Button
                variant="primary"
                onClick={() => {
                  const message = encodeURIComponent("Hi GlowNest! I have a question about your handcrafted soy candles.");
                  window.open(`https://wa.me/919999999999?text=${message}`, '_blank', 'noopener,noreferrer');
                }}
              >
                Chat with Us on WhatsApp
              </Button>
            </div>
          </Container>
        </section>

        {/* 6. CONTACT SECTION */}
        <section id="contact" className="py-24 relative overflow-hidden bg-glow-bg/50">
          {/* Decorative subtle ambient glows */}
          <div className="absolute top-1/4 left-10 w-96 h-96 bg-glow-secondary/15 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-glow-accent/5 rounded-full blur-[120px] pointer-events-none" />

          <Container size="lg">
            {/* SECTION HEADER */}
            <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-glow-primary/5 border border-glow-primary/10 text-glow-primary text-xs font-semibold tracking-wider uppercase mb-4">
                Get in Touch
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-glow-text mb-4 font-medium">
                Let's <span className="text-glow-primary italic font-normal">Brighten Your Space</span>
              </h2>
              <p className="text-glow-muted text-base sm:text-lg max-w-2xl mx-auto font-normal">
                Whether you're ordering your favorite candle, looking for a thoughtful gift, or planning a bulk purchase, we'd love to hear from you.
              </p>
            </div>

            {/* TWO-COLUMN CONTACT LAYOUT */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* LEFT COLUMN: CONTACT INFORMATION */}
              <div className="lg:col-span-5 space-y-8 text-left animate-fade-in-up">
                {/* Intro details */}
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-glow-text mb-3">
                    GlowNest Candles
                  </h3>
                  <p className="text-glow-muted text-sm leading-relaxed max-w-sm">
                    Hand-poured in small batches, our candles fill your home with comforting aromas. Reach out to us for orders, custom sets, or collaborations.
                  </p>
                </div>

                {/* Info Cards */}
                <div className="space-y-4">
                  {/* Address */}
                  <div className="flex gap-4 p-5 bg-white border border-glow-border/40 rounded-2xl shadow-xs hover:shadow-sm transition-all duration-300">
                    <div className="w-10 h-10 rounded-xl bg-glow-secondary/15 flex items-center justify-center text-glow-primary shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-glow-text/50 mb-1">
                        Studio Address
                      </h4>
                      <p className="text-sm font-sans font-medium text-glow-text whitespace-pre-line leading-relaxed">
                        123 Maple Street
                        Jaipur, Rajasthan
                        India
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-4 p-5 bg-white border border-glow-border/40 rounded-2xl shadow-xs hover:shadow-sm transition-all duration-300">
                    <div className="w-10 h-10 rounded-xl bg-glow-secondary/15 flex items-center justify-center text-glow-primary shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-glow-text/50 mb-1">
                        Call or WhatsApp
                      </h4>
                      <p className="text-sm font-mono font-bold text-glow-text hover:text-glow-primary transition-colors">
                        <a href="tel:+919876543210">+91 98765 43210</a>
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-4 p-5 bg-white border border-glow-border/40 rounded-2xl shadow-xs hover:shadow-sm transition-all duration-300">
                    <div className="w-10 h-10 rounded-xl bg-glow-secondary/15 flex items-center justify-center text-glow-primary shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-glow-text/50 mb-1">
                        Email Address
                      </h4>
                      <p className="text-sm font-sans font-medium text-glow-text hover:text-glow-primary transition-colors">
                        <a href="mailto:hello@glownestcandles.com">hello@glownestcandles.com</a>
                      </p>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex gap-4 p-5 bg-white border border-glow-border/40 rounded-2xl shadow-xs hover:shadow-sm transition-all duration-300">
                    <div className="w-10 h-10 rounded-xl bg-glow-secondary/15 flex items-center justify-center text-glow-primary shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-glow-text/50 mb-1">
                        Business Hours
                      </h4>
                      <p className="text-sm font-sans font-medium text-glow-text leading-relaxed">
                        <span className="font-bold text-glow-text">Monday – Saturday:</span> 10:00 AM – 7:00 PM<br />
                        <span className="font-bold text-red-500/80">Sunday:</span> Closed
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social links */}
                <div className="pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-glow-text/40 mb-3.5">
                    Connect on Socials
                  </h4>
                  <div className="flex gap-3">
                    {/* Instagram */}
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white border border-glow-border/40 hover:border-glow-primary/40 text-glow-text hover:text-glow-primary flex items-center justify-center shadow-2xs hover:shadow-xs transition-all duration-300"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-4.5 h-4.5" />
                    </a>
                    {/* Facebook */}
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white border border-glow-border/40 hover:border-glow-primary/40 text-glow-text hover:text-glow-primary flex items-center justify-center shadow-2xs hover:shadow-xs transition-all duration-300"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-4.5 h-4.5" />
                    </a>
                    {/* Pinterest */}
                    <a
                      href="https://pinterest.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white border border-glow-border/40 hover:border-glow-primary/40 text-glow-text hover:text-glow-primary flex items-center justify-center shadow-2xs hover:shadow-xs transition-all duration-300"
                      aria-label="Pinterest"
                    >
                      <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.08 3.16 9.42 7.64 11.1-.11-.95-.21-2.4.04-3.43.23-.97 1.48-6.27 1.48-6.27s-.38-.76-.38-1.88c0-1.76 1.02-3.07 2.29-3.07 1.08 0 1.6.81 1.6 1.78 0 1.09-.69 2.71-1.05 4.22-.3 1.27.64 2.3 1.89 2.3 2.27 0 4.02-2.4 4.02-5.85 0-3.06-2.2-5.19-5.33-5.19-3.63 0-5.76 2.72-5.76 5.53 0 1.1.42 2.27.95 2.91.1.13.12.24.09.37-.1.41-.32 1.3-.36 1.48-.05.2-.18.25-.42.14-1.55-.72-2.52-2.99-2.52-4.8 0-3.92 2.85-7.51 8.2-7.51 4.3 0 7.64 3.07 7.64 7.16 0 4.28-2.7 7.72-6.45 7.72-1.26 0-2.45-.65-2.85-1.42 0 0-.62 2.37-.77 2.95-.28 1.08-1.04 2.43-1.55 3.26C8.81 23.8 10.36 24 12 24c6.63 0 12-5.37 12-12S18.63 0 12 0z" />
                      </svg>
                    </a>
                    {/* WhatsApp */}
                    <a
                      href="https://wa.me/919999999999"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white border border-glow-border/40 hover:border-glow-primary/40 text-glow-text hover:text-glow-primary flex items-center justify-center shadow-2xs hover:shadow-xs transition-all duration-300"
                      aria-label="WhatsApp"
                    >
                      <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.454L0 24zm6.59-4.846c1.6.95 3.178 1.448 4.82 1.449 5.513 0 10.002-4.487 10.005-10 0-2.67-1.037-5.18-2.922-7.067C16.666 1.65 14.156.616 11.488.616 5.977.616 1.487 5.104 1.485 10.617c0 1.69.452 3.336 1.309 4.764l-.993 3.63 3.722-.976s.013.007.13.076z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN: MODERN CONTACT FORM */}
              <div className="lg:col-span-7 bg-white border border-glow-border/50 rounded-3xl p-8 sm:p-10 shadow-sm relative overflow-hidden text-left animate-fade-in-up">
                {contactSubmitted ? (
                  <div className="text-center py-12 flex flex-col items-center justify-center h-full">
                    <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 animate-scale-in">
                      <Sparkles className="w-8 h-8 fill-emerald-100" />
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-medium text-glow-text mb-3">
                      Thank You, {contactName}!
                    </h3>
                    <p className="text-glow-muted text-sm sm:text-base max-w-sm mb-8 leading-relaxed font-normal">
                      Your inquiry has been received. We'll review your message and reach back to you shortly. For immediate assistance, feel free to order on WhatsApp.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
                      <Button
                        variant="primary"
                        onClick={() => {
                          const message = encodeURIComponent(`Hi GlowNest! I'm ${contactName}. I submitted a form inquiry.`);
                          window.open(`https://wa.me/919999999999?text=${message}`, '_blank', 'noopener,noreferrer');
                        }}
                      >
                        Order on WhatsApp
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => {
                          setContactSubmitted(false);
                          setContactName('');
                          setContactEmail('');
                          setContactPhone('');
                          setContactMessage('');
                        }}
                      >
                        Send Another Message
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      if (contactName.trim() === '') return;
                      setContactSubmitted(true);
                    }}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div>
                        <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-glow-text/50 mb-2">
                          Full Name *
                        </label>
                        <input
                          id="contact-name"
                          name="name"
                          type="text"
                          required
                          value={contactName}
                          onChange={(e) => setContactName(e.target.value)}
                          placeholder="Your beautiful name"
                          className="w-full px-4 py-3.5 bg-glow-bg/40 border border-glow-border/60 hover:border-glow-primary/20 focus:border-glow-primary focus:bg-white rounded-xl text-sm text-glow-text placeholder-glow-muted/60 transition-all duration-300 outline-none focus:ring-1 focus:ring-glow-primary/10"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-wider text-glow-text/50 mb-2">
                          Email Address *
                        </label>
                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          required
                          value={contactEmail}
                          onChange={(e) => setContactEmail(e.target.value)}
                          placeholder="you@example.com"
                          className="w-full px-4 py-3.5 bg-glow-bg/40 border border-glow-border/60 hover:border-glow-primary/20 focus:border-glow-primary focus:bg-white rounded-xl text-sm text-glow-text placeholder-glow-muted/60 transition-all duration-300 outline-none focus:ring-1 focus:ring-glow-primary/10"
                        />
                      </div>
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-bold uppercase tracking-wider text-glow-text/50 mb-2">
                        Phone Number
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        value={contactPhone}
                        onChange={(e) => setContactPhone(e.target.value)}
                        placeholder="Your contact number"
                        className="w-full px-4 py-3.5 bg-glow-bg/40 border border-glow-border/60 hover:border-glow-primary/20 focus:border-glow-primary focus:bg-white rounded-xl text-sm text-glow-text placeholder-glow-muted/60 transition-all duration-300 outline-none focus:ring-1 focus:ring-glow-primary/10"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-wider text-glow-text/50 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        required
                        rows={4}
                        value={contactMessage}
                        onChange={(e) => setContactMessage(e.target.value)}
                        placeholder="Describe your inquiry, order details, or custom batch sizes..."
                        className="w-full px-4 py-3.5 bg-glow-bg/40 border border-glow-border/60 hover:border-glow-primary/20 focus:border-glow-primary focus:bg-white rounded-2xl text-sm text-glow-text placeholder-glow-muted/60 transition-all duration-300 outline-none focus:ring-1 focus:ring-glow-primary/10 resize-none"
                      />
                    </div>

                    <Button type="submit" variant="primary" fullWidth className="py-4 font-bold tracking-wide">
                      <Send className="w-4 h-4 shrink-0 mr-2" aria-hidden="true" /> Send Message
                    </Button>

                    {/* PREFER WHATSAPP OPTION */}
                    <div className="pt-6 border-t border-glow-border/30 text-center">
                      <p className="text-xs font-bold tracking-wider text-glow-muted uppercase mb-4">
                        Prefer WhatsApp?
                      </p>
                      <Button
                        type="button"
                        variant="outline"
                        fullWidth
                        onClick={() => {
                          const defaultMsg = encodeURIComponent("Hi GlowNest! I'd like to place an order or ask a question.");
                          window.open(`https://wa.me/919999999999?text=${defaultMsg}`, '_blank', 'noopener,noreferrer');
                        }}
                        className="border-emerald-500/20 text-emerald-700 hover:bg-emerald-50 hover:text-emerald-800 hover:border-emerald-500/40"
                      >
                        Order on WhatsApp
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* GOOGLE MAP PLACEHOLDER */}
            <div className="mt-16 animate-fade-in-up">
              <div className="relative w-full h-80 rounded-3xl overflow-hidden border border-glow-border/50 shadow-xs bg-stone-100 group flex items-center justify-center">
                {/* Decorative Map Grid & Roads SVG */}
                <svg className="absolute inset-0 w-full h-full opacity-35" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="mapGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ccc" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#mapGrid)" />
                  {/* Organic lines representing schematic roads */}
                  <path d="M -50,100 Q 200,80 500,150 T 1200,90" fill="none" stroke="#bbb" strokeWidth="6" />
                  <path d="M 150,-10 L 250,400" fill="none" stroke="#bbb" strokeWidth="5" />
                  <path d="M 600,-20 Q 550,200 700,450" fill="none" stroke="#bbb" strokeWidth="4.5" />
                  <path d="M -20,280 Q 400,310 900,240 T 1400,320" fill="none" stroke="#bbb" strokeWidth="5.5" />
                  {/* Local rivers / parks */}
                  <path d="M 300,-50 Q 320,120 400,280 T 420,500" fill="none" stroke="#e0f2fe" strokeWidth="40" className="opacity-40" />
                </svg>

                {/* Pulsing Beacon Marker in Center */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="relative flex h-14 w-14 items-center justify-center">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-glow-primary/20 opacity-75"></span>
                    <div className="relative inline-flex rounded-full h-8 w-8 bg-glow-primary items-center justify-center text-white shadow-md">
                      <Flame className="w-4 h-4 animate-pulse fill-white" />
                    </div>
                  </div>

                  {/* Elegant studio badge detail info card */}
                  <div className="mt-4 bg-white/95 backdrop-blur-md border border-glow-border px-5 py-3 rounded-2xl shadow-md text-center">
                    <h5 className="font-serif text-sm font-bold text-glow-text">GlowNest Candles</h5>
                    <p className="text-[11px] font-semibold tracking-wider text-glow-muted uppercase mt-0.5">Jaipur, Rajasthan</p>
                  </div>
                </div>

                {/* Bottom Overlay Info Card */}
                <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-auto z-10">
                  <span className="inline-flex px-3.5 py-1.5 rounded-full bg-stone-900/90 text-[10px] font-semibold tracking-widest text-white uppercase backdrop-blur-xs">
                    📍 Curated Jaipur Crafting Studio
                  </span>
                </div>
              </div>
            </div>
          </Container>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-[#1F140F] text-[#FAF7F2] border-t border-stone-800/30 pt-20 pb-12 relative overflow-hidden">
        {/* Subtle graphic accent */}
        <div className="absolute right-0 bottom-0 w-80 h-80 bg-glow-primary/5 rounded-full blur-[120px] pointer-events-none" />

        <Container size="lg">
          {/* Main 4-column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 text-left">
            {/* COLUMN 1: BRAND LOGO & DESCRIPTION */}
            <div className="lg:col-span-4 space-y-6">
              <a href="#" className="inline-block group">
                <span className="font-serif text-3xl font-extrabold tracking-wide text-white flex items-center gap-2">
                  <Flame className="w-7 h-7 fill-glow-accent text-glow-accent group-hover:scale-110 transition-transform duration-300" />
                  GlowNest
                </span>
              </a>
              <p className="text-stone-300/85 text-sm leading-relaxed max-w-sm font-normal">
                Thoughtfully handcrafted premium soy candles poured in small batches with sustainable ingredients to bring cozy warmth to your sanctuary.
              </p>
              {/* Social Icons */}
              <div className="flex gap-3 pt-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-glow-accent/60 hover:bg-white/10 text-white/80 hover:text-white flex items-center justify-center transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-glow-accent/60 hover:bg-white/10 text-white/80 hover:text-white flex items-center justify-center transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-glow-accent/60 hover:bg-white/10 text-white/80 hover:text-white flex items-center justify-center transition-all duration-300"
                  aria-label="Pinterest"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.08 3.16 9.42 7.64 11.1-.11-.95-.21-2.4.04-3.43.23-.97 1.48-6.27 1.48-6.27s-.38-.76-.38-1.88c0-1.76 1.02-3.07 2.29-3.07 1.08 0 1.6.81 1.6 1.78 0 1.09-.69 2.71-1.05 4.22-.3 1.27.64 2.3 1.89 2.3 2.27 0 4.02-2.4 4.02-5.85 0-3.06-2.2-5.19-5.33-5.19-3.63 0-5.76 2.72-5.76 5.53 0 1.1.42 2.27.95 2.91.1.13.12.24.09.37-.1.41-.32 1.3-.36 1.48-.05.2-.18.25-.42.14-1.55-.72-2.52-2.99-2.52-4.8 0-3.92 2.85-7.51 8.2-7.51 4.3 0 7.64 3.07 7.64 7.16 0 4.28-2.7 7.72-6.45 7.72-1.26 0-2.45-.65-2.85-1.42 0 0-.62 2.37-.77 2.95-.28 1.08-1.04 2.43-1.55 3.26C8.81 23.8 10.36 24 12 24c6.63 0 12-5.37 12-12S18.63 0 12 0z" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-glow-accent/60 hover:bg-white/10 text-white/80 hover:text-white flex items-center justify-center transition-all duration-300"
                  aria-label="WhatsApp"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.454L0 24zm6.59-4.846c1.6.95 3.178 1.448 4.82 1.449 5.513 0 10.002-4.487 10.005-10 0-2.67-1.037-5.18-2.922-7.067C16.666 1.65 14.156.616 11.488.616 5.977.616 1.487 5.104 1.485 10.617c0 1.69.452 3.336 1.309 4.764l-.993 3.63 3.722-.976s.013.007.13.076z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* COLUMN 2: QUICK LINKS */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-white font-sans font-bold text-sm uppercase tracking-wider">
                Quick Links
              </h4>
              <ul className="space-y-2.5">
                {[
                  { name: 'Home', href: '#hero' },
                  { name: 'About', href: '#about' },
                  { name: 'Collection', href: '#collection' },
                  { name: 'Gallery', href: '#gallery' },
                  { name: 'Reviews', href: '#reviews' },
                  { name: 'FAQ', href: '#faq' },
                  { name: 'Contact', href: '#contact' },
                ].map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      className="text-stone-300 hover:text-glow-accent text-sm transition-colors duration-200"
                      onClick={(e) => {
                        e.preventDefault();
                        const el = document.querySelector(link.href);
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* COLUMN 3: CUSTOMER CARE */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-white font-sans font-bold text-sm uppercase tracking-wider">
                Customer Care
              </h4>
              <ul className="space-y-2.5">
                {[
                  'Shipping Policy',
                  'Returns',
                  'Privacy Policy',
                  'Terms & Conditions'
                ].map((item, idx) => (
                  <li key={idx}>
                    <button
                      onClick={() => alert(`${item} details will be configured on launch. Thank you for your interest!`)}
                      className="text-stone-300 hover:text-glow-accent text-sm text-left transition-colors duration-200 focus:outline-none cursor-pointer"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* COLUMN 4: CONTACT INFO */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-white font-sans font-bold text-sm uppercase tracking-wider">
                Our Contact
              </h4>
              <ul className="space-y-3.5 text-stone-300 text-sm">
                <li className="flex items-start gap-3.5">
                  <Phone className="w-4 h-4 text-glow-accent mt-0.5 shrink-0" />
                  <span>+91 98765 43210</span>
                </li>
                <li className="flex items-start gap-3.5">
                  <Mail className="w-4 h-4 text-glow-accent mt-0.5 shrink-0" />
                  <a href="mailto:hello@glownestcandles.com" className="hover:text-glow-accent transition-colors">
                    hello@glownestcandles.com
                  </a>
                </li>
                <li className="flex items-start gap-3.5">
                  <Clock className="w-4 h-4 text-glow-accent mt-0.5 shrink-0" />
                  <div>
                    <p className="font-bold text-white">Mon – Sat</p>
                    <p className="text-xs text-stone-400">10:00 AM – 7:00 PM</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Divider / Credits & Back to Top */}
          <div className="pt-8 border-t border-stone-800/40 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-stone-400 text-xs text-center sm:text-left">
              <p>© 2026 GlowNest Candles. Made with ❤️ for cozy homes.</p>
            </div>

            {/* Back to Top */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 hover:border-glow-accent/40 hover:bg-white/10 text-stone-300 hover:text-white rounded-full text-xs font-semibold tracking-wider transition-all duration-300 group cursor-pointer"
              aria-label="Back to Top"
            >
              Back to Top
              <ArrowUp className="w-3.5 h-3.5 group-hover:translate-y-[-2px] transition-transform duration-300" />
            </button>
          </div>
        </Container>
      </footer>

      {/* FULLSCREEN LIGHTBOX */}
      {lightboxIndex !== null && (
        <div 
          role="dialog"
          aria-modal="true"
          aria-label="Gallery Lightbox"
          className="fixed inset-0 bg-black/95 backdrop-blur-md z-[100] flex flex-col justify-between p-4 sm:p-8 animate-fade-in"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Top Actions */}
          <div className="w-full flex justify-between items-center text-white/80 px-4 pt-4 z-10">
            <span className="font-serif text-sm tracking-wide">
              {galleryItems[lightboxIndex].category} • {lightboxIndex + 1} of {galleryItems.length}
            </span>
            <button
              onClick={() => setLightboxIndex(null)}
              className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Main Stage */}
          <div className="flex-grow flex items-center justify-center relative w-full px-12">
            {/* Left Control */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev !== null ? (prev - 1 + galleryItems.length) % galleryItems.length : null));
              }}
              className="absolute left-2 sm:left-4 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-200 hover:scale-105 z-10 focus:outline-none focus:ring-2 focus:ring-white cursor-pointer"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Image Container */}
            <div 
              className="max-w-4xl max-h-[70vh] w-full h-full flex items-center justify-center p-2 sm:p-4 animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryItems[lightboxIndex].image}
                alt={galleryItems[lightboxIndex].title}
                referrerPolicy="no-referrer"
                className="max-w-full max-h-full object-contain rounded-xl shadow-2xl border border-white/10 select-none"
              />
            </div>

            {/* Right Control */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev !== null ? (prev + 1) % galleryItems.length : null));
              }}
              className="absolute right-2 sm:right-4 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-200 hover:scale-105 z-10 focus:outline-none focus:ring-2 focus:ring-white cursor-pointer"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Title bar */}
          <div className="text-center text-white pb-6 z-10" onClick={(e) => e.stopPropagation()}>
            <h3 className="font-serif text-2xl sm:text-3xl font-medium tracking-wide mb-1">
              {galleryItems[lightboxIndex].title}
            </h3>
            <p className="text-white/60 text-xs sm:text-sm">
              Handcrafted premium soy candle by GlowNest
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
