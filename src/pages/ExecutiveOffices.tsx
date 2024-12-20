import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const ExecutiveOffices = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Executive Offices
          </h1>

          <div className="mb-16 overflow-x-auto">
            <div className="min-w-[1000px] p-8 bg-white rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-center mb-8">WUM COUNCIL ORGANIGRAM</h2>
              
              <div className="relative before:content-[''] before:absolute before:top-[60px] before:left-1/2 before:h-[calc(100%-100px)] before:w-0.5 before:bg-slate-300 before:z-0">
                {/* Level 1 - Mayor */}
                <div className="flex justify-center">
                  <div className="relative px-8 py-4 rounded-lg min-w-[160px] text-center font-semibold shadow-md z-10 bg-cameroon-green text-white">
                    Lord Mayor
                  </div>
                </div>

                {/* Level 2 - Deputy Mayors */}
                <div className="flex justify-center gap-40 mt-8">
                  <div className="relative px-8 py-4 rounded-lg min-w-[160px] text-center font-semibold shadow-md z-10 bg-cameroon-red text-white before:content-[''] before:absolute before:top-[-20px] before:left-1/2 before:h-5 before:w-0.5 before:bg-slate-300 before:z-0">
                    1st Deputy Mayor
                  </div>
                  <div className="relative px-8 py-4 rounded-lg min-w-[160px] text-center font-semibold shadow-md z-10 bg-cameroon-red text-white before:content-[''] before:absolute before:top-[-20px] before:left-1/2 before:h-5 before:w-0.5 before:bg-slate-300 before:z-0">
                    2nd Deputy Mayor
                  </div>
                </div>

                {/* Level 3 - Secretary General */}
                <div className="flex justify-center mt-8">
                  <div className="relative px-8 py-4 rounded-lg min-w-[160px] text-center font-semibold shadow-md z-10 bg-blue-600 text-white before:content-[''] before:absolute before:top-[-20px] before:left-1/2 before:h-5 before:w-0.5 before:bg-slate-300 before:z-0">
                    Secretary General
                  </div>
                </div>

                {/* Level 4 - Main Departments */}
                <div className="flex justify-center gap-4 mt-8">
                  {["General Affairs", "Technical Services", "Financial Services", "Social Affairs"].map((dept) => (
                    <div key={dept} className="relative px-8 py-4 rounded-lg min-w-[160px] text-center font-semibold shadow-md z-10 bg-gray-700 text-white before:content-[''] before:absolute before:top-[-20px] before:left-1/2 before:h-5 before:w-0.5 before:bg-slate-300 before:z-0">
                      {dept}
                    </div>
                  ))}
                </div>

                {/* Level 5 - Sub Departments */}
                <div className="flex justify-center gap-2 mt-8 flex-wrap">
                  {["Human Resources", "Civil Status", "Infrastructure", "Revenue", "Accounting", "Community Dev."].map((subDept) => (
                    <div key={subDept} className="relative px-8 py-4 rounded-lg min-w-[160px] text-center font-semibold shadow-md z-10 bg-gray-500 text-white before:content-[''] before:absolute before:top-[-20px] before:left-1/2 before:h-5 before:w-0.5 before:bg-slate-300 before:z-0">
                      {subDept}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ExecutiveOffices;