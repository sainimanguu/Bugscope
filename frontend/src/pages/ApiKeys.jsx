import { motion } from 'framer-motion';
import { ShieldCheck, CheckCircle, Radio, Activity, Network } from 'lucide-react';
import { GlassPanel } from '../components/GlassPanel';

export const ApiKeys = () => {
  return (
    <div className="p-10 max-w-6xl mx-auto flex flex-col h-full">
      <div className="flex justify-between items-end mb-10">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <h1 className="text-display text-3xl font-bold mb-2">Initialize Forensic Probe</h1>
          <p className="text-on-surface-variant">Deploy the SDK to your environment to begin high-precision forensic monitoring.</p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <GlassPanel className="p-8 border border-primary/20 bg-surface-container-low shadow-[0_0_30px_rgba(168,85,247,0.05)]">
          <h2 className="text-display font-bold text-xl mb-6">Initialization Protocol</h2>
          
          <div className="flex justify-between items-center bg-surface-container-lowest p-4 border border-outline-variant/30 mb-8 rounded-sm">
             <div>
               <div className="text-xs font-display tracking-widest text-on-surface-variant uppercase mb-1">Diagnostic ID</div>
               <div className="font-mono text-primary font-bold">FD-PRB-9921-X-04</div>
             </div>
             <ShieldCheck className="text-primary opacity-50" size={24} />
          </div>

          <div className="space-y-6">
            <div className="flex gap-4">
              <CheckCircle className="text-tertiary mt-1" size={20} />
              <div>
                <h3 className="text-white font-bold mb-1">Secure Handshake</h3>
                <p className="text-sm text-on-surface-variant">Auth node synchronized with region: US-EAST-1</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <CheckCircle className="text-tertiary mt-1" size={20} />
              <div>
                <h3 className="text-white font-bold mb-1">Identity Verified</h3>
                <p className="text-sm text-on-surface-variant">User Forensic Avatar linked</p>
              </div>
            </div>
            
            <div className="flex gap-4 relative">
              <div className="absolute left-2 top-8 bottom-0 w-[1px] bg-primary/20"></div>
              <Radio className="text-primary mt-1 animate-pulse" size={20} />
              <div>
                <h3 className="text-white font-bold mb-1">Pending Connection</h3>
                <p className="text-sm text-primary/80">Listening for SDK handshake on port 443</p>
              </div>
            </div>
          </div>
        </GlassPanel>

        <div className="flex flex-col gap-6">
           <GlassPanel className="p-6 border-outline-variant/20">
             <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Activity className="text-primary" />
                  <h3 className="text-on-surface-variant uppercase tracking-widest text-sm font-display">Latency</h3>
                </div>
                <div className="font-mono text-2xl text-white">12<span className="text-sm text-on-surface-variant">ms</span></div>
             </div>
           </GlassPanel>
           
           <GlassPanel className="p-6 border-outline-variant/20">
             <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Network className="text-tertiary" />
                  <h3 className="text-on-surface-variant uppercase tracking-widest text-sm font-display">Throughput</h3>
                </div>
                <div className="font-mono text-2xl text-white">1.2<span className="text-sm text-on-surface-variant">GB/s</span></div>
             </div>
           </GlassPanel>
        </div>
      </div>
    </div>
  );
};
