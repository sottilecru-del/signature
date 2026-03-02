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
  Phone,
  HelpCircle,
  ArrowRight,
  Mail,
  Calendar
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const FAQItem = ({ question, answer }: { question: string, answer: string, key?: React.Key }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-neutral-200 rounded-lg mb-3 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 text-left bg-white hover:bg-neutral-50 transition-colors"
      >
        <span className="text-sm font-bold text-[#1B3A6B] pr-4">{question}</span>
        <div className={`flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDown size={18} className="text-[#FF6B00]" />
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
            <div className="p-4 text-sm text-neutral-600 leading-relaxed bg-neutral-50 border-t border-neutral-100">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const SectionHeader = ({ id, title }: { id: string, title: string }) => (
  <div id={id} className="mb-8 scroll-mt-24">
    <div className="flex items-center gap-3 mb-2">
      <div className="h-px flex-1 bg-neutral-200"></div>
      <h2 className="text-2xl font-bold text-[#1B3A6B] whitespace-nowrap">{title}</h2>
      <div className="h-px flex-1 bg-neutral-200"></div>
    </div>
  </div>
);

export default function FAQPage() {
  const [mainFormSubmitted, setMainFormSubmitted] = useState(false);

  const sections = [
    {
      id: "general",
      title: "General Digital Marketing Questions",
      items: [
        {
          q: "What is digital marketing and why does my business need it?",
          a: "Digital marketing is the use of digital channels — search engines, paid ads, social media, email, and content — to attract, engage, and convert customers online. Every business that sells to customers in USA, UK, or Australia needs digital marketing because that is where buying decisions now begin. Whether someone is searching for a plumber in London, a lawyer in New York, or a skincare brand in Sydney, the businesses ranking and advertising at that moment capture the customer. Those that are not visible online lose those customers to competitors who are."
        },
        {
          q: "How much should a business spend on digital marketing?",
          a: "Industry benchmarks suggest allocating 7–10% of total revenue to marketing for established businesses, and 12–15% for businesses in growth or launch phases. Within that, digital marketing typically accounts for the majority of spend. For a service business generating $500,000 per year, a realistic digital marketing budget is $35,000–$75,000 annually across SEO, paid ads, content, and tools. The right split between channels depends on your industry, competition level, and how quickly you need results."
        },
        {
          q: "What is the difference between SEO and paid ads?",
          a: "SEO (Search Engine Optimisation) earns your website a position in Google's organic results over time through content, backlinks, and technical optimization. It is slower to build — typically 3–12 months before meaningful ranking — but once established, it generates traffic at a very low ongoing cost per lead. Paid ads (Google Ads, Meta Ads, LinkedIn Ads) deliver immediate visibility in exchange for a media budget. Stop paying and the traffic stops. Used together, paid ads generate leads while your SEO builds."
        },
        {
          q: "How long does digital marketing take to show results?",
          a: "It depends on the channel. Google Ads can generate enquiries within 24–48 hours of launch if campaigns are set up correctly. SEO typically takes 3–6 months to begin producing meaningful organic traffic and 6–12 months to reach page one for competitive terms. GMB ranking improvement is typically visible within 30–60 days. Meta Ads and LinkedIn Ads usually show early data within the first two weeks, with optimized performance emerging by weeks 4–6. AI CRM improvements to lead conversion are usually measurable within the first 30 days."
        },
        {
          q: "Is it better to hire an in-house marketer or a digital marketing agency?",
          a: "For most small to mid-size businesses in USA, UK, and Australia, an agency delivers better ROI than a single in-house hire at the equivalent cost. A $5,000/month agency relationship gives you access to specialists in SEO, paid ads, content, CRM, and analytics simultaneously. A $5,000/month in-house hire gives you one generalist who must cover all of those areas alone. The exception is large businesses with high content volume requirements or those needing daily real-time campaign management."
        },
        {
          q: "What digital marketing channels work best for businesses targeting USA and UK?",
          a: "For B2C service businesses in USA and UK: Google Ads, Google Business Profile ranking, and Meta Ads are the three highest-ROI starting points. For B2B businesses targeting USA and UK: LinkedIn Ads, Google Ads, and email marketing are most effective. For e-commerce brands targeting these markets: Google Shopping, Meta Ads, and SEO are the core three. In Australia, the same channels apply with slightly higher weighting toward Google over Meta due to audience platform preferences."
        },
        {
          q: "What is a realistic ROI from digital marketing?",
          a: "A well-managed digital marketing program targeting USA, UK, or Australian markets typically delivers a return on marketing investment (ROMI) of 3:1 to 8:1 depending on industry and channel mix. Google Ads for high-intent service businesses often achieve ROAS (return on ad spend) of 4× to 8×. SEO typically delivers a cost per lead 60–80% lower than paid channels once it is established. GMB optimization for local service businesses commonly produces a 3× to 5× increase in inbound calls."
        }
      ]
    },
    {
      id: "seo",
      title: "SEO Service Questions",
      items: [
        {
          q: "What is SEO and how does it work?",
          a: "SEO (Search Engine Optimisation) is the process of improving your website's visibility in Google's unpaid search results. It works by helping Google understand what your website is about, establishing that it is authoritative and trustworthy, and ensuring it answers the specific questions your target customers are searching for. SEO has three core components: technical SEO (site speed, crawlability, mobile performance), on-page SEO (content, keyword targeting, structure), and off-page SEO (backlinks, brand mentions, trust signals)."
        },
        {
          q: "How long does SEO take to work?",
          a: "Most businesses targeting competitive keywords in USA, UK, or Australia begin seeing meaningful movement in rankings within 3–6 months of consistent, well-executed SEO work. Page one rankings for moderately competitive terms are typically achievable within 6–9 months. Highly competitive terms — legal, financial, healthcare, real estate — can take 12–18 months. Long-tail and local keywords move faster, often within 60–90 days."
        },
        {
          q: "What are the most important SEO ranking factors in 2025?",
          a: "The most impactful ranking factors in 2025 are: E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) signals in your content; high-quality backlinks from relevant, authoritative websites; technical performance including Core Web Vitals, mobile experience, and page speed; content depth and topical authority; and user engagement signals including click-through rate, time on page, and bounce rate."
        },
        {
          q: "What is the difference between on-page and off-page SEO?",
          a: "On-page SEO refers to everything you control directly on your own website — keyword targeting, content quality, site architecture, etc. Off-page SEO refers to authority signals from outside your website — primarily backlinks from other websites, brand mentions, social signals, and your Google Business Profile strength. Both are essential. A technically perfect website with no backlinks will struggle to rank in competitive markets."
        },
        {
          q: "Can a business based in India rank on Google in USA, UK, and Australia?",
          a: "Yes, with the right strategy. Geographic location of a business does not prevent ranking in international markets for non-local search terms. What matters is: your domain's target market signals (hreflang tags, content written for the target audience), the quality and authority of your content, and backlinks from websites in the target market. For local searches, you need a verifiable presence in that location, achievable through Google Business Profile setup."
        },
        {
          q: "What is E-E-A-T and why does it matter for SEO?",
          a: "E-E-A-T stands for Experience, Expertise, Authoritativeness, and Trustworthiness. It is the framework Google's quality raters use to evaluate whether content deserves to rank highly. Experience refers to first-hand knowledge. Expertise refers to subject matter depth. Authoritativeness refers to recognition from other credible sources. Trustworthiness refers to signals of legitimacy. For service businesses, building E-E-A-T through real case studies and testimonials is a high-impact investment."
        }
      ]
    },
    {
      id: "google-ads",
      title: "Google Ads Questions",
      items: [
        {
          q: "How much does Google Ads cost for a small business in USA or UK?",
          a: "There is no fixed minimum spend, but businesses targeting USA or UK markets typically need a minimum of $500–$1,000 per month in ad spend to gather enough data to optimize effectively. For competitive industries like legal or home services, budgets of $2,000–$5,000 per month are more realistic starting points. Cost per click varies enormously by industry — from $1–$3 for low-competition e-commerce terms to $50–$100+ per click for legal or financial services keywords."
        },
        {
          q: "What is a good ROAS for Google Ads?",
          a: "ROAS (Return on Ad Spend) is the revenue generated for every dollar spent on ads. A ROAS of 4× means $1 in ad spend generates $4 in revenue. What counts as good depends entirely on your profit margin. For e-commerce businesses with 30–40% margins, a ROAS of 4× is typically the break-even point. For service businesses measuring by lead value, cost per lead (CPL) is more relevant than ROAS."
        },
        {
          q: "What is the difference between Google Search Ads and Google Display Ads?",
          a: "Google Search Ads appear in Google's search results when someone types a specific query. They target intent — the person is actively looking for what you offer. Google Display Ads appear as banners or images on websites across Google's Display Network. They target audiences by demographics and interests rather than search intent. Search Ads typically produce leads faster, while Display Ads are better for brand awareness and retargeting."
        },
        {
          q: "What is Performance Max and should my business use it?",
          a: "Performance Max (PMax) is Google's fully automated campaign type that runs across all Google channels simultaneously. It uses Google's AI to determine the best channels and bids. PMax is powerful when you have sufficient conversion data (at least 30–50 conversions per month), strong creative assets, and clear conversion tracking. It works best alongside standard Search campaigns, especially for businesses with complex lead generation."
        },
        {
          q: "How do I know if my Google Ads are working?",
          a: "The primary indicators are: cost per lead (CPL) is within a range that makes business sense; conversion tracking is recording actual enquiries or purchases; ROAS is above your break-even threshold; impression share on key keywords is above 60%; and Quality Scores are 7 or above. Vanity metrics like impressions and clicks tell you very little on their own if they don't lead to actual revenue."
        },
        {
          q: "What is Quality Score in Google Ads and why does it matter?",
          a: "Quality Score is Google's 1–10 rating of how relevant your ads, keywords, and landing pages are to the person searching. A higher Quality Score reduces your cost per click — a Quality Score of 10 can reduce CPC by up to 50% compared to a Quality Score of 3. It is determined by expected click-through rate, ad relevance, and landing page experience. Improving Quality Score is one of the highest-ROI optimisations available."
        }
      ]
    },
    {
      id: "paid-media",
      title: "Paid Media & Social Advertising Questions",
      items: [
        {
          q: "What is the difference between Google Ads and Meta Ads?",
          a: "Google Ads captures demand — it puts your business in front of people who are actively searching. Meta Ads (Facebook and Instagram) creates demand — it puts your product or service in front of people who fit your target audience profile. Google Ads typically produces faster lead generation for service businesses, while Meta Ads works better for e-commerce, brand awareness, and reaching audiences before the search stage."
        },
        {
          q: "How much should I spend on Facebook and Instagram Ads?",
          a: "For businesses just starting Meta Ads targeting USA or UK, $500–$1,500 per month is a realistic testing budget. For meaningful scale, $2,000–$5,000 per month is more appropriate. Meta's algorithm needs sufficient spend to exit the learning phase — typically 50 conversions within a 7-day window per ad set. Spending too little means the algorithm never learns your best audience."
        },
        {
          q: "What is retargeting and why is it important?",
          a: "Retargeting (or remarketing) is showing ads specifically to people who have already visited your website or engaged with your brand. These audiences are significantly more likely to convert than cold audiences. Retargeting typically delivers the highest ROAS of any ad campaign type — often 3× to 5× the ROAS of cold audience campaigns. It can recover 15–30% of visitors who left without converting."
        },
        {
          q: "What is ROAS and what is a good ROAS for Facebook Ads?",
          a: "ROAS stands for Return on Ad Spend. For Facebook and Instagram Ads targeting USA and UK e-commerce brands, a ROAS above 2.5× is generally considered break-even, and above 4× is considered healthy. For service businesses, cost per lead (CPL) is more useful. What constitutes a good CPL depends on your average client value — a business with a $10,000 client value can profitably acquire leads at a higher CPL."
        },
        {
          q: "What type of businesses get the best results from paid media advertising?",
          a: "Service businesses with a defined target audience and a clear offer consistently achieve strong results. Verticals with the strongest ROI include: legal services, home improvement, healthcare, financial services, B2B professional services, SaaS, and e-commerce brands with proven product-market fit. Businesses that struggle typically have an unclear offer, a non-converting landing page, or a weak follow-up process."
        }
      ]
    },
    {
      id: "gmb",
      title: "Google Business Profile & GMB Ranking Questions",
      items: [
        {
          q: "What is Google Business Profile and why does it matter?",
          a: "Google Business Profile (formerly GMB) is the free listing that appears in Google Search and Maps. For local service businesses in USA, UK, and Australia, it often generates more inbound leads than the website itself — particularly through the local 3-pack. A fully optimized profile is one of the highest-ROI digital marketing activities available to local service businesses."
        },
        {
          q: "How long does it take to rank in the Google Maps local 3-pack?",
          a: "For businesses with no prior optimization and moderate competition, meaningful ranking improvement is typically visible within 30–60 days. Reaching the top 3 positions usually takes 60–90 days with consistent, expert optimization work. In highly competitive markets, it can take 4–6 months. Speed depends on profile completeness, review quality, citation consistency, and local backlinks."
        },
        {
          q: "What are the most important factors for ranking in Google Maps?",
          a: "The three primary categories are relevance (matching the search), distance (proximity to the searcher), and prominence (trust and authority). Highest-impact factors include: keyword optimization of business description and services, volume and recency of Google reviews, NAP consistency across directories, regular photo uploads, and the strength of your website's local SEO."
        },
        {
          q: "How many Google reviews do I need to rank in the 3-pack?",
          a: "There is no fixed number — it depends on your competitors. Review recency is as important as total count. A business with 50 reviews from 2 years ago is outperformed by a business with 30 reviews from the last 3 months. An ongoing review generation strategy — systematically asking every satisfied customer for a review — is essential for maintaining local ranking."
        },
        {
          q: "What is NAP consistency and why does it affect GMB ranking?",
          a: "NAP stands for Name, Address, and Phone Number. Consistency means this data is identical across every online platform. Inconsistent NAP data — different phone numbers or abbreviated street names — sends conflicting signals to Google about the legitimacy of your business. This weakens your local authority and directly harms your Google Maps ranking. A citation audit is a critical first step."
        },
        {
          q: "Can I rank on Google Maps in USA or UK without a physical address there?",
          a: "For service-area businesses, Google allows you to hide your address and list service areas. You can rank within those areas without displaying a physical address. However, for map visibility in a specific city you are not physically located in, ranking is considerably harder. A registered local address or virtual office in the target city is the most effective solution for international targeting."
        },
        {
          q: "What is the difference between GMB ranking and local SEO?",
          a: "GMB ranking specifically refers to your position in Google Maps and the local 3-pack. Local SEO is a broader discipline that includes GMB optimization but also encompasses your website's local keyword targeting, content, and backlink acquisition. The two work together: a strong website with local SEO signals supports your GMB ranking, and a strong GMB profile drives traffic to your website."
        }
      ]
    },
    {
      id: "aicrm",
      title: "AI CRM & Sales Automation Questions",
      items: [
        {
          q: "What is an AI CRM and how is it different from a regular CRM?",
          a: "A traditional CRM is a digital filing cabinet. An AI CRM actively works your leads for you — responding to enquiries instantly, qualifying leads through automated conversations, scoring leads, triggering personalised follow-ups, and flagging deals that need human attention. Businesses using AI CRMs typically convert 2–3 times more leads from the same volume of enquiries compared to manual processes."
        },
        {
          q: "Which CRM is best for a small service business in USA or UK?",
          a: "For most service businesses, GoHighLevel is the strongest option — combining CRM, email, SMS, calendar, and funnel builder under one flat price. For B2B businesses with longer sales cycles, HubSpot is often better for sales and marketing alignment. For budget-conscious teams, Zoho CRM offers strong AI features. The right choice depends on your lead volume, team size, and sales process complexity."
        },
        {
          q: "What is GoHighLevel and is it worth it?",
          a: "GoHighLevel is an all-in-one marketing and CRM platform. At $97–$297 per month, it offers functionality that would cost $1,500–$3,000 to replicate across separate tools. It is worth it for service businesses that need automation across multiple channels. However, it is complex to configure correctly — professional setup is what turns the software cost into a genuine revenue asset."
        },
        {
          q: "What is speed to lead and why does it matter for my business?",
          a: "Speed to lead refers to how quickly you respond to a new enquiry. Research shows that businesses responding within 5 minutes are significantly more likely to convert a lead than those responding after 30 minutes. Most businesses without automation respond in hours, losing leads to faster competitors. AI automation solves this by sending an immediate, personalised response 24/7."
        },
        {
          q: "How much does CRM setup cost for a small business?",
          a: "Professional CRM setup from a specialist agency in USA or UK typically ranges from $2,000–$15,000. Our service starts at $399 for setup plus $149/month for ongoing support — positioned to deliver mid-market agency quality at a fraction of the typical cost for businesses in USA, UK, and Australia."
        },
        {
          q: "What automations should every service business have in their CRM?",
          a: "Every service business should have: instant lead response; multi-step follow-up sequence (at least 5 touchpoints); appointment reminders; re-engagement for cold leads; post-service review requests; and win-back sequences for past clients. These automations alone are responsible for the majority of the additional revenue our clients generate in the first 90 days."
        },
        {
          q: "Is GDPR a concern with AI CRM and marketing automation?",
          a: "Yes, especially for businesses in the UK and EU. GDPR requires a lawful basis for processing data and explicit consent for marketing. Your CRM must have proper opt-in mechanisms, unsubscribe options, and data retention policies. All systems we build for UK/EU markets are configured with GDPR compliance as a foundation, including consent management and audit trails."
        }
      ]
    },
    {
      id: "photography",
      title: "Product Photography Questions",
      items: [
        {
          q: "How much does professional product photography cost in USA and UK?",
          a: "US-based studios charge ~$39–$50 per image for white background and $95–$150 for lifestyle. UK agencies typically charge £1,000–£10,000 per shoot. Our pricing starts at $249 for up to 10 products — significantly below Western rates while delivering fully compliant, professionally retouched images. Our Growth Pack at $549 covers 30 products, comparing favourably to $1,500+ elsewhere."
        },
        {
          q: "What type of product photos does Amazon require?",
          a: "Amazon requires pure white backgrounds (RGB 255, 255, 255), minimum 1,000px resolution (2,500px recommended), and the product occupying 85% of the frame. Secondary images can show angles, lifestyle contexts, infographics, or scale comparisons. Listings using all 9 image slots with a mix of styles consistently outperform those using fewer images. We check every image against these rules."
        },
        {
          q: "What image size is required for Shopify product photos?",
          a: "Shopify recommends 2,048 x 2,048 pixels for crisp zoom, supporting up to 5,000px and 20MB. In practice, 2,048px at a resolution that keeps file size below 1MB provides the best balance of quality and speed. Slow-loading pages increase bounce rates, so optimization is as important as resolution. We deliver all Shopify images in optimised formats ready to upload."
        },
        {
          q: "What is white background product photography and why do I need it?",
          a: "It isolates your product against a clean, pure white backdrop, removing all distractions. It is the standard required by Amazon, Walmart, and Google Shopping. Beyond compliance, it builds trust by showing the product clearly and is the most versatile image type — usable across every digital channel from your website to paid ads."
        },
        {
          q: "What is the difference between lifestyle photography and white background photography?",
          a: "White background photography shows the product in isolation (what it is). Lifestyle photography shows the product being used in a real-world context (telling a story). White background images satisfy analytical information-seeking, while lifestyle images create emotional resonance. The most effective listings use both to satisfy different parts of the purchase decision."
        },
        {
          q: "How many product images do I need for an Amazon listing?",
          a: "Amazon allows up to 9 and encourages using all slots. A best-practice set includes: one white background main image; two to three additional angles; two lifestyle images; one scale comparison; one infographic; and one A-plus style image. Listings using all 9 slots generate higher click-through and conversion rates. We build complete 9-image sets as standard in our higher packs."
        },
        {
          q: "Can I ship my products to you from USA, UK, or Australia for photography?",
          a: "Yes. Our workflow is designed for remote brands. You ship products to our studio by international courier (5–10 days from USA/UK/AU). Products are insured while in our care and returned by tracked courier after the shoot. The remote shipping workflow is built into our standard process for all international clients."
        },
        {
          q: "What is ghost mannequin photography for clothing?",
          a: "It's a technique where garments are photographed on a mannequin which is then digitally removed, leaving the garment looking as though it's worn by an invisible figure. This gives clothing a 3D, structured appearance that flat lays cannot achieve, at a lower cost than model photography. It's the standard for clothing listings on Amazon and Shopify."
        },
        {
          q: "Do product images affect SEO as well as conversion rates?",
          a: "Yes. For SEO, they affect Google Image Search traffic and page load speed (a direct ranking factor). For conversion, studies show that image quality and variety are top factors influencing purchase decisions. Investing in professional photography improves both your search visibility and the proportion of visitors who convert into buyers."
        }
      ]
    },
    {
      id: "working-with-us",
      title: "Working With Us — Common Questions",
      items: [
        {
          q: "Do you work with businesses outside India?",
          a: "Yes — exclusively. We focus entirely on USA, UK, Australia, Canada, Bangladesh, and other high-value international markets. Every service we offer is built around the specific platforms, buyer behaviour, and compliance requirements of these markets. We do not serve the Indian domestic market, allowing us to develop deeper expertise in international markets."
        },
        {
          q: "How do I know which services my business needs?",
          a: "If you need leads immediately: start with Google Ads or paid social. To reduce long-term cost per lead: invest in SEO. For local visibility in USA/UK/AU: GMB optimization is the highest-ROI step. To stop losing leads: AI CRM setup. For online product sales: professional photography. We offer a free strategy call to assess your situation and recommend the highest-priority starting point."
        },
        {
          q: "Do you require long-term contracts?",
          a: "No. All our services operate on monthly agreements. We do not lock clients into long-term contracts because our continued business depends on delivering results. We ask for a minimum of 3 months on SEO only because it takes time to produce results. All other services are month-to-month with 30 days notice required to cancel."
        },
        {
          q: "How do you report on performance and keep clients informed?",
          a: "Every client receives a live reporting dashboard showing real-time performance. Google Ads and paid media clients get weekly summaries and monthly strategy calls. SEO clients get monthly rank tracking. GMB clients get monthly geo-grid reports. AI CRM clients get monthly pipeline reports. All reports are written in plain English — no jargon."
        },
        {
          q: "What makes Rajput Signature different from other digital marketing agencies?",
          a: "Three things: First, international market specialisation built around high-value markets. Second, full-stack integration — your ads, SEO, CRM, and photography all work as one connected system. Third, pricing that competes — we deliver mid-to-large agency quality at pricing accessible to growing businesses by operating lean."
        }
      ]
    }
  ];

  const jumpLinks = sections.map(s => ({ id: s.id, title: s.title.split(' Questions')[0].split(' — ')[0] }));

  return (
    <div className="bg-neutral-50 min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-neutral-200 py-2 px-4 md:px-8">
        <div className="max-w-screen-2xl mx-auto text-[10px] md:text-xs text-neutral-400 flex items-center gap-2">
          <a href="#" className="text-[#1B3A6B] hover:underline">Home</a>
          <span>›</span>
          <span className="font-medium text-neutral-600">Digital Marketing FAQ</span>
        </div>
      </div>

      {/* Page Hero */}
      <section className="relative bg-gradient-to-br from-[#1B3A6B] via-[#0f2347] to-[#1a3a6b] py-20 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M0 0h80v80H0V0zm20 20v40h40V20H20zm20 35a15 15 0 1 1 0-30 15 15 0 0 1 0 30z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/40 text-orange-200 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
              <HelpCircle size={14} />
              Knowledge Base
            </div>
            <h1 className="font-condensed text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Digital Marketing FAQ — <span className="text-orange-400">Every Question Answered</span>
            </h1>
            <p className="text-lg text-white/80 mb-10 leading-relaxed">
              You have questions. We have straight answers. This page covers everything businesses in USA, UK, Australia, Canada, and Bangladesh ask us before working with a digital marketing agency — from how long SEO takes to rank, to what product photography costs, to whether an AI CRM is worth the investment. No jargon. No sales pitch. Just clear, honest answers.
            </p>
            
            {/* Jump Links */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              <span className="text-white/60 text-xs font-bold uppercase tracking-wider w-full mb-2">Jump to:</span>
              {jumpLinks.map((link, idx) => (
                <a 
                  key={idx}
                  href={`#${link.id}`}
                  className="bg-white/10 hover:bg-white/20 border border-white/20 text-white text-[10px] md:text-xs font-bold px-4 py-2 rounded-full transition-all hover:scale-105"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content Section */}
      <div className="max-w-screen-2xl mx-auto py-16 px-4 md:px-8">
        <div className="grid lg:grid-cols-[1fr_350px] gap-12">
          
          {/* Main FAQ Area */}
          <main className="space-y-16">
            {sections.map((section) => (
              <div key={section.id}>
                <SectionHeader id={section.id} title={section.title} />
                <div className="grid md:grid-cols-2 gap-4">
                  {section.items.map((item, idx) => (
                    <FAQItem key={idx} question={item.q} answer={item.a} />
                  ))}
                </div>
              </div>
            ))}

            {/* Closing CTA Section */}
            <div className="bg-gradient-to-br from-[#1B3A6B] to-[#0f2347] rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-4">Still Have Questions? Let's Talk.</h2>
                <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                  If your question is not answered above, or you want a specific answer tailored to your business and target market, book a free 30-minute strategy call. We will review your current digital marketing position and give you a clear, honest picture of what results are realistic for your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <button className="bg-[#FF6B00] hover:bg-[#e66000] text-white font-bold px-8 py-4 rounded-xl transition-all flex items-center gap-2 shadow-lg shadow-orange-900/20">
                    <Calendar size={20} />
                    Book a Free Strategy Call
                  </button>
                  <button className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-8 py-4 rounded-xl transition-all flex items-center gap-2">
                    See All Our Services <ArrowRight size={20} />
                  </button>
                </div>
                
                <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="flex flex-col items-center">
                    <Globe className="text-orange-400 mb-2" size={24} />
                    <span className="text-[10px] uppercase tracking-widest text-white/60">Serving</span>
                    <span className="text-xs font-bold">USA, UK, AU, CA, BD</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Clock className="text-orange-400 mb-2" size={24} />
                    <span className="text-[10px] uppercase tracking-widest text-white/60">Response Time</span>
                    <span className="text-xs font-bold">Within 4 Hours</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <ShieldCheck className="text-orange-400 mb-2" size={24} />
                    <span className="text-[10px] uppercase tracking-widest text-white/60">Contract</span>
                    <span className="text-xs font-bold">No Commitment</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Star className="text-orange-400 mb-2" size={24} />
                    <span className="text-[10px] uppercase tracking-widest text-white/60">Consultation</span>
                    <span className="text-xs font-bold">Free Strategy Call</span>
                  </div>
                </div>
              </div>
            </div>
          </main>

          {/* Sidebar */}
          <aside className="space-y-8">
            <div className="bg-white border border-neutral-200 rounded-2xl p-6 sticky top-24 shadow-sm">
              <h3 className="text-lg font-bold text-[#1B3A6B] mb-4 flex items-center gap-2">
                <Mail size={20} className="text-[#FF6B00]" />
                Get a Custom Audit
              </h3>
              <p className="text-xs text-neutral-500 mb-6">
                Want to know how your specific business can grow in the USA, UK, or Australia? Enter your details for a free audit.
              </p>
              
              {!mainFormSubmitted ? (
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setMainFormSubmitted(true); }}>
                  <div>
                    <label className="block text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-1">Full Name</label>
                    <input type="text" className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#FF6B00] transition-colors" placeholder="John Doe" required />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-1">Work Email</label>
                    <input type="email" className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#FF6B00] transition-colors" placeholder="john@company.com" required />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-1">Website URL</label>
                    <input type="url" className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#FF6B00] transition-colors" placeholder="https://yourwebsite.com" required />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-1">Target Market</label>
                    <select className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#FF6B00] transition-colors">
                      <option>USA</option>
                      <option>UK</option>
                      <option>Australia</option>
                      <option>Canada</option>
                      <option>Bangladesh</option>
                    </select>
                  </div>
                  <button type="submit" className="w-full bg-[#1B3A6B] hover:bg-[#142d54] text-white font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                    Send My Free Audit <ArrowRight size={18} />
                  </button>
                </form>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check size={32} />
                  </div>
                  <h4 className="font-bold text-[#1B3A6B] mb-2">Audit Request Sent!</h4>
                  <p className="text-xs text-neutral-500">We'll analyze your site and get back to you within 4 business hours.</p>
                </motion.div>
              )}
            </div>

            <div className="bg-[#1B3A6B] rounded-2xl p-6 text-white">
              <h4 className="font-bold text-xs uppercase tracking-widest mb-4 text-orange-400">Related Services</h4>
              <ul className="space-y-3">
                {[
                  { name: 'SEO Services', icon: <Search size={14} /> },
                  { name: 'Google Ads Management', icon: <Target size={14} /> },
                  { name: 'GMB Ranking Optimization', icon: <MapPin size={14} /> },
                  { name: 'AI CRM Solutions', icon: <Zap size={14} /> },
                  { name: 'Product Photography', icon: <ShoppingCart size={14} /> }
                ].map((link, i) => (
                  <li key={i}>
                    <a href="#" className="text-xs text-white/70 hover:text-white flex items-center gap-3 transition-colors group">
                      <span className="text-orange-500 group-hover:translate-x-1 transition-transform">{link.icon}</span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>

      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": sections.flatMap(s => s.items.map(item => ({
            "@type": "Question",
            "name": item.q,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": item.a
            }
          })))
        })}
      </script>
    </div>
  );
}
