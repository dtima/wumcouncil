import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const MeetTheMayor = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-20 pb-16">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-gray-50 to-white py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                  Meet Our Mayor
                </h1>
                <p className="text-xl md:text-2xl text-gray-600">
                  Dighambong Anthony Mvo
                </p>
                <p className="text-lg text-gray-600 font-medium">
                  Lord Mayor of Wum Council
                </p>
              </div>
              <div className="relative">
                <img
                  src="/lovable-uploads/f2560538-d2fb-49e9-b5fe-03f1f6161bc4.png"
                  alt="Mayor Dighambong Anthony Mvo"
                  className="rounded-lg shadow-xl w-full max-w-md mx-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mayor's Message */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Mayor's Message
              </h2>
              
              <div className="space-y-6 text-gray-600">
                <p>Dear Visitors,</p>
                
                <p>
                  It is with great joy and a deep sense of pride that I welcome you to the official website of Wum Council, 
                  a gateway to the beauty, culture, and opportunities that define our beloved municipality. As the Mayor of Wum, 
                  I am honored to serve a community that is rich in history, vibrant in culture, and abundant in natural wonders.
                </p>

                <p>
                  Wum Municipality, established in 1948, stands as a beacon of hope, resilience, and progress in the heart of 
                  Menchum Division. Our land, affectionately known as the "Land of Four Lakes," is a treasure trove of breathtaking 
                  landscapes, including the serene lakes of Atue, Oshien, Illum, and Wum, and the majestic Menchum Falls. These 
                  natural wonders, coupled with our lush forests, rolling hills, and hot springs, make Wum a destination like no 
                  other—a place where nature's splendor meets the warmth of our people.
                </p>

                <p>
                  Our municipality is not only a haven for nature lovers but also a land brimming with potential and opportunities. 
                  From agriculture to tourism, renewable energy to trade, Wum offers vast investment prospects. We are committed to 
                  fostering economic growth, enhancing infrastructure, and promoting sustainable development to transform Wum into a 
                  thriving hub of progress.
                </p>

                <p>
                  At Wum Council, our vision is guided by the principles of inclusivity, innovation, and sustainability. We strive 
                  to empower our people, preserve our cultural heritage, and create an environment where every individual has the 
                  opportunity to thrive. Whether it is through rehabilitating schools, improving healthcare facilities, or supporting 
                  local businesses, we are dedicated to improving the quality of life for all our residents.
                </p>

                <p>
                  This website is designed to be your window into Wum—a space where you can explore our rich history, stay informed 
                  about our initiatives, and connect with the heart of our community. Here, you will find updates on our ongoing 
                  projects, investment opportunities, and the many attractions that make Wum a place worth discovering.
                </p>

                <p>
                  To our visitors, I extend an open invitation to experience the warmth and hospitality of Wum. Whether you come to 
                  marvel at our natural beauty, immerse yourself in our traditions, or seize the opportunities within our growing 
                  economy, you will find a community that is ready to welcome you with open arms.
                </p>

                <p>
                  To our residents, let us continue to work together in building a brighter future for our municipality. Your ideas, 
                  energy, and collaboration are the cornerstone of our progress.
                </p>

                <p>
                  As we journey forward, let us embrace the spirit of unity and determination that has defined Wum for generations. 
                  Together, we can achieve our shared vision of a prosperous, inclusive, and sustainable community.
                </p>

                <p>
                  Thank you for visiting our website. I invite you to explore its various sections, learn more about our initiatives, 
                  and join us in shaping the future of Wum. May your time here inspire you to visit our municipality, invest in our 
                  vision, and be a part of our story.
                </p>

                <p>Welcome to Wum, the Land of Great Hospitality!</p>

                <p className="font-medium">
                  With warm regards,<br />
                  Dighambong Anthony Mvo<br />
                  Mayor of Wum Council
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MeetTheMayor;