import Link from 'next/link';
import { ArrowRight, CheckCircle, TrendingUp, Users, Briefcase, Scale, Calculator, BookOpen, Mail, Globe, Target, Shield } from 'lucide-react';

export const metadata = {
  title: 'Professional Services Digital Marketing | Law Firms, Accountants & Consultants in Nigeria',
  description: 'Grow your professional practice with strategic digital marketing. Lead generation, website design, and content marketing for law firms, accountants, consultants, and business advisors in Nigeria.',
};

export default function ProfessionalServicesPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-[#0A0A0A] to-[#111111]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-slate-500/10 border border-slate-500/20 rounded-full text-slate-400 text-sm font-medium mb-6">
                Professional Services Marketing Nigeria
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Grow Your Practice with
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-blue-500">
                  {' '}Digital Marketing
                </span>
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                Strategic digital marketing for law firms, accountants, consultants, and professional service providers in Nigeria. Generate qualified leads, build authority, and grow your practice with data-driven marketing strategies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="px-8 py-4 bg-slate-500 hover:bg-slate-600 text-white font-semibold rounded-full transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Get Your Practice Strategy
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
                { stat: '287%', label: 'Lead Increase' },
                { stat: '412%', label: 'Website Traffic Growth' },
                { stat: '89%', label: 'Lead Quality' },
                { stat: '₦18M', label: 'Monthly Value of New Clients' }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-xl">
                  <div className="text-3xl font-bold text-slate-400 mb-2">{item.stat}</div>
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
              Challenges Professional Firms Face
            </h2>
            <p className="text-xl text-gray-400">
              We understand professional services marketing. Here's how we solve your biggest challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                problem: 'Inconsistent Lead Flow',
                solution: 'Predictable lead generation through SEO, content marketing, and targeted advertising'
              },
              {
                problem: 'No Online Authority',
                solution: 'Content marketing and thought leadership that positions you as an industry expert'
              },
              {
                problem: 'Hard to Find New Clients',
                solution: 'Be found when clients search for your services with local SEO and Google Ads'
              },
              {
                problem: 'Website Not Converting',
                solution: 'Professional website design optimized for conversion and client acquisition'
              },
              {
                problem: 'Competitors Dominating Online',
                solution: 'Outrank competitors with comprehensive digital marketing strategies'
              },
              {
                problem: 'No Referral System',
                solution: 'Build systems that generate consistent referrals and client recommendations'
              }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-slate-500/30 transition-all">
                <div className="text-slate-400 font-bold mb-3">❌ {item.problem}</div>
                <div className="text-slate-400 font-semibold mb-2">✓ Our Solution:</div>
                <p className="text-gray-400 text-sm">{item.solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services for Professional Services */}
      <section className="py-24 bg-gradient-to-b from-[#111111] to-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Complete Professional Services Marketing
            </h2>
            <p className="text-xl text-gray-400">
              Everything you need to grow your practice
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Briefcase,
                title: 'Professional Website Design',
                benefits: [
                  'Authority-building website',
                  'Service page optimization',
                  'Lead capture functionality',
                  'Client testimonial showcase',
                  'Mobile-responsive design'
                ]
              },
              {
                icon: Target,
                title: 'Lead Generation',
                benefits: [
                  'Google Ads for professionals',
                  'LinkedIn advertising',
                  'Landing page optimization',
                  'Lead capture forms',
                  'CRM integration'
                ]
              },
              {
                icon: BookOpen,
                title: 'Content Marketing',
                benefits: [
                  'Industry blog posts',
                  'Whitepapers and guides',
                  'Case studies',
                  'Newsletter marketing',
                  'Video content'
                ]
              },
              {
                icon: Globe,
                title: 'SEO for Professionals',
                benefits: [
                  'Local SEO optimization',
                  'Service-area pages',
                  'Review generation',
                  'Citation building',
                  'Competitor analysis'
                ]
              },
              {
                icon: Users,
                title: 'Social Media Marketing',
                benefits: [
                  'LinkedIn presence',
                  'Professional content',
                  'Thought leadership',
                  'Network growth',
                  'Client engagement'
                ]
              },
              {
                icon: Shield,
                title: 'Reputation Management',
                benefits: [
                  'Review generation',
                  'Response management',
                  'Testimonial collection',
                  'Brand protection',
                  'Client feedback systems'
                ]
              }
            ].map((service, i) => (
              <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-slate-500/30 transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-slate-500/10 rounded-lg">
                    <service.icon className="w-6 h-6 text-slate-400" />
                  </div>
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                </div>
                <ul className="space-y-3">
                  {service.benefits.map((benefit, j) => (
                    <li key={j} className="flex items-start gap-2 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
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
              Professional Services Marketing Pricing
            </h2>
            <p className="text-xl text-gray-400">
              Packages for law firms, accountants, consultants, and more
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Package */}
            <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Practice Starter</h3>
                <div className="text-4xl font-bold text-slate-400">₦1.5M</div>
                <p className="text-gray-400 text-sm mt-2">One-time + ad spend</p>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  'Professional website (5 pages)',
                  'Google Business Profile',
                  'Basic SEO setup',
                  'Social media setup',
                  'Lead capture forms',
                  'Monthly report'
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
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
            <div className="p-8 bg-gradient-to-b from-slate-500/10 to-blue-500/10 border border-slate-500/30 rounded-2xl relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-slate-500 text-white text-sm font-bold rounded-full">
                MOST POPULAR
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Growth Practice</h3>
                <div className="text-4xl font-bold text-slate-400">₦3.5M</div>
                <p className="text-gray-400 text-sm mt-2">One-time + ad spend</p>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  'Premium website (10 pages)',
                  'Full SEO optimization',
                  'Content marketing',
                  'Google & LinkedIn Ads',
                  'Lead generation campaigns',
                  'Monthly blog posts',
                  'Review management',
                  'Priority support'
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link 
                href="/contact"
                className="block w-full py-3 bg-slate-500 hover:bg-slate-600 text-white text-center rounded-full font-semibold transition-all"
              >
                Get Started
              </Link>
            </div>

            {/* Enterprise Package */}
            <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Full Service Firm</h3>
                <div className="text-4xl font-bold text-blue-400">₦6M</div>
                <p className="text-gray-400 text-sm mt-2">One-time + ad spend</p>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  'Multi-practice website',
                  'Full digital marketing',
                  'Content marketing suite',
                  'LinkedIn management',
                  'Thought leadership',
                  'Custom CRM development',
                  'Dedicated account manager',
                  '24/7 support'
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
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
            Ready to Grow Your Practice?
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Book a free professional services marketing consultation. We'll analyze your practice and show you how to generate more clients.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 px-10 py-5 bg-slate-500 hover:bg-slate-600 text-white text-lg font-bold rounded-full transition-all duration-300"
          >
            Get Your Free Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-sm text-gray-500 mt-6">
            We work with law firms, accountants, consultants, architects, engineers, and all professional service providers across Nigeria.
          </p>
        </div>
      </section>
    </div>
  );
}

