import { motion } from "framer-motion";
import { ShieldCheck, TrendingUp, ScanFace, Clock, BarChart3, Layers } from "lucide-react";

// ─── Variance Model Data ───────────────────────────────────────────────────
const creators = [
  {
    name: "Creator A",
    label: "Consistent",
    tag: "LOW VARIANCE",
    tagColor: "text-creo-teal",
    tagBg: "bg-creo-teal/10 border-creo-teal/20",
    barColor: "bg-creo-teal",
    avg: "$6,000",
    cv: "4.7%",
    tier: "Low  (CV < 15%)",
    discount: "85% of average",
    floor: "$5,100 / mo",
    maxRaise: "$13,795",
    worstYield: "+29.6%",
    ringData: [5900, 6100, 6400, 5800, 6200, 5600],
    ringMax: 8500,
    description: "Rock-steady income. Rewarded with the largest raise ceiling.",
  },
  {
    name: "Creator B",
    label: "Volatile",
    tag: "HIGH VARIANCE",
    tagColor: "text-creo-yellow",
    tagBg: "bg-creo-yellow/10 border-creo-yellow/20",
    barColor: "bg-creo-yellow",
    avg: "$6,000",
    cv: "36%",
    tier: "High  (CV > 30%)",
    discount: "60% of average",
    floor: "$3,600 / mo",
    maxRaise: "$7,049",
    worstYield: "+22.4%",
    ringData: [8500, 3200, 7800, 4100, 9000, 5400],
    ringMax: 8500,
    description: "Spiky income — correctly priced, never rejected.",
  },
];

// ─── Fraud Prevention Layers ──────────────────────────────────────────────
const layers = [
  {
    icon: BarChart3,
    color: "text-creo-pink",
    bg: "bg-creo-pink/10",
    border: "border-creo-pink/20",
    title: "Graduated Trust Caps",
    sub: "Offering #1: 50%  ·  #2: 80%  ·  #3+: 100% of model max",
    detail:
      "First-time raise is capped at 50% of their variance model maximum. The fraud prize is limited before a single check runs.",
  },
  {
    icon: TrendingUp,
    color: "text-creo-teal",
    bg: "bg-creo-teal/10",
    border: "border-creo-teal/20",
    title: "Payout Verification",
    sub: "Bank payouts verified — not just gross earnings",
    detail:
      "We verify actual Stripe bank transfers, not just revenue records. Circular fake invoices generate earnings on paper but cannot move real money to a verified bank account.",
  },
  {
    icon: Layers,
    color: "text-creo-yellow",
    bg: "bg-creo-yellow/10",
    border: "border-creo-yellow/20",
    title: "Social Proof Score ≥ 40",
    sub: "YouTube · Twitter · GitHub · Stripe consistency",
    detail:
      "Source-flexible: any combination of channels reaching 40/100. A fraudster must fabricate two strong identity signals simultaneously — costly, time-consuming, and not worth the capped prize.",
  },
  {
    icon: ScanFace,
    color: "text-creo-pink",
    bg: "bg-creo-pink/10",
    border: "border-creo-pink/20",
    title: "KYC + Video Verification",
    sub: "Sumsub — live video for raises above $5,000",
    detail:
      "Document check for all raises. Live video verification for raises above $5k. Leaves a complete identity trail — making fraud legally consequential, not just technically difficult.",
  },
  {
    icon: Clock,
    color: "text-creo-teal",
    bg: "bg-creo-teal/10",
    border: "border-creo-teal/20",
    title: "3-Day Capital Release Window",
    sub: "Automated re-checks · Admin freeze gate",
    detail:
      "After every fundraise close, automated checks re-verify all identity signals for 72 hours. Fraudster behavior changes immediately after a raise closes — this window is precisely when that signal is most visible.",
  },
  {
    icon: ShieldCheck,
    color: "text-creo-yellow",
    bg: "bg-creo-yellow/10",
    border: "border-creo-yellow/20",
    title: "Bond + Protocol Default Lock",
    sub: "Abandonment = permanent block until investors recovered",
    detail:
      "A creator who abandons loses their bond AND loses all future protocol access until investor shortfall is fully recovered. The cost of abandonment is not just the bond — it is every future raise they will ever want to do.",
  },
];

// ─── Mini bar chart ────────────────────────────────────────────────────────
const MiniChart = ({
  data,
  max,
  color,
}: {
  data: number[];
  max: number;
  color: string;
}) => (
  <div className="flex items-end gap-1 h-10">
    {data.map((v, i) => (
      <div
        key={i}
        className={`flex-1 rounded-sm ${color} opacity-80`}
        style={{ height: `${(v / max) * 100}%` }}
      />
    ))}
  </div>
);

// ─── Main Section ──────────────────────────────────────────────────────────
const ComparisonSection = () => {
  return (
    <section id="moat" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 flex items-center justify-center gap-2"
        >
          <div className="h-px w-8 bg-creo-pink/40" />
          <span className="font-body text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Built different
          </span>
          <div className="h-px w-8 bg-creo-pink/40" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="font-display text-4xl font-bold md:text-5xl">
            The intelligence layer{" "}
            <span className="text-gradient-hero">baked in natively</span>
          </h2>
          <p className="mt-4 font-body text-muted-foreground max-w-xl mx-auto md:text-lg">
            Every platform uses raw averages. Creo uses a variance-discounted model
            that rewards consistency and correctly prices volatility — automatically, on-chain.
          </p>
        </motion.div>

        {/* ══════════════════════════════════════════
            PART 1 — VARIANCE MODEL
        ══════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          {/* Same average. Different risk. headline */}
          <div className="rounded-2xl border border-border bg-background p-6 md:p-8 mb-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
              <div>
                <h3 className="font-display text-xl font-bold text-foreground">
                  Same average. Different risk. Different raise.
                </h3>
                <p className="font-body text-sm text-muted-foreground mt-1">
                  Two creators. Both averaging{" "}
                  <span className="text-foreground font-medium">$6,000/month</span>.
                  Every other platform treats them identically. Creo doesn't.
                </p>
              </div>
              <div className="flex-shrink-0 inline-flex items-center gap-2 rounded-full border border-creo-pink/20 bg-creo-pink/5 px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-creo-pink animate-pulse" />
                <span className="font-body text-xs font-medium text-creo-pink">
                  Variance Model Active
                </span>
              </div>
            </div>

            {/* Two creator cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {creators.map((c, i) => (
                <motion.div
                  key={c.name}
                  initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-xl border border-border bg-muted/40 p-5 flex flex-col gap-4"
                >
                  {/* Creator header */}
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="font-display text-base font-bold text-foreground">
                        {c.name}
                      </p>
                      <p className="font-body text-xs text-muted-foreground mt-0.5">
                        {c.description}
                      </p>
                    </div>
                    <span
                      className={`flex-shrink-0 rounded-full border px-2.5 py-1 font-body text-xs font-semibold ${c.tagColor} ${c.tagBg}`}
                    >
                      {c.tag}
                    </span>
                  </div>

                  {/* Mini earnings chart */}
                  <div>
                    <p className="font-body text-xs text-muted-foreground mb-1.5">
                      6-month earnings
                    </p>
                    <MiniChart data={c.ringData} max={c.ringMax} color={c.barColor} />
                  </div>

                  {/* Stats grid */}
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    {[
                      { label: "Monthly Avg", value: c.avg },
                      { label: "CV (volatility)", value: c.cv },
                      { label: "Variance Tier", value: c.tier },
                      { label: "Floor Discount", value: c.discount },
                    ].map((s) => (
                      <div key={s.label} className="rounded-lg bg-background/60 border border-border px-3 py-2">
                        <p className="font-body text-xs text-muted-foreground">{s.label}</p>
                        <p className="font-display text-xs font-bold text-foreground mt-0.5">
                          {s.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-border" />

                  {/* Outcomes */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-center">
                      <p className="font-body text-xs text-muted-foreground">Floor</p>
                      <p className={`font-display text-lg font-bold ${c.tagColor}`}>
                        {c.floor}
                      </p>
                    </div>
                    <div className="h-8 w-px bg-border" />
                    <div className="text-center">
                      <p className="font-body text-xs text-muted-foreground">Max Raise</p>
                      <p className="font-display text-lg font-bold text-foreground">
                        {c.maxRaise}
                      </p>
                    </div>
                    <div className="h-8 w-px bg-border" />
                    <div className="text-center">
                      <p className="font-body text-xs text-muted-foreground">Floor Yield</p>
                      <p className="font-display text-lg font-bold text-creo-teal">
                        {c.worstYield}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </motion.div>

        {/* ══════════════════════════════════════════
            PART 2 — FRAUD PREVENTION
        ══════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-border bg-background p-6 md:p-8"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-8">
            <div>
              <h3 className="font-display text-xl font-bold text-foreground">
                Six layers between your capital and a bad actor
              </h3>
              <p className="font-body text-sm text-muted-foreground mt-1">
                Each layer raises the cost and lowers the expected payoff of fraud — until
                attempting it is no longer rationally attractive.
              </p>
            </div>
            <div className="flex-shrink-0 inline-flex items-center gap-2 rounded-full border border-creo-teal/20 bg-creo-teal/5 px-4 py-2">
              <ShieldCheck className="h-3.5 w-3.5 text-creo-teal" />
              <span className="font-body text-xs font-medium text-creo-teal">
                Fraud Stack Active
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {layers.map((layer, i) => {
              const Icon = layer.icon;
              return (
                <motion.div
                  key={layer.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="group rounded-xl border border-border bg-muted/40 p-4 hover:bg-muted/70 transition-colors duration-200"
                >
                  {/* Layer number + icon */}
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-lg border ${layer.bg} ${layer.border}`}
                    >
                      <Icon className={`h-4 w-4 ${layer.color}`} />
                    </div>
                    <span className="font-body text-xs text-muted-foreground/50 font-medium">
                      L{i + 1}
                    </span>
                  </div>

                  {/* Title + sub */}
                  <p className="font-display text-sm font-bold text-foreground">
                    {layer.title}
                  </p>
                  <p className={`font-body text-xs font-medium mt-0.5 ${layer.color}`}>
                    {layer.sub}
                  </p>

                  {/* Detail — visible on hover */}
                  <p className="font-body text-xs text-muted-foreground mt-2 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-200 max-h-0 group-hover:max-h-24 overflow-hidden transition-all">
                    {layer.detail}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default ComparisonSection;