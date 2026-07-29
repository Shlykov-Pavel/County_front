const stats = [
  { value: "14", label: "лет в разведении" },
  { value: "38", label: "выращено помётов" },
  { value: "52", label: "титула наших собак" },
  { value: "9", label: "стран, где живут щенки" },
];

export function StatsSection() {
  return (
    <section className="section section--tight section--ice">
      <div className="container stats">
        {stats.map((stat) => (
          <div key={stat.label}>
            <b>{stat.value}</b>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
