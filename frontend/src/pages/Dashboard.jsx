import { motion } from 'framer-motion';
import { GlassPanel } from '../components/GlassPanel';
import { ShieldAlert, Zap, ServerCrash } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const mockChartData = [
  { time: '00:00', errors: 12 },
  { time: '04:00', errors: 5 },
  { time: '08:00', errors: 28 },
  { time: '12:00', errors: 140 },
  { time: '16:00', errors: 45 },
  { time: '20:00', errors: 18 },
  { time: '24:00', errors: 22 },
];

const MetricCard = ({ title, value, label, icon: Icon, color }) => (
  <GlassPanel className="p-6 relative">
    <div className={`absolute top-0 left-0 w-1 h-full ${color}`} />
    <div className="flex justify-between items-start mb-2">
      <span className="text-on-surface-variant font-display uppercase tracking-widest text-xs">{title}</span>
      <Icon size={18} className="opacity-50" />
    </div>
    <div className="text-4xl font-display font-medium text-white mb-1">{value}</div>
    <div className="text-sm text-on-surface-variant/70">{label}</div>
  </GlassPanel>
);

export const Dashboard = () => {
  return (
    <div className="p-10 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10"
      >
        <h1 className="text-display text-3xl font-bold mb-2">Diagnostic Overview</h1>
        <p className="text-on-surface-variant">System diagnostic metrics for the last 24 hours.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <MetricCard title="Total Anomalies" value="842" label="Across 12 services" icon={ShieldAlert} color="bg-primary" />
        <MetricCard title="Critical Failures" value="14" label="Requiring immediate action" icon={ServerCrash} color="bg-error" />
        <MetricCard title="Response Degradation" value="1.2s" label="P99 Latency Spike" icon={Zap} color="bg-tertiary" />
      </div>

      <GlassPanel className="p-6 h-[400px]">
        <div className="mb-6 flex justify-between items-end">
          <div>
            <h2 className="text-display text-lg mb-1">Error Trajectory</h2>
            <p className="text-xs text-on-surface-variant uppercase tracking-wider">Real-time vector analysis across all clusters</p>
          </div>
        </div>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={mockChartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(65, 71, 84, 0.3)" vertical={false} />
              <XAxis dataKey="time" stroke="#c1c6d7" tick={{ fill: '#c1c6d7', fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis stroke="#c1c6d7" tick={{ fill: '#c1c6d7', fontSize: 12 }} axisLine={false} tickLine={false} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#2a2a2a', border: '1px solid rgba(65, 71, 84, 0.5)', borderRadius: '4px' }}
                itemStyle={{ color: '#d8b4fe' }}
              />
              <Line 
                type="monotone" 
                dataKey="errors" 
                stroke="#9333ea" 
                strokeWidth={3}
                dot={{ r: 4, fill: '#131313', stroke: '#d8b4fe', strokeWidth: 2 }}
                activeDot={{ r: 6, fill: '#9333ea', stroke: '#fff' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </GlassPanel>

      <GlassPanel className="mt-8 p-6">
        <div className="mb-6 border-b border-outline-variant/20 pb-4">
          <h2 className="text-display text-lg mb-1 text-white">Critical Backlog</h2>
          <span className="text-xs text-on-surface-variant uppercase tracking-wider">High-priority remediation queue</span>
        </div>
        
        <div className="flex flex-col gap-3">
          {[
            { name: 'AUTH_SERVICE_GATEWAY failure', status: 'Unhandled exception in token validation sequence cluster-7a.', color: 'text-error' },
            { name: 'DATABASE_READ_LATENCY_SPIKE', status: 'Regional node 04 experiencing 400% increase in read cycles.', color: 'text-yellow-400' },
            { name: 'MALFORMED_PACKET_SEQUENCE', status: 'Repeated injection attempts detected at edge proxy 02.', color: 'text-primary' }
          ].map((node, i) => (
            <div key={i} className="flex items-center justify-between p-4 rounded-sm bg-surface-container hover:bg-surface-container-high transition-colors border border-outline-variant/10">
              <div className="flex items-start gap-4">
                <div className={`w-2 h-2 mt-1.5 rounded-full ${i===0 ? 'bg-error' : i===1 ? 'bg-yellow-400' : 'bg-primary'}`}></div>
                <div>
                  <div className={`font-mono text-sm font-bold mb-1 ${node.color}`}>{node.name}</div>
                  <div className="text-sm text-on-surface-variant">{node.status}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </GlassPanel>
    </div>
  );
};
