import React, { useState } from 'react';
import { 
  ShoppingCart, 
  Check, 
  TrendingUp, 
  Zap, 
  ShieldCheck, 
  Clock, 
  MessageCircle, 
  BarChart3, 
  Target, 
  MousePointerClick, 
  Star, 
  Info, 
  Layout, 
  Trophy, 
  Phone,
  Search,
  Globe,
  FileText,
  Link as LinkIcon,
  Package,
  ArrowRight,
  AlertCircle,
  Settings,
  Cpu
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

export default function ShopifySEO() {
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
          <span className="font-medium text-neutral-600">Shopify SEO & Store Optimization</span>
        </div>
      </div>

      {/* Page Hero */}
      <section className="relative bg-gradient-to-br from-[#1B3A6B] via-[#0f2347] to-[#1a3a6b] py-16 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>
        
        <div className="max-w-screen-2xl mx-auto grid lg:grid-cols-[1fr_350px] gap-12 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/40 text-orange-200 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse"></span>
              Shopify SEO Experts for USA, UK, Australia & Canada
            </div>
            <h1 className="font-condensed text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Shopify SEO That <span className="text-orange-400">Scales Your E-Commerce Revenue</span>
            </h1>
            <p className="text-lg text-white/80 mb-8 max-w-2xl leading-relaxed">
              We optimize your Shopify store to rank for high-intent keywords, increase organic traffic, and drive more sales. Technical SEO, on-page optimization, and authoritative link building.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {['Technical Audit', 'Collection Pages', 'Product Pages', 'Speed Optimization', 'Content Strategy', 'Link Building'].map((pill, i) => (
                <span key={i} className="bg-white/10 border border-white/20 text-white/80 text-[10px] px-3 py-1 rounded-full">
                  {pill}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { num: '50%+', label: 'Avg Traffic Increase' },
                { num: '80+', label: 'Stores Optimized' },
                { num: '35%+', label: 'Higher Conversion' },
                { num: '200+', label: 'Technical Audits' }
              ].map((stat, i) => (
                <div key={i}>
                  <span className="block text-2xl font-bold text-orange-400 font-condensed">{stat.num}</span>
                  <span className="text-[10px] text-white/60 uppercase tracking-wider">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-lg shadow-2xl overflow-hidden"
          >
            <div className="bg-[#FF6B00] py-3 px-6 text-center">
              <h3 className="text-white font-bold text-sm">Free Shopify SEO Audit</h3>
              <p className="text-white/80 text-[10px] uppercase tracking-wider">Get your score in 48 hours</p>
            </div>
            <div className="p-6">
              {!submitted ? (
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-3">
                  <div className="grid grid-cols-2 gap-2">
                    <input type="text" placeholder="First Name *" required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm outline-none focus:border-[#1B3A6B]" />
                    <input type="text" placeholder="Last Name *" required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm outline-none focus:border-[#1B3A6B]" />
                  </div>
                  <input type="email" placeholder="Business Email *" required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm outline-none focus:border-[#1B3A6B]" />
                  <input type="text" placeholder="Store URL *" required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm outline-none focus:border-[#1B3A6B]" />
                  <select required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm focus:border-[#1B3A6B] outline-none bg-white">
                    <option value="">Target Market *</option>
                    <option>USA</option>
                    <option>UK</option>
                    <option>Australia</option>
                    <option>Canada</option>
                    <option>Other</option>
                  </select>
                  <button type="submit" className="w-full bg-[#1B3A6B] text-white py-3 rounded font-bold text-sm hover:bg-[#152d55] transition-colors flex items-center justify-center gap-2">
                    <BarChart3 size={16} /> Get My Free Shopify Audit
                  </button>
                </form>
              ) : (
                <div className="bg-green-50 border border-green-200 rounded p-6 text-center">
                  <Check className="mx-auto text-green-500 mb-2" size={32} />
                  <h4 className="text-green-800 font-bold text-sm mb-1">Request Received!</h4>
                  <p className="text-green-700 text-xs">We will send your audit within 48 hours.</p>
                </div>
              )}
              <div className="mt-4 flex justify-center gap-4 text-[10px] text-neutral-400 font-medium uppercase tracking-wider">
                <span className="flex items-center gap-1"><ShieldCheck size={12} /> Secure</span>
                <span className="flex items-center gap-1"><Check size={12} /> Free</span>
                <span className="flex items-center gap-1"><Clock size={12} /> 48hr Delivery</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-screen-2xl mx-auto py-12 px-4 md:px-8 grid lg:grid-cols-[1fr_350px] gap-12">
        <div className="space-y-12">
          {/* Services Section */}
          <section className="bg-white p-8 rounded-lg border border-neutral-200 shadow-sm">
            <div className="flex items-center gap-2 text-orange-500 text-[10px] font-bold uppercase tracking-widest mb-2">
              <Zap size={14} />
              Our Services
            </div>
            <h2 className="font-condensed text-2xl font-bold text-[#1B3A6B] mb-6 border-l-4 border-orange-500 pl-4">
              Shopify SEO & Store Optimization
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { 
                  icon: <Settings size={24} />, 
                  title: 'Technical Shopify Audit', 
                  desc: 'We fix duplicate content, broken links, and crawl errors that are common in Shopify stores. We ensure your site structure is optimized for search engines.' 
                },
                { 
                  icon: <Layout size={24} />, 
                  title: 'Collection Page Optimization', 
                  desc: 'We optimize your collection pages to rank for broad, high-volume keywords, ensuring they are the primary landing pages for category-level searches.' 
                },
                { 
                  icon: <Package size={24} />, 
                  title: 'Product Page SEO', 
                  desc: 'Individual product page optimization including SEO titles, meta descriptions, and schema markup to improve visibility in search results.' 
                },
                { 
                  icon: <Cpu size={24} />, 
                  title: 'Speed & Core Web Vitals', 
                  desc: 'Shopify can be slow. We optimize your theme, apps, and images to ensure your store passes Google\'s Core Web Vitals for better rankings.' 
                },
                { 
                  icon: <FileText size={24} />, 
                  title: 'E-Commerce Content Strategy', 
                  desc: 'We create a content roadmap that targets informational keywords, helping you capture customers earlier in the buying journey.' 
                },
                { 
                  icon: <LinkIcon size={24} />, 
                  title: 'Authoritative Link Building', 
                  desc: 'We build high-quality, relevant backlinks to your Shopify store to increase your domain authority and improve overall rankings.' 
                }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-neutral-50 border border-neutral-100 rounded-lg border-t-4 border-t-[#1B3A6B] hover:border-t-orange-500 transition-all shadow-sm">
                  <div className="text-[#1B3A6B] mb-4">{item.icon}</div>
                  <h4 className="font-bold text-sm text-[#1B3A6B] mb-2">{item.title}</h4>
                  <p className="text-xs text-neutral-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section id="pricing-shopify" className="bg-white p-8 rounded-lg border border-neutral-200 shadow-sm">
            <div className="flex items-center gap-2 text-orange-500 text-[10px] font-bold uppercase tracking-widest mb-2">
              <ShoppingCart size={14} />
              Pricing
            </div>
            <h2 className="font-condensed text-2xl font-bold text-[#1B3A6B] mb-6 border-l-4 border-orange-500 pl-4">
              Shopify SEO Monthly Packages
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { 
                  title: 'Starter', 
                  price: '$499', 
                  sub: 'per month',
                  features: ['Technical SEO audit', 'Keyword research', '10 product pages/mo', '2 collection pages/mo', 'Monthly reporting', 'Email support'] 
                },
                { 
                  title: 'Growth', 
                  price: '$899', 
                  sub: 'per month',
                  featured: true, 
                  features: ['Everything in Starter', '30 product pages/mo', '5 collection pages/mo', '2 blog posts/mo', 'Speed optimization', 'Priority support'] 
                },
                { 
                  title: 'Scale', 
                  price: '$1,499', 
                  sub: 'per month',
                  features: ['Everything in Growth', 'Unlimited product pages', 'All collection pages', '4 blog posts/mo', 'Link building (2/mo)', 'Dedicated account manager'] 
                }
              ].map((pkg, i) => (
                <div key={i} className={`border-2 rounded-lg overflow-hidden flex flex-col ${pkg.featured ? 'border-orange-500 shadow-xl scale-105 z-10' : 'border-neutral-100'}`}>
                  {pkg.featured && <div className="bg-orange-500 text-white text-[10px] font-bold text-center py-1 uppercase tracking-widest">Most Popular</div>}
                  <div className="bg-neutral-50 p-6 text-center border-b border-neutral-100">
                    <h3 className="font-condensed text-lg font-bold text-[#1B3A6B] mb-1">{pkg.title}</h3>
                    <div className="text-2xl font-bold text-orange-500">{pkg.price}</div>
                    <div className="text-sm font-bold text-[#1B3A6B]">{pkg.sub}</div>
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
                      Get {pkg.title} Plan
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq-shopify" className="bg-white p-8 rounded-lg border border-neutral-200 shadow-sm">
            <div className="flex items-center gap-2 text-orange-500 text-[10px] font-bold uppercase tracking-widest mb-2">
              <MessageCircle size={14} />
              FAQ
            </div>
            <h2 className="font-condensed text-2xl font-bold text-[#1B3A6B] mb-8 border-l-4 border-orange-500 pl-4">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <FAQItem 
                question="Is Shopify good for SEO?"
                answer="Yes, Shopify is a very SEO-friendly platform, but it requires specific technical configurations (like fixing duplicate URL structures) to perform at its best."
              />
              <FAQItem 
                question="How long until I see more traffic to my store?"
                answer="SEO is a long-term strategy. Most Shopify stores see meaningful traffic growth within 3-6 months of consistent optimization."
              />
              <FAQItem 
                question="Do you fix Shopify speed issues?"
                answer="Yes, speed optimization is included in our Growth and Scale packages. We optimize images, scripts, and apps to improve load times."
              />
              <FAQItem 
                question="Can you help with Shopify migrations?"
                answer="Yes, we specialize in SEO-safe migrations from platforms like WooCommerce or Magento to Shopify, ensuring you don't lose your existing rankings."
              />
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="sidebar space-y-6">
          <div className="card border-t-4 border-t-[#1B3A6B] sticky top-24">
            <div className="bg-[#1B3A6B] p-4 text-white">
              <h3 className="font-bold text-sm">Free Shopify SEO Audit</h3>
              <p className="text-[10px] text-white/70 uppercase tracking-widest">Score your store in 48 hours</p>
            </div>
            <div className="p-5">
              {!sidebarSubmitted ? (
                <form onSubmit={(e) => { e.preventDefault(); setSidebarSubmitted(true); }} className="space-y-3">
                  <input type="text" placeholder="Your Name" required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm outline-none focus:border-[#1B3A6B]" />
                  <input type="email" placeholder="Business Email" required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm outline-none focus:border-[#1B3A6B]" />
                  <input type="text" placeholder="Store URL" required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm outline-none focus:border-[#1B3A6B]" />
                  <button type="submit" className="w-full bg-[#FF6B00] text-white py-3 rounded font-bold text-sm hover:bg-[#e05e00] transition-colors shadow-lg">
                    Get Free Audit →
                  </button>
                </form>
              ) : (
                <div className="bg-green-50 border border-green-200 rounded p-4 text-center">
                  <Check className="mx-auto text-green-500 mb-2" size={24} />
                  <h4 className="text-green-800 font-bold text-sm">Received!</h4>
                  <p className="text-green-700 text-[10px]">We reply within 24 hours.</p>
                </div>
              )}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
