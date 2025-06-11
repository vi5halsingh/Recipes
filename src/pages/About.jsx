import React, { useContext } from 'react';
import { recipecontext } from '../context/RecipeContext';
import { NavLink } from 'react-router-dom';

const About = () => {
  const { data }=useContext(recipecontext)
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
            { name: 'Chef Dhanesh', role: 'Head of Recipes', bio: 'Cook🙂 - i cooked this everthing', link:"https://www.instagram.com/master.dhanesh?utm_source=ig_web_button_share_sheet&igsh=MXRkeG5uamJkZ2ZhZA==" },
            { name: 'Developer Vishal', role: 'Tech Lead', bio: 'I M a Developer', link:"https://www.instagram.com/0._vishal?igsh=MTgwaWtkajd5ZHRnNQ%3D%3D" },
            { name: 'Designer Changu', role: 'UI Expert', bio: 'I can design anything', link:"https://www.instagram.com/_0.ch1_?utm_source=ig_web_button_share_sheet&igsh=MTd0bWtwNjEwMHBmMQ==" }
          ].map((member) => (
            <NavLink to={member.link} target='_blank' key={member.name} className="bg-gray-800 p-6 rounded-lg">
              <img 
                src="src/assets/seriyans.png" 
                alt={member.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-400 mb-2">{member.role}</p>
              <p className="text-gray-300 text-sm">{member.bio}</p>
            </NavLink>
          ))}
        </div>
      </section>

      <section className="stats bg-gray-800 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">By the Numbers</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatItem label="Recipes Shared" value={data.length + '+'}/>
          <StatItem label="Active Users" value= {data.length + 5} />
          <StatItem label="Countries" value="2+" />
          <StatItem label="Team Members" value="5+" />
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
