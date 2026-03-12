import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Discover", href: "/#features" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Marketplace", href: "/marketplace" },
  { label: "Creator Dashboard", href: "/creator/dashboard" },
  { label: "Portfolio", href: "/investor/portfolio" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isHashLink = (href: string) => href.startsWith("/#");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        <Link to="/" className="font-display text-2xl font-bold tracking-tight">
          <span className="text-gradient-hero">CREO</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) =>
            isHashLink(link.href) ? (
              <a
                key={link.label}
                href={link.href}
                className="font-body text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                className={`font-body text-sm font-medium transition-colors hover:text-foreground ${
                  location.pathname === link.href ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost" className="font-body text-sm text-muted-foreground hover:text-foreground">
            Join Waitlist
          </Button>
          <Link to="/creator/dashboard">
            <Button className="bg-gradient-hero font-body text-sm font-semibold text-primary-foreground hover:opacity-90">
              Start Creating
            </Button>
          </Link>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-b border-border bg-background md:hidden"
          >
            <div className="flex flex-col gap-4 px-4 py-6">
              {navLinks.map((link) =>
                isHashLink(link.href) ? (
                  <a
                    key={link.label}
                    href={link.href}
                    className="font-body text-sm text-muted-foreground hover:text-foreground"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="font-body text-sm text-muted-foreground hover:text-foreground"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <Button variant="ghost" className="justify-start font-body text-sm text-muted-foreground">
                  Log in
                </Button>
                <Link to="/creator/dashboard">
                  <Button className="w-full bg-gradient-hero font-body text-sm font-semibold text-primary-foreground">
                    Start Creating
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
