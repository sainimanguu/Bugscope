import { useState } from 'react';
import { motion } from 'framer-motion';
import { Settings as SettingsIcon, Save, Database, Bell } from 'lucide-react';
import { GlassPanel } from '../components/GlassPanel';
import { Button } from '../components/ui/Button';

export const Settings = () => {
  const [retention, setRetention] = useState('30');
  
  return (
    <div className="p-10 max-w-4xl mx-auto">
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-10">
        <h1 className="text-display text-3xl font-bold mb-2 uppercase">SYSTEM CONFIGURATION</h1>
        <p className="text-on-surface-variant">Core Node Control & Security Protocols</p>
      </motion.div>

      <div className="space-y-6">
        
        <GlassPanel>
          <div className="flex items-center gap-3 border-b border-outline-variant/20 pb-4 mb-6">
            <SettingsIcon className="text-primary" size={20} />
            <h2 className="text-display text-lg font-bold">API Architecture</h2>
          </div>
          
          <div className="font-mono text-sm text-yellow-400 bg-yellow-400/10 p-4 rounded-sm border border-yellow-400/20 mb-4 inline-block">
            Warning: Key rotation will disconnect all active diagnostic agent instances.
          </div>
          
          <div className="mt-6">
            <h3 className="text-md font-bold mb-2">Forensic Access</h3>
            <div className="text-sm font-mono text-on-surface-variant mb-2">root_guardian_01 <br/><span className="text-white">IP: 192.168.1.44</span></div>
            <div className="text-sm font-mono text-on-surface-variant mb-2">analyst_ext_alpha <br/><span className="text-white">IP: 10.0.8.21</span></div>
          </div>
        </GlassPanel>

        <GlassPanel>
          <div className="flex items-center gap-3 border-b border-outline-variant/20 pb-4 mb-6">
            <Database className="text-primary" size={20} />
            <h2 className="text-display text-lg font-bold">Terminal Commands</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 border border-outline-variant/20 rounded-sm bg-surface-container-lowest hover:bg-surface-container transition-colors cursor-pointer group">
               <h3 className="text-md font-bold text-white mb-2 group-hover:text-primary transition-colors">Flush System Cache</h3>
               <p className="text-sm text-on-surface-variant leading-relaxed">Purges all temporary diagnostic buffers and resets node counters.</p>
            </div>
            
            <div className="p-4 border border-outline-variant/20 rounded-sm bg-surface-container-lowest hover:bg-surface-container transition-colors cursor-pointer group">
               <h3 className="text-md font-bold text-white mb-2 group-hover:text-primary transition-colors">Archive Forensic Logs</h3>
               <p className="text-sm text-on-surface-variant leading-relaxed">Compresses and moves logs older than 7 cycles to long-term storage.</p>
            </div>
          </div>

          <div className="mt-8">
            <code className="block w-full bg-surface-container-lowest p-4 font-mono text-xs text-primary border-l-4 border-primary">
              &gt; session_init: 0x88921 <br/>
              &gt; checking_integrity... [OK] <br/>
              &gt; waiting_for_input_
            </code>
          </div>
        </GlassPanel>

        <div className="flex justify-end mt-8">
          <Button onClick={() => alert('Configurations saved successfully!')} className="gap-2">
            <Save size={16} />
            Commit Configuration
          </Button>
        </div>

      </div>
    </div>
  );
};
