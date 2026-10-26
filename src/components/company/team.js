export const TEAM = [
    {
        name: 'Sean Dinwiddie',
        role: 'Founder & CEO',
        bio: 'Sean brings three decades of engineering experience and has shipped games including <em>Call of Duty: Modern Warfare: Mobilized</em>, <em>Spider-Man</em>, and <em>X-Men</em>. At ForbocAI, he leads product strategy and the NPC Protocol, helping studios integrate AI-driven characters while retaining control over gameplay.',
        href: 'https://www.linkedin.com/in/seandinwiddie/',
    },
    {
        name: 'Antara Bhavsar',
        role: 'Co-founder & CTO',
        bio: 'Antara leads engineering at ForbocAI, overseeing Servitor’s model training, inference runtime, and TypeScript and Unreal Engine 5 SDKs. Her work enables studios to integrate character dialogue and action proposals into games. Previously, she built production AI and backend services at Amazon and Motorola.',
        href: 'https://www.linkedin.com/in/antara-bhavsar-74b7a4187/',
    },
    {
        name: 'Tiernan O’Malley',
        role: 'Head of Partnerships',
        bio: 'Tiernan leads partnerships at ForbocAI, drawing on experience across cybersecurity and technology at Framework Security, Hays, and IDMWORKS. She builds relationships with game studios and industry partners to develop commercial opportunities and drive adoption.',
        href: 'https://www.linkedin.com/in/tiernan-o-malley-219591170/',
    },
];

export const initialsOf = (name) => name.split(/\s+/).map((part) => part[0]).join('').slice(0, 2);
