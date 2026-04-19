import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Server, Code2, AlertOctagon } from 'lucide-react';
import { GlassPanel } from '../components/GlassPanel';
import { Button } from '../components/ui/Button';

const mockErrorDetail = {
  id: 'ERR-9402',
  service: 'AuthService.java',
  type: 'java.lang.NullPointerException',
  time: '2026-04-11T12:04:33.001Z',
  status: 'critical',
  message: "Attempt to invoke virtual method 'String.toLowerCase()' on a null object reference",
  stackTrace: `POST /api/v1/auth/validate - Client-ID: 0x8892
Session object retrieved from Redis cluster [Shard-04]
NullPointerException triggered in thread-pool-executor-42

at com.neon.auth.AuthService.authenticateUser(AuthService.java:144)
at com.neon.api.AuthController.validate(AuthController.java:52)
at java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
at java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)
at java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
at java.base/java.lang.reflect.Method.invoke(Method.java:568)
at org.springframework.web.method.support.InvocableHandlerMethod.doInvoke(InvocableHandlerMethod.java:205)
at org.springframework.web.method.support.InvocableHandlerMethod.invokeForRequest(InvocableHandlerMethod.java:150)`,
  metadata: {
    Environment: 'macOS Sonoma 14.5, Chrome 125.0.6422.142',
    Network_Origin: '192.168.42.108',
    Release_Channel: 'Stable_Canary',
    Build: 'a7f8-9921-2cde'
  }
};

export const ErrorDetail = () => {
  const { id } = useParams();
  const error = mockErrorDetail; // Normally we'd fetch this using `id`

  return (
    <div className="p-10 max-w-7xl mx-auto flex flex-col h-full">
      
      {/* Header Bar */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between border-b border-outline-variant/30 pb-6 mb-8"
      >
        <div className="flex items-center gap-4">
          <Link to="/app/errors">
            <Button variant="secondary" className="px-3">
              <ArrowLeft size={18} />
            </Button>
          </Link>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h1 className="text-display text-2xl font-bold">{error.type}</h1>
              <span className="px-2 py-0.5 rounded-sm text-[10px] uppercase font-bold tracking-wider bg-error/10 text-error border border-error/20 inline-flex items-center gap-1">
                <AlertOctagon size={10} />
                {error.status}
              </span>
            </div>
            <div className="text-xs font-mono text-on-surface-variant flex gap-4">
              <span className="flex items-center gap-1"><Server size={12} /> {error.service}</span>
              <span className="flex items-center gap-1 text-primary"><Clock size={12} /> {error.time}</span>
            </div>
          </div>
        </div>
        
        <div className="flex gap-3">
          <Button onClick={() => alert('Error ' + error.id + ' has been ignored and removed from active queue.')} variant="secondary">Ignore</Button>
          <Button onClick={() => alert('Opening Jira / Linear integration modal...')}>Assign Ticket</Button>
        </div>
      </motion.div>

      {/* Grid Layout (The Light-table) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1 overflow-hidden">
        
        {/* Left Column: Stack Trace */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}
          className="lg:col-span-2 flex flex-col gap-6"
        >
          <GlassPanel className="p-0 border-outline-variant/30 flex flex-col flex-1 bg-surface-container-lowest">
            <div className="bg-surface-container-low px-4 py-3 border-b border-outline-variant/20 flex items-center justify-between">
              <h3 className="text-display text-sm font-semibold flex items-center gap-2">
                <Code2 size={16} className="text-primary" /> Stack Trace
              </h3>
              <span className="text-xs font-mono text-on-surface-variant bg-surface px-2 py-1 rounded-sm border border-outline-variant/20">Node.js Error</span>
            </div>
            
            <div className="p-6 overflow-auto font-mono text-sm leading-relaxed text-on-surface-variant/90">
              <div className="text-error mb-4 font-bold bg-error/5 p-3 rounded-sm border border-error/10">
                {error.message}
              </div>
              <pre className="whitespace-pre-wrap font-mono">
                {error.stackTrace.split('\\n').map((line, i) => {
                  const isCallSite = line.trim().startsWith('at ');
                  return (
                    <div key={i} className={`py-0.5 ${isCallSite ? 'text-on-surface-variant' : 'text-white'}`}>
                      {line}
                    </div>
                  );
                })}
              </pre>
            </div>
          </GlassPanel>
        </motion.div>

        {/* Right Column: Metadata */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
          className="flex flex-col gap-6"
        >
          <GlassPanel className="p-0 border-outline-variant/30">
            <div className="bg-surface-container-low px-4 py-3 border-b border-outline-variant/20">
              <h3 className="text-display text-sm font-semibold">Subject_Intelligence</h3>
            </div>
            <div className="p-4 flex flex-col gap-3">
              {Object.entries(error.metadata).map(([key, value]) => (
                <div key={key} className="flex flex-col border-b border-outline-variant/10 pb-2 last:border-0 last:pb-0">
                  <span className="text-[10px] uppercase font-display tracking-widest text-on-surface-variant mb-1">{key}</span>
                  <span className="font-mono text-sm text-white break-all">{value}</span>
                </div>
              ))}
            </div>
          </GlassPanel>

          <GlassPanel className="p-6 flex flex-col items-center justify-center text-center bg-[image:linear-gradient(180deg,var(--color-surface-container),var(--color-surface-container-lowest))]">
            <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(30,149,242,0.2)]">
              <Activity className="text-primary" size={28} />
            </div>
            <h4 className="text-display font-medium text-lg mb-2">Automated RCA Analysis</h4>
            <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">
              BugScope AI is currently analyzing this pattern across the architecture.
            </p>
            <Button onClick={() => alert('Initiating BugScope AI Deep Trace Analysis...')} fullWidth variant="secondary" className="border-primary/20 text-primary hover:bg-primary/10">
              Trigger Deep Analysis
            </Button>
          </GlassPanel>
        </motion.div>

      </div>
    </div>
  );
};
