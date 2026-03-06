import Link from 'next/link';
import { ArrowRight, CheckCircle, TrendingUp, Users, Heart, Handshake, Globe, Mail, Target, Gift, Megaphone, Building2 } from 'lucide-react';

export const metadata = {
  title: 'Non-Profit Digital Marketing | NGO Marketing & Charity Campaigns in Nigeria',
  description: 'Amplify your cause with strategic non-profit digital marketing. Donor engagement, volunteer recruitment, fundraising campaigns, and awareness marketing for Nigerian NGOs and charities.',
};

export default function NonProfitPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-[#0A0A0A] to-[#111111]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-pink-500/10 border border-pink-500/20 rounded-full text-pink-400 text-sm font-medium mb-6">
                Non-Profit Marketing Nigeria
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Amplify Your Cause with
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-500">
                  {' '}Digital Marketing
                </span>
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                Strategic digital marketing for Nigerian NGOs, charities, and non-profit organizations. Raise awareness, engage donors, recruit volunteers, and make a bigger impact with data-driven campaigns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="px-8 py-4 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-full transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Get Your Campaign Strategy
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
                { stat: '₦500M+', label: 'Funds Raised' },
                { stat: '1.2M+', label: 'Lives Impacted' },
                { stat: '389%', label: 'Donor Growth' },
                { stat: '15K+', label: 'Volunteers Recruited' }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-xl">
                  <div className="text-3xl font-bold text-pink-400 mb-2">{item.stat}</div>
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
              Challenges Non-Profits Face
            </h2>
            <p className="text-xl text-gray-400">
              We understand NGO marketing. Here's how we solve your biggest challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                problem: 'Limited Awareness',
                solution: 'Strategic campaigns that amplify your mission and reach more people who care about your cause'
              },
              {
                problem: 'Difficulty Raising Funds',
                solution: 'Compelling fundraising campaigns with secure donation systems that convert supporters into donors'
              },
              {
                problem: 'Low Donor Retention',
                solution: 'Email nurturing and engagement strategies that build long-term relationships with donors'
              },
              {
                problem: 'Hard to Find Volunteers',
                solution: 'Targeted volunteer recruitment campaigns that attract passionate supporters'
              },
              {
                problem: 'No Online Presence',
                solution: 'Professional non-profit website that tells your story and builds trust'
              },
              {
                problem: 'Limited Marketing Budget',
                solution: 'Cost-effective digital strategies that maximize every naira for impact'
              }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-pink-500/30 transition-all">
                <div className="text-pink-400 font-bold mb-3">❌ {item.problem}</div>
                <div className="text-pink-400 font-semibold mb-2">✓ Our Solution:</div>
                <p className="text-gray-400 text-sm">{item.solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services for Non-Profits */}
      <section className="py-24 bg-gradient-to-b from-[#111111] to-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Complete Non-Profit Marketing
            </h2>
            <p className="text-xl text-gray-400">
              Everything you need to grow your impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Heart,
                title: 'Fundraising Campaigns',
                benefits: [
                  'Online donation system',
                  'Recurring giving programs',
                  'Peer-to-peer fundraising',
                  'Campaign strategy',
                  'Matching gift campaigns'
                ]
              },
              {
                icon: Gift,
                title: 'Donor Engagement',
                benefits: [
                  'Donor retention strategy',
                  'Email marketing automation',
                  'Thank you sequences',
                  'Donor appreciation',
                  'Impact reporting'
                ]
              },
              {
                icon: Users,
                title: 'Volunteer Recruitment',
                benefits: [
                  'Volunteer landing pages',
                  'Application automation',
                  'Volunteer management',
                  'Community building',
                  'Event coordination'
                ]
              },
              {
                icon: Megaphone,
                title: 'Awareness Campaigns',
                benefits: [
                  'Social media campaigns',
                  'Video storytelling',
                  'Influencer partnerships',
                  'Press & media relations',
                  'Hashtag campaigns'
                ]
              },
              {
                icon: Globe,
                title: 'NGO Website Design',
                benefits: [
                  'Impact-focused website',
                  'Donation integration',
                  'Storytelling pages',
                  'Event registration',
                  'Mobile-responsive'
                ]
              },
              {
                icon: Target,
                title: 'Grant Writing Support',
                benefits: [
                  'Grant research',
                  'Proposal writing',
                  'Budget development',
                  'Impact metrics',
                  'Compliance guidance'
                ]
              }
            ].map((service, i) => (
              <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-pink-500/30 transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-pink-500/10 rounded-lg">
                    <service.icon className="w-6 h-6 text-pink-400" />
                  </div>
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                </div>
                <ul className="space-y-3">
                  {service.benefits.map((benefit, j) => (
                    <li key={j} className="flex items-start gap-2 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5" />
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
              Non-Profit Marketing Pricing
            </h2>
            <p className="text-xl text-gray-400">
              Affordable packages for NGOs and charities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Package */}
            <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">NGO Starter</h3>
                <div className="text-4xl font-bold text-pink-400">₦800K</div>
                <p className="text-gray-400 text-sm mt-2">One-time + ad spend</p>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  'Non-profit website (5 pages)',
                  'Donation button integration',
                  'Google Business Profile',
                  'Social media setup',
                  'Basic SEO',
                  'Monthly report'
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

            {/* Professional Package - Featured */}
            <div className="p-8 bg-gradient-to-b from-pink-500/10 to-rose-500/10 border border-pink-500/30 rounded-2xl relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-pink-500 text-white text-sm font-bold rounded-full">
                MOST POPULAR
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Impact Growth</h3>
                <div className="text-4xl font-bold text-pink-400">₦1.8M</div>
                <p className="text-gray-400 text-sm mt-2">One-time + ad spend</p>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  'Full non-profit website',
                  'Online donation system',
                  'Fundraising campaign setup',
                  'Email marketing automation',
                  'Social media management',
                  'Volunteer recruitment',
                  'Monthly content creation',
                  'Priority support'
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link 
                href="/contact"
                className="block w-full py-3 bg-pink-500 hover:bg-pink-600 text-white text-center rounded-full font-semibold transition-all"
              >
                Get Started
              </Link>
            </div>

            {/* Enterprise Package */}
            <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Full Scale Impact</h3>
                <div className="text-4xl font-bold text-rose-400">₦3.5M</div>
                <p className="text-gray-400 text-sm mt-2">One-time + ad spend</p>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  'Comprehensive digital strategy',
                  'Multi-campaign management',
                  'Peer-to-peer fundraising',
                  'Grant writing support',
                  'Media relations',
                  'Full content marketing',
                  'Dedicated account manager',
                  '24/7 support'
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
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
            Ready to Make Bigger Impact?
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Book a free non-profit marketing consultation. We'll analyze your organization and show you how to grow your impact.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 px-10 py-5 bg-pink-500 hover:bg-pink-600 text-white text-lg font-bold rounded-full transition-all duration-300"
          >
            Get Your Free Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-sm text-gray-500 mt-6">
            We work with NGOs, charities, foundations, religious organizations, and all non-profits across Nigeria.
          </p>
        </div>
      </section>
    </div>
  );
}

