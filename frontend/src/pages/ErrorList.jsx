import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldAlert, Terminal, AlertTriangle, CheckCircle, Search, Filter } from 'lucide-react';
import { GlassPanel } from '../components/GlassPanel';
import { Button } from '../components/ui/Button';

const mockErrors = [
  { id: 'ERR-9402', service: 'AuthenticationService', type: 'DatabaseTimeout', status: 'critical', time: '12 mins ago', count: 48 },
  { id: 'ERR-9401', service: 'PaymentGateway', type: 'InvalidTokenException', status: 'resolved', time: '1 hr ago', count: 1 },
  { id: 'ERR-9400', service: 'ImageProcessor', type: 'MemoryLeak', status: 'warning', time: '3 hrs ago', count: 12 },
  { id: 'ERR-9399', service: 'WebSocketManager', type: 'ConnectionDropped', status: 'warning', time: '4 hrs ago', count: 184 },
  { id: 'ERR-9398', service: 'UserAPI', type: 'RateLimitExceeded', status: 'resolved', time: '5 hrs ago', count: 1000 },
];

const StatusIcon = ({ status }) => {
  if (status === 'critical') return <ShieldAlert className="text-error" size={16} />;
  if (status === 'warning') return <AlertTriangle className="text-yellow-400" size={16} />;
  return <CheckCircle className="text-tertiary" size={16} />;
};

export const ErrorList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="p-10 max-w-6xl mx-auto h-full flex flex-col">
      <div className="flex flex-col md:flex-row justify-between md:items-end mb-8 gap-4">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-display text-3xl font-bold mb-2">NEON_PULSE_ISSUES</h1>
          <p className="text-on-surface-variant text-sm">Real-time captured error sequences for forensic analysis.</p>
        </motion.div>

        <div className="flex gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/50" size={16} />
            <input
              type="text"
              placeholder="Search traces..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 pr-4 py-2 bg-surface-container-lowest border-b-2 border-outline-variant/30 text-white focus:outline-none focus:border-primary transition-colors text-sm w-64"
            />
          </div>
          <Button onClick={() => alert('Filter options module opened.')} variant="secondary" className="gap-2 aspect-square p-0 w-10 flex items-center justify-center">
            <Filter size={16} />
          </Button>
        </div>
      </div>

      <div className="flex-1 overflow-auto pr-2">
        <div className="space-y-4">
          {mockErrors.map((error, idx) => (
            <motion.div
              key={error.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05 }}
            >
              <Link to={`/app/errors/${error.id}`} className="block">
                <GlassPanel hoverEffect className="p-4 flex items-center gap-6 border-l-2 !border-l-transparent hover:!border-l-primary transition-all">
                  <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-surface-container flex items-center justify-center border border-outline-variant/10">
                    <StatusIcon status={error.status} />
                  </div>

                  <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                    <div>
                      <div className="text-xs font-display tracking-widest text-primary mb-1 uppercase opacity-70">{error.id}</div>
                      <div className="font-medium text-white flex items-center gap-2">
                        <Terminal size={14} className="text-on-surface-variant" />
                        {error.type}
                      </div>
                    </div>

                    <div className="hidden md:block">
                      <div className="text-xs text-on-surface-variant uppercase tracking-wider mb-1">Service Node</div>
                      <div className="text-sm text-on-surface font-mono">{error.service}</div>
                    </div>

                    <div className="hidden md:block">
                      <div className="text-xs text-on-surface-variant uppercase tracking-wider mb-1">Occurrences</div>
                      <div className="text-sm text-white font-mono">{error.count}</div>
                    </div>

                    <div className="text-right">
                      <div className="text-xs text-on-surface-variant mb-1">{error.time}</div>
                      <div className={`inline-flex px-2 py-0.5 rounded-sm text-[10px] uppercase font-bold tracking-wider ${error.status === 'critical' ? 'bg-error/10 text-error border border-error/20' :
                          error.status === 'warning' ? 'bg-yellow-400/10 text-yellow-400 border border-yellow-400/20' :
                            'bg-tertiary/10 text-tertiary border border-tertiary/20'
                        }`}>
                        {error.status}
                      </div>
                    </div>
                  </div>
                </GlassPanel>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
