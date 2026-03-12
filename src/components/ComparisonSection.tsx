import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const rows = [
  { platform: "Patreon", fees: "30%", capital: false, onChain: false, yield: false, bond: false },
  { platform: "Fundmates", fees: "~15%", capital: true, onChain: false, yield: false, bond: false },
  { platform: "Traditional Bank", fees: "12%+", capital: false, onChain: false, yield: false, bond: false },
  { platform: "Mirror.xyz", fees: "Variable", capital: false, onChain: true, yield: false, bond: false },
  { platform: "Aave / Compound", fees: "3-5%", capital: false, onChain: true, yield: false, bond: false },
  { platform: "Creo Protocol", fees: "3-5%", capital: true, onChain: true, yield: true, bond: true, highlight: true },
];

const Cell = ({ value }: { value: boolean }) =>
  value ? (
    <Check className="h-5 w-5 text-creo-teal mx-auto" />
  ) : (
    <X className="h-5 w-5 text-destructive/60 mx-auto" />
  );

const ComparisonSection = () => {
  return (
    <section id="comparison" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="font-display text-4xl font-bold md:text-5xl">
            Why <span className="text-gradient-accent">Creo</span> wins
          </h2>
          <p className="mt-4 font-body text-muted-foreground max-w-lg mx-auto">
            No competitor has all four: real yield, on-chain settlement, creator accountability, and affordable fees.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-x-auto rounded-xl border border-border"
        >
          <table className="w-full min-w-[640px] font-body text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="py-4 px-4 text-left text-muted-foreground font-medium">Platform</th>
                <th className="py-4 px-4 text-center text-muted-foreground font-medium">Fees</th>
                <th className="py-4 px-4 text-center text-muted-foreground font-medium">Capital</th>
                <th className="py-4 px-4 text-center text-muted-foreground font-medium">On-Chain</th>
                <th className="py-4 px-4 text-center text-muted-foreground font-medium">Real Yield</th>
                <th className="py-4 px-4 text-center text-muted-foreground font-medium">Bond</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr
                  key={row.platform}
                  className={`border-b border-border transition-colors ${
                    row.highlight
                      ? "bg-creo-pink/5 hover:bg-creo-pink/10"
                      : "hover:bg-muted/50"
                  }`}
                >
                  <td className={`py-4 px-4 font-display font-semibold ${row.highlight ? "text-creo-pink" : "text-foreground"}`}>
                    {row.platform}
                  </td>
                  <td className="py-4 px-4 text-center text-muted-foreground">{row.fees}</td>
                  <td className="py-4 px-4"><Cell value={row.capital} /></td>
                  <td className="py-4 px-4"><Cell value={row.onChain} /></td>
                  <td className="py-4 px-4"><Cell value={row.yield} /></td>
                  <td className="py-4 px-4"><Cell value={row.bond} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonSection;
