import React from 'react'

function CallToAction() {
  return (
   <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Campus?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of educational institutions already using SmartCampus to revolutionize their management systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              Start Your Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
