"use client";

import Head from "next/head";
import { useState } from "react";

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
  boxSizing: "border-box",
};

const cardContainerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  width: "80%",
  maxWidth: "550px",
  position: "relative",
};

const timelineStyle = {
  position: "absolute",
  left: "0px",
  top: "0",
  bottom: "0",
  width: "2px",
  backgroundColor: "#555",
  zIndex: "0",
};

const cardWrapperStyle = {
  display: "flex",
  alignItems: "center",
  width: "100%",
  marginBottom: "30px", // Increase vertical spacing
  position: "relative",
  zIndex: "1",
};

const cardStyle = {
  padding: "8px",
  margin: "5px",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
  color: "white",
  width: "100%",
  maxWidth: "600px",
  boxSizing: "border-box",
  transition: "transform 0.3s ease-in-out",
  marginLeft: "20px", // Move the card slightly to the right
};

const cardHoverStyle = {
  transform: "scale(1.05)",
};

const projectTitleStyle = {
  fontSize: "1em",
  marginBottom: "5px",
};

const projectDescriptionStyle = {
  fontSize: "0.8em",
  marginBottom: "5px",
  color: "#d3d3d3", // Very light gray
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
  fontSize: "0.7em",
};

const projects = [
  {
    title: "Ruby",
    description:
      "A Google Chrome extension assisting Cantonese elders with navigating the English web via queries to a fine-tuned Whisper and LLaMa model.",
    tags: ["PyTorch", "PostgreSQL", "LoRA", "Unsloth", "Javascript", "Docker"],
  },
  {
    title: "Ariel Chat",
    description:
      "Augmented LLaMA-3 with AWQ and RAG (dragon multiturn encoder/tokenizer) for Turbo Tax-esque interface for filling out a DCSA 147.",
    tags: [
      "Pytorch",
      "PostgreSQL",
      "Docker",
      "Huggingface",
      "NATS",
      "Protobuffs",
      "React",
    ],
  },
  {
    title: "ScribeAI",
    description:
      "A HIPAA-Compliant interface converting physical healthcare documents into Electronic Health Records with OCR and GPT-3.5.",
    tags: [
      "NextJS",
      "PostgreSQL",
      "Spring",
      "Docker",
      "Kubernetes",
      "NodeJS",
      "Tensorflow",
    ],
  },
  {
    title: "Memory-Efficient GNN Training with Neighbor Ensemble",
    description:
      "Integrating neighbor ensemble into GraphSAGE with novel dropout strategies and MLP distributions to achieve higher accuracy.",
    tags: ["PyTorch", "Optuna", "Docker", "DGL", "CUDA"],
  },
  {
    title: "Personal Website",
    description:
      "The absolutely sexy website you are currently viewing. Built with crazy amounts of front-end dev from scratch, deployed on Vercel.",
    tags: ["NextJS", "TailwindCSS", "GraphQL", "PostgreSQL"],
  },
  {
    title: "Association of Glyphosate and AMPA with Hormonal Markers",
    description:
      "Assessed relationships between glyphosate, AMPA concentrations and biomarkers via Spearman's, ANOVA, and Chi-Squared.",
    tags: ["R", "Javascript", "Python"],
  },
  {
    title: "Generative Approach to Automation of Deep Learning Applications",
    description:
      "Developed a training pipeline for ResNet50 using TensorFlow Lite, enabling inference on mobile devices through cloud integration.",
    tags: [
      "Tensorflow Lite",
      "AWS EC2",
      "Flask",
      "MySQL",
      "REST",
      "Andriod SDK",
    ],
  },
];

function ProjectCard({ title, description, tags }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      style={cardWrapperStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div style={{ ...cardStyle, ...(hover ? cardHoverStyle : {}) }}>
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
    </div>
  );
}

export default function Projects() {
  return (
    <div style={containerStyle}>
      <Head>
        <title>Projects</title>
      </Head>
      <h1 style={titleStyle}>Projects</h1>
      <div style={cardContainerStyle}>
        <div style={timelineStyle}></div>
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
