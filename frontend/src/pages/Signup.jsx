import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Activity, GitBranch, Mail, Loader } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSigningUp, setIsSigningUp] = useState(false);
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    setIsSigningUp(true);
    // Simulate backend connection/creation
    setTimeout(() => {
       navigate('/login');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-surface flex py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Neon Pulse Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 blur-[100px] rounded-[100%] translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-fuchsia-600/10 blur-[80px] rounded-[100%] -translate-x-1/3 translate-y-1/3" />
      </div>
      <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-16 z-10">
        
        {/* Right Side: Hero Text from Stitch */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex-1 space-y-6"
        >
          <div className="mb-4">
             <div className="inline-flex items-center justify-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary font-display text-sm tracking-wide">
               <Activity size={16} /> _ deployment_sequence: initiated
             </div>
             <h1 className="text-display text-5xl font-extrabold text-white leading-tight uppercase">
               DEPLOY FORENSIC INTELLIGENCE
             </h1>
          </div>
          <p className="text-xl text-on-surface-variant font-light max-w-xl leading-relaxed">
             Access the most granular diagnostic layer in the industry. Trace every pulse, log every anomaly, and secure your infrastructure with surgical precision.
          </p>
        </motion.div>

        {/* Left Side: Auth Form */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="max-w-md w-full space-y-8"
        >
          <div className="bg-surface-container-high/60 backdrop-blur-xl border border-purple-500/20 shadow-[0_8px_32px_rgba(168,85,247,0.1)] rounded-xl p-8">
          
            <div className="text-center mb-8">
              <h2 className="text-display text-2xl font-extrabold text-white">
                Initialize Account
              </h2>
              <p className="mt-2 text-center text-sm text-primary">
                Enter your deployment parameters to begin.
              </p>
            </div>

          <form className="mt-8 space-y-6" onSubmit={handleSignup}>
            <div className="space-y-4">
              <div>
                <label className="text-xs font-display tracking-widest text-purple-200/70 uppercase">Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 w-full bg-surface-container-lowest border-b-2 border-outline-variant/30 text-white p-3 focus:outline-none focus:border-purple-500 transition-colors placeholder-on-surface-variant/30"
                  placeholder="Jane Doe"
                  required
                />
              </div>
              <div>
                <label className="text-xs font-display tracking-widest text-purple-200/70 uppercase">Work Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 w-full bg-surface-container-lowest border-b-2 border-outline-variant/30 text-white p-3 focus:outline-none focus:border-purple-500 transition-colors placeholder-on-surface-variant/30"
                  placeholder="architect@company.com"
                  required
                />
              </div>
              <div>
                <label className="text-xs font-display tracking-widest text-purple-200/70 uppercase">Master Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 w-full bg-surface-container-lowest border-b-2 border-outline-variant/30 text-white p-3 focus:outline-none focus:border-purple-500 transition-colors placeholder-on-surface-variant/30"
                  placeholder="••••••••••••"
                  required
                />
              </div>
            </div>

            <div>
              <Button disabled={isSigningUp} type="submit" fullWidth className="bg-[image:linear-gradient(135deg,#9333ea,#d946ef)] shadow-[0_0_15px_rgba(168,85,247,0.3)] hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] border-0 h-12 text-base gap-2">
                {isSigningUp ? <Loader className="animate-spin" size={18} /> : 'Create Account'}
              </Button>
            </div>
            
            <div className="relative my-6 text-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-outline-variant/30"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-transparent text-on-surface-variant/50">Or authenticate with</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Button onClick={() => alert('Launching GitHub OAuth flow...')} variant="secondary" className="border-purple-500/20 hover:bg-purple-500/10 w-full gap-2 text-purple-200">
                <GitBranch size={18} />
                GitHub
              </Button>
              <Button onClick={() => alert('Launching Google OAuth flow...')} variant="secondary" className="border-purple-500/20 hover:bg-purple-500/10 w-full gap-2 text-purple-200">
                <Mail size={18} />
                Google
              </Button>
            </div>
          </form>
          
            <div className="mt-8 text-center text-sm">
              <span className="text-on-surface-variant">Already have access? </span>
              <Link to="/login" className="text-fuchsia-400 font-medium hover:text-fuchsia-300 hover:underline">
                Login
              </Link>
            </div>
          </div>
          <p className="text-center text-xs text-on-surface-variant/50 mt-4 px-4 leading-relaxed">
            By proceeding, you agree to the Terminal Protocols and Data Collection Policy.
          </p>
        </motion.div>
      </div>
    </div>
  );
};
