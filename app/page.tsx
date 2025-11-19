'use client'

import { Download, Apple, Smartphone, Leaf, TrendingUp, Lock, Clock, Zap, ArrowRight, Star } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg">
              <Leaf className="w-6 h-6 text-primary-foreground" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Nutri</h1>
          </div>
          <a
            href="#download"
            className="px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/30"
          >
            Download
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        {/* Background Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 w-fit">
                <Leaf className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">AI-Powered Nutrition</span>
              </div>

              {/* Headline */}
              <div className="space-y-4">
                <h2 className="text-5xl sm:text-6xl font-bold leading-tight text-foreground">
                  Snap. Analyze.
                  <span className="block text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text"> Eat Better</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                  Your personal nutrition assistant powered by AI. Photograph any food and get instant insights about calories, nutrients, and health scores.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="#download"
                  className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all transform hover:scale-105"
                >
                  <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                  Download App
                </a>
                <button className="px-8 py-4 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary/5 transition-all">
                  Learn More
                </button>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/40">
                <div>
                  <p className="text-3xl font-bold text-primary">100%</p>
                  <p className="text-sm text-muted-foreground mt-1">AI Accuracy</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">0ms</p>
                  <p className="text-sm text-muted-foreground mt-1">Detection Time</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">∞</p>
                  <p className="text-sm text-muted-foreground mt-1">Analyzable Foods</p>
                </div>
              </div>
            </div>

            {/* Right Visual - Enhanced Phone Mockup */}
            <div className="relative hidden lg:flex items-center justify-center">
              <div className="relative w-72 h-full">
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 to-accent/20 rounded-3xl blur-2xl opacity-80" />
                
                {/* Phone frame */}
                <div className="relative bg-foreground rounded-3xl p-3 shadow-2xl">
                  <div className="bg-background rounded-2xl overflow-hidden h-96 flex flex-col">
                    {/* Phone Status Bar */}
                    <div className="bg-primary/5 px-6 py-3 flex items-center justify-between text-xs">
                      <span className="font-semibold text-foreground">9:41</span>
                      <span className="text-muted-foreground">●●●●●</span>
                    </div>
                    
                    {/* Phone Content */}
                    <div className="flex-1 flex flex-col items-center justify-center gap-6 px-6">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                        <Smartphone className="w-10 h-10 text-primary" />
                      </div>
                      
                      <div className="text-center space-y-2">
                        <h3 className="font-bold text-foreground text-lg">Analyze Any Food</h3>
                        <p className="text-xs text-muted-foreground">Tap to take a photo</p>
                      </div>
                      
                      <div className="space-y-3 w-full">
                        <div className="flex items-center gap-3 p-3 rounded-xl bg-primary/5 border border-primary/20">
                          <Zap className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-xs text-foreground font-medium">Instant Results</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 rounded-xl bg-primary/5 border border-primary/20">
                          <Lock className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-xs text-foreground font-medium">100% Private</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 rounded-xl bg-primary/5 border border-primary/20">
                          <TrendingUp className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-xs text-foreground font-medium">Health Scores</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 sm:py-32 bg-gradient-to-b from-secondary/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <h3 className="text-4xl sm:text-5xl font-bold text-foreground">
              Everything You Need
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Powerful features designed to help you make smarter food choices every day
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature Card 1 */}
            <div className="group relative rounded-2xl border border-border/40 bg-background/60 backdrop-blur-sm p-8 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10 space-y-4">
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Smartphone className="w-7 h-7 text-primary" />
                </div>
                <h4 className="text-xl font-bold text-foreground">Multiple Inputs</h4>
                <p className="text-muted-foreground">Capture with camera, upload images, or type food names for analysis.</p>
              </div>
            </div>

            {/* Feature Card 2 */}
            <div className="group relative rounded-2xl border border-border/40 bg-background/60 backdrop-blur-sm p-8 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10 space-y-4">
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Zap className="w-7 h-7 text-primary" />
                </div>
                <h4 className="text-xl font-bold text-foreground">AI-Powered</h4>
                <p className="text-muted-foreground">Google Gemini AI identifies foods and provides detailed nutritional breakdowns instantly.</p>
              </div>
            </div>

            {/* Feature Card 3 */}
            <div className="group relative rounded-2xl border border-border/40 bg-background/60 backdrop-blur-sm p-8 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10 space-y-4">
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Clock className="w-7 h-7 text-primary" />
                </div>
                <h4 className="text-xl font-bold text-foreground">Track History</h4>
                <p className="text-muted-foreground">Keep a local history of all analyses to monitor your nutrition over time.</p>
              </div>
            </div>

            {/* Feature Card 4 */}
            <div className="group relative rounded-2xl border border-border/40 bg-background/60 backdrop-blur-sm p-8 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10 space-y-4">
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Lock className="w-7 h-7 text-primary" />
                </div>
                <h4 className="text-xl font-bold text-foreground">Privacy First</h4>
                <p className="text-muted-foreground">Your API keys and data stay on your device. No external servers tracking you.</p>
              </div>
            </div>

            {/* Feature Card 5 */}
            <div className="group relative rounded-2xl border border-border/40 bg-background/60 backdrop-blur-sm p-8 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10 space-y-4">
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-7 h-7 text-primary" />
                </div>
                <h4 className="text-xl font-bold text-foreground">Health Scores</h4>
                <p className="text-muted-foreground">Get 0-100 health ratings with AI-powered recommendations for better choices.</p>
              </div>
            </div>

            {/* Feature Card 6 */}
            <div className="group relative rounded-2xl border border-border/40 bg-background/60 backdrop-blur-sm p-8 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10 space-y-4">
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Leaf className="w-7 h-7 text-primary" />
                </div>
                <h4 className="text-xl font-bold text-foreground">Cross-Platform</h4>
                <p className="text-muted-foreground">Works seamlessly on iOS, Android, and web from one unified app.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial/Social Proof Section */}
      <section className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 p-12 sm:p-16 text-center space-y-8">
            <div className="flex items-center justify-center gap-2">
              <Star className="w-5 h-5 text-primary fill-primary" />
              <Star className="w-5 h-5 text-primary fill-primary" />
              <Star className="w-5 h-5 text-primary fill-primary" />
              <Star className="w-5 h-5 text-primary fill-primary" />
              <Star className="w-5 h-5 text-primary fill-primary" />
            </div>
            <p className="text-2xl font-semibold text-foreground max-w-2xl mx-auto">
              {"Join thousands of health-conscious users making smarter food choices every day with Nutri."}
            </p>
            <p className="text-muted-foreground">Trusted by fitness enthusiasts and nutrition-focused professionals worldwide</p>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-12">
            {/* Header */}
            <div className="space-y-4">
              <h3 className="text-4xl sm:text-5xl font-bold text-foreground">
                Get Started in Seconds
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Download Nutri now and start analyzing your food. Get 2 free scans to experience the power of AI nutrition analysis.
              </p>
            </div>

            {/* Download Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {/* iOS Card */}
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-2xl border border-border/40 bg-background/80 backdrop-blur-sm p-8 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Apple className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-2">iOS App</h4>
                    <p className="text-muted-foreground text-sm mb-6">Download from App Store</p>
                  </div>
                  <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                    Download <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </a>

              {/* Android Card */}
              <a
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-2xl border border-border/40 bg-background/80 backdrop-blur-sm p-8 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Smartphone className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-2">Android App</h4>
                    <p className="text-muted-foreground text-sm mb-6">Download from Play Store</p>
                  </div>
                  <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                    Download <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </a>
            </div>

            {/* Free Trial Info */}
            <div className="inline-flex items-center gap-4 px-6 py-4 rounded-full bg-primary/10 border border-primary/30">
              <div>
                <p className="font-semibold text-foreground">2 Free Scans</p>
                <p className="text-sm text-muted-foreground">Add your Gemini API key for unlimited</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-secondary/30 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-primary-foreground" />
                </div>
                <h4 className="text-lg font-bold text-foreground">Nutri</h4>
              </div>
              <p className="text-sm text-muted-foreground">AI-powered nutrition analysis at your fingertips</p>
            </div>

            {/* Product */}
            <div className="space-y-3">
              <h5 className="font-semibold text-foreground">Product</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Features</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Download</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Pricing</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Updates</a></li>
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-3">
              <h5 className="font-semibold text-foreground">Company</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">About</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
                <li><a href="https://github.com/inevitable-ank/Nutri" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">GitHub</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div className="space-y-3">
              <h5 className="font-semibold text-foreground">Legal</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">License</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-border/40 pt-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground">
                © 2025 Nutri. All rights reserved. Powered by Google Gemini AI.
              </p>
              <div className="flex items-center gap-4">
                <a href="https://github.com/inevitable-ank" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
