import { motion } from 'framer-motion';
import { Book, Terminal, Shield, ArrowRight } from 'lucide-react';
import { GlassPanel } from '../components/GlassPanel';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

export const Docs = () => {
  return (
    <div className="min-h-screen bg-surface font-body pt-20 pb-32">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16 border-b border-outline-variant/20 pb-10">
          <div className="inline-flex items-center justify-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary font-display text-sm tracking-wide">
            <Book size={16} />
            DOCUMENTATION
          </div>
          <h1 className="text-display text-5xl font-bold mb-6">Forensic Analysis Engine</h1>
          <p className="text-xl text-on-surface-variant font-light">
            Master the clinical precision of Bugscope's telemetry gathering. Deploy probes, intercept packets, and reconstruct execution flows with sub-millisecond accuracy.
          </p>
        </motion.div>

        <div className="space-y-12">
          <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
            <h2 className="text-display text-2xl font-bold mb-6 flex items-center gap-3 border-b border-outline-variant/20 pb-4">
              <Terminal className="text-primary" /> Technical Foundations
            </h2>
            
            <h3 className="text-xl text-white font-bold mb-4">Developer Guides</h3>
            
            <div className="mb-8">
              <h4 className="text-lg text-primary font-medium mb-2">Kernel-Level Tracing</h4>
              <p className="text-on-surface-variant leading-relaxed">
                Learn to hook into syscalls and monitor memory allocations without introducing latency to your production environment.
              </p>
            </div>
            
            <div className="mb-8">
              <h4 className="text-lg text-primary font-medium mb-2">Distributed Forensics</h4>
              <p className="text-on-surface-variant leading-relaxed">
                Reconstruct user requests across multiple microservices using automated trace-id propagation and context injection.
              </p>
            </div>
          </motion.section>

          <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            <h2 className="text-display text-2xl font-bold mb-4 flex items-center gap-3">
              <Shield className="text-primary" /> API Explorer
            </h2>
            <p className="text-on-surface-variant mb-4 leading-relaxed">
              Live payload testing for the /v1/incidents endpoint.
            </p>
            <GlassPanel className="p-4 mb-4 bg-surface-container-lowest border-outline-variant/30">
              <pre className="font-mono text-sm text-primary">/v1/incidents</pre>
            </GlassPanel>
            <GlassPanel className="p-4 bg-surface-container-lowest border-outline-variant/30">
              <pre className="font-mono text-sm text-primary">/v1/forensics/analyze</pre>
            </GlassPanel>
          </motion.section>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="pt-10 flex justify-between border-t border-outline-variant/20 mt-12">
             <Link to="#" className="text-on-surface-variant hover:text-white transition-colors">
               <span className="block text-xs uppercase tracking-widest mb-1 opacity-50">Previous</span>
               Installation Overview
             </Link>
             <Link to="#" className="text-right text-primary hover:text-primary-container transition-colors">
               <span className="block text-xs uppercase tracking-widest mb-1 opacity-50">Next</span>
               Telemetry Aggregation <ArrowRight size={14} className="inline ml-1" />
             </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
