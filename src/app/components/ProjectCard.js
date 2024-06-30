import Image from "next/image";

const ProjectItem = ({ title, company, date, description, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="block text-white mb-8"
  >
    <div
      className="flex flex-col sm:flex-row items-center gap-400 sm:gap-16 hover-effect"
      style={{ marginLeft: "2%" }}
    >
      <div>
        <h3 className="text-base mb-1">{title}</h3>
        <p className="text-[#ADB7BE] text-xs mb-1">
          {company} | {date}
        </p>
        <p className="text-xs mb-4 w-80">{description}</p>
      </div>
    </div>
    <style jsx>{`
      .hover-effect {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }
      .hover-effect:hover {
        transform: scale(1.05);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
      }
    `}</style>
  </a>
);

export default ProjectItem;
