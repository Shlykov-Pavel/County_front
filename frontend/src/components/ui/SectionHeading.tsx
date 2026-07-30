interface Props {
  eyebrow?: string;
  title: string;
  align?: "center" | "left";
}

/** Заголовок секции: надзаголовок, название и золотая линия-виньетка. */
export function SectionHeading({ eyebrow, title, align = "center" }: Props) {
  return (
    <div className={align === "center" ? "center" : undefined}>
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      <h2>{title}</h2>
      <div className={align === "center" ? "rule" : "rule rule--left"}>
        <i />
      </div>
    </div>
  );
}
