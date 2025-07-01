
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/Navigation";
import FloatingParticles from "@/components/FloatingParticles";
import AnimatedBackground from "@/components/AnimatedBackground";
import { useAuth } from "@/contexts/AuthContext";
import { Brain, Eye, EyeOff, Loader2, Shield, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState('');
  const { login, signup, isLoading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleAuth = async (e: React.FormEvent<HTMLFormElement>, isLogin: boolean) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    try {
      if (isLogin) {
        await login(email, password);
      } else {
        await signup(email, password, name);
      }
      
      toast({
        title: isLogin ? "Welcome back!" : "Account created!",
        description: isLogin ? "You've successfully logged in." : "Your account has been created successfully.",
      });
      
      navigate('/dashboard');
    } catch (error) {
      toast({
        title: "Authentication failed",
        description: "Please check your credentials and try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <FloatingParticles />
      <AnimatedBackground />
      <div className="hero-gradient min-h-screen relative z-10">
        <Navigation />
        
        <div className="pt-24 pb-12 px-4 flex items-center justify-center min-h-screen">
          <Card className="w-full max-w-lg glass-card animate-scale-in floating-card neon-glow">
            <CardHeader className="text-center space-y-6 pb-8">
              <div className="mx-auto p-6 rounded-3xl morphing-gradient shadow-2xl neon-glow breathe-animation">
                <Brain className="h-12 w-12 text-white" />
              </div>
              <div className="space-y-3">
                <CardTitle className="text-3xl font-black morphing-gradient bg-clip-text text-transparent">
                  Welcome to Thrive AI
                </CardTitle>
                <div className="flex items-center justify-center space-x-2">
                  <Shield className="h-5 w-5 text-wellness-blue" />
                  <CardDescription className="text-lg font-bold">
                    Your journey to workplace wellness starts here
                  </CardDescription>
                  <Star className="h-4 w-4 text-yellow-500 animate-pulse" />
                </div>
              </div>
            </CardHeader>
            <CardContent className="pb-8">
              <Tabs defaultValue="login" className="w-full">
                <TabsList className="grid w-full grid-cols-2 glass-effect h-14 p-2">
                  <TabsTrigger 
                    value="login" 
                    className="data-[state=active]:morphing-gradient data-[state=active]:text-white font-bold text-lg h-10"
                  >
                    Login
                  </TabsTrigger>
                  <TabsTrigger 
                    value="signup" 
                    className="data-[state=active]:morphing-gradient data-[state=active]:text-white font-bold text-lg h-10"
                  >
                    Sign Up
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="login" className="mt-8">
                  <form onSubmit={(e) => handleAuth(e, true)} className="space-y-6">
                    <div className="space-y-3">
                      <Label htmlFor="email" className="text-lg font-bold text-slate-800">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        required
                        className="glass-effect h-12 text-lg font-semibold border-2 border-wellness-blue/30 focus:border-wellness-blue/60 focus:ring-wellness-blue/30 transition-all duration-300"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="password" className="text-lg font-bold text-slate-800">Password</Label>
                      <div className="relative">
                        <Input
                          id="password"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          required
                          className="glass-effect h-12 text-lg font-semibold border-2 border-wellness-blue/30 focus:border-wellness-blue/60 focus:ring-wellness-blue/30 pr-12 transition-all duration-300"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-4 py-2 hover:bg-transparent"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOff className="h-5 w-5 text-muted-foreground" />
                          ) : (
                            <Eye className="h-5 w-5 text-muted-foreground" />
                          )}
                        </Button>
                      </div>
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full morphing-gradient hover:scale-105 shadow-2xl h-14 text-xl font-bold transition-all duration-500 neon-glow" 
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-3 h-6 w-6 animate-spin" />
                          Signing in...
                        </>
                      ) : (
                        "Sign In"
                      )}
                    </Button>
                  </form>
                </TabsContent>
                
                <TabsContent value="signup" className="mt-8">
                  <form onSubmit={(e) => handleAuth(e, false)} className="space-y-6">
                    <div className="space-y-3">
                      <Label htmlFor="signup-name" className="text-lg font-bold text-slate-800">Full Name</Label>
                      <Input
                        id="signup-name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your full name"
                        required
                        className="glass-effect h-12 text-lg font-semibold border-2 border-wellness-purple/30 focus:border-wellness-purple/60 focus:ring-wellness-purple/30 transition-all duration-300"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="signup-email" className="text-lg font-bold text-slate-800">Email</Label>
                      <Input
                        id="signup-email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        required
                        className="glass-effect h-12 text-lg font-semibold border-2 border-wellness-purple/30 focus:border-wellness-purple/60 focus:ring-wellness-purple/30 transition-all duration-300"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="signup-password" className="text-lg font-bold text-slate-800">Password</Label>
                      <div className="relative">
                        <Input
                          id="signup-password"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Create a password"
                          required
                          className="glass-effect h-12 text-lg font-semibold border-2 border-wellness-purple/30 focus:border-wellness-purple/60 focus:ring-wellness-purple/30 pr-12 transition-all duration-300"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-4 py-2 hover:bg-transparent"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOff className="h-5 w-5 text-muted-foreground" />
                          ) : (
                            <Eye className="h-5 w-5 text-muted-foreground" />
                          )}
                        </Button>
                      </div>
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full morphing-gradient hover:scale-105 shadow-2xl h-14 text-xl font-bold transition-all duration-500 neon-glow" 
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-3 h-6 w-6 animate-spin" />
                          Creating account...
                        </>
                      ) : (
                        "Create Account"
                      )}
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
              
              <div className="mt-8 text-center">
                <Link to="/" className="text-lg font-bold text-slate-600 hover:text-slate-800 transition-colors">
                  ← Back to Home
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;
