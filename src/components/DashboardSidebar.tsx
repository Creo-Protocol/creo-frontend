import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard, Coins, TrendingUp, ShieldCheck, BarChart3,
  Store, Wallet, Settings, LogOut, User
} from "lucide-react";

const creatorLinks = [
  { label: "Overview", href: "/creator/dashboard", icon: LayoutDashboard },
  { label: "My Offerings", href: "/creator/offerings", icon: Coins },
  { label: "Analytics", href: "/creator/analytics", icon: BarChart3 },
  { label: "Bond Status", href: "/creator/bond", icon: ShieldCheck },
];

const investorLinks = [
  { label: "Portfolio", href: "/investor/portfolio", icon: TrendingUp },
  { label: "Marketplace", href: "/marketplace", icon: Store },
  { label: "Earnings", href: "/investor/earnings", icon: Wallet },
];

const DashboardSidebar = ({ type }: { type: "creator" | "investor" }) => {
  const location = useLocation();
  const links = type === "creator" ? creatorLinks : investorLinks;

  return (
    <aside className="hidden lg:flex w-64 shrink-0 flex-col border-r border-border bg-card min-h-screen pt-16">
      <div className="p-6 border-b border-border">
        <Link to="/" className="font-display text-xl font-bold text-gradient-hero">CREO</Link>
        <p className="mt-1 font-body text-xs text-muted-foreground capitalize">{type} Dashboard</p>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {links.map((link) => {
          const active = location.pathname === link.href;
          return (
            <Link
              key={link.href}
              to={link.href}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 font-body text-sm transition-colors ${
                active
                  ? "bg-creo-pink/10 text-creo-pink font-medium"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              <link.icon className="h-4 w-4" />
              {link.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-border space-y-1">
        <Link
          to="/settings"
          className="flex items-center gap-3 rounded-lg px-3 py-2.5 font-body text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
        >
          <Settings className="h-4 w-4" />
          Settings
        </Link>
        <button className="flex items-center gap-3 rounded-lg px-3 py-2.5 font-body text-sm text-muted-foreground hover:bg-muted hover:text-foreground w-full">
          <LogOut className="h-4 w-4" />
          Disconnect
        </button>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
