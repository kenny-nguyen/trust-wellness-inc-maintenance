import { BookOpen } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface EbookSectionProps {
  onEbookClick: () => void;
}

export default function EbookSection({ onEbookClick }: EbookSectionProps) {
  const ref = useScrollAnimation();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className="bg-gradient-to-br from-[#40E0D0]/10 via-white to-[#D4AF37]/10 rounded-3xl p-8 sm:p-12 shadow-xl border border-[#40E0D0]/20"
        >
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 bg-[#40E0D0] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <BookOpen size={40} className="text-white" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-semibold text-black mb-4">
              Free Guide: Finding Balance Through Grief
            </h2>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Receive practical steps and reflections to begin healing with gentle self-care. This comprehensive guide offers emotional and nutritional insights to support you on your journey.
            </p>

            <button
              onClick={onEbookClick}
              className="bg-[#D4AF37] text-black px-10 py-3.5 rounded-full font-medium text-lg hover:shadow-xl hover:shadow-[#D4AF37]/30 hover:scale-105 transition-all"
            >
              Get My Free Ebook
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
