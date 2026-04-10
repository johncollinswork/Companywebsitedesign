import { motion } from "motion/react";
import { Linkedin, Github, Globe, Award, Mail, Send } from "lucide-react";
import rafaelPhoto from "figma:asset/c6ea91ffdb9b11371ddca0acedbd19543e6ce7fc.png";

export function Team() {
  const teamMembers = [
    {
      id: 1,
      name: "Rafael Luna",
      role: "Senior Full-Stack Developer & Founder",
      image: rafaelPhoto,
      bio: "Experienced full-stack developer specializing in modern web technologies and scalable solutions. Passionate about creating innovative digital experiences and leading development teams to success.",
      expertise: ["Full-Stack Development", "React & Node.js", "System Architecture", "Team Leadership"],
      socials: {
        linkedin: "https://www.linkedin.com/in/rafael-luna-work/",
        github: "https://github.com/doyen001",
        portfolio: "https://portfolio-website-five-theta-49.vercel.app/",
        telegram: "https://t.me/rldev2",
        email: "contact@alisonitcenter.com",
      },
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Senior Mobile Developer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&h=400",
      bio: "Expert in React Native and Flutter with 10+ years creating high-performance mobile applications for iOS and Android platforms.",
      expertise: ["React Native", "Flutter", "iOS Development", "Mobile UX"],
      socials: {
        linkedin: "https://linkedin.com/in/sarahjohnson",
        github: "https://github.com/sarahjohnson",
        freelancer: "https://freelancer.com/u/sarahjohnson",
        email: "sarah@alisonitcenter.com",
      },
      gradient: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      name: "Marcus Chen",
      role: "3D Animation & Motion Designer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&h=400",
      bio: "Award-winning 3D artist specializing in product visualization, character animation, and visual effects with industry-leading tools.",
      expertise: ["Blender", "Cinema 4D", "After Effects", "Three.js"],
      socials: {
        linkedin: "https://linkedin.com/in/marcuschen",
        portfolio: "https://marcuschen.art",
        freelancer: "https://freelancer.com/u/marcuschen",
        email: "marcus@alisonitcenter.com",
      },
      gradient: "from-orange-500 to-red-500",
    },
    {
      id: 4,
      name: "David Kumar",
      role: "Electronics & Embedded Systems Engineer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&h=400",
      bio: "Specialized in IoT devices, embedded systems, and low-level programming with 12+ years in hardware-software integration.",
      expertise: ["Embedded C/C++", "ARM Architecture", "PCB Design", "IoT Solutions"],
      socials: {
        linkedin: "https://linkedin.com/in/davidkumar",
        github: "https://github.com/davidkumar",
        portfolio: "https://davidkumar.tech",
        email: "david@alisonitcenter.com",
      },
      gradient: "from-green-500 to-teal-500",
    },
    {
      id: 5,
      name: "Emily Rodriguez",
      role: "UI/UX Designer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&h=400",
      bio: "Creative designer focused on user-centered design and creating intuitive interfaces that drive engagement and conversions.",
      expertise: ["UI Design", "UX Research", "Figma", "Design Systems"],
      socials: {
        linkedin: "https://linkedin.com/in/emilyrodriguez",
        portfolio: "https://emilyrodriguez.design",
        freelancer: "https://freelancer.com/u/emilyrodriguez",
        email: "emily@alisonitcenter.com",
      },
      gradient: "from-pink-500 to-rose-500",
    },
    {
      id: 6,
      name: "James Wilson",
      role: "DevOps & Cloud Engineer",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&h=400",
      bio: "Infrastructure expert with deep knowledge in AWS, Docker, Kubernetes, and CI/CD pipelines for enterprise-scale deployments.",
      expertise: ["AWS", "Docker", "Kubernetes", "CI/CD"],
      socials: {
        linkedin: "https://linkedin.com/in/jameswilson",
        github: "https://github.com/jameswilson",
        portfolio: "https://jameswilson.cloud",
        email: "james@alisonitcenter.com",
      },
      gradient: "from-indigo-500 to-blue-500",
    },
  ];

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'linkedin':
        return Linkedin;
      case 'github':
        return Github;
      case 'portfolio':
      case 'freelancer':
        return Globe;
      case 'email':
        return Mail;
      case 'telegram':
        return Send;
      default:
        return Globe;
    }
  };

  const getSocialLabel = (platform: string) => {
    switch (platform) {
      case 'linkedin':
        return 'LinkedIn';
      case 'github':
        return 'GitHub';
      case 'portfolio':
        return 'Portfolio';
      case 'freelancer':
        return 'Freelancer';
      case 'email':
        return 'Email';
      case 'telegram':
        return 'Telegram';
      default:
        return platform;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Meet Our Team</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Our talented team of developers, designers, and engineers brings your vision to life with expertise and passion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Team Members", value: "6" },
              { label: "Years Experience", value: "50+" },
              { label: "Projects Completed", value: "150+" },
              { label: "Client Satisfaction", value: "100%" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
              >
                {/* Member Image */}
                <div className="relative overflow-hidden h-64">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${member.gradient} opacity-0 group-hover:opacity-40 transition-opacity`} />
                </div>

                {/* Member Info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{member.role}</p>
                  <p className="text-gray-700 text-sm mb-4">{member.bio}</p>

                  {/* Expertise Tags */}
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="pt-4 border-t border-gray-200">
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Connect</h4>
                    <div className="flex flex-wrap gap-2">
                      {Object.entries(member.socials).map(([platform, url]) => {
                        const Icon = getSocialIcon(platform);
                        const label = getSocialLabel(platform);
                        return (
                          <a
                            key={platform}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center gap-2 px-3 py-2 bg-gradient-to-r ${member.gradient} text-white rounded-lg hover:shadow-lg transition-all text-xs font-medium group/link`}
                            title={label}
                          >
                            <Icon className="w-4 h-4" />
                            <span>{label}</span>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
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
            <Award className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">
              Ready to Work with Our Team?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Let's discuss your project and find the perfect team members to bring your vision to life.
            </p>
            <a
              href="/talk-with-us"
              className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl"
            >
              Talk with Our Senior Developer
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
