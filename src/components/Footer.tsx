const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-8 bg-primary-foreground/30" />
          <span className="text-gold-light">✦</span>
          <div className="h-px w-8 bg-primary-foreground/30" />
        </div>
        
        <p className="font-display text-lg font-medium mb-2">
          Sandip Natvarbhai Sarvaiya
        </p>
        
        <p className="text-primary-foreground/70 text-sm">
          © {currentYear} All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
