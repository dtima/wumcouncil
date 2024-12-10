import { useLanguage } from "@/contexts/LanguageContext";

export function Partners() {
  const { t } = useLanguage();

  const partners = [
    {
      name: "Partner 1",
      logo: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=200&h=100&fit=crop",
    },
    {
      name: "Partner 2",
      logo: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=200&h=100&fit=crop",
    },
    {
      name: "Partner 3",
      logo: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=200&h=100&fit=crop",
    },
    {
      name: "Partner 4",
      logo: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=200&h=100&fit=crop",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          {t("partners.title")}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-20 w-auto object-contain mx-auto"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}