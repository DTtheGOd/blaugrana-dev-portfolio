const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mb-8 opacity-30" />
        <p className="font-handwritten text-2xl text-gradient-barca mb-2">
          More Than Just Code
        </p>
        <p className="text-muted-foreground text-sm font-heading">
          © {new Date().getFullYear()} Dhruv Tiwari. Built with passion.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
