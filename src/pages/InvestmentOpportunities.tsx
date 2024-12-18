import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Building2, Wrench, Heart, Building, TreePine, Wheat, Sun } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function InvestmentOpportunities() {
  const marketStats = {
    population: "51,000+",
    marketSize: "Regional Hub",
    nearbyMarkets: [
      "Bamenda Central Market (83km)",
      "Fundong Market",
      "Njinikom Market",
      "Bafut Market"
    ],
    keyMetrics: [
      { metric: "Land Area", value: "776.67 km²" },
      { metric: "Population Density", value: "66 inhabitants/km²" },
      { metric: "Agricultural Land", value: "60% of total area" },
      { metric: "Market Days", value: "Every Saturday" }
    ]
  };

  const sectors = [
    {
      icon: <Building2 className="h-12 w-12 text-cameroon-green" />,
      title: "Infrastructure",
      description: "Be part of Wum's transformation by investing in the development of essential infrastructure.",
      opportunities: [
        "Modern road network development",
        "Affordable housing projects",
        "State-of-the-art warehouses",
        "Public facilities construction",
        "Bridge rehabilitation projects"
      ]
    },
    {
      icon: <Wheat className="h-12 w-12 text-cameroon-yellow" />,
      title: "Agriculture",
      description: "Unlock the potential of Wum's rich agricultural landscape.",
      opportunities: [
        "Agricultural processing facilities",
        "Modern farming equipment",
        "Storage facilities",
        "Irrigation systems",
        "Agro-industrial development"
      ]
    },
    {
      icon: <TreePine className="h-12 w-12 text-cameroon-green" />,
      title: "Tourism",
      description: "Promote Wum's natural beauty and rich cultural heritage.",
      opportunities: [
        "Eco-tourism projects",
        "Hotel development",
        "Tourist guide services",
        "Cultural site preservation",
        "Adventure tourism facilities"
      ]
    },
    {
      icon: <Building className="h-12 w-12 text-cameroon-red" />,
      title: "Trade",
      description: "Support the expansion of local trade and traditional crafts.",
      opportunities: [
        "Modern market facilities",
        "Craft centers",
        "Export facilities",
        "Trade logistics",
        "E-commerce platforms"
      ]
    },
    {
      icon: <Sun className="h-12 w-12 text-cameroon-yellow" />,
      title: "Renewable Energy",
      description: "Contribute to sustainable development through renewable energy solutions.",
      opportunities: [
        "Solar energy projects",
        "Rural electrification",
        "Biomass energy",
        "Mini-grid systems",
        "Energy storage solutions"
      ]
    },
    {
      icon: <Heart className="h-12 w-12 text-cameroon-red" />,
      title: "Healthcare",
      description: "Play a vital role in improving community well-being.",
      opportunities: [
        "Modern healthcare facilities",
        "Medical equipment supply",
        "Pharmaceutical services",
        "Healthcare training centers",
        "Telemedicine infrastructure"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 md:py-24">
        <section className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Investment Opportunities in Wum</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Discover Wum Council's promising growth sectors and join us in driving sustainable economic development. 
            Together, we can transform Wum into a hub of progress and opportunity.
          </p>
        </section>

        {/* Market Statistics */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Market Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Key Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableBody>
                    {marketStats.keyMetrics.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{item.metric}</TableCell>
                        <TableCell>{item.value}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Nearby Markets</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {marketStats.nearbyMarkets.map((market, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="h-2 w-2 bg-cameroon-green rounded-full" />
                      {market}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Investment Sectors */}
        <section>
          <h2 className="text-2xl font-bold mb-8">Investment Sectors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="mb-4">
                    {sector.icon}
                  </div>
                  <CardTitle>{sector.title}</CardTitle>
                  <CardDescription>{sector.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-2">Investment Opportunities:</h4>
                  <ul className="space-y-2">
                    {sector.opportunities.map((opportunity, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <div className="h-1.5 w-1.5 bg-cameroon-green rounded-full" />
                        {opportunity}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="text-center mt-16">
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Join us in building a brighter future for Wum Council. Your investment can make a lasting impact 
            on our community and drive meaningful change.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}