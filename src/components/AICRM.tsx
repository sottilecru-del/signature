import React, { useState } from 'react';
import { 
  Bot, 
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
  Cpu,
  Users,
  Search,
  Globe,
  FileText,
  Link as LinkIcon,
  Mail,
  Calendar,
  Settings,
  ArrowRight,
  AlertCircle,
  ShoppingCart,
  Rocket
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

export default function AICRM() {
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
          <span className="font-medium text-neutral-600">AI CRM Solutions</span>
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
              Serving businesses in USA, UK, Australia, Canada, Bangladesh
            </div>
            <h1 className="font-condensed text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Stop Losing Leads to a Broken CRM. Get an <span className="text-orange-400">AI-Powered System</span> That Actually Works.
            </h1>
            <p className="text-lg text-white/80 mb-8 max-w-2xl leading-relaxed">
              We set up, customize, and automate AI CRM systems for service businesses in USA, UK, Australia, Canada, and Bangladesh. No more missed follow-ups. No more lost deals. No more paying for software nobody uses.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {['GoHighLevel', 'HubSpot', 'Zoho CRM', 'Sales Automation', 'Lead Qualification', 'AI Chatbots'].map((pill, i) => (
                <span key={i} className="bg-white/10 border border-white/20 text-white/80 text-[10px] px-3 py-1 rounded-full">
                  {pill}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { num: '21X', label: 'Faster Response' },
                { num: '60%', label: 'Less No-Shows' },
                { num: '24/7', label: 'AI Operation' },
                { num: '30 Days', label: 'Avg ROI Seen' }
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
              <h3 className="text-white font-bold text-sm">Free CRM Strategy Call</h3>
              <p className="text-white/80 text-[10px] uppercase tracking-wider">Book your 30-minute audit</p>
            </div>
            <div className="p-6">
              {!submitted ? (
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-3">
                  <div className="grid grid-cols-2 gap-2">
                    <input type="text" placeholder="First Name *" required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm outline-none focus:border-[#1B3A6B]" />
                    <input type="text" placeholder="Last Name *" required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm outline-none focus:border-[#1B3A6B]" />
                  </div>
                  <input type="email" placeholder="Business Email *" required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm outline-none focus:border-[#1B3A6B]" />
                  <input type="text" placeholder="Business Name *" required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm outline-none focus:border-[#1B3A6B]" />
                  <select required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm focus:border-[#1B3A6B] outline-none bg-white">
                    <option value="">Target Country *</option>
                    <option>USA</option><option>UK</option><option>Australia</option><option>Canada</option><option>Bangladesh</option><option>Other</option>
                  </select>
                  <select required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm focus:border-[#1B3A6B] outline-none bg-white">
                    <option value="">Current CRM *</option>
                    <option>None / Spreadsheet</option><option>GoHighLevel</option><option>HubSpot</option><option>Zoho</option><option>Other</option>
                  </select>
                  <button type="submit" className="w-full bg-[#1B3A6B] text-white py-3 rounded font-bold text-sm hover:bg-[#152d55] transition-colors flex items-center justify-center gap-2">
                    <Rocket size={16} /> Get My Free CRM Strategy Call
                  </button>
                </form>
              ) : (
                <div className="bg-green-50 border border-green-200 rounded p-6 text-center">
                  <Check className="mx-auto text-green-500 mb-2" size={32} />
                  <h4 className="text-green-800 font-bold text-sm mb-1">Request Received!</h4>
                  <p className="text-green-700 text-xs">We will contact you within 4 business hours to book your call.</p>
                </div>
              )}
              <div className="mt-4 flex justify-center gap-4 text-[10px] text-neutral-400 font-medium uppercase tracking-wider">
                <span className="flex items-center gap-1"><ShieldCheck size={12} /> Secure</span>
                <span className="flex items-center gap-1"><Check size={12} /> No Hard Sell</span>
                <span className="flex items-center gap-1"><Clock size={12} /> 4hr Response</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 px-4 md:px-8 bg-white border-b border-neutral-100">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 text-orange-500 text-[10px] font-bold uppercase tracking-widest mb-2">
                <AlertCircle size={14} />
                The Problem
              </div>
              <h2 className="font-condensed text-3xl font-bold text-[#1B3A6B] mb-6">
                Most Businesses Have a CRM. Almost None Have It Set Up Correctly.
              </h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>Here is what we see every week when we audit a new client's system:</p>
                <ul className="space-y-3">
                  {[
                    "Leads are sitting uncontacted for 3, 4, sometimes 7 days.",
                    "Follow-up sequences were never built.",
                    "Sales pipelines have no stages that match how the business actually sells.",
                    "The team ignores the CRM because it was never made easy to use.",
                    "Automations were promised but never configured.",
                    "Money is being paid monthly for a tool delivering zero ROI."
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm">
                      <span className="text-orange-500 font-bold">✕</span> {item}
                    </li>
                  ))}
                </ul>
                <p className="font-bold text-[#1B3A6B] mt-6">This is not a technology problem. It is a setup and strategy problem — and it is one we fix in days, not months.</p>
              </div>
            </div>
            <div className="bg-neutral-50 p-8 rounded-lg border border-neutral-200 relative">
              <div className="absolute -top-4 -right-4 bg-[#FF6B00] text-white p-4 rounded-lg shadow-xl">
                <TrendingUp size={32} />
              </div>
              <h3 className="font-bold text-[#1B3A6B] mb-4">The Rajput Signature Fix</h3>
              <p className="text-sm text-neutral-600 mb-6">We don't just give you logins. We build a revenue-generating engine that works while you sleep.</p>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0"><Check size={18} /></div>
                  <div>
                    <h4 className="font-bold text-xs text-[#1B3A6B]">Instant Follow-up</h4>
                    <p className="text-[10px] text-neutral-500">Respond to leads in seconds, not days.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0"><Check size={18} /></div>
                  <div>
                    <h4 className="font-bold text-xs text-[#1B3A6B]">Automated Nurture</h4>
                    <p className="text-[10px] text-neutral-500">Stay top-of-mind until they are ready to buy.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0"><Check size={18} /></div>
                  <div>
                    <h4 className="font-bold text-xs text-[#1B3A6B]">Data-Driven Sales</h4>
                    <p className="text-[10px] text-neutral-500">Know exactly where your revenue is coming from.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-screen-2xl mx-auto py-12 px-4 md:px-8 grid lg:grid-cols-[1fr_350px] gap-12">
        <div className="space-y-12">
          {/* What We Deliver Section */}
          <section className="bg-white p-8 rounded-lg border border-neutral-200 shadow-sm">
            <div className="flex items-center gap-2 text-orange-500 text-[10px] font-bold uppercase tracking-widest mb-2">
              <Zap size={14} />
              What We Deliver
            </div>
            <h2 className="font-condensed text-2xl font-bold text-[#1B3A6B] mb-6 border-l-4 border-orange-500 pl-4">
              A Complete AI CRM System — Built, Automated, and Ready to Generate Revenue
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { 
                  icon: <Settings size={24} />, 
                  title: 'CRM Platform Setup & Configuration', 
                  desc: 'We build your CRM from scratch or fix what is broken. Custom pipelines, contact stages, deal tracking, and user permissions — configured around the way your business actually operates.' 
                },
                { 
                  icon: <Bot size={24} />, 
                  title: 'AI-Powered Lead Capture & Qualification', 
                  desc: 'Every new lead is captured, tagged, and automatically qualified. AI chatbots handle initial questions and book appointments into your calendar — 24/7.' 
                },
                { 
                  icon: <Mail size={24} />, 
                  title: 'Automated Follow-Up Sequences', 
                  desc: 'Multi-step, multi-channel follow-up sequences using email, SMS, and voicemail drops that run automatically when a lead goes cold or a deal stalls.' 
                },
                { 
                  icon: <TrendingUp size={24} />, 
                  title: 'Sales Pipeline Automation', 
                  desc: 'Every stage of your sales pipeline is automated. When a deal closes, a welcome sequence starts. When a prospect goes quiet, a re-engagement message triggers.' 
                },
                { 
                  icon: <Calendar size={24} />, 
                  title: 'AI Appointment Booking', 
                  desc: 'Leads book calls directly into your calendar. AI assistants handle objections, reschedule no-shows, and send automated reminders — reducing no-show rates by up to 60%.' 
                },
                { 
                  icon: <BarChart3 size={24} />, 
                  title: 'Reporting, Dashboards & Analytics', 
                  desc: 'Real-time dashboards show you exactly where every lead is, conversion rates at each stage, and what your team is actually doing. No more guessing.' 
                },
                { 
                  icon: <LinkIcon size={24} />, 
                  title: 'CRM Integration', 
                  desc: 'We connect your CRM to paid ads, Google Analytics, email, WhatsApp, Stripe or PayPal. Everything talks to each other so nothing falls through the gaps.' 
                },
                { 
                  icon: <Users size={24} />, 
                  title: 'Team Training & Support', 
                  desc: 'We train every user, build simple SOPs your team will actually follow, and provide ongoing support so your system stays healthy as you grow.' 
                }
              ].map((item, i) => (
                <div key={i} className="group">
                  <div className="text-[#1B3A6B] mb-3 group-hover:text-orange-500 transition-colors">{item.icon}</div>
                  <h4 className="font-bold text-sm text-[#1B3A6B] mb-2">{item.title}</h4>
                  <p className="text-xs text-neutral-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Platforms Section */}
          <section className="bg-white p-8 rounded-lg border border-neutral-200 shadow-sm">
            <div className="flex items-center gap-2 text-orange-500 text-[10px] font-bold uppercase tracking-widest mb-2">
              <Layout size={14} />
              Platforms
            </div>
            <h2 className="font-condensed text-2xl font-bold text-[#1B3A6B] mb-6 border-l-4 border-orange-500 pl-4">
              We Are Platform-Agnostic. We Choose What Is Right for Your Business.
            </h2>
            
            <div className="space-y-6">
              {[
                { 
                  title: 'GoHighLevel — Best for Agencies & Service Businesses', 
                  desc: 'The most powerful all-in-one platform for service businesses. CRM, funnel builder, email, SMS, calendar, and AI automation — all under one login at one flat price.',
                  rec: 'digital marketing agencies, coaches, consultants, home service businesses, healthcare providers.'
                },
                { 
                  title: 'HubSpot — Best for B2B & Content-Led Businesses', 
                  desc: 'The most recognized CRM in the world. Outstanding for B2B sales teams, inbound marketing, and businesses running content-driven lead generation.',
                  rec: 'B2B companies with longer sales cycles, businesses invested in content marketing.'
                },
                { 
                  title: 'Zoho CRM — Best for Budget-Conscious Growing Teams', 
                  desc: 'Surprisingly powerful for the price. Zoho\'s AI assistant Zia handles lead scoring, sales forecasting, and workflow recommendations.',
                  rec: 'small teams on tighter budgets who still need full CRM functionality.'
                }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-neutral-50 border border-neutral-100 rounded-lg">
                  <h4 className="font-bold text-[#1B3A6B] mb-2">{item.title}</h4>
                  <p className="text-sm text-neutral-600 mb-4 leading-relaxed">{item.desc}</p>
                  <div className="text-[10px] text-neutral-400 uppercase font-bold tracking-wider">Recommended for:</div>
                  <div className="text-xs text-[#1B3A6B] font-medium">{item.rec}</div>
                </div>
              ))}
              <div className="p-6 border-2 border-dashed border-neutral-200 rounded-lg text-center">
                <h4 className="font-bold text-[#1B3A6B] mb-1">Need a Custom Build?</h4>
                <p className="text-xs text-neutral-500 mb-4">When off-the-shelf does not fit, we build bespoke API-first architectures.</p>
                <button className="text-[#FF6B00] font-bold text-xs hover:underline">Enquire About Custom Build →</button>
              </div>
            </div>
          </section>

          {/* Why Now Section */}
          <section className="bg-[#1B3A6B] p-8 rounded-lg text-white">
            <div className="flex items-center gap-2 text-orange-400 text-[10px] font-bold uppercase tracking-widest mb-2">
              <Clock size={14} />
              Why Now?
            </div>
            <h2 className="font-condensed text-2xl font-bold mb-8 border-l-4 border-orange-400 pl-4">
              The Cost of Not Having an AI CRM Is Higher Than You Think
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: 'Speed to lead is everything', desc: 'Businesses responding within 5 minutes are 21X more likely to convert. AI automation responds in seconds, not hours.' },
                { title: 'Scale without headcount', desc: '100 leads/mo need 500+ follow-up touchpoints. AI handles this without fatigue or human error.' },
                { title: 'Beat your competitors', desc: 'Your competitors in USA and UK are already using this. If you don\'t, they will close more even if your service is better.' },
                { title: 'Measurable ROI', desc: 'Most clients see conversion improvements within 30 days. The system works while you sleep and on holidays.' }
              ].map((item, i) => (
                <div key={i}>
                  <h4 className="font-bold text-orange-400 mb-2">{item.title}</h4>
                  <p className="text-xs text-white/70 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section id="pricing-crm" className="bg-white p-8 rounded-lg border border-neutral-200 shadow-sm">
            <div className="flex items-center gap-2 text-orange-500 text-[10px] font-bold uppercase tracking-widest mb-2">
              <ShoppingCart size={14} />
              Pricing
            </div>
            <h2 className="font-condensed text-2xl font-bold text-[#1B3A6B] mb-6 border-l-4 border-orange-500 pl-4">
              Clear Pricing Built to Compete — Not to Confuse
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { 
                  title: 'Starter', 
                  price: '$399', 
                  sub: '$149/month',
                  features: ['CRM platform setup', '1 sales pipeline (5 stages)', 'Lead capture form', '3-step email follow-up', 'Calendar integration', 'Basic dashboard', '1 team training session', '30 days support'] 
                },
                { 
                  title: 'Growth', 
                  price: '$899', 
                  sub: '$299/month',
                  featured: true, 
                  features: ['Up to 3 sales pipelines', 'AI chatbot qualification', '7-step multi-channel follow-up', 'Automated booking reminders', 'No-show re-engagement', 'Ads account integration', 'Full team training (5 users)', 'Live reporting dashboard', '60 days priority support'] 
                },
                { 
                  title: 'Scale', 
                  price: '$1,999', 
                  sub: '$599/month',
                  features: ['Full AI CRM architecture', 'Unlimited pipelines', 'AI voice/conversational assistant', 'Email, SMS, WhatsApp, Voicemail', 'Advanced lead scoring', 'Full ads & GMB integration', 'Custom executive dashboard', 'Unlimited team training', 'Dedicated account manager'] 
                }
              ].map((pkg, i) => (
                <div key={i} className={`border-2 rounded-lg overflow-hidden flex flex-col ${pkg.featured ? 'border-orange-500 shadow-xl scale-105 z-10' : 'border-neutral-100'}`}>
                  {pkg.featured && <div className="bg-orange-500 text-white text-[10px] font-bold text-center py-1 uppercase tracking-widest">Most Popular</div>}
                  <div className="bg-neutral-50 p-6 text-center border-b border-neutral-100">
                    <h3 className="font-condensed text-lg font-bold text-[#1B3A6B] mb-1">{pkg.title}</h3>
                    <div className="text-2xl font-bold text-orange-500">{pkg.price} <span className="text-[10px] text-neutral-400 font-normal">setup</span></div>
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

          {/* Results Section */}
          <section className="bg-white p-8 rounded-lg border border-neutral-200 shadow-sm">
            <div className="flex items-center gap-2 text-orange-500 text-[10px] font-bold uppercase tracking-widest mb-2">
              <Trophy size={14} />
              Results
            </div>
            <h2 className="font-condensed text-2xl font-bold text-[#1B3A6B] mb-8 border-l-4 border-orange-500 pl-4">
              What Happens When Your CRM Actually Works
            </h2>
            <div className="space-y-6">
              {[
                { 
                  title: 'Law firm — United Kingdom', 
                  before: 'Leads from Google Ads going cold after 24 hours. No follow-up system. 8% lead-to-consultation conversion.', 
                  after: 'Automated 5-touch follow-up, instant AI response, calendar booking. Conversion increased to 31%. 3.8X more consultations.' 
                },
                { 
                  title: 'Home services business — United States', 
                  before: 'Using HubSpot free tier with no automations. Manual calling 1-2 days after enquiry. Closing 12% of leads.', 
                  after: 'Instant lead notification, same-day automated SMS, pipeline automation. Conversion improved to 28% within 60 days.' 
                },
                { 
                  title: 'Digital marketing agency — Australia', 
                  before: 'Onboarding via email chains. No centralized pipeline. Client churn at 34% annually.', 
                  after: 'Automated onboarding sequence, monthly reporting automation, re-engagement campaign. Churn reduced to 18%.' 
                }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-neutral-50 rounded-lg border border-neutral-100">
                  <h4 className="font-bold text-[#1B3A6B] mb-4">{item.title}</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-1">Before</div>
                      <p className="text-xs text-neutral-500">{item.before}</p>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-green-600 uppercase tracking-widest mb-1">After Rajput Signature</div>
                      <p className="text-xs text-neutral-800 font-medium">{item.after}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Lead Capture Form */}
          <section id="crm-audit-form" className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg border-2 border-[#1B3A6B] shadow-lg">
            <div className="flex items-center gap-2 text-orange-500 text-[10px] font-bold uppercase tracking-widest mb-2">
              <Zap size={14} />
              Get Started
            </div>
            <h2 className="font-condensed text-2xl font-bold text-[#1B3A6B] mb-2">Get a Free CRM Audit</h2>
            <p className="text-sm text-neutral-600 mb-8 leading-relaxed">We'll show you exactly what your system is missing — no charge, no obligation.</p>

            <div className="grid md:grid-cols-2 gap-12">
              {!mainFormSubmitted ? (
                <form onSubmit={(e) => { e.preventDefault(); setMainFormSubmitted(true); }} className="space-y-3">
                  <div className="grid grid-cols-2 gap-2">
                    <input type="text" placeholder="First Name *" required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm outline-none focus:border-[#1B3A6B] bg-white" />
                    <input type="text" placeholder="Last Name *" required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm outline-none focus:border-[#1B3A6B] bg-white" />
                  </div>
                  <input type="email" placeholder="Business Email *" required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm outline-none focus:border-[#1B3A6B] bg-white" />
                  <input type="text" placeholder="Business Name *" required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm outline-none focus:border-[#1B3A6B] bg-white" />
                  <select required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm focus:border-[#1B3A6B] outline-none bg-white">
                    <option value="">Country *</option>
                    <option>USA</option><option>UK</option><option>Australia</option><option>Canada</option><option>Bangladesh</option><option>Other</option>
                  </select>
                  <select required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm focus:border-[#1B3A6B] outline-none bg-white">
                    <option value="">Current CRM *</option>
                    <option>None / Spreadsheet</option><option>GoHighLevel</option><option>HubSpot</option><option>Zoho</option><option>Other</option>
                  </select>
                  <select required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm focus:border-[#1B3A6B] outline-none bg-white">
                    <option value="">Biggest Challenge *</option>
                    <option>No automation set up</option><option>Low lead conversion</option><option>Team not using CRM</option><option>Need full setup</option><option>Want to switch platforms</option><option>Other</option>
                  </select>
                  <textarea placeholder="Anything else to share?" className="w-full border border-neutral-200 rounded px-3 py-2 text-sm outline-none focus:border-[#1B3A6B] bg-white min-height-[80px]"></textarea>
                  <button type="submit" className="w-full bg-orange-500 text-white py-3 rounded font-bold text-sm hover:bg-orange-600 transition-colors shadow-md">
                    Book My Free CRM Audit →
                  </button>
                  <p className="text-[10px] text-neutral-400 text-center mt-2 flex items-center justify-center gap-1">
                    <ShieldCheck size={10} /> Confidential. No spam. No hard sell.
                  </p>
                </form>
              ) : (
                <div className="bg-green-50 border border-green-200 rounded p-8 text-center flex flex-col items-center justify-center">
                  <Check className="text-green-500 mb-4" size={48} />
                  <h4 className="text-green-800 font-bold text-lg mb-2">Audit Request Sent!</h4>
                  <p className="text-green-700 text-sm">We will analyze your requirements and reply within 4 business hours.</p>
                </div>
              )}

              <div className="space-y-6">
                <div className="bg-[#f0f4ff] border border-[#d0daf0] rounded-lg p-6">
                  <h4 className="font-bold text-sm text-[#1B3A6B] mb-4">What You Get in Your Free Audit</h4>
                  <ul className="space-y-3">
                    {[
                      'Full audit of your current CRM strategy',
                      'Identification of 3 biggest revenue leaks',
                      'Platform recommendation for your goals',
                      'Custom automation roadmap',
                      'No commitment required'
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

          {/* FAQ Section */}
          <section id="faq-crm" className="bg-white p-8 rounded-lg border border-neutral-200 shadow-sm">
            <div className="flex items-center gap-2 text-orange-500 text-[10px] font-bold uppercase tracking-widest mb-2">
              <MessageCircle size={14} />
              FAQ
            </div>
            <h2 className="font-condensed text-2xl font-bold text-[#1B3A6B] mb-8 border-l-4 border-orange-500 pl-4">
              Questions About AI CRM Setup Service
            </h2>
            <div className="space-y-4">
              <FAQItem 
                question="What is an AI CRM and how is it different from a regular CRM?"
                answer="A regular CRM stores contact information and tracks deals. An AI CRM actively works your leads for you — it responds instantly, qualifies automatically, follows up persistently, scores leads by likelihood to close, and flags deals that need human attention."
              />
              <FAQItem 
                question="Which CRM platform do you recommend for a service business in USA or UK?"
                answer="For most service businesses generating under 500 leads per month, GoHighLevel delivers the best value. For B2B companies with longer sales cycles, HubSpot is often the better fit. For budget-conscious teams, Zoho CRM is our preferred recommendation."
              />
              <FAQItem 
                question="How long does the setup take?"
                answer="Starter builds are live within 5–7 business days. Growth builds typically take 10–14 business days. Scale builds are scoped individually but most complete within 3–4 weeks."
              />
              <FAQItem 
                question="Do I need technical knowledge to use the system after setup?"
                answer="No. We build every system to be operated by non-technical business owners and their teams. Training is included in every package and we document every process in plain English."
              />
              <FAQItem 
                question="Is my data secure? Are your setups GDPR compliant?"
                answer="Yes. All systems built for UK and EU-adjacent markets are configured with GDPR compliance in mind. US builds follow CAN-SPAM and CCPA guidelines. Australian builds follow the Australian Privacy Act requirements."
              />
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="sidebar space-y-6">
          {/* Sticky Sidebar Form */}
          <div className="card border-t-4 border-t-[#1B3A6B] sticky top-24">
            <div className="bg-[#1B3A6B] p-4 text-white">
              <h3 className="font-bold text-sm">Get Free CRM Audit</h3>
              <p className="text-[10px] text-white/70 uppercase tracking-widest">Custom roadmap in 48 hours</p>
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
                  <button type="submit" className="w-full bg-[#FF6B00] text-white py-3 rounded font-bold text-sm hover:bg-[#e05e00] transition-colors shadow-lg">
                    Send Free Audit →
                  </button>
                </form>
              ) : (
                <div className="bg-green-50 border border-green-200 rounded p-4 text-center">
                  <Check className="mx-auto text-green-500 mb-2" size={24} />
                  <h4 className="text-green-800 font-bold text-sm">Received!</h4>
                  <p className="text-green-700 text-[10px]">We reply within 4 hours.</p>
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
                { label: 'What We Deliver', id: '#deliver' },
                { label: 'Platforms We Work With', id: '#platforms' },
                { label: 'Why Your Business Needs This', id: '#why-now' },
                { label: 'Pricing Packages', id: '#pricing-crm' },
                { label: 'Case Study Results', id: '#results' },
                { label: 'FAQ', id: '#faq-crm' },
                { label: 'Free CRM Audit', id: '#crm-audit-form' }
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
              {['SEO Services', 'Paid Media Advertising', 'GMB Ranking Optimization', 'Product Photography', 'AI Marketing Tools'].map((link, i) => (
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
    </div>
  );
}
