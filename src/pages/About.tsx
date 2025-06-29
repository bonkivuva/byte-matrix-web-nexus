
import {
  ArrowRight,
  CheckCircle,
  Users,
  Award,
  Shield,
  Zap,
  Server,
  Star,
  Lightbulb,
  Moon,
  Sun,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";

const About = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 font-light transition-colors duration-300">
      {/* Header */}
      <header className="border-b border-gray-100/50 dark:border-gray-800/50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <img
                src="/lovable-uploads/6a15981c-c79b-411e-8627-f69fee6fedb3.png"
                alt="Byte Matrix Technologies"
                className="h-16 w-auto drop-shadow-lg transition-transform hover:scale-105"
                loading="eager"
              />
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                to="/services"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-light relative group"
              >
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                to="/about"
                className="text-blue-600 dark:text-blue-400 font-medium relative"
              >
                About
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400"></span>
              </Link>
              <Link
                to="/contact"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-light relative group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleDarkMode}
                className="ml-4 p-2"
              >
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(71 85 105 / 0.3) 1px, transparent 0)',
            backgroundSize: '20px 20px'
          }}></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Hero Statement */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center px-4 py-2 bg-blue-600 rounded-full text-white font-light mb-6">
                <Users className="w-4 h-4 mr-2" />
                About Us
              </div>
              <h1 className="text-4xl lg:text-5xl font-extralight text-gray-900 dark:text-white mb-8 tracking-tight">
                <span className="text-blue-600 dark:text-blue-400">Byte Matrix Technologies</span>
                <br />
                Your Partner in Innovation & Reliability
              </h1>
              <div className="max-w-5xl mx-auto">
                <p className="text-xl lg:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8 font-extralight">
                  We deliver <span className="font-light text-blue-600 dark:text-blue-400">unparalleled IT services</span> and
                  <span className="font-light text-blue-600 dark:text-blue-400"> cutting-edge hardware solutions</span> that empower
                  businesses and individuals to thrive in today's fast-paced digital landscape.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-extralight">
                  Our mission is to provide the{" "}
                  <span className="font-normal text-gray-900 dark:text-white">tools, technologies, and support</span> you need to
                  transform challenges into competitive advantages.
                </p>
              </div>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-8 rounded-full"></div>
            </div>

            {/* Value Proposition */}
            <div className="mb-20">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl border border-blue-100/50 dark:border-blue-800/50">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center px-4 py-2 bg-blue-50 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 font-light mb-6">
                    <Lightbulb className="w-4 h-4 mr-2" />
                    Complete Solutions Portfolio
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-extralight text-gray-900 dark:text-white mb-6">Tailored for Every Need</h3>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center max-w-4xl mx-auto font-extralight">
                  Whether you need <span className="font-light text-blue-600 dark:text-blue-400">dependable tech support</span> for
                  seamless operations,
                  <span className="font-light text-blue-600 dark:text-blue-400"> high-performance computing equipment</span> for demanding
                  workloads, or <span className="font-light text-blue-600 dark:text-blue-400">efficient printing solutions</span> for
                  streamlined document management, we provide innovative answers to your most pressing technology
                  challenges.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-4 gap-8 mb-20">
              {[
                { number: "500+", label: "Satisfied Clients", icon: Users },
                { number: "10+", label: "Industries Served", icon: Award },
                { number: "99.9%", label: "Uptime Guarantee", icon: Shield },
                { number: "24/7", label: "Support Available", icon: Zap },
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-4xl font-extralight text-gray-900 dark:text-white mb-2">{stat.number}</div>
                  <div className="text-gray-600 dark:text-gray-400 font-light">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Professional Expertise */}
            <div className="mb-20">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-3xl blur-2xl"></div>
                    <img
                      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=450&fit=crop&crop=center"
                      alt="Professional IT technician configuring network equipment"
                      className="relative w-full h-[450px] object-cover rounded-2xl shadow-2xl"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="inline-flex items-center px-4 py-2 bg-blue-50 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 font-light mb-6">
                    <Award className="w-4 h-4 mr-2" />
                    Professional Excellence
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-extralight text-gray-900 dark:text-white mb-6 tracking-tight">
                    From Startups to Enterprises
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8 font-extralight">
                    From small startups establishing their technological foundation to large enterprises seeking
                    scalable solutions, we assist at every stage of your digital journey. Our certified technicians
                    ensure solutions are implemented correctly and maintained professionally.
                  </p>
                  <div className="space-y-4">
                    {[
                      "Certified professionals with proven industry expertise",
                      "Hands-on approach to every project and challenge",
                      "Ongoing support with proactive maintenance",
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-4">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300 font-light">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* What Sets Us Apart */}
            <div className="mb-20">
              <div className="text-center mb-16">
                <div className="inline-flex items-center px-4 py-2 bg-indigo-50 dark:bg-indigo-900/30 rounded-full text-indigo-600 dark:text-indigo-400 font-light mb-6">
                  <Star className="w-4 h-4 mr-2" />
                  What Sets Us Apart
                </div>
                <h3 className="text-3xl lg:text-4xl font-extralight text-gray-900 dark:text-white mb-6 tracking-tight">
                  Our Competitive Edge
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    icon: Users,
                    title: "Cross-Industry Expertise",
                    description:
                      "Years of experience serving diverse sectors gives us deep understanding of unique industry demands and specialized solution requirements.",
                  },
                  {
                    icon: Zap,
                    title: "Customized Strategies",
                    description:
                      "No one-size-fits-all approaches. We craft personalized strategies and select premium products that align with your specific goals and budget.",
                  },
                  {
                    icon: Shield,
                    title: "Uncompromising Quality",
                    description:
                      "Every service and product undergoes rigorous quality checks to ensure maximum reliability, optimal performance, and long-term durability.",
                  },
                  {
                    icon: Server,
                    title: "Proactive Excellence",
                    description:
                      "We don't just react to issues—we anticipate them. Through continuous monitoring and preventive maintenance, we maximize your productivity.",
                  },
                ].map((item, index) => (
                  <div key={index} className="group">
                    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100/50 dark:border-gray-700/50 hover:-translate-y-1">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                      <h4 className="text-xl font-light text-gray-900 dark:text-white mb-4">{item.title}</h4>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-extralight">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 rounded-3xl p-12 text-white text-center shadow-2xl overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(255 255 255 / 0.3) 1px, transparent 0)',
                    backgroundSize: '20px 20px'
                  }}></div>
                </div>
                <div className="relative z-10">
                  <h3 className="text-3xl lg:text-4xl font-extralight mb-6">
                    Transform Your Technology Into Strategic Advantage
                  </h3>
                  <p className="text-xl text-blue-100 leading-relaxed max-w-4xl mx-auto mb-8 font-extralight">
                    Let us be your trusted partner in achieving digital excellence. Discover how Byte Matrix
                    Technologies can revolutionize your technology infrastructure and drive your success forward.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Button
                      size="lg"
                      className="bg-white text-blue-600 hover:bg-blue-50 px-10 py-4 text-lg shadow-xl hover:shadow-2xl font-light transition-all duration-300 transform hover:-translate-y-1"
                      asChild
                    >
                      <Link to="/contact">
                        <ArrowRight className="mr-2 h-5 w-5" />
                        Start Your Transformation
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-2 border-white/30 text-white hover:bg-white hover:text-blue-600 hover:border-white px-10 py-4 text-lg bg-transparent transition-all duration-300 transform hover:-translate-y-1 font-light"
                      asChild
                    >
                      <Link to="/services">Explore Our Solutions</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
