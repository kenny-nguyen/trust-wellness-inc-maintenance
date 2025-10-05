export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#40E0D0]">Michelle</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Compassionate grief counseling and holistic nutrition to help you find balance in mind and body.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <button
                onClick={() => scrollToSection('home')}
                className="block text-gray-300 hover:text-[#40E0D0] transition-colors text-sm"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block text-gray-300 hover:text-[#40E0D0] transition-colors text-sm"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block text-gray-300 hover:text-[#40E0D0] transition-colors text-sm"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('resources')}
                className="block text-gray-300 hover:text-[#40E0D0] transition-colors text-sm"
              >
                Resources
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block text-gray-300 hover:text-[#40E0D0] transition-colors text-sm"
              >
                Contact
              </button>
            </nav>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Practice Info</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              MEd, Registered Psychotherapist (Qualifying), R.H.N
              <br />
              <br />
              Virtual sessions available for Ontario residents.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Michelle. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Your privacy is important. All consultations are confidential.
          </p>
        </div>
      </div>
    </footer>
  );
}
