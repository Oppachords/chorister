import { motion } from 'framer-motion';

const TeamCard = ({ img, name, role }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center"
  >
    <img src={`/assets/images/${img}`} alt={name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-brand-primary/10" />
    <h3 className="text-xl font-bold text-gray-800">{name}</h3>
    <p className="text-sm text-gray-500 mt-2 leading-relaxed">{role}</p>
  </motion.div>
);
export default TeamCard;
