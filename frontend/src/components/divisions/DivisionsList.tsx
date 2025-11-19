"use client";
import { motion } from 'framer-motion'
import { useDivisions } from '@/hooks/useDivisions'
import { FaPrayingHands, FaHandsHelping, FaMusic, FaBook, FaUsers, FaCoffee, FaMoneyBillWave, FaBullhorn, FaTools } from 'react-icons/fa'

// Icon mapping for divisions (same approach as FeaturedDivisions)
const iconMap: { [key: string]: any } = {
  'worship': FaPrayingHands,
  'outreach': FaHandsHelping,
  'music': FaMusic,
  'education': FaBook,
  'youth': FaUsers,
  'hospitality': FaCoffee,
  'finance': FaMoneyBillWave,
  'media': FaBullhorn,
  'facilities': FaTools,
  'default': FaPrayingHands,
};

// Color mapping for divisions (reuse existing theme tokens)
const colorMap: { [key: string]: string } = {
  'worship': 'bg-primary-100 text-primary-700',
  'outreach': 'bg-accent-100 text-accent-700',
  'music': 'bg-secondary-100 text-secondary-700',
  'education': 'bg-primary-100 text-primary-700',
  'youth': 'bg-secondary-100 text-secondary-700',
  'hospitality': 'bg-accent-100 text-accent-700',
  'finance': 'bg-primary-100 text-primary-700',
  'media': 'bg-secondary-100 text-secondary-700',
  'facilities': 'bg-accent-100 text-accent-700',
  'default': 'bg-primary-100 text-primary-700',
};

// Fallback data expanded to 9 items
const fallbackDivisions = [
  {
    _id: 'static-1',
    name: 'Worship & Prayer',
    description: 'Join us for Divine Liturgy, prayer services, and spiritual guidance.',
    icon: 'worship',
    color: 'worship',
  },
  {
    _id: 'static-2',
    name: 'Community Outreach',
    description: 'Serving our community through charity work and social programs.',
    icon: 'outreach',
    color: 'outreach',
  },
  {
    _id: 'static-3',
    name: 'Choir & Music',
    description: 'Experience the beauty of Orthodox hymns and musical traditions.',
    icon: 'music',
    color: 'music',
  },
  {
    _id: 'static-4',
    name: 'Education',
    description: 'Learn about Orthodox faith through classes, study groups, and resources.',
    icon: 'education',
    color: 'education',
  },
  {
    _id: 'static-5',
    name: 'Youth Ministry',
    description: 'Forming young believers through fellowship, mentorship, and service.',
    icon: 'youth',
    color: 'youth',
  },
  {
    _id: 'static-6',
    name: 'Hospitality',
    description: 'Creating a welcoming environment for parishioners and guests alike.',
    icon: 'hospitality',
    color: 'hospitality',
  },
  {
    _id: 'static-7',
    name: 'Finance & Stewardship',
    description: 'Supporting the church through budgeting, stewardship, and transparency.',
    icon: 'finance',
    color: 'finance',
  },
  {
    _id: 'static-8',
    name: 'Media & Communications',
    description: 'Sharing parish life and messages across digital and print channels.',
    icon: 'media',
    color: 'media',
  },
  {
    _id: 'static-9',
    name: 'Facilities & Maintenance',
    description: 'Caring for the church grounds, buildings, and infrastructure.',
    icon: 'facilities',
    color: 'facilities',
  },
]

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
            {[...Array(9)].map((_, i) => (
              <div key={i} className="bg-gray-200 animate-pulse h-48 rounded-lg" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Prefer API divisions if available; otherwise use 9-item fallback
  const cards = divisions && divisions.length >= 9 ? divisions.slice(0, 9) : fallbackDivisions;

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
          {cards.map((division: any) => {
            const IconComponent = iconMap[division.icon] || iconMap['default'];
            const colorClass = colorMap[division.color] || colorMap['default'];
            return (
              <motion.div 
                key={division._id}
                variants={itemVariants}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className={`p-6 ${colorClass} flex justify-center`}>
                  <IconComponent size={40} />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{division.name || division.title}</h3>
                  <p className="text-secondary-600">{division.description}</p>
                </div>
              </motion.div>
            );
          })}
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