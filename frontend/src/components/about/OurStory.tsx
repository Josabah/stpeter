"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function OurStory() {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-2 mb-6">የግቢ ጉባኤያችን ታሪክ በአጭሩ</h2>
            <div className="w-20 h-1 bg-primary-600 mb-8"></div>

            <p className="text-lg text-secondary-700 mb-6">
              በ 2003 ዓ.ም በአዲስ አበባ ዩኒቨርሲቲ የተመደቡ ጤና ሳይንስ ተማሪዎች አዲስ ካምፓስ እንዲገቡ ተደረገ። የገቡበትም ካምፓስ አሁን ላይ ሰፈረ ሰላም በመባል የሚታወቀው ግቢ በመጀመሪያ ሲመሰረት (በተለምዶ ሳንባ ነቀርሳ) ሕክምና ማዕከል የነበረው የቅዱስ ጴጥሮስ ሆስፒታል ግቢ ነበር። ቅዱስ ጴጥሮስ ግቢ ጉባኤ ሰፈረ ሰላም ካምፓስ ተማሪዎችን ተቀብሎ ማስተማር ከጀመረ ከ 2 ዓመት በኋላ በ 2005 ዓ.ም ተቋቁሞ ሥራ የጀመረ ሲሆን የመመስረቱ ምክንያትም ከዛ በፊት የግቢው ተማሪዎች በጳውሎስ ግቢ ጉባኤ ይገለገሉ የነበረ ቢሆንም ሁለቱ ተማሪዎች የሚሳለሙበት ደብር የተለያየ በመሆኑና ካምፓሱ በደንብ ራሱን በመቻል ተማሪዎችን ማስተማር በመጀመሩ ነው።
            </p>

            <p className="text-lg text-secondary-700 mb-6">
              ግቢ ጉባኤው ራሱን ለመቻል ጥያቄውን ለማኀበረ ቅዱሳን አዲስ አበባ ማዕከል አቅርቧል። ሚያዚያ 2004 ዓ.ም ከማዕከል በወጡ ተጠሪዎች አሰባሳቢነት ስለግቢው አጠቃላይ ሁኔታና ቀጣይነት ከተመረጡ ልጆች ጋር ውይይት ተካሂዶ ግቢው ከ ቀጣይ 2005 ጀምሮ ራሱን ችሎ ሥራ እንዲጀምር ከስምምነት ተደርሷል። ስሙም ቅዱስ ጴጥርስ ተብሎ እንዲቀጥል ሆኗል።
            </p>

            <p className="text-lg text-secondary-700">
              ከዚያን ጊዜ ጀምሮ የተማሪ ቁጥር እጅጉን ጨምሮ ግቢ ጉባኤያችን እያደገ በመምጣት የተለያዩ አገልግሎቶችን በመስጠት ላይ ይገኛል። ከነዚህም ውስጥም ኮርስ፣ የአብነት ትምህርት፣ የጸሎት እና የአንድነት መርሐግብራት፣ የበገና ትምህርት፣ ዝክረ ቅዱሳን እና የበጎ አድራጎት ሥራዎች በዋነኝነት ይጠቀሳሉ።
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl"
          >
            <Image
              src="/images/churchbuilding.jpg"   // <-- CHANGE THIS TO YOUR IMAGE NAME
              alt="Church Building"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
