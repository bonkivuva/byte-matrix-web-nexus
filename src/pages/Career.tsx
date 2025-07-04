import ProfessionalHeader from "@/components/ProfessionalHeader";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Users, 
  Target, 
  TrendingUp, 
  Heart, 
  Globe, 
  Clock, 
  MapPin, 
  ArrowRight,
  Mail,
  Phone,
  Star,
  CheckCircle,
  Code,
  Palette,
  Shield,
  Database,
  MessageSquare
} from "lucide-react";

const Career = () => {
  const benefits = [
    { icon: TrendingUp, title: "Competitive Salaries", description: "Industry-leading compensation packages" },
    { icon: Heart, title: "Health Insurance", description: "Comprehensive medical and dental coverage" },
    { icon: Clock, title: "Flexible Hours", description: "Work-life balance with flexible scheduling" },
    { icon: Globe, title: "Remote Work Options", description: "Hybrid and fully remote opportunities" },
    { icon: Users, title: "Professional Training", description: "Continuous learning and skill development" },
    { icon: Target, title: "Career Growth", description: "Clear paths for advancement and promotion" }
  ];

  const jobOpenings = [
    {
      id: 1,
      title: "Senior Software Engineer",
      department: "Development",
      location: "Remote",
      type: "Full-time",
      description: "Lead the design and implementation of scalable software solutions for enterprise clients. Collaborate with cross-functional teams to deliver high-quality products.",
      requirements: [
        "5+ years of experience in software development",
        "Proficiency in Java, Python, or Node.js",
        "Strong understanding of cloud platforms (AWS, Azure)",
        "Experience with microservices architecture"
      ],
      icon: Code
    },
    {
      id: 2,
      title: "UX/UI Designer",
      department: "Design",
      location: "Hybrid",
      type: "Full-time",
      description: "Create intuitive and engaging user experiences for our software products. Work closely with development teams to bring designs to life.",
      requirements: [
        "3+ years of UX/UI design experience",
        "Proficiency in Figma, Adobe Creative Suite",
        "Strong portfolio demonstrating design thinking",
        "Knowledge of responsive design principles"
      ],
      icon: Palette
    },
    {
      id: 3,
      title: "Cybersecurity Specialist",
      department: "Security",
      location: "Onsite",
      type: "Full-time",
      description: "Protect our clients' digital assets by implementing robust security measures and monitoring systems for potential threats.",
      requirements: [
        "4+ years in cybersecurity or related field",
        "Certifications like CISSP, CEH, or CISM",
        "Experience with penetration testing",
        "Knowledge of compliance frameworks"
      ],
      icon: Shield
    },
    {
      id: 4,
      title: "Database Administrator",
      department: "Operations",
      location: "Remote",
      type: "Contract",
      description: "Manage and optimize database systems to ensure high performance, availability, and security for our applications.",
      requirements: [
        "3+ years of database administration experience",
        "Proficiency in SQL, MongoDB, PostgreSQL",
        "Experience with database optimization",
        "Knowledge of backup and recovery procedures"
      ],
      icon: Database
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Developer",
      image: "/lovable-uploads/32aed714-c356-4ff9-9e3d-017e2f1071af.png",
      quote: "Working at BYTE MATRIX TECHNOLOGIES has been a game-changer for my career. The leadership here encourages creativity and provides endless opportunities for growth."
    },
    {
      name: "Michael Chen",
      role: "Project Manager",
      image: "/lovable-uploads/34f37754-9171-4da7-aa9a-8e558bdfb980.png",
      quote: "The collaborative culture and cutting-edge projects make every day exciting. I've learned more in my first year here than in my previous three jobs combined."
    },
    {
      name: "Emily Rodriguez",
      role: "UX Designer",
      image: "/lovable-uploads/395d4682-f18c-4266-89f9-1a5f965c03f3.png",
      quote: "The team values innovation and supports taking calculated risks. It's refreshing to work somewhere that truly invests in its people's professional development."
    }
  ];

  const faqs = [
    {
      question: "How long does the hiring process take?",
      answer: "Our typical hiring process takes 2-3 weeks, including initial screening, technical interviews, and final decision."
    },
    {
      question: "Can I apply for multiple roles?",
      answer: "Yes, you can apply for multiple positions that match your skills and interests. We encourage it!"
    },
    {
      question: "Do you offer relocation assistance?",
      answer: "Yes, we provide relocation assistance for senior-level positions and specialized roles."
    },
    {
      question: "What's your policy on remote work?",
      answer: "We offer flexible work arrangements including remote, hybrid, and onsite options depending on the role."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Careers - Join Our Team | Byte Matrix Technologies"
        description="Join BYTE MATRIX TECHNOLOGIES and be part of cutting-edge IT solutions. Explore career opportunities in software development, cybersecurity, cloud solutions, and more."
        keywords="IT jobs, software developer jobs, cybersecurity careers, remote tech jobs, Kenya IT careers, technology careers"
      />
      
      <ProfessionalHeader currentPage="careers" />
      
      {/* Hero Section */}
      <section className="section-spacing bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900">
        <div className="container-professional text-center">
          <div className="max-w-4xl mx-auto animate-fade-up">
            <h1 className="text-4xl md:text-6xl font-bold text-gradient-brand mb-6">
              Join Our Team – Be Part of Something Big!
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-300 mb-8 leading-relaxed">
              Transform your career with cutting-edge technology. We empower businesses through innovative solutions and foster a culture of growth and collaboration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-brand hover:opacity-90 transition-opacity">
                <Users className="w-5 h-5 mr-2" />
                View Open Positions
              </Button>
              <Button variant="outline" size="lg">
                Learn More About Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
          
          <div className="mt-12 animate-scale-in-center">
            <img 
              src="/lovable-uploads/babb4625-0209-4f12-95b2-209a31633356.png" 
              alt="Team collaboration at BYTE MATRIX TECHNOLOGIES"
              className="w-full max-w-4xl mx-auto rounded-2xl shadow-professional-lg"
            />
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="section-spacing">
        <div className="container-professional">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient-professional mb-6">
              Why Work With Us?
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
              At BYTE MATRIX TECHNOLOGIES, we believe in fostering a collaborative and inclusive workplace where every individual has the opportunity to grow and thrive. Join a team of passionate problem-solvers who are dedicated to delivering exceptional results for our clients.
            </p>
          </div>

          <div className="grid-professional-3 mb-16">
            {benefits.map((benefit, index) => (
              <Card key={index} className="card-professional text-center group">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-brand-light dark:bg-neutral-800 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-semibold mb-4 text-neutral-800 dark:text-white">
              Our Mission & Vision
            </h3>
            <p className="text-lg text-neutral-700 dark:text-neutral-300 max-w-3xl mx-auto">
              We're on a mission to revolutionize how businesses leverage technology. Our vision is to be the leading IT solutions provider that empowers organizations to achieve their digital transformation goals while creating an environment where our team members can reach their full potential.
            </p>
          </div>
        </div>
      </section>

      {/* No Current Openings */}
      <section className="section-spacing bg-neutral-50 dark:bg-neutral-900/50">
        <div className="container-professional">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient-professional mb-6">
              Thank You for Your Interest
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="card-professional text-center">
              <CardContent className="p-12">
                <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  Thank you for your interest in joining the BYTE MATRIX TECHNOLOGIES team! While we currently do not have any open positions, we are always on the lookout for talented individuals who share our passion for innovation and excellence. Please feel free to submit your resume or portfolio, and we will keep it on file for future opportunities.
                </p>
                <div className="mt-8">
                  <Button size="lg" className="bg-gradient-brand hover:opacity-90 transition-opacity">
                    <Mail className="w-5 h-5 mr-2" />
                    Submit Your Resume
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="section-spacing">
        <div className="container-professional">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient-professional mb-6">
              Application Process
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
              We've made our application process simple and straightforward. Here's how to join our team:
            </p>
          </div>

          <div className="grid-professional-2 max-w-4xl mx-auto">
            <Card className="card-professional text-center">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">1</span>
                </div>
                <CardTitle>Submit Your Application</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-600 dark:text-neutral-300">
                  Upload your resume/CV and cover letter through our online form, or connect your LinkedIn profile directly.
                </p>
              </CardContent>
            </Card>

            <Card className="card-professional text-center">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">2</span>
                </div>
                <CardTitle>Initial Screening</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-600 dark:text-neutral-300">
                  Our HR team will review your application and conduct an initial phone/video screening within 3-5 business days.
                </p>
              </CardContent>
            </Card>

            <Card className="card-professional text-center">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">3</span>
                </div>
                <CardTitle>Technical Interview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-600 dark:text-neutral-300">
                  Participate in technical interviews with our team leads to assess your skills and cultural fit.
                </p>
              </CardContent>
            </Card>

            <Card className="card-professional text-center">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">4</span>
                </div>
                <CardTitle>Final Decision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-600 dark:text-neutral-300">
                  We'll make our final decision and extend an offer to successful candidates within 1-2 weeks.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Employee Testimonials */}
      <section className="section-spacing bg-neutral-50 dark:bg-neutral-900/50">
        <div className="container-professional">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient-professional mb-6">
              What Our Team Says
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300">
              Hear from our talented team members about their experience working with us
            </p>
          </div>

          <div className="grid-professional-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-professional">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.role}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-300 italic">
                    "{testimonial.quote}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & FAQ */}
      <section className="section-spacing">
        <div className="container-professional">
          <div className="grid-professional-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gradient-professional mb-8">
                Have Questions?
              </h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-8">
                Our HR team is here to help you with any questions about career opportunities at BYTE MATRIX TECHNOLOGIES.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-800 dark:text-white">Email Us</h3>
                    <p className="text-neutral-600 dark:text-neutral-300">careers@bytematrixtech.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-800 dark:text-white">Call Us</h3>
                    <p className="text-neutral-600 dark:text-neutral-300">+254 724 367 794</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-800 dark:text-white">WhatsApp</h3>
                    <p className="text-neutral-600 dark:text-neutral-300">+254 724 367 794</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="text-3xl font-bold text-gradient-professional mb-8">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index}>
                    <h3 className="font-semibold text-neutral-800 dark:text-white mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-300">
                      {faq.answer}
                    </p>
                    {index < faqs.length - 1 && <Separator className="mt-6" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;