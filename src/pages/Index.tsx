
import {
  ArrowRight,
  CheckCircle,
  Computer,
  HardDrive,
  Mail,
  Phone,
  Printer,
  Server,
  Shield,
  Zap,
  Star,
  Users,
  Award,
  Lightbulb,
  Headphones,
} from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-light">
      {/* Header */}
      <header className="border-b border-gray-100/50 bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                  <Server className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">Byte Matrix</h1>
                  <p className="text-xs text-blue-600">Technologies</p>
                </div>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#services"
                className="text-gray-600 hover:text-blue-600 transition-all duration-300 font-light relative group"
              >
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#about"
                className="text-gray-600 hover:text-blue-600 transition-all duration-300 font-light relative group"
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-blue-600 transition-all duration-300 font-light relative group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(71 85 105 / 0.3) 1px, transparent 0)',
            backgroundSize: '20px 20px'
          }}></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-12">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <Server className="h-16 w-16 text-white" />
              </div>
            </div>
            <div className="mb-8">
              <p className="text-xl lg:text-2xl font-light text-blue-600 mb-4 tracking-wide">
                "Connecting Your Digital Matrix"
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 mx-auto rounded-full"></div>
            </div>
            <h1 className="text-5xl lg:text-7xl font-extralight text-gray-900 mb-8 tracking-tight">
              Byte Matrix <span className="text-blue-600">Technologies</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              We specialize in comprehensive IT infrastructure management, enterprise-grade hardware deployment, and
              strategic technology consulting. From network architecture and cybersecurity implementation to custom
              computing solutions and 24/7 technical support, we transform complex technology challenges into
              competitive advantages for businesses of all sizes.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 font-light"
                asChild
              >
                <a href="#services">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-10 py-4 text-lg bg-white/80 backdrop-blur-sm border-2 border-blue-600/20 text-blue-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 transform hover:-translate-y-1 font-light"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-blue-600 font-light mb-6">
              <Star className="w-4 h-4 mr-2" />
              Our Services
            </div>
            <h2 className="text-4xl lg:text-5xl font-extralight text-gray-900 mb-6 tracking-tight">
              Complete Technology Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-extralight">
              From infrastructure to devices, we deliver comprehensive tech solutions tailored to your needs
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-8 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: Server,
                title: "IT Services",
                description: "Professional IT infrastructure and support services",
                features: [
                  "Network Setup & Configuration",
                  "System Administration",
                  "Data Backup & Recovery",
                  "Cloud Services Integration",
                  "Cybersecurity Implementation",
                ],
              },
              {
                icon: HardDrive,
                title: "Hardware Solutions",
                description: "Enterprise-grade hardware for optimal performance",
                features: [
                  "Enterprise Servers",
                  "Networking Equipment",
                  "Storage Solutions",
                  "Custom PC Builds",
                  "Hardware Installation",
                ],
              },
              {
                icon: Computer,
                title: "Desktop Computers",
                description: "High-performance desktop systems for every need",
                features: [
                  "Business Desktops",
                  "Gaming PCs",
                  "All-in-One Systems",
                  "CAD Workstations",
                  "Mini PCs & Thin Clients",
                ],
              },
              {
                icon: Computer,
                title: "Laptops",
                description: "Premium portable computing solutions",
                features: [
                  "Business Laptops",
                  "Student & Budget Options",
                  "Gaming Laptops",
                  "Ultrabooks & 2-in-1s",
                  "MacBooks & Surface Devices",
                ],
              },
              {
                icon: Printer,
                title: "Printers",
                description: "Professional printing solutions for any environment",
                features: [
                  "Laser Printers",
                  "Inkjet Printers",
                  "Multifunction Devices",
                  "Large Format Plotters",
                  "3D Printers",
                ],
              },
              {
                icon: Shield,
                title: "Tech Support",
                description: "Comprehensive technical support and maintenance",
                features: [
                  "24/7 Remote Support",
                  "On-site Repair",
                  "Software Installation",
                  "Virus Removal",
                  "Training & Support",
                ],
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/80 backdrop-blur-sm overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-blue-50/0 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="text-center pb-4 relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-blue-600 group-hover:to-blue-500 transition-all duration-500 transform group-hover:scale-110">
                    <service.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <CardTitle className="text-xl font-light text-gray-900 mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed font-extralight">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm font-light">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Customer Support Excellence */}
          <div className="mb-20">
            <div className="bg-gradient-to-br from-blue-50 via-indigo-50/50 to-purple-50/30 rounded-3xl p-8 lg:p-16 shadow-2xl border border-blue-100/50 overflow-hidden">
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(71 85 105 / 0.3) 1px, transparent 0)',
                  backgroundSize: '20px 20px'
                }}></div>
              </div>
              <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                <div className="order-2 lg:order-1">
                  <div className="inline-flex items-center px-4 py-2 bg-blue-600 rounded-full text-white font-light mb-6">
                    <Headphones className="w-4 h-4 mr-2" />
                    Customer Support Excellence
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-extralight text-gray-900 mb-6 tracking-tight">
                    24/7 Professional Support
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-8 font-extralight">
                    Our dedicated support specialists are available around the clock to assist you with any technical
                    challenges. From troubleshooting to guidance, we provide personalized support that keeps your
                    business running smoothly.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 mb-10">
                    {[
                      "24/7 Live Support",
                      "Expert Technical Guidance",
                      "Remote Troubleshooting",
                      "Priority Response Times",
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-gray-700 font-light">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 font-light"
                    asChild
                  >
                    <a href="#contact">
                      <Phone className="mr-2 h-5 w-5" />
                      Get Support Now
                    </a>
                  </Button>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-3xl blur-2xl"></div>
                    <div className="relative w-full h-[400px] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-2xl transition-transform duration-300 hover:scale-105 flex items-center justify-center">
                      <div className="text-center">
                        <Headphones className="h-24 w-24 text-blue-600 mx-auto mb-4" />
                        <p className="text-gray-600 font-light">24/7 Professional Support</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Infrastructure Excellence Showcase */}
          <div className="mb-20">
            <div className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 rounded-3xl p-8 lg:p-16 shadow-2xl border border-gray-700/50 overflow-hidden">
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(71 85 105 / 0.3) 1px, transparent 0)',
                  backgroundSize: '20px 20px'
                }}></div>
              </div>
              <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                <div className="order-1 lg:order-1">
                  <div className="inline-flex items-center px-4 py-2 bg-blue-600 rounded-full text-white font-light mb-6">
                    <Server className="w-4 h-4 mr-2" />
                    Enterprise Infrastructure
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-extralight text-white mb-6 tracking-tight">
                    Professional Data Center Solutions
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed mb-8 font-extralight">
                    Our expertise extends to enterprise-grade data center management, server infrastructure deployment,
                    and comprehensive networking solutions. We design, implement, and maintain mission-critical IT
                    environments that power modern businesses.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 mb-10">
                    {[
                      "Data Center Design & Setup",
                      "Server Rack Configuration", 
                      "Network Infrastructure",
                      "Cable Management Systems",
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-gray-300 font-light">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 font-light"
                    asChild
                  >
                    <a href="#contact">
                      <ArrowRight className="mr-2 h-5 w-5" />
                      Discuss Your Infrastructure
                    </a>
                  </Button>
                </div>
                <div className="order-2 lg:order-2">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-3xl blur-2xl"></div>
                    <div className="relative w-full h-[400px] bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl shadow-2xl transition-transform duration-300 hover:scale-105 flex items-center justify-center">
                      <div className="text-center">
                        <Server className="h-24 w-24 text-blue-400 mx-auto mb-4" />
                        <p className="text-gray-300 font-light">Enterprise Infrastructure</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-24 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50/30 relative overflow-hidden"
      >
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
              <h2 className="text-4xl lg:text-5xl font-extralight text-gray-900 mb-8 tracking-tight">
                <span className="text-blue-600">Byte Matrix Technologies</span>
                <br />
                Your Partner in Innovation & Reliability
              </h2>
              <div className="max-w-5xl mx-auto">
                <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8 font-extralight">
                  We deliver <span className="font-light text-blue-600">unparalleled IT services</span> and
                  <span className="font-light text-blue-600"> cutting-edge hardware solutions</span> that empower
                  businesses and individuals to thrive in today's fast-paced digital landscape.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed font-extralight">
                  Our mission is to provide the{" "}
                  <span className="font-normal text-gray-900">tools, technologies, and support</span> you need to
                  transform challenges into competitive advantages.
                </p>
              </div>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-8 rounded-full"></div>
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
                  <div className="text-4xl font-extralight text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-light">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* What Sets Us Apart */}
            <div className="mb-20">
              <div className="text-center mb-16">
                <div className="inline-flex items-center px-4 py-2 bg-indigo-50 rounded-full text-indigo-600 font-light mb-6">
                  <Star className="w-4 h-4 mr-2" />
                  What Sets Us Apart
                </div>
                <h3 className="text-3xl lg:text-4xl font-extralight text-gray-900 mb-6 tracking-tight">
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
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100/50 hover:-translate-y-1">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                      <h4 className="text-xl font-light text-gray-900 mb-4">{item.title}</h4>
                      <p className="text-gray-600 leading-relaxed font-extralight">{item.description}</p>
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
                      <a href="#contact">
                        <ArrowRight className="mr-2 h-5 w-5" />
                        Start Your Transformation
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-2 border-white/30 text-white hover:bg-white hover:text-blue-600 hover:border-white px-10 py-4 text-lg bg-transparent transition-all duration-300 transform hover:-translate-y-1 font-light"
                      asChild
                    >
                      <a href="#services">Explore Our Solutions</a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(255 255 255 / 0.3) 1px, transparent 0)',
            backgroundSize: '20px 20px'
          }}></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-blue-600 rounded-full text-white font-light mb-6">
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </div>
              <h2 className="text-4xl lg:text-5xl font-extralight mb-6 tracking-tight">Ready to Get Started?</h2>
              <p className="text-xl text-gray-300 font-extralight max-w-3xl mx-auto">
                Connect with our experts today. We're here to transform your technology experience.
              </p>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto mt-8 rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {[
                {
                  icon: Phone,
                  title: "Call or WhatsApp",
                  description: "Get instant support and quick responses",
                  contact: "+254 724 367 794",
                  href: "tel:+254724367794",
                },
                {
                  icon: Mail,
                  title: "Email Us",
                  description: "Send us your detailed requirements",
                  contact: "bytematrixtechnologies@gmail.com",
                  href: "mailto:bytematrixtechnologies@gmail.com",
                },
              ].map((contact, index) => (
                <Card
                  key={index}
                  className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-500 hover:-translate-y-2 overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-10 text-center relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <contact.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-light text-white mb-3">{contact.title}</h3>
                    <p className="text-gray-300 mb-6 font-extralight">{contact.description}</p>
                    <a
                      href={contact.href}
                      className="text-blue-400 hover:text-blue-300 font-light text-lg transition-colors duration-300 break-all"
                    >
                      {contact.contact}
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-10 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 font-light"
                asChild
              >
                <a href="tel:+254724367794">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-blue-400/30 text-blue-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 px-10 py-4 text-lg bg-transparent transition-all duration-300 transform hover:-translate-y-1 font-light"
                asChild
              >
                <a href="mailto:bytematrixtechnologies@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Send Email
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-16 relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(255 255 255 / 0.3) 1px, transparent 0)',
            backgroundSize: '20px 20px'
          }}></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div className="flex flex-col items-center md:items-start space-y-4 mb-8 md:mb-0">
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                  <Server className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Byte Matrix</h3>
                  <p className="text-sm text-blue-400">Technologies</p>
                </div>
              </div>
              <p className="text-blue-400 font-light italic">"Connecting Your Digital Matrix"</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm font-light">© 2024 Byte Matrix Technologies. All rights reserved.</p>
              <p className="text-sm mt-2 text-gray-500 font-extralight">Expert IT Solutions for Modern Businesses</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <div className="flex justify-center space-x-8">
              {["Services", "About", "Contact"].map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 font-light relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
