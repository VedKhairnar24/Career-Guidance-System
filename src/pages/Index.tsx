
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CareerPathSelector from '@/components/CareerPathSelector';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Target, BookOpen, Zap } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section with Enhanced Animated Background */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white py-16 sm:py-20 lg:py-28 overflow-hidden">
        {/* Enhanced Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Orbs */}
          <div className="absolute -top-4 -left-4 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-white/10 rounded-full animate-pulse blur-sm"></div>
          <div className="absolute top-1/4 right-1/4 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-white/5 rounded-full animate-bounce blur-sm" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/4 left-1/4 w-20 h-20 sm:w-28 sm:h-28 lg:w-36 lg:h-36 bg-white/10 rounded-full animate-pulse blur-sm" style={{animationDelay: '2s'}}></div>
          <div className="absolute -bottom-8 -right-8 w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-white/5 rounded-full animate-bounce blur-sm" style={{animationDelay: '0.5s'}}></div>
          
          {/* Moving Grid Lines */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent w-px animate-slide-right"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent h-px animate-slide-down"></div>
          </div>
          
          {/* Floating Code Elements with Enhanced Animation */}
          <div className="absolute top-1/3 left-1/6 text-white/20 text-xs sm:text-sm font-mono animate-float hover:text-white/40 transition-colors cursor-default">
            &lt;code/&gt;
          </div>
          <div className="absolute bottom-1/3 right-1/6 text-white/20 text-xs sm:text-sm font-mono animate-float hover:text-white/40 transition-colors cursor-default" style={{animationDelay: '1.5s'}}>
            {'{career}'}
          </div>
          <div className="absolute top-1/2 left-1/12 text-white/15 text-xs font-mono animate-float hover:text-white/30 transition-colors cursor-default" style={{animationDelay: '3s'}}>
            function()
          </div>
          <div className="absolute top-2/3 right-1/3 text-white/15 text-xs font-mono animate-float hover:text-white/30 transition-colors cursor-default" style={{animationDelay: '2.5s'}}>
            AI.predict()
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
              Discover Your Ideal 
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent animate-pulse">
                Graduation Course
              </span>
              and Career Path!
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-blue-100 max-w-4xl mx-auto leading-relaxed px-2">
              Answer a few questions to get personalized course recommendations tailored to your interests, skills, and goals.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 animate-scale-in" style={{animationDelay: '0.5s'}}>
            <Link to="/courses" className="group">
              <Button className="w-full sm:w-auto bg-white text-blue-600 hover:bg-gray-50 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg group-hover:shadow-xl">
                <BookOpen className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                Explore All Courses
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
            <Link to="/cse-specializations" className="group">
              <Button variant="outline" className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <Zap className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                Explore CSE Specializations
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Career Path Selector */}
      <CareerPathSelector />

      {/* Enhanced Features Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="flex justify-center mb-4">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-600 text-sm font-medium">
                <Sparkles className="w-4 h-4 mr-2" />
                Why Choose CareerPath?
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Your Journey to Success 
              <span className="text-blue-600">Starts Here</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              We provide comprehensive guidance to help you make informed decisions about your future
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <Card className="text-center hover:shadow-xl transition-all duration-500 group border-0 shadow-md hover:-translate-y-2 bg-gradient-to-br from-blue-50 to-indigo-50">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Target className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <CardTitle className="text-lg sm:text-xl text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  Personalized Career Paths
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                  Use advanced filters to find courses matching your interests, skills, and goals with precision recommendations.
                </CardDescription>
                <Link to="/career-finder" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm sm:text-base group-hover:underline transition-all duration-300">
                  Learn More 
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-500 group border-0 shadow-md hover:-translate-y-2 bg-gradient-to-br from-green-50 to-emerald-50">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <BookOpen className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <CardTitle className="text-lg sm:text-xl text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                  Comprehensive Course List
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                  Explore engineering, tech, and science courses with detailed descriptions, eligibility, and career outcomes.
                </CardDescription>
                <Link to="/courses" className="inline-flex items-center text-green-600 hover:text-green-700 font-medium text-sm sm:text-base group-hover:underline transition-all duration-300">
                  Learn More 
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-500 group border-0 shadow-md hover:-translate-y-2 bg-gradient-to-br from-purple-50 to-violet-50">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <CardTitle className="text-lg sm:text-xl text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                  Tech News Blog
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                  Stay updated with the latest in technology, career trends, and industry insights from experts.
                </CardDescription>
                <Link to="/blog" className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium text-sm sm:text-base group-hover:underline transition-all duration-300">
                  Learn More 
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-500 group border-0 shadow-md hover:-translate-y-2 bg-gradient-to-br from-orange-50 to-amber-50">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Zap className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <CardTitle className="text-lg sm:text-xl text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                  AI & Tech Tools
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                  Discover tools to enhance your learning and development with curated AI and technology resources.
                </CardDescription>
                <Link to="/ai-tools" className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium text-sm sm:text-base group-hover:underline transition-all duration-300">
                  Learn More 
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
