import React, { useState } from 'react';
import { 
  Bot, 
  Check, 
  Zap, 
  ShieldCheck,
  Clock,
  MessageCircle,
  BarChart3,
  Target,
  MousePointerClick,
  Search,
  Globe,
  Layout,
  Info,
  ShoppingCart,
  Star,
  PlayCircle,
  Users,
  Layers,
  ArrowRight,
  Cpu,
  Workflow,
  Sparkles
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

export default function AITools() {
  const [submitted, setSubmitted] = useState(false);
  const [sidebarSubmitted, setSidebarSubmitted] = useState(false);

  return (
    <div className="bg-neutral-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-neutral-200 py-2 px-4 md:px-8">
        <div className="max-w-screen-2xl mx-auto text-[10px] md:text-xs text-neutral-400 flex items-center gap-2">
          <a href="#" className="text-[#1B3A6B] hover:underline">Home</a>
          <span>›</span>
          <a href="#" className="text-[#1B3A6B] hover:underline">Services</a>
          <span>›</span>
          <span className="font-medium text-neutral-600">AI Tools Setup & Integration</span>
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
              AI Implementation Specialists
            </div>
            <h1 className="font-condensed text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Your Competitors Are Running on AI. <span className="text-orange-400">Is Your Business Still Running on Manual?</span>
            </h1>
            <p className="text-lg text-white/80 mb-8 max-w-2xl leading-relaxed">
              We audit, select, set up, and integrate the right AI tools for your business — saving your team 10+ hours every week, cutting operational costs, and giving you a measurable competitive edge.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {['AI Audit', 'Workflow Automation', 'Custom Chatbots', 'AI Content Tools', 'Sales Prospecting', 'Operations AI', 'Microsoft Copilot', 'Google Gemini'].map((pill, i) => (
                <span key={i} className="bg-white/10 border border-white/20 text-white/80 text-[10px] px-3 py-1 rounded-full">
                  {pill}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { num: '85%', label: 'Expect Clear AI ROI' },
                { num: '63%', label: 'Use AI Tools Daily' },
                { num: '71%', label: 'Plan to Increase AI' },
                { num: '10+ hrs', label: 'Saved Per Week' }
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
              <h3 className="text-white font-bold text-sm">Get Your AI Readiness Audit</h3>
              <p className="text-white/80 text-[10px] uppercase tracking-wider">Free Analysis</p>
            </div>
            <div className="p-6">
              {!submitted ? (
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-3">
                  <input type="text" placeholder="Full Name *" required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm outline-none focus:border-[#1B3A6B]" />
                  <input type="email" placeholder="Business Email *" required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm outline-none focus:border-[#1B3A6B]" />
                  <input type="url" placeholder="Your Website URL *" required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm outline-none focus:border-[#1B3A6B]" />
                  <button type="submit" className="w-full bg-[#1B3A6B] text-white py-3 rounded font-bold text-sm hover:bg-[#152d55] transition-colors">
                    Request AI Audit →
                  </button>
                </form>
              ) : (
                <div className="bg-green-50 border border-green-200 rounded p-6 text-center">
                  <Check className="mx-auto text-green-500 mb-2" size={32} />
                  <h4 className="text-green-800 font-bold text-sm mb-1">Request Sent!</h4>
                  <p className="text-green-700 text-xs">We'll analyze your business processes and reach out.</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-screen-2xl mx-auto py-12 px-4 md:px-8 grid lg:grid-cols-[1fr_350px] gap-12">
        <div className="space-y-12">
          {/* Services Section */}
          <section className="bg-white p-8 rounded-lg border border-neutral-200 shadow-sm">
            <div className="flex items-center gap-2 text-orange-500 text-[10px] font-bold uppercase tracking-widest mb-2">
              <Sparkles size={14} />
              Audit to Optimisation
            </div>
            <h2 className="font-condensed text-2xl font-bold text-[#1B3A6B] mb-6 border-l-4 border-orange-500 pl-4">
              A Complete AI Tools Service — Audit to Integration to Optimisation
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { 
                  icon: <Search size={24} />, 
                  title: 'AI Tools Audit & Strategy', 
                  desc: 'Before recommending a single tool, we audit your current operations — every repetitive task, every manual process, every hour your team spends on work AI could handle. We map exactly where AI will generate the highest return for your specific business.' 
                },
                { 
                  icon: <Layout size={24} />, 
                  title: 'AI Content & Marketing Tools Setup', 
                  desc: 'We set up and configure the right AI tools for your content production, social media management, ad copywriting, email marketing, and SEO workflows. Tools include ChatGPT, Claude, Jasper, Copy.ai, and Canva AI.' 
                },
                { 
                  icon: <Bot size={24} />, 
                  title: 'AI Customer Service & Chatbot Setup', 
                  desc: 'We design, build, and deploy AI customer service systems that handle common enquiries, qualify inbound leads, book appointments, and resolve routine support requests without human intervention.' 
                },
                { 
                  icon: <Workflow size={24} />, 
                  title: 'AI Automation & Workflow Integration', 
                  desc: 'We build end-to-end AI automation workflows using Zapier, Make, and n8n connecting your CRM, email platform, project management, accounting, e-commerce, and communication tools into a single intelligent operating system.' 
                },
                { 
                  icon: <Target size={24} />, 
                  title: 'AI Sales & Prospecting Tools', 
                  desc: 'We set up Apollo.io, Instantly, Smartlead, LinkedIn Sales Navigator, HubSpot Breeze, and Salesforce Einstein — allowing a team of two to outperform a traditional team of ten in lead volume and follow-up consistency.' 
                },
                { 
                  icon: <Cpu size={24} />, 
                  title: 'AI for Operations & Productivity', 
                  desc: 'We implement Microsoft Copilot, Google Gemini for Workspace, Notion AI, ClickUp AI, and Otter.ai across your core operations — from project management and communication to document processing, meeting summarisation, and financial reporting.' 
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

          {/* AI Stack Section */}
          <section className="bg-white p-8 rounded-lg border border-neutral-200 shadow-sm">
            <div className="flex items-center gap-2 text-orange-500 text-[10px] font-bold uppercase tracking-widest mb-2">
              <Layers size={14} />
              Platforms We Work With
            </div>
            <h2 className="font-condensed text-2xl font-bold text-[#1B3A6B] mb-8 border-l-4 border-orange-500 pl-4">
              AI Tools in Our Stack
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#1B3A6B] text-white">
                    <th className="p-4 text-left font-bold">Category</th>
                    <th className="p-4 text-left font-bold">Tools</th>
                    <th className="p-4 text-left font-bold">Starting Price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {[
                    { cat: 'Content & Marketing', tools: 'ChatGPT, Claude, Jasper, Canva AI', price: 'From $15/month' },
                    { cat: 'Customer Service', tools: 'Tidio, Intercom, Custom GPT Chatbots', price: 'Free – $749/month' },
                    { cat: 'Automation', tools: 'Zapier, Make, n8n', price: 'Free – $599/month' },
                    { cat: 'Sales & Prospecting', tools: 'Apollo.io, Instantly, HubSpot Breeze', price: 'From $37/month' },
                    { cat: 'Operations', tools: 'Microsoft Copilot, Notion AI, ClickUp AI', price: 'From $7/user/month' },
                    { cat: 'E-Commerce', tools: 'Prisync, Tidio Lyro, Klaviyo AI', price: 'From $99/month' }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-neutral-50 transition-colors">
                      <td className="p-4 font-bold text-[#1B3A6B]">{row.cat}</td>
                      <td className="p-4 text-neutral-600">{row.tools}</td>
                      <td className="p-4 font-medium text-orange-600">{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="bg-white p-8 rounded-lg border border-neutral-200 shadow-sm">
            <div className="flex items-center gap-2 text-orange-500 text-[10px] font-bold uppercase tracking-widest mb-2">
              <ShoppingCart size={14} />
              Pricing
            </div>
            <h2 className="font-condensed text-2xl font-bold text-[#1B3A6B] mb-6 border-l-4 border-orange-500 pl-4">
              AI Tools Implementation Pricing
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-4">
              {[
                { 
                  title: 'Starter', 
                  price: '$349', 
                  sub: 'setup + $149/mo',
                  features: ['AI Audit (top 3 areas)', 'Setup of 3 AI tools', '1 automation workflow', '10 custom prompts', '1 training session', '30-day support'] 
                },
                { 
                  title: 'Growth ★', 
                  price: '$799', 
                  sub: 'setup + $349/mo',
                  featured: true,
                  features: ['Full business AI audit', 'Setup of up to 8 AI tools', '5 automation workflows', 'AI chatbot setup', '30 custom prompts', 'Full team training (10 ppl)', 'Monthly strategy call'] 
                },
                { 
                  title: 'Scale', 
                  price: '$1,799', 
                  sub: 'setup + $699/mo',
                  features: ['Business-wide AI audit', 'Unlimited tool setup', 'Custom AI agent builds', 'AI content production system', 'Full system integration', 'Dedicated AI manager', 'Weekly strategy calls'] 
                }
              ].map((pkg, i) => (
                <div key={i} className={`border-2 rounded-lg overflow-hidden flex flex-col ${pkg.featured ? 'border-orange-500 shadow-xl scale-105 z-10' : 'border-neutral-100'}`}>
                  <div className="bg-neutral-50 p-6 text-center border-b border-neutral-100">
                    <h3 className="font-condensed text-lg font-bold text-[#1B3A6B] mb-1">{pkg.title}</h3>
                    <div className="text-2xl font-bold text-orange-500">{pkg.price}</div>
                    <div className="text-[10px] text-neutral-400 font-medium uppercase tracking-wider">{pkg.sub}</div>
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
                      Choose {pkg.title.replace(' ★', '')}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="bg-white p-8 rounded-lg border border-neutral-200 shadow-sm">
            <div className="flex items-center gap-2 text-orange-500 text-[10px] font-bold uppercase tracking-widest mb-2">
              <MessageCircle size={14} />
              FAQ
            </div>
            <h2 className="font-condensed text-2xl font-bold text-[#1B3A6B] mb-8 border-l-4 border-orange-500 pl-4">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <FAQItem 
                question="What is the difference between just using AI tools and having them professionally set up?"
                answer="Most businesses pay for AI subscriptions that deliver minimal return because tools were never integrated into proper workflows. We build the automation logic, integrations, and training that turn software costs into real revenue return."
              />
              <FAQItem 
                question="How quickly will we see time savings after AI setup?"
                answer="Starter clients typically recover 5+ hours per week from day one. Growth clients see 15–25 hours per week recovered across their team within 60 days. At average UK and US professional rates, this represents $1,500–$3,500 in recovered productivity per month."
              />
              <FAQItem 
                question="Is our data secure when using AI tools?"
                answer="Yes. For UK and EU clients, all AI workflows are configured for GDPR compliance. For US clients, we apply CAN-SPAM and CCPA requirements. No client data is used to train external AI models without explicit consent."
              />
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          <div className="card border-t-4 border-t-[#1B3A6B] sticky top-24">
            <div className="bg-[#1B3A6B] p-4 text-white">
              <h3 className="font-bold text-sm">Get AI Audit</h3>
              <p className="text-[10px] text-white/70 uppercase tracking-widest">Free Analysis</p>
            </div>
            <div className="p-5">
              {!sidebarSubmitted ? (
                <form onSubmit={(e) => { e.preventDefault(); setSidebarSubmitted(true); }} className="space-y-3">
                  <input type="text" placeholder="Full Name" required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm outline-none focus:border-[#1B3A6B]" />
                  <input type="email" placeholder="Business Email" required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm outline-none focus:border-[#1B3A6B]" />
                  <input type="url" placeholder="Website URL" required className="w-full border border-neutral-200 rounded px-3 py-2 text-sm outline-none focus:border-[#1B3A6B]" />
                  <button type="submit" className="w-full bg-[#FF6B00] text-white py-3 rounded font-bold text-sm hover:bg-[#e05e00] transition-colors shadow-lg">
                    Request AI Audit →
                  </button>
                </form>
              ) : (
                <div className="bg-green-50 border border-green-200 rounded p-4 text-center">
                  <Check className="mx-auto text-green-500 mb-2" size={24} />
                  <h4 className="text-green-800 font-bold text-sm">Received!</h4>
                  <p className="text-green-700 text-[10px]">We'll be in touch soon.</p>
                </div>
              )}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
