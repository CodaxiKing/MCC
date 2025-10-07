import { Card } from "@/components/ui/card";

export interface AdvantageCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function AdvantageCard({ icon, title, description }: AdvantageCardProps) {
  return (
    <Card className="group relative p-8 text-center transition-all duration-500 bg-white border-none shadow-2xl hover:shadow-3xl hover:-translate-y-3 overflow-hidden">
      {/* Animated background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/5 group-hover:to-blue-500/5 transition-all duration-500" />
      
      <div className="relative z-10">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:shadow-purple-500/50 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
            <div className="text-white transform group-hover:scale-110 transition-transform duration-300">{icon}</div>
          </div>
        </div>
        <h3 className="text-2xl font-display font-black text-black mb-3 uppercase group-hover:text-indigo-700 transition-colors duration-300" data-testid="text-advantage-title">
          {title}
        </h3>
        <p className="text-gray-700 leading-relaxed font-medium group-hover:text-gray-900 transition-colors duration-300" data-testid="text-advantage-description">
          {description}
        </p>
      </div>
    </Card>
  );
}
