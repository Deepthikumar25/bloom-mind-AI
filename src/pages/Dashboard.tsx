
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Navigation from "@/components/Navigation";
import { Heart, Target, Timer, CheckSquare, Lightbulb, TrendingUp, Play, Pause, RotateCcw, Coffee, Zap, Calendar } from "lucide-react";

const Dashboard = () => {
  const [moodScore, setMoodScore] = useState(75);
  const [focusTime, setFocusTime] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState("");
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update current time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  // Load data from localStorage
  useEffect(() => {
    const savedData = localStorage.getItem('thrive-dashboard');
    if (savedData) {
      const data = JSON.parse(savedData);
      setMoodScore(data.moodScore || 75);
      setTasks(data.tasks || []);
    }
  }, []);

  // Save data to localStorage
  useEffect(() => {
    const data = { moodScore, tasks };
    localStorage.setItem('thrive-dashboard', JSON.stringify(data));
  }, [moodScore, tasks]);

  // Timer functionality
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setFocusTime(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask.trim()]);
      setNewTask("");
    }
  };

  const removeTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const wellnessTips = [
    "Take a 5-minute breathing break every hour",
    "Stay hydrated - aim for 8 glasses of water daily",
    "Practice gratitude by writing down 3 things you're thankful for",
    "Take a short walk during your lunch break",
    "Stretch your neck and shoulders every 30 minutes"
  ];

  const [currentTip] = useState(wellnessTips[Math.floor(Math.random() * wellnessTips.length)]);

  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 17) return "Good Afternoon";
    return "Good Evening";
  };

  const getMotivationalMessage = () => {
    const messages = [
      "You're doing great! Keep up the momentum.",
      "Every small step counts towards your wellness journey.",
      "Today is a new opportunity to thrive!",
      "Your mental health matters. Take care of yourself.",
      "Progress, not perfection. You've got this!"
    ];
    return messages[Math.floor(Math.random() * messages.length)];
  };

  return (
    <div className="min-h-screen hero-gradient">
      <Navigation />
      
      <div className="pt-20 px-4 pb-12">
        <div className="max-w-7xl mx-auto">
          {/* Welcome Header */}
          <div className="mb-8 animate-fade-in-up">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2 text-slate-800">
                  {getGreeting()}! Ready to thrive today?
                </h1>
                <p className="text-slate-600 text-lg font-medium">
                  {getMotivationalMessage()}
                </p>
              </div>
              <div className="hidden md:flex items-center space-x-4">
                <div className="glass-card p-4 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5 text-wellness-blue" />
                    <span className="text-slate-800 font-semibold">
                      {currentTime.toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-3">
              <Button 
                className="bg-gradient-to-r from-wellness-blue to-wellness-indigo text-white hover:shadow-lg transition-all duration-300"
                onClick={() => setIsTimerRunning(!isTimerRunning)}
              >
                <Coffee className="h-4 w-4 mr-2" />
                {isTimerRunning ? 'Pause Focus' : 'Start Focus Session'}
              </Button>
              <Button 
                variant="outline" 
                className="border-wellness-green/30 text-slate-800 hover:bg-wellness-green/10 font-semibold"
                onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
              >
                <Zap className="h-4 w-4 mr-2" />
                Quick Wellness Tip
              </Button>
            </div>
          </div>

          {/* Dashboard Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Mood Pulse */}
            <Card className="glass-card hover:shadow-2xl transition-all duration-500 animate-scale-in hover:-translate-y-1">
              <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                <div className="flex items-center space-x-2">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-wellness-pink to-wellness-purple shadow-lg">
                    <Heart className="h-5 w-5 text-white" />
                  </div>
                  <CardTitle className="text-lg text-slate-800">Mood Pulse</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-3xl font-bold bg-gradient-to-r from-wellness-pink to-wellness-purple bg-clip-text text-transparent">{moodScore}%</div>
                  <Progress value={moodScore} className="h-3" />
                  <p className="text-sm text-slate-600 font-medium">
                    Your mood is <span className="font-semibold text-slate-800">{moodScore > 70 ? 'excellent' : moodScore > 50 ? 'good' : 'needs attention'}</span> today
                  </p>
                  <div className="flex space-x-2">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <Button
                        key={rating}
                        size="sm"
                        variant={moodScore >= rating * 20 ? "default" : "outline"}
                        onClick={() => setMoodScore(rating * 20)}
                        className={`w-8 h-8 p-0 ${moodScore >= rating * 20 ? 'bg-gradient-to-r from-wellness-pink to-wellness-purple' : 'text-slate-800 border-slate-300'}`}
                      >
                        {rating}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Focus Timer */}
            <Card className="glass-card hover:shadow-2xl transition-all duration-500 animate-scale-in hover:-translate-y-1">
              <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                <div className="flex items-center space-x-2">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-wellness-blue to-wellness-indigo shadow-lg">
                    <Timer className="h-5 w-5 text-white" />
                  </div>
                  <CardTitle className="text-lg text-slate-800">Focus Timer</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-3xl font-bold bg-gradient-to-r from-wellness-blue to-wellness-indigo bg-clip-text text-transparent">
                    {formatTime(focusTime)}
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      onClick={() => setIsTimerRunning(!isTimerRunning)}
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-wellness-blue to-wellness-indigo hover:from-wellness-indigo hover:to-wellness-blue"
                    >
                      {isTimerRunning ? <Pause className="h-4 w-4 mr-1" /> : <Play className="h-4 w-4 mr-1" />}
                      {isTimerRunning ? 'Pause' : 'Start'}
                    </Button>
                    <Button
                      onClick={() => {
                        setFocusTime(0);
                        setIsTimerRunning(false);
                      }}
                      variant="outline"
                      size="sm"
                      className="border-wellness-blue/30 hover:border-wellness-blue/50 text-slate-800"
                    >
                      <RotateCcw className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-sm text-slate-600 font-medium">
                    {isTimerRunning ? 'Deep work session active' : 'Ready to focus'}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Productivity Stats */}
            <Card className="glass-card hover:shadow-2xl transition-all duration-500 animate-scale-in hover:-translate-y-1">
              <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                <div className="flex items-center space-x-2">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-wellness-purple to-wellness-pink shadow-lg">
                    <TrendingUp className="h-5 w-5 text-white" />
                  </div>
                  <CardTitle className="text-lg text-slate-800">Productivity</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-3xl font-bold bg-gradient-to-r from-wellness-purple to-wellness-pink bg-clip-text text-transparent">87%</div>
                  <Progress value={87} className="h-3" />
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <div className="font-semibold text-slate-800">Tasks Done</div>
                      <div className="text-slate-600">{tasks.length}/10</div>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800">Focus Time</div>
                      <div className="text-slate-600">{Math.floor(focusTime / 60)}m</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Task Tracker */}
            <Card className="glass-card hover:shadow-2xl transition-all duration-500 animate-scale-in md:col-span-2 hover:-translate-y-1">
              <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                <div className="flex items-center space-x-2">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-wellness-teal to-wellness-cyan shadow-lg">
                    <CheckSquare className="h-5 w-5 text-white" />
                  </div>
                  <CardTitle className="text-lg text-slate-800">Task Tracker</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={newTask}
                      onChange={(e) => setNewTask(e.target.value)}
                      placeholder="Add a new task..."
                      className="flex-1 px-4 py-2 border border-wellness-teal/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-wellness-teal/50 bg-white/70 backdrop-blur-sm text-slate-800 font-medium placeholder-slate-500"
                      onKeyPress={(e) => e.key === 'Enter' && addTask()}
                    />
                    <Button 
                      onClick={addTask} 
                      size="sm" 
                      className="bg-gradient-to-r from-wellness-teal to-wellness-cyan hover:from-wellness-cyan hover:to-wellness-teal"
                    >
                      Add
                    </Button>
                  </div>
                  <div className="space-y-2 max-h-40 overflow-y-auto">
                    {tasks.map((task, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-white/60 backdrop-blur-sm rounded-lg border border-white/40">
                        <span className="text-sm font-semibold text-slate-800">{task}</span>
                        <Button
                          onClick={() => removeTask(index)}
                          variant="ghost"
                          size="sm"
                          className="text-wellness-green hover:text-wellness-green/80 hover:bg-wellness-green/10"
                        >
                          ✓
                        </Button>
                      </div>
                    ))}
                  </div>
                  {tasks.length === 0 && (
                    <p className="text-sm text-slate-600 text-center py-4 font-medium">
                      No tasks yet. Add one to get started! 🚀
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Wellness Tip */}
            <Card className="glass-card hover:shadow-2xl transition-all duration-500 animate-scale-in hover:-translate-y-1">
              <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                <div className="flex items-center space-x-2">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-wellness-green to-wellness-emerald shadow-lg">
                    <Lightbulb className="h-5 w-5 text-white" />
                  </div>
                  <CardTitle className="text-lg text-slate-800">Daily Tip</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed mb-4 text-slate-700 font-medium">{currentTip}</p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full border-wellness-green/30 hover:border-wellness-green/50 hover:bg-wellness-green/10 text-slate-800 font-semibold"
                >
                  Mark as Done
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
