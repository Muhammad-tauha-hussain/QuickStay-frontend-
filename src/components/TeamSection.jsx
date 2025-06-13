import React from "react";
import { assets } from "../assets/assets";


const team = [
  { name: "Ayesha Khan", role: "CEO & Founder", img: assets.member1 },
  { name: "Ali Raza", role: "CTO", img: assets.member2 },
  { name: "Fatima Tariq", role: "Marketing Head", img: assets.member3 },
  { name: "Ahmed Bilal", role: "UI/UX Designer", img: assets.member4 },
];

const TeamSection = () => (
  <section className="py-16 bg-white">
    <h2 className="text-3xl font-semibold text-center mb-10">Meet Our Team</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-16 lg:px-24 xl:px-32">
      {team.map((member, i) => (
        <div key={i} className="text-center">
          <img
            src={member.img}
            alt={member.name}
            className="w-28 h-28 object-cover rounded-full mx-auto mb-4 shadow-lg"
          />
          <h3 className="font-semibold text-lg">{member.name}</h3>
          <p className="text-gray-500 text-sm">{member.role}</p>
        </div>
      ))}
    </div>
  </section>
);

export default TeamSection;