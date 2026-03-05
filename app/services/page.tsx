import Link from 'next/link';
import { Code, TrendingUp, Target, MapPin, Video, ArrowRight, CheckCircle } from 'lucide-react';

export const metadata = {
  title: 'Digital Marketing Services | Web Development, SEO & Paid Ads in Nigeria',
  description: 'Expert web development, SEO, Google Ads, local SEO, and video production services for Nigerian businesses. Results-driven strategies that increase revenue.',
};

export default function ServicesPage() {
  const services = [
    {
      id: 'web-development',
      icon: Code,
      title: 'Web Development',
      tagline: 'Websites That Convert Visitors Into Customers',
      description: 'Your website is your 24/7 salesperson. We build fast, conversion-optimized websites that turn traffic into revenue.',
      benefits: [
        'Mobile-first responsive design for Nigerian internet users',
        'Page load speed under 2 seconds (critical for Nigerian connectivity)',
        'Conversion rate optimization baked into every page',
        'SEO-ready structure from day one',
        'Easy content management systems',
        'Integration with booking systems, payment gateways, and CRMs'
      ],
      pricing: 'From ₦850,000',
      deliverables: ['Custom design', 'CMS setup', 'Mobile optimization', '3 months support'],
      ideal: 'Restaurants needing online ordering, hotels needing booking systems, pharmacies wanting e-commerce'
    },
    {
      id: 'seo',
      icon: TrendingUp,
      title: 'SEO Services',
      tagline: 'Rank First, Win More Business',
      description: 'Get found when your customers are searching. We optimize your website to rank on page one for keywords that drive revenue.',
      benefits: [
        'Keyword research focused on high-intent searches in Nigeria',
        'Technical SEO: site speed, mobile optimization, structured data',
        'On-page optimization: content, meta tags, internal linking',
        'Authority building through strategic link acquisition',
        'Google Business Profile optimization',
        'Monthly reporting with clear ROI metrics'
      ],
      pricing: 'From ₦350,000/month',
      deliverables: ['Keyword strategy', 'Monthly content', 'Technical fixes', 'Link building'],
      ideal: 'Any business wanting consistent organic traffic and reduced dependence on paid ads'
    },
    {
      id: 'paid-ads',
      icon: Target,
      title: 'Google Ads & Paid Advertising',
      tagline: 'Profitable Ads, Not Expensive Experiments',
      description: 'Stop wasting money on ads that don&apos;t convert. We manage campaigns that deliver 4x-8x return on ad spend.',
      benefits: [
        'Google Search Ads targeting high-intent buyers',
        'Google Maps Ads for local businesses',
        'Display remarketing to recapture lost visitors',
        'Conversion tracking and attribution setup',
        'A/B testing on ad copy, landing pages, and offers',
        'Weekly optimization based on performance data'
      ],
      pricing: 'From ₦250,000/month + ad spend',
      deliverables: ['Campaign setup', 'Ad creative', 'Landing pages', 'Weekly reports'],
      ideal: 'Businesses with proven offers ready to scale customer acquisition'
    },
    {
      id: 'local-seo',
      icon: MapPin,
      title: 'Local SEO',
      tagline: 'Own Your Local Market',
      description: 'Dominate local search results. When people search for businesses like yours in your area, you show up first.',
      benefits: [
        'Google Business Profile optimization and management',
        'Local keyword targeting (e.g., "restaurants in Wuse", "hotels in Abuja")',
        'Review generation and reputation management',
        'Local citation building across Nigerian directories',
        'Location page optimization for multi-location businesses',
        'Local link building from Abuja/Nigerian websites'
      ],
      pricing: 'From ₦200,000/month',
      deliverables: ['GBP optimization', 'Review strategy', 'Local citations', 'Monthly monitoring'],
      ideal: 'Restaurants, hotels, pharmacies, clinics, retail stores with physical locations'
    },
    {
      id: 'videography',
      icon: Video,
      title: 'Event Coverage & Videography',
      tagline: 'Content That Showcases Your Business',
      description: 'Professional video content for your website, social media, and advertising campaigns. Events, tours, testimonials, and promotional videos.',
      benefits: [
        'Restaurant ambiance and menu showcase videos',
        'Hotel property tours and event space documentation',
        'Corporate event coverage and promotional videos',
        'Customer testimonial videos that build trust',
        'Social media content optimized for engagement',
        'Full post-production with branding integration'
      ],
      pricing: 'From ₦150,000 per project',
      deliverables: ['Filming', 'Editing', 'Color grading', 'Delivery in multiple formats'],
      ideal: 'Businesses wanting to showcase facilities, capture events, or create marketing content'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-[#0A0A0A] to-[#111111]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Services That Drive
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
                {' '}Real Revenue
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              No vanity metrics. No agency fluff. Just strategic digital marketing services that increase bookings, foot traffic, and online sales for Nigerian businesses.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold rounded-full transition-all duration-300"
            >
              Get Your Custom Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-32">
          {services.map((service, index) => (
            <div key={service.id} id={service.id} className="scroll-mt-32">
              <div className={`grid lg:grid-cols-2 gap-16 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Left Column */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="inline-flex items-center gap-3 mb-6 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
                    <service.icon className="w-8 h-8 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">{service.title}</span>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    {service.tagline}
                  </h2>
                  
                  <p className="text-xl text-gray-400 mb-8">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {service.benefits.slice(0, 3).map((benefit, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4 mb-8">
                    <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-full">
                      <span className="text-sm text-gray-400">Starting at:</span>
                      <div className="text-xl font-bold text-emerald-400">{service.pricing}</div>
                    </div>
                  </div>

                  <Link 
                    href="/contact"
                    className="inline-flex items-center gap-2 text-emerald-400 font-semibold hover:gap-4 transition-all"
                  >
                    Discuss This Service
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>

                {/* Right Column */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="p-8 bg-white/5 border border-white/10 rounded-2xl space-y-6">
                    <h3 className="text-2xl font-bold">What's Included</h3>
                    
                    <ul className="space-y-4">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300">{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-6 border-t border-white/10">
                      <h4 className="font-semibold mb-3">Deliverables:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.deliverables.map((item, i) => (
                          <span key={i} className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-sm rounded-full">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 border-t border-white/10">
                      <h4 className="font-semibold mb-2">Ideal For:</h4>
                      <p className="text-gray-400 text-sm">{service.ideal}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gradient-to-b from-[#111111] to-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Nigerian Businesses Choose Us
            </h2>
            <p className="text-xl text-gray-400">
              We understand the Nigerian market, connectivity challenges, and what actually drives conversions here
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Nigeria-First Approach',
                desc: 'Optimized for Nigerian internet speeds, mobile usage patterns, and local search behavior'
              },
              {
                title: 'Transparent Pricing',
                desc: 'No hidden fees. Clear deliverables. Fixed monthly rates or project-based pricing'
              },
              {
                title: 'Results, Not Reports',
                desc: 'We measure success by your revenue growth, not page views or impressions'
              },
              {
                title: 'Fast Implementation',
                desc: 'Campaigns live within 2 weeks. Websites delivered in 4-6 weeks. No endless delays'
              },
              {
                title: 'Local Expertise',
                desc: 'Based in Abuja. We understand Nigerian business culture and customer behavior'
              },
              {
                title: 'Ongoing Optimization',
                desc: 'Monthly strategy reviews, A/B testing, and continuous improvement included'
              }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-emerald-500/30 transition-all duration-300">
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Scale Your Business?
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Book a free strategy call. We'll analyze your current situation and show you exactly how to grow.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 px-10 py-5 bg-emerald-500 hover:bg-emerald-600 text-black text-lg font-bold rounded-full transition-all duration-300 shadow-lg shadow-emerald-500/25"
          >
            Schedule Your Free Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-sm text-gray-500 mt-6">
            No sales pitch. Just honest advice.
          </p>
        </div>
      </section>
    </div>
  );
}
