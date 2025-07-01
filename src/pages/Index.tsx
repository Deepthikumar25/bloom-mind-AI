
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { Brain, Heart, Target, Zap, ArrowRight, Gamepad2, BarChart3, Timer, Users, Award, TrendingUp, Sparkles } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: Heart,
      title: "Wellness Tracking",
      description: "Monitor your mood, stress levels, and overall wellbeing with AI-powered insights",
      color: "from-wellness-pink to-wellness-purple"
    },
    {
      icon: Target,
      title: "Productivity Focus",
      description: "Set goals, track tasks, and boost your productivity with smart recommendations",
      color: "from-wellness-blue to-wellness-indigo"
    },
    {
      icon: Gamepad2,
      title: "Stress Relief Games",
      description: "Interactive games designed to reduce stress and enhance mental clarity",
      color: "from-wellness-teal to-wellness-cyan"
    },
    {
      icon: BarChart3,
      title: "Progress Analytics",
      description: "Visualize your wellness journey with comprehensive charts and insights",
      color: "from-wellness-green to-wellness-emerald"
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Connect with colleagues and build a supportive workplace community",
      metric: "85% better team engagement"
    },
    {
      icon: Award,
      title: "Achievement System",
      description: "Earn badges and rewards for maintaining healthy work-life balance",
      metric: "90% completion rate"
    },
    {
      icon: TrendingUp,
      title: "Performance Insights",
      description: "Track your productivity patterns and optimize your work schedule",
      metric: "40% productivity boost"
    }
  ];

  return (
    <div className="min-h-screen hero-gradient">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-wellness-blue/5 to-wellness-purple/5 rounded-full blur-3xl transform -translate-y-1/2"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-wellness-blue/20 mb-6 slide-up-stagger">
              <Sparkles className="h-4 w-4 text-wellness-blue mr-2" />
              <span className="text-sm font-medium text-slate-800">Employee Wellness Platform</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-wellness-blue via-wellness-purple to-wellness-pink bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_200%]">
                Thrive AI
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 font-medium mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your workplace wellness with AI-powered insights, 
              interactive stress-relief games, and personalized productivity recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/dashboard">
                <Button size="lg" className="bg-gradient-to-r from-wellness-blue to-wellness-purple hover:from-wellness-purple hover:to-wellness-blue text-white px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300 pulse-glow">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/games">
                <Button variant="outline" size="lg" className="px-8 py-3 text-lg border-2 border-wellness-blue/30 hover:border-wellness-blue/50 hover:bg-wellness-blue/10 text-slate-800 font-semibold">
                  Try Wellness Games
                  <Gamepad2 className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">
              Everything you need to thrive at work
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
              Comprehensive tools and insights to support your mental health and boost productivity
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={index} 
                  className="p-6 glass-card hover:shadow-2xl transition-all duration-500 animate-scale-in group hover:-translate-y-2 floating-animation"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${feature.color} group-hover:scale-110 transition-transform duration-300 shadow-lg breathe-animation`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-800">{feature.title}</h3>
                    <p className="text-slate-600 leading-relaxed font-medium">{feature.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-wellness-blue/5 to-wellness-purple/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">
              Proven Results for Employee Wellness
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
              Join thousands of employees who have transformed their workplace experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card 
                  key={index} 
                  className="p-8 glass-card hover:shadow-2xl transition-all duration-500 group hover:-translate-y-1 text-center"
                >
                  <div className={`p-4 rounded-2xl bg-gradient-to-r from-wellness-green to-wellness-emerald mx-auto mb-4 w-fit group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">{benefit.title}</h3>
                  <p className="text-slate-600 mb-4 font-medium">{benefit.description}</p>
                  <div className="text-2xl font-bold text-wellness-green">{benefit.metric}</div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="p-12 glass-card overflow-hidden relative">
            <div className="absolute inset-0 wellness-gradient opacity-90"></div>
            <div className="relative z-10 animate-fade-in-up">
              <Brain className="h-16 w-16 text-white mx-auto mb-6 animate-bounce-subtle" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to transform your workplace wellness?
              </h2>
              <p className="text-xl text-white/90 mb-8 font-medium">
                Join thousands of employees who are already thriving with AI-powered wellness insights
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/login">
                  <Button size="lg" variant="secondary" className="px-8 py-3 text-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-all duration-300">
                    Get Started Free
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/dashboard">
                  <Button size="lg" variant="outline" className="px-8 py-3 text-lg border-2 border-white/30 text-white hover:bg-white/10 transition-all duration-300">
                    View Demo
                    <Timer className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
