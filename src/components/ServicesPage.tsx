import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Search, TrendingUp, Bot, MapPin, Camera, ShoppingCart, Tag, Gavel, Stethoscope, HelpCircle, Cpu, Target, Layout } from 'lucide-react';

const ServicesPage = ({ setCurrentPage }: { setCurrentPage: (page: string) => void }) => {
  const services = [
    {
      id: 'seo',
      title: 'SEO Services',
      description: 'Rank higher on Google in USA, UK, and Australia with our data-driven SEO strategies.',
      icon: <Search size={32} />
    },
    {
      id: 'paid-ads',
      title: 'Paid Media Ads',
      description: 'High-ROI campaigns on Google, Meta, and LinkedIn to drive immediate leads.',
      icon: <TrendingUp size={32} />
    },
    {
      id: 'google-ads',
      title: 'Google Ads Management',
      description: 'Expertly managed Google Ads campaigns for maximum ROI and lead quality.',
      icon: <Target size={32} className="text-[#1B3A6B]" />
    },
    {
      id: 'ai-crm',
      title: 'AI CRM Solutions',
      description: 'Automate your lead follow-up and management with AI-powered CRM systems.',
      icon: <Bot size={32} />
    },
    {
      id: 'ai-tools',
      title: 'AI Tools Setup',
      description: 'Implementation and integration of cutting-edge AI tools for your business.',
      icon: <Cpu size={32} />
    },
    {
      id: 'gmb-ranking',
      title: 'GMB Ranking',
      description: 'Dominate local search results and get into the Google Maps 3-pack.',
      icon: <MapPin size={32} />
    },
    {
      id: 'photography',
      title: 'Product Photography',
      description: 'Professional, e-commerce ready photography for your products.',
      icon: <Camera size={32} />
    },
    {
      id: 'amazon-listing',
      title: 'Amazon Listing',
      description: 'Optimize your Amazon listings to dominate the Buy Box and increase sales.',
      icon: <ShoppingCart size={32} />
    },
    {
      id: 'shopify-seo',
      title: 'Shopify SEO',
      description: 'Scale your e-commerce revenue with specialized Shopify SEO optimization.',
      icon: <Layout size={32} />
    },
    {
      id: 'etsy-seo',
      title: 'Etsy SEO',
      description: 'Get your Etsy shop found with data-driven keyword and tag optimization.',
      icon: <Tag size={32} />
    },
    {
      id: 'law-firm-marketing',
      title: 'Law Firm Marketing',
      description: 'Digital marketing for law firms that wins high-value cases and automates intake.',
      icon: <Gavel size={32} />
    },
    {
      id: 'healthcare-marketing',
      title: 'Healthcare Marketing',
      description: 'Fill your appointment book with specialized healthcare and dental marketing.',
      icon: <Stethoscope size={32} />
    },
    {
      id: 'complete-faq',
      title: 'Complete FAQ',
      description: 'Find answers to all your questions about our services and process.',
      icon: <HelpCircle size={32} />
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <section className="bg-[#1B3A6B] text-white py-20 px-4 md:px-8">
        <div className="max-w-screen-2xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-condensed font-bold mb-6">Our Digital Marketing Services</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            We provide specialized marketing solutions designed for businesses targeting high-value international markets.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div 
                key={service.id}
                className="border border-neutral-100 rounded-xl p-8 hover:shadow-xl transition-all group"
              >
                <div className="text-[#1B3A6B] group-hover:text-[#FF6B00] transition-colors mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1B3A6B] mb-4">{service.title}</h3>
                <p className="text-neutral-600 mb-8 text-sm leading-relaxed">
                  {service.description}
                </p>
                <button 
                  onClick={() => setCurrentPage(service.id)}
                  className="flex items-center gap-2 text-[#FF6B00] font-bold text-sm hover:underline"
                >
                  Learn More <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-50 py-20 px-4 md:px-8">
        <div className="max-w-screen-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1B3A6B] mb-6">Ready to Grow Your Business?</h2>
          <p className="text-neutral-500 mb-10 max-w-xl mx-auto">
            Contact us today for a free audit and see how our specialized services can help you dominate your market.
          </p>
          <button 
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
              else setCurrentPage('home');
            }}
            className="btn-primary px-10 py-4"
          >
            Get Started Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
