import { Users, Briefcase, MapPin, Heart } from "lucide-react";

interface FamilyMemberProps {
  relation: string;
  name: string;
  occupation?: string;
  maternal?: string;
}

const FamilyMemberCard = ({ relation, name, occupation, maternal }: FamilyMemberProps) => (
  <div className="p-6 bg-card rounded-xl shadow-card border border-border/50 hover:border-primary/30 transition-all duration-300 group">
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
        <Users className="text-primary" size={20} />
      </div>
      <span className="text-sm font-semibold text-primary uppercase tracking-wide">
        {relation}
      </span>
    </div>
    
    <h3 className="font-display text-xl font-semibold text-foreground mb-3">
      {name}
    </h3>
    
    {occupation && (
      <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
        <Briefcase size={14} />
        <span>{occupation}</span>
      </div>
    )}
    
    {maternal && (
      <div className="flex items-center gap-2 text-muted-foreground text-sm">
        <MapPin size={14} />
        <span>Maternal: {maternal}</span>
      </div>
    )}
  </div>
);

const FamilyDetails = () => {
  const familyMembers = [
    {
      relation: "Father",
      name: "Vijaybhai Pravinbhai Parmar",
      occupation: "Job at Intricast (Shapar)",
      maternal: "Dhangdhra, Surendranagar(Solanki)",
    },
    {
      relation: "Mother",
      name: "Sonalben Vijaybhai Parmar",
      maternal: "Morbi(Dodiya)",
    },
    {
      relation: "Sister",
      name: "Hiral Vijaybhai Parmar",
    },
    {
      relation: "Grandmother",
      name: "Arvindaben Pravinbhai Parmar",
      
    },
    {
      relation: "Aunty",
      name: "Varshaben Pravinbhai Parmar",
    },
  ];

  return (
    <section className="py-20 px-4 bg-muted/30" id="family">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-primary" />
            <Heart className="text-primary" size={20} />
            <div className="h-px w-12 bg-primary" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            Family Details
          </h2>
          <p className="text-muted-foreground">
            My beloved family members
          </p>
        </div>

        {/* Family Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {familyMembers.map((member) => (
            <FamilyMemberCard
              key={member.relation}
              relation={member.relation}
              name={member.name}
              occupation={member.occupation}
              maternal={member.maternal}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FamilyDetails;
