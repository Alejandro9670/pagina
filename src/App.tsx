import { Shield, Users, TrendingUp, Phone, Mail, MapPin, ChevronRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Shield className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">SecureLife Insurance</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition">Services</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition">About</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
              Get Quote
            </button>
          </div>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Protect What Matters Most
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Comprehensive insurance solutions tailored to your needs. From health to property, we've got you covered.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition flex items-center justify-center">
                  Get Started
                  <ChevronRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition">
                  Learn More
                </button>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl h-96 flex items-center justify-center">
                <Shield className="h-48 w-48 text-blue-600 opacity-50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Insurance Services</h2>
            <p className="text-xl text-gray-600">Comprehensive coverage for every aspect of your life</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition">
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Health Insurance</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive health coverage for you and your family with access to top medical facilities.
              </p>
              <a href="#" className="text-blue-600 font-semibold hover:text-blue-700 flex items-center">
                Learn more
                <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition">
              <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Life Insurance</h3>
              <p className="text-gray-600 mb-6">
                Secure your family's future with flexible life insurance plans designed for peace of mind.
              </p>
              <a href="#" className="text-blue-600 font-semibold hover:text-blue-700 flex items-center">
                Learn more
                <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition">
              <div className="bg-orange-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Property Insurance</h3>
              <p className="text-gray-600 mb-6">
                Protect your home and assets with comprehensive property insurance coverage.
              </p>
              <a href="#" className="text-blue-600 font-semibold hover:text-blue-700 flex items-center">
                Learn more
                <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Us?</h2>
              <p className="text-lg text-gray-600 mb-8">
                With over 25 years of experience in the insurance industry, we've helped thousands of clients find the perfect coverage for their needs.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-lg p-2 mr-4">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Trusted Protection</h3>
                    <p className="text-gray-600">Industry-leading coverage from top-rated insurers</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-lg p-2 mr-4">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Expert Advisors</h3>
                    <p className="text-gray-600">Personalized guidance from certified insurance professionals</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-lg p-2 mr-4">
                    <TrendingUp className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Best Rates</h3>
                    <p className="text-gray-600">Competitive pricing with flexible payment options</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl h-96 flex items-center justify-center">
              <Users className="h-48 w-48 text-blue-600 opacity-50" />
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">Ready to secure your future? Contact us today</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>

            <div className="text-center p-8">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">info@securelife.com</p>
            </div>

            <div className="text-center p-8">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Office</h3>
              <p className="text-gray-600">123 Main St, Suite 100<br />New York, NY 10001</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-blue-400" />
                <span className="ml-2 font-bold">SecureLife Insurance</span>
              </div>
              <p className="text-gray-400 text-sm">
                Protecting what matters most since 1998
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition">Health Insurance</a></li>
                <li><a href="#" className="hover:text-white transition">Life Insurance</a></li>
                <li><a href="#" className="hover:text-white transition">Property Insurance</a></li>
                <li><a href="#" className="hover:text-white transition">Auto Insurance</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition">Cookie Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 SecureLife Insurance. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
