export const Logo = () => {
  return (
    <a 
      href="/" 
      className="flex-shrink-0 flex items-center gap-2" 
      aria-label="Home"
    >
      <img
        src="/lovable-uploads/43369764-2dc3-4409-957a-f7466442ba0b.png"
        alt="Garoua III Logo"
        className="h-10 w-10"
        loading="eager"
      />
      <span className="text-xl font-bold text-gray-900">
        Garoua III
      </span>
    </a>
  );
};