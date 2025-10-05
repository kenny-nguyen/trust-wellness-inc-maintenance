import { Heart } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function AboutSection() {
  const ref = useScrollAnimation();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-[#40E0D0]/20 to-[#D4AF37]/20 rounded-3xl overflow-hidden shadow-xl">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 bg-[#40E0D0] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Heart size={64} className="text-white" />
                  </div>
                  <p className="text-2xl font-semibold text-gray-700">Michelle</p>
                  <p className="text-gray-600 mt-2">MEd, RP (Qualifying), R.H.N</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#D4AF37]/30 rounded-3xl -z-10" />
          </div>

          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-black mb-6">
              About Michelle
            </h2>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Michelle is a Registered Psychotherapist (Qualifying) and Registered Holistic Nutritionist based in Ontario. She helps individuals navigate grief, emotional healing, and wellness through a compassionate, whole-person approach.
              </p>

              <p>
                With her Master's in Education and specialized training in both psychotherapy and holistic nutrition, Michelle brings a unique perspective to healing. She understands that true wellness encompasses both emotional and physical well-being.
              </p>

              <p className="font-medium text-[#40E0D0] italic">
                "Healing is about reconnecting with your whole self — emotionally, mentally, and physically."
              </p>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-[#40E0D0]/10 to-[#D4AF37]/10 rounded-xl border border-[#40E0D0]/20">
              <h3 className="font-semibold text-black mb-3">Credentials & Expertise</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#40E0D0] mr-2">•</span>
                  <span>Master of Education (MEd)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#40E0D0] mr-2">•</span>
                  <span>Registered Psychotherapist (Qualifying)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#40E0D0] mr-2">•</span>
                  <span>Registered Holistic Nutritionist (R.H.N)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#40E0D0] mr-2">•</span>
                  <span>Specialization in grief counseling and emotional wellness</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
