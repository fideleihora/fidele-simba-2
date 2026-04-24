import React from 'react';
import { Store } from '../types';
import { Globe, Camera, Send, Mail, Phone, MapPin, Play } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Footer.css';

interface FooterProps {
  store: Store;
}

const Footer: React.FC<FooterProps> = ({ store }) => {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="logo footer-logo">
            <img src="/assets/SIMBA_LOGO.png" alt="Simba Logo" />
            <div className="logo-text">
              <span className="brand-name">Simba</span>
              <span className="brand-tagline">Supermarket</span>
            </div>
          </div>
          <p className="footer-desc">
            {store.tagline}. Leading the way in retail excellence across Rwanda. Quality, freshness, and value delivered to you.
          </p>
          <div className="social-links">
            <a href="#"><Globe size={20} /></a>
            <a href="#"><Camera size={20} /></a>
            <a href="#"><Send size={20} /></a>
            <a href="#"><Play size={20} /></a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container bottom-content">
          <p>&copy; {new Date().getFullYear()} {store.name}. All rights reserved.</p>
          <div className="payment-methods">
            <span>MOMO</span>
            <span>Visa</span>
            <span>Mastercard</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
