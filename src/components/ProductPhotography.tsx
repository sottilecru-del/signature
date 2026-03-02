import React, { useState } from 'react';
import { 
  Camera, 
  Check, 
  TrendingUp, 
  Globe, 
  Zap, 
  ChevronDown, 
  ChevronUp,
  ShieldCheck,
  Clock,
  MessageCircle,
  BarChart3,
  Target,
  MousePointerClick,
  FileSearch,
  Link as LinkIcon,
  MapPin,
  Star,
  ExternalLink,
  Info,
  ShoppingCart,
  Layout,
  PenTool,
  Trophy,
  Phone,
  Box,
  Image as ImageIcon,
  Layers,
  RotateCcw,
  FileText,
  Gem,
  User,
  ArrowRight,
  AlertCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-neutral-200 rounded-lg mb-3 overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 text-left bg-neutral-50 hover:bg-neutral-100 transition-colors"
      >
        <span className="text-sm font-bold text-[#1B3A6B]">{question}</span>
        <div className={`transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}>
          <Zap size={18} className="text-[#1B3A6B]" />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-4 text-sm text-neutral-600 leading-relaxed bg-white border-t border-neutral-200">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function ProductPhotography() {
  const [submitted, setSubmitted] = useState(false);
  const [sidebarSubmitted, setSidebarSubmitted] = useState(false);
  const [mainFormSubmitted, setMainFormSubmitted] = useState(false);

  return (
    <div className="bg-neutral-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-neutral-200 py-2 px-4 md:px-8">
        <div className="max-w-screen-2xl mx-auto text-[10px] md:text-xs text-neutral-400 flex items-center gap-2">
          <a href="#" className="text-[#1B3A6B] hover:underline">Home</a>
          <span>›</span>
          <a href="#" className="text-[#1B3A6B] hover:underline">Services</a>
          <span>›</span>
          <span className="font-medium text-neutral-600">Product Photography</span>
        </div>
      </div>

      {/* Page Hero */}
      <section className="relative bg-gradient-to-br from-[#1B3A6B] via-[#0f2347] to-[#1a3a6b] py-16 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M0 0h80v80H0V0zm20 20v40h40V20H20zm20 35a15 15 0 1 1 0-30 15 15 0 0 1 0 30z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>
        
        <div className="max-w-screen-2xl mx-auto grid lg:grid-cols-[1fr_350px] gap-12 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/40 text-orange-200 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse"></span>
              Serving e-commerce sellers in USA, UK, Australia, Canada, Bangladesh
            </div>
            <h1 className="font-condensed text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Professional Product Photography That Turns Browsers Into Buyers — For <span className="text-orange-400">Amazon, Shopify & E-Commerce Brands</span>
            </h1>
            <p className="text-lg text-white/80 mb-8 max-w-2xl leading-relaxed">
              Amazon product photography services can increase conversion rates by up to 80%. We shoot white background, lifestyle, flat lay, and 360° product images for e-commerce brands worldwide — ship your products to us and we handle everything, wherever you are.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {['White Background', 'Lifestyle Photography', 'Flat Lay', '360° Spin', 'Infographics', 'A+ Content', 'Jewellery Photography', 'Ghost Mannequin'].map((pill, i) => (
                <span key={i} className="bg-white/10 border border-white/20 text-white/80 text-[10px] px-3 py-1 rounded-full">
                  {pill}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#FF6B00] text-white px-8 py-4 rounded font-bold text-sm hover:bg-[#e05e00] transition-colors shadow-lg">
                Get a Free Quote in 24 Hours
              </button>
              <button className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded font-bold text-sm hover:bg-white/20 transition-colors">
                See Our Photography Services →
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-lg shadow-2xl overflow-hidden"
          >
            <div className="bg-[#FF6B00] py-3 px-6 text-center">
              <h3 className="text-white font-bold text-sm">Tell Us About Your Products</h3>
              <p className="text-white/80 text-[10px] uppercase tracking-wider">Mood board concept within 24 hours</p>
            </div>
            <div className="p-6">
              {!submitted ? (
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-3">
                  <div className="grid grid-cols-2 gap-2">
                    <input type="text" placeholder="First Name *" required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm outline-none focus:border-[#1B3A6B]" />
                    <input type="text" placeholder="Last Name *" required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm outline-none focus:border-[#1B3A6B]" />
                  </div>
                  <input type="email" placeholder="Business Email *" required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm outline-none focus:border-[#1B3A6B]" />
                  <input type="text" placeholder="Brand Name *" required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm outline-none focus:border-[#1B3A6B]" />
                  <select required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm focus:border-[#1B3A6B] outline-none bg-white">
                    <option value="">Your Country *</option>
                    <option>United States</option>
                    <option>United Kingdom</option>
                    <option>Australia</option>
                    <option>Bangladesh</option>
                    <option>Canada</option>
                    <option>Other</option>
                  </select>
                  <select className="w-full border border-neutral-200 rounded px-3 py-2 text-sm focus:border-[#1B3A6B] outline-none bg-white">
                    <option>Styles: White Background</option>
                    <option>Styles: Lifestyle</option>
                    <option>Styles: Flat Lay</option>
                    <option>Styles: 360° Spin</option>
                    <option>Styles: Infographics</option>
                    <option>Styles: Multiple Styles</option>
                  </select>
                  <button type="submit" className="w-full bg-[#1B3A6B] text-white py-3 rounded font-bold text-sm hover:bg-[#152d55] transition-colors">
                    Get My Free Quote & Mood Board →
                  </button>
                  <a href="https://wa.me/yourphonenumber" target="_blank" className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white py-2.5 rounded font-bold text-xs hover:bg-[#1fb855] transition-colors">
                    <MessageCircle size={16} />
                    WhatsApp Chat Instead
                  </a>
                </form>
              ) : (
                <div className="bg-green-50 border border-green-200 rounded p-6 text-center">
                  <Check className="mx-auto text-green-500 mb-2" size={32} />
                  <h4 className="text-green-800 font-bold text-sm mb-1">Done!</h4>
                  <p className="text-green-700 text-xs">We will send your quote and mood board within 24 hours.</p>
                </div>
              )}
              <div className="mt-4 flex justify-center gap-4 text-[10px] text-neutral-400 font-medium uppercase tracking-wider">
                <span className="flex items-center gap-1"><ShieldCheck size={12} /> Safe</span>
                <span className="flex items-center gap-1"><Check size={12} /> Free</span>
                <span className="flex items-center gap-1"><Clock size={12} /> 24hr Delivery</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="bg-orange-50 border-b border-orange-100 py-4 px-4 md:px-8 overflow-hidden">
        <div className="max-w-screen-2xl mx-auto flex items-center gap-8">
          <span className="bg-orange-500 text-white text-[10px] font-bold px-2 py-0.5 rounded flex-shrink-0">MARKET STATS</span>
          <div className="flex-1 overflow-hidden">
            <div className="flex gap-12 whitespace-nowrap animate-marquee">
              {[
                '70% of shoppers say photos influence purchase decisions',
                'Professional photos boost conversion rates by up to 30%',
                'Fewer returns and negative reviews with pro photos',
                '7x higher conversion rates with visual content',
                'Amazon compliant white background images',
                'Lifestyle shots that drive emotional connection'
              ].map((item, i) => (
                <span key={i} className="text-xs text-neutral-600 flex items-center gap-2">
                  <Check size={14} className="text-green-600" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-screen-2xl mx-auto py-12 px-4 md:px-8 grid lg:grid-cols-[1fr_350px] gap-12">
        <div className="space-y-12">
          {/* Problem Section */}
          <section className="bg-white p-8 rounded-lg border border-neutral-200 shadow-sm">
            <div className="flex items-center gap-2 text-orange-500 text-[10px] font-bold uppercase tracking-widest mb-2">
              <Info size={14} />
              The Challenge
            </div>
            <h2 className="font-condensed text-2xl font-bold text-[#1B3A6B] mb-6 border-l-4 border-orange-500 pl-4">
              Your Product Is Good. Your Photos Are Costing You Sales.
            </h2>
            <div className="prose prose-sm max-w-none text-neutral-600 space-y-4 leading-relaxed">
              <p>Here is what is happening to thousands of e-commerce sellers in USA, UK, and Australia right now.</p>
              <p>They have a great product but DIY photos that look amateur next to polished competitor listings. They are losing clicks not because their price is wrong or their product is bad — but because their images are not convincing enough to make a stranger trust them with their money.</p>
              <p>Most shoppers scroll, tap, and decide within seconds, often without reading a single word. Your product image is your first — and often only — chance to earn that click.</p>
              <p>Hiring professional Amazon product photography services costs more upfront. But you get consistently high-quality images that meet all requirements. Professional photographers understand e-commerce photo specs inside and out. They handle lighting, background removal, and editing efficiently. We do exactly this — for sellers shipping to us from USA, UK, Australia, Canada, and Bangladesh.</p>
            </div>
          </section>

          {/* Services Section */}
          <section className="bg-white p-8 rounded-lg border border-neutral-200 shadow-sm">
            <div className="flex items-center gap-2 text-orange-500 text-[10px] font-bold uppercase tracking-widest mb-2">
              <Zap size={14} />
              Our Services
            </div>
            <h2 className="font-condensed text-2xl font-bold text-[#1B3A6B] mb-6 border-l-4 border-orange-500 pl-4">
              Every Style of Product Photography Your E-Commerce Brand Needs
            </h2>
            
            <div className="space-y-10">
              {/* White Background */}
              <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-[#1B3A6B] text-white p-2 rounded">
                    <Box size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-[#1B3A6B]">White Background Photography (Amazon & Marketplace Compliant)</h3>
                </div>
                <p className="text-sm text-neutral-600 mb-4 leading-relaxed">
                  The foundation of every product listing. Amazon's main images must feature a pure white background of RGB 255,255,255, be clearly in focus, professionally lit, and shot at a minimum of 1,000 pixels on the longest side — with 2,500 x 2,500 pixels recommended for optimal zoom functionality.
                </p>
                <p className="text-sm text-neutral-600 mb-4 leading-relaxed">
                  We shoot every white background image to these exact specifications — so your listings are compliant, zoom-ready, and approved first time without back-and-forth. No suppressed listings. No resubmission delays.
                </p>
                <div className="bg-white p-4 rounded border border-neutral-200">
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest block mb-2">What is included:</span>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {['Pure white studio backdrop', 'Professional lighting', 'Multi-angle shots', 'Background cleanup (RGB 255,255,255)', 'Basic retouching', 'JPEG and PNG formats'].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-neutral-500">
                        <Check size={12} className="text-green-500" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Lifestyle */}
              <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-[#1B3A6B] text-white p-2 rounded">
                    <ImageIcon size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-[#1B3A6B]">Lifestyle Photography — Products in Real-World Contexts</h3>
                </div>
                <p className="text-sm text-neutral-600 mb-4 leading-relaxed">
                  White background images tell shoppers what a product is. Lifestyle images tell them why they need it. Product styling communicates your brand values and helps convey emotion. It helps customers get an idea or feeling of what your brand is like.
                </p>
                <p className="text-sm text-neutral-600 mb-4 leading-relaxed">
                  We art-direct and shoot lifestyle images that place your product in the real-world scenarios your target customer in USA, UK, or Australia actually lives in — their home, their kitchen, their office, their outdoor space.
                </p>
                <div className="bg-white p-4 rounded border border-neutral-200">
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest block mb-2">What is included:</span>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {['Set design and prop sourcing', 'Model photography where needed', 'Location or studio setup', 'Full retouching & grading', 'Multiple aspect ratios', 'Social & Ad optimized'].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-neutral-500">
                        <Check size={12} className="text-green-500" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Flat Lay */}
              <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-[#1B3A6B] text-white p-2 rounded">
                    <Layers size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-[#1B3A6B]">Flat Lay & Editorial Photography</h3>
                </div>
                <p className="text-sm text-neutral-600 mb-4 leading-relaxed">
                  The preferred format for social media, campaign imagery, gifting brands, and subscription boxes. Overhead, art-directed compositions with styled props and on-brand colour palettes that stop the scroll on Instagram and Pinterest.
                </p>
                <div className="bg-white p-4 rounded border border-neutral-200">
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest block mb-2">What is included:</span>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {['Full prop selection', 'Colour direction', 'Overhead studio setup', 'Multiple compositional variations', 'Full retouching', 'Square, portrait, landscape'].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-neutral-500">
                        <Check size={12} className="text-green-500" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 360° Photography */}
              <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-[#1B3A6B] text-white p-2 rounded">
                    <RotateCcw size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-[#1B3A6B]">360° Product Photography</h3>
                </div>
                <p className="text-sm text-neutral-600 mb-4 leading-relaxed">
                  Shoppers want to see products from every angle. We produce fully interactive 360-degree product spins that integrate directly into your Shopify product pages, Amazon listings via A+ Content, and brand website.
                </p>
                <div className="bg-white p-4 rounded border border-neutral-200">
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest block mb-2">What is included:</span>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {['Full 360° studio capture', 'Professional image stitching', 'Interactive web embed file', 'Amazon & Shopify export', 'Zoom & Inspect ready'].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-neutral-500">
                        <Check size={12} className="text-green-500" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Infographic */}
              <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-[#1B3A6B] text-white p-2 rounded">
                    <FileText size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-[#1B3A6B]">Infographic & Amazon A+ Content Images</h3>
                </div>
                <p className="text-sm text-neutral-600 mb-4 leading-relaxed">
                  These are the secondary images that display your product's key features, dimensions, materials, and benefits in a clear, visual format — and they are one of the highest-converting image types on any Amazon listing.
                </p>
                <div className="bg-white p-4 rounded border border-neutral-200">
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest block mb-2">What is included:</span>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {['Up to 7 secondary listing images', 'Feature callouts', 'Size comparison graphics', 'Material highlight graphics', 'Use-case demonstrations', 'Before/after formats'].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-neutral-500">
                        <Check size={12} className="text-green-500" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Luxury */}
              <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-[#1B3A6B] text-white p-2 rounded">
                    <Gem size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-[#1B3A6B]">Luxury, Jewellery & Detail Photography</h3>
                </div>
                <p className="text-sm text-neutral-600 mb-4 leading-relaxed">
                  High-end macro and close-up photography for fine jewellery, watches, perfume, cosmetics, and luxury goods. Specialist lighting rigs capture surface texture, gemstone brilliance, and metalwork detail.
                </p>
                <div className="bg-white p-4 rounded border border-neutral-200">
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest block mb-2">What is included:</span>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {['Specialist macro lighting rig', 'Multiple close-up angles', 'High-res 300dpi delivery', '2,500px digital files', 'Colour accuracy retouching', 'Surface detail focus'].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-neutral-500">
                        <Check size={12} className="text-green-500" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Ghost Mannequin */}
              <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-[#1B3A6B] text-white p-2 rounded">
                    <User size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-[#1B3A6B]">Ghost Mannequin & Apparel Photography</h3>
                </div>
                <p className="text-sm text-neutral-600 mb-4 leading-relaxed">
                  Ghost mannequin photography — where the mannequin is removed in post-production — gives apparel the structured, professional appearance that boosts click-through rates while keeping costs lower than model photography.
                </p>
                <div className="bg-white p-4 rounded border border-neutral-200">
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest block mb-2">What is included:</span>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {['Ghost mannequin studio shoot', 'Front, back, and detail angles', 'Professional mannequin removal', 'Image compositing', 'Marketplace size delivery'].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-neutral-500">
                        <Check size={12} className="text-green-500" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Comparison */}
          <section className="bg-white p-8 rounded-lg border border-neutral-200 shadow-sm">
            <div className="flex items-center gap-2 text-orange-500 text-[10px] font-bold uppercase tracking-widest mb-2">
              <BarChart3 size={14} />
              Market Comparison
            </div>
            <h2 className="font-condensed text-2xl font-bold text-[#1B3A6B] mb-6 border-l-4 border-orange-500 pl-4">
              What Product Photography Actually Costs in 2025 — And How We Compare
            </h2>
            <p className="text-sm text-neutral-600 mb-8 leading-relaxed">Before you get our pricing, here is an honest look at what the market charges so you can make an informed decision.</p>
            
            <div className="space-y-4">
              {[
                { name: 'Soona (USA)', price: '$39 per photo', desc: 'Good for basic white background. Limited lifestyle and no international brand support.' },
                { name: 'Squareshot (USA)', price: 'From $50 per image', desc: 'Quality is consistent. But lifestyle shoots start at $2,950 for a 4-hour session.' },
                { name: 'UK Studio Agencies', price: '£1,000 to £10,000', desc: 'High quality but priced for established brands with large budgets.' },
                { name: 'Australian Photographers', price: '$25 to $250 per image', desc: 'Local studios are expensive and most do not serve international e-commerce brands.' },
                { name: 'Freelancers (Fiverr)', price: '$5 to $30 per image', desc: 'Inconsistent quality, no brand direction, no understanding of Amazon compliance.' }
              ].map((item, i) => (
                <div key={i} className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-neutral-50 border border-neutral-100 rounded-lg gap-4">
                  <div className="md:w-1/3">
                    <span className="font-bold text-[#1B3A6B] block">{item.name}</span>
                    <span className="text-orange-500 font-bold text-sm">{item.price}</span>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-xs text-neutral-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Our Pricing */}
          <section id="pricing-photography" className="bg-white p-8 rounded-lg border border-neutral-200 shadow-sm">
            <div className="flex items-center gap-2 text-orange-500 text-[10px] font-bold uppercase tracking-widest mb-2">
              <ShoppingCart size={14} />
              Our Pricing
            </div>
            <h2 className="font-condensed text-2xl font-bold text-[#1B3A6B] mb-6 border-l-4 border-orange-500 pl-4">
              Rajput Signature Pricing — Built to Beat Competitors on Value
            </h2>
            <p className="text-sm text-neutral-600 mb-10">Every package includes: professional studio equipment, prop sourcing, full retouching, Amazon and marketplace compliance check, and delivery in all required formats.</p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { 
                  title: 'Starter Pack', 
                  price: '$249', 
                  bestFor: 'New sellers, product launches',
                  features: ['Up to 10 products', 'White background only', '3 angles per product', 'Basic retouching (RGB 255,255,255)', 'JPEG and PNG, web-optimised', '5–7 business day turnaround', '1 revision round', 'Full commercial license']
                },
                { 
                  title: 'Growth Pack', 
                  price: '$549', 
                  featured: true,
                  bestFor: 'Growing brands, active Amazon sellers',
                  features: ['Up to 30 products', 'White background + flat lay or lifestyle', '5 images per product', 'Full professional retouching', '3 infographic/A+ content images', 'Amazon compliance check', 'All formats: web, print, social', '3–5 business day priority', 'Unlimited revision rounds', 'Full commercial license']
                },
                { 
                  title: 'Brand Pack', 
                  price: '$1,199', 
                  bestFor: 'Established brands, multi-product launches',
                  features: ['Up to 60 products', 'All styles: white, lifestyle, flat lay', '7 images per product', 'Brand consistency pass', 'Full A+ Content image set', '360° photography (up to 5 products)', '48-hour express available', 'Dedicated art director', 'Unlimited revisions', 'Full commercial license']
                }
              ].map((pkg, i) => (
                <div key={i} className={`border-2 rounded-lg overflow-hidden flex flex-col ${pkg.featured ? 'border-orange-500 shadow-xl scale-105 z-10' : 'border-neutral-100'}`}>
                  {pkg.featured && <div className="bg-orange-500 text-white text-[10px] font-bold text-center py-1 uppercase tracking-widest">Most Popular</div>}
                  <div className="bg-neutral-50 p-6 text-center border-b border-neutral-100">
                    <h3 className="font-condensed text-lg font-bold text-[#1B3A6B] mb-1">{pkg.title}</h3>
                    <p className="text-[10px] text-neutral-400 uppercase mb-2">{pkg.bestFor}</p>
                    <div className="text-2xl font-bold text-orange-500">{pkg.price}</div>
                  </div>
                  <div className="p-5 flex-1 bg-white">
                    <ul className="space-y-2 mb-8">
                      {pkg.features.map((f, j) => (
                        <li key={j} className="flex gap-2 text-[11px] text-neutral-600">
                          <Check size={14} className="text-green-600 flex-shrink-0" /> {f}
                        </li>
                      ))}
                    </ul>
                    <button className={`w-full py-2.5 rounded font-bold text-xs transition-all ${pkg.featured ? 'bg-[#1B3A6B] text-white hover:bg-[#152d55]' : 'border-2 border-[#1B3A6B] text-[#1B3A6B] hover:bg-[#1B3A6B] hover:text-white'}`}>
                      Get {pkg.title.split(' ')[0]} Plan
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-100">
              <h4 className="font-bold text-[#1B3A6B] text-sm mb-4">Add-Ons (optional, priced separately):</h4>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { label: 'Model photography', price: 'From $99 per look' },
                  { label: '360° spin for additional products', price: '$49 per product' },
                  { label: 'Rush delivery (under 48 hours)', price: '$79 flat fee' },
                  { label: 'Video product clip (15–30 seconds)', price: 'From $149 per product' },
                  { label: 'AI-enhanced background replacement', price: '$29 per image' },
                  { label: 'Extra revision rounds', price: '$39 per round' }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center text-xs border-b border-neutral-200 pb-2">
                    <span className="text-neutral-600">{item.label}</span>
                    <span className="font-bold text-[#1B3A6B]">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section className="bg-white p-8 rounded-lg border border-neutral-200 shadow-sm">
            <div className="flex items-center gap-2 text-orange-500 text-[10px] font-bold uppercase tracking-widest mb-2">
              <MousePointerClick size={14} />
              Process
            </div>
            <h2 className="font-condensed text-2xl font-bold text-[#1B3A6B] mb-8 border-l-4 border-orange-500 pl-4">
              Based Anywhere in USA, UK, or Australia? Here Is Exactly How It Works.
            </h2>
            
            <div className="space-y-6">
              {[
                { step: '01', title: 'Enquire and Get Quoted (Day 1)', desc: 'Submit your enquiry form with your product details, required styles, and any brand guidelines. We respond within 24 hours with a confirmed quote.' },
                { step: '02', title: 'Confirm and Pay (Day 1–2)', desc: 'Once you approve the quote, we send a secure payment link. Your shoot slot is reserved immediately on payment confirmation.' },
                { step: '03', title: 'Ship Your Products to Us (Day 2–7)', desc: 'We send you our studio shipping address with packaging guidelines. Products are fully insured while in our care.' },
                { step: '04', title: 'Pre-Shoot Creative Brief (Day of receipt)', desc: 'Once products arrive, we conduct a visual inspection and send you a final shoot brief for your approval before a single frame is shot.' },
                { step: '05', title: 'Shoot Day (within 2 business days)', desc: 'Professional studio shoot executed to the agreed brief. Progress photos shared in real time via WhatsApp if requested.' },
                { step: '06', title: 'Post-Production (2–5 business days)', desc: 'Full retouching, colour grading, background cleanup, format adaptation, and Amazon compliance check on every image.' },
                { step: '07', title: 'Delivery & Return', desc: 'All final images delivered via cloud link. Products returned to you by tracked courier. You review and approve final files.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 p-6 bg-neutral-50 border border-neutral-100 rounded-lg hover:border-[#1B3A6B] transition-colors group">
                  <div className="w-12 h-12 bg-[#1B3A6B] text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0 font-condensed">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1B3A6B] mb-1">{item.title}</h4>
                    <p className="text-sm text-neutral-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="bg-white p-8 rounded-lg border border-neutral-200 shadow-sm">
            <div className="flex items-center gap-2 text-orange-500 text-[10px] font-bold uppercase tracking-widest mb-2">
              <Trophy size={14} />
              Why Choose Us
            </div>
            <h2 className="font-condensed text-2xl font-bold text-[#1B3A6B] mb-8 border-l-4 border-orange-500 pl-4">
              Why E-Commerce Brands in USA, UK & Australia Choose Us
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'Amazon Compliance Experts', desc: 'Every image we deliver is checked against Amazon\'s current compliance standards (RGB 255,255,255, 1000px+ resolution). No rejected images.' },
                { title: 'Remote-First Workflow', desc: 'Our entire process is built for brands in USA, UK, Australia, and Canada who cannot physically visit a studio. Ship your products to us; we handle everything.' },
                { title: 'Marketing Strategy Integration', desc: 'As a full-service agency, your images are immediately ready for Google Ads, Meta Ads, GMB, and Shopify — optimized by the same team.' },
                { title: 'Unbeatable Value', desc: 'We keep overhead low and pass the savings to you. You get quality that competes with London and New York studios at a fraction of the cost.' },
                { title: 'Full Commercial License', desc: 'Every image is yours permanently. No usage fees, no licensing restrictions, no expiry date. Use them anywhere, forever.' },
                { title: 'Unlimited Revisions', desc: 'We keep working until every image meets your standard. Most clients request zero or one round of revisions because we get the brief right.' }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-neutral-50 border border-neutral-100 rounded-lg shadow-sm">
                  <h4 className="font-bold text-sm text-[#1B3A6B] mb-2">{item.title}</h4>
                  <p className="text-xs text-neutral-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Results Section */}
          <section className="bg-white p-8 rounded-lg border border-neutral-200 shadow-sm">
            <div className="flex items-center gap-2 text-orange-500 text-[10px] font-bold uppercase tracking-widest mb-2">
              <TrendingUp size={14} />
              Results
            </div>
            <h2 className="font-condensed text-2xl font-bold text-[#1B3A6B] mb-8 border-l-4 border-orange-500 pl-4">
              What Happens When Your Product Images Actually Convert
            </h2>
            
            <div className="space-y-6">
              {[
                { 
                  title: 'US Skincare Brand — Amazon Seller', 
                  before: 'DIY photos with inconsistent lighting. 1.2% click-through rate.', 
                  after: 'Listing images replaced across 14 SKUs. CTR increased to 3.8% within 30 days. Revenue increased 67%.' 
                },
                { 
                  title: 'UK Home Goods Brand — Shopify Store', 
                  before: 'Supplier-provided images of inconsistent quality. 1.1% conversion rate.', 
                  after: 'Lifestyle and flat lay shoot covering 22 products. Conversion rate increased to 2.9% within 45 days.' 
                },
                { 
                  title: 'Australian Fashion Accessories Brand — Amazon & Shopify', 
                  before: 'Ghost mannequin images from a local studio that took 3 weeks to deliver.', 
                  after: 'Delivered in 6 business days. Bounce rate dropped 34%. Add-to-cart rate increased 28%.' 
                }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-neutral-50 border border-neutral-100 rounded-lg">
                  <h4 className="font-bold text-[#1B3A6B] mb-3">{item.title}</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-3 rounded border border-neutral-200">
                      <span className="text-[10px] font-bold text-neutral-400 uppercase block mb-1">Before:</span>
                      <p className="text-xs text-neutral-500">{item.before}</p>
                    </div>
                    <div className="bg-green-50 p-3 rounded border border-green-100">
                      <span className="text-[10px] font-bold text-green-600 uppercase block mb-1">After:</span>
                      <p className="text-xs text-green-700 font-medium">{item.after}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Common Mistakes */}
          <section className="bg-white p-8 rounded-lg border border-neutral-200 shadow-sm">
            <div className="flex items-center gap-2 text-orange-500 text-[10px] font-bold uppercase tracking-widest mb-2">
              <AlertCircle size={14} />
              Common Mistakes
            </div>
            <h2 className="font-condensed text-2xl font-bold text-[#1B3A6B] mb-8 border-l-4 border-orange-500 pl-4">
              5 Product Photography Mistakes That Are Killing Your E-Commerce Sales
            </h2>
            
            <div className="space-y-4">
              {[
                { title: 'Using supplier or manufacturer photos', desc: 'Manufacturers aren\'t always great marketers. Most brands that use manufacturer images are unknowingly hurting their own conversion rates.' },
                { title: 'Shooting on a white sheet or DIY background', desc: 'The white in your background must match Amazon\'s #FFFFFF exactly. A white bedsheet or wall will not produce the technically correct pure white.' },
                { title: 'Only shooting from one or two angles', desc: 'Every product on Amazon should have at least six images. Listings with only one or two images consistently underperform.' },
                { title: 'Ignoring lifestyle images entirely', desc: 'White background images satisfy compliance. Lifestyle images drive the emotion that closes the sale. Brands using visual content see 7x higher conversion.' },
                { title: 'Treating photography as a one-time cost', desc: 'Winning brands refresh imagery seasonally and test new concepts against ad performance. Photography is a continuous growth lever.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 bg-neutral-50 border border-neutral-100 rounded-lg">
                  <div className="text-orange-500 font-bold text-lg font-condensed">0{i+1}</div>
                  <div>
                    <h4 className="font-bold text-sm text-[#1B3A6B] mb-1">{item.title}</h4>
                    <p className="text-xs text-neutral-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Is This Right For You */}
          <section className="bg-white p-8 rounded-lg border border-neutral-200 shadow-sm">
            <div className="flex items-center gap-2 text-orange-500 text-[10px] font-bold uppercase tracking-widest mb-2">
              <Target size={14} />
              Suitability
            </div>
            <h2 className="font-condensed text-2xl font-bold text-[#1B3A6B] mb-8 border-l-4 border-orange-500 pl-4">
              Is Our Product Photography Service Right for You?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="font-bold text-green-600 text-sm flex items-center gap-2">
                  <Check size={18} /> This Service Is Right for You If…
                </h4>
                <ul className="space-y-3">
                  {[
                    'Selling on Amazon, Shopify, Etsy in USA, UK, Australia, or Canada',
                    'Using supplier photos or DIY images and conversion is under 3%',
                    'Launching a new product and need a full image set before going live',
                    'Running paid ads on Meta or Google and creative performance is weak',
                    'Need images that work across listing, ads, social, and brand store',
                    'Based internationally and need a remote-friendly shipping workflow'
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2 text-xs text-neutral-600 leading-relaxed">
                      <div className="w-1 h-1 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold text-red-600 text-sm flex items-center gap-2">
                  <AlertCircle size={18} /> This service is not for you if…
                </h4>
                <ul className="space-y-3">
                  {[
                    'Need a local on-location shoot where the photographer must travel to you',
                    'Looking for the cheapest possible option with no quality assurance',
                    'Need same-day turnaround (our minimum is 5 business days)'
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2 text-xs text-neutral-600 leading-relaxed">
                      <div className="w-1 h-1 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq-photography-full" className="bg-white p-8 rounded-lg border border-neutral-200 shadow-sm">
            <div className="flex items-center gap-2 text-orange-500 text-[10px] font-bold uppercase tracking-widest mb-2">
              <MessageCircle size={14} />
              FAQ
            </div>
            <h2 className="font-condensed text-2xl font-bold text-[#1B3A6B] mb-8 border-l-4 border-orange-500 pl-4">
              Questions About Our Product Photography Service
            </h2>
            <div className="space-y-4">
              <FAQItem 
                question="What is the most important type of product photo for Amazon sellers in USA and UK?"
                answer="The white background main image is the most important because it is what appears in Amazon search results. It must be technically perfect — correct white level, resolution, and framing. Beyond that, Amazon recommends at least six images per listing, including various angles."
              />
              <FAQItem 
                question="Do I need to be in the same country as your studio?"
                answer="No. We ship your products back after the shoot. Brands in USA, UK, Australia, and Canada regularly ship products to us for shooting and have them returned by tracked courier. The full workflow is designed for remote international brands."
              />
              <FAQItem 
                question="How do you ensure my images meet Amazon's requirements?"
                answer="Every image goes through an Amazon compliance check before delivery. We verify background white levels (RGB 255,255,255), minimum pixel dimensions, product fill ratio, and category-specific rules. If an image doesn't pass, it's reshot at no extra charge."
              />
              <FAQItem 
                question="How long does the full process take from enquiry to final delivery?"
                answer="From the day products arrive: Starter Pack (5–7 days), Growth Pack (3–5 days), Brand Pack (5–7 days). Rush delivery in under 48 hours is available as an add-on. International shipping time is additional."
              />
              <FAQItem 
                question="Can you match our existing brand photography style?"
                answer="Yes. Share examples of your existing imagery, brand guidelines, and mood boards, and we align every shot to your established visual identity. Brand consistency is built into our process."
              />
              <FAQItem 
                question="What happens if I am not happy with the photos?"
                answer="We offer unlimited revisions until you are satisfied. If specific images do not meet the agreed brief, we reshoot them at no additional cost. We get the brief approved in detail before we shoot to ensure satisfaction."
              />
              <FAQItem 
                question="Do you offer video as well as photography?"
                answer="Yes. Short-form product video clips (15–30 seconds, fully edited) are available as an add-on from $149 per product. These are formatted for Amazon listings, Meta Ads, and Instagram Reels."
              />
              <FAQItem 
                question="Is the commercial license really unlimited?"
                answer="Yes. Every image is fully yours from the moment you receive it. Use them on Amazon, Shopify, your own website, Meta Ads, Google Shopping, print materials, and anywhere else — forever. No licensing fees. No expiry."
              />
            </div>
          </section>

          {/* Final CTA Section */}
          <section id="contact-photography-final" className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg border-2 border-[#1B3A6B] shadow-lg">
            <div className="flex items-center gap-2 text-orange-500 text-[10px] font-bold uppercase tracking-widest mb-2">
              <Zap size={14} />
              Get Started
            </div>
            <h2 className="font-condensed text-2xl font-bold text-[#1B3A6B] mb-6">Your Competitors Are Investing in Professional Photography. Your Customers Can Tell the Difference.</h2>
            <p className="text-sm text-neutral-600 mb-8 leading-relaxed">Approximately 60% of online shoppers rely heavily on images, second only to user reviews, when making a purchase decision. In a marketplace where every listing is one scroll away from the next, the quality of your product photography is a direct revenue variable.</p>

            <div className="grid md:grid-cols-2 gap-12">
              {!mainFormSubmitted ? (
                <form onSubmit={(e) => { e.preventDefault(); setMainFormSubmitted(true); }} className="space-y-3">
                  <div className="grid grid-cols-2 gap-2">
                    <input type="text" placeholder="First Name *" required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm outline-none focus:border-[#1B3A6B] bg-white" />
                    <input type="text" placeholder="Last Name *" required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm outline-none focus:border-[#1B3A6B] bg-white" />
                  </div>
                  <input type="email" placeholder="Business Email *" required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm outline-none focus:border-[#1B3A6B] bg-white" />
                  <input type="text" placeholder="Brand Name *" required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm outline-none focus:border-[#1B3A6B] bg-white" />
                  <select required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm focus:border-[#1B3A6B] outline-none bg-white">
                    <option value="">Select Your Country *</option>
                    <option>United States</option><option>United Kingdom</option><option>Australia</option><option>Canada</option><option>Bangladesh</option>
                  </select>
                  <select className="w-full border border-neutral-200 rounded px-3 py-2 text-sm focus:border-[#1B3A6B] outline-none bg-white">
                    <option>Number of products: 1–10</option>
                    <option>Number of products: 10–30</option>
                    <option>Number of products: 30–60</option>
                    <option>Number of products: 60+</option>
                  </select>
                  <textarea placeholder="Tell us about your products and goals..." className="w-full border border-neutral-200 rounded px-3 py-2 text-sm outline-none focus:border-[#1B3A6B] bg-white min-height-[80px]"></textarea>
                  <button type="submit" className="w-full bg-orange-500 text-white py-3 rounded font-bold text-sm hover:bg-orange-600 transition-colors shadow-md">
                    Get My Free Quote in 24 Hours →
                  </button>
                </form>
              ) : (
                <div className="bg-green-50 border border-green-200 rounded p-8 text-center flex flex-col items-center justify-center">
                  <Check className="text-green-500 mb-4" size={48} />
                  <h4 className="text-green-800 font-bold text-lg mb-2">Quote Request Sent!</h4>
                  <p className="text-green-700 text-sm">We will analyze your requirements and reply within 24 hours.</p>
                </div>
              )}

              <div className="space-y-6">
                <div className="bg-[#f0f4ff] border border-[#d0daf0] rounded-lg p-6">
                  <h4 className="font-bold text-sm text-[#1B3A6B] mb-4">What You Get in Your Free Quote</h4>
                  <ul className="space-y-3">
                    {[
                      'Custom quote based on exact product count',
                      'Free mood board concept tailored to your brand',
                      'Amazon compliance checklist for your category',
                      'Response within 24 business hours',
                      'No obligation to proceed',
                      'Remote shipping workflow guide',
                      'Commercial license details'
                    ].map((item, i) => (
                      <li key={i} className="flex gap-2 text-xs text-neutral-600 leading-relaxed">
                        <Check size={14} className="text-green-600 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-[#1B3A6B] to-[#0f2347] p-6 rounded-lg text-center text-white">
                  <h4 className="font-bold text-sm mb-2">Need a quick answer?</h4>
                  <p className="text-[10px] text-white/70 mb-4">Message us on WhatsApp for faster response</p>
                  <a href="https://wa.me/yourphonenumber" target="_blank" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-2 rounded font-bold text-xs hover:bg-[#1fb855] transition-colors">
                    <MessageCircle size={16} /> Message on WhatsApp →
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="sidebar space-y-6">
          {/* Sticky Sidebar Form */}
          <div className="card border-t-4 border-t-[#1B3A6B] sticky top-24">
            <div className="bg-[#1B3A6B] p-4 text-white">
              <h3 className="font-bold text-sm">Get Photography Quote</h3>
              <p className="text-[10px] text-white/70 uppercase tracking-widest">Mood board in 24 hours</p>
            </div>
            <div className="p-5">
              {!sidebarSubmitted ? (
                <form onSubmit={(e) => { e.preventDefault(); setSidebarSubmitted(true); }} className="space-y-3">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Name</label>
                    <input type="text" placeholder="Your full name" required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm outline-none focus:border-[#1B3A6B]" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Email</label>
                    <input type="email" placeholder="Business email" required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm outline-none focus:border-[#1B3A6B]" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Brand</label>
                    <input type="text" placeholder="Your brand name" required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm outline-none focus:border-[#1B3A6B]" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Country</label>
                    <select required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm focus:border-[#1B3A6B] outline-none bg-white">
                      <option value="">Select country</option>
                      <option>United States</option><option>United Kingdom</option><option>Australia</option><option>Canada</option>
                    </select>
                  </div>
                  <button type="submit" className="w-full bg-[#FF6B00] text-white py-3 rounded font-bold text-sm hover:bg-[#e05e00] transition-colors shadow-lg">
                    Get Free Quote →
                  </button>
                </form>
              ) : (
                <div className="bg-green-50 border border-green-200 rounded p-4 text-center">
                  <Check className="mx-auto text-green-500 mb-2" size={24} />
                  <h4 className="text-green-800 font-bold text-sm">Received!</h4>
                  <p className="text-green-700 text-[10px]">We reply within 24 hours.</p>
                </div>
              )}
              <div className="relative my-6 text-center">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-neutral-200"></div></div>
                <span className="relative bg-white px-3 text-[10px] text-neutral-400 font-bold">OR</span>
              </div>
              <a href="https://wa.me/yourphonenumber" target="_blank" className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white py-3 rounded font-bold text-sm hover:bg-[#1fb855] transition-colors shadow-md">
                <MessageCircle size={18} /> WhatsApp Us
              </a>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="card p-5">
            <h4 className="font-bold text-[#1B3A6B] text-xs uppercase tracking-widest mb-4">On This Page</h4>
            <ul className="space-y-2">
              {[
                { label: 'The Challenge', id: '#faq-photography-full' },
                { label: 'Our Services', id: '#faq-photography-full' },
                { label: 'Market Comparison', id: '#pricing-photography' },
                { label: 'Pricing Packages', id: '#pricing-photography' },
                { label: 'Process', id: '#faq-photography-full' },
                { label: 'Why Choose Us', id: '#faq-photography-full' },
                { label: 'Results & Proof', id: '#faq-photography-full' },
                { label: 'Common Mistakes', id: '#faq-photography-full' },
                { label: 'FAQ', id: '#faq-photography-full' }
              ].map((link, i) => (
                <li key={i}>
                  <a href={link.id} className="text-xs text-neutral-600 hover:text-[#FF6B00] flex items-center gap-2 transition-colors">
                    <span className="text-orange-500">→</span> {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Related Services */}
          <div className="card p-5">
            <h4 className="font-bold text-[#1B3A6B] text-xs uppercase tracking-widest mb-4">Related Services</h4>
            <ul className="space-y-2">
              {['SEO Services', 'Paid Media Advertising', 'AI CRM Solutions', 'GMB Ranking Optimization', 'AI Marketing Tools'].map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-xs text-neutral-600 hover:text-[#FF6B00] flex items-center gap-2 transition-colors">
                    <span className="text-orange-500">→</span> {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is the most important type of product photo for Amazon sellers in USA and UK?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The white background main image is the most important because it is what appears in Amazon search results. It must be technically perfect — correct white level, resolution, and framing. Beyond that, Amazon recommends at least six images per listing, including various angles."
              }
            },
            {
              "@type": "Question",
              "name": "Do I need to be in the same country as your studio?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. We ship your products back after the shoot. Brands in USA, UK, Australia, and Canada regularly ship products to us for shooting and have them returned by tracked courier."
              }
            },
            {
              "@type": "Question",
              "name": "How do you ensure my images meet Amazon's requirements?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Every image goes through an Amazon compliance check before delivery. We verify background white levels (RGB 255,255,255), minimum pixel dimensions, product fill ratio, and category-specific rules."
              }
            },
            {
              "@type": "Question",
              "name": "How long does the full process take from enquiry to final delivery?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "From the day products arrive: Starter Pack (5–7 days), Growth Pack (3–5 days), Brand Pack (5–7 days). Rush delivery in under 48 hours is available as an add-on."
              }
            },
            {
              "@type": "Question",
              "name": "Can you match our existing brand photography style?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Share examples of your existing imagery, brand guidelines, and mood boards, and we align every shot to your established visual identity."
              }
            },
            {
              "@type": "Question",
              "name": "What happens if I am not happy with the photos?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We offer unlimited revisions until you are satisfied. If specific images do not meet the agreed brief, we reshoot them at no additional cost."
              }
            },
            {
              "@type": "Question",
              "name": "Do you offer video as well as photography?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Short-form product video clips (15–30 seconds, fully edited) are available as an add-on from $149 per product."
              }
            },
            {
              "@type": "Question",
              "name": "Is the commercial license really unlimited?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Every image is fully yours from the moment you receive it. Use them on Amazon, Shopify, your own website, Meta Ads, Google Shopping, print materials, and anywhere else — forever."
              }
            }
          ]
        })}
      </script>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "E-Commerce Product Photography Service",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Rajput Signature"
          },
          "areaServed": [
            {"@type": "Country", "name": "US"},
            {"@type": "Country", "name": "GB"},
            {"@type": "Country", "name": "AU"},
            {"@type": "Country", "name": "CA"},
            {"@type": "Country", "name": "BD"}
          ],
          "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "USD",
            "lowPrice": "249",
            "highPrice": "1199"
          }
        })}
      </script>
    </div>
  );
}
