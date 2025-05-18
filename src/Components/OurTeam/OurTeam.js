import React from "react";
import "./OurTeam.css";

const teamMembers = [
    {
        name: "Chaitanya Bandekar",
        title: "Founder & CEO",
        image: "/Images/homeImages/ceo.jpg",
    },
    {
        name: "Pranav Kamat",
        title: "Founder & CTO",
        image: "/Images/homeImages/cto.jpg",
    },
    {
        name: "Shaunak Shet",
        title: "Founder & COO",
        image: "/Images/homeImages/coo.jpg",
    },
    {
        name: "Sagar Gawas",
        title: "Creative Director - Video & Content",
        image: "/Images/homeImages/content.jpg",
    },
    {
        name: "Digvesh Parab",
        title: "Development & Relation Head",
        image: "/Images/homeImages/sde2.jpg",
    },
    {
        name: "Kaushik Bhandari",
        title: "Editor-in-Chief",
        image: "/Images/homeImages/editor.jpg",
    },
];

const OurTeam = () => {
    return (
        <section className="team-section">
            <h2 className="team-heading">Meet Our Team</h2>
            <p className="team-description">
                At Tree Circuit, we're a team of passionate technologists and creators dedicated to building amazing digital experiences. Together, we turn ideas into reality.
            </p>
            <div className="team-grid">
                {teamMembers.map((member, index) => (
                    <div className="team-card" key={index}>
                        <div className="team-image-wrapper">
                            <img
                                src={member.image}
                                alt={member.name}
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = "/Images/homeImages/default.jpg";
                                }}
                            />
                        </div>
                        <div className="team-info">
                            <h3>{member.name}</h3>
                            <p>{member.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OurTeam;