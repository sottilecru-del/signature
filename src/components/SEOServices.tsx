import React, { useState } from 'react';
import { 
  Search, 
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
  Phone
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

export default function SEOServices() {
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
          <span className="font-medium text-neutral-600">SEO Services</span>
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
              Trusted by Businesses in USA, UK & Australia
            </div>
            <h1 className="font-condensed text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              SEO Services That Get Your Business to <span className="text-orange-400">Page 1 of Google</span> in the USA, UK & Australia
            </h1>
            <p className="text-lg text-white/80 mb-8 max-w-2xl leading-relaxed">
              We deliver battle-tested search engine optimization that drives real organic traffic, qualified leads, and long-term rankings — not vanity metrics. No guesswork. No black-hat shortcuts. Just a proven process built for competitive international markets.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {['Technical SEO', 'On-Page Optimization', 'Link Building', 'Local SEO', 'E-commerce SEO', 'International SEO', 'Content Strategy', 'Core Web Vitals'].map((pill, i) => (
                <span key={i} className="bg-white/10 border border-white/20 text-white/80 text-[10px] px-3 py-1 rounded-full">
                  {pill}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { num: '200+', label: 'Keywords on Page 1' },
                { num: '63%', label: 'Avg Traffic Growth' },
                { num: '90 Days', label: 'To First Ranking' },
                { num: '4.9★', label: 'Client Rating' }
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
              <h3 className="text-white font-bold text-sm">Get Your Free SEO Audit</h3>
              <p className="text-white/80 text-[10px] uppercase tracking-wider">Delivered within 48 hours</p>
            </div>
            <div className="p-6">
              {!submitted ? (
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-3">
                  <div className="grid grid-cols-2 gap-2">
                    <input type="text" placeholder="First Name *" required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm outline-none focus:border-[#1B3A6B]" />
                    <input type="text" placeholder="Last Name *" required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm outline-none focus:border-[#1B3A6B]" />
                  </div>
                  <input type="email" placeholder="Business Email *" required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm outline-none focus:border-[#1B3A6B]" />
                  <input type="url" placeholder="Your Website URL *" required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm outline-none focus:border-[#1B3A6B]" />
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
                    <option>Service: SEO (Full Package)</option>
                    <option>Technical SEO Audit</option>
                    <option>Local SEO / GMB</option>
                    <option>E-commerce SEO</option>
                    <option>Link Building</option>
                    <option>SEO + Paid Ads Bundle</option>
                  </select>
                  <button type="submit" className="w-full bg-[#1B3A6B] text-white py-3 rounded font-bold text-sm hover:bg-[#152d55] transition-colors">
                    Send Free Audit Request →
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
                  <p className="text-green-700 text-xs">We will send your free audit within 48 hours.</p>
                </div>
              )}
              <div className="mt-4 flex justify-center gap-4 text-[10px] text-neutral-400 font-medium uppercase tracking-wider">
                <span className="flex items-center gap-1"><ShieldCheck size={12} /> Safe</span>
                <span className="flex items-center gap-1"><Check size={12} /> Free</span>
                <span className="flex items-center gap-1"><Clock size={12} /> 48hr Delivery</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-orange-50 border-b border-orange-100 py-3 px-4 md:px-8 overflow-hidden">
        <div className="max-w-screen-2xl mx-auto flex items-center gap-8">
          <span className="bg-orange-500 text-white text-[10px] font-bold px-2 py-0.5 rounded flex-shrink-0">WHY US</span>
          <div className="flex-1 overflow-hidden">
            <div className="flex gap-12 whitespace-nowrap animate-marquee">
              {[
                '200+ Keywords Ranked Page 1',
                'USA, UK & Australia Specialists',
                'No Black-Hat Tactics — Ever',
                'Transparent Monthly Reporting',
                'Dedicated Account Manager',
                'Results in 60–90 Days'
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
          {/* About This Service */}
          <section className="bg-white p-8 rounded-lg border border-neutral-200 shadow-sm">
            <div className="flex items-center gap-2 text-orange-500 text-[10px] font-bold uppercase tracking-widest mb-2">
              <Info size={14} />
              About This Service
            </div>
            <h2 className="font-condensed text-2xl font-bold text-[#1B3A6B] mb-6 border-l-4 border-orange-500 pl-4">
              What Are SEO Services and Why Does Your Business Need Them?
            </h2>
            <div className="prose prose-sm max-w-none text-neutral-600 space-y-4 leading-relaxed">
              <p>Search engine optimization is the process of making your website appear higher in Google search results when potential customers type in keywords related to your services. If your business is not appearing on page 1 for searches in the USA, UK, or Australia, you are invisible to the majority of buyers in those markets — because over 90% of searchers never go past page 1.</p>
              <p>At Rajput Signature, our SEO services are built specifically for international markets. We do not apply generic cookie-cutter strategies. Every campaign we build starts with deep research into your specific market, competitors, and buyer behavior — and ends with a system designed to get your website ranking for the keywords that actually bring in leads and revenue.</p>
              <p><strong>The difference between a business that is growing organically and one that is invisible on Google is usually not the quality of the product.</strong> It is the SEO strategy — or the lack of one. We fix that.</p>
            </div>
            
            <div className="mt-8 p-6 bg-orange-50 border border-orange-100 rounded-lg flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <p className="font-bold text-[#1B3A6B] mb-1">Not sure where your website stands right now?</p>
                <p className="text-xs text-neutral-500">Get a free technical SEO audit and keyword gap analysis — delivered within 48 hours</p>
              </div>
              <button className="bg-[#FF6B00] text-white px-6 py-2.5 rounded font-bold text-sm hover:bg-[#e05e00] transition-colors whitespace-nowrap">
                Get Free Audit →
              </button>
            </div>
          </section>

          {/* Keyword Strategy Card */}
          <section className="bg-white p-8 rounded-lg border border-neutral-200 shadow-sm">
            <div className="flex items-center gap-2 text-orange-500 text-[10px] font-bold uppercase tracking-widest mb-2">
              <Target size={14} />
              Keyword Research
            </div>
            <h2 className="font-condensed text-2xl font-bold text-[#1B3A6B] mb-6 border-l-4 border-orange-500 pl-4">
              Keyword Strategy: The Exact Terms Your Buyers Are Searching in USA, UK & Australia
            </h2>
            <p className="text-sm text-neutral-600 mb-8 leading-relaxed">Most businesses target keywords that are either too broad to rank for or too narrow to generate meaningful traffic. Our keyword research goes three levels deep — primary keywords that define your service, secondary variations that capture related searches, and long-tail buyer-intent phrases where competition is lower and conversion rates are higher.</p>

            <div className="flex flex-wrap gap-4 mb-8 text-[10px] font-bold uppercase tracking-wider text-neutral-400">
              <span className="flex items-center gap-2"><span className="w-2.5 h-2.5 bg-orange-500 rounded-sm"></span> Commercial Intent</span>
              <span className="flex items-center gap-2"><span className="w-2.5 h-2.5 bg-green-600 rounded-sm"></span> Transactional Intent</span>
              <span className="flex items-center gap-2"><span className="w-2.5 h-2.5 bg-[#1B3A6B] rounded-sm"></span> Informational Intent</span>
            </div>

            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-[#1B3A6B] text-white text-[10px] font-bold px-2 py-0.5 rounded">Primary & Secondary</span>
                  <span className="text-xs text-neutral-400 font-medium">High Volume</span>
                </div>
                <div className="grid md:grid-cols-3 gap-3">
                  {[
                    { kw: 'digital marketing agency USA', vol: '22,200/mo', diff: 'KD: 72' },
                    { kw: 'SEO services for small business', vol: '18,100/mo', diff: 'KD: 65' },
                    { kw: 'SEO agency UK', vol: '14,800/mo', diff: 'KD: 68' },
                    { kw: 'best SEO company Australia', vol: '9,900/mo', diff: 'KD: 58' },
                    { kw: 'hire SEO expert', vol: '8,100/mo', diff: 'KD: 55' },
                    { kw: 'digital marketing services', vol: '40,500/mo', diff: 'KD: 78' }
                  ].map((item, i) => (
                    <div key={i} className="bg-neutral-50 border-l-4 border-orange-500 p-3 rounded flex flex-col gap-1">
                      <span className="text-[11px] font-bold text-[#1B3A6B] leading-tight">{item.kw}</span>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-[9px] text-green-600 font-bold">{item.vol}</span>
                        <span className="text-[9px] text-neutral-400">{item.diff}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-green-600 text-white text-[10px] font-bold px-2 py-0.5 rounded">Long-Tail Buyer-Intent</span>
                  <span className="text-xs text-neutral-400 font-medium">Best for Fast Ranking</span>
                </div>
                <div className="grid md:grid-cols-3 gap-3">
                  {[
                    { kw: 'affordable SEO agency for USA businesses', vol: '1,300/mo', diff: 'KD: 24' },
                    { kw: 'SEO company for small business UK', vol: '1,900/mo', diff: 'KD: 31' },
                    { kw: 'local SEO services Australia', vol: '2,200/mo', diff: 'KD: 36' },
                    { kw: 'Google Ads management agency USA', vol: '1,600/mo', diff: 'KD: 29' },
                    { kw: 'e-commerce SEO services USA', vol: '2,400/mo', diff: 'KD: 38' },
                    { kw: 'technical SEO audit service', vol: '1,100/mo', diff: 'KD: 22' },
                    { kw: 'GMB ranking service for businesses', vol: '880/mo', diff: 'KD: 18' },
                    { kw: 'international SEO agency for Bangladesh', vol: '590/mo', diff: 'KD: 14' },
                    { kw: 'link building services for USA market', vol: '1,000/mo', diff: 'KD: 26' }
                  ].map((item, i) => (
                    <div key={i} className="bg-neutral-50 border-l-4 border-green-500 p-3 rounded flex flex-col gap-1">
                      <span className="text-[11px] font-bold text-[#1B3A6B] leading-tight">{item.kw}</span>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-[9px] text-green-600 font-bold">{item.vol}</span>
                        <span className="text-[9px] text-neutral-400">{item.diff}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-[#1B3A6B] text-white text-[10px] font-bold px-2 py-0.5 rounded">Informational / PAA Keywords</span>
                  <span className="text-xs text-neutral-400 font-medium">Authority Building</span>
                </div>
                <div className="grid md:grid-cols-3 gap-3">
                  {[
                    { kw: 'how long does SEO take to work', vol: '12,000/mo', diff: 'KD: 42' },
                    { kw: 'what is technical SEO', vol: '9,500/mo', diff: 'KD: 35' },
                    { kw: 'how to rank on Google in USA', vol: '5,400/mo', diff: 'KD: 28' },
                    { kw: 'what is GMB ranking', vol: '3,600/mo', diff: 'KD: 21' },
                    { kw: 'what does an SEO agency do', vol: '4,200/mo', diff: 'KD: 33' },
                    { kw: 'how to get more leads from Google', vol: '6,600/mo', diff: 'KD: 39' }
                  ].map((item, i) => (
                    <div key={i} className="bg-neutral-50 border-l-4 border-[#1B3A6B] p-3 rounded flex flex-col gap-1">
                      <span className="text-[11px] font-bold text-[#1B3A6B] leading-tight">{item.kw}</span>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-[9px] text-green-600 font-bold">{item.vol}</span>
                        <span className="text-[9px] text-neutral-400">{item.diff}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Complete SEO Services Grid */}
          <section className="bg-white p-8 rounded-lg border border-neutral-200 shadow-sm">
            <div className="flex items-center gap-2 text-orange-500 text-[10px] font-bold uppercase tracking-widest mb-2">
              <Zap size={14} />
              Our SEO Services
            </div>
            <h2 className="font-condensed text-2xl font-bold text-[#1B3A6B] mb-6 border-l-4 border-orange-500 pl-4">
              Complete SEO Services We Offer for Businesses in USA, UK & Australia
            </h2>
            <p className="text-sm text-neutral-600 mb-8">Every SEO engagement we take on covers all five pillars of modern search optimization. Cutting corners on any one of them means slower results and less stable rankings. We do not cut corners.</p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: <FileSearch size={24} />, title: 'Technical SEO Audit & Fixes', desc: 'We audit your site\'s crawlability, indexation, site speed, Core Web Vitals, mobile optimization, and structured data. Every issue is fixed.' },
                { icon: <Layout size={24} />, title: 'On-Page SEO Optimization', desc: 'We optimize title tags, meta descriptions, H1/H2 structure, content depth, keyword placement, and internal links for correct intent.' },
                { icon: <LinkIcon size={24} />, title: 'Authority Link Building', desc: 'We build high-quality backlinks from authoritative, relevant websites in your industry. No link farms, no spam — only real placements.' },
                { icon: <PenTool size={24} />, title: 'SEO Content Creation', desc: 'We produce keyword-optimized service pages, location pages, pillar content, and blog posts that rank and convert.' },
                { icon: <MapPin size={24} />, title: 'Local SEO & GMB Ranking', desc: 'We optimize your Google Business Profile, build citations, manage reviews, and create location pages for the local 3-pack.' },
                { icon: <Globe size={24} />, title: 'International SEO', desc: 'We implement hreflang tags, country-specific content strategies, and market-specific link building to rank across multiple countries.' }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-neutral-50 border border-neutral-100 rounded-lg border-t-4 border-t-[#1B3A6B] hover:border-t-orange-500 transition-all shadow-sm">
                  <div className="text-[#1B3A6B] mb-4">{item.icon}</div>
                  <h4 className="font-bold text-sm text-[#1B3A6B] mb-2">{item.title}</h4>
                  <p className="text-xs text-neutral-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Long Form Guide */}
          <section className="bg-white p-8 rounded-lg border border-neutral-200 shadow-sm">
            <div className="flex items-center gap-2 text-orange-500 text-[10px] font-bold uppercase tracking-widest mb-2">
              <BarChart3 size={14} />
              In-Depth Guide
            </div>
            <h2 className="font-condensed text-2xl font-bold text-[#1B3A6B] mb-8 border-l-4 border-orange-500 pl-4">
              How We Rank Businesses in Competitive Markets Like the USA, UK & Australia
            </h2>
            <div className="prose prose-sm max-w-none text-neutral-600 space-y-6 leading-relaxed">
              <p>Ranking on page 1 of Google in the USA is not the same challenge as ranking in a local Indian market. The competition is significantly higher. Most businesses competing for the same keywords in the US have been investing in SEO for years, have strong domain authority, and work with well-funded agencies. To beat them, your strategy needs to be smarter — not just bigger.</p>
              
              <h3 className="text-lg font-bold text-[#1B3A6B]">Step 1: Understanding Your Competitive Landscape</h3>
              <p>Before we touch a single page on your site, we spend time understanding who you are competing against and what it will take to outrank them. We analyse the top 10 results for each of your target keywords — their content depth, backlink profiles, domain authority, page speed, and the gaps they leave open. Those gaps are your entry points.</p>
              
              <h3 className="text-lg font-bold text-[#1B3A6B]">Technical SEO: The Foundation Everything Else Depends On</h3>
              <p>If Google cannot crawl and index your pages correctly, your content and links do not matter. Technical SEO problems are silent. They do not show up as obvious errors — they just quietly prevent you from ranking.</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Core Web Vitals</strong> — LCP, CLS, and FID scores that directly affect Google's assessment of your page experience</li>
                <li><strong>Site speed</strong> — Page load time on both desktop and mobile</li>
                <li><strong>Crawl budget management</strong> — Ensuring Google spends its crawl budget on your most important pages</li>
                <li><strong>Structured data and schema markup</strong> — Giving Google clear signals about your business</li>
              </ul>

              <h3 className="text-lg font-bold text-[#1B3A6B]">On-Page SEO: Making Every Page Earn Its Position</h3>
              <p>On-page SEO is about making each page on your site the best possible answer to a specific search query. We match every page's content, structure, and call to action to the intent behind the search term it is targeting.</p>
              
              <h3 className="text-lg font-bold text-[#1B3A6B]">Link Building: The Most Important and Most Misunderstood Part of SEO</h3>
              <p>We build links the right way: through relevant outreach, digital PR, guest content on authoritative websites in your industry, and resource link acquisition. For clients targeting the USA, we prioritize links from websites with real US-based traffic and authority.</p>
            </div>
          </section>

          {/* Process Card */}
          <section className="bg-white p-8 rounded-lg border border-neutral-200 shadow-sm">
            <div className="flex items-center gap-2 text-orange-500 text-[10px] font-bold uppercase tracking-widest mb-2">
              <MousePointerClick size={14} />
              Our SEO Process
            </div>
            <h2 className="font-condensed text-2xl font-bold text-[#1B3A6B] mb-8 border-l-4 border-orange-500 pl-4">
              How Our SEO Process Works: 5 Steps to Page 1
            </h2>
            
            <div className="space-y-6">
              {[
                { step: '01', title: 'Free SEO Audit & Competitive Analysis', desc: 'We start by analysing your current site\'s technical health, keyword rankings, backlink profile, and competitor landscape. You get a detailed report showing exactly where you stand.', tag: 'Delivered free within 48 hours' },
                { step: '02', title: 'Keyword Research & Content Strategy Map', desc: 'We research and map your complete keyword universe — primary terms, secondary variations, long-tail buyer-intent phrases, and location-specific keywords.', tag: 'Weeks 1–2' },
                { step: '03', title: 'Technical SEO & On-Page Optimization', desc: 'We fix every technical issue identified in the audit and optimize all your key pages for their target keywords including metadata and schema.', tag: 'Weeks 2–6' },
                { step: '04', title: 'Content Creation & Authority Link Building', desc: 'We produce keyword-optimized content and begin our link building outreach to earn authoritative backlinks from relevant, high-quality websites.', tag: 'Month 2 onwards' },
                { step: '05', title: 'Monitoring, Reporting & Scaling', desc: 'You get transparent monthly reports showing your keyword rankings, organic traffic growth, leads generated, and the exact work completed.', tag: 'Ongoing' }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 p-6 bg-neutral-50 border border-neutral-100 rounded-lg hover:border-[#1B3A6B] transition-colors group">
                  <div className="w-12 h-12 bg-[#1B3A6B] text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0 font-condensed">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1B3A6B] mb-1">{item.title}</h4>
                    <p className="text-sm text-neutral-600 mb-2 leading-relaxed">{item.desc}</p>
                    <span className="inline-block bg-orange-100 text-orange-700 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                      {item.tag}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Results Table Card */}
          <section className="bg-white p-8 rounded-lg border border-neutral-200 shadow-sm overflow-hidden">
            <div className="flex items-center gap-2 text-orange-500 text-[10px] font-bold uppercase tracking-widest mb-2">
              <BarChart3 size={14} />
              Results & Proof
            </div>
            <h2 className="font-condensed text-2xl font-bold text-[#1B3A6B] mb-8 border-l-4 border-orange-500 pl-4">
              What Our Clients Achieve With Our SEO Services
            </h2>
            
            <div className="overflow-x-auto mb-12">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#1B3A6B] text-white">
                    <th className="p-4 text-left font-bold">Client Type</th>
                    <th className="p-4 text-left font-bold">Market</th>
                    <th className="p-4 text-left font-bold">Before SEO</th>
                    <th className="p-4 text-left font-bold">After 6 Months</th>
                    <th className="p-4 text-left font-bold">Result</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {[
                    { type: 'E-commerce Brand', market: 'USA', before: 'Page 4 for main keyword', after: 'Position 2 on Page 1', result: '+218% organic traffic' },
                    { type: 'Service Business', market: 'UK', before: 'Zero page 1 rankings', after: '12 keywords on Page 1', result: '+167% organic leads' },
                    { type: 'SaaS Company', market: 'Australia', before: '200 monthly visits', after: '1,340 monthly visits', result: '+570% traffic growth' },
                    { type: 'Local Business', market: 'USA', before: 'Not in local 3-pack', after: 'Top 2 in Google Maps', result: '+89% calls from GMB' },
                    { type: 'B2B Agency', market: 'UK', before: 'DA 14, no link profile', after: 'DA 38, 80+ quality links', result: '+443% Page 1 keywords' }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-neutral-50 transition-colors">
                      <td className="p-4 font-bold text-[#1B3A6B]">{row.type}</td>
                      <td className="p-4">{row.market}</td>
                      <td className="p-4 text-neutral-400">{row.before}</td>
                      <td className="p-4 font-medium">{row.after}</td>
                      <td className="p-4 text-green-600 font-bold">{row.result}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { name: 'James Mitchell', loc: 'Texas, USA', text: 'We went from page 4 to position 2 for our main keyword in the USA within five months. Methodical, transparent, and they explained what they were doing at every step.', initials: 'JM' },
                { name: 'Sarah Bennett', loc: 'London, UK', text: 'Our site had serious technical SEO issues we did not even know about. Rajput Signature found them, fixed them, and within three months we went from 400 to 2,100 monthly organic visitors.', initials: 'SB' },
                { name: 'Raj Kumar', loc: 'Melbourne, Australia', text: 'We had tried two other agencies before and got nothing. These guys are different — they actually know what they are doing for Australian markets. We rank top 3 now.', initials: 'RK' },
                { name: 'Nathan Parker', loc: 'Sydney, Australia', text: 'The link building campaign they ran for us was legitimate and effective. No spam, no sketchy sites — real backlinks from real websites. Our domain authority went from 12 to 36.', initials: 'NP' }
              ].map((review, i) => (
                <div key={i} className="p-6 bg-neutral-50 rounded-lg border border-neutral-100 relative">
                  <div className="text-orange-500 text-xs mb-3 flex gap-1">
                    {[...Array(5)].map((_, j) => <Star key={j} size={12} fill="currentColor" />)}
                  </div>
                  <p className="text-xs text-neutral-500 italic mb-6 leading-relaxed">"{review.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#1B3A6B] text-white rounded-full flex items-center justify-center text-[10px] font-bold">{review.initials}</div>
                    <div>
                      <div className="text-[11px] font-bold text-[#1B3A6B]">{review.name}</div>
                      <div className="text-[9px] text-neutral-400">{review.loc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section id="packages-seo" className="bg-white p-8 rounded-lg border border-neutral-200 shadow-sm">
            <div className="flex items-center gap-2 text-orange-500 text-[10px] font-bold uppercase tracking-widest mb-2">
              <ShoppingCart size={14} />
              Pricing
            </div>
            <h2 className="font-condensed text-2xl font-bold text-[#1B3A6B] mb-6 border-l-4 border-orange-500 pl-4">
              SEO Service Packages & Pricing for USA, UK & Australia
            </h2>
            <p className="text-sm text-neutral-600 mb-10">All packages are month-to-month with no long-term lock-in contracts. Pricing is based on the competitiveness of your target market and the scope of work required.</p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { title: 'Starter SEO', price: '$499', features: ['10 target keywords', 'Full technical SEO audit', 'On-page optimization (5 pages)', 'GMB profile optimization', '2 blog posts per month', 'Monthly ranking report'], na: ['Link building campaign', 'Location pages', 'Paid ads management'] },
                { title: 'Growth SEO', price: '$1,299', featured: true, features: ['25 target keywords', 'Technical SEO + Core Web Vitals', 'On-page optimization (15 pages)', 'GMB ranking + citation building', '4 content pieces per month', 'Link building (8 links/month)', '2 location pages per quarter', 'Weekly ranking tracking'], na: ['Paid ads management'] },
                { title: 'Dominator SEO', price: '$2,499', features: ['50+ target keywords', 'Advanced technical SEO', 'Full site on-page optimization', 'GMB + full local SEO', '8+ content pieces per month', 'Link building (20+ links/month)', 'Location pages (all targets)', 'Daily rank monitoring', 'Google + Meta Ads bundle'] }
              ].map((pkg, i) => (
                <div key={i} className={`border-2 rounded-lg overflow-hidden flex flex-col ${pkg.featured ? 'border-orange-500 shadow-xl scale-105 z-10' : 'border-neutral-100'}`}>
                  {pkg.featured && <div className="bg-orange-500 text-white text-[10px] font-bold text-center py-1 uppercase tracking-widest">Most Popular</div>}
                  <div className="bg-neutral-50 p-6 text-center border-b border-neutral-100">
                    <h3 className="font-condensed text-lg font-bold text-[#1B3A6B] mb-1">{pkg.title}</h3>
                    <div className="text-2xl font-bold text-orange-500">{pkg.price} <span className="text-xs text-neutral-400 font-normal">/ month</span></div>
                  </div>
                  <div className="p-5 flex-1 bg-white">
                    <ul className="space-y-2 mb-8">
                      {pkg.features.map((f, j) => (
                        <li key={j} className="flex gap-2 text-[11px] text-neutral-600">
                          <Check size={14} className="text-green-600 flex-shrink-0" /> {f}
                        </li>
                      ))}
                      {pkg.na?.map((f, j) => (
                        <li key={j} className="flex gap-2 text-[11px] text-neutral-300 line-through">
                          <span className="flex-shrink-0 w-[14px] text-center">—</span> {f}
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

            <h3 className="text-lg font-bold text-[#1B3A6B] mb-6">Why Rajput Signature vs. Other SEO Agencies</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-[11px] text-left border-collapse">
                <thead>
                  <tr className="bg-[#1B3A6B] text-white">
                    <th className="p-3 border border-white/10">Factor</th>
                    <th className="p-3 border border-white/10">Rajput Signature</th>
                    <th className="p-3 border border-white/10">Generic Agency</th>
                    <th className="p-3 border border-white/10">Freelancer</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {[
                    { f: 'International Market Expertise', us: 'USA, UK, AUS, BD Focused', gen: 'Generic', free: 'Varies' },
                    { f: 'Technical SEO Included', us: 'Full Audit + Fixes', gen: 'Audit Only', free: 'Limited' },
                    { f: 'Link Building Quality', us: 'Manual, Real Outreach', gen: 'Mixed / PBN Risk', free: 'Varies' },
                    { f: 'Reporting Transparency', us: 'Weekly + Monthly', gen: 'Monthly Only', free: 'Irregular' },
                    { f: 'Contract Requirement', us: 'Month-to-Month', gen: '6–12 Month Lock-in', free: 'Varies' }
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}>
                      <td className="p-3 border border-neutral-200 font-bold text-[#1B3A6B]">{row.f}</td>
                      <td className="p-3 border border-neutral-200 text-green-700 font-bold">{row.us}</td>
                      <td className="p-3 border border-neutral-200 text-neutral-500">{row.gen}</td>
                      <td className="p-3 border border-neutral-200 text-neutral-500">{row.free}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq-seo" className="bg-white p-8 rounded-lg border border-neutral-200 shadow-sm">
            <div className="flex items-center gap-2 text-orange-500 text-[10px] font-bold uppercase tracking-widest mb-2">
              <MessageCircle size={14} />
              FAQ
            </div>
            <h2 className="font-condensed text-2xl font-bold text-[#1B3A6B] mb-8 border-l-4 border-orange-500 pl-4">
              Frequently Asked Questions About SEO Services
            </h2>
            <div className="space-y-4">
              <FAQItem 
                question="How long does SEO take to work for USA markets?"
                answer="For USA markets, most clients start seeing keyword movement in 60 to 90 days. Meaningful organic traffic growth typically begins between months 4 and 6, depending on the competition level and starting domain authority."
              />
              <FAQItem 
                question="What is included in your SEO services?"
                answer="Our SEO services include full technical SEO audits, on-page optimization, keyword research and strategy, content creation, authority link building, local SEO and GMB optimization, Core Web Vitals improvements, and monthly performance reporting."
              />
              <FAQItem 
                question="How much do your SEO services cost?"
                answer="Our SEO packages start at $499 per month for small businesses and go up to $2,499 per month for competitive international campaigns. We offer custom pricing for enterprise clients and specific market targeting."
              />
              <FAQItem 
                question="Do you do SEO for businesses in the UK and Australia?"
                answer="Yes — the UK and Australia are two of our primary markets. We specialize in building SEO campaigns for these markets specifically, which means our keyword research, content creation, and link building are all tailored to the search behavior, competition level, and geographic signals relevant to UK and Australian audiences."
              />
              <FAQItem 
                question="What is technical SEO and why does it matter?"
                answer="Technical SEO refers to the backend optimizations that help search engines crawl, understand, and rank your website. This includes site speed, mobile optimization, structured data, crawlability, URL structure, and Core Web Vitals. Without a solid technical foundation, your content and backlinks cannot do their job effectively."
              />
              <FAQItem 
                question="What is the difference between local SEO and international SEO?"
                answer="Local SEO focuses on ranking your business for searches within a specific geographic area. International SEO targets multiple countries simultaneously using hreflang tags, country-specific content strategies, and building domain authority within each target market."
              />
              <FAQItem 
                question="Can you guarantee Page 1 rankings on Google?"
                answer="No ethical SEO agency can guarantee specific rankings, because Google's algorithm changes frequently. What we can guarantee is a proven, data-driven process, complete transparency, and a track record of achieving Page 1 rankings for clients in competitive markets."
              />
              <FAQItem 
                question="What is the difference between on-page and off-page SEO?"
                answer="On-page SEO covers everything you do on your website itself — content, tags, speed, etc. Off-page SEO refers to building your website's authority through external signals, primarily backlinks from other reputable websites."
              />
            </div>
          </section>

          {/* Final CTA Section */}
          <section id="contact-seo-final" className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg border-2 border-[#1B3A6B] shadow-lg">
            <div className="flex items-center gap-2 text-orange-500 text-[10px] font-bold uppercase tracking-widest mb-2">
              <Zap size={14} />
              Get Started
            </div>
            <h2 className="font-condensed text-2xl font-bold text-[#1B3A6B] mb-6">Ready to Rank Higher and Get More Leads? Start with a Free SEO Audit</h2>
            <p className="text-sm text-neutral-600 mb-8 leading-relaxed">We will analyse your website, your current keyword rankings, your backlink profile, and your top competitors — and send you a detailed custom report showing exactly where your biggest opportunities are. No sales pressure. No generic advice.</p>

            <div className="grid md:grid-cols-2 gap-12">
              {!mainFormSubmitted ? (
                <form onSubmit={(e) => { e.preventDefault(); setMainFormSubmitted(true); }} className="space-y-3">
                  <div className="grid grid-cols-2 gap-2">
                    <input type="text" placeholder="First Name *" required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm outline-none focus:border-[#1B3A6B] bg-white" />
                    <input type="text" placeholder="Last Name *" required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm outline-none focus:border-[#1B3A6B] bg-white" />
                  </div>
                  <input type="email" placeholder="Business Email *" required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm outline-none focus:border-[#1B3A6B] bg-white" />
                  <input type="tel" placeholder="Phone / WhatsApp" className="w-full border border-neutral-200 rounded px-3 py-2 text-sm outline-none focus:border-[#1B3A6B] bg-white" />
                  <input type="url" placeholder="Website URL *" required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm outline-none focus:border-[#1B3A6B] bg-white" />
                  <select required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm focus:border-[#1B3A6B] outline-none bg-white">
                    <option value="">Select Your Country *</option>
                    <option>United States</option><option>United Kingdom</option><option>Australia</option><option>Bangladesh</option>
                  </select>
                  <select className="w-full border border-neutral-200 rounded px-3 py-2 text-sm focus:border-[#1B3A6B] outline-none bg-white">
                    <option>SEO Services</option><option>Technical SEO Audit</option><option>Local SEO / GMB</option><option>Link Building</option>
                  </select>
                  <textarea placeholder="Tell us your main challenge..." className="w-full border border-neutral-200 rounded px-3 py-2 text-sm outline-none focus:border-[#1B3A6B] bg-white min-height-[80px]"></textarea>
                  <button type="submit" className="w-full bg-orange-500 text-white py-3 rounded font-bold text-sm hover:bg-orange-600 transition-colors shadow-md">
                    Send My Free SEO Audit Request →
                  </button>
                </form>
              ) : (
                <div className="bg-green-50 border border-green-200 rounded p-8 text-center flex flex-col items-center justify-center">
                  <Check className="text-green-500 mb-4" size={48} />
                  <h4 className="text-green-800 font-bold text-lg mb-2">Audit Request Sent!</h4>
                  <p className="text-green-700 text-sm">We will analyze your site and reply within 48 hours.</p>
                </div>
              )}

              <div className="space-y-6">
                <div className="bg-[#f0f4ff] border border-[#d0daf0] rounded-lg p-6">
                  <h4 className="font-bold text-sm text-[#1B3A6B] mb-4">What You Get in Your Free Audit</h4>
                  <ul className="space-y-3">
                    {[
                      'Technical SEO health score with prioritized fixes',
                      'Keyword gap analysis vs your top 3 competitors',
                      'Backlink profile review and authority assessment',
                      'On-page SEO review of your top 5 pages',
                      'Google Business Profile score (if applicable)',
                      'Custom 90-day SEO roadmap for your market',
                      '1-hour strategy call to walk through findings'
                    ].map((item, i) => (
                      <li key={i} className="flex gap-2 text-xs text-neutral-600 leading-relaxed">
                        <Check size={14} className="text-green-600 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-[#1B3A6B] to-[#0f2347] p-6 rounded-lg text-center text-white">
                  <h4 className="font-bold text-sm mb-2">Prefer to talk directly?</h4>
                  <p className="text-[10px] text-white/70 mb-4">Send a message on WhatsApp and get a response within a few hours</p>
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
              <h3 className="font-bold text-sm">Get Free SEO Audit</h3>
              <p className="text-[10px] text-white/70 uppercase tracking-widest">Custom report in 48 hours</p>
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
                    <label className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Website</label>
                    <input type="url" placeholder="https://yourbusiness.com" required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm outline-none focus:border-[#1B3A6B]" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Country</label>
                    <select required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm focus:border-[#1B3A6B] outline-none bg-white">
                      <option value="">Select country</option>
                      <option>United States</option><option>United Kingdom</option><option>Australia</option><option>Bangladesh</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Budget</label>
                    <select className="w-full border border-neutral-200 rounded px-3 py-2 text-sm outline-none focus:border-[#1B3A6B] bg-white">
                      <option>Under $500/mo</option>
                      <option>$500–$1,500/mo</option>
                      <option>$1,500–$3,000/mo</option>
                      <option>$3,000+/mo</option>
                    </select>
                  </div>
                  <button type="submit" className="w-full bg-[#FF6B00] text-white py-3 rounded font-bold text-sm hover:bg-[#e05e00] transition-colors shadow-lg">
                    Send Free Audit →
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
                { label: 'What Are SEO Services?', id: '#faq-seo' },
                { label: 'Keyword Strategy', id: '#faq-seo' },
                { label: 'Our SEO Services', id: '#faq-seo' },
                { label: 'How We Rank Businesses', id: '#faq-seo' },
                { label: 'Our Process', id: '#faq-seo' },
                { label: 'Results & Proof', id: '#packages-seo' },
                { label: 'Packages & Pricing', id: '#packages-seo' },
                { label: 'FAQ', id: '#faq-seo-full' },
                { label: 'Free SEO Audit', id: '#contact-seo-final' }
              ].map((link, i) => (
                <li key={i}>
                  <a href={link.id} className="text-xs text-neutral-600 hover:text-[#FF6B00] flex items-center gap-2 transition-colors">
                    <span className="text-orange-500">→</span> {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Track Record Stats */}
          <div className="card p-5">
            <h4 className="font-bold text-[#1B3A6B] text-xs uppercase tracking-widest mb-4">Our SEO Track Record</h4>
            <div className="grid grid-cols-2 gap-3">
              {[
                { num: '200+', label: 'Keywords on Page 1' },
                { num: '63%', label: 'Avg Traffic Growth' },
                { num: '90 Days', label: 'First Ranking' },
                { num: '4.9★', label: 'Client Rating' }
              ].map((stat, i) => (
                <div key={i} className="bg-neutral-50 p-3 rounded text-center border border-neutral-100">
                  <span className="block text-lg font-bold text-[#1B3A6B] font-condensed">{stat.num}</span>
                  <span className="text-[8px] text-neutral-500 uppercase font-bold leading-tight">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Related Services */}
          <div className="card p-5">
            <h4 className="font-bold text-[#1B3A6B] text-xs uppercase tracking-widest mb-4">Related Services</h4>
            <ul className="space-y-2">
              {['Paid Media Advertising', 'AI CRM Solutions', 'GMB Ranking Optimization', 'Product Photography', 'AI Marketing Tools', 'SEO + Ads Bundle'].map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-xs text-neutral-600 hover:text-[#FF6B00] flex items-center gap-2 transition-colors">
                    <span className="text-orange-500">→</span> {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mini CTA */}
          <div className="bg-gradient-to-br from-[#1B3A6B] to-[#0f2347] p-6 rounded-lg text-center text-white shadow-lg">
            <h4 className="font-bold text-sm mb-2">Not Sure Which Package?</h4>
            <p className="text-[10px] text-white/70 mb-4 leading-relaxed">Tell us your goals and budget and we will recommend the right fit for your market</p>
            <button className="w-full bg-[#FF6B00] text-white py-2.5 rounded font-bold text-xs hover:bg-[#e05e00] transition-colors shadow-md">
              Talk to an Expert →
            </button>
          </div>
        </aside>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
