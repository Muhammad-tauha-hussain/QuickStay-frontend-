import React from 'react';

const features = [
  { icon: "🛏️", title: "Comfortable Stays", desc: "Verified rooms for every budget." },
  { icon: "💳", title: "Secure Booking", desc: "Safe, encrypted transactions." },
  { icon: "⚡", title: "Instant Confirmations", desc: "No waiting — book in seconds." },
  { icon: "📱", title: "Mobile Friendly", desc: "Plan your stay from anywhere." },
];

const FeatureHighlights = () => (
  <section className="py-16 bg-white px-4 md:px-16 lg:px-24 xl:px-32">
    <h2 className="text-3xl font-semibold text-center mb-10">Why Choose Quick Stay?</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {features.map((item, idx) => (
        <div key={idx} className="bg-gray-100 p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-all">
          <div className="text-4xl mb-3">{item.icon}</div>
          <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
          <p className="text-sm text-gray-600">{item.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default FeatureHighlights;