import React from 'react';

const About = () => {
  return (
    <div className="about-page p-6 max-w-6xl mx-auto">
      <section className="hero bg-gray-800 rounded-lg p-8 mb-8">
        <h1 className="text-4xl font-bold mb-4">About Recipe Hub</h1>
        <p className="text-xl text-gray-300">
          Your culinary companion for discovering and sharing great recipes
        </p>
      </section>

      <section className="mission mb-12">
        <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-300 leading-relaxed">
          Connecting food enthusiasts worldwide to share their culinary creations
          and discover new flavors through our community-driven platform.
        </p>
      </section>

      <section className="team mb-12">
        <h2 className="text-3xl font-semibold mb-6">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: 'Chef Alice', role: 'Head of Recipes', bio: '...' },
            { name: 'Developer Bob', role: 'Tech Lead', bio: '...' },
            { name: 'Designer Carol', role: 'UI Expert', bio: '...' }
          ].map((member) => (
            <div key={member.name} className="bg-gray-800 p-6 rounded-lg">
              <img 
                src="/src/assets/team-member.jpg" 
                alt={member.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-400 mb-2">{member.role}</p>
              <p className="text-gray-300 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="stats bg-gray-800 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">By the Numbers</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatItem label="Recipes Shared" value="1,000+" />
          <StatItem label="Active Users" value="500+" />
          <StatItem label="Countries" value="50+" />
          <StatItem label="Team Members" value="10+" />
        </div>
      </section>
    </div>
  );
};

const StatItem = ({ label, value }) => (
  <div className="text-center p-4">
    <div className="text-3xl font-bold mb-2">{value}</div>
    <div className="text-gray-400 text-sm">{label}</div>
  </div>
);

export default About;
