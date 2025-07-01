
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { Gamepad2, Timer, Brain, Target, Heart, TreePine, Zap, BookOpen } from "lucide-react";

const Games = () => {
  const [selectedGame, setSelectedGame] = useState<string | null>(null);

  const games = [
    {
      id: "focus-quest",
      title: "Focus Quest",
      description: "Pomodoro timer with quest-like progression",
      icon: Timer,
      color: "wellness-blue",
      difficulty: "Easy",
      category: "Productivity"
    },
    {
      id: "balance-game",
      title: "Balance Game",
      description: "Find equilibrium between work and wellness",
      icon: Target,
      color: "wellness-green",
      difficulty: "Medium",
      category: "Wellness"
    },
    {
      id: "memory-match",
      title: "Memory Match",
      description: "Enhance cognitive function with pattern matching",
      icon: Brain,
      color: "wellness-purple",
      difficulty: "Medium",
      category: "Cognitive"
    },
    {
      id: "zen-typing",
      title: "Zen Typing",
      description: "Mindful typing practice for stress relief",
      icon: BookOpen,
      color: "wellness-teal",
      difficulty: "Easy",
      category: "Mindfulness"
    },
    {
      id: "emotion-escape",
      title: "Emotion Escape",
      description: "Avoid stressors and collect calming icons",
      icon: Heart,
      color: "wellness-green",
      difficulty: "Hard",
      category: "Stress Relief"
    },
    {
      id: "happy-garden",
      title: "Happy Garden",
      description: "Grow and maintain your wellness tree",
      icon: TreePine,
      color: "wellness-green",
      difficulty: "Easy",
      category: "Wellness"
    },
    {
      id: "mood-maze",
      title: "Mood Maze",
      description: "Navigate through positive thinking puzzles",
      icon: Brain,
      color: "wellness-purple",
      difficulty: "Medium",
      category: "Mental Health"
    },
    {
      id: "quick-recall",
      title: "Quick Recall",
      description: "Flashcard quiz for memory sharpness",
      icon: Zap,
      color: "wellness-orange",
      difficulty: "Hard",
      category: "Memory"
    }
  ];

  const categories = ["All", "Productivity", "Wellness", "Cognitive", "Mindfulness", "Stress Relief", "Mental Health", "Memory"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredGames = activeCategory === "All" 
    ? games 
    : games.filter(game => game.category === activeCategory);

  const GameComponent = ({ gameId }: { gameId: string }) => {
    switch (gameId) {
      case "focus-quest":
        return <FocusQuest />;
      case "memory-match":
        return <MemoryMatch />;
      case "zen-typing":
        return <ZenTyping />;
      case "happy-garden":
        return <HappyGarden />;
      default:
        return (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold mb-4">Game Coming Soon!</h3>
            <p className="text-muted-foreground mb-6">
              We're working hard to bring you this amazing wellness game.
            </p>
            <Button onClick={() => setSelectedGame(null)}>
              Back to Games
            </Button>
          </div>
        );
    }
  };

  if (selectedGame) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <Navigation />
        <div className="pt-20 px-4 pb-12">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Button 
                variant="outline" 
                onClick={() => setSelectedGame(null)}
                className="mb-4"
              >
                ← Back to Games
              </Button>
            </div>
            <Card className="glass-card">
              <CardContent className="p-8">
                <GameComponent gameId={selectedGame} />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <Navigation />
      
      <div className="pt-20 px-4 pb-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8 animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Wellness Games</h1>
            <p className="text-muted-foreground text-lg">
              Interactive games designed to reduce stress and enhance mental clarity
            </p>
          </div>

          {/* Category Filter */}
          <div className="mb-8 animate-fade-in">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(category)}
                  className="transition-all duration-200"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Games Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredGames.map((game, index) => {
              const Icon = game.icon;
              return (
                <Card 
                  key={game.id}
                  className="glass-card hover:shadow-xl transition-all duration-300 animate-scale-in group cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => setSelectedGame(game.id)}
                >
                  <CardHeader className="pb-4">
                    <div className={`p-3 rounded-full bg-gradient-to-r from-${game.color} to-${game.color}/80 w-fit group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{game.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {game.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center text-sm">
                      <span className="px-2 py-1 bg-muted rounded-full">
                        {game.category}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        game.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                        game.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {game.difficulty}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

// Sample Game Components
const FocusQuest = () => {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [level, setLevel] = useState(1);

  return (
    <div className="text-center space-y-6">
      <h2 className="text-2xl font-bold">Focus Quest - Level {level}</h2>
      <div className="text-6xl font-mono">
        {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
      </div>
      <div className="space-x-4">
        <Button 
          onClick={() => setIsRunning(!isRunning)}
          size="lg"
          className="bg-wellness-blue hover:bg-wellness-blue/90"
        >
          {isRunning ? 'Pause Quest' : 'Start Quest'}
        </Button>
        <Button 
          variant="outline" 
          onClick={() => setTimeLeft(25 * 60)}
        >
          Reset
        </Button>
      </div>
      <div className="bg-muted p-4 rounded-lg">
        <p className="text-sm">Complete focus sessions to level up your quest!</p>
      </div>
    </div>
  );
};

const MemoryMatch = () => {
  const [score, setScore] = useState(0);
  const [cards] = useState(Array(8).fill(0).map((_, i) => ({ id: i, matched: false })));

  return (
    <div className="text-center space-y-6">
      <h2 className="text-2xl font-bold">Memory Match</h2>
      <div className="text-xl">Score: {score}</div>
      <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
        {cards.map((card) => (
          <div
            key={card.id}
            className="aspect-square bg-wellness-purple rounded-lg flex items-center justify-center text-white font-bold text-xl cursor-pointer hover:bg-wellness-purple/80 transition-colors"
            onClick={() => setScore(score + 10)}
          >
            ?
          </div>
        ))}
      </div>
      <Button variant="outline" onClick={() => setScore(0)}>
        New Game
      </Button>
    </div>
  );
};

const ZenTyping = () => {
  const [text] = useState("Focus on your breathing. Let each keystroke be mindful and intentional.");
  const [typed, setTyped] = useState("");

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center">Zen Typing</h2>
      <div className="bg-muted p-6 rounded-lg">
        <p className="text-lg leading-relaxed">
          {text.split('').map((char, i) => (
            <span
              key={i}
              className={
                i < typed.length
                  ? typed[i] === char
                    ? 'text-wellness-green bg-wellness-green/20'
                    : 'text-red-500 bg-red-100'
                  : 'text-muted-foreground'
              }
            >
              {char}
            </span>
          ))}
        </p>
      </div>
      <textarea
        value={typed}
        onChange={(e) => setTyped(e.target.value)}
        className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-wellness-teal"
        placeholder="Start typing the text above..."
        rows={4}
      />
      <div className="text-center">
        <p className="text-sm text-muted-foreground">
          Accuracy: {typed.length > 0 ? Math.round((typed.split('').filter((c, i) => c === text[i]).length / typed.length) * 100) : 0}%
        </p>
      </div>
    </div>
  );
};

const HappyGarden = () => {
  const [treeHealth, setTreeHealth] = useState(75);
  const [waterLevel, setWaterLevel] = useState(50);

  return (
    <div className="text-center space-y-6">
      <h2 className="text-2xl font-bold">Happy Garden</h2>
      <div className="text-6xl">🌳</div>
      <div className="space-y-4">
        <div>
          <p className="text-sm mb-2">Tree Health: {treeHealth}%</p>
          <div className="w-full bg-muted rounded-full h-2">
            <div className="bg-wellness-green h-2 rounded-full" style={{ width: `${treeHealth}%` }}></div>
          </div>
        </div>
        <div>
          <p className="text-sm mb-2">Water Level: {waterLevel}%</p>
          <div className="w-full bg-muted rounded-full h-2">
            <div className="bg-wellness-blue h-2 rounded-full" style={{ width: `${waterLevel}%` }}></div>
          </div>
        </div>
      </div>
      <div className="space-x-4">
        <Button 
          onClick={() => {
            setWaterLevel(Math.min(100, waterLevel + 20));
            setTreeHealth(Math.min(100, treeHealth + 10));
          }}
          className="bg-wellness-blue hover:bg-wellness-blue/90"
        >
          💧 Water Tree
        </Button>
        <Button 
          onClick={() => setTreeHealth(Math.min(100, treeHealth + 15))}
          className="bg-wellness-green hover:bg-wellness-green/90"
        >
          🌱 Add Fertilizer
        </Button>
      </div>
    </div>
  );
};

export default Games;
