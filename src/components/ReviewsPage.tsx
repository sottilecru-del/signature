import React, { useState } from 'react';
import { 
  Star, 
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
  Quote,
  Play,
  UserCheck,
  TrendingUp,
  Award,
  ThumbsUp
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const ReviewCard = ({ name, role, loc, text, initials, rating = 5 }: { name: string, role: string, loc: string, text: string, initials: string, rating?: number, key?: any }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white p-8 rounded-lg border border-neutral-200 shadow-sm hover:shadow-md transition-shadow"
  >
    <div className="flex gap-1 text-[#FF6B00] mb-6">
      {[...Array(rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
    </div>
    <div className="relative">
      <Quote className="absolute -top-4 -left-4 text-neutral-100" size={40} />
      <p className="text-neutral-600 italic mb-8 leading-relaxed relative z-10">"{text}"</p>
    </div>
    <div className="flex items-center gap-4 pt-6 border-t border-neutral-100">
      <div className="w-12 h-12 bg-[#1B3A6B] rounded-full flex items-center justify-center text-white font-bold text-lg">
        {initials}
      </div>
      <div>
        <div className="font-bold text-[#1B3A6B]">{name}</div>
        <div className="text-[10px] text-neutral-400 font-bold uppercase tracking-widest">{role} • {loc}</div>
      </div>
    </div>
  </motion.div>
);

const CaseStudy = ({ title, results, industry, description }: { title: string, results: string[], industry: string, description: string, key?: any }) => (
  <div className="bg-white rounded-lg border border-neutral-200 overflow-hidden shadow-sm hover:border-orange-200 transition-colors">
    <div className="bg-[#1B3A6B] p-4 text-white">
      <div className="text-[10px] font-bold uppercase tracking-widest text-orange-400 mb-1">{industry}</div>
      <h3 className="font-bold text-sm">{title}</h3>
    </div>
    <div className="p-6">
      <p className="text-xs text-neutral-500 mb-6 leading-relaxed">{description}</p>
      <div className="space-y-3">
        {results.map((res, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="w-5 h-5 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0">
              <TrendingUp size={12} className="text-green-600" />
            </div>
            <span className="text-xs font-bold text-neutral-700">{res}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default function ReviewsPage() {
  const [submitted, setSubmitted] = useState(false);

  const reviews = [
    { 
      name: 'James Mitchell', 
      role: 'E-commerce Owner', 
      loc: 'Texas, USA', 
      text: 'We went from page 4 to position 2 for our main keyword in the USA within five months. Methodical, transparent, and they actually explained what they were doing at every step. Highly recommended.',
      initials: 'JM'
    },
    { 
      name: 'Sarah Bennett', 
      role: 'Marketing Director', 
      loc: 'London, UK', 
      text: 'Our cost per lead dropped by 38% in the first two months. They restructured our entire Google Ads account and the quality of leads improved dramatically. We are getting fewer tyre-kickers and more genuine buyers.',
      initials: 'SB'
    },
    { 
      name: 'Raj Kumar', 
      role: 'SaaS Founder', 
      loc: 'Sydney, Australia', 
      text: 'The CRM automation they built for us is remarkable. Leads that used to go cold are now nurtured automatically and our sales team closes more deals with significantly less manual effort. Genuinely changed how we operate.',
      initials: 'RK'
    },
    { 
      name: 'David Wilson', 
      role: 'Law Firm Partner', 
      loc: 'Melbourne, AU', 
      text: 'Our GMB ranking was non-existent. Within 90 days, we were in the top 3 for every major local search. The citation building and review strategy they implemented worked exactly as promised.',
      initials: 'DW'
    },
    { 
      name: 'Emma Thompson', 
      role: 'Retail Brand Manager', 
      loc: 'Toronto, Canada', 
      text: 'The product photography they delivered for our Amazon listings was world-class. Our conversion rate increased from 8% to 14% almost overnight. They understand marketplace compliance perfectly.',
      initials: 'ET'
    },
    { 
      name: 'Michael Chen', 
      role: 'Tech Startup CEO', 
      loc: 'California, USA', 
      text: 'Finding an agency that understands the technical side of AI and the creative side of marketing is rare. Rajput Signature is that agency. They automated our entire outreach system.',
      initials: 'MC'
    }
  ];

  const caseStudies = [
    {
      industry: 'E-Commerce (USA)',
      title: 'Scaling a Home Decor Brand from $10K to $85K Monthly',
      description: 'A Texas-based brand struggling with high ad costs and stagnant organic growth.',
      results: ['640% Increase in Organic Traffic', '42% Reduction in CPA', 'Page 1 Rankings for 12 High-Volume Keywords']
    },
    {
      industry: 'Legal Services (Australia)',
      title: 'Dominating Local Search for a Melbourne Family Law Firm',
      description: 'A firm that was invisible on Google Maps and relying solely on expensive word-of-mouth.',
      results: ['Top 3 GMB Ranking in 78 Days', '215% Increase in Phone Calls', '100% Automated Lead Follow-up']
    },
    {
      industry: 'B2B SaaS (UK)',
      title: 'Generating 40+ Qualified Demo Requests Monthly',
      description: 'A London software company with a great product but zero visibility among decision-makers.',
      results: ['LinkedIn Ads ROI of 4.2x', 'Topical Authority Built in 6 Months', 'CRM Automation Saving 15 Hours/Week']
    }
  ];

  return (
    <div className="bg-neutral-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-neutral-200 py-2 px-4 md:px-8">
        <div className="max-w-screen-2xl mx-auto text-[10px] md:text-xs text-neutral-400 flex items-center gap-2">
          <a href="#" className="text-[#1B3A6B] hover:underline">Home</a>
          <span>›</span>
          <span className="font-medium text-neutral-600">Client Reviews & Success Stories</span>
        </div>
      </div>

      {/* Page Hero */}
      <section className="relative bg-gradient-to-br from-[#1B3A6B] via-[#0f2347] to-[#1a3a6b] py-16 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M0 0h80v80H0V0zm20 20v40h40V20H20zm20 35a15 15 0 1 1 0-30 15 15 0 0 1 0 30z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>
        
        <div className="max-w-screen-2xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/40 text-orange-200 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
              <Star size={12} className="fill-orange-400 text-orange-400" />
              4.9/5 Average Rating from 150+ Clients
            </div>
            <h1 className="font-condensed text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Real Results for Real Businesses in <br />
              <span className="text-orange-400">USA, UK & Australia</span>
            </h1>
            <p className="text-lg text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed">
              We don't just deliver reports; we deliver revenue. Explore the stories of businesses that have scaled their visibility, leads, and sales through our methodical, transparent approach to digital marketing.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-[#FF6B00] text-white px-8 py-3 rounded font-bold text-sm hover:bg-[#e05e00] transition-colors shadow-lg flex items-center gap-2">
                <Rocket size={18} /> Start Your Success Story
              </button>
              <button className="bg-white/10 border border-white/20 text-white px-8 py-3 rounded font-bold text-sm hover:bg-white/20 transition-colors flex items-center gap-2">
                View Case Studies <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-orange-50 border-b border-orange-100 py-3 px-4 md:px-8 overflow-hidden">
        <div className="max-w-screen-2xl mx-auto flex items-center gap-8">
          <span className="bg-orange-500 text-white text-[10px] font-bold px-2 py-0.5 rounded flex-shrink-0">AWARDS</span>
          <div className="flex-1 overflow-hidden">
            <div className="flex gap-12 whitespace-nowrap animate-marquee">
              {[
                'Top Rated SEO Agency 2025',
                'Google Ads Certified Partner',
                'Meta Business Partner',
                '150+ Five-Star Reviews',
                '98% Client Retention Rate',
                'Results-Driven Methodology'
              ].map((item, i) => (
                <span key={i} className="text-xs text-neutral-600 flex items-center gap-2">
                  <Award size={14} className="text-orange-500" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-screen-2xl mx-auto py-20 px-4 md:px-8">
        {/* Video Testimonial Placeholder */}
        <section className="mb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 text-orange-500 text-[10px] font-bold uppercase tracking-widest mb-2">
                <Play size={14} fill="currentColor" />
                Video Testimonials
              </div>
              <h2 className="font-condensed text-3xl md:text-4xl font-bold text-[#1B3A6B] mb-6">
                Hear Directly From the Business Owners We Help Every Day
              </h2>
              <p className="text-neutral-600 mb-8 leading-relaxed">
                Transparency is at the core of everything we do. We asked our clients to share their honest experience working with Rajput Signature — from the initial strategy call to the long-term results we've achieved together.
              </p>
              <div className="space-y-4">
                {[
                  'How we fixed their technical SEO issues',
                  'The impact of AI CRM on their sales process',
                  'Why they chose us over local USA/UK agencies',
                  'The ROI they are seeing month-over-month'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm font-bold text-[#1B3A6B]">
                    <Check size={18} className="text-green-600" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative group cursor-pointer">
              <div className="aspect-video bg-neutral-200 rounded-xl overflow-hidden shadow-2xl relative">
                <img 
                  src="https://picsum.photos/seed/agency-office/1200/800" 
                  alt="Video Thumbnail" 
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform">
                    <Play size={32} fill="currentColor" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                  <div className="font-bold">Mark Sullivan</div>
                  <div className="text-xs opacity-80">CEO, Sullivan Home Services (Texas, USA)</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 text-orange-500 text-[10px] font-bold uppercase tracking-widest mb-2">
              <BarChart3 size={14} />
              Success Stories
            </div>
            <h2 className="font-condensed text-3xl md:text-4xl font-bold text-[#1B3A6B]">
              Deep Dives: How We Solve Complex Marketing Challenges
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, i) => (
              <CaseStudy 
                key={i} 
                title={study.title}
                results={study.results}
                industry={study.industry}
                description={study.description}
              />
            ))}
          </div>
        </section>

        {/* Reviews Grid */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 text-orange-500 text-[10px] font-bold uppercase tracking-widest mb-2">
              <Star size={14} fill="currentColor" />
              Client Feedback
            </div>
            <h2 className="font-condensed text-3xl md:text-4xl font-bold text-[#1B3A6B]">
              What Our Clients Are Saying Globally
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <ReviewCard 
                key={i} 
                name={review.name}
                role={review.role}
                loc={review.loc}
                text={review.text}
                initials={review.initials}
              />
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-[#1B3A6B] rounded-2xl p-12 text-white mb-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
          
          <div className="grid md:grid-cols-4 gap-12 text-center relative z-10">
            {[
              { num: '150+', label: 'Happy Clients' },
              { num: '98%', label: 'Retention Rate' },
              { num: '200+', label: 'Page 1 Rankings' },
              { num: '4.9/5', label: 'Average Rating' }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl md:text-5xl font-bold text-orange-400 font-condensed mb-2">{stat.num}</div>
                <div className="text-xs uppercase tracking-widest text-white/60 font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Review Submission CTA */}
        <section className="max-w-4xl mx-auto">
          <div className="bg-white p-10 rounded-xl border border-neutral-200 shadow-xl text-center">
            <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <ThumbsUp size={32} className="text-orange-500" />
            </div>
            <h2 className="font-condensed text-3xl font-bold text-[#1B3A6B] mb-4">
              Ready to Be Our Next Success Story?
            </h2>
            <p className="text-neutral-600 mb-10 leading-relaxed">
              We are currently accepting a limited number of new clients for the USA, UK, and Australian markets. Book your free 30-minute strategy call today and let's discuss how we can scale your business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-[#FF6B00] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#e05e00] transition-all hover:scale-105 shadow-xl">
                Book My Free Strategy Call
              </button>
              <button className="bg-neutral-100 text-[#1B3A6B] px-10 py-4 rounded-full font-bold text-lg hover:bg-neutral-200 transition-all">
                View Pricing Packages
              </button>
            </div>
            <div className="mt-8 flex items-center justify-center gap-6 text-[10px] text-neutral-400 font-bold uppercase tracking-widest">
              <span className="flex items-center gap-1"><ShieldCheck size={14} /> Confidential</span>
              <span className="flex items-center gap-1"><Zap size={14} /> No Pressure</span>
              <span className="flex items-center gap-1"><Clock size={14} /> 24hr Response</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
