export const Logo = () => {
  return (
    <a 
      href="/" 
      className="flex-shrink-0 flex items-center gap-2" 
      aria-label="Home"
    >
      <img
        src="/lovable-uploads/184d2ce1-3d4a-4ac4-bb27-b6025ee4308a.png"
        alt="Wum Council Logo"
        className="h-12 w-12"
        loading="eager"
      />
      <span className="text-xl font-bold text-gray-900">
        Wum Council
      </span>
    </a>
  );
};