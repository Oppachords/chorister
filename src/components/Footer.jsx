// src/components/Footer.jsx
const Footer = () => (
  <footer className="bg-gray-900 text-white">
    <div className="bg-brand-primary/10 py-12">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8 text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start space-x-4">
          <span> Main Diosese P.O.Box 24827, </span>
          <img src="/assets/images/map-icon.png" className="w-8" alt="Map" />
          <span>Kampala, Uganda</span>
        </div>
        <div className="flex items-center justify-center md:justify-start space-x-4 border-y md:border-y-0 md:border-x border-gray-700 py-4 md:py-0">
          <img src="/assets/images/call-icon.png" className="w-8" alt="Call" />
          <div className="flex flex-col">
            <a href="tel:+256776574415" className="hover:text-brand-primary">(+256) 776574415</a>
            <a href="tel:+256772454941" className="hover:text-brand-primary">(+256) 772454941</a>
          </div>
        </div>
        <div className="flex items-center justify-center md:justify-start space-x-4">
          <img src="/assets/images/mail-icon.png" className="w-8" alt="Mail" />
          <a href="mailto:ugandachorister@gmail.com" className="hover:text-brand-primary">ugandachorister@gmail.com</a>
        </div>
      </div>
    </div>
    <div className="py-6 text-center border-t border-gray-800 text-gray-500 text-sm">
      <p>Copyright 2023 All Rights Reserved. Choristers Association Uganda Limited</p>
    </div>
  </footer>
);
export default Footer;