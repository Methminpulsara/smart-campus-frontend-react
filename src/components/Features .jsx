import React from 'react'

function Features () {
    const features = [
    {
      icon: "📚",
      title: "Course Management",
      description: "Organize and manage all your courses in one centralized platform with easy-to-use tools."
    },
    {
      icon: "👥",
      title: "Student Portal",
      description: "Empower students with access to grades, assignments, and course materials anytime, anywhere."
    },
    {
      icon: "📊",
      title: "Analytics Dashboard",
      description: "Get insights into student performance and institutional metrics with powerful analytics."
    },
    {
      icon: "📅",
      title: "Schedule Management",
      description: "Efficient scheduling system for classes, exams, and campus events."
    },
    {
      icon: "💬",
      title: "Communication Hub",
      description: "Seamless communication between students, teachers, and administrators."
    },
    {
      icon: "🔒",
      title: "Secure & Reliable",
      description: "Enterprise-grade security with 99.9% uptime guarantee for your peace of mind."
    }
  ];
  return (
    <div>
       <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Powerful Features for
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Modern Education</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to manage your educational institution efficiently and effectively.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  )
}

export default Features 
