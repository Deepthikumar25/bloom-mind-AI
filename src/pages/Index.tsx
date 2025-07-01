
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import FloatingParticles from "@/components/FloatingParticles";
import AnimatedBackground from "@/components/AnimatedBackground";
import { useAuth } from "@/contexts/AuthContext";
import { Brain, Heart, Target, Zap, ArrowRight, Gamepad2, BarChart3, Timer, Users, Award, TrendingUp, Sparkles, Shield, Star, Rocket } from "lucide-react";

const Index = () => {
  const { user } = useAuth();

  const features = [
    {
      icon: Heart,
      title: "Wellness Tracking",
      description: "Monitor your mood, stress levels, and overall wellbeing with AI-powered insights",
      color: "from-pink-500 to-purple-600"
    },
    {
      icon: Target,
      title: "Productivity Focus",
      description: "Set goals, track tasks, and boost your productivity with smart recommendations",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Gamepad2,
      title: "Stress Relief Games",
      description: "Interactive games designed to reduce stress and enhance mental clarity",
      color: "from-teal-500 to-cyan-600"
    },
    {
      icon: BarChart3,
      title: "Progress Analytics",
      description: "Visualize your wellness journey with comprehensive charts and insights",
      color: "from-green-500 to-emerald-600"
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
    <div className="min-h-screen relative overflow-hidden">
      <FloatingParticles />
      <AnimatedBackground />
      <div className="hero-gradient min-h-screen relative z-10">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 relative">
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center px-6 py-3 glass-card rounded-full mb-8 slide-up-stagger neon-glow">
                <Sparkles className="h-5 w-5 text-wellness-blue mr-3 animate-spin" />
                <span className="text-base font-bold text-slate-800">Revolutionary Employee Wellness Platform</span>
                <Star className="h-4 w-4 text-yellow-500 ml-2 animate-pulse" />
              </div>
              <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
                <span className="morphing-gradient bg-clip-text text-transparent">
                  Thrive AI
                </span>
              </h1>
              <p className="text-2xl md:text-3xl text-slate-700 font-bold mb-12 max-w-4xl mx-auto leading-relaxed">
                Transform your workplace wellness with 
                <span className="text-wellness-blue"> AI-powered insights</span>, 
                <span className="text-wellness-purple"> interactive games</span>, and 
                <span className="text-wellness-teal"> personalized recommendations</span>.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to={user ? "/dashboard" : "/login"}>
                  <Button size="lg" className="morphing-gradient hover:scale-105 text-white px-12 py-4 text-xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-500 neon-glow">
                    {user ? "Go to Dashboard" : "Start Your Journey"}
                    <Rocket className="ml-3 h-6 w-6 animate-bounce" />
                  </Button>
                </Link>
                <Link to="/games">
                  <Button variant="outline" size="lg" className="glass-card hover:glass-effect px-12 py-4 text-xl font-bold border-2 border-wellness-blue/40 hover:border-wellness-blue/60 text-slate-800 hover:scale-105 transition-all duration-300">
                    Try Wellness Games
                    <Gamepad2 className="ml-3 h-6 w-6" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 px-4 relative">
          <div className="aurora-effect absolute inset-0 rounded-3xl"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-20 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-slate-800">
                Everything you need to 
                <span className="text-wellness-blue"> thrive</span> at work
              </h2>
              <p className="text-2xl text-slate-600 max-w-3xl mx-auto font-bold">
                Comprehensive tools and insights to support your mental health and boost productivity
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card 
                    key={index} 
                    className="glass-card hover:shadow-2xl transition-all duration-700 animate-scale-in group hover:-translate-y-4 floating-card hover:neon-glow"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="flex flex-col items-center text-center space-y-6 p-8">
                      <div className={`p-5 rounded-3xl bg-gradient-to-r ${feature.color} group-hover:scale-125 transition-transform duration-500 shadow-2xl breathe-animation neon-glow`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-800">{feature.title}</h3>
                      <p className="text-slate-600 leading-relaxed font-semibold text-lg">{feature.description}</p>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 px-4 bg-gradient-to-r from-wellness-blue/5 to-wellness-purple/5 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-slate-800">
                Proven Results for Employee Wellness
              </h2>
              <p className="text-2xl text-slate-600 max-w-3xl mx-auto font-bold">
                Join thousands of employees who have transformed their workplace experience
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-10">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card 
                    key={index} 
                    className="glass-card hover:shadow-2xl transition-all duration-700 group hover:-translate-y-2 text-center floating-card hover:neon-glow p-10"
                  >
                    <div className={`p-6 rounded-3xl bg-gradient-to-r from-wellness-green to-wellness-emerald mx-auto mb-6 w-fit group-hover:scale-125 transition-transform duration-500 neon-glow`}>
                      <Icon className="h-12 w-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-4">{benefit.title}</h3>
                    <p className="text-slate-600 mb-6 font-semibold text-lg">{benefit.description}</p>
                    <div className="text-3xl font-black text-wellness-green morphing-gradient bg-clip-text">{benefit.metric}</div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <Card className="glass-card overflow-hidden relative floating-card neon-glow">
              <div className="absolute inset-0 morphing-gradient opacity-95"></div>
              <div className="relative z-10 animate-fade-in-up p-16">
                <Brain className="h-20 w-20 text-white mx-auto mb-8 animate-bounce-subtle breathe-animation" />
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                  Ready to transform your workplace wellness?
                </h2>
                <p className="text-2xl text-white/95 mb-10 font-bold max-w-3xl mx-auto">
                  Join thousands of employees who are already thriving with AI-powered wellness insights
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link to="/login">
                    <Button size="lg" variant="secondary" className="glass-effect hover:glass-card px-12 py-4 text-xl font-bold text-white hover:text-slate-800 transition-all duration-500 hover:scale-105">
                      <Shield className="mr-3 h-6 w-6" />
                      Get Started Free
                    </Button>
                  </Link>
                  <Link to="/dashboard">
                    <Button size="lg" variant="outline" className="glass-effect hover:glass-card px-12 py-4 text-xl font-bold border-2 border-white/40 text-white hover:bg-white/20 transition-all duration-500 hover:scale-105">
                      <Timer className="mr-3 h-6 w-6" />
                      View Demo
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
