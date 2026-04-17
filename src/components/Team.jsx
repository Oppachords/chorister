import { motion } from 'framer-motion';

// Using your original TeamCard design
const TeamCard = ({ img, name, role }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center"
  >
    <img 
      src={`/assets/images/${img}`} 
      alt={name} 
      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-brand-primary/10" 
    />
    <h3 className="text-xl font-bold text-gray-800">{name}</h3>
    <p className="text-sm text-gray-500 mt-2 leading-relaxed">{role}</p>
  </motion.div>
);

const Team = () => {
  const teamData = [
    { 
      name: "Mrs Margaret Kakande", 
      role: "Ministry of Finance Patron Choristers Association", 
      img: "team1.jpeg" 
    },
    { 
      name: "Rev. Fr. Dr. Joseph Mary Ssebunya", 
      role: "Lecturer St Mbaaga's Major Seminary Ggaba - Patron Choristers Association", 
      img: "team2.jpeg" 
    },
    { 
      name: "Mr Kiwanuka Joseph William", 
      role: "MD SWICO Patron Choristers Association", 
      img: "team3.jpeg" 
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are a dedicated team working together to serve our community and share the love of Christ. Meet the individuals behind our mission.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamData.map((member, index) => (
            <TeamCard 
              key={index}
              name={member.name}
              role={member.role}
              img={member.img}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;