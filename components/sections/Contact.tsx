"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionLabel from '../ui/SectionLabel';
import GlowButton from '../ui/GlowButton';

import CountryCodeSelect from '../ui/CountryCodeSelect';

const projectTypes = [
  'Agentic AI System',
  'Web Platform',
  'Mobile App',
  'Workflow Automation',
  'Technical Audit',
  'Visual Design',
  'Social Media',
  'Motion Graphics',
  'Campaign Strategy',
  'Other'
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    countryCode: '+91',
    whatsapp: '',
    projectType: [] as string[],
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'choice'>('idle');

  const toggleProject = (type: string) => {
    setFormData(prev => {
      const isSelected = prev.projectType.includes(type);
      if (isSelected) {
        return { ...prev, projectType: prev.projectType.filter(t => t !== type) };
      } else {
        return { ...prev, projectType: [...prev.projectType, type] };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.projectType.length === 0) {
      alert("Please select at least one project type.");
      return;
    }
    setStatus('choice');
  };

  const sendEmail = () => {
    const subject = `Project Inquiry: ${formData.projectType.join(' / ')} – ${formData.name} / ${formData.company}`;
    const body = `Dear Lancer Studio Team,\n\nMy name is ${formData.name}, and I am writing to you on behalf of ${formData.company}.\n\nI am interested in collaborating with Lancer Studio on a new project. Below are the preliminary details of what we are looking for:\n\nProject Interest: ${formData.projectType.join(' / ')}\nThe Current Bottleneck: ${formData.message}\nPrimary Goal: To streamline and automate operations for ${formData.company}.\n\nI would appreciate it if we could schedule a brief consultation to discuss how your team can help us streamline this process. Please let me know your availability for a call or if you require any further documentation from our side.\n\nContact Details:\nEmail: ${formData.email}\nWhatsApp: ${formData.countryCode} ${formData.whatsapp}\n\nLooking forward to your response.\n\nBest regards,\n\n${formData.name}`;
    
    window.location.href = `mailto:1lancerstudio@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    resetForm();
  };

  const sendWhatsApp = () => {
    const text = `Hi Lancer Studio Team,\nMy name is ${formData.name} from ${formData.company}. I’m reaching out because I’m interested in your services for:\n\n🚀 Project: ${formData.projectType.join(' / ')}\n⚙️ The Problem: ${formData.message}\n\nI’d like to discuss how you can help us automate this bottleneck. Looking forward to hearing from you!\n\nEmail: ${formData.email}\nWhatsApp: ${formData.countryCode} ${formData.whatsapp}`;
    
    window.open(`https://wa.me/918056139738?text=${encodeURIComponent(text)}`, '_blank');
    resetForm();
  };

  const resetForm = () => {
    setFormData({ name: '', company: '', email: '', countryCode: '+91', whatsapp: '', projectType: [], message: '' });
    setStatus('idle');
  };

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto text-center">
        <SectionLabel text="START A PROJECT" />
        <h2 className="text-4xl md:text-5xl font-bold font-syne mt-6 text-text">
          Ready to<br />
          <span className="chrome-text italic">Automate Everything?</span>
        </h2>
        <p className="text-muted text-sm mt-4 font-dm-sans">
          Tell us what you&apos;re building. We&apos;ll tell you how to make it autonomous.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 glass-card rounded-3xl p-8 md:p-12 text-left relative overflow-hidden min-h-[500px] flex flex-col justify-center"
        >
          {status !== 'choice' ? (
            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-muted font-syne">Full Name</label>
                  <input 
                    required
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-text text-sm focus:border-chrome focus:outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-muted font-syne">Company / Brand Name</label>
                  <input 
                    required
                    type="text" 
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-text text-sm focus:border-chrome focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-muted font-syne">Email Address</label>
                  <input 
                    required
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-text text-sm focus:border-chrome focus:outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-muted font-syne">WhatsApp Number</label>
                  <div className="flex gap-2">
                    <CountryCodeSelect 
                      value={formData.countryCode}
                      onChange={(val) => setFormData({...formData, countryCode: val})}
                    />
                    <input 
                      required
                      type="tel" 
                      placeholder="XXXXX XXXXX"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                      className="flex-grow bg-background/50 border border-border rounded-xl px-4 py-3 text-text text-sm focus:border-chrome focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-widest text-muted font-syne">Project Type (Select Multiple)</label>
                <div className="flex flex-wrap gap-3">
                  {projectTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => toggleProject(type)}
                      className={`px-4 py-2 rounded-full text-xs font-syne border transition-all duration-300 ${
                        formData.projectType.includes(type)
                          ? "bg-chrome text-background border-chrome shadow-[0_0_15px_rgba(200,208,224,0.3)]"
                          : "bg-transparent border-border text-muted hover:border-chrome/50"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-muted font-syne">Tell us about your bottleneck</label>
                <textarea 
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Describe the manual process you want to automate..."
                  className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-text text-sm focus:border-chrome focus:outline-none transition-colors resize-none"
                />
              </div>

              <GlowButton 
                type="submit"
                label="Submit Project Brief →" 
                variant="primary" 
                className="w-full"
              />
            </form>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center space-y-10 relative z-10 py-10"
            >
              <div className="space-y-2">
                <h3 className="text-2xl font-syne font-bold text-text">Choose Your Path</h3>
                <p className="text-muted text-sm font-dm-sans">How would you like to continue your brief?</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 max-w-lg mx-auto">
                <button
                  onClick={sendEmail}
                  className="group p-8 rounded-2xl border border-glass bg-glass hover:border-chrome hover:bg-chrome/5 transition-all duration-500 text-center space-y-4"
                >
                  <div className="w-12 h-12 bg-background border border-glass rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                    <span className="text-2xl">📧</span>
                  </div>
                  <div>
                    <div className="text-chrome font-syne font-bold text-lg">Email Brief</div>
                    <p className="text-[10px] text-muted uppercase tracking-widest mt-1">Official Inquiry</p>
                  </div>
                </button>

                <button
                  onClick={sendWhatsApp}
                  className="group p-8 rounded-2xl border border-glass bg-glass hover:border-chrome hover:bg-chrome/5 transition-all duration-500 text-center space-y-4"
                >
                  <div className="w-12 h-12 bg-background border border-glass rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                    <span className="text-2xl">💬</span>
                  </div>
                  <div>
                    <div className="text-chrome font-syne font-bold text-lg">WhatsApp Brief</div>
                    <p className="text-[10px] text-muted uppercase tracking-widest mt-1">Fast Track Chat</p>
                  </div>
                </button>
              </div>

              <button 
                onClick={() => setStatus('idle')}
                className="text-[10px] uppercase tracking-[0.2em] text-muted hover:text-chrome transition-colors font-syne"
              >
                ← Back to Edit
              </button>
            </motion.div>
          )}

          {/* Decorative background circle */}
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-chrome opacity-[0.05] blur-[80px] rounded-full pointer-events-none" />
        </motion.div>

        <p className="mt-12 text-sm text-muted">
          Or reach us directly: <a href="mailto:1lancerstudio@gmail.com" className="text-chrome hover:underline">1lancerstudio@gmail.com</a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
