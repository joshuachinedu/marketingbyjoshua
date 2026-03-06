import Link from 'next/link';
import { ArrowRight, CheckCircle, TrendingUp, Users, Stethoscope, Calendar, Shield, Mail, Heart, Building2 } from 'lucide-react';

export const metadata = {
  title: 'Healthcare Digital Marketing | Medical Marketing for Hospitals, Clinics & Doctors in Nigeria',
  description: 'Grow your medical practice with strategic healthcare digital marketing. Patient acquisition, medical website design, local SEO, and reputation management for Nigerian healthcare providers.',
};

export default function HealthcarePage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-[#0A0A0A] to-[#111111]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 text-sm font-medium mb-6">
                Healthcare Marketing Nigeria
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Grow Your Medical Practice with
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-500">
                  {' '}Digital Marketing
                </span>
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                Strategic digital marketing for hospitals, clinics, doctors, and healthcare providers in Nigeria. Attract more patients, build trust, and grow your practice with data-driven healthcare marketing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="px-8 py-4 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-full transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Get Your Healthcare Strategy
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
                { stat: '312%', label: 'Patient Increase' },
                { stat: '4.9★', label: 'Online Rating Boost' },
                { stat: '89%', label: 'Appointment Fill Rate' },
                { stat: '₦2.1M', label: 'Monthly Revenue Growth' }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-xl">
                  <div className="text-3xl font-bold text-red-400 mb-2">{item.stat}</div>
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
              Challenges Healthcare Providers Face
            </h2>
            <p className="text-xl text-gray-400">
              We understand medical marketing. Here's how we solve your biggest challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                problem: 'Fewer Patients Than Capacity',
                solution: 'Targeted local SEO and Google Ads that put your practice in front of patients searching for your services'
              },
              {
                problem: 'No Online Presence',
                solution: 'Professional medical website that builds trust and converts visitors into patients'
              },
              {
                problem: 'Negative Reviews Hurting Practice',
                solution: 'Review management strategy that generates positive reviews and mitigates negative ones'
              },
              {
                problem: 'Hard to Reach Young Patients',
                solution: 'Social media and digital campaigns that connect with younger demographics'
              },
              {
                problem: 'No-show Appointments',
                solution: 'SMS and WhatsApp appointment reminders that reduce no-shows by up to 70%'
              },
              {
                problem: 'Competition from New Clinics',
                solution: 'Dominate local search and build a brand that patients trust over competitors'
              }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-red-500/30 transition-all">
                <div className="text-red-400 font-bold mb-3">❌ {item.problem}</div>
                <div className="text-red-400 font-semibold mb-2">✓ Our Solution:</div>
                <p className="text-gray-400 text-sm">{item.solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services for Healthcare */}
      <section className="py-24 bg-gradient-to-b from-[#111111] to-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Complete Healthcare Digital Marketing
            </h2>
            <p className="text-xl text-gray-400">
              Everything you need to grow your medical practice
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Stethoscope,
                title: 'Medical Website Design',
                benefits: [
                  'Professional healthcare website',
                  'Patient portal integration',
                  'Online appointment booking',
                  'Mobile-responsive design',
                  'HIPAA compliance ready'
                ]
              },
              {
                icon: TrendingUp,
                title: 'Local SEO for Medical Practices',
                benefits: [
                  'Rank #1 for local medical searches',
                  'Google Business Profile optimization',
                  'Medical review generation',
                  'Local citation building',
                  'Healthcare-specific keywords'
                ]
              },
              {
                icon: Users,
                title: 'Social Media for Healthcare',
                benefits: [
                  'Medical content marketing',
                  'Patient testimonial videos',
                  'Health tips and education',
                  'Community engagement',
                  'Influencer partnerships'
                ]
              },
              {
                icon: Shield,
                title: 'Reputation Management',
                benefits: [
                  'Review monitoring and response',
                  'Positive review generation',
                  'Negative review management',
                  'Patient feedback systems',
                  'Brand reputation protection'
                ]
              },
              {
                icon: Calendar,
                title: 'Appointment Automation',
                benefits: [
                  'Online booking system',
                  'SMS appointment reminders',
                  'WhatsApp follow-ups',
                  'No-show reduction tools',
                  'Patient retention campaigns'
                ]
              },
              {
                icon: Heart,
                title: 'Healthcare Advertising',
                benefits: [
                  'Google Ads for medical practices',
                  'Facebook/Instagram medical ads',
                  'Retargeting campaigns',
                  'Specialty procedure promotion',
                  'Telehealth promotion'
                ]
              }
            ].map((service, i) => (
              <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-red-500/30 transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-red-500/10 rounded-lg">
                    <service.icon className="w-6 h-6 text-red-400" />
                  </div>
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                </div>
                <ul className="space-y-3">
                  {service.benefits.map((benefit, j) => (
                    <li key={j} className="flex items-start gap-2 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
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
              Transparent Pricing for Healthcare Providers
            </h2>
            <p className="text-xl text-gray-400">
              Choose the package that fits your practice needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Package */}
            <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Clinic Starter</h3>
                <div className="text-4xl font-bold text-red-400">₦1.5M</div>
                <p className="text-gray-400 text-sm mt-2">One-time payment</p>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  'Medical website (5 pages)',
                  'Google Business Profile setup',
                  'Basic local SEO',
                  'Social media setup (2 platforms)',
                  'Monthly performance report'
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
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
            <div className="p-8 bg-gradient-to-b from-red-500/10 to-pink-500/10 border border-red-500/30 rounded-2xl relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-red-500 text-white text-sm font-bold rounded-full">
                MOST POPULAR
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Practice Growth</h3>
                <div className="text-4xl font-bold text-red-400">₦3.5M</div>
                <p className="text-gray-400 text-sm mt-2">One-time payment</p>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  'Premium medical website (10 pages)',
                  'Full local SEO optimization',
                  'Online appointment booking system',
                  'Social media management (4 platforms)',
                  'Review management system',
                  'Google Ads management',
                  'SMS appointment reminders',
                  'Priority support'
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link 
                href="/contact"
                className="block w-full py-3 bg-red-500 hover:bg-red-600 text-white text-center rounded-full font-semibold transition-all"
              >
                Get Started
              </Link>
            </div>

            {/* Hospital Package */}
            <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Hospital Full Service</h3>
                <div className="text-4xl font-bold text-pink-400">₦6M</div>
                <p className="text-gray-400 text-sm mt-2">One-time payment</p>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  'Multi-specialty hospital website',
                  'Full digital marketing suite',
                  'Patient portal integration',
                  'Telehealth platform setup',
                  'Brand reputation management',
                  'Content marketing strategy',
                  'Dedicated account manager',
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
            Ready to Grow Your Practice?
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Book a free healthcare marketing consultation. We'll analyze your practice and show you how to attract more patients.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 px-10 py-5 bg-red-500 hover:bg-red-600 text-white text-lg font-bold rounded-full transition-all duration-300"
          >
            Get Your Free Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-sm text-gray-500 mt-6">
            We serve hospitals, clinics, doctors, dentists, and all healthcare providers across Nigeria.
          </p>
        </div>
      </section>
    </div>
  );
}

