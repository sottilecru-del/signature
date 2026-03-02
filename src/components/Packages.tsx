import React, { useState } from 'react';
import { 
  Check, 
  Globe, 
  Zap, 
  ShieldCheck, 
  Clock, 
  MessageCircle, 
  BarChart3, 
  Target, 
  Info, 
  Rocket,
  ArrowRight,
  MapPin,
  AlertCircle,
  TrendingUp,
  MousePointerClick,
  Layout,
  Star,
  Phone,
  Search,
  Mail,
  Calendar,
  Settings,
  ShoppingCart,
  Plus,
  Minus,
  HelpCircle
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

export default function Packages() {
  const [submitted, setSubmitted] = useState(false);
  const [mainFormSubmitted, setMainFormSubmitted] = useState(false);

  return (
    <div className="bg-neutral-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-neutral-200 py-2 px-4 md:px-8">
        <div className="max-w-screen-2xl mx-auto text-[10px] md:text-xs text-neutral-400 flex items-center gap-2">
          <a href="#" className="text-[#1B3A6B] hover:underline">Home</a>
          <span>›</span>
          <span className="font-medium text-neutral-600">Packages & Pricing</span>
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
              Serving USA · UK · Australia · Canada · Bangladesh
            </div>
            <h1 className="font-condensed text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Transparent Digital Marketing Packages Built for Businesses in USA, UK & Australia — <span className="text-orange-400">No Hidden Fees</span>
            </h1>
            <p className="text-lg text-white/80 mb-8 max-w-2xl leading-relaxed">
              Forward-thinking agencies publish tiered pricing with clear deliverables — and that is exactly what we do. Every package below shows you exactly what you get, what it costs, and what result it is designed to deliver. No mystery retainers. No surprise invoices. No guessing.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#FF6B00] text-white px-8 py-3 rounded font-bold text-sm hover:bg-[#e05e00] transition-colors shadow-lg flex items-center gap-2">
                <Rocket size={18} /> Get a Free Strategy Call
              </button>
              <a href="#packages-list" className="bg-white/10 border border-white/20 text-white px-8 py-3 rounded font-bold text-sm hover:bg-white/20 transition-colors flex items-center gap-2">
                Jump to the Right Package <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-lg shadow-2xl overflow-hidden"
          >
            <div className="bg-[#FF6B00] py-3 px-6 text-center">
              <h3 className="text-white font-bold text-sm">Get a Package Recommendation</h3>
              <p className="text-white/80 text-[10px] uppercase tracking-wider">Response within 4 business hours</p>
            </div>
            <div className="p-6">
              {!submitted ? (
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-3">
                  <div className="grid grid-cols-2 gap-2">
                    <input type="text" placeholder="First Name *" required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm outline-none focus:border-[#1B3A6B]" />
                    <input type="text" placeholder="Last Name *" required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm outline-none focus:border-[#1B3A6B]" />
                  </div>
                  <input type="email" placeholder="Business Email *" required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm outline-none focus:border-[#1B3A6B]" />
                  <select required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm focus:border-[#1B3A6B] outline-none bg-white">
                    <option value="">Target Country *</option>
                    <option>USA</option><option>UK</option><option>Australia</option><option>Canada</option><option>Bangladesh</option><option>Other</option>
                  </select>
                  <button type="submit" className="w-full bg-[#1B3A6B] text-white py-3 rounded font-bold text-sm hover:bg-[#152d55] transition-colors flex items-center justify-center gap-2">
                    <Rocket size={16} /> Get My Free Audit
                  </button>
                  <a href="https://wa.me/yourphonenumber" target="_blank" className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white py-2.5 rounded font-bold text-xs hover:bg-[#1fb855] transition-colors">
                    <MessageCircle size={16} />
                    WhatsApp Chat
                  </a>
                </form>
              ) : (
                <div className="bg-green-50 border border-green-200 rounded p-6 text-center">
                  <Check className="mx-auto text-green-500 mb-2" size={32} />
                  <h4 className="text-green-800 font-bold text-sm mb-1">Done!</h4>
                  <p className="text-green-700 text-xs">We will contact you within 4 hours.</p>
                </div>
              )}
              <div className="mt-4 flex justify-center gap-4 text-[10px] text-neutral-400 font-medium uppercase tracking-wider">
                <span className="flex items-center gap-1"><ShieldCheck size={12} /> Secure</span>
                <span className="flex items-center gap-1"><Check size={12} /> No Spam</span>
                <span className="flex items-center gap-1"><Clock size={12} /> 4hr Response</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-orange-50 border-b border-orange-100 py-3 px-4 md:px-8 overflow-hidden">
        <div className="max-w-screen-2xl mx-auto flex items-center gap-8">
          <span className="bg-orange-500 text-white text-[10px] font-bold px-2 py-0.5 rounded flex-shrink-0">BENEFITS</span>
          <div className="flex-1 overflow-hidden">
            <div className="flex gap-12 whitespace-nowrap animate-marquee">
              {[
                'Transparent Pricing',
                'No Long-Term Contracts',
                'Month-to-Month Flexibility',
                'USA, UK & Australia Specialists',
                'No Hidden Setup Fees',
                'Dedicated Account Manager'
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
        <div className="space-y-12" id="packages-list">
          {/* Intro Section */}
          <section className="bg-white p-8 rounded-lg border border-neutral-200 shadow-sm">
            <div className="flex items-center gap-2 text-orange-500 text-[10px] font-bold uppercase tracking-widest mb-2">
              <Info size={14} />
              Transparency First
            </div>
            <h2 className="font-condensed text-2xl font-bold text-[#1B3A6B] mb-6 border-l-4 border-orange-500 pl-4">
              Why We Publish Our Prices When Most Agencies Hide Theirs
            </h2>
            <div className="prose prose-sm max-w-none text-neutral-600 space-y-4 leading-relaxed">
              <p>Most digital marketing agencies keep pricing off their website because they want to control the conversation before you know what things cost. We disagree with that approach.</p>
              <p>Transparent pricing attracts qualified leads who can self-qualify, builds trust by signalling confidence, saves sales time through fewer qualification calls, and makes comparison easier for you as the buyer.</p>
              <p>So here is everything. Every package. Every deliverable. Every price point — structured around the real cost of delivering results for businesses in USA, UK, and Australian markets in 2026.</p>
              <p className="bg-neutral-50 p-4 rounded border-l-4 border-[#1B3A6B]"><strong>Note:</strong> The sticker price is not always the total cost. Setup and onboarding fees of $500–$5,000 are common in the industry — and we are transparent about these too. Where a one-time setup fee applies, it is clearly stated alongside the monthly price.</p>
            </div>
          </section>

          {/* How Our Packages Work */}
          <section className="bg-white p-8 rounded-lg border border-neutral-200 shadow-sm">
            <div className="flex items-center gap-2 text-orange-500 text-[10px] font-bold uppercase tracking-widest mb-2">
              <Settings size={14} />
              Structure
            </div>
            <h2 className="font-condensed text-2xl font-bold text-[#1B3A6B] mb-6 border-l-4 border-orange-500 pl-4">
              Three Ways to Work With Us
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Option 1 — Single Service',
                  desc: 'Choose one specific service — Google Ads, SEO, GMB ranking, AI CRM, product photography, or any other. Start focused. Scale when ready.'
                },
                {
                  title: 'Option 2 — Growth Bundles',
                  desc: 'Two or more services combined into a single monthly package at a bundle discount of 15–20%. Best for coordinated programmes.'
                },
                {
                  title: 'Option 3 — Full-Service',
                  desc: 'A dedicated team across every channel managed together as a single integrated system. Agency-level execution at scale.'
                }
              ].map((opt, i) => (
                <div key={i} className="p-4 bg-neutral-50 rounded border border-neutral-100">
                  <h3 className="font-bold text-[#1B3A6B] text-sm mb-2">{opt.title}</h3>
                  <p className="text-xs text-neutral-500 leading-relaxed">{opt.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 1: Single Service Packages */}
          <section>
            <div className="flex items-center gap-2 text-orange-500 text-[10px] font-bold uppercase tracking-widest mb-2">
              <BarChart3 size={14} />
              Section 1
            </div>
            <h2 className="font-condensed text-3xl font-bold text-[#1B3A6B] mb-2">
              Single Service Packages — Start With One, Scale From There
            </h2>
            <p className="text-sm text-neutral-500 mb-8">All prices are monthly management fees unless stated. Setup fees listed separately where applicable.</p>

            {/* Paid Advertising */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-[#1B3A6B] mb-4 flex items-center gap-2">
                <MousePointerClick className="text-orange-500" size={20} /> Paid Advertising Packages
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse bg-white rounded-lg overflow-hidden shadow-sm border border-neutral-200">
                  <thead className="bg-[#1B3A6B] text-white">
                    <tr>
                      <th className="p-4 text-left">Package</th>
                      <th className="p-4 text-left">Ad Spend Covered</th>
                      <th className="p-4 text-left">Management Fee</th>
                      <th className="p-4 text-left">Setup Fee</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-100">
                    <tr>
                      <td className="p-4 font-bold">Starter</td>
                      <td className="p-4">Up to $3,000/month</td>
                      <td className="p-4">$499/month</td>
                      <td className="p-4">$199 one-time</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold">Growth</td>
                      <td className="p-4">Up to $10,000/month</td>
                      <td className="p-4">$999/month</td>
                      <td className="p-4">$299 one-time</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold">Scale</td>
                      <td className="p-4">Unlimited</td>
                      <td className="p-4">$1,999/month</td>
                      <td className="p-4">$499 one-time</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-white border border-neutral-200 rounded text-xs">
                  <p className="font-bold text-[#1B3A6B] mb-2">Starter includes:</p>
                  <ul className="space-y-1 text-neutral-500">
                    <li>• One platform (Google or Meta)</li>
                    <li>• Campaign setup & research</li>
                    <li>• Ad copy creation</li>
                    <li>• Conversion tracking</li>
                    <li>• Monthly performance report</li>
                  </ul>
                </div>
                <div className="p-4 bg-white border border-neutral-200 rounded text-xs">
                  <p className="font-bold text-[#1B3A6B] mb-2">Growth includes:</p>
                  <ul className="space-y-1 text-neutral-500">
                    <li>• Two platforms (Google + Meta/LI)</li>
                    <li>• Full campaign architecture</li>
                    <li>• A/B testing creatives</li>
                    <li>• Weekly performance report</li>
                    <li>• Dedicated account manager</li>
                  </ul>
                </div>
                <div className="p-4 bg-white border border-neutral-200 rounded text-xs">
                  <p className="font-bold text-[#1B3A6B] mb-2">Scale includes:</p>
                  <ul className="space-y-1 text-neutral-500">
                    <li>• All platforms simultaneously</li>
                    <li>• Full creative production briefs</li>
                    <li>• Daily reporting</li>
                    <li>• Competitive intelligence</li>
                    <li>• Weekly strategy calls</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* SEO Packages */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-[#1B3A6B] mb-4 flex items-center gap-2">
                <Search className="text-orange-500" size={20} /> SEO Packages
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse bg-white rounded-lg overflow-hidden shadow-sm border border-neutral-200">
                  <thead className="bg-[#1B3A6B] text-white">
                    <tr>
                      <th className="p-4 text-left">Package</th>
                      <th className="p-4 text-left">Pages Optimised</th>
                      <th className="p-4 text-left">Backlinks</th>
                      <th className="p-4 text-left">Blog Posts</th>
                      <th className="p-4 text-left">Fee</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-100">
                    <tr>
                      <td className="p-4 font-bold">Starter SEO</td>
                      <td className="p-4">Up to 10 pages</td>
                      <td className="p-4">0</td>
                      <td className="p-4">1</td>
                      <td className="p-4">$599/month</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold">Growth SEO</td>
                      <td className="p-4">Up to 30 pages</td>
                      <td className="p-4">5/month</td>
                      <td className="p-4">4</td>
                      <td className="p-4">$1,199/month</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold">Scale SEO</td>
                      <td className="p-4">Unlimited</td>
                      <td className="p-4">15+/month</td>
                      <td className="p-4">8</td>
                      <td className="p-4">$2,499/month</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 p-4 bg-orange-50 border border-orange-100 rounded text-xs text-neutral-600">
                <p><strong>All SEO plans include:</strong> Technical SEO audit, keyword research, on-page optimization, schema markup, Google Search Console setup, monthly rank tracking, and a dedicated SEO strategist. <strong>No setup fee. Minimum 3-month commitment applies.</strong></p>
              </div>
            </div>

            {/* GMB Ranking */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-[#1B3A6B] mb-4 flex items-center gap-2">
                <MapPin className="text-orange-500" size={20} /> GMB Ranking Packages
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse bg-white rounded-lg overflow-hidden shadow-sm border border-neutral-200">
                  <thead className="bg-[#1B3A6B] text-white">
                    <tr>
                      <th className="p-4 text-left">Package</th>
                      <th className="p-4 text-left">Locations</th>
                      <th className="p-4 text-left">Citations</th>
                      <th className="p-4 text-left">Google Posts</th>
                      <th className="p-4 text-left">Fee</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-100">
                    <tr>
                      <td className="p-4 font-bold">Starter GMB</td>
                      <td className="p-4">1 location</td>
                      <td className="p-4">Up to 20</td>
                      <td className="p-4">4/month</td>
                      <td className="p-4">$299/month</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold">Growth GMB</td>
                      <td className="p-4">Up to 3 locations</td>
                      <td className="p-4">50+ directories</td>
                      <td className="p-4">Daily</td>
                      <td className="p-4">$599/month</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold">Scale GMB</td>
                      <td className="p-4">Multi-location</td>
                      <td className="p-4">Unlimited</td>
                      <td className="p-4">Daily + Q&A</td>
                      <td className="p-4">$999/month</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* AI CRM Packages */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-[#1B3A6B] mb-4 flex items-center gap-2">
                <Layout className="text-orange-500" size={20} /> AI CRM Setup & Automation
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse bg-white rounded-lg overflow-hidden shadow-sm border border-neutral-200">
                  <thead className="bg-[#1B3A6B] text-white">
                    <tr>
                      <th className="p-4 text-left">Package</th>
                      <th className="p-4 text-left">Setup Fee</th>
                      <th className="p-4 text-left">Monthly Fee</th>
                      <th className="p-4 text-left">Platform</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-100">
                    <tr>
                      <td className="p-4 font-bold">Starter CRM</td>
                      <td className="p-4">$399</td>
                      <td className="p-4">$149/month</td>
                      <td className="p-4">GHL or Zoho</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold">Growth CRM</td>
                      <td className="p-4">$899</td>
                      <td className="p-4">$299/month</td>
                      <td className="p-4">Any platform</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold">Scale CRM</td>
                      <td className="p-4">$1,999</td>
                      <td className="p-4">$599/month</td>
                      <td className="p-4">All + Custom</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Photography */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-[#1B3A6B] mb-4 flex items-center gap-2">
                <ShoppingCart className="text-orange-500" size={20} /> Product Photography
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse bg-white rounded-lg overflow-hidden shadow-sm border border-neutral-200">
                  <thead className="bg-[#1B3A6B] text-white">
                    <tr>
                      <th className="p-4 text-left">Package</th>
                      <th className="p-4 text-left">Products</th>
                      <th className="p-4 text-left">Styles</th>
                      <th className="p-4 text-left">Price</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-100">
                    <tr>
                      <td className="p-4 font-bold">Starter</td>
                      <td className="p-4">Up to 10</td>
                      <td className="p-4">White background</td>
                      <td className="p-4">$249 one-time</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold">Growth</td>
                      <td className="p-4">Up to 30</td>
                      <td className="p-4">2 styles</td>
                      <td className="p-4">$549 one-time</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold">Brand</td>
                      <td className="p-4">Up to 60</td>
                      <td className="p-4">All styles + Info</td>
                      <td className="p-4">$1,199 one-time</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* AI Tools Packages */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-[#1B3A6B] mb-4 flex items-center gap-2">
                <Zap className="text-orange-500" size={20} /> AI Tools Setup & Integration
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse bg-white rounded-lg overflow-hidden shadow-sm border border-neutral-200">
                  <thead className="bg-[#1B3A6B] text-white">
                    <tr>
                      <th className="p-4 text-left">Package</th>
                      <th className="p-4 text-left">Setup Fee</th>
                      <th className="p-4 text-left">Monthly Fee</th>
                      <th className="p-4 text-left">Tools Included</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-100">
                    <tr>
                      <td className="p-4 font-bold">Starter AI</td>
                      <td className="p-4">$349</td>
                      <td className="p-4">$149/month</td>
                      <td className="p-4">Up to 3 tools</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold">Growth AI</td>
                      <td className="p-4">$799</td>
                      <td className="p-4">$349/month</td>
                      <td className="p-4">Up to 8 tools</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold">Scale AI</td>
                      <td className="p-4">$1,799</td>
                      <td className="p-4">$699/month</td>
                      <td className="p-4">Unlimited tools</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* E-commerce Marketplace */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-[#1B3A6B] mb-4 flex items-center gap-2">
                <ShoppingCart className="text-orange-500" size={20} /> E-Commerce Marketplace Packages
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-white border border-neutral-200 rounded">
                  <h4 className="font-bold text-[#1B3A6B] text-sm mb-2">Amazon Optimization</h4>
                  <ul className="text-[10px] text-neutral-500 space-y-1">
                    <li>• Starter: 1 listing - $349</li>
                    <li>• Growth: 1 listing + A+ - $699</li>
                    <li>• Catalog: 10 listings - $1,499</li>
                  </ul>
                </div>
                <div className="p-4 bg-white border border-neutral-200 rounded">
                  <h4 className="font-bold text-[#1B3A6B] text-sm mb-2">Etsy SEO</h4>
                  <ul className="text-[10px] text-neutral-500 space-y-1">
                    <li>• Starter: 10 listings - $199</li>
                    <li>• Growth: 50 listings - $449</li>
                    <li>• Management: $299/month</li>
                  </ul>
                </div>
                <div className="p-4 bg-white border border-neutral-200 rounded">
                  <h4 className="font-bold text-[#1B3A6B] text-sm mb-2">Shopify SEO</h4>
                  <p className="text-[10px] text-neutral-500">Included in all standard SEO packages with Shopify-specific optimization.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Growth Bundles */}
          <section className="space-y-8">
            <div className="flex items-center gap-2 text-orange-500 text-[10px] font-bold uppercase tracking-widest mb-2">
              <TrendingUp size={14} />
              Section 2
            </div>
            <h2 className="font-condensed text-3xl font-bold text-[#1B3A6B] mb-2">
              Growth Bundles — Save 15–20%
            </h2>
            <p className="text-sm text-neutral-500">Bundling services ensures every channel feeds every other channel for maximum ROI.</p>

            <div className="space-y-6">
              {[
                {
                  title: 'Bundle 1: Local Business Growth',
                  for: 'Dental clinics, law firms, home services, real estate.',
                  includes: ['GMB Ranking — Growth Plan', 'Google Ads — Growth Plan', 'AI CRM Setup — Growth Plan'],
                  price: '$1,499/month + $699 setup',
                  save: '$398/month — over $4,700 per year'
                },
                {
                  title: 'Bundle 2: E-Commerce Accelerator',
                  for: 'Shopify, Amazon, and multi-channel brands.',
                  includes: ['SEO — Growth Plan', 'Google Ads — Growth Plan', 'Product Photography — Growth Plan'],
                  price: '$2,199/month',
                  save: '$548 in month 1, $200/month ongoing'
                },
                {
                  title: 'Bundle 3: Lead Generation Engine',
                  for: 'Agencies, consultants, SaaS, B2B firms.',
                  includes: ['Paid Media Ads — Growth Plan', 'SEO — Growth Plan', 'AI CRM — Growth Plan', 'AI Tools — Starter Plan'],
                  price: '$2,099/month + $999 setup',
                  save: '$547/month — over $6,500 per year'
                },
                {
                  title: 'Bundle 4: Brand Builder',
                  for: 'New and growing brands building visibility.',
                  includes: ['SEO — Starter Plan', 'GMB Ranking — Starter Plan', 'Social Media Management (3 posts/wk)', 'AI Tools — Starter Plan'],
                  price: '$1,199/month + $349 setup',
                  save: '$347/month — over $4,100 per year'
                },
                {
                  title: 'Bundle 5: Amazon Seller Complete',
                  for: 'Amazon FBA sellers wanting optimized listings.',
                  includes: ['Amazon Listing Optimization — Growth Plan', 'Product Photography — Growth Plan', 'Google Ads — Starter Plan', 'AI CRM — Starter Plan'],
                  price: '$599 one-time + $499/month',
                  save: '$549 in month 1'
                }
              ].map((bundle, i) => (
                <div key={i} className="bg-white p-6 rounded-lg border border-neutral-200 shadow-sm hover:border-orange-200 transition-colors">
                  <h3 className="text-lg font-bold text-[#1B3A6B] mb-2">{bundle.title}</h3>
                  <p className="text-xs text-neutral-500 mb-4"><strong>Ideal for:</strong> {bundle.for}</p>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <ul className="space-y-1">
                      {bundle.includes.map((item, j) => (
                        <li key={j} className="text-xs text-neutral-600 flex items-center gap-2">
                          <Check size={14} className="text-green-600" /> {item}
                        </li>
                      ))}
                    </ul>
                    <div className="bg-orange-50 p-4 rounded text-center">
                      <p className="text-xs text-neutral-500 uppercase tracking-wider mb-1">Bundle Price</p>
                      <p className="text-xl font-bold text-[#1B3A6B]">{bundle.price}</p>
                      <p className="text-[10px] text-green-600 font-bold mt-1">SAVE {bundle.save}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: Full-Service Retainer */}
          <section className="space-y-8">
            <div className="flex items-center gap-2 text-orange-500 text-[10px] font-bold uppercase tracking-widest mb-2">
              <Globe size={14} />
              Section 3
            </div>
            <h2 className="font-condensed text-3xl font-bold text-[#1B3A6B] mb-2">
              Full-Service Retainer — Your Entire Digital Marketing Team
            </h2>
            
            <div className="grid gap-8">
              {[
                {
                  name: 'Starter Retainer',
                  price: '$2,499/month',
                  setup: '$999 setup',
                  for: 'Businesses generating $250k–$1M annually.',
                  includes: ['Google Ads (up to $5k spend)', 'SEO (15 pages/mo)', 'GMB Ranking (1 location)', 'AI CRM Maintenance', 'Social Media (3 posts/wk)', 'Monthly Strategy Call']
                },
                {
                  name: 'Growth Retainer',
                  price: '$4,499/month',
                  setup: '$1,499 setup',
                  for: 'Established businesses generating $1M–$5M annually.',
                  includes: ['Google Ads (up to $15k spend)', 'Meta Ads (up to $5k spend)', 'SEO (30 pages/mo)', 'GMB Ranking (3 locations)', 'AI CRM & Tools Growth', 'Email Marketing (2 campaigns/mo)', 'Photography (10 products/mo)']
                },
                {
                  name: 'Scale Retainer',
                  price: '$7,999/month',
                  setup: '$2,499 setup',
                  for: 'High-growth businesses generating $5M+ annually.',
                  includes: ['All Paid Channels (Unlimited spend)', 'SEO (Unlimited pages)', 'GMB Ranking (Unlimited locations)', 'Full AI CRM & Voice Agents', 'Full AI Tools Stack', 'Daily Social Media', 'Email & SMS (8 campaigns/mo)', 'Unlimited Photography']
                }
              ].map((plan, i) => (
                <div key={i} className="bg-white rounded-lg border-2 border-neutral-100 overflow-hidden hover:border-[#1B3A6B] transition-colors">
                  <div className="bg-[#1B3A6B] p-6 text-white">
                    <h3 className="text-xl font-bold">{plan.name}</h3>
                    <p className="text-white/60 text-xs mt-1">{plan.for}</p>
                    <div className="mt-4 flex items-baseline gap-2">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      <span className="text-white/60 text-xs">/ month</span>
                    </div>
                    <p className="text-orange-400 text-[10px] font-bold uppercase mt-1">+ {plan.setup}</p>
                  </div>
                  <div className="p-6">
                    <ul className="grid md:grid-cols-2 gap-3">
                      {plan.includes.map((item, j) => (
                        <li key={j} className="text-xs text-neutral-600 flex items-center gap-2">
                          <Check size={14} className="text-green-600" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4: One-Time Project Packages */}
          <section>
            <h2 className="font-condensed text-2xl font-bold text-[#1B3A6B] mb-6 border-l-4 border-orange-500 pl-4">
              One-Time Project Packages — No Monthly Commitment
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { name: 'Website SEO Audit', price: '$349', desc: 'Complete technical and on-page SEO audit. Written report with fix roadmap.' },
                { name: 'Google Ads Account Audit', price: '$299', desc: 'Full audit of existing account — wasted spend, quality score, gap analysis.' },
                { name: 'GMB Profile Optimization', price: '$399', desc: 'Full audit and one-time optimization + 90-day self-management guide.' },
                { name: 'AI CRM Audit & Roadmap', price: '$299', desc: 'Review current CRM or platform recommendation + automation roadmap.' }
              ].map((proj, i) => (
                <div key={i} className="p-4 bg-white border border-neutral-200 rounded flex justify-between items-start gap-4">
                  <div>
                    <h4 className="font-bold text-[#1B3A6B] text-sm">{proj.name}</h4>
                    <p className="text-[10px] text-neutral-500 mt-1">{proj.desc}</p>
                  </div>
                  <span className="font-bold text-orange-500 whitespace-nowrap">{proj.price}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Add-Ons */}
          <section>
            <h2 className="font-condensed text-2xl font-bold text-[#1B3A6B] mb-6 border-l-4 border-orange-500 pl-4">
              Add-Ons — Bolt These On to Any Package
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left bg-white rounded-lg border border-neutral-200">
                <thead className="bg-neutral-50">
                  <tr>
                    <th className="p-3">Add-On</th>
                    <th className="p-3">Price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {[
                    { n: 'Additional platform (e.g. TikTok to Growth Ads)', p: '+$299/month' },
                    { n: 'Additional GMB location', p: '+$199/month per location' },
                    { n: 'Extra blog post', p: '$149 per post' },
                    { n: 'Extra backlinks', p: '$79 per link' },
                    { n: 'LinkedIn Ads management (standalone)', p: '+$499/month' },
                    { n: 'YouTube Ads management (standalone)', p: '+$399/month' },
                    { n: 'Email marketing (2 campaigns/month)', p: '+$349/month' },
                    { n: 'WhatsApp Business automation setup', p: '$299 one-time' },
                    { n: '360° product photography', p: '$49 per product' }
                  ].map((row, i) => (
                    <tr key={i}>
                      <td className="p-3 text-neutral-600">{row.n}</td>
                      <td className="p-3 font-bold text-[#1B3A6B]">{row.p}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Who Each Package Is For */}
          <section className="bg-white p-8 rounded-lg border border-neutral-200 shadow-sm">
            <h2 className="font-condensed text-2xl font-bold text-[#1B3A6B] mb-6 border-l-4 border-orange-500 pl-4">
              Which Package Is Right for Your Business?
            </h2>
            <div className="space-y-4">
              {[
                { t: 'New or early-stage (Under $250K revenue)', d: 'Start with a single-service package like GMB Ranking Starter ($299/mo) or Amazon Listing Optimization ($349 one-time). Do not spread thin.' },
                { t: 'Growing business ($250K–$1M revenue)', d: 'The Brand Builder Bundle at $1,199/mo or Local Business Bundle at $1,499/mo gives you coordinated multi-channel marketing.' },
                { t: 'Established business ($1M–$5M revenue)', d: 'The Full-Service Growth Retainer at $4,499/mo is built for you. Coordinated marketing feeds every channel.' },
                { t: 'High-growth or enterprise ($5M+ revenue)', d: 'The Scale Retainer at $7,999/mo delivers the execution capability and reporting depth your business requires.' }
              ].map((item, i) => (
                <div key={i} className="p-4 bg-neutral-50 rounded">
                  <h4 className="font-bold text-[#1B3A6B] text-sm mb-1">{item.t}</h4>
                  <p className="text-xs text-neutral-500 leading-relaxed">{item.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Payment & Contract Terms */}
          <section className="bg-white p-8 rounded-lg border border-neutral-200 shadow-sm">
            <h2 className="font-condensed text-2xl font-bold text-[#1B3A6B] mb-6 border-l-4 border-orange-500 pl-4">
              Payment Terms, Contract Length & Cancellation
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-xs text-neutral-600 leading-relaxed">
              <div className="space-y-3">
                <p><strong>Month-to-month agreements:</strong> All single-service packages and the Full-Service Starter Retainer operate on 30-day rolling agreements.</p>
                <p><strong>Minimum 3-month commitment:</strong> SEO-only packages require 3 months as rankings take time to move.</p>
                <p><strong>Minimum 6-month commitment:</strong> Full-Service Growth and Scale Retainers require 6 months due to onboarding investment.</p>
              </div>
              <div className="space-y-3">
                <p><strong>Payment:</strong> Monthly invoices issued on the 1st. Payment due within 7 days via bank transfer, Stripe, or PayPal.</p>
                <p><strong>Setup fees:</strong> Invoiced at onboarding. Non-refundable as they cover initial audit and configuration work.</p>
                <p><strong>Refund policy:</strong> Management fees are non-refundable after work commences. We work to resolve any issues within the first 30 days.</p>
              </div>
            </div>
          </section>

          {/* Competitor Comparison */}
          <section className="bg-[#1B3A6B] text-white p-8 rounded-lg shadow-xl">
            <h2 className="font-condensed text-2xl font-bold mb-6">How Our Pricing Compares — Market Benchmarks</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead className="border-b border-white/10">
                  <tr>
                    <th className="pb-4">Service</th>
                    <th className="pb-4">Typical USA/UK Agency</th>
                    <th className="pb-4">Rajput Signature</th>
                    <th className="pb-4 text-orange-400">Your Saving</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {[
                    { s: 'Google Ads (up to $10K spend)', t: '$1,500–$2,000/mo', r: '$999/mo', sa: 'Up to $1,000/mo' },
                    { s: 'SEO — Growth tier', t: '$1,500–$3,000/mo', r: '$1,199/mo', sa: 'Up to $1,800/mo' },
                    { s: 'AI CRM setup + management', t: '$2,000–$5,000/mo', r: 'From $399 + $299/mo', sa: '60–80% saving' },
                    { s: 'Full-service retainer', t: '$5,000–$20,000+/mo', r: 'From $2,499/mo', sa: 'Up to 75% saving' }
                  ].map((row, i) => (
                    <tr key={i}>
                      <td className="py-4">{row.s}</td>
                      <td className="py-4 text-white/60">{row.t}</td>
                      <td className="py-4 font-bold">{row.r}</td>
                      <td className="py-4 text-orange-400 font-bold">{row.sa}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* FAQ Section */}
          <section>
            <h2 className="font-condensed text-2xl font-bold text-[#1B3A6B] mb-6 border-l-4 border-orange-500 pl-4">
              Frequently Asked Questions
            </h2>
            <div className="space-y-2">
              <FAQItem 
                question="Can I change my package after I start?" 
                answer="Yes. You can upgrade to a higher tier at any time — upgrades take effect from the next billing cycle. Downgrading is possible at the end of your minimum commitment period with 30 days notice."
              />
              <FAQItem 
                question="Do you offer discounts for paying quarterly or annually?" 
                answer="Yes. Quarterly prepayment receives a 5% discount. Annual prepayment receives a 10% discount. These apply to all packages except one-time project fees."
              />
              <FAQItem 
                question="Is the ad spend included in the management fee?" 
                answer="No. Ad spend goes directly from your account to the advertising platforms. Our management fee covers the strategy, setup, optimization, and reporting."
              />
              <FAQItem 
                question="How quickly will I see results?" 
                answer="Google Ads: 7–14 days. GMB ranking: 30–60 days. SEO: 3–6 months. AI CRM: 30 days. The fastest results come from running paid and organic channels together."
              />
              <FAQItem 
                question="What happens if I want to cancel?" 
                answer="Monthly packages: 30 days written notice required. SEO packages: available after 3-month minimum. Growth/Scale Retainers: available after 6-month minimum. No penalties after minimum period."
              />
              <FAQItem 
                question="Do I need to provide creative assets for paid ads?" 
                answer="No. Growth and Scale packages include creative direction and ad copy production. For Starter, we provide briefs — if you want us to produce final assets, it is available as an add-on."
              />
              <FAQItem 
                question="Do all packages come with reporting?" 
                answer="Yes. Monthly reports for Starter, weekly reports with live dashboards for Growth and Scale. All reports are written in plain English with revenue-focused metrics."
              />
              <FAQItem 
                question="Can I combine services from different packages at different tiers?" 
                answer="Yes. You can have Google Ads at Growth tier but SEO at Starter tier. We bill each at its applicable tier and apply the standard bundle discount if 2+ services are taken together."
              />
            </div>
          </section>

          {/* Final CTA */}
          <section className="bg-gradient-to-br from-[#1B3A6B] to-[#0f2347] p-10 rounded-lg text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20v20zm40 0V20L20 40h20z'/%3E%3C/g%3E%3C/svg%3E")` }}></div>
            <div className="relative z-10">
              <h2 className="font-condensed text-3xl font-bold mb-4">Ready to Start? Here Is What Happens Next.</h2>
              <div className="grid md:grid-cols-4 gap-4 mb-8 text-left">
                {[
                  { s: 'Step 1', t: 'Book a Free Strategy Call', d: 'We listen more than we talk.' },
                  { s: 'Step 2', t: 'Receive Your Free Audit', d: 'Written audit & specific recommendation.' },
                  { s: 'Step 3', t: 'Review & Decide', d: 'No pressure, no fake deadlines.' },
                  { s: 'Step 4', t: 'Onboard in 5 Days', d: 'Fully set up and live quickly.' }
                ].map((step, i) => (
                  <div key={i} className="bg-white/5 p-4 rounded border border-white/10">
                    <span className="text-orange-400 text-[10px] font-bold uppercase">{step.s}</span>
                    <h4 className="font-bold text-sm mt-1">{step.t}</h4>
                    <p className="text-[10px] text-white/60 mt-1">{step.d}</p>
                  </div>
                ))}
              </div>
              <button className="bg-[#FF6B00] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#e05e00] transition-all hover:scale-105 shadow-xl">
                Book My Free Strategy Call
              </button>
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="space-y-8">
          {/* Sidebar Form */}
          <div className="bg-white rounded-lg border border-neutral-200 shadow-sm overflow-hidden sticky top-32">
            <div className="bg-[#1B3A6B] py-3 px-6 text-center">
              <h3 className="text-white font-bold text-sm">Not Sure Which Package?</h3>
              <p className="text-white/60 text-[10px] uppercase tracking-wider">Get a Free Recommendation</p>
            </div>
            <div className="p-6">
              {!mainFormSubmitted ? (
                <form onSubmit={(e) => { e.preventDefault(); setMainFormSubmitted(true); }} className="space-y-3">
                  <input type="text" placeholder="Full Name *" required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm outline-none focus:border-[#1B3A6B]" />
                  <input type="email" placeholder="Business Email *" required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm outline-none focus:border-[#1B3A6B]" />
                  <select required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm focus:border-[#1B3A6B] outline-none bg-white">
                    <option value="">Business Type *</option>
                    <option>Service Business</option><option>E-Commerce</option><option>Law Firm</option><option>Healthcare</option><option>Other</option>
                  </select>
                  <select required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm focus:border-[#1B3A6B] outline-none bg-white">
                    <option value="">Primary Goal *</option>
                    <option>More leads</option><option>More online sales</option><option>Lower cost per lead</option><option>Better GMB ranking</option><option>All of the above</option>
                  </select>
                  <textarea placeholder="Marketing Challenge..." className="w-full border border-neutral-200 rounded px-3 py-2 text-sm outline-none focus:border-[#1B3A6B] bg-white min-height-[80px]"></textarea>
                  <button type="submit" className="w-full bg-orange-500 text-white py-3 rounded font-bold text-sm hover:bg-orange-600 transition-colors shadow-md flex items-center justify-center gap-2">
                    <Rocket size={16} /> Get My Recommendation
                  </button>
                  <p className="text-[10px] text-neutral-400 text-center mt-2 flex items-center justify-center gap-1">
                    <ShieldCheck size={10} /> Confidential. No spam.
                  </p>
                </form>
              ) : (
                <div className="bg-green-50 border border-green-200 rounded p-8 text-center flex flex-col items-center justify-center">
                  <Check className="text-green-500 mb-4" size={48} />
                  <h4 className="text-green-800 font-bold text-lg mb-2">Request Sent!</h4>
                  <p className="text-green-700 text-sm">We will reply within 4 business hours.</p>
                </div>
              )}

              <div className="mt-8 space-y-6">
                <div className="bg-[#f0f4ff] border border-[#d0daf0] rounded-lg p-6">
                  <h4 className="font-bold text-[#1B3A6B] text-sm mb-4 flex items-center gap-2">
                    <Star className="text-orange-500" size={16} /> What You Get
                  </h4>
                  <ul className="space-y-3">
                    {[
                      'Honest assessment of the best starting package',
                      'Competitor analysis vs top 3 market leaders',
                      'Realistic ROI projection for your industry',
                      'Written strategy summary in 24 hours'
                    ].map((item, i) => (
                      <li key={i} className="text-[11px] text-neutral-600 flex items-start gap-2">
                        <Check size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-6">
                  <h4 className="font-bold text-[#1B3A6B] text-sm mb-4">What Is Not Included</h4>
                  <ul className="space-y-2">
                    {[
                      'Ad spend (paid directly to platforms)',
                      'Platform subscriptions (CRM software)',
                      'Photography product shipping',
                      'Website hosting & domain registration'
                    ].map((item, i) => (
                      <li key={i} className="text-[10px] text-neutral-500 flex items-start gap-2">
                        <AlertCircle size={12} className="text-neutral-400 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
