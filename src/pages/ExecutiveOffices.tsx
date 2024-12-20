import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserRound } from "lucide-react";

const ExecutiveOffices = () => {
  const teamMembers = [
    { id: 1, name: "Team Member 1", title: "Position Title 1", image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952" },
    { id: 2, name: "Team Member 2", title: "Position Title 2", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" },
    { id: 3, name: "Team Member 3", title: "Position Title 3", image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" },
    { id: 4, name: "Team Member 4", title: "Position Title 4", image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7" },
    { id: 5, name: "Team Member 5", title: "Position Title 5", image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952" },
    { id: 6, name: "Team Member 6", title: "Position Title 6", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" },
    { id: 7, name: "Team Member 7", title: "Position Title 7", image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" },
    { id: 8, name: "Team Member 8", title: "Position Title 8", image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Executive Offices
          </h1>

          {/* Organizational Chart */}
          <div className="mb-16 overflow-x-auto">
            <div className="min-w-[1000px] p-8 bg-white rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-center mb-8">WUM COUNCIL ORGANIGRAM</h2>
              <img 
                src="/lovable-uploads/18e901e9-2d96-43c5-93ac-1a07cb495ddf.png"
                alt="Wum Council Organizational Chart"
                className="w-full h-auto"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div 
                key={member.id}
                className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <Avatar className="w-32 h-32 mb-4">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback>
                    <UserRound className="w-12 h-12" />
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-600 text-center">
                  {member.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ExecutiveOffices;