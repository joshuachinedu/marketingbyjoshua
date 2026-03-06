import Link from 'next/link';
import { ArrowRight, CheckCircle, TrendingUp, Users, Vote, Building, Globe, Mail, Handshake, Calendar, DollarSign, Shield } from 'lucide-react';

export const metadata = {
  title: 'Political Digital Marketing | Campaign Strategy for Politicians, Senators & Legislators in Nigeria',
  description: 'Win elections with strategic digital marketing for Nigerian politicians. Campaign websites, donation systems, voter engagement, social media management, and targeted ads that win votes.',
};

export default function PoliticiansPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-[#0A0A0A] to-[#111111]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">
                Political Marketing Nigeria
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Win Your Election with
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-500">
                  {' '}Digital Power
                </span>
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                Strategic digital marketing campaigns for senators, legislators, commissioners, governors, and political office seekers in Nigeria. Build your brand, engage voters, and win elections with data-driven campaign strategies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Get Your Campaign Strategy
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  href="/case-studies"
                  className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 font-semibold rounded-full transition-all duration-300 text-center"
                >
                  See Campaign Results
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { stat: '2.4M+', label: 'Voters Reached' },
                { stat: '89%', label: 'Campaign Win Rate' },
                { stat: '76%', label: 'Voter Engagement' },
                { stat: '₦12M', label: 'Cost Per Vote Saved' }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-xl">
                  <div className="text-3xl font-bold text-blue-400 mb-2">{item.stat}</div>
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
              Challenges Politicians Face
            </h2>
            <p className="text-xl text-gray-400">
              We understand political campaigns. Here's how we solve your biggest challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                problem: 'Low Voter Awareness',
                solution: 'Strategic social media campaigns and content that put your name and policies in front of thousands of voters daily'
              },
              {
                problem: 'Limited Campaign Budget',
                solution: 'Cost-effective digital strategies that maximize every naira spent, reaching more voters than traditional methods'
              },
              {
                problem: 'Difficulty Connecting with Youth',
                solution: 'Youth-focused digital campaigns on TikTok, Instagram, and WhatsApp that resonate with young voters'
              },
              {
                problem: 'No Online Presence',
                solution: 'Professional campaign website that showcases your manifesto, achievements, and vision'
              },
              {
                problem: 'Negative Online Narrative',
                solution: 'Reputation management and positive content creation that amplifies your accomplishments'
              },
              {
                problem: 'Poor Constituency Engagement',
                solution: 'Digital town halls, WhatsApp groups, and online feedback systems that keep constituents connected'
              }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-blue-500/30 transition-all">
                <div className="text-red-400 font-bold mb-3">❌ {item.problem}</div>
                <div className="text-blue-400 font-semibold mb-2">✓ Our Solution:</div>
                <p className="text-gray-400 text-sm">{item.solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services for Politicians */}
      <section className="py-24 bg-gradient-to-b from-[#111111] to-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Complete Political Digital Marketing
            </h2>
            <p className="text-xl text-gray-400">
              Everything you need to win your election
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Globe,
                title: 'Campaign Website',
                benefits: [
                  'Professional campaign website design',
                  'Online donation integration',
                  'Event calendar and rally updates',
                  'Volunteer sign-up forms',
                  'Media gallery and press releases'
                ]
              },
              {
                icon: Vote,
                title: 'Social Media Management',
                benefits: [
                  'Facebook, Instagram, Twitter/X management',
                  'Daily content creation and posting',
                  'Community engagement and responses',
                  'Influencer partnership coordination',
                  'WhatsApp broadcast lists'
                ]
              },
              {
                icon: TrendingUp,
                title: 'Targeted Advertising',
                benefits: [
                  'Geo-targeted ads to your constituency',
                  'Custom audience targeting by age, interests',
                  'Retargeting to engage interested voters',
                  'Video ads that tell your story',
                  'Real-time campaign analytics'
                ]
              },
              {
                icon: Building,
                title: 'Constituency Engagement',
                benefits: [
                  'Digital town halls and live streams',
                  'Online petition and feedback tools',
                  'Constituency mapping and outreach',
                  'SMS and WhatsApp campaigns',
                  'Volunteer recruitment automation'
                ]
              },
              {
                icon: DollarSign,
                title: 'Donation & Fundraising Systems',
                benefits: [
                  'Secure online donation platform',
                  'Recurring donation setup',
                  'Campaign merchandise store',
                  'Event ticket sales integration',
                  'Donor management database'
                ]
              },
              {
                icon: Shield,
                title: 'Reputation Management',
                benefits: [
                  'Online presence monitoring',
                  'Positive content creation',
                  'Crisis communication response',
                  'Fact-checking and myth busting',
                  'Media relations management'
                ]
              }
            ].map((service, i) => (
              <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-blue-500/30 transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-blue-500/10 rounded-lg">
                    <service.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                </div>
                <ul className="space-y-3">
                  {service.benefits.map((benefit, j) => (
                    <li key={j} className="flex items-start gap-2 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
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
              Transparent Pricing for Political Campaigns
            </h2>
            <p className="text-xl text-gray-400">
              Choose the package that fits your campaign needs and budget
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Package */}
            <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Starter Campaign</h3>
                <div className="text-4xl font-bold text-blue-400">₦2.5M</div>
                <p className="text-gray-400 text-sm mt-2">One-time payment</p>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  'Campaign website (5 pages)',
                  'Basic social media setup (2 platforms)',
                  'Google Ads management (₦500K ad spend included)',
                  'Monthly performance report',
                  'Email support'
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

            {/* Professional Package - Featured */}
            <div className="p-8 bg-gradient-to-b from-blue-500/10 to-emerald-500/10 border border-blue-500/30 rounded-2xl relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-500 text-white text-sm font-bold rounded-full">
                MOST POPULAR
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Professional Campaign</h3>
                <div className="text-4xl font-bold text-blue-400">₦5M</div>
                <p className="text-gray-400 text-sm mt-2">One-time payment</p>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  'Premium campaign website (10 pages)',
                  'Full social media management (4 platforms)',
                  'Donation & fundraising system',
                  'WhatsApp campaign setup (10K contacts)',
                  'Google & Facebook Ads (₦1M ad spend included)',
                  'Constituency mapping',
                  'Bi-weekly strategy calls',
                  'Priority support'
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link 
                href="/contact"
                className="block w-full py-3 bg-blue-500 hover:bg-blue-600 text-white text-center rounded-full font-semibold transition-all"
              >
                Get Started
              </Link>
            </div>

            {/* Retainer Package */}
            <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Campaign Retainer</h3>
                <div className="text-4xl font-bold text-emerald-400">₦800K</div>
                <p className="text-gray-400 text-sm mt-2">per month</p>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  'Everything in Professional package',
                  'Ongoing content creation',
                  'Daily social media posting',
                  'Continuous ad optimization',
                  'Weekly analytics & strategy calls',
                  '24/7 campaign support',
                  'Crisis management team on standby',
                  'Post-election analytics'
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
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

          {/* Custom Campaign Note */}
          <div className="mt-12 text-center">
            <p className="text-gray-400">
              Need a custom package for a governorship, senatorial, or presidential campaign?{' '}
              <Link href="/contact" className="text-blue-400 hover:underline">
                Contact us for a custom quote
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className="py-24 bg-gradient-to-b from-[#111111] to-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How We Work with Political Clients
            </h2>
            <p className="text-xl text-gray-400">
              Flexible engagement models to match your campaign timeline and budget
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Calendar,
                title: 'One-Time Project',
                description: 'Perfect for candidates with fixed campaign periods',
                details: [
                  'Define project scope and timeline',
                  'Fixed price quote',
                  'Deliverables within campaign period',
                  'Post-campaign handover and training'
                ]
              },
              {
                icon: Handshake,
                title: 'Retainer Model',
                description: 'Ongoing support throughout your political journey',
                details: [
                  'Monthly recurring fee',
                  'Flexible scope of work',
                  'Priority access and support',
                  'Scale up/down as needed'
                ]
              },
              {
                icon: Users,
                title: 'Campaign Team',
                description: 'Full-service digital campaign team',
                details: [
                  'Dedicated campaign manager',
                  'In-house creative team',
                  'Daily content and ad management',
                  'Real-time reporting dashboard'
                ]
              },
              {
                icon: TrendingUp,
                title: 'Performance-Based',
                description: 'Results-driven engagement for serious campaigns',
                details: [
                  'Base fee + performance bonuses',
                  'KPIs tied to voter engagement',
                  'Transparent reporting',
                  'Aligned incentives for victory'
                ]
              }
            ].map((model, i) => (
              <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-blue-500/30 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-500/10 rounded-lg">
                    <model.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold">{model.title}</h3>
                </div>
                <p className="text-gray-400 mb-4">{model.description}</p>
                <ul className="space-y-2">
                  {model.details.map((detail, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                      {detail}
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
          <div className="p-12 bg-gradient-to-br from-blue-500/10 to-emerald-500/10 border border-blue-500/20 rounded-3xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-blue-400 font-semibold mb-4">CASE STUDY</div>
                <h3 className="text-3xl font-bold mb-4">
                  How Senator Akinsola Won By 120,000 Votes
                </h3>
                <p className="text-gray-300 mb-6">
                  "Our digital campaign transformed my candidacy. From a virtually unknown candidate, we built a movement that reached millions of voters. The WhatsApp groups and targeted ads made the difference."
                </p>
                <div className="text-lg font-semibold mb-6">
                  — Senator Akinsola, Lagos
                </div>
                
                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div>
                    <div className="text-3xl font-bold text-blue-400">+120K</div>
                    <div className="text-sm text-gray-400">Vote Margin</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-400">2.4M</div>
                    <div className="text-sm text-gray-400">Voters Reached</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-400">68%</div>
                    <div className="text-sm text-gray-400">Youth Votes</div>
                  </div>
                </div>

                <Link 
                  href="/case-studies"
                  className="inline-flex items-center gap-2 text-blue-400 font-semibold hover:gap-4 transition-all"
                >
                  Read Full Case Study
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              <div className="space-y-4">
                <div className="p-6 bg-white/5 rounded-xl">
                  <div className="font-semibold mb-2">What We Did:</div>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• Built professional campaign website</li>
                    <li>• Created targeted Facebook and Instagram ads</li>
                    <li>• Set up WhatsApp broadcast lists (50,000+ contacts)</li>
                    <li>• Organized digital town halls</li>
                    <li>• Trained campaign spokespersons</li>
                  </ul>
                </div>
                <div className="p-6 bg-white/5 rounded-xl">
                  <div className="font-semibold mb-2">Timeline:</div>
                  <div className="text-sm text-gray-400">
                    <div>Month 1-2: Brand building and website</div>
                    <div>Month 3-4: Social media launch</div>
                    <div>Month 5-6: Ground campaign amplification</div>
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
            Ready to Win Your Election?
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Book a free campaign consultation. We'll analyze your race and show you exactly how digital marketing can secure your victory.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 px-10 py-5 bg-blue-500 hover:bg-blue-600 text-white text-lg font-bold rounded-full transition-all duration-300"
          >
            Get Your Free Campaign Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-sm text-gray-500 mt-6">
            No obligation. We serve senators, legislators, governors, commissioners, and all political office seekers across Nigeria.
          </p>
        </div>
      </section>
    </div>
  );
}
