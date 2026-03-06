import Link from 'next/link';
import { ArrowRight, CheckCircle, TrendingUp, Users, ShoppingBag, CreditCard, Globe, Mail, BarChart3, Target } from 'lucide-react';

export const metadata = {
  title: 'E-commerce Digital Marketing | Online Store Marketing & Shopify Growth in Nigeria',
  description: 'Boost your online sales with strategic e-commerce digital marketing. Shopify optimization, Google Ads, Facebook shopping ads, and conversion optimization for Nigerian e-commerce businesses.',
};

export default function EcommercePage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-[#0A0A0A] to-[#111111]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-6">
                E-commerce Marketing Nigeria
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Scale Your Online Store with
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                  {' '}Digital Marketing
                </span>
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                Strategic e-commerce marketing for Nigerian online stores. Increase sales, improve ROI, and grow your business with data-driven shopping campaigns on Shopify, Jumia, and your own store.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="px-8 py-4 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-full transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Get Your E-commerce Strategy
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
                { stat: '487%', label: 'Sales Increase' },
                { stat: '312%', label: 'ROAS Improvement' },
                { stat: '89%', label: 'Conversion Rate' },
                { stat: '₦15M', label: 'Monthly Ad Revenue' }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-xl">
                  <div className="text-3xl font-bold text-purple-400 mb-2">{item.stat}</div>
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
              Challenges E-commerce Businesses Face
            </h2>
            <p className="text-xl text-gray-400">
              We understand online retail. Here's how we solve your biggest challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                problem: 'Low Online Sales',
                solution: 'Conversion-optimized shopping ads and SEO that turn visitors into paying customers'
              },
              {
                problem: 'High Advertising Costs',
                solution: 'Data-driven campaigns that maximize ROAS and reduce cost per acquisition'
              },
              {
                problem: 'Low Website Traffic',
                solution: 'Multi-channel marketing including Google Shopping, Facebook Shops, and SEO'
              },
              {
                problem: 'Shopping Cart Abandonment',
                solution: 'Retargeting campaigns and email automation that recover lost sales'
              },
              {
                problem: 'No Brand Awareness',
                solution: 'Social media marketing and influencer partnerships that build brand recognition'
              },
              {
                problem: 'Competition from Big Marketplaces',
                solution: 'Differentiate your brand and build direct customer relationships'
              }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-purple-500/30 transition-all">
                <div className="text-purple-400 font-bold mb-3">❌ {item.problem}</div>
                <div className="text-purple-400 font-semibold mb-2">✓ Our Solution:</div>
                <p className="text-gray-400 text-sm">{item.solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services for E-commerce */}
      <section className="py-24 bg-gradient-to-b from-[#111111] to-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Complete E-commerce Marketing
            </h2>
            <p className="text-xl text-gray-400">
              Everything you need to scale your online store
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: ShoppingBag,
                title: 'E-commerce Website Optimization',
                benefits: [
                  'Shopify/WooCommerce optimization',
                  'Mobile shopping experience',
                  'Checkout flow optimization',
                  'Site speed improvements',
                  'Product page optimization'
                ]
              },
              {
                icon: Target,
                title: 'Google Shopping Ads',
                benefits: [
                  'Product feed optimization',
                  'Smart Shopping campaigns',
                  'Performance Max campaigns',
                  'Competitive bidding strategies',
                  'Conversion tracking setup'
                ]
              },
              {
                icon: CreditCard,
                title: 'Facebook & Instagram Shopping',
                benefits: [
                  'Facebook Shops setup',
                  'Dynamic product ads',
                  'Catalog-based campaigns',
                  'Retargeting audiences',
                  'Influencer partnerships'
                ]
              },
              {
                icon: BarChart3,
                title: 'E-commerce Analytics',
                benefits: [
                  'Conversion tracking',
                  'Customer journey analysis',
                  'A/B testing strategy',
                  'Revenue attribution',
                  'Performance dashboards'
                ]
              },
              {
                icon: Mail,
                title: 'Email Marketing for E-commerce',
                benefits: [
                  'Welcome series automation',
                  'Abandoned cart recovery',
                  'Promotional campaigns',
                  'Loyalty program integration',
                  'SMS marketing'
                ]
              },
              {
                icon: Globe,
                title: 'Marketplace Optimization',
                benefits: [
                  'Jumia store optimization',
                  'Product listing optimization',
                  'Review generation',
                  'Competitive pricing strategy',
                  'Fulfillment optimization'
                ]
              }
            ].map((service, i) => (
              <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-purple-500/30 transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-purple-500/10 rounded-lg">
                    <service.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                </div>
                <ul className="space-y-3">
                  {service.benefits.map((benefit, j) => (
                    <li key={j} className="flex items-start gap-2 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
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
              E-commerce Marketing Pricing
            </h2>
            <p className="text-xl text-gray-400">
              Transparent pricing for online stores of all sizes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Package */}
            <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Store Starter</h3>
                <div className="text-4xl font-bold text-purple-400">₦1.5M</div>
                <p className="text-gray-400 text-sm mt-2">One-time + ad spend</p>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  'E-commerce website audit',
                  'Basic website optimizations',
                  'Google Shopping setup',
                  'Facebook pixel setup',
                  'Basic email automation',
                  'Monthly performance report'
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
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
            <div className="p-8 bg-gradient-to-b from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-2xl relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-purple-500 text-white text-sm font-bold rounded-full">
                MOST POPULAR
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Growth Store</h3>
                <div className="text-4xl font-bold text-purple-400">₦3.5M</div>
                <p className="text-gray-400 text-sm mt-2">One-time + ad spend</p>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  'Full website optimization',
                  'Google Shopping campaigns',
                  'Facebook/Instagram shopping',
                  'Retargeting campaigns',
                  'Email marketing automation',
                  'SMS marketing setup',
                  'A/B testing',
                  'Weekly optimization calls'
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link 
                href="/contact"
                className="block w-full py-3 bg-purple-500 hover:bg-purple-600 text-white text-center rounded-full font-semibold transition-all"
              >
                Get Started
              </Link>
            </div>

            {/* Enterprise Package */}
            <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Scale & Dominate</h3>
                <div className="text-4xl font-bold text-pink-400">₦6M</div>
                <p className="text-gray-400 text-sm mt-2">One-time + ad spend</p>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  'Full e-commerce strategy',
                  'Multi-channel marketing',
                  'Marketplace optimization',
                  'Influencer marketing',
                  'Advanced analytics',
                  'Dedicated account manager',
                  'Custom integrations',
                  '24/7 support'
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5" />
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
            Ready to Scale Your Sales?
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Book a free e-commerce marketing consultation. We'll analyze your store and show you how to increase sales.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 px-10 py-5 bg-purple-500 hover:bg-purple-600 text-white text-lg font-bold rounded-full transition-all duration-300"
          >
            Get Your Free Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-sm text-gray-500 mt-6">
            We work with Shopify, WooCommerce, Jumia sellers, and all e-commerce businesses across Nigeria.
          </p>
        </div>
      </section>
    </div>
  );
}

