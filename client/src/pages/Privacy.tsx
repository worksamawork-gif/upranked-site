import { motion } from 'framer-motion';
import { usePageMeta } from '@/hooks/usePageMeta';

export default function Privacy() {
  usePageMeta({
    title: 'Privacy Policy',
    description: 'Privacy Policy for upranked.io — how we collect, use, and protect your personal data.',
  });

  return (
    <div className="min-h-screen bg-navy text-white">
      <section className="pt-32 pb-20 px-4 md:px-6 lg:px-8">
        <div className="container-premium max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-accent font-semibold tracking-widest text-sm uppercase block mb-4">Legal</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Privacy Policy</h1>
            <p className="text-text-secondary text-sm mb-10">Last updated: 1 May 2026</p>

            <div className="prose prose-invert max-w-none space-y-8 text-text-secondary leading-relaxed">
              <section>
                <h2 className="text-xl font-bold text-white mb-3">1. Who We Are</h2>
                <p>upranked.io is a premium SEO agency based in Dubai, UAE, operated by Sama Alaa. We provide SEO strategy and digital growth services to businesses across the GCC and globally. Contact: <a href="mailto:Sam@upranked.io" className="text-accent hover:underline">Sam@upranked.io</a></p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">2. Information We Collect</h2>
                <p>We collect information you voluntarily provide when you:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Submit a contact or enquiry form (name, email, phone, business details)</li>
                  <li>Book a consultation or diagnostic session</li>
                  <li>Correspond with us via email or WhatsApp</li>
                </ul>
                <p className="mt-3">We also collect anonymised analytics data (pages visited, session duration) via privacy-friendly analytics software. We do not use Google Analytics or any tracking that identifies individuals without consent.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">3. How We Use Your Information</h2>
                <ul className="list-disc pl-6 space-y-1">
                  <li>To respond to your enquiry and deliver the services you request</li>
                  <li>To send you relevant proposals, reports, or follow-ups related to your project</li>
                  <li>To improve our website and service quality</li>
                </ul>
                <p className="mt-3">We do not sell, rent, or share your personal data with third parties for marketing purposes.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">4. Data Retention</h2>
                <p>We retain contact and project data for as long as necessary to fulfil your service agreement and comply with legal obligations. You may request deletion at any time by emailing <a href="mailto:Sam@upranked.io" className="text-accent hover:underline">Sam@upranked.io</a>.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">5. Cookies</h2>
                <p>This website uses essential cookies only (session management). No advertising or cross-site tracking cookies are set. Our analytics tool is cookie-free and GDPR-compliant.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">6. Your Rights</h2>
                <p>Depending on your jurisdiction, you have rights to access, correct, or delete your personal data. To exercise these rights, contact us at <a href="mailto:Sam@upranked.io" className="text-accent hover:underline">Sam@upranked.io</a>.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">7. Changes to This Policy</h2>
                <p>We may update this policy from time to time. Material changes will be noted with an updated date at the top of this page.</p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
