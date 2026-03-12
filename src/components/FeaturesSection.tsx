import { motion } from "framer-motion";
import { Coins, Shield, Zap, BarChart3, Lock, Users } from "lucide-react";

const features = [
  {
    icon: Coins,
    title: "Revenue Tokenization",
    description: "Creators tokenize future earnings into ERC20 Revenue Share Tokens. Investors buy tokens and earn proportional monthly USDC distributions.",
    color: "text-creo-pink",
    bg: "bg-creo-pink/10",
  },
  {
    icon: Users,
    title: "Creator Tokens",
    description: "Auto-minted loyalty primitives. When you invest, Creator Tokens land in your wallet automatically — same transaction, zero extra cost.",
    color: "text-creo-teal",
    bg: "bg-creo-teal/10",
  },
  {
    icon: Shield,
    title: "Commitment Bond",
    description: "Creators deposit 5% as a commitment bond. Returned with bonus on success. Distributed to investors on default. Skin in the game.",
    color: "text-creo-yellow",
    bg: "bg-creo-yellow/10",
  },
  {
    icon: BarChart3,
    title: "CreoScore",
    description: "Soulbound on-chain reputation. Earned through successful completions. Visible to all investors. Better scores unlock better terms.",
    color: "text-creo-pink",
    bg: "bg-creo-pink/10",
  },
  {
    icon: Zap,
    title: "Instant Settlement",
    description: "One transaction per creator, regardless of investor count. Claimable balance pattern — gas efficient and secure.",
    color: "text-creo-teal",
    bg: "bg-creo-teal/10",
  },
  {
    icon: Lock,
    title: "Trustless & On-Chain",
    description: "Smart contracts execute all settlements. No intermediary. Every earning, every distribution verifiable on Polygon.",
    color: "text-creo-yellow",
    bg: "bg-creo-yellow/10",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="font-display text-4xl font-bold md:text-5xl">
            Sell <span className="text-gradient-hero">anything</span>
          </h2>
          <p className="mt-4 font-body text-lg text-muted-foreground max-w-xl mx-auto">
            Courses, sponsorships, newsletters — whatever you earn, Creo turns it into investable, on-chain revenue streams.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={item}
              className="group rounded-xl border border-border bg-card p-8 transition-all hover:border-creo-pink/30 hover:shadow-glow-pink"
            >
              <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg ${feature.bg}`}>
                <feature.icon className={`h-6 w-6 ${feature.color}`} />
              </div>
              <h3 className="mb-2 font-display text-xl font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="font-body text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
