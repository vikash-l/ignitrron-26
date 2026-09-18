import { motion } from 'framer-motion';
import { UserCheck, GraduationCap, Phone, User } from 'lucide-react';

const facultyCoordinator = {
  name: "Mr. Munirathnam",
  role: "Faculty Coordinator"
};

const studentCoordinators = [
  { name: "T. Naveen S", phone: "9952747859", rawPhone: "9952747859" },
  { name: "Rajeswaran D", phone: "7010564643", rawPhone: "7010564643" },
  { name: "Gokul S", phone: "9363266674", rawPhone: "9363266674" }
];

const CoordinatorsSection = () => {
  return (
    <section id="coordinators" className="py-24 relative z-20 bg-transparent">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#39ff14]/10 mb-6 border border-[#39ff14]/30 shadow-[0_0_15px_rgba(57,255,20,0.2)]">
            <UserCheck className="w-8 h-8 text-[#39ff14]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white font-display tracking-tight uppercase drop-shadow-md">
            Event <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#39ff14] to-[#128a00]">Coordinators</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base font-light mt-3 max-w-xl mx-auto">
            Get in touch with our faculty and student coordinators for any inquiries or support.
          </p>
        </div>

        {/* Faculty Coordinator Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 max-w-2xl mx-auto"
        >
          <div className="bg-[#0a0f14]/80 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-[#39ff14]/30 shadow-[0_0_25px_rgba(57,255,20,0.1)] relative overflow-hidden group hover:border-[#39ff14]/60 transition-all duration-300">
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#39ff14]/10 rounded-full blur-2xl group-hover:bg-[#39ff14]/20 transition-all"></div>
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-xl bg-[#39ff14]/10 border border-[#39ff14]/40 flex items-center justify-center shrink-0">
                <GraduationCap className="w-7 h-7 text-[#39ff14]" />
              </div>
              <div>
                <span className="text-[#39ff14] text-xs font-mono font-semibold uppercase tracking-widest block mb-1">Faculty Coordinator</span>
                <h3 className="text-2xl font-bold text-white font-display">{facultyCoordinator.name}</h3>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Student Coordinators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {studentCoordinators.map((student, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#0a0f14]/80 backdrop-blur-xl rounded-2xl p-6 border border-[#39ff14]/20 shadow-[0_0_20px_rgba(0,0,0,0.6)] hover:border-[#39ff14]/50 hover:shadow-[0_0_20px_rgba(57,255,20,0.15)] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#39ff14]/10 border border-[#39ff14]/30 flex items-center justify-center text-[#39ff14]">
                    <User className="w-5 h-5" />
                  </div>
                  <span className="text-gray-400 text-xs font-mono uppercase tracking-wider">Student Coordinator</span>
                </div>
                <h4 className="text-xl font-bold text-white font-display mb-4">{student.name}</h4>
              </div>

              <a
                href={`tel:${student.rawPhone}`}
                className="inline-flex items-center gap-2 text-[#39ff14] font-mono font-semibold text-sm hover:underline bg-[#39ff14]/5 hover:bg-[#39ff14]/10 border border-[#39ff14]/20 rounded-xl px-4 py-2.5 transition-all w-fit"
              >
                <Phone className="w-4 h-4" />
                +91 {student.phone}
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CoordinatorsSection;
