import { Phone, MapPin, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 px-4 bg-background" id="contact">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold">✦</span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            Contact Details
          </h2>
          <p className="text-muted-foreground">
            Get in touch with us
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Address Card */}
          <div className="p-8 bg-card rounded-2xl shadow-card border border-border hover:shadow-elevated transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-gradient-accent rounded-xl text-primary-foreground">
                <MapPin size={24} />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">Address</h3>
            </div>
            <div className="text-muted-foreground leading-relaxed">
              <p className="font-medium text-foreground">"Maninivas", Yoginagar</p>
              <p>Near Bharat Oil Mill</p>
              <p>Gondal - 360311</p>
              <p>Gujarat, India</p>
            </div>
          </div>

          {/* Phone Card */}
          <div className="p-8 bg-card rounded-2xl shadow-card border border-border hover:shadow-elevated transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-primary rounded-xl text-primary-foreground">
                <Phone size={24} />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">Phone</h3>
            </div>
            <a 
              href="tel:+919904604946" 
              className="text-2xl font-semibold text-primary hover:text-gold transition-colors duration-300 flex items-center gap-2"
            >
              +91 99046 04946
            </a>
            <p className="text-muted-foreground mt-2 text-sm">
              Click to call directly
            </p>
          </div>
        </div>

        {/* Decorative Footer */}
        <div className="mt-16 text-center">
          <div className="inline-block">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-gold to-transparent" />
              <span className="text-gold text-2xl">❈</span>
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-gold to-transparent" />
            </div>
            <p className="text-muted-foreground text-sm italic">
              "A journey of a thousand miles begins with a single step"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
