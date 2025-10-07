import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export interface PricingFeature {
  text: string;
  icon?: React.ReactNode;
}

export interface PricingCardProps {
  planName: string;
  price: string;
  features: PricingFeature[];
  featured?: boolean;
  periodLabel?: string;
  onSelect?: () => void;
}

export default function PricingCard({
  planName,
  price,
  features,
  featured = false,
  periodLabel = "/mês",
  onSelect,
}: PricingCardProps) {
  return (
    <Card
      className={`relative p-8 transition-all duration-300 bg-white flex flex-col h-full ${
        featured
          ? "border-4 border-green-600 shadow-2xl shadow-green-500/50 hover:shadow-3xl hover:shadow-green-600/60 hover:-translate-y-2"
          : "border-2 border-gray-200 shadow-xl hover:shadow-2xl hover:-translate-y-1"
      }`}
      data-testid={`card-pricing-${planName.toLowerCase().replace(/\s+/g, "-")}`}
    >
      {featured && (
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-10 w-max">
          <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-slate-900 px-6 py-2 rounded-full text-sm font-black shadow-2xl border-2 border-yellow-600 whitespace-nowrap">
            ⭐ MAIS POPULAR ⭐
          </span>
        </div>
      )}

      <div className="text-center mb-6">
        <h3
          className="text-2xl font-display font-black text-black mb-3 uppercase min-h-[64px] flex items-center justify-center"
          data-testid={`text-plan-name-${planName.toLowerCase().replace(/\s+/g, "-")}`}
        >
          {planName}
        </h3>
        <div className="flex items-center justify-center gap-2">
          <span
            className="text-3xl font-black text-black whitespace-nowrap"
            data-testid={`text-price-${planName.toLowerCase().replace(/\s+/g, "-")}`}
          >
            {price}
          </span>
          <span className="text-gray-600 font-bold text-base whitespace-nowrap">{periodLabel}</span>
        </div>
      </div>

      <ul className="space-y-4 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3" data-testid={`feature-${index}`}>
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mt-0.5">
              {feature.icon || <Check className="w-4 h-4 text-white" />}
            </div>
            <span className="text-gray-800 font-medium">{feature.text}</span>
          </li>
        ))}
      </ul>

      <Button
        onClick={onSelect}
        className={`w-full font-black text-base mt-auto ${
          featured
            ? "bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            : "bg-slate-700 hover:bg-slate-800 text-white shadow-lg"
        }`}
        data-testid={`button-contratar-${planName.toLowerCase().replace(/\s+/g, "-")}`}
      >
        CONTRATAR AGORA
      </Button>
    </Card>
  );
}
