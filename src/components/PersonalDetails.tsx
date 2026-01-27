import { User, Calendar, GraduationCap, Briefcase, Ruler, MapPin } from "lucide-react";

interface DetailItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  delay?: number;
}

const DetailItem = ({ icon, label, value, delay = 0 }: DetailItemProps) => (
  <div 
    className="flex items-start gap-4 p-4 bg-card rounded-lg shadow-soft border border-border/50 hover:shadow-card hover:border-gold/30 transition-all duration-300"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="p-3 bg-secondary rounded-lg text-primary">
      {icon}
    </div>
    <div>
      <p className="text-sm text-muted-foreground font-medium uppercase tracking-wide">{label}</p>
      <p className="text-foreground font-medium mt-1">{value}</p>
    </div>
  </div>
);

const PersonalDetails = () => {
  const details = [
    { icon: <User size={20} />, label: "Full Name", value: "Amit Vijaybhai Parmar" },
    { icon: <Calendar size={20} />, label: "Date of Birth", value: "18th November, 2002" },
    { icon: <GraduationCap size={20} />, label: "Education", value: "B.C.A, M.C.A" },
    { icon: <Ruler size={20} />, label: "Height", value: "5'7\"" },
    { icon: <Briefcase size={20} />, label: "Occupation", value: "Software Engineer at Xappiens LLC (Madrid, Spain)" },
    { icon: <MapPin size={20} />, label: "Native", value: "Amarnagar, Vadiya" },
  ];

  return (
    <section className="py-20 px-4 bg-background" id="personal">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold">✦</span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            Personal Details
          </h2>
          <p className="text-muted-foreground">
            About me and my background
          </p>
        </div>

        {/* Details Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {details.map((detail, index) => (
            <DetailItem
              key={detail.label}
              icon={detail.icon}
              label={detail.label}
              value={detail.value}
              delay={index * 100}
            />
          ))}
        </div>

        {/* Maternal Info */}
        <div className="mt-8 p-6 bg-secondary/50 rounded-xl border border-border">
          <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">Maternal</p>
          <p className="text-foreground font-medium">Morbi</p>
        </div>
      </div>
    </section>
  );
};

export default PersonalDetails;
