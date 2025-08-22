
import {
  Mail,
  Phone,
  ArrowRight,
  Clock,
  
  Star,
  MapPin,
  Send,
  Heart,
  Zap,
  Target,
} from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SEOHead from "@/components/SEOHead";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import ProfessionalHeader from "@/components/ProfessionalHeader";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 font-roboto transition-all duration-700 relative overflow-hidden">
      <SEOHead 
        title="Contact Byte Matrix Technologies - Get Your Free IT Consultation"
        description="Contact our IT experts for professional technology solutions. Get free consultation, 24/7 support, and transform your business with our comprehensive IT services."
        keywords="contact IT services, free IT consultation, technology support, professional IT help, enterprise solutions contact"
      />
      
      <ProfessionalHeader currentPage="contact" />

      {/* Premium animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[1000px] h-[1000px] bg-gradient-to-br from-blue-400/6 to-cyan-400/6 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-[1000px] h-[1000px] bg-gradient-to-tr from-purple-400/6 to-pink-400/6 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-indigo-400/4 to-blue-400/4 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-l from-emerald-400/4 to-teal-400/4 rounded-full blur-2xl animate-float" style={{ animationDelay: '3s' }}></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-20 w-3 h-3 bg-blue-400 rounded-full animate-ping opacity-40"></div>
        <div className="absolute top-40 right-32 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-30" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-40 w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping opacity-35" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-pink-400 rounded-full animate-ping opacity-25" style={{ animationDelay: '3s' }}></div>
      </div>


      {/* Hero Contact Section */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 animate-fade-in">
              <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm border border-blue-200/30 dark:border-blue-700/30 rounded-full text-blue-700 dark:text-blue-300 font-semibold mb-8 text-lg shadow-lg">
                <Heart className="w-6 h-6 mr-3 animate-pulse text-red-500" />
                Let's Connect & Create Magic
              </div>
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 tracking-tight bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
                Ready to Transform?
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 font-light max-w-5xl mx-auto leading-relaxed">
                Connect with Kenya's leading tech innovators. Based in Nairobi, we empower African businesses with world-class technology solutions that drive success across the continent.
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 mx-auto mt-8 rounded-full shadow-lg"></div>
            </div>

            {/* Lead Capture Form */}
            <div className="mb-20 animate-slide-up">
              <LeadCaptureForm />
            </div>

            {/* Enhanced Working Hours Card */}
            <div className="mb-16 animate-slide-up">
              <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border-0 shadow-2xl hover:shadow-3xl transition-all duration-700 max-w-2xl mx-auto hover:-translate-y-4 hover:scale-105 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500"></div>
                <CardContent className="p-10 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 via-emerald-500 to-teal-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl animate-pulse-slow">
                    <Clock className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Business Hours</h3>
                    <div className="space-y-4 text-gray-600 dark:text-gray-300">
                      <p className="font-medium text-lg">Monday - Saturday (EAT)</p>
                      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6 mb-4">
                        <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">9:00 AM - 6:00 PM</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">East Africa Time (UTC+3)</p>
                      </div>
                    <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 rounded-xl p-4">
                      <p className="font-medium text-red-600 dark:text-red-400">Closed on Sundays</p>
                      <p className="font-medium text-red-600 dark:text-red-400">& Public Holidays</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Methods */}
            <div className="grid md:grid-cols-2 gap-10 mb-16">
              {[
                {
                  icon: Phone,
                  title: "Call or WhatsApp (Kenya)",
                  description: "Connect with our Nairobi-based tech experts for instant support and innovative solutions tailored for African businesses",
                  contact: "+254 724 367 794",
                  href: "tel:+254724367794",
                  gradient: "from-green-500 via-emerald-500 to-teal-600",
                  delay: "0s"
                },
                {
                  icon: Mail,
                  title: "Email Us (Kenya Office)",
                  description: "Reach our Kenyan headquarters for comprehensive IT solutions designed to empower East African enterprises",
                  contact: "bytematrixtechnologies@gmail.com",
                  href: "mailto:bytematrixtechnologies@gmail.com",
                  gradient: "from-blue-500 via-indigo-500 to-purple-600",
                  delay: "0.2s"
                },
              ].map((contact, index) => (
                <Card
                  key={index}
                  className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border-0 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-6 hover:scale-105 overflow-hidden group animate-scale-in relative"
                  style={{ animationDelay: contact.delay }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${contact.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700`}></div>
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <CardContent className="p-0 relative z-10">
                    <div className={`relative h-52 bg-gradient-to-br ${contact.gradient} flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-700`}>
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                      <div className="relative z-10 text-center">
                        <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500">
                          <contact.icon className="h-12 w-12 text-white" />
                        </div>
                        <div className="text-white/90 font-medium text-lg">{contact.title}</div>
                      </div>
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                        <Star className="h-8 w-8 text-white animate-pulse" />
                      </div>
                    </div>
                    <div className="p-8 text-center">
                      <div className={`w-18 h-18 bg-gradient-to-br ${contact.gradient} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-125 group-hover:shadow-3xl transition-all duration-500`}>
                        <contact.icon className="h-9 w-9 text-white" />
                      </div>
                      <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-500">{contact.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-6 font-light leading-relaxed">{contact.description}</p>
                      <a
                        href={contact.href}
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 font-medium text-lg transition-colors duration-300 break-all hover:underline group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600"
                      >
                        {contact.contact}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Premium Social Media Section */}
            <div className="text-center mb-16 animate-fade-in">
              <div className="mb-10">
                <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600/10 to-pink-600/10 backdrop-blur-sm border border-purple-200/30 dark:border-purple-700/30 rounded-full text-purple-700 dark:text-purple-300 font-semibold mb-8 text-lg shadow-lg">
                  <Target className="w-6 h-6 mr-3 animate-pulse" />
                  Follow Our Innovation Journey
                </div>
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-purple-800 to-pink-800 dark:from-white dark:via-purple-200 dark:to-pink-200 bg-clip-text text-transparent">
                  🚀 Innovation in Motion!
                </h2>
                <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 font-light max-w-5xl mx-auto mb-8 leading-relaxed">
                  Follow Kenya's premier tech company on social media! See how we're revolutionizing East African businesses with cutting-edge solutions and transforming the digital landscape across Africa.
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-6 mb-10">
                <a
                  href="https://x.com/ByteMatrixTech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center px-8 py-4 bg-black/90 hover:bg-black text-white rounded-2xl transition-all duration-500 hover:scale-110 shadow-2xl hover:shadow-3xl backdrop-blur-sm transform hover:-translate-y-3"
                >
                  <svg className="w-5 h-5 mr-3 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  <span className="font-medium">X (Twitter)</span>
                </a>
                
                <a
                  href="https://www.facebook.com/share/1BSjKFRCUd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center px-8 py-4 bg-blue-600/90 hover:bg-blue-700 text-white rounded-2xl transition-all duration-500 hover:scale-110 shadow-2xl hover:shadow-3xl backdrop-blur-sm transform hover:-translate-y-3"
                >
                  <svg className="w-5 h-5 mr-3 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span className="font-medium">Facebook</span>
                </a>
                
                <a
                  href="https://www.instagram.com/byte_matrix_technologies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center px-8 py-4 bg-gradient-to-r from-purple-600/90 to-pink-600/90 hover:from-purple-700 hover:to-pink-700 text-white rounded-2xl transition-all duration-500 hover:scale-110 shadow-2xl hover:shadow-3xl backdrop-blur-sm transform hover:-translate-y-3"
                >
                  <svg className="w-5 h-5 mr-3 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348-1.051 2.348-2.348 2.348zm7.718 0c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348c1.297 0 2.348 1.051 2.348 2.348s-1.051 2.348-2.348 2.348z"/>
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span className="font-medium">Instagram</span>
                </a>
              </div>
              
                <p className="text-lg text-blue-600 dark:text-blue-400 font-medium animate-pulse-slow">
                  🇰🇪 Proudly Kenyan | Globally Competitive | Locally Trusted
                </p>
            </div>

            {/* Hero Image */}
            <div className="text-center mb-16 animate-fade-in">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl max-w-6xl mx-auto">
                <img
                  src="/lovable-uploads/babb4625-0209-4f12-95b2-209a31633356.png"
                  alt="Collaborative team meeting with technology professionals working together"
                  className="w-full h-64 lg:h-80 object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-lg font-medium">Our Collaborative Approach</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-8 justify-center animate-scale-in">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white px-16 py-8 text-2xl shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-4 hover:scale-110 font-medium rounded-2xl group"
                asChild
              >
                <a href="tel:+254724367794">
                  <Phone className="mr-4 h-8 w-8 group-hover:animate-pulse" />
                  Call Now
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-blue-300/50 text-blue-600 dark:text-blue-400 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white hover:border-transparent px-16 py-8 text-2xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm transition-all duration-700 transform hover:-translate-y-4 hover:scale-110 font-medium rounded-2xl shadow-xl hover:shadow-2xl group"
                asChild
              >
                <a href="mailto:bytematrixtechnologies@gmail.com">
                  <Send className="mr-4 h-8 w-8 group-hover:animate-pulse" />
                  Send Email
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Action Button */}
      <Button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white p-5 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-125 z-50 animate-pulse-slow"
        size="sm"
      >
        <ArrowRight className="h-6 w-6 transform -rotate-90" />
      </Button>
    </div>
  );
};

export default Contact;
