export const Logo = () => {
  return (
    <a 
      href="/" 
      className="flex-shrink-0 flex items-center gap-2" 
      aria-label="Home"
    >
      <img
        src="/lovable-uploads/3a8fc90c-5684-4c2e-81d1-a830208afd9d.png"
        alt="Mokolo Logo"
        className="h-12 w-12"
        loading="eager"
      />
      <span className="text-xl font-bold text-gray-900">
        Mokolo
      </span>
    </a>
  );
};