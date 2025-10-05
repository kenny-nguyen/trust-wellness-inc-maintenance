import { Heart, Leaf, Sparkles } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const services = [
  {
    icon: Heart,
    title: 'Grief Counseling',
    description: 'Emotional support through loss and life transitions.',
    details: 'A safe space to process loss, transitions, and emotions with compassion.',
  },
  {
    icon: Leaf,
    title: 'Holistic Nutrition',
    description: 'Guidance for emotional and physical nourishment.',
    details: 'Support your emotional healing through mindful nourishment.',
  },
  {
    icon: Sparkles,
    title: 'Integrated Therapy',
    description: 'Combining psychotherapy and nutrition for full-spectrum healing.',
    details: 'Unite mind and body for balance and sustainable growth.',
  },
];

interface ServicesSectionProps {
  onBookNowClick: () => void;
}

export default function ServicesSection({ onBookNowClick }: ServicesSectionProps) {
  const ref = useScrollAnimation();

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-black mb-4">
            Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive support for your healing journey, addressing both mind and body.
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#40E0D0] to-[#40E0D0]/70 rounded-2xl flex items-center justify-center mb-6 shadow-md">
                  <Icon size={32} className="text-white" />
                </div>

                <h3 className="text-xl font-semibold text-black mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>

                <p className="text-gray-700 italic text-sm">
                  {service.details}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <button
            onClick={onBookNowClick}
            className="bg-[#40E0D0] text-white px-10 py-3.5 rounded-full font-medium text-lg hover:shadow-xl hover:shadow-[#40E0D0]/30 hover:scale-105 transition-all"
          >
            Book a Session
          </button>
        </div>
      </div>
    </section>
  );
}
