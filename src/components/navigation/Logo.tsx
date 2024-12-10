export const Logo = () => {
  return (
    <a 
      href="/" 
      className="flex-shrink-0 flex items-center gap-2" 
      aria-label="Home"
    >
      <img
        src="/lovable-uploads/4b006aa1-0a89-4e68-bb1e-f3a25902cb23.png"
        alt="DTIMA Logo"
        className="h-12 w-12"
        loading="eager"
      />
      <span className="text-xl font-bold text-gray-900">
        Garoua III
      </span>
    </a>
  );
};