import ProgressBar from "../ui/ProgressBar";

type CourseCardProps = {
  title: string;
  progress: number;
};

function CourseCard({ title, progress }: CourseCardProps) {
  return (
    <article className="course-card">
      <h2>{title}</h2>

      <ProgressBar value={progress} />

      <p>Progress: {progress}%</p>
    </article>
  );
}

export default CourseCard;