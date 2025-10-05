interface HeroSectionProps {
  onBookNowClick: () => void;
  onEbookClick: () => void;
}

export default function HeroSection({ onBookNowClick, onEbookClick }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#40E0D0]/20 via-white to-[#40E0D0]/10" />

      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#40E0D0]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center animate-fade-in-up">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-black mb-6 leading-tight">
          Healing Through Understanding
          <br />
          and Connection
        </h1>

        <p className="text-lg sm:text-xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
          Compassionate grief counseling and holistic nutrition to help you find balance in mind and body.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={onBookNowClick}
            className="bg-[#40E0D0] text-white px-8 py-3.5 rounded-full font-medium text-lg hover:shadow-xl hover:shadow-[#40E0D0]/30 hover:scale-105 transition-all"
          >
            Book Now
          </button>

          <button
            onClick={onEbookClick}
            className="bg-white text-black border-2 border-[#D4AF37] px-8 py-3.5 rounded-full font-medium text-lg hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:shadow-xl hover:shadow-[#D4AF37]/20 hover:scale-105 transition-all"
          >
            Download Free Ebook
          </button>
        </div>
      </div>
    </section>
  );
}
