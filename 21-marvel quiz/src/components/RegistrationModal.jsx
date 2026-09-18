import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ShieldCheck, Cpu, ArrowRight } from 'lucide-react';
import { sounds } from '../services/soundEffects';

export const RegistrationModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    altPhone: '',
    gender: 'Male',
    college: '',
    district: '',
    pincode: '',
    department: '',
    referred: 'No',
    referrerRollNo: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full Name is required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Valid Email ID required';
    }
    if (!formData.whatsapp.trim() || formData.whatsapp.length < 10) {
      newErrors.whatsapp = 'Valid WhatsApp Number required';
    }
    if (!formData.college.trim()) newErrors.college = 'College/Institution is required';
    if (!formData.department.trim()) newErrors.department = 'Department is required';
    if (formData.referred === 'Yes' && !formData.referrerRollNo.trim()) {
      newErrors.referrerRollNo = 'Referrer Roll No. is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      sounds.playCorrect();
      setIsSubmitted(true);
    } else {
      sounds.playIncorrect();
    }
  };

  const handleResetModal = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-2xl glass-panel p-6 sm:p-8 rounded-3xl border-[#38E39A]/30 shadow-emerald-lg max-h-[90vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={() => {
              sounds.playClick();
              onClose();
            }}
            className="absolute top-6 right-6 p-2 rounded-xl glass-panel text-[#8E9A94] hover:text-[#38E39A]"
          >
            <X className="w-5 h-5" />
          </button>

          {!isSubmitted ? (
            <div>
              {/* Header */}
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border-[#38E39A]/30 mb-2">
                  <Cpu className="w-3.5 h-3.5 text-[#38E39A]" />
                  <span className="font-mono text-[10px] text-[#38E39A] tracking-widest uppercase">
                    IGNITRRON'26 DAY 01 REGISTRATION
                  </span>
                </div>
                <h2 className="font-display font-bold text-2xl text-[#F4F5F3]">
                  REGISTER FOR <span className="text-[#38E39A] font-mono">MARVEL QUIZ</span>
                </h2>
                <p className="text-xs text-[#8E9A94] mt-1 font-mono">
                  Enter your variant details to participate in the Day 1 Marvel Quiz.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                
                {/* Name */}
                <div>
                  <label className="block text-[#8E9A94] mb-1 uppercase tracking-wider">
                    PARTICIPANT NAME *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className={`w-full px-4 py-3 rounded-xl bg-[#07100B] border text-[#F4F5F3] focus:outline-none ${
                      errors.name ? 'border-red-500' : 'border-[#38E39A]/20 focus:border-[#38E39A]'
                    }`}
                  />
                  {errors.name && <span className="text-[10px] text-red-400 mt-1 block">{errors.name}</span>}
                </div>

                {/* Email & WhatsApp */}
                <div className="grid grid-cols-1 sm:grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#8E9A94] mb-1 uppercase tracking-wider">
                      EMAIL ID *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="student@college.edu"
                      className={`w-full px-4 py-3 rounded-xl bg-[#07100B] border text-[#F4F5F3] focus:outline-none ${
                        errors.email ? 'border-red-500' : 'border-[#38E39A]/20 focus:border-[#38E39A]'
                      }`}
                    />
                    {errors.email && <span className="text-[10px] text-red-400 mt-1 block">{errors.email}</span>}
                  </div>

                  <div>
                    <label className="block text-[#8E9A94] mb-1 uppercase tracking-wider">
                      WHATSAPP NUMBER *
                    </label>
                    <input
                      type="tel"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      placeholder="+91 9876543210"
                      className={`w-full px-4 py-3 rounded-xl bg-[#07100B] border text-[#F4F5F3] focus:outline-none ${
                        errors.whatsapp ? 'border-red-500' : 'border-[#38E39A]/20 focus:border-[#38E39A]'
                      }`}
                    />
                    {errors.whatsapp && <span className="text-[10px] text-red-400 mt-1 block">{errors.whatsapp}</span>}
                  </div>
                </div>

                {/* Alternate Number & Gender */}
                <div className="grid grid-cols-1 sm:grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#8E9A94] mb-1 uppercase tracking-wider">
                      ALTERNATE NUMBER
                    </label>
                    <input
                      type="tel"
                      name="altPhone"
                      value={formData.altPhone}
                      onChange={handleChange}
                      placeholder="Alternate Contact"
                      className="w-full px-4 py-3 rounded-xl bg-[#07100B] border border-[#38E39A]/20 text-[#F4F5F3] focus:outline-none focus:border-[#38E39A]"
                    />
                  </div>

                  <div>
                    <label className="block text-[#8E9A94] mb-1 uppercase tracking-wider">
                      GENDER
                    </label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#07100B] border border-[#38E39A]/20 text-[#F4F5F3] focus:outline-none focus:border-[#38E39A]"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                {/* College & Department */}
                <div className="grid grid-cols-1 sm:grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#8E9A94] mb-1 uppercase tracking-wider">
                      COLLEGE / INSTITUTION *
                    </label>
                    <input
                      type="text"
                      name="college"
                      value={formData.college}
                      onChange={handleChange}
                      placeholder="e.g. KPRIET"
                      className={`w-full px-4 py-3 rounded-xl bg-[#07100B] border text-[#F4F5F3] focus:outline-none ${
                        errors.college ? 'border-red-500' : 'border-[#38E39A]/20 focus:border-[#38E39A]'
                      }`}
                    />
                    {errors.college && <span className="text-[10px] text-red-400 mt-1 block">{errors.college}</span>}
                  </div>

                  <div>
                    <label className="block text-[#8E9A94] mb-1 uppercase tracking-wider">
                      DEPARTMENT *
                    </label>
                    <input
                      type="text"
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      placeholder="e.g. CSE / ECE"
                      className={`w-full px-4 py-3 rounded-xl bg-[#07100B] border text-[#F4F5F3] focus:outline-none ${
                        errors.department ? 'border-red-500' : 'border-[#38E39A]/20 focus:border-[#38E39A]'
                      }`}
                    />
                    {errors.department && <span className="text-[10px] text-red-400 mt-1 block">{errors.department}</span>}
                  </div>
                </div>

                {/* District & Pincode */}
                <div className="grid grid-cols-1 sm:grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#8E9A94] mb-1 uppercase tracking-wider">
                      DISTRICT
                    </label>
                    <input
                      type="text"
                      name="district"
                      value={formData.district}
                      onChange={handleChange}
                      placeholder="Coimbatore"
                      className="w-full px-4 py-3 rounded-xl bg-[#07100B] border border-[#38E39A]/20 text-[#F4F5F3] focus:outline-none focus:border-[#38E39A]"
                    />
                  </div>

                  <div>
                    <label className="block text-[#8E9A94] mb-1 uppercase tracking-wider">
                      PINCODE
                    </label>
                    <input
                      type="text"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                      placeholder="641048"
                      className="w-full px-4 py-3 rounded-xl bg-[#07100B] border border-[#38E39A]/20 text-[#F4F5F3] focus:outline-none focus:border-[#38E39A]"
                    />
                  </div>
                </div>

                {/* KPRIET Referral */}
                <div className="grid grid-cols-1 sm:grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#8E9A94] mb-1 uppercase tracking-wider">
                      REFERRED BY KPRIET STUDENT?
                    </label>
                    <select
                      name="referred"
                      value={formData.referred}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#07100B] border border-[#38E39A]/20 text-[#F4F5F3] focus:outline-none focus:border-[#38E39A]"
                    >
                      <option value="No">No</option>
                      <option value="Yes">Yes</option>
                    </select>
                  </div>

                  {formData.referred === 'Yes' && (
                    <div>
                      <label className="block text-[#8E9A94] mb-1 uppercase tracking-wider">
                        REFERRER'S ROLL NO. *
                      </label>
                      <input
                        type="text"
                        name="referrerRollNo"
                        value={formData.referrerRollNo}
                        onChange={handleChange}
                        placeholder="Roll Number"
                        className={`w-full px-4 py-3 rounded-xl bg-[#07100B] border text-[#F4F5F3] focus:outline-none ${
                          errors.referrerRollNo ? 'border-red-500' : 'border-[#38E39A]/20 focus:border-[#38E39A]'
                        }`}
                      />
                      {errors.referrerRollNo && <span className="text-[10px] text-red-400 mt-1 block">{errors.referrerRollNo}</span>}
                    </div>
                  )}
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="btn-timeline-glow w-full py-4 rounded-xl font-mono text-xs font-bold text-[#F4F5F3] shadow-emerald-glow flex items-center justify-center gap-2"
                  >
                    <span>REGISTER NOW</span>
                    <ArrowRight className="w-4 h-4 text-[#38E39A]" />
                  </button>
                </div>

              </form>
            </div>
          ) : (
            /* SUCCESS CONFIRMATION RECEIPT */
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-[#16A66A]/20 border-2 border-[#38E39A] flex items-center justify-center text-[#38E39A] mx-auto mb-4 animate-bounce">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <span className="font-mono text-xs text-[#B99A45] font-bold tracking-[0.3em] uppercase block mb-1">
                VARIANT ACCEPTED
              </span>

              <h2 className="font-display font-extrabold text-3xl text-[#F4F5F3] mb-2">
                YOU ARE NOW PART OF THE <span className="text-[#38E39A]">TIMELINE.</span>
              </h2>

              <p className="text-xs text-[#8E9A94] font-mono mb-6 max-w-sm mx-auto">
                Your registration for IGNITRRON'26 Day 01 Marvel Quiz is verified.
              </p>

              <div className="p-4 rounded-2xl glass-panel border-[#38E39A]/30 bg-[#07100B]/90 text-left font-mono text-xs space-y-2 mb-6">
                <div className="flex justify-between border-b border-[#38E39A]/10 pb-2">
                  <span className="text-[#8E9A94]">EVENT:</span>
                  <span className="text-[#38E39A] font-bold">IGNITRRON'26 — MARVEL QUIZ (DAY 01)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8E9A94]">PARTICIPANT:</span>
                  <span className="text-[#F4F5F3] font-semibold">{formData.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8E9A94]">COLLEGE:</span>
                  <span className="text-[#F4F5F3]">{formData.college}</span>
                </div>
              </div>

              <button
                onClick={handleResetModal}
                className="btn-timeline-glow px-8 py-3 rounded-xl font-mono text-xs font-bold text-[#F4F5F3]"
              >
                RETURN TO EVENT PORTAL
              </button>
            </div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
