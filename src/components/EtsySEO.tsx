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
  Tag
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

export default function EtsySEO() {
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
          <span className="font-medium text-neutral-600">Etsy SEO & Shop Optimization</span>
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
              Etsy Shop Growth Experts
            </div>
            <h1 className="font-condensed text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Etsy SEO That <span className="text-orange-400">Gets Your Shop Found</span>
            </h1>
            <p className="text-lg text-white/80 mb-8 max-w-2xl leading-relaxed">
              We optimize your Etsy listings to rank for high-intent keywords, increase organic traffic, and drive more sales. Data-driven keyword research, persuasive copywriting, and shop health audits.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {['Keyword Research', 'SEO Titles', 'Tags Optimization', 'Shop Audit', 'Listing Copy', 'Competitor Analysis'].map((pill, i) => (
                <span key={i} className="bg-white/10 border border-white/20 text-white/80 text-[10px] px-3 py-1 rounded-full">
                  {pill}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { num: '60%+', label: 'Avg Traffic Increase' },
                { num: '50+', label: 'Shops Optimized' },
                { num: '40%+', label: 'Higher Conversion' },
                { num: '100+', label: 'Shop Audits' }
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
              <h3 className="text-white font-bold text-sm">Free Etsy Shop Audit</h3>
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
                  <input type="text" placeholder="Etsy Shop URL *" required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm outline-none focus:border-[#1B3A6B]" />
                  <button type="submit" className="w-full bg-[#1B3A6B] text-white py-3 rounded font-bold text-sm hover:bg-[#152d55] transition-colors flex items-center justify-center gap-2">
                    <BarChart3 size={16} /> Get My Free Etsy Audit
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
              Complete Etsy Shop Optimization
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { 
                  icon: <Search size={24} />, 
                  title: 'Etsy Keyword Research', 
                  desc: 'We identify high-volume, low-competition keywords that your competitors are missing. We use eRank and Marmalead for data-driven decisions.' 
                },
                { 
                  icon: <Tag size={24} />, 
                  title: 'Title & Tag Optimization', 
                  desc: 'We optimize your listing titles and all 13 tags to ensure your products appear in relevant Etsy search results.' 
                },
                { 
                  icon: <FileText size={24} />, 
                  title: 'Listing Copywriting', 
                  desc: 'Persuasive, SEO-friendly product descriptions that build trust and drive conversions.' 
                },
                { 
                  icon: <Layout size={24} />, 
                  title: 'Shop Health Audit', 
                  desc: 'Comprehensive audit of your shop policies, about section, and overall health to ensure you meet Etsy\'s best practices.' 
                },
                { 
                  icon: <BarChart3 size={24} />, 
                  title: 'Competitor Analysis', 
                  desc: 'Deep dive into your top competitors to identify their weaknesses and your opportunities to win more sales.' 
                },
                { 
                  icon: <ShieldCheck size={24} />, 
                  title: 'Etsy Ads Management', 
                  desc: 'Optimization of your Etsy Ads to ensure you are getting the best ROI on your advertising spend.' 
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
          <section id="pricing-etsy" className="bg-white p-8 rounded-lg border border-neutral-200 shadow-sm">
            <div className="flex items-center gap-2 text-orange-500 text-[10px] font-bold uppercase tracking-widest mb-2">
              <ShoppingCart size={14} />
              Pricing
            </div>
            <h2 className="font-condensed text-2xl font-bold text-[#1B3A6B] mb-6 border-l-4 border-orange-500 pl-4">
              Etsy Optimization Packages
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { 
                  title: 'Starter', 
                  price: '$199', 
                  sub: 'per shop',
                  features: ['Keyword research', '5 listing optimizations', 'Shop audit report', 'SEO title & tags', '7-day delivery'] 
                },
                { 
                  title: 'Growth', 
                  price: '$399', 
                  sub: 'per shop',
                  featured: true, 
                  features: ['Everything in Starter', '15 listing optimizations', 'Competitor analysis', 'Shop policy optimization', '5-day priority delivery'] 
                },
                { 
                  title: 'Scale', 
                  price: '$699', 
                  sub: 'per shop',
                  features: ['Everything in Growth', '30 listing optimizations', 'Etsy Ads setup', 'Full shop overhaul', '3-day express delivery'] 
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
          <section id="faq-etsy" className="bg-white p-8 rounded-lg border border-neutral-200 shadow-sm">
            <div className="flex items-center gap-2 text-orange-500 text-[10px] font-bold uppercase tracking-widest mb-2">
              <MessageCircle size={14} />
              FAQ
            </div>
            <h2 className="font-condensed text-2xl font-bold text-[#1B3A6B] mb-8 border-l-4 border-orange-500 pl-4">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <FAQItem 
                question="How does Etsy SEO work?"
                answer="Etsy SEO involves optimizing your listing titles, tags, and descriptions to match the search queries of potential buyers. It also considers shop health, policies, and customer reviews."
              />
              <FAQItem 
                question="Do I need to give you my Etsy login?"
                answer="We can either provide the optimized content in a document for you to upload, or we can request 'Limited Access' to your shop to implement the changes for you."
              />
              <FAQItem 
                question="How long until I see more sales?"
                answer="Most Etsy shops see an increase in traffic and sales within 2-4 weeks after the optimizations are indexed by Etsy's search algorithm."
              />
              <FAQItem 
                question="Do you help with Etsy Ads?"
                answer="Yes, Etsy Ads management is included in our Scale package. We help you optimize your ad spend for the best possible ROI."
              />
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="sidebar space-y-6">
          <div className="card border-t-4 border-t-[#1B3A6B] sticky top-24">
            <div className="bg-[#1B3A6B] p-4 text-white">
              <h3 className="font-bold text-sm">Free Etsy Shop Audit</h3>
              <p className="text-[10px] text-white/70 uppercase tracking-widest">Score your shop in 48 hours</p>
            </div>
            <div className="p-5">
              {!sidebarSubmitted ? (
                <form onSubmit={(e) => { e.preventDefault(); setSidebarSubmitted(true); }} className="space-y-3">
                  <input type="text" placeholder="Your Name" required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm outline-none focus:border-[#1B3A6B]" />
                  <input type="email" placeholder="Business Email" required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm outline-none focus:border-[#1B3A6B]" />
                  <input type="text" placeholder="Etsy Shop URL" required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm outline-none focus:border-[#1B3A6B]" />
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
