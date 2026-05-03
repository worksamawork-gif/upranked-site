import { motion } from 'framer-motion';
import { usePageMeta } from '@/hooks/usePageMeta';

export default function Terms() {
  usePageMeta({
    title: 'Terms of Service',
    description: 'Terms of Service for upranked.io — the conditions governing use of our website and services.',
  });

  return (
    <div className="min-h-screen bg-navy text-white">
      <section className="pt-32 pb-20 px-4 md:px-6 lg:px-8">
        <div className="container-premium max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-accent font-semibold tracking-widest text-sm uppercase block mb-4">Legal</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Terms of Service</h1>
            <p className="text-text-secondary text-sm mb-10">Last updated: 1 May 2026</p>

            <div className="prose prose-invert max-w-none space-y-8 text-text-secondary leading-relaxed">
              <section>
                <h2 className="text-xl font-bold text-white mb-3">1. Agreement to Terms</h2>
                <p>By accessing or using upranked.io ("the Website") or engaging our services, you agree to be bound by these Terms of Service. If you do not agree, please do not use the Website or our services.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">2. Services</h2>
                <p>upranked.io provides SEO strategy, content architecture, growth intelligence, and related digital services to businesses. The specific scope, deliverables, timelines, and fees for each engagement are set out in a separate proposal or service agreement signed by both parties.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">3. Intellectual Property</h2>
                <p>All content on this Website — including text, graphics, logos, and methodology documentation — is the intellectual property of upranked.io and Sama Alaa unless otherwise stated. You may not reproduce, distribute, or create derivative works without prior written consent.</p>
                <p className="mt-3">Work product created specifically for a client under a signed agreement becomes the client's property upon full payment, unless otherwise specified.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">4. Limitation of Liability</h2>
                <p>SEO outcomes depend on many factors outside our direct control, including search engine algorithm changes, competitor activity, and client-side implementation. While we apply proven frameworks and best practices, upranked.io does not guarantee specific ranking positions or traffic volumes.</p>
                <p className="mt-3">To the maximum extent permitted by law, upranked.io's liability for any claim arising from our services is limited to the fees paid for the relevant engagement in the preceding 3 months.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">5. Confidentiality</h2>
                <p>Both parties agree to keep confidential any proprietary information shared during the engagement. This obligation survives termination of the service agreement.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">6. Governing Law</h2>
                <p>These Terms are governed by the laws of the United Arab Emirates. Any disputes shall first be attempted to be resolved through good-faith negotiation. If unresolved, disputes shall be subject to the jurisdiction of the courts of Dubai, UAE.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">7. Contact</h2>
                <p>For any questions regarding these Terms, contact us at <a href="mailto:Sam@upranked.io" className="text-accent hover:underline">Sam@upranked.io</a>.</p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
