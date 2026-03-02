import { Link } from "react-router";
import { motion } from "motion/react";
import { Code2, Smartphone, Sparkles, Cpu, ArrowRight, CheckCircle2, Users, Award, Zap } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import teamCollabImage from "figma:asset/8ce5d7b9d0cfd4d618b822b270b075f9d69b6394.png";
import developerCodingImage from "figma:asset/24c97a5bd91f4acf614537b07bc811e4dc9532bb.png";
import developerDeskImage from "figma:asset/a5ab69ad466333d60274d8d23c57d54eb18399e7.png";
import teamMeetingImage from "figma:asset/3aa81373a692e940c403599e65937040a1649d51.png";
import threeDWorkspaceImage from "figma:asset/e2fc2572d1eb72afa78017514fb837cf609df80b.png";

export function Home() {
  const services = [
    {
      icon: Code2,
      title: "Web Development",
      description: "Modern, responsive websites and web applications built with cutting-edge technologies.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile solutions for iOS and Android.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Sparkles,
      title: "3D Animation & Design",
      description: "Stunning 3D animations and visual effects created by seasoned designers.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Cpu,
      title: "Device Software & Electronics",
      description: "Embedded systems and electronic device software with precision engineering.",
      color: "from-green-500 to-teal-500",
    },
  ];

  const stats = [
    { number: "7+", label: "Years Experience" },
    { number: "5", label: "Senior Developers" },
    { number: "2", label: "3D Designers" },
    { number: "100+", label: "Projects Delivered" },
  ];

  const whyChooseUs = [
    "We transform your business logic into reality, not just code",
    "Team of 5 senior developers with 7+ years of experience each",
    "Expert 3D animation designers with decades of experience",
    "Electronic engineering expertise for device software",
    "Scalable, high-performance systems tailored to your needs",
    "End-to-end support from concept to deployment",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Transform Your Ideas Into
                <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  Powerful Digital Solutions
                </span>
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                We don't just code—we bring your business logic to life with 7+ years of expertise in web, mobile, 3D animation, and device software development.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/talk-with-us"
                  className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
                >
                  Talk with Our Senior Developer
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/portfolio"
                  className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all"
                >
                  View Portfolio
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <ImageWithFallback
                  src={developerDeskImage}
                  alt="Developer at desk"
                  className="rounded-2xl shadow-2xl w-full h-48 object-cover"
                />
                <ImageWithFallback
                  src={teamMeetingImage}
                  alt="Team collaboration meeting"
                  className="rounded-2xl shadow-2xl w-full h-48 object-cover mt-8"
                />
                <ImageWithFallback
                  src={threeDWorkspaceImage}
                  alt="3D Animation workspace"
                  className="rounded-2xl shadow-2xl w-full h-48 object-cover"
                />
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1631375937044-6dd5beac01d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljcyUyMGVuZ2luZWVyaW5nJTIwY2lyY3VpdCUyMGJvYXJkfGVufDF8fHx8MTc3MjM3ODAzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Electronics engineering"
                  className="rounded-2xl shadow-2xl w-full h-48 object-cover mt-8"
                />
              </div>
            </motion.div>
          </div>
        </div>
        {/* Wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-auto">
            <path
              fill="#fff"
              fillOpacity="1"
              d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital solutions powered by experienced professionals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all group"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Why Choose Ali Son IT Center?</h2>
              <p className="text-xl text-gray-600 mb-8">
                We're not just another development company. We're your technology partner dedicated to transforming your business vision into reality.
              </p>
              <ul className="space-y-4">
                {whyChooseUs.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-6 text-white shadow-xl">
                  <Users className="w-10 h-10 mb-4" />
                  <h3 className="font-semibold mb-2">Expert Team</h3>
                  <p className="text-sm text-blue-100">
                    5 senior developers, 2 3D designers, and 1 electronics engineer
                  </p>
                </div>
                <ImageWithFallback
                  src={teamCollabImage}
                  alt="Tech team meeting"
                  className="rounded-2xl shadow-xl w-full h-48 object-cover"
                />
              </div>
              <div className="space-y-6 mt-8">
                <ImageWithFallback
                  src={developerCodingImage}
                  alt="Modern workspace"
                  className="rounded-2xl shadow-xl w-full h-48 object-cover"
                />
                <div className="bg-gradient-to-br from-orange-500 to-pink-600 rounded-2xl p-6 text-white shadow-xl">
                  <Award className="w-10 h-10 mb-4" />
                  <h3 className="font-semibold mb-2">7+ Years</h3>
                  <p className="text-sm text-orange-100">
                    Proven track record of delivering excellence
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Zap className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Let's discuss how we can bring your ideas to life with our expertise and innovation.
            </p>
            <Link
              to="/talk-with-us"
              className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}