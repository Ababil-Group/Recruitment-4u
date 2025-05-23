import { FC } from "react";

interface TeamCardProps {
  name: string;
  title: string;
  description?: string;
  emailLink?: string;
  bgColor?: string;
}

const TeamCard: FC<TeamCardProps> = ({
  name,
  title,
  description,
  emailLink,
  bgColor = "bg-blue-500",
}) => {
  return (
    <div
      className={`lg:w-[200px] lg:h-[240px] md:w-[220px] md:h-[250px] sm:w-full sm:min-h-[250px] w-full min-h-[250px] ${bgColor} text-white rounded-[30px] flex flex-col justify-between  p-5`}>
      <div>
        <h3 className="text-xl font-bold leading-tight">{name}</h3>
        <p className="text-md mt-1">({title})</p>
      </div>

      {description && (
        <div className="text-sm mt-5">
          {description.split("\n").map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      )}

      <div className="mt-auto text-base font-semibold">
        <a
          href={emailLink ? `mailto:${emailLink}` : "#"}
          className="inline-flex items-center gap-1 hover:underline">
          Learn more →
        </a>
      </div>
    </div>
  );
};

export default TeamCard;
