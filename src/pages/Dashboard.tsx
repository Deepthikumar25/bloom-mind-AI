
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Navigation from "@/components/Navigation";
import { Heart, Target, Timer, CheckSquare, Lightbulb, TrendingUp, Play, Pause, RotateCcw } from "lucide-react";

const Dashboard = () => {
  const [moodScore, setMoodScore] = useState(75);
  const [focusTime, setFocusTime] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState("");

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <Navigation />
      
      <div className="pt-20 px-4 pb-12">
        <div className="max-w-7xl mx-auto">
          {/* Welcome Header */}
          <div className="mb-8 animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Welcome back! Ready to thrive today?
            </h1>
            <p className="text-muted-foreground text-lg">
              Here's your wellness overview and productivity dashboard
            </p>
          </div>

          {/* Dashboard Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Mood Pulse */}
            <Card className="glass-card hover:shadow-xl transition-all duration-300 animate-scale-in">
              <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                <div className="flex items-center space-x-2">
                  <Heart className="h-5 w-5 text-wellness-green" />
                  <CardTitle className="text-lg">Mood Pulse</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-3xl font-bold text-wellness-green">{moodScore}%</div>
                  <Progress value={moodScore} className="h-2" />
                  <p className="text-sm text-muted-foreground">
                    Your mood is {moodScore > 70 ? 'great' : moodScore > 50 ? 'good' : 'needs attention'} today
                  </p>
                  <div className="flex space-x-2">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <Button
                        key={rating}
                        size="sm"
                        variant={moodScore >= rating * 20 ? "default" : "outline"}
                        onClick={() => setMoodScore(rating * 20)}
                        className="w-8 h-8 p-0"
                      >
                        {rating}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Focus Timer */}
            <Card className="glass-card hover:shadow-xl transition-all duration-300 animate-scale-in">
              <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                <div className="flex items-center space-x-2">
                  <Timer className="h-5 w-5 text-wellness-blue" />
                  <CardTitle className="text-lg">Focus Timer</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-3xl font-bold text-wellness-blue">
                    {formatTime(focusTime)}
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      onClick={() => setIsTimerRunning(!isTimerRunning)}
                      size="sm"
                      className="flex-1"
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
                    >
                      <RotateCcw className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Deep work session in progress
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Productivity Stats */}
            <Card className="glass-card hover:shadow-xl transition-all duration-300 animate-scale-in">
              <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-wellness-purple" />
                  <CardTitle className="text-lg">Productivity</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-3xl font-bold text-wellness-purple">87%</div>
                  <Progress value={87} className="h-2" />
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <div className="font-semibold">Tasks Done</div>
                      <div className="text-muted-foreground">{tasks.length}/10</div>
                    </div>
                    <div>
                      <div className="font-semibold">Focus Time</div>
                      <div className="text-muted-foreground">{Math.floor(focusTime / 60)}m</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Task Tracker */}
            <Card className="glass-card hover:shadow-xl transition-all duration-300 animate-scale-in md:col-span-2">
              <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                <div className="flex items-center space-x-2">
                  <CheckSquare className="h-5 w-5 text-wellness-teal" />
                  <CardTitle className="text-lg">Task Tracker</CardTitle>
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
                      className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-wellness-teal"
                      onKeyPress={(e) => e.key === 'Enter' && addTask()}
                    />
                    <Button onClick={addTask} size="sm">Add</Button>
                  </div>
                  <div className="space-y-2 max-h-40 overflow-y-auto">
                    {tasks.map((task, index) => (
                      <div key={index} className="flex items-center justify-between p-2 bg-muted rounded-lg">
                        <span className="text-sm">{task}</span>
                        <Button
                          onClick={() => removeTask(index)}
                          variant="ghost"
                          size="sm"
                          className="text-destructive hover:text-destructive"
                        >
                          ✓
                        </Button>
                      </div>
                    ))}
                  </div>
                  {tasks.length === 0 && (
                    <p className="text-sm text-muted-foreground text-center py-4">
                      No tasks yet. Add one to get started!
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Wellness Tip */}
            <Card className="glass-card hover:shadow-xl transition-all duration-300 animate-scale-in">
              <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                <div className="flex items-center space-x-2">
                  <Lightbulb className="h-5 w-5 text-wellness-orange" />
                  <CardTitle className="text-lg">Daily Tip</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed">{currentTip}</p>
                <Button variant="outline" size="sm" className="mt-4 w-full">
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
