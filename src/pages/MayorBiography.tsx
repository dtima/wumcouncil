import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const MayorBiography = () => {
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
                  Biography of Lord Mayor
                </h1>
                <p className="text-xl md:text-2xl text-gray-600">
                  Dighambong Anthony MVO
                </p>
              </div>
              <div className="relative">
                <img
                  src="/lovable-uploads/3ac64ce7-499a-485f-a3bb-afcf1375acef.png"
                  alt="Mayor Dighambong Anthony MVO"
                  className="rounded-lg shadow-xl w-full max-w-md mx-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Biography Content */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                Born on June 17, 1970, in the vibrant community of Aghem-Wum, Lord Mayor Dighambong Anthony MVO stands as a pillar of dedication and leadership in Cameroon. With a career spanning over 26 years, he has seamlessly blended his roles as an educator, public servant, and community leader, profoundly impacting the lives of countless individuals in his hometown of Wum and the broader Menchum Division.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Educational Journey</h2>
              <p className="text-gray-600 mb-6">
                Mayor Dighambong's educational journey is a testament to his unwavering commitment to learning and personal growth. He began his academic pursuits at Catholic Primary School St. Martin's in Wum, where his passion for knowledge was first kindled. He continued his studies at Government High School Wum and NACHO Comprehensive High School Bamenda, demonstrating exceptional academic prowess. His quest for higher education led him to the esteemed University of Yaoundé and the University of Dschang, where he honed his expertise in the sciences. Furthering his professional qualifications, he attended E.N.S. Bambili, emerging as a distinguished Physics educator. His dedication to education earned him roles as Head of Department and Dean of Science in various government schools, shaping the minds of future generations.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Leadership and Community Service</h2>
              <p className="text-gray-600 mb-6">
                Parallel to his academic achievements, Mayor Dighambong exhibited a natural inclination towards leadership and community service. His early involvement with the Cameroon People's Democratic Movement (CPDM) and its youth wing, the YCPDM, showcased his ability to inspire and mobilize others. Serving in pivotal roles such as YCPDM Section President for Menchum 1–Wum and Chargé de Mission for party reorganization, he played a crucial part in strengthening the party's foundations. His leadership was instrumental during numerous electoral campaigns, including coordinating youth support for President Biya (PRESBY) in the North West Province and representing Cameroonian youth at the World Festival of Youth and Students in Pretoria, South Africa.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Mayoral Leadership</h2>
              <p className="text-gray-600 mb-6">
                In October 2013, Mayor Dighambong was elected as the Lord Mayor of the Wum Council, a position he was re-elected to in 2020. Under his stewardship, the Wum Council has experienced significant transformation. Mayor Dighambong has spearheaded initiatives that have modernized local infrastructure, stimulated economic growth, and improved the overall quality of life for residents. His governance is characterized by a commitment to inclusive participation, transparency, and sustainable, community-driven projects. His role as a delegate to the Major National Dialogue in 2019 and his position as Senior Vice President of the United Councils and Cities of Cameroon (UCCC) further highlight his influence and dedication to national unity and progress.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Civic Engagement and Philanthropy</h2>
              <p className="text-gray-600 mb-6">
                Beyond his official duties, Mayor Dighambong is deeply invested in civic engagement and philanthropy. His efforts extend to supporting student and youth associations, providing scholarships to primary school children, sponsoring local sports tournaments, and promoting cultural festivals that honor and preserve Cameroonian heritage. These endeavors reflect his belief in empowering the youth and fostering a sense of community pride and cohesion.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Honors and Recognition</h2>
              <p className="text-gray-600 mb-6">
                Mayor Dighambong's exemplary service has been recognized with several prestigious honors. He was knighted as a Knight of the Cameroon Order of Merit and later as a Knight of the Cameroon Officer of Merit. In 2018, he was celebrated as the Best Mayor (North West) by the Afrik Inform Awards, a testament to his effective leadership and positive impact on the region.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Continuing Legacy</h2>
              <p className="text-gray-600">
                Today, Lord Mayor Dighambong Anthony MVO continues to lead with a visionary approach, prioritizing education, infrastructure development, social harmony, and youth empowerment. His enduring dedication and ethical leadership embody his belief in the transformative power of responsive governance and community collaboration. Under his guidance, the Wum Council not only thrives locally but also serves as a model of effective and compassionate leadership on the national stage.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MayorBiography;