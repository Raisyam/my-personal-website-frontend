import CONFIG from '../config';
import ProjectTitle from './ProjectTitle';
import Technology from './Technology';

type Technology = {
  tech: string;
  bgColor?: string;
  fontColor?: string;
};

type Props = {
  number: number;
  projectData: {
    title: string;
    websiteLink: string;
    image: string;
    colors: string[];
    fontColor?: string;
    isGradient: boolean;
    description: string;
    technologies: Technology[];
  };
};

const Project = ({ number, projectData }: Props) => {
  const {
    title,
    websiteLink,
    image,
    colors,
    isGradient,
    description,
    fontColor,
    technologies,
  } = projectData;

  return (
    <div className="project">
      <img
        className="button-effect"
        src={`${CONFIG.BACKEND_URL}/${image}`}
        alt={`project image of ${title}`}
      />
      <div className="project-heading-n-paragraph">
        <ProjectTitle
          isGradient={isGradient}
          colors={colors}
          websiteLink={websiteLink}
          title={title}
          fontColor={fontColor}
          number={number}
        />
        <p>{description}</p>
        <div className="project-techs-container">
          {technologies.length > 0
            ? technologies.map((data, index) => {
                return <Technology key={index} technology={data} />;
              })
            : null}
        </div>
      </div>
    </div>
  );
};

export default Project;
