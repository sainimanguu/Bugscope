import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Terminal, ShieldAlert, Cpu, CheckCircle, Database, Lock, Zap, FileCode, GitBranch, Globe, Users } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const LandingPage = () => {
  return (
    <div className="relative min-h-screen bg-surface overflow-hidden flex flex-col items-center pt-8 pb-32 font-body">
      
      {/* Top Header Navigation Mock */}
      <div className="relative z-20 w-full max-w-6xl px-6 flex justify-between items-center mb-24">
         <div className="flex items-center gap-2 text-white font-display font-medium text-lg">
           <Activity className="text-primary" />
           BugScope
         </div>
         <nav className="hidden md:flex items-center gap-8 text-sm font-display tracking-wide uppercase text-on-surface-variant">
           <a href="#" className="hover:text-primary transition-colors">Overview</a>
           <a href="#" className="hover:text-primary transition-colors">Trends</a>
           <a href="#" className="hover:text-primary transition-colors">Logs</a>
         </nav>
      </div>

      {/* Background Neon Pulse Effects (Purple Theme) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[50%] -translate-x-[50%] w-[800px] h-[400px] bg-purple-600/20 blur-[120px] rounded-[100%]" />
        <div className="absolute top-[40%] left-[20%] w-[400px] h-[400px] bg-fuchsia-600/10 blur-[100px] rounded-[100%]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTAgMGg0MHYxSDB6bTAgMzloNDB2MUgwek0wIDB2NDBIMHptMzkgMHY0MGgxeiIgZmlsbD0icmdiYSgxMDAsIDEwMCwgMTAwLCAwLjAzKSIvPgo8L3N2Zz4=')] opacity-50" />
      </div>

      <div className="relative z-10 max-w-6xl px-6 w-full text-center">
        {/* Hero Section */}
        <div className="min-h-[80vh] flex flex-col justify-center items-center mb-32 relative">
          
          {/* Floating animated elements */}
          <motion.div 
            animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }} 
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-[10%] opacity-30 text-primary hidden md:block"
          >
            <ShieldAlert size={48} />
          </motion.div>
          
          <motion.div 
            animate={{ y: [15, -15, 15], rotate: [0, -10, 0] }} 
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-40 right-[15%] opacity-20 text-fuchsia-400 hidden md:block"
          >
            <Activity size={64} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center justify-center gap-2 mb-8 px-5 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 font-display text-sm tracking-wide shadow-[0_0_25px_rgba(168,85,247,0.3)] backdrop-blur-md">
              <motion.div
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Terminal size={16} />
              </motion.div>
              DIAGNOSTICS V2.0
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-display font-bold text-6xl md:text-8xl tracking-tighter text-white mb-8 leading-[1.1] max-w-5xl mx-auto"
          >
            Stop Guessing. <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-primary [text-shadow:_0_0_40px_rgba(192,132,252,0.4)]">Start Debugging.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-xl md:text-2xl text-on-surface-variant max-w-3xl mx-auto font-light leading-relaxed mb-14"
          >
            Engineered for forensic accuracy. Visualize your entire stack trace in high-fidelity neon. Detect anomalies before they cascade into outages.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex items-center justify-center gap-6 flex-col sm:flex-row"
          >
            <Link to="/login">
              <Button className="h-16 px-10 text-lg bg-[image:linear-gradient(135deg,var(--color-primary),var(--color-primary-container))] shadow-[0_0_30px_rgba(216,180,254,0.4)] hover:shadow-[0_0_40px_rgba(216,180,254,0.6)] border-0 transition-all hover:scale-105">
                Get Started
                <ArrowRight size={20} className="ml-3" />
              </Button>
            </Link>
            <a href="#core-modules" className="h-16 px-8 flex items-center justify-center text-lg text-white font-medium hover:text-primary transition-colors">
              Explore Modules
            </a>
          </motion.div>
        </div>

        {/* Core Modules Grid */}
        <motion.div 
          id="core-modules"
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 text-left scroll-mt-24 pt-12"
        >
          <div className="col-span-1 md:col-span-3 mb-4">
            <h2 className="text-display text-3xl font-bold text-white border-b border-outline-variant/30 pb-4">Core Modules</h2>
          </div>

          <div className="p-6 rounded-lg bg-surface-container-highest/40 border border-purple-500/10 backdrop-blur-sm group hover:border-purple-500/30 transition-colors">
            <ShieldAlert className="text-purple-400 mb-4" size={24} />
            <h3 className="text-display text-white text-lg font-bold mb-2">Real-time Alerting</h3>
            <p className="text-sm text-on-surface-variant">Our proprietary Pulse-Sync engine monitors every execution cycle. Receive forensic alerts on Discord, Slack, or PagerDuty with complete context snapshots attached.</p>
          </div>
          <div className="p-6 rounded-lg bg-surface-container-highest/40 border border-purple-500/10 backdrop-blur-sm group hover:border-purple-500/30 transition-colors">
            <Terminal className="text-fuchsia-400 mb-4" size={24} />
            <h3 className="text-display text-white text-lg font-bold mb-2">Deep Stack Traces</h3>
            <p className="text-sm text-on-surface-variant">Navigate the complexity of asynchronous calls. BugScope resolves nested traces into a readable timeline.</p>
          </div>
          <div className="p-6 rounded-lg bg-surface-container-highest/40 border border-purple-500/10 backdrop-blur-sm group hover:border-purple-500/30 transition-colors overflow-hidden">
            <Cpu className="text-purple-300 mb-4" size={24} />
            <h3 className="text-display text-white text-lg font-bold mb-2">Environment Isolation</h3>
            <p className="text-sm text-on-surface-variant">Reproduce bugs in sterile environments. Spin up instant sandboxes with the exact state found in your production logs.</p>
          </div>
        </motion.div>

        {/* The Forensic Dashboard Section */}
        <motion.div
           initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
           className="bg-surface-container-low/60 border border-outline-variant/20 rounded-xl p-10 mb-24 text-left flex flex-col md:flex-row gap-10 items-center"
        >
          <div className="flex-1">
             <h2 className="text-display text-3xl font-bold text-white mb-6">The Forensic Dashboard</h2>
             <ul className="space-y-4">
               <li className="flex items-center gap-3 text-on-surface-variant"><CheckCircle className="text-primary" size={20} /> Instant Memory Profiling</li>
               <li className="flex items-center gap-3 text-on-surface-variant"><CheckCircle className="text-primary" size={20} /> CPU Hotspot Identification</li>
               <li className="flex items-center gap-3 text-on-surface-variant"><CheckCircle className="text-primary" size={20} /> Distributed Request Linking</li>
             </ul>
          </div>
          <div className="flex-1 w-full bg-surface-container-highest/50 h-48 rounded-lg border border-outline-variant/20 shadow-inner flex items-center justify-center relative overflow-hidden">
             <div className="absolute w-full h-[1px] bg-primary/20 top-1/2"></div>
             <div className="absolute w-[1px] h-full bg-primary/20 left-1/3"></div>
             <div className="absolute w-[1px] h-full bg-primary/20 right-1/3"></div>
             <Activity className="text-primary opacity-50 z-10 w-24 h-24" />
          </div>
        </motion.div>

        {/* Feature Highlights / More Info Cards */}
        <motion.div
           initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
           className="mb-32 mt-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-display text-3xl md:text-4xl font-bold text-white mb-4">Enterprise-grade by default.</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto text-lg leading-relaxed">
              BugScope is engineered for high-concurrency environments that demand rigorous diagnostic telemetry.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            <div className="bg-surface-container-highest/30 border border-outline-variant/10 p-8 rounded-lg hover:border-primary/40 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Database className="text-primary" />
              </div>
              <h4 className="text-white font-bold mb-3 text-lg">Zero-Data Retention</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">Sensitive PII is redacted at the edge before traces ever reach our storage layer. Strict compliance enforced natively.</p>
            </div>
            <div className="bg-surface-container-highest/30 border border-outline-variant/10 p-8 rounded-lg hover:border-fuchsia-400/40 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-fuchsia-400/10 rounded-lg flex items-center justify-center mb-6">
                <Zap className="text-fuchsia-400" />
              </div>
              <h4 className="text-white font-bold mb-3 text-lg">Millisecond Injection</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">Our SDK is compiled down to sub-10ms overhead. Observe your monolithic architecture without sacrificing performance.</p>
            </div>
            <div className="bg-surface-container-highest/30 border border-outline-variant/10 p-8 rounded-lg hover:border-purple-300/40 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-purple-300/10 rounded-lg flex items-center justify-center mb-6">
                <Lock className="text-purple-300" />
              </div>
              <h4 className="text-white font-bold mb-3 text-lg">Secure Enclaves</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">Every account is provisioned within a dedicated cryptographic boundary to ensure trace cross-contamination is impossible.</p>
            </div>
            <div className="bg-surface-container-highest/30 border border-outline-variant/10 p-8 rounded-lg hover:border-primary/40 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <FileCode className="text-primary" />
              </div>
              <h4 className="text-white font-bold mb-3 text-lg">Source Mapping</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">Auto-sync your Git repositories to BugScope. We'll map compressed minified stack traces back to your exact org lines.</p>
            </div>
          </div>
        </motion.div>

        {/* CTA Output */}
        <motion.div
           initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.6 }}
           className="border-y border-outline-variant/20 py-20 mb-16 bg-[image:linear-gradient(180deg,rgba(0,0,0,0),var(--color-surface-container-lowest))]"
        >
          <h2 className="text-display text-4xl font-bold text-white mb-6">Ready to illuminate your dark data?</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto mb-10 text-lg">
            Deploy the BugScope agent in minutes. Zero-configuration required for modern cloud stacks. Start your forensic journey today.
          </p>
          <div className="flex justify-center">
            <Link to="/signup">
               <Button className="h-14 px-10 text-base bg-white text-surface hover:bg-gray-200 border-0 transition-colors">
                 Create Free Account
               </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Standard Footer */}
      <footer className="w-full max-w-6xl px-6 relative z-10 border-t border-outline-variant/20 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center gap-2 text-white font-display font-medium text-lg mb-6">
               <Activity className="text-primary" />
               BugScope
             </div>
             <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
               Forensic-grade error analysis layer engineered for modern, high-concurrency cloud architectures.
             </p>
             <div className="flex gap-4">
               <a href="#" className="text-on-surface-variant hover:text-white transition-colors"><GitBranch size={20} /></a>
               <a href="#" className="text-on-surface-variant hover:text-white transition-colors"><Globe size={20} /></a>
               <a href="#" className="text-on-surface-variant hover:text-white transition-colors"><Users size={20} /></a>
             </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 font-display tracking-widest text-xs uppercase">Platform</h4>
            <ul className="space-y-4 text-sm text-on-surface-variant">
              <li><a href="#" className="hover:text-primary transition-colors">Diagnostics V2</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Alert Engine</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Enterprise</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 font-display tracking-widest text-xs uppercase">Resources</h4>
            <ul className="space-y-4 text-sm text-on-surface-variant">
              <li><Link to="/docs" className="hover:text-primary transition-colors">Documentation</Link></li>
              <li><a href="#" className="hover:text-primary transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Community</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 font-display tracking-widest text-xs uppercase">Company</h4>
            <ul className="space-y-4 text-sm text-on-surface-variant">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-outline-variant/10 text-xs text-on-surface-variant">
          <p>&copy; {new Date().getFullYear()} BugScope Analytics Inc. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-500"></span> All systems operational</span>
          </div>
        </div>
      </footer>
    </div>
  );
};
