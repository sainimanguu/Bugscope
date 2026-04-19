import { useState } from 'react';
import { motion } from 'framer-motion';
import { GlassPanel } from '../components/GlassPanel';
import { Button } from '../components/ui/Button';
import { UserPlus, Shield, MoreVertical } from 'lucide-react';

const mockTeamMembers = [
  { id: 1, name: 'Alice Chen', email: 'alice@bugscope.io', role: 'Owner', status: 'Active' },
  { id: 2, name: 'Bob Smith', email: 'bob@bugscope.io', role: 'Admin', status: 'Active' },
  { id: 3, name: 'Charlie Davis', email: 'charlie@bugscope.io', role: 'Developer', status: 'Invited' },
];

export const Team = () => {
  const [members] = useState(mockTeamMembers);

  return (
    <div className="p-10 max-w-6xl mx-auto">
      <div className="flex justify-between items-end mb-10">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="max-w-xl">
          <h1 className="text-display text-3xl font-bold mb-2">Team Forensic Unit</h1>
          <p className="text-on-surface-variant">Authorize and manage personnel within the forensics environment. Control access levels, monitor operator status, and verify clearance protocols across the dashboard nodes.</p>
        </motion.div>
        
        <Button onClick={() => alert('Mock: Opening member invite modal...')} className="gap-2">
          <UserPlus size={16} />
          EXPAND UNIT ACCESS
        </Button>
      </div>

      <GlassPanel className="p-0 border-outline-variant/30 mb-8">
        <div className="p-6 border-b border-outline-variant/20">
          <h2 className="text-display text-xl font-bold text-white">Member Access Control</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-outline-variant/20 bg-surface-container-low/50">
                <th className="px-6 py-4 text-xs font-display tracking-widest uppercase text-on-surface-variant">User</th>
                <th className="px-6 py-4 text-xs font-display tracking-widest uppercase text-on-surface-variant">Role</th>
                <th className="px-6 py-4 text-xs font-display tracking-widest uppercase text-on-surface-variant">Status</th>
                <th className="px-6 py-4 text-xs font-display tracking-widest uppercase text-on-surface-variant text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {members.map((member, idx) => (
                <motion.tr 
                  key={member.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ backgroundColor: 'rgba(42, 42, 42, 0.4)' }}
                  className="border-b border-outline-variant/10 last:border-0 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="font-medium text-white">{member.name}</div>
                    <div className="text-sm font-mono text-on-surface-variant/70 mt-1">{member.email}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm bg-surface-container-highest border border-outline-variant/20 text-sm">
                      {member.role === 'Owner' && <Shield size={12} className="text-tertiary" />}
                      <span className={member.role === 'Owner' ? 'text-tertiary' : 'text-on-surface'}>{member.role}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-xs uppercase tracking-wider font-semibold ${member.status === 'Active' ? 'text-primary' : 'text-on-surface-variant'}`}>
                      {member.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button onClick={() => alert('Managing user: ' + member.name)} className="text-primary hover:text-primary-container transition-colors mr-4">Manage</button>
                    <button className="p-2 hover:bg-surface-container rounded-sm text-on-surface-variant hover:text-white transition-colors">
                      <MoreVertical size={16} />
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassPanel>

      <GlassPanel className="p-6">
        <h3 className="text-display text-xl font-bold text-white mb-4">Global Protocols</h3>
        <h4 className="text-md font-medium text-primary mb-2">Deployment Rights</h4>
        <p className="text-on-surface-variant text-sm max-w-3xl leading-relaxed">
          Only level-3 admins can initiate forensic quarantine protocols on active server nodes. 
          Emergency shutdown permissions are restricted to the primary owner of the BugScope instance.
        </p>
      </GlassPanel>
    </div>
  );
};
