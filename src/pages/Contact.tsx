import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = {
      name: form.name.value,
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value,
    };

    // Create Gmail mailto link with form data
    const mailtoLink = `mailto:Contact@vallinathandco.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    // Open Gmail in a new window
    window.location.href = mailtoLink;
  };

  return (
    <div className="pt-20">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="section-title text-center">Contact Us</h1>
          <p className="section-subtitle text-center">
            Get in touch with our expert team for any queries
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-navy mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-navy"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-navy"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-navy"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-navy"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-navy mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-navy mr-4 mt-1" />
                    <div>
                      <h3 className="font-medium text-gray-900">Phone</h3>
                      <p className="text-gray-600">+91 9880851333</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-navy mr-4 mt-1" />
                    <div>
                      <h3 className="font-medium text-gray-900">Email</h3>
                      <p className="text-gray-600">Contact@vallinathandco.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-navy mr-4 mt-1" />
                    <div>
                      <h3 className="font-medium text-gray-900">Office Address</h3>
                      <p className="text-gray-600">
                        No 64, Dr Rajkumar Road<br />
                        Rajajinagar<br />
                        Bengaluru, Karnataka<br />
                        India 560010
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="w-6 h-6 text-navy mr-4 mt-1" />
                    <div>
                      <h3 className="font-medium text-gray-900">Business Hours</h3>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 2:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-navy mb-6">Location</h2>
                <div className="h-[400px] rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.5545373562547!2d77.55471937507825!3d13.00273758731744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d8c1b11e0f7%3A0x7c54e99aeaa4b979!2sVallinath%20%26%20Co!5e0!3m2!1sen!2sin!4v1710414433099!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;