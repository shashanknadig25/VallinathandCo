import React, { useState } from 'react';
import { Phone, Mail, MessageCircle, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const FloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = '919880851333';
  const whatsappUrl = `https://wa.me/${phoneNumber}`;
  const emailAddress = 'Contact@vallinathandco.com';

  const buttons = [
    {
      icon: Phone,
      label: 'Call Us',
      href: `tel:+${phoneNumber}`,
      bgColor: 'bg-green-500 hover:bg-green-600',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      href: whatsappUrl,
      bgColor: 'bg-[#25D366] hover:bg-[#20BA5C]',
    },
    {
      icon: Mail,
      label: 'Email',
      href: `mailto:${emailAddress}`,
      bgColor: 'bg-blue-500 hover:bg-blue-600',
    },
  ];

  return (
    <div className="fixed bottom-8 right-8 z-40 flex flex-col items-end space-y-4">
      {/* Contact Options */}
      <div className={`flex flex-col items-end space-y-4 transition-all duration-300 ${
        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}>
        {buttons.map((button, index) => (
          <a
            key={index}
            href={button.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${button.bgColor} text-white p-4 rounded-full shadow-lg transition-all hover:shadow-xl flex items-center`}
          >
            <span className="mr-2 text-sm font-medium">{button.label}</span>
            <button.icon className="w-5 h-5" />
          </a>
        ))}
      </div>

      {/* Main Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-4 rounded-full shadow-lg transition-all hover:shadow-xl ${
          isOpen 
            ? 'bg-gray-700 hover:bg-gray-800' 
            : 'bg-navy hover:bg-navy-700'
        }`}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </button>
    </div>
  );
};

export default FloatingButton;