import Link from 'next/link';
import { ArrowRight, CheckCircle, TrendingUp, Users, Building, Home, MapPin, Mail, Camera, DollarSign, Globe } from 'lucide-react';

export const metadata = {
  title: 'Real Estate Digital Marketing | Property Marketing for Real Estate Agencies in Nigeria',
  description: 'Fill your properties with strategic real estate digital marketing. Property websites, virtual tours, Google Ads, and lead generation for Nigerian real estate developers and agencies.',
};

export default function RealEstatePage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-[#0A0A0A] to-[#111111]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-400 text-sm font-medium mb-6">
                Real Estate Marketing Nigeria
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Fill Your Properties with
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                  {' '}Digital Marketing
                </span>
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                Strategic digital marketing for real estate developers, agencies, and property managers in Nigeria. Generate qualified leads, showcase properties, and close more deals with data-driven property marketing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-full transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Get Your Property Strategy
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  href="/case-studies"
                  className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 font-semibold rounded-full transition-all duration-300 text-center"
                >
                  See Results
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { stat: '423%', label: 'Lead Increase' },
                { stat: '₦2.8B', label: 'Property Sales Generated' },
                { stat: '67%', label: 'Faster Property Moves' },
                { stat: '312%', label: 'Website Traffic Growth' }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-xl">
                  <div className="text-3xl font-bold text-amber-400 mb-2">{item.stat}</div>
                  <div className="text-sm text-gray-400">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Challenges Real Estate Businesses Face
            </h2>
            <p className="text-xl text-gray-400">
              We understand property marketing. Here's how we solve your biggest challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                problem: 'Fewer Property Inquiries',
                solution: 'Targeted Google Ads and Facebook campaigns that reach serious property buyers and renters'
              },
              {
                problem: 'Properties Not Getting Noticed',
                solution: 'Professional property websites with virtual tours that showcase properties24/7'
              },
              {
                problem: 'Wasting Money on Wrong Leads',
                solution: 'Quality lead generation that attracts serious buyers with high conversion intent'
              },
              {
                problem: 'No Online Presence',
                solution: 'Beautiful property websites that build trust and credibility with potential clients'
              },
              {
                problem: 'Slow Sales Process',
                solution: 'Automated lead nurturing and CRM that speeds up the buyer journey'
              },
              {
                problem: 'Competition from Big Agencies',
                solution: 'Digital strategies that level the playing field and help you compete'
              }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-amber-500/30 transition-all">
                <div className="text-amber-400 font-bold mb-3">❌ {item.problem}</div>
                <div className="text-amber-400 font-semibold mb-2">✓ Our Solution:</div>
                <p className="text-gray-400 text-sm">{item.solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services for Real Estate */}
      <section className="py-24 bg-gradient-to-b from-[#111111] to-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Complete Real Estate Marketing
            </h2>
            <p className="text-xl text-gray-400">
              Everything you need to sell more properties
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Building,
                title: 'Property Website Design',
                benefits: [
                  'Stunning property listings',
                  'Advanced search functionality',
                  'Virtual property tours',
                  'Agent profiles and contact',
                  'Mobile-responsive design'
                ]
              },
              {
                icon: Camera,
                title: 'Virtual Tours & Media',
                benefits: [
                  '360° virtual tours',
                  'Drone photography/videography',
                  'Professional property photos',
                  'Video walkthroughs',
                  'Matterport integrations'
                ]
              },
              {
                icon: TrendingUp,
                title: 'Property Advertising',
                benefits: [
                  'Google property ads',
                  'Facebook/Instagram property ads',
                  'Retargeting campaigns',
                  'Lead capture ads',
                  'Listing promotional campaigns'
                ]
              },
              {
                icon: Users,
                title: 'Lead Generation',
                benefits: [
                  'Landing page optimization',
                  'Lead capture forms',
                  'CRM integration',
                  'Lead nurturing automation',
                  'Qualified lead filtering'
                ]
              },
              {
                icon: MapPin,
                title: 'Local SEO for Real Estate',
                benefits: [
                  'Rank for local property searches',
                  'Google Business Profile',
                  'Neighborhood landing pages',
                  'Local citation building',
                  'Review generation'
                ]
              },
              {
                icon: DollarSign,
                title: 'Real Estate Photography',
                benefits: [
                  'Professional property shoots',
                  ' twilight photography',
                  'Aerial drone shots',
                  'Video production',
                  'Virtual staging'
                ]
              }
            ].map((service, i) => (
              <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-amber-500/30 transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-amber-500/10 rounded-lg">
                    <service.icon className="w-6 h-6 text-amber-400" />
                  </div>
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                </div>
                <ul className="space-y-3">
                  {service.benefits.map((benefit, j) => (
                    <li key={j} className="flex items-start gap-2 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Real Estate Marketing Pricing
            </h2>
            <p className="text-xl text-gray-400">
              Packages for agencies, developers, and property managers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Package */}
            <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Agency Starter</h3>
                <div className="text-4xl font-bold text-amber-400">₦2M</div>
                <p className="text-gray-400 text-sm mt-2">One-time + ad spend</p>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  'Property website (10 listings)',
                  'Basic virtual tour setup',
                  'Google Business Profile',
                  'Social media setup',
                  'Lead capture forms',
                  'Monthly report'
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link 
                href="/contact"
                className="block w-full py-3 bg-white/10 hover:bg-white/20 border border-white/10 text-center rounded-full font-semibold transition-all"
              >
                Get Started
              </Link>
            </div>

            {/* Professional Package - Featured */}
            <div className="p-8 bg-gradient-to-b from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-2xl relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-amber-500 text-black text-sm font-bold rounded-full">
                MOST POPULAR
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Growth Package</h3>
                <div className="text-4xl font-bold text-amber-400">₦4.5M</div>
                <p className="text-gray-400 text-sm mt-2">One-time + ad spend</p>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  'Premium property website (50 listings)',
                  'Virtual tour integration',
                  'Google & Facebook property ads',
                  'Lead generation campaigns',
                  'CRM setup and automation',
                  'Monthly content creation',
                  'Priority support',
                  'Analytics dashboard'
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link 
                href="/contact"
                className="block w-full py-3 bg-amber-500 hover:bg-amber-600 text-black text-center rounded-full font-semibold transition-all"
              >
                Get Started
              </Link>
            </div>

            {/* Enterprise Package */}
            <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Developer Full Service</h3>
                <div className="text-4xl font-bold text-orange-400">₦8M</div>
                <p className="text-gray-400 text-sm mt-2">One-time + ad spend</p>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  'Multi-property development site',
                  'Unlimited listings',
                  'Drone videography',
                  'Full digital marketing suite',
                  'Multi-location support',
                  'Custom CRM development',
                  'Dedicated account manager',
                  '24/7 support'
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link 
                href="/contact"
                className="block w-full py-3 bg-white/10 hover:bg-white/20 border border-white/10 text-center rounded-full font-semibold transition-all"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-b from-[#111111] to-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Sell More Properties?
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Book a free real estate marketing consultation. We'll analyze your properties and show you how to generate more leads.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 px-10 py-5 bg-amber-500 hover:bg-amber-600 text-black text-lg font-bold rounded-full transition-all duration-300"
          >
            Get Your Free Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-sm text-gray-500 mt-6">
            We work with real estate developers, agencies, property managers, and individual landlords across Nigeria.
          </p>
        </div>
      </section>
    </div>
  );
}

