"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Search, ChevronDown } from 'lucide-react';

export interface CountryCode {
  code: string;
  name: string;
  iso: string;
}

const allCountries: CountryCode[] = [
  { code: '+91', name: 'India', iso: 'IN' },
  { code: '+1', name: 'United States', iso: 'US' },
  { code: '+44', name: 'United Kingdom', iso: 'GB' },
  { code: '+1', name: 'Canada', iso: 'CA' },
  { code: '+61', name: 'Australia', iso: 'AU' },
  { code: '+65', name: 'Singapore', iso: 'SG' },
  { code: '+971', name: 'United Arab Emirates', iso: 'AE' },
  { code: '+49', name: 'Germany', iso: 'DE' },
  { code: '+33', name: 'France', iso: 'FR' },
  { code: '+81', name: 'Japan', iso: 'JP' },
  { code: '+82', name: 'South Korea', iso: 'KR' },
  { code: '+86', name: 'China', iso: 'CN' },
  { code: '+92', name: 'Pakistan', iso: 'PK' },
  { code: '+94', name: 'Sri Lanka', iso: 'LK' },
  { code: '+880', name: 'Bangladesh', iso: 'BD' },
  { code: '+977', name: 'Nepal', iso: 'NP' },
  { code: '+60', name: 'Malaysia', iso: 'MY' },
  { code: '+62', name: 'Indonesia', iso: 'ID' },
  { code: '+66', name: 'Thailand', iso: 'TH' },
  { code: '+63', name: 'Philippines', iso: 'PH' },
  { code: '+31', name: 'Netherlands', iso: 'NL' },
  { code: '+34', name: 'Spain', iso: 'ES' },
  { code: '+39', name: 'Italy', iso: 'IT' },
  { code: '+41', name: 'Switzerland', iso: 'CH' },
  { code: '+43', name: 'Austria', iso: 'AT' },
  { code: '+45', name: 'Denmark', iso: 'DK' },
  { code: '+46', name: 'Sweden', iso: 'SE' },
  { code: '+47', name: 'Norway', iso: 'NO' },
  { code: '+48', name: 'Poland', iso: 'PL' },
  { code: '+351', name: 'Portugal', iso: 'PT' },
  { code: '+353', name: 'Ireland', iso: 'IE' },
  { code: '+358', name: 'Finland', iso: 'FI' },
  { code: '+20', name: 'Egypt', iso: 'EG' },
  { code: '+234', name: 'Nigeria', iso: 'NG' },
  { code: '+254', name: 'Kenya', iso: 'KE' },
  { code: '+27', name: 'South Africa', iso: 'ZA' },
  { code: '+55', name: 'Brazil', iso: 'BR' },
  { code: '+54', name: 'Argentina', iso: 'AR' },
  { code: '+52', name: 'Mexico', iso: 'MX' },
  { code: '+57', name: 'Colombia', iso: 'CO' },
  { code: '+56', name: 'Chile', iso: 'CL' },
  { code: '+966', name: 'Saudi Arabia', iso: 'SA' },
  { code: '+974', name: 'Qatar', iso: 'QA' },
  { code: '+965', name: 'Kuwait', iso: 'KW' },
  { code: '+968', name: 'Oman', iso: 'OM' },
  { code: '+973', name: 'Bahrain', iso: 'BH' },
  { code: '+98', name: 'Iran', iso: 'IR' },
  { code: '+90', name: 'Turkey', iso: 'TR' },
  { code: '+7', name: 'Russia', iso: 'RU' },
  { code: '+7', name: 'Kazakhstan', iso: 'KZ' },
  { code: '+380', name: 'Ukraine', iso: 'UA' },
  { code: '+359', name: 'Bulgaria', iso: 'BG' },
  { code: '+40', name: 'Romania', iso: 'RO' },
  { code: '+36', name: 'Hungary', iso: 'HU' },
  { code: '+420', name: 'Czech Republic', iso: 'CZ' },
  { code: '+30', name: 'Greece', iso: 'GR' },
  { code: '+352', name: 'Luxembourg', iso: 'LU' },
  { code: '+356', name: 'Malta', iso: 'MT' },
  { code: '+357', name: 'Cyprus', iso: 'CY' },
  { code: '+212', name: 'Morocco', iso: 'MA' },
  { code: '+213', name: 'Algeria', iso: 'DZ' },
  { code: '+216', name: 'Tunisia', iso: 'TN' },
  { code: '+218', name: 'Libya', iso: 'LY' },
  { code: '+249', name: 'Sudan', iso: 'SD' },
  { code: '+251', name: 'Ethiopia', iso: 'ET' },
  { code: '+255', name: 'Tanzania', iso: 'TZ' },
  { code: '+256', name: 'Uganda', iso: 'UG' },
  { code: '+233', name: 'Ghana', iso: 'GH' },
  { code: '+225', name: 'Ivory Coast', iso: 'CI' },
  { code: '+221', name: 'Senegal', iso: 'SN' },
  { code: '+263', name: 'Zimbabwe', iso: 'ZW' },
  { code: '+260', name: 'Zambia', iso: 'ZM' },
  { code: '+264', name: 'Namibia', iso: 'NA' },
  { code: '+267', name: 'Botswana', iso: 'BW' },
  { code: '+230', name: 'Mauritius', iso: 'MU' },
];

interface CountryCodeSelectProps {
  value: string;
  onChange: (value: string) => void;
}

const CountryCodeSelect: React.FC<CountryCodeSelectProps> = ({ value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedCountry = allCountries.find(c => c.code === value) || allCountries[0];

  const filteredCountries = allCountries.filter(c => 
    c.name.toLowerCase().includes(search.toLowerCase()) || 
    c.code.includes(search)
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-background/50 border border-border rounded-xl px-3 py-3 text-text text-xs focus:border-chrome transition-colors min-w-[90px] h-full"
      >
        <span className="font-syne">{selectedCountry.iso}</span>
        <span className="text-muted">{selectedCountry.code}</span>
        <ChevronDown size={14} className={cn("text-muted transition-transform", isOpen && "rotate-180")} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-64 glass-card rounded-xl border border-glass shadow-2xl z-[100] overflow-hidden">
          <div className="p-3 border-b border-glass flex items-center gap-2">
            <Search size={14} className="text-muted" />
            <input 
              autoFocus
              type="text"
              placeholder="Search country..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent border-none outline-none text-xs text-text w-full placeholder:text-muted/50"
            />
          </div>
          <div className="max-h-60 overflow-y-auto custom-scrollbar">
            {filteredCountries.map((c) => (
              <button
                key={`${c.iso}-${c.code}`}
                type="button"
                onClick={() => {
                  onChange(c.code);
                  setIsOpen(false);
                  setSearch('');
                }}
                className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-glass transition-colors text-xs border-b border-glass/5 last:border-none"
              >
                <span className="text-text font-medium">{c.name}</span>
                <span className="text-chrome font-syne">{c.code}</span>
              </button>
            ))}
            {filteredCountries.length === 0 && (
              <div className="px-4 py-6 text-center text-muted text-xs">No results found</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

// Simple CN utility since we don't have clsx/tailwind-merge in scope but we used it elsewhere
function cn(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

export default CountryCodeSelect;
