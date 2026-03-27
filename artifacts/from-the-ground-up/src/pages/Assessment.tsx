import { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  RotateCcw,
  Hammer,
  Zap,
  Droplet,
  Thermometer,
  Brain,
  HardHat,
  ClipboardCheck,
  Target,
} from "lucide-react";

type ProgramKey =
  | "construction"
  | "electrical"
  | "plumbing"
  | "carpentry"
  | "hvac"
  | "ai-trades";

interface Question {
  id: number;
  text: string;
  options: {
    label: string;
    scores: Partial<Record<ProgramKey, number>>;
  }[];
}

const programInfo: Record<
  ProgramKey,
  {
    title: string;
    icon: any;
    duration: string;
    description: string;
    nextSteps: string[];
  }
> = {
  construction: {
    title: "Construction Fundamentals",
    icon: HardHat,
    duration: "12 weeks",
    description:
      "Learn the foundations of residential and commercial construction from framing to finishing. AI-powered simulations help you practice complex techniques before stepping onto the job site.",
    nextSteps: [
      "Enroll in the 12-week Construction Fundamentals program",
      "Obtain OSHA 10/30 safety certification",
      "Pursue a carpentry or general contractor apprenticeship",
      "Explore DC licensing requirements for general contractors",
    ],
  },
  electrical: {
    title: "Electrical Systems",
    icon: Zap,
    duration: "16 weeks",
    description:
      "Master residential and commercial electrical systems from wiring to troubleshooting with AI-assisted diagnostic tools.",
    nextSteps: [
      "Enroll in the 16-week Electrical Systems program",
      "Study for the DC Journeyman Electrician exam",
      "Join an IBEW electrical apprenticeship program",
      "Get certified in NEC code requirements",
    ],
  },
  plumbing: {
    title: "Plumbing Essentials",
    icon: Droplet,
    duration: "14 weeks",
    description:
      "From pipe fitting to system design — build expertise in modern plumbing systems using AI-powered flow modeling and diagnostics.",
    nextSteps: [
      "Enroll in the 14-week Plumbing Essentials program",
      "Pursue DC Journeyman Plumber licensing",
      "Join a UA plumbing apprenticeship",
      "Study backflow prevention certification",
    ],
  },
  carpentry: {
    title: "Carpentry & Woodworking",
    icon: Hammer,
    duration: "10 weeks",
    description:
      "Craft beautiful, functional structures with traditional techniques enhanced by AI-assisted design software and CNC programming.",
    nextSteps: [
      "Enroll in the 10-week Carpentry & Woodworking program",
      "Build a portfolio of projects for clients",
      "Explore finish carpentry specialization",
      "Consider launching a custom furniture business",
    ],
  },
  hvac: {
    title: "HVAC Systems",
    icon: Thermometer,
    duration: "14 weeks",
    description:
      "Install, maintain, and repair heating, ventilation, and air conditioning systems with AI energy efficiency modeling.",
    nextSteps: [
      "Enroll in the 14-week HVAC Systems program",
      "Get EPA Section 608 certification",
      "Pursue NATE certification for technicians",
      "Study DC HVAC licensing requirements",
    ],
  },
  "ai-trades": {
    title: "AI in the Trades",
    icon: Brain,
    duration: "8 weeks",
    description:
      "Harness artificial intelligence to work smarter, safer, and more efficiently in any trade — from drones to project management.",
    nextSteps: [
      "Enroll in the 8-week AI in the Trades program",
      "Learn drone operation for site surveys (Part 107)",
      "Explore AI-powered estimating platforms",
      "Build an AI-enhanced business plan",
    ],
  },
};

const questions: Question[] = [
  {
    id: 1,
    text: "What kind of work environment appeals to you most?",
    options: [
      {
        label: "Outdoors on large building sites",
        scores: { construction: 3, carpentry: 1 },
      },
      {
        label: "Inside homes and buildings, working with systems behind the walls",
        scores: { electrical: 2, plumbing: 2, hvac: 1 },
      },
      {
        label: "A workshop where I can create things with precision",
        scores: { carpentry: 3, "ai-trades": 1 },
      },
      {
        label: "Anywhere — I want to use technology to solve problems",
        scores: { "ai-trades": 3, electrical: 1 },
      },
    ],
  },
  {
    id: 2,
    text: "Which of these activities sounds most enjoyable?",
    options: [
      {
        label: "Building something from scratch with my hands",
        scores: { construction: 3, carpentry: 2 },
      },
      {
        label: "Figuring out why something stopped working and fixing it",
        scores: { electrical: 2, hvac: 2, plumbing: 1 },
      },
      {
        label: "Designing layouts and planning systems",
        scores: { plumbing: 2, hvac: 1, "ai-trades": 2 },
      },
      {
        label: "Using computers and new technology to improve processes",
        scores: { "ai-trades": 3, electrical: 1 },
      },
    ],
  },
  {
    id: 3,
    text: "How do you feel about working with electricity and wiring?",
    options: [
      {
        label: "I find circuits and wiring fascinating",
        scores: { electrical: 3, "ai-trades": 1 },
      },
      {
        label: "I'd rather work with water and pipes",
        scores: { plumbing: 3 },
      },
      {
        label: "I prefer working with wood, concrete, and structural materials",
        scores: { construction: 2, carpentry: 2 },
      },
      {
        label: "I'm more interested in climate systems — heating and cooling",
        scores: { hvac: 3 },
      },
    ],
  },
  {
    id: 4,
    text: "What's your experience level with trade skills?",
    options: [
      {
        label: "Complete beginner — never held a power tool",
        scores: { construction: 2, carpentry: 2, plumbing: 1 },
      },
      {
        label: "Some DIY experience at home",
        scores: { electrical: 1, plumbing: 1, carpentry: 1, construction: 1, hvac: 1 },
      },
      {
        label: "I've worked in a related field and want to specialize",
        scores: { hvac: 2, electrical: 2 },
      },
      {
        label: "I'm already in the trades and want to add AI skills",
        scores: { "ai-trades": 4 },
      },
    ],
  },
  {
    id: 5,
    text: "What's your primary goal?",
    options: [
      {
        label: "Get hired quickly in a high-demand field",
        scores: { electrical: 2, plumbing: 2, hvac: 2 },
      },
      {
        label: "Start my own contracting business someday",
        scores: { construction: 2, "ai-trades": 2, carpentry: 1 },
      },
      {
        label: "Learn a creative, hands-on craft",
        scores: { carpentry: 3, construction: 1 },
      },
      {
        label: "Future-proof my career with cutting-edge skills",
        scores: { "ai-trades": 3, electrical: 1 },
      },
    ],
  },
  {
    id: 6,
    text: "How important is working with technology and AI tools?",
    options: [
      {
        label: "Essential — I want to be on the cutting edge",
        scores: { "ai-trades": 3, electrical: 1 },
      },
      {
        label: "I'd like to use it but hands-on work comes first",
        scores: { construction: 2, carpentry: 1, hvac: 1 },
      },
      {
        label: "As long as it helps me do my job better, I'm open to it",
        scores: { plumbing: 1, electrical: 1, hvac: 1, "ai-trades": 1 },
      },
      {
        label: "I prefer traditional methods and tools",
        scores: { carpentry: 2, plumbing: 1, construction: 1 },
      },
    ],
  },
  {
    id: 7,
    text: "Which project excites you the most?",
    options: [
      {
        label: "Framing and roofing a house",
        scores: { construction: 3 },
      },
      {
        label: "Wiring an entire building's electrical system",
        scores: { electrical: 3 },
      },
      {
        label: "Installing a full kitchen or bathroom plumbing system",
        scores: { plumbing: 3 },
      },
      {
        label: "Building custom furniture or cabinetry",
        scores: { carpentry: 3 },
      },
    ],
  },
  {
    id: 8,
    text: "How much time can you commit to training?",
    options: [
      {
        label: "8 weeks or less — I want something focused",
        scores: { "ai-trades": 3 },
      },
      {
        label: "10-12 weeks is perfect",
        scores: { carpentry: 2, construction: 2 },
      },
      {
        label: "14-16 weeks — I want comprehensive training",
        scores: { electrical: 2, plumbing: 2, hvac: 2 },
      },
      {
        label: "However long it takes to be job-ready",
        scores: { electrical: 1, plumbing: 1, hvac: 1, construction: 1 },
      },
    ],
  },
  {
    id: 9,
    text: "Which DC opportunity interests you most?",
    options: [
      {
        label: "Major commercial construction projects like Commander Stadium",
        scores: { construction: 3, hvac: 1 },
      },
      {
        label: "Residential renovation and remodeling work",
        scores: { carpentry: 2, plumbing: 1, electrical: 1 },
      },
      {
        label: "Government and infrastructure contracts",
        scores: { electrical: 2, plumbing: 2 },
      },
      {
        label: "Starting a tech-forward contracting company",
        scores: { "ai-trades": 3, construction: 1 },
      },
    ],
  },
  {
    id: 10,
    text: "What kind of problem-solving do you enjoy?",
    options: [
      {
        label: "Physical puzzles — fitting pieces together",
        scores: { carpentry: 2, construction: 2, plumbing: 1 },
      },
      {
        label: "Logical, systematic troubleshooting",
        scores: { electrical: 3, hvac: 1 },
      },
      {
        label: "Optimizing flow and efficiency in systems",
        scores: { plumbing: 2, hvac: 2 },
      },
      {
        label: "Using data and analytics to find solutions",
        scores: { "ai-trades": 3 },
      },
    ],
  },
];

function calculateResults(answers: Record<number, number>): ProgramKey[] {
  const scores: Record<ProgramKey, number> = {
    construction: 0,
    electrical: 0,
    plumbing: 0,
    carpentry: 0,
    hvac: 0,
    "ai-trades": 0,
  };

  Object.entries(answers).forEach(([questionId, optionIndex]) => {
    const question = questions.find((q) => q.id === Number(questionId));
    if (question) {
      const option = question.options[optionIndex];
      Object.entries(option.scores).forEach(([program, score]) => {
        scores[program as ProgramKey] += score;
      });
    }
  });

  return (Object.entries(scores) as [ProgramKey, number][])
    .sort(([, a], [, b]) => b - a)
    .map(([key]) => key);
}

export default function Assessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [started, setStarted] = useState(false);

  const progress = (Object.keys(answers).length / questions.length) * 100;

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = { ...answers, [questions[currentQuestion].id]: optionIndex };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => setCurrentQuestion(currentQuestion + 1), 300);
    } else {
      setTimeout(() => setShowResults(true), 400);
    }
  };

  const goBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const restart = () => {
    setAnswers({});
    setCurrentQuestion(0);
    setShowResults(false);
    setStarted(false);
  };

  const rankedPrograms = showResults ? calculateResults(answers) : [];

  if (!started) {
    return (
      <div className="pt-32 pb-20 min-h-screen page-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 py-2 px-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-foreground font-bold uppercase tracking-widest text-xs mb-8">
              <ClipboardCheck size={14} />
              Skills Assessment
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-black text-foreground mb-8 uppercase tracking-tight leading-none">
              Find Your <span className="text-primary">Perfect Trade</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 font-medium leading-relaxed max-w-3xl mx-auto mb-12">
              Not sure which program is right for you? Take our quick 10-question
              assessment and get a personalized recommendation based on your interests,
              goals, and aptitude.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-panel p-6 sm:p-10 md:p-16 relative overflow-hidden"
            style={{ borderRadius: "16px 40px 16px 40px" }}
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
            <div className="relative z-10 text-center">
              <Target className="w-20 h-20 text-primary mx-auto mb-8" />
              <h2 className="text-3xl md:text-4xl font-display font-black uppercase tracking-tight mb-6">
                How It Works
              </h2>
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {[
                  {
                    step: "01",
                    title: "Answer Questions",
                    desc: "10 quick questions about your interests, goals, and preferences.",
                  },
                  {
                    step: "02",
                    title: "Get Matched",
                    desc: "Our algorithm matches your profile to the best trade programs.",
                  },
                  {
                    step: "03",
                    title: "Take Action",
                    desc: "Get personalized next steps and enroll in your recommended program.",
                  },
                ].map((item) => (
                  <div key={item.step} className="text-center">
                    <div className="text-5xl font-display font-black text-primary/30 mb-3">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-black uppercase tracking-tight mb-2">
                      {item.title}
                    </h3>
                    <p className="text-foreground/70 font-medium">{item.desc}</p>
                  </div>
                ))}
              </div>
              <button
                onClick={() => setStarted(true)}
                className="inline-flex items-center justify-center px-12 py-6 bg-primary text-white font-black uppercase tracking-widest text-lg hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-[0_0_40px_-10px_rgba(220,20,60,0.5)] gap-3"
                style={{ borderRadius: "12px 32px 12px 32px" }}
              >
                Start Assessment <ArrowRight size={20} />
              </button>
              <p className="text-foreground/50 text-sm font-medium mt-4">
                Takes about 2-3 minutes • No sign-up required
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  if (showResults) {
    const topProgram = programInfo[rankedPrograms[0]];
    const TopIcon = topProgram.icon;
    const runnerUp1 = programInfo[rankedPrograms[1]];
    const RunnerUp1Icon = runnerUp1.icon;
    const runnerUp2 = programInfo[rankedPrograms[2]];
    const RunnerUp2Icon = runnerUp2.icon;

    return (
      <div className="pt-32 pb-20 min-h-screen page-gradient">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 py-2 px-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-foreground font-bold uppercase tracking-widest text-xs mb-8">
                <CheckCircle2 size={14} className="text-green-500" />
                Assessment Complete
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-black text-foreground mb-6 uppercase tracking-tight leading-none">
                Your <span className="text-primary">Results</span>
              </h1>
              <p className="text-xl text-foreground/80 font-medium">
                Based on your answers, here's what we recommend for you.
              </p>
            </div>

            <div
              className="glass-panel p-6 sm:p-10 md:p-16 mb-12 relative overflow-hidden border-2 border-primary/30"
              style={{ borderRadius: "24px 80px 24px 80px" }}
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-6">
                  <span className="px-4 py-1 bg-primary text-white font-black uppercase tracking-widest text-xs rounded-full">
                    #1 Match
                  </span>
                </div>
                <div className="flex flex-col md:flex-row items-start gap-8">
                  <div
                    className="w-24 h-24 bg-white shadow-xl flex items-center justify-center text-primary flex-shrink-0"
                    style={{ borderRadius: "8px 24px 8px 24px" }}
                  >
                    <TopIcon size={48} />
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-4xl md:text-5xl font-display font-black text-foreground mb-2 uppercase tracking-tight">
                      {topProgram.title}
                    </h2>
                    <p className="text-foreground/60 font-bold uppercase tracking-wider text-sm mb-6">
                      {topProgram.duration} program
                    </p>
                    <p className="text-xl text-foreground/80 font-medium leading-relaxed mb-8">
                      {topProgram.description}
                    </p>
                    <div className="mb-8">
                      <h4 className="font-black uppercase tracking-widest text-sm text-foreground mb-4">
                        Recommended Next Steps:
                      </h4>
                      <ul className="space-y-3">
                        {topProgram.nextSteps.map((step, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-lg font-medium text-foreground/80"
                          >
                            <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                            <span>{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link
                      href="/contact?program=1"
                      className="inline-flex items-center justify-center px-10 py-5 bg-primary text-white font-black uppercase tracking-widest text-sm hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-[0_0_40px_-10px_rgba(220,20,60,0.5)] gap-3"
                      style={{ borderRadius: "8px 24px 8px 24px" }}
                    >
                      Enroll Now <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-display font-black uppercase tracking-tight mb-6">
              Also Great Fits
            </h3>
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {[
                { info: runnerUp1, Icon: RunnerUp1Icon, rank: 2 },
                { info: runnerUp2, Icon: RunnerUp2Icon, rank: 3 },
              ].map(({ info, Icon, rank }) => (
                <div
                  key={rank}
                  className="glass-panel p-8 border border-white/20 transition-all duration-300 hover:border-primary/30 hover:shadow-xl"
                  style={{
                    borderRadius:
                      rank % 2 === 0
                        ? "16px 48px 16px 48px"
                        : "48px 16px 48px 16px",
                  }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className="w-14 h-14 bg-white shadow-lg flex items-center justify-center text-primary"
                      style={{ borderRadius: "4px 16px 4px 16px" }}
                    >
                      <Icon size={28} />
                    </div>
                    <div>
                      <span className="text-xs font-black uppercase tracking-widest text-foreground/50">
                        #{rank} Match
                      </span>
                      <h4 className="text-xl font-display font-black uppercase tracking-tight">
                        {info.title}
                      </h4>
                    </div>
                  </div>
                  <p className="text-foreground/70 font-medium mb-4">
                    {info.description}
                  </p>
                  <p className="text-sm font-bold text-foreground/50 uppercase tracking-wider">
                    {info.duration} program
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button
                onClick={restart}
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-md text-foreground font-black uppercase tracking-widest text-sm border border-white/20 hover:bg-white/20 transition-all duration-300 gap-2"
                style={{ borderRadius: "24px 8px 24px 8px" }}
              >
                <RotateCcw size={16} /> Retake Assessment
              </button>
              <Link
                href="/programs"
                className="inline-flex items-center justify-center px-8 py-4 bg-foreground text-background font-black uppercase tracking-widest text-sm hover:bg-primary hover:text-white transition-all duration-300 gap-2"
                style={{ borderRadius: "8px 24px 8px 24px" }}
              >
                View All Programs <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const selectedOption = answers[question.id];

  return (
    <div className="pt-32 pb-20 min-h-screen page-gradient">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-black uppercase tracking-widest text-foreground/60">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="text-sm font-black uppercase tracking-widest text-primary">
              {Math.round(progress)}% Complete
            </span>
          </div>
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-primary rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={question.id}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-black text-foreground mb-10 uppercase tracking-tight leading-tight">
              {question.text}
            </h2>

            <div className="space-y-4">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  className={`w-full text-left p-6 md:p-8 glass-panel border transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:scale-[1.02] group ${
                    selectedOption === index
                      ? "border-primary bg-primary/10"
                      : "border-white/20"
                  }`}
                  style={{ borderRadius: "12px 32px 12px 32px" }}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                        selectedOption === index
                          ? "border-primary bg-primary text-white"
                          : "border-foreground/30 group-hover:border-primary"
                      }`}
                    >
                      {selectedOption === index && <CheckCircle2 size={20} />}
                    </div>
                    <span className="text-lg md:text-xl font-bold text-foreground">
                      {option.label}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-12 flex items-center justify-between">
          <button
            onClick={goBack}
            disabled={currentQuestion === 0}
            className={`inline-flex items-center gap-2 font-black uppercase tracking-wider text-sm transition-colors ${
              currentQuestion === 0
                ? "text-foreground/30 cursor-not-allowed"
                : "text-foreground hover:text-primary"
            }`}
          >
            <ArrowLeft size={16} /> Previous
          </button>
          <button
            onClick={restart}
            className="inline-flex items-center gap-2 text-foreground/50 hover:text-foreground font-bold uppercase tracking-wider text-xs transition-colors"
          >
            <RotateCcw size={14} /> Start Over
          </button>
        </div>
      </div>
    </div>
  );
}
