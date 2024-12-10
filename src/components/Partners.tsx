import { useLanguage } from "@/contexts/LanguageContext";

export function Partners() {
  const partners = [
    {
      name: "DTIMA",
      logo: "/lovable-uploads/70bb167c-883f-453a-b429-04c92936a7d0.png",
    },
    {
      name: "MINDDEVEL",
      logo: "/lovable-uploads/b7f036be-f37d-4501-a4b3-59bf05c36fa7.png",
    },
    {
      name: "CYUC",
      logo: "/lovable-uploads/d8c39b6c-f931-44a1-bee1-fbfaad62fba9.png",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Our Partners
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 w-full max-w-[300px]"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-32 w-auto object-contain mx-auto"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}