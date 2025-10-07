import { Card } from "@/components/ui/card";

export interface AdvantageCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function AdvantageCard({ icon, title, description }: AdvantageCardProps) {
  return (
    <Card className="p-8 text-center transition-all duration-300 bg-white border-none shadow-2xl hover:shadow-3xl hover:-translate-y-2">
      <div className="flex justify-center mb-6">
        <div className="w-20 h-20 rounded-2xl bg-[#FFC107] flex items-center justify-center shadow-lg">
          <div className="text-black">{icon}</div>
        </div>
      </div>
      <h3 className="text-2xl font-display font-black text-black mb-3 uppercase" data-testid="text-advantage-title">
        {title}
      </h3>
      <p className="text-gray-700 leading-relaxed font-medium" data-testid="text-advantage-description">
        {description}
      </p>
    </Card>
  );
}
