import React from 'react';
import { Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-glass bg-background py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 md:gap-8">
        {/* Col 1 */}
        <div className="space-y-4">
          <a href="#" className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-chrome shadow-[0_0_8px_var(--chrome)]" />
            <span className="font-syne font-bold text-xl tracking-tight text-text">
              LANCER <span className="text-chrome">STUDIO</span>
            </span>
          </a>
          <p className="text-muted text-sm font-dm-sans">
            Built by Founders, for Founders.
          </p>
          <div className="text-[10px] uppercase tracking-widest text-muted flex items-center gap-2">
            <span>📍 Tamil Nadu, India</span>
          </div>
        </div>

        {/* Col 2 */}
        <div className="md:text-center space-y-4">
          <h4 className="text-[10px] uppercase tracking-[0.2em] text-accent font-syne font-bold">Services</h4>
          <div className="space-y-2 text-sm text-muted font-dm-sans">
            <p className="hover:text-chrome cursor-pointer transition-colors">Agentic AI</p>
            <p className="hover:text-chrome cursor-pointer transition-colors">Web Platforms</p>
            <p className="hover:text-chrome cursor-pointer transition-colors">Mobile Apps</p>
            <p className="hover:text-chrome cursor-pointer transition-colors">Workflow Automation</p>
            <p className="hover:text-chrome cursor-pointer transition-colors">Technical Audits</p>
          </div>
        </div>

        {/* Col 3 */}
        <div className="md:text-right space-y-4">
          <h4 className="text-[10px] uppercase tracking-[0.2em] text-accent font-syne font-bold">Contact</h4>
          <a href="mailto:1lancerstudio@gmail.com" className="block text-sm text-chrome hover:underline font-dm-sans">
            1lancerstudio@gmail.com
          </a>
          <div className="flex md:justify-end gap-4 mt-6">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg border border-glass hover:bg-glass transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="https://www.instagram.com/lancer._studios?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg border border-glass hover:bg-glass transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="https://wa.me/918056139738" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg border border-glass hover:bg-glass transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-glass flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-muted font-syne">
        <p>© 2026 Lancer Studio. All rights reserved.</p>
        <p className="text-chrome">Accuracy Over Agreement.</p>
      </div>
    </footer>
  );
};

export default Footer;
