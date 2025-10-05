import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function TestimonialSection() {
  const ref = useScrollAnimation();

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center">
          <div className="mb-6">
            <div className="w-1 h-12 bg-gradient-to-b from-[#D4AF37] to-transparent mx-auto mb-6" />
          </div>

          <blockquote className="text-2xl sm:text-3xl font-medium text-gray-800 italic leading-relaxed mb-6">
            "Healing doesn't mean the damage never existed. It means it no longer controls your life."
          </blockquote>

          <div className="w-1 h-12 bg-gradient-to-t from-[#D4AF37] to-transparent mx-auto mt-6" />
        </div>
      </div>
    </section>
  );
}
