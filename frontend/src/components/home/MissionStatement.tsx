"use client";
import { motion } from 'framer-motion'

export default function MissionStatement() {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="heading-2 mb-6">Our Mission</h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-8"></div>
          <p className="text-lg text-secondary-700 mb-6">
           በማህበረ ቅዱሳን ስር በመሆን በ ሰፈረሰላም ግቢ የሚማሩ ተማሪዎች የወንጌል ትምህርትን፣ስርዓትን፣ትውፊትን እንዲያውቁ እና እንዲያቆዩ በማረግ በሀይማኖቱ የፀና በምግባሩ የቀና ንቁ ኦርቶዶክሳዊ ወጣት ማፍራት ነው።
          </p>
          <p className="text-lg text-secondary-700">
           
          </p>
        </motion.div>
      </div>
    </section>
  )
}