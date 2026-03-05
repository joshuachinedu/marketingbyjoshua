import Link from 'next/link';
import { ArrowRight, CheckCircle, TrendingUp, Users, Star, MapPin } from 'lucide-react';

export const metadata = {
  title: 'Restaurant Digital Marketing | SEO & Online Marketing for Nigerian Restaurants',
  description: 'Fill every table with strategic digital marketing for restaurants in Nigeria. Google Maps optimization, online ordering, review management, and paid ads that increase bookings.',
};

export default function RestaurantsPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-[#0A0A0A] to-[#111111]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium mb-6">
                Restaurant Marketing
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Fill Every Table,
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
                  {' '}Every Night
                </span>
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                Strategic digital marketing that drives reservations, walk-ins, and online orders for Nigerian restaurants. Own your local market and reduce dependence on delivery platforms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold rounded-full transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Get Your Restaurant Strategy
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  href="/case-studies"
                  className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 font-semibold rounded-full transition-all duration-300 text-center"
                >
                  See Restaurant Results
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { stat: '287%', label: 'Avg. Booking Increase' },
                { stat: '4.8★', label: 'Average Rating Improvement' },
                { stat: '156%', label: 'Online Order Growth' },
                { stat: '₦840K', label: 'Avg. Monthly Revenue Lift' }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-xl">
                  <div className="text-3xl font-bold text-emerald-400 mb-2">{item.stat}</div>
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
              The Challenges Restaurant Owners Face
            </h2>
            <p className="text-xl text-gray-400">
              We understand the restaurant business. Here's how we solve your biggest marketing problems.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                problem: 'Empty Tables During Off-Peak',
                solution: 'Targeted Google Ads and social campaigns that fill slow periods with special offers'
              },
              {
                problem: 'High Delivery Platform Commissions',
                solution: 'Build your own online ordering system and direct traffic through SEO and ads'
              },
              {
                problem: 'Lost in Local Search Results',
                solution: 'Google Maps optimization that makes you the top result for "restaurants near me"'
              },
              {
                problem: 'No Online Presence',
                solution: 'Professional website with menu, online ordering, and reservation system'
              },
              {
                problem: 'Negative Reviews Hurting Business',
                solution: 'Review generation and reputation management that pushes positive reviews to the top'
              },
              {
                problem: 'Wasted Marketing Budget',
                solution: 'Data-driven campaigns that only spend money on channels that bring customers'
              }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-emerald-500/30 transition-all">
                <div className="text-red-400 font-bold mb-3">❌ {item.problem}</div>
                <div className="text-emerald-400 font-semibold mb-2">✓ Our Solution:</div>
                <p className="text-gray-400 text-sm">{item.solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services for Restaurants */}
      <section className="py-24 bg-gradient-to-b from-[#111111] to-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Complete Digital Marketing for Restaurants
            </h2>
            <p className="text-xl text-gray-400">
              Everything you need to dominate your local market
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: MapPin,
                title: 'Local SEO & Google Maps',
                benefits: [
                  'Rank #1 for "restaurants in [your area]"',
                  'Google Business Profile optimization',
                  'Photo and menu management',
                  'Review generation campaigns',
                  'Local citation building'
                ]
              },
              {
                icon: TrendingUp,
                title: 'Website & Online Ordering',
                benefits: [
                  'Mobile-optimized menu and ordering',
                  'Direct bookings without commissions',
                  'Integration with payment gateways',
                  'WhatsApp ordering integration',
                  'Event booking system'
                ]
              },
              {
                icon: Users,
                title: 'Paid Advertising',
                benefits: [
                  'Google Search Ads for high-intent searchers',
                  'Facebook/Instagram campaigns',
                  'Retargeting to recover abandoned orders',
                  'Special event promotion',
                  'Geo-targeted ads to nearby customers'
                ]
              },
              {
                icon: Star,
                title: 'Content & Social Media',
                benefits: [
                  'Professional food photography',
                  'Menu highlight videos',
                  'Behind-the-scenes content',
                  'Customer testimonial videos',
                  'Influencer partnership coordination'
                ]
              }
            ].map((service, i) => (
              <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-emerald-500/30 transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-emerald-500/10 rounded-lg">
                    <service.icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                </div>
                <ul className="space-y-3">
                  {service.benefits.map((benefit, j) => (
                    <li key={j} className="flex items-start gap-2 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="p-12 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 border border-emerald-500/20 rounded-3xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-emerald-400 font-semibold mb-4">CASE STUDY</div>
                <h3 className="text-3xl font-bold mb-4">
                  How Taste of Lagos Tripled Reservations in 90 Days
                </h3>
                <p className="text-gray-300 mb-6">
                  "Before working with Joshua, we were struggling to fill tables on weekdays. Now we're turning away customers. Our online presence went from invisible to dominant in our area."
                </p>
                <div className="text-lg font-semibold mb-6">
                  — Chioma Okonkwo, Owner
                </div>
                
                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div>
                    <div className="text-3xl font-bold text-emerald-400">+287%</div>
                    <div className="text-sm text-gray-400">Bookings</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-emerald-400">4.8★</div>
                    <div className="text-sm text-gray-400">Google Rating</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-emerald-400">₦1.2M</div>
                    <div className="text-sm text-gray-400">Monthly Revenue+</div>
                  </div>
                </div>

                <Link 
                  href="/case-studies"
                  className="inline-flex items-center gap-2 text-emerald-400 font-semibold hover:gap-4 transition-all"
                >
                  Read Full Case Study
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              <div className="space-y-4">
                <div className="p-6 bg-white/5 rounded-xl">
                  <div className="font-semibold mb-2">What We Did:</div>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• Optimized Google Business Profile with professional photos</li>
                    <li>• Launched targeted Google Ads for local searches</li>
                    <li>• Built online reservation system</li>
                    <li>• Implemented review generation strategy</li>
                    <li>• Created menu showcase videos</li>
                  </ul>
                </div>
                <div className="p-6 bg-white/5 rounded-xl">
                  <div className="font-semibold mb-2">Timeline:</div>
                  <div className="text-sm text-gray-400">
                    <div>Month 1: Setup & optimization</div>
                    <div>Month 2: +120% bookings</div>
                    <div>Month 3: +287% bookings</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Fill Your Restaurant?
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Book a free strategy call. We'll analyze your current marketing and show you exactly how to increase reservations and online orders.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 px-10 py-5 bg-emerald-500 hover:bg-emerald-600 text-black text-lg font-bold rounded-full transition-all duration-300"
          >
            Get Your Free Restaurant Marketing Audit
            <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-sm text-gray-500 mt-6">
            No obligation. Just honest advice on what will work for your restaurant.
          </p>
        </div>
      </section>
    </div>
  );
}
