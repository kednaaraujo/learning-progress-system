import CourseCard from "../components/dashboard/CourseCard";

const courses = [
  { title: "Tecnologia da Informação", progress: 25 },
  { title: "Administração", progress: 95 },
  { title: "Qualidade", progress: 60 },
  { title: "Segurança do Trabalho", progress: 45 },
];

function DashboardPage() {
  return (
    <main className="dashboard-page">
  <h1>Dashboard</h1>

  <section className="courses-grid">
    {courses.map((course) => (
      <CourseCard
        key={course.title}
        title={course.title}
        progress={course.progress}
      />
    ))}
  </section>
</main>
  );
}

export default DashboardPage;