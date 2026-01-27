import profilePhoto from "@/assets/profile-photo.jpeg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-16 px-4 bg-gradient-hero relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 border-2 border-gold/20 rounded-full animate-float" />
      <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-primary/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-gold/30 rounded-full" />
      <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-primary/30 rounded-full" />

      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        {/* Ornamental top border */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent" />
          <span className="text-gold text-2xl">❈</span>
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent" />
        </div>

        {/* Profile Photo */}
        <div className="relative inline-block mb-8">
          <div className="absolute inset-0 bg-gradient-accent rounded-full blur-xl opacity-30 scale-110" />
          <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-gold shadow-elevated">
            <img
              src={profilePhoto}
              alt="Amit Vijaybhai Parmar"
              className="w-full h-full object-cover object-top"
            />
          </div>
          {/* Decorative ring */}
          <div className="absolute -inset-3 border-2 border-dashed border-gold/40 rounded-full animate-spin" style={{ animationDuration: '30s' }} />
        </div>

        {/* Name */}
        <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-4">
          Amit Vijaybhai Parmar
        </h1>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-muted-foreground font-light mb-6">
          Software Engineer • B.C.A, M.C.A
        </p>

        {/* Location */}
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-card rounded-full shadow-soft border border-border">
          <span className="text-primary">📍</span>
          <span className="text-sm font-medium text-foreground">
            Gondal, Gujarat, India
          </span>
        </div>

        {/* Ornamental bottom border */}
        <div className="flex items-center justify-center gap-4 mt-12">
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent" />
          <span className="text-primary text-lg">✦</span>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent" />
        </div>

        {/* Scroll indicator */}
        <div className="mt-12 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full mx-auto flex justify-center">
            <div className="w-1.5 h-3 bg-muted-foreground/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
