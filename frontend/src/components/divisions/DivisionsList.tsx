"use client";
import { motion } from 'framer-motion'
import { useDivisions } from '@/hooks/useDivisions'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export default function DivisionsList() {
  const { divisions, loading, error } = useDivisions();

  if (loading) {
    return (
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Our Service Divisions</h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Learn about the various ministries that serve our church and community
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-gray-200 animate-pulse h-48 rounded-lg" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  const cards = divisions.length > 0 ? divisions : [];

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">Our Service Divisions</h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Learn about the various ministries that serve our church and community
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {cards.map((division: any) => (
            <motion.div 
              key={division._id}
              variants={itemVariants}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className={`p-6 ${division.color || 'bg-primary-100 text-primary-700'} flex justify-center`}>
                <span className="text-2xl font-bold">{division.icon || '★'}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{division.title}</h3>
                <p className="text-secondary-600">{division.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-serif font-bold mb-4">Get Involved</h3>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto mb-8">
            We welcome all members to participate in our church divisions. If you're interested in serving in any of these areas, please contact us.
          </p>
          <button className="btn-primary">
            Contact Us to Volunteer
          </button>
        </div>
      </div>
    </section>
  )
}