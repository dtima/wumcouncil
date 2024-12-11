import { Building2, Wrench, Heart, Building, TreePine, Wheat, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export function InvestmentOpportunities() {
  const sectors = [
    {
      icon: <Building2 className="h-8 w-8 text-cameroon-green" />,
      title: "Infrastructure",
      description: "Be part of Wum's transformation by investing in the development of essential infrastructure, including modern roads, affordable housing, and state-of-the-art warehouses.",
      link: "/invest/infrastructure"
    },
    {
      icon: <Wheat className="h-8 w-8 text-cameroon-yellow" />,
      title: "Agriculture",
      description: "Unlock the potential of Wum's rich agricultural landscape by investing in the processing of agricultural products and the growth of the agro-industrial sector.",
      link: "/invest/agriculture"
    },
    {
      icon: <TreePine className="h-8 w-8 text-cameroon-green" />,
      title: "Tourism",
      description: "Promote Wum's natural beauty and rich cultural heritage by developing eco-tourism projects around iconic landmarks such as the Menchum Falls, volcanic lakes, and cultural sites.",
      link: "/invest/tourism"
    },
    {
      icon: <Building className="h-8 w-8 text-cameroon-red" />,
      title: "Trade",
      description: "Support the expansion of local trade and traditional crafts. Invest in projects that preserve Wum's cultural identity while creating economic opportunities.",
      link: "/invest/trade"
    },
    {
      icon: <Sun className="h-8 w-8 text-cameroon-yellow" />,
      title: "Renewable Energy",
      description: "Contribute to sustainable development by investing in renewable energy solutions, including solar energy projects and rural electrification.",
      link: "/invest/energy"
    },
    {
      icon: <Heart className="h-8 w-8 text-cameroon-red" />,
      title: "Healthcare",
      description: "Play a vital role in improving community well-being by supporting the development of modern healthcare facilities and services.",
      link: "/invest/healthcare"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Investment Opportunities in Wum Council</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover Wum Council's promising growth sectors and join us in driving sustainable economic development. Together, we can transform Wum into a hub of progress and opportunity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sector, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-gray-50 rounded-full inline-block">
                  {sector.icon}
                </div>
                <CardTitle className="text-xl mb-2">{sector.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {sector.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center pb-6">
                <Button
                  variant="outline"
                  className="group-hover:bg-cameroon-green group-hover:text-white transition-colors duration-300"
                  asChild
                >
                  <a href={sector.link}>Learn More</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Join us in building a brighter future for Wum Council. Your investment can make a lasting impact on our community and drive meaningful change.
          </p>
        </div>
      </div>
    </section>
  );
}