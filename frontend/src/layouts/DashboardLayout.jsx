import { Outlet, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Terminal, Settings, Users, LineChart, History, HelpCircle, FileText } from 'lucide-react';

const NavItem = ({ to, icon: Icon, label }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-3 cursor-pointer transition-colors duration-200 relative ${
          isActive ? 'text-primary' : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
        }`
      }
    >
      {({ isActive }) => (
        <>
          <Icon size={20} strokeWidth={isActive ? 2.5 : 1.5} />
          <span className="font-display font-medium text-sm tracking-wide">{label}</span>
          
          {/* Animated active indicator as per design "2px vertical accent bar" */}
          <AnimatePresence>
            {isActive && (
              <motion.div
                layoutId="activeNavIndicator"
                className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            )}
          </AnimatePresence>
          
          {/* Selection shift to surface_container_high */}
          <AnimatePresence>
            {isActive && (
              <motion.div
                layoutId="activeNavBg"
                className="absolute inset-0 bg-surface-container-high/50 -z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            )}
          </AnimatePresence>
        </>
      )}
    </NavLink>
  );
};

export const DashboardLayout = () => {
  return (
    <div className="flex h-screen w-full bg-surface text-on-surface overflow-hidden">
      
      {/* Navigation Rail - surface-container-low */}
      <motion.aside 
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-64 flex-shrink-0 bg-surface-container-low flex flex-col pt-8"
      >
        <div className="px-6 mb-12 flex items-center gap-3">
          <div className="w-8 h-8 rounded-sm bg-primary/20 border-l-2 border-primary flex items-center justify-center">
            <Activity className="text-primary" size={18} />
          </div>
          <h1 className="text-display text-xl font-bold tracking-tight">BugScope</h1>
        </div>

        <nav className="flex-1 flex flex-col gap-1 px-2">
          <NavItem to="/app/dashboard" icon={LineChart} label="Diagnostics" />
          <NavItem to="/app/settings/team" icon={Users} label="Team Hub" />
          <NavItem to="/app/errors" icon={Terminal} label="Error Logs" />
          
          <div className="mt-8 mb-2 px-4 uppercase text-[10px] tracking-wider text-primary font-display font-semibold opacity-70">
            System
          </div>
          <NavItem to="/app/settings" icon={Settings} label="System Health" />
          <NavItem to="#" icon={History} label="Audit Trail" />
          <NavItem to="#" icon={HelpCircle} label="Support" />
          <NavItem to="/docs" icon={FileText} label="Documentation" />
        </nav>
      </motion.aside>

      {/* Main Content Area - no border line, just color difference */}
      <main className="flex-1 relative overflow-auto">
        <motion.div
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.4, delay: 0.1 }}
           className="min-h-full"
        >
          <Outlet />
        </motion.div>
      </main>

    </div>
  );
};
