import React from 'react'

function Hero() {
  return (
   <section id="home" className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-4 pt-20 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm px-4 py-2 rounded-full mb-6 animate-bounce">
              🎓 Welcome to the Future of Education
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Smart
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Campus</span>
              <br />
              Management
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Transform your educational institution with our comprehensive platform. Manage courses, track attendance, and engage students like never before.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
                Get Started Free
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <button className="bg-white text-gray-700 px-8 py-4 rounded-full text-lg font-semibold border-2 border-gray-200 hover:border-blue-300 hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
                <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M15 14h.01M21 12c0 4.418-3.582 8-8 8a8.959 8.959 0 01-4.906-1.43L3 21l2.43-5.094A8.959 8.959 0 013 12c0-4.418 3.582-8 8-8s8 3.582 8 8z" />
                </svg>
                Watch Demo
              </button>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">10K+</div>
                <div className="text-gray-600 text-sm">Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">500+</div>
                <div className="text-gray-600 text-sm">Courses</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">50+</div>
                <div className="text-gray-600 text-sm">Universities</div>
              </div>
            </div>
          </div>

          {/* Right Content - Visual Elements */}
          <div className="relative lg:block hidden">
            <div className="relative">
              {/* Main Dashboard Mockup */}
              <div className="bg-white rounded-3xl shadow-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-4 rounded-t-lg mb-4"></div>
                <div className="space-y-3">
                  <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                  <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    <div className="h-16 bg-blue-100 rounded-lg"></div>
                    <div className="h-16 bg-purple-100 rounded-lg"></div>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-lg p-4 animate-pulse">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-gray-700">Attendance Tracked</span>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-lg p-4" style={{animationDelay: '1s'}}>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-gray-700">Course Complete</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
