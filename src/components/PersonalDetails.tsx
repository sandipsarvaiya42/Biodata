import { User, Calendar, GraduationCap, Briefcase, Ruler, MapPin, Scale, Heart } from "lucide-react";

interface DetailItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const DetailItem = ({ icon, label, value }: DetailItemProps) => (
  <div className="flex items-start gap-4 p-4 bg-card rounded-lg shadow-soft border border-border hover:shadow-card transition-shadow duration-300">
    <div className="flex-shrink-0 w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-primary">
      {icon}
    </div>
    <div className="flex-1">
      <p className="text-sm text-muted-foreground font-medium mb-1">{label}</p>
      <p className="text-foreground font-medium">{value}</p>
    </div>
  </div>
);

const PersonalDetails = () => {
  const details = [
    { icon: <User size={20} />, label: "Full Name", value: "Sandip Natvarbhai Sarvaiya" },
    { icon: <Calendar size={20} />, label: "Date of Birth", value: "4th February, 2003" },
    { icon: <Heart size={20} />, label: "Caste", value: "Hindu, Rajput" },
    { icon: <GraduationCap size={20} />, label: "Education", value: "B.C.A, M.C.A" },
    { icon: <Ruler size={20} />, label: "Height", value: "5'6\"" },
    // { icon: <Scale size={20} />, label: "Weight", value: "62 Kg" },
    // { icon: <Briefcase size={20} />, label: "Occupation", value: "Software Engineer at Xappiens LLC (Madrid, Spain)" },
    { icon: <MapPin size={20} />, label: "Native", value: "Bharudi" },
  ];

  return (
    <section id="personal" className="py-16 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-gold to-transparent" />
            <span className="text-gold">✦</span>
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-gold to-transparent" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
            Personal Details
          </h2>
          <p className="text-muted-foreground">Essential information at a glance</p>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {details.map((detail, index) => (
            <div
              key={detail.label}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <DetailItem {...detail} />
            </div>
          ))}
        </div>
      </div>
      {/* Maternal Info */}
        <div className="mt-8 p-6 bg-secondary/50 rounded-xl border border-border">
          <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">Maternal</p>
          <p className="text-foreground font-medium">Mukesbhai Chothabhai Vaghela(Valadungra)</p>
        </div>
      
    </section>
  );
};

export default PersonalDetails;
