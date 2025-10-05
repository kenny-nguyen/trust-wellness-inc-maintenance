import { useState } from 'react';
import { Settings, Lock, Eye } from 'lucide-react';

interface MaintenancePageProps {
  message: string;
  estimatedEndTime?: string;
  onPreviewUnlock: (password: string) => void;
}

export function MaintenancePage({ message, estimatedEndTime, onPreviewUnlock }: MaintenancePageProps) {
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      await onPreviewUnlock(password);
    } catch (err) {
      setError('Incorrect password. Please try again.');
      setPassword('');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#40E0D0]/20 via-white to-[#40E0D0]/10 flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#40E0D0]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-2xl w-full relative z-10">
        <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-gray-200 shadow-2xl">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-[#40E0D0]/20 blur-2xl rounded-full"></div>
              <div className="relative bg-gradient-to-br from-[#40E0D0] to-[#40E0D0]/80 p-6 rounded-full">
                <Settings className="w-12 h-12 text-white animate-spin" style={{ animationDuration: '3s' }} />
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-semibold text-center text-black mb-4">
            Under Maintenance
          </h1>

          <p className="text-xl text-center text-gray-700 mb-8 leading-relaxed">
            {message}
          </p>

          {estimatedEndTime && (
            <div className="bg-[#40E0D0]/5 rounded-lg p-4 mb-8 border border-[#40E0D0]/20">
              <p className="text-center text-gray-700">
                <span className="font-semibold text-black">Expected completion:</span>{' '}
                {new Date(estimatedEndTime).toLocaleString()}
              </p>
            </div>
          )}

          <div className="space-y-4">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

            {!showPasswordInput ? (
              <button
                onClick={() => setShowPasswordInput(true)}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-gray-50 border-2 border-[#40E0D0] rounded-full text-black font-medium transition-all duration-200 hover:shadow-lg hover:shadow-[#40E0D0]/20"
              >
                <Eye className="w-5 h-5" />
                Preview Mode
              </button>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    Enter Preview Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 bg-white border-2 border-gray-300 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:border-[#40E0D0] focus:ring-2 focus:ring-[#40E0D0]/20 transition-all"
                      placeholder="Enter password"
                      required
                      disabled={isLoading}
                      autoFocus
                    />
                  </div>
                  {error && (
                    <p className="mt-2 text-sm text-red-600">{error}</p>
                  )}
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setShowPasswordInput(false);
                      setPassword('');
                      setError('');
                    }}
                    className="flex-1 px-6 py-3 bg-white hover:bg-gray-50 border-2 border-gray-300 rounded-full text-black font-medium transition-all duration-200"
                    disabled={isLoading}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-[#40E0D0] hover:bg-[#40E0D0]/90 rounded-full text-white font-medium transition-all duration-200 hover:shadow-xl hover:shadow-[#40E0D0]/30 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Verifying...' : 'Access Preview'}
                  </button>
                </div>
              </form>
            )}
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-center text-gray-600 text-sm">
              Thank you for your patience. We'll be back online shortly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
