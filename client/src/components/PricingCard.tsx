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
  onSelect?: () => void;
}

export default function PricingCard({
  planName,
  price,
  features,
  featured = false,
  onSelect,
}: PricingCardProps) {
  return (
    <Card
      className={`relative p-8 transition-all duration-300 bg-white ${
        featured
          ? "border-4 border-red-500 shadow-2xl hover:shadow-3xl hover:-translate-y-2"
          : "border-2 border-gray-200 shadow-xl hover:shadow-2xl hover:-translate-y-1"
      }`}
      data-testid={`card-pricing-${planName.toLowerCase().replace(/\s+/g, "-")}`}
    >
      {featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-red-600 text-white px-5 py-1.5 rounded-full text-sm font-black shadow-lg">
            ⭐ MAIS POPULAR
          </span>
        </div>
      )}

      <div className="text-center mb-6">
        <h3
          className="text-2xl font-display font-black text-black mb-3 uppercase"
          data-testid={`text-plan-name-${planName.toLowerCase().replace(/\s+/g, "-")}`}
        >
          {planName}
        </h3>
        <div className="flex items-baseline justify-center gap-2">
          <span
            className="text-5xl font-black text-black"
            data-testid={`text-price-${planName.toLowerCase().replace(/\s+/g, "-")}`}
          >
            {price}
          </span>
          <span className="text-gray-600 font-bold text-lg">/mês</span>
        </div>
      </div>

      <ul className="space-y-4 mb-8">
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
        className={`w-full font-black text-base ${
          featured
            ? "bg-red-600 hover:bg-red-700 text-white shadow-xl"
            : "bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
        }`}
        data-testid={`button-contratar-${planName.toLowerCase().replace(/\s+/g, "-")}`}
      >
        CONTRATAR AGORA
      </Button>
    </Card>
  );
}
