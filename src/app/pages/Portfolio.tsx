import { motion } from "motion/react";
import { ExternalLink, Code2, Smartphone, Sparkles, Cpu } from "lucide-react";
import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router";
import portfolioImg1 from "figma:asset/997dc28d9c8b4ab2637e4d9b5108e67d012250ca.png";
import healthcareImg from "figma:asset/6e0292545db25bce1cb253335f35979aaabc140a.png";
import financialImg from "figma:asset/99e752236be976c410ae39c0b54b4ab31a0c1d1a.png";
import fitnessImg from "figma:asset/63b4f9e6c36be4e54ada9921f7519afe8d772ae9.png";
import productVizImg from "figma:asset/d36284a3a050b9762820334d50a4e381418589e7.png";

export function Portfolio() {
  const location = useLocation();

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Web Development",
      slug: "web-development",
      icon: Code2,
      description: "A scalable e-commerce solution with advanced inventory management, payment integration, and real-time analytics.",
      technologies: ["React", "Node.js", "PostgreSQL", "Redis"],
      image: portfolioImg1,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      title: "Healthcare Mobile App",
      category: "Mobile Development",
      slug: "mobile-development",
      icon: Smartphone,
      description: "Cross-platform mobile application for telemedicine with video consultations, prescription management, and health tracking.",
      technologies: ["React Native", "Firebase", "WebRTC", "Stripe"],
      image: healthcareImg,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      title: "Product Visualization",
      category: "3D Animation",
      slug: "3d-animation",
      icon: Sparkles,
      description: "Stunning 3D product animations for marketing campaigns with photorealistic rendering and dynamic camera movements.",
      technologies: ["Blender", "Three.js", "Cinema 4D", "After Effects"],
      image: productVizImg,
      gradient: "from-orange-500 to-red-500",
    },
    {
      id: 4,
      title: "IoT Device Controller",
      category: "Device Software",
      slug: "device-software",
      icon: Cpu,
      description: "Embedded software for smart home devices with low-power consumption and secure wireless communication.",
      technologies: ["C/C++", "ARM", "MQTT", "BLE"],
      image: "https://images.unsplash.com/photo-1631375937044-6dd5beac01d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljcyUyMGVuZ2luZWVyaW5nJTIwY2lyY3VpdCUyMGJvYXJkfGVufDF8fHx8MTc3MjM3ODAzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      gradient: "from-green-500 to-teal-500",
    },
    {
      id: 5,
      title: "Financial Dashboard",
      category: "Web Development",
      slug: "web-development",
      icon: Code2,
      description: "Real-time financial analytics dashboard with interactive charts, reports, and predictive insights.",
      technologies: ["Vue.js", "Python", "MongoDB", "D3.js"],
      image: financialImg,
      gradient: "from-blue-500 to-purple-500",
    },
    {
      id: 6,
      title: "Fitness Tracking App",
      category: "Mobile Development",
      slug: "mobile-development",
      icon: Smartphone,
      description: "Comprehensive fitness app with workout tracking, nutrition plans, and social features for motivation.",
      technologies: ["Flutter", "GraphQL", "AWS", "TensorFlow"],
      image: fitnessImg,
      gradient: "from-pink-500 to-rose-500",
    },
  ];

  const categories = [
    { name: "All", slug: "" },
    { name: "Web Development", slug: "web-development" },
    { name: "Mobile Development", slug: "mobile-development" },
    { name: "3D Animation", slug: "3d-animation" },
    { name: "Device Software", slug: "device-software" }
  ];

  // Determine selected category from URL
  const pathParts = location.pathname.split('/');
  const urlSlug = pathParts[pathParts.length - 1] === 'portfolio' ? '' : pathParts[pathParts.length - 1];

  const getCategoryFromSlug = (slug: string) => {
    if (!slug) return "All";
    const category = categories.find(c => c.slug === slug);
    return category ? category.name : "All";
  };

  const [selectedCategory, setSelectedCategory] = useState(getCategoryFromSlug(urlSlug));

  // Update selected category when URL changes
  useEffect(() => {
    setSelectedCategory(getCategoryFromSlug(urlSlug));
  }, [location.pathname]);

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Explore our successful projects across web development, mobile apps, 3D animation, and device software. Each project represents our commitment to excellence and innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Link
                key={category.slug || 'all'}
                to={category.slug ? `/portfolio/${category.slug}` : '/portfolio'}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category.name
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
                >
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-90 transition-opacity flex items-center justify-center`}>
                      <ExternalLink className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-sm font-medium text-gray-600">{project.category}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
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
            <h2 className="text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Let's create something amazing together. Our team is ready to bring your vision to life.
            </p>
            <a
              href="/talk-with-us"
              className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl"
            >
              Talk with Our Senior Developer
              <ExternalLink className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}