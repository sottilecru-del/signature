import React, { useState } from 'react';
import { 
  MessageCircle, 
  Zap, 
  Search, 
  ChevronDown, 
  ChevronUp,
  HelpCircle,
  ArrowRight,
  Mail,
  Phone
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const FAQItem = ({ question, answer }: { question: string, answer: string, [key: string]: any }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-neutral-200 rounded-lg mb-4 overflow-hidden shadow-sm">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-5 text-left bg-white hover:bg-neutral-50 transition-colors"
      >
        <span className="text-base font-bold text-[#1B3A6B]">{question}</span>
        <div className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDown size={20} className="text-orange-500" />
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
            <div className="p-5 text-sm text-neutral-600 leading-relaxed bg-neutral-50 border-t border-neutral-200">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function CompleteFAQ() {
  const [searchTerm, setSearchTerm] = useState('');

  const faqCategories = [
    {
      title: 'General Questions',
      items: [
        {
          question: 'What is Rajput Signature?',
          answer: 'Rajput Signature is a full-service digital marketing agency specializing in revenue-driven strategies for service businesses and e-commerce brands in the USA, UK, Australia, Canada, and Bangladesh.'
        },
        {
          question: 'What markets do you serve?',
          answer: 'We primarily serve businesses in the USA, UK, Australia, Canada, and Bangladesh. Our remote-first workflow is designed to support international brands seamlessly.'
        },
        {
          question: 'How do I get started?',
          answer: 'You can start by requesting a free audit or quote for any of our services. Simply fill out the form on the respective service page, and we will get back to you within 24-48 hours.'
        }
      ]
    },
    {
      title: 'SEO & GMB Services',
      items: [
        {
          question: 'How long does SEO take to show results?',
          answer: 'SEO is a long-term strategy. Most clients see meaningful movement within 3-6 months, with significant traffic and ranking growth typically achieved by the 6-12 month mark.'
        },
        {
          question: 'Can you rank my GMB in the top 3?',
          answer: 'Yes, we specialize in GMB optimization and local ranking strategies. Most clients achieve a top-3 ranking in the Google Maps 3-Pack within 90 days of consistent optimization.'
        },
        {
          question: 'Do you provide monthly reports?',
          answer: 'Yes, all our SEO and GMB packages include detailed monthly reports showing keyword rankings, traffic growth, and lead generation performance.'
        }
      ]
    },
    {
      title: 'Paid Media & Advertising',
      items: [
        {
          question: 'Which is better: Google Ads or Meta Ads?',
          answer: 'It depends on your business goals. Google Ads is excellent for capturing high-intent search traffic, while Meta Ads is great for brand awareness and targeting specific demographics. We often recommend a combined approach.'
        },
        {
          question: 'What is a good starting budget for paid ads?',
          answer: 'We recommend a minimum ad spend of $500 - $1,000 per month to gather enough data for effective optimization, although this varies by industry and market.'
        },
        {
          question: 'How do you lower ACOS for Amazon sellers?',
          answer: 'We lower ACOS through rigorous keyword optimization, negative keyword management, bid adjustments, and improving listing conversion rates.'
        }
      ]
    },
    {
      title: 'AI & CRM Solutions',
      items: [
        {
          question: 'What is an AI CRM?',
          answer: 'An AI CRM is a customer relationship management system enhanced with automation and AI. it handles lead qualification, instant follow-ups, and appointment booking automatically.'
        },
        {
          question: 'Which CRM platform do you recommend?',
          answer: 'We recommend GoHighLevel for service businesses, HubSpot for B2B companies, and Zoho CRM for budget-conscious teams. We choose the platform that best fits your specific needs.'
        },
        {
          question: 'Is my data secure with AI tools?',
          answer: 'Yes, we prioritize data security and ensure all AI implementations are compliant with relevant privacy regulations like GDPR, CCPA, and the Australian Privacy Act.'
        }
      ]
    },
    {
      title: 'E-Commerce & Photography',
      items: [
        {
          question: 'Do I need to ship my products to your studio?',
          answer: 'Yes, for product photography, you ship your products to our studio. We handle the shoot and ship them back to you once completed. This workflow is designed for remote international brands.'
        },
        {
          question: 'Are your photos Amazon compliant?',
          answer: 'Yes, every white background image we deliver is checked against Amazon\'s current compliance standards (RGB 255,255,255, 1000px+ resolution).'
        },
        {
          question: 'Do you offer 360° product photography?',
          answer: 'Yes, we produce fully interactive 360-degree product spins that integrate directly into Shopify and Amazon listings.'
        }
      ]
    }
  ];

  const filteredFaqs = faqCategories.map(category => ({
    ...category,
    items: category.items.filter(item => 
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
      item.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.items.length > 0);

  return (
    <div className="bg-neutral-50 min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-neutral-200 py-2 px-4 md:px-8">
        <div className="max-w-screen-2xl mx-auto text-[10px] md:text-xs text-neutral-400 flex items-center gap-2">
          <a href="#" className="text-[#1B3A6B] hover:underline">Home</a>
          <span>›</span>
          <span className="font-medium text-neutral-600">Frequently Asked Questions</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1B3A6B] via-[#0f2347] to-[#1a3a6b] py-16 px-4 md:px-8 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>
        <div className="max-w-3xl mx-auto relative z-10">
          <h1 className="font-condensed text-4xl md:text-5xl font-bold mb-6">How Can We Help You?</h1>
          <p className="text-lg text-white/80 mb-8">Search our comprehensive FAQ to find answers to common questions about our services and process.</p>
          
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" size={20} />
            <input 
              type="text" 
              placeholder="Search for questions..." 
              className="w-full bg-white text-neutral-800 pl-12 pr-4 py-4 rounded-full shadow-lg outline-none focus:ring-2 focus:ring-orange-500 transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <div className="max-w-4xl mx-auto py-16 px-4 md:px-8">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((category, idx) => (
            <div key={idx} className="mb-12">
              <h2 className="font-condensed text-2xl font-bold text-[#1B3A6B] mb-6 flex items-center gap-2">
                <HelpCircle className="text-orange-500" size={24} />
                {category.title}
              </h2>
              <div className="space-y-2">
                {category.items.map((item, i) => (
                  <FAQItem key={i} question={item.question} answer={item.answer} />
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12">
            <MessageCircle size={48} className="mx-auto text-neutral-300 mb-4" />
            <h3 className="text-xl font-bold text-[#1B3A6B] mb-2">No results found</h3>
            <p className="text-neutral-500">Try searching for different keywords or browse the categories below.</p>
            <button 
              onClick={() => setSearchTerm('')}
              className="mt-6 text-orange-500 font-bold hover:underline"
            >
              Clear Search
            </button>
          </div>
        )}

        {/* Contact CTA */}
        <div className="mt-16 bg-white p-8 rounded-xl border border-neutral-200 shadow-lg text-center">
          <h3 className="text-2xl font-bold text-[#1B3A6B] mb-4">Still have questions?</h3>
          <p className="text-neutral-600 mb-8">If you couldn't find the answer you were looking for, please feel free to contact us directly.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="mailto:contact@rajputsignature.com" className="flex items-center justify-center gap-2 bg-[#1B3A6B] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#152d55] transition-colors">
              <Mail size={18} /> Email Us
            </a>
            <a href="https://wa.me/yourphonenumber" target="_blank" className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#1fb855] transition-colors">
              <MessageCircle size={18} /> WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
