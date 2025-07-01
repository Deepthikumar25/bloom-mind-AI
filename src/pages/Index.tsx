
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { Brain, Heart, Target, Zap, ArrowRight, Gamepad2, BarChart3, Timer } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: Heart,
      title: "Wellness Tracking",
      description: "Monitor your mood, stress levels, and overall wellbeing with AI-powered insights"
    },
    {
      icon: Target,
      title: "Productivity Focus",
      description: "Set goals, track tasks, and boost your productivity with smart recommendations"
    },
    {
      icon: Gamepad2,
      title: "Stress Relief Games",
      description: "Interactive games designed to reduce stress and enhance mental clarity"
    },
    {
      icon: BarChart3,
      title: "Progress Analytics",
      description: "Visualize your wellness journey with comprehensive charts and insights"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-wellness-blue via-wellness-purple to-wellness-teal bg-clip-text text-transparent">
                Thrive AI
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Enhance your workplace wellness and productivity with AI-powered insights, 
              interactive games, and personalized recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/dashboard">
                <Button size="lg" className="bg-wellness-blue hover:bg-wellness-blue/90 text-white px-8 py-3 text-lg">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/games">
                <Button variant="outline" size="lg" className="px-8 py-3 text-lg">
                  Try Games
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything you need to thrive at work
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tools and insights to support your mental health and productivity
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={index} 
                  className="p-6 glass-card hover:shadow-xl transition-all duration-300 animate-scale-in group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-3 rounded-full bg-gradient-to-r from-wellness-blue to-wellness-purple group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="p-12 glass-card wellness-gradient">
            <div className="animate-fade-in-up">
              <Brain className="h-16 w-16 text-white mx-auto mb-6 animate-bounce-subtle" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to transform your workplace wellness?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Join thousands of employees who are already thriving with AI-powered wellness insights
              </p>
              <Link to="/login">
                <Button size="lg" variant="secondary" className="px-8 py-3 text-lg">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
