import Head from "next/head";

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#000",
  minHeight: "100vh",
  padding: "20px",
  color: "white",
};

const titleStyle = {
  fontSize: "1.5em",
  marginBottom: "10px",
};

const cardContainerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  maxWidth: "800px",
};

const cardStyle = {
  backgroundColor: "#1a1a1a",
  padding: "10px",
  margin: "5px",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
  color: "white",
  width: "100%",
  maxWidth: "700px",
  boxSizing: "border-box",
};

const projectTitleStyle = {
  fontSize: "1em",
  marginBottom: "5px",
};

const projectDescriptionStyle = {
  fontSize: "0.9em",
  marginBottom: "5px",
};

const tagsStyle = {
  display: "flex",
  flexWrap: "wrap",
};

const tagStyle = {
  backgroundColor: "#333",
  color: "#fff",
  padding: "2px 6px",
  margin: "2px",
  borderRadius: "3px",
  fontSize: "0.8em",
};

const projects = [
  {
    title: "Ruby",
    description:
      "A Google Chrome extension which helps Cantonese-speaking elders navigate the English web via queries to a fine-tuned Whisper and LLaMa model.",
    tags: ["JavaScript", "React", "React Router", "Axios", "YouTube API"],
  },
  {
    title: "Ariel Chat",
    description:
      "Augmented LLaMA-3 with AWQ and RAG (dragon multiturn encoder/tokenizer) to develop a Turbo Tax-esque interface for users to fill out a DCSA 147.",
    tags: ["Gatsby", "Sublime Text", "Atom", "VS Code", "iTerm2", "Hyper"],
  },
  {
    title: "ScribeAI",
    description:
      "[1st Place Overall @ HackGT X] A HIPAA-Compliant interface converting physical healthcare documents into Electronic Health Records with OCR and GPT-3.5.",
    tags: ["Python", "MySQL", "Flask", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "NE-GraphSAGE: Memory Efficient GNN Training with Neighbor Ensemble",
    description:
      "Integrating neighbor ensemble into GraphSAGE with novel dropout strategies and MLP distributions to achieve higher accuracy.",
    tags: ["Python", "MySQL", "Flask", "HTML", "CSS", "JavaScript"],
  },
];

function ProjectCard({ title, description, tags }) {
  return (
    <div style={cardStyle}>
      <h2 style={projectTitleStyle}>{title}</h2>
      <p style={projectDescriptionStyle}>{description}</p>
      <div style={tagsStyle}>
        {tags.map((tag) => (
          <span key={tag} style={tagStyle}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <div style={containerStyle}>
      <Head>
        <title>Projects</title>
      </Head>
      <h1 style={titleStyle}>Other Projects</h1>
      <div style={cardContainerStyle}>
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            tags={project.tags}
          />
        ))}
      </div>
    </div>
  );
}
