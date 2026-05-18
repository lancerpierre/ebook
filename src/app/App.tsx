import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, BookOpen, Brain, Zap, Sparkles, Bird, Mountain, Heart, Star, Quote } from "lucide-react";
import bookCover from "../imports/Generative_Fill.png";
import claraLogo from "../imports/CLARA_logo_-_white.png";

const backgroundImages = [
  "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920", // Galaxy stars
  "https://images.unsplash.com/photo-1534447677768-be436bb09401?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920", // Ethereal night sky with boat
  "https://images.unsplash.com/photo-1677926405168-fa86268b7295?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920", // Star cluster nebula
  "https://images.unsplash.com/photo-1641944975298-9c1595b8da9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920", // Magical forest light
  "https://images.unsplash.com/photo-1711560026656-814d5a9e980f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920", // Colorful cosmic nebula
  "https://images.unsplash.com/photo-1679850988136-5c5d78237d03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920", // Green and blue nebula
  "https://images.unsplash.com/photo-1476156863127-a8f1e9dba2b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920", // Milky way
  "https://images.unsplash.com/photo-1592093474530-86874167e896?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920", // Blue red yellow galaxy
];

export default function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 relative">
      {/* Animated Background Images */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <AnimatePresence mode="sync">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.4, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
              filter: "blur(3px)",
            }}
          />
        </AnimatePresence>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50/60 via-white/50 to-orange-50/60"></div>
      </div>

      {/* Navigation */}
      <nav className="w-full z-50 bg-white/80 backdrop-blur-xl border-b border-amber-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <motion.a
            href="https://www.lancerpierre.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-amber-100 to-orange-100 hover:from-amber-200 hover:to-orange-200 border-2 border-amber-300 hover:border-amber-400 text-amber-900 px-6 py-2.5 rounded-full font-bold transition-all shadow-md"
          >
            Home
          </motion.a>
          <motion.a
            href="https://lancerpierre.gumroad.com/l/thefreedommindset"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-amber-500/30 transition-all"
          >
            Get Your Copy
          </motion.a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-16 pb-24 px-6 overflow-hidden z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-100 to-orange-100 px-5 py-2 rounded-full mb-6 border border-amber-300/50"
              >
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span className="text-sm font-semibold text-amber-900">Transform Your Reality</span>
              </motion.div>

              <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] mb-8 bg-gradient-to-br from-neutral-900 via-neutral-800 to-amber-900 bg-clip-text text-transparent">
                Break Free.<br />
                Think Sovereign.<br />
                Live <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text">Unbound</span>.
              </h1>

              <p className="text-xl lg:text-2xl text-neutral-700 mb-6 leading-relaxed">
                The ultimate blueprint for mental mastery and a life designed entirely on <span className="font-semibold text-amber-700">your terms</span>.
              </p>

              <p className="text-lg text-neutral-600 mb-10 leading-relaxed">
                Join thousands reclaiming their power, shattering limiting beliefs, and building unstoppable momentum toward a life they actually own.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="https://lancerpierre.gumroad.com/l/thefreedommindset"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-10 py-5 rounded-full font-bold text-lg flex items-center justify-center gap-3 shadow-2xl shadow-amber-500/40 transition-all"
                >
                  Get The Book Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </div>
              <p className="text-sm text-neutral-600 mt-4">
                Investment: <span className="font-semibold text-amber-700">$11</span> <span className="text-neutral-500">· Pay what feels right to support the mission</span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="relative"
            >
              <div className="absolute -inset-8 bg-gradient-to-br from-amber-400/30 via-orange-400/30 to-yellow-400/30 rounded-[3rem] blur-3xl"></div>
              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10"
              >
                <img
                  src={bookCover}
                  alt="The Freedom Mindset Book Cover"
                  className="w-full max-w-lg mx-auto drop-shadow-2xl rounded-xl"
                />
              </motion.div>

              {/* Floating elements */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-amber-200"
              >
                <Bird className="w-8 h-8 text-amber-600" />
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-4 -left-4 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl p-4 shadow-xl"
              >
                <Sparkles className="w-8 h-8 text-white" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16 px-6 bg-gradient-to-r from-amber-600 to-orange-600 overflow-hidden z-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 relative z-10">
          {[
            { number: "10,000+", label: "Lives Transformed" },
            { number: "4.9★", label: "Average Rating" },
            { number: "95%", label: "Would Recommend" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center text-white"
            >
              <div className="text-5xl lg:text-6xl font-bold mb-2">{stat.number}</div>
              <div className="text-lg text-amber-100">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* What You'll Discover */}
      <section className="relative py-24 px-6 bg-white z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-br from-neutral-900 to-amber-900 bg-clip-text text-transparent">
              What You'll Discover Inside
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              A complete framework for taking total ownership of your life, your choices, and your destiny
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                gradient: "from-purple-500 to-pink-500",
                title: "Master Your Mental Game",
                description:
                  "Eliminate the invisible scripts running your life. Identify and destroy limiting beliefs that keep you stuck, small, and second-guessing yourself.",
              },
              {
                icon: Mountain,
                gradient: "from-blue-500 to-cyan-500",
                title: "Align Actions with Vision",
                description:
                  "Get crystal-clear on what you actually want, then build a bulletproof system to make it inevitable—not someday, but now.",
              },
              {
                icon: Heart,
                gradient: "from-amber-500 to-orange-500",
                title: "Think Like a Sovereign",
                description:
                  "Reclaim your authority. Make decisions from a place of total ownership, not fear, obligation, or what others expect.",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group bg-gradient-to-br from-white to-amber-50/50 border-2 border-amber-200 rounded-3xl p-8 hover:border-amber-400 hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-300"
              >
                <div className={`bg-gradient-to-br ${benefit.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-neutral-900">{benefit.title}</h3>
                <p className="text-neutral-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Framework Section */}
      <section className="relative py-24 px-6 bg-gradient-to-br from-amber-100 via-orange-50 to-yellow-100 z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-br from-neutral-900 to-amber-900 bg-clip-text text-transparent">
              Your Roadmap to Freedom
            </h2>
            <p className="text-xl text-neutral-700 max-w-3xl mx-auto leading-relaxed">
              A step-by-step framework to transform your mindset and produce real, lasting results
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                number: "01",
                icon: Zap,
                title: "Break Free from Limiting Beliefs",
                description:
                  "Identify the hidden programs keeping you trapped. Learn the exact process to dismantle self-sabotage and rewrite your mental operating system for success.",
              },
              {
                number: "02",
                icon: Sparkles,
                title: "Master Deliberate Action",
                description:
                  "Stop wasting energy on distractions. Channel your focus into high-impact moves that compound into unstoppable momentum and real progress.",
              },
              {
                number: "03",
                icon: BookOpen,
                title: "Design Your Sovereign Life",
                description:
                  "Build a life that reflects your highest values—not society's defaults. Make choices that honor who you truly are, not who you think you should be.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border-2 border-amber-200 rounded-3xl p-8 lg:p-10 flex flex-col lg:flex-row gap-8 items-start hover:border-amber-400 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300"
              >
                <div className="flex items-center gap-6">
                  <div className="text-6xl font-bold text-amber-200">{item.number}</div>
                  <div className="bg-gradient-to-br from-amber-500 to-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-4 text-neutral-900">{item.title}</h3>
                  <p className="text-lg text-neutral-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="relative py-24 px-6 bg-gradient-to-br from-white via-amber-50/30 to-white overflow-hidden z-10">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-br from-neutral-900 to-amber-900 bg-clip-text text-transparent">
              What Readers Are Saying
            </h2>
            <p className="text-xl text-neutral-600">
              Join thousands who have transformed their lives
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Mariah Casimier",
                title: "Oracle & Entreprenuer",
                review: "This book was truly great from start to finish. I have to use some of the quotes for future empowerment events. What an inspiration this book is to the mind who needs encouragement and a grounded point of view. I love the quote at the very end of the book…'Freedom is not given. It is produced'.",
                rating: 5,
              },
              {
                name: "Michael Chen",
                title: "Executive Coach",
                review: "The Freedom Mindset is the real deal. No fluff, just actionable wisdom that works. I've recommended it to every single one of my clients. Lancer breaks down mental mastery in a way that's both profound and immediately applicable.",
                rating: 5,
              },
              {
                name: "Jessica Thompson",
                title: "Creative Director",
                review: "I've read countless self-help books, but this one actually delivered. The step-by-step process for breaking limiting beliefs is incredible. I finally feel like I'm living authentically instead of following someone else's script. This book is a game-changer.",
                rating: 5,
              },
            ].map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border-2 border-amber-200 rounded-3xl p-8 hover:border-amber-400 hover:shadow-xl transition-all"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <Quote className="w-10 h-10 text-amber-300 mb-4" />
                <p className="text-neutral-700 leading-relaxed mb-6">
                  "{review.review}"
                </p>
                <div className="border-t border-amber-200 pt-4">
                  <p className="font-bold text-neutral-900">{review.name}</p>
                  <p className="text-sm text-neutral-600">{review.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* This Book Is For You */}
      <section className="py-24 px-6 bg-white relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-br from-neutral-900 to-amber-900 bg-clip-text text-transparent">
              This Book Is For You If...
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "You're tired of living on autopilot and ready to take full ownership",
              "You want clarity on what you actually want—not what you've been told to want",
              "You're ready to eliminate the mental blocks holding you back",
              "You crave a life built on your terms, not someone else's blueprint",
              "You're done settling and ready to produce results that reflect your potential",
              "You want to master your mind and make sovereign decisions with confidence",
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-6 hover:border-amber-400 hover:shadow-lg transition-all"
              >
                <div className="bg-gradient-to-br from-amber-500 to-orange-500 w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-lg text-neutral-800 leading-relaxed font-medium">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-32 px-6 bg-gradient-to-br from-amber-600 via-orange-600 to-amber-700 overflow-hidden z-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Bird className="w-20 h-20 text-white mx-auto mb-8" />
            </motion.div>

            <h2 className="text-5xl lg:text-7xl font-bold mb-8 text-white leading-tight">
              Your Freedom Starts Here
            </h2>
            <p className="text-2xl lg:text-3xl text-amber-100 mb-12 leading-relaxed max-w-3xl mx-auto">
              Get instant access to The Freedom Mindset and start rewriting your rules today
            </p>
            <motion.a
              href="https://lancerpierre.gumroad.com/l/thefreedommindset"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-white hover:bg-amber-50 text-amber-700 px-14 py-6 rounded-full font-bold text-2xl inline-flex items-center gap-4 transition-all shadow-2xl shadow-black/30"
            >
              Get The Book Now
              <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
            </motion.a>
            <p className="text-amber-100 mt-6 text-lg font-semibold">
              $11 · Pay more to support the work
            </p>
            <p className="text-amber-100/80 mt-2 text-base">
              Join thousands producing a life they actually own
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 py-16 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center gap-8 mb-12">
            <div className="flex flex-wrap justify-center gap-8 text-neutral-400">
              <a href="https://www.lancerpierre.com" className="hover:text-amber-400 transition-colors font-medium">
                Lancer Pierre
              </a>
              <span className="text-neutral-600">•</span>
              <a href="#" className="hover:text-amber-400 transition-colors">
                Privacy Policy
              </a>
              <span className="text-neutral-600">•</span>
              <a href="#" className="hover:text-amber-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>

          <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-neutral-500 text-center md:text-left">
              © 2026 The Freedom Mindset by Lancer Pierre. All rights reserved.
            </p>
            <a
              href="https://onlyclara.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group"
            >
              <span className="text-neutral-500 text-sm">Powered by</span>
              <img
                src={claraLogo}
                alt="CLARA"
                className="h-6 opacity-60 group-hover:opacity-100 transition-opacity"
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}