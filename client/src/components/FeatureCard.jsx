import React from 'react';

function FeatureCard({ icon: Icon, text }) {
  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      {/* Icon */}
      <Icon className="text-2xl text-green-900 mb-2" />
      {/* Text */}
      <span className="text-sm font-semibold text-green-900">{text}</span>
    </div>
  );
}

export default FeatureCard;
