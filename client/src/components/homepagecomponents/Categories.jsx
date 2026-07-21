import { LuLaptop, LuTablet, LuSmartphone, LuArrowRight } from "react-icons/lu";
import "./../../pages/HomePage.css";

const categories = [
  {
    id: 1,
    title: "Laptops",
    description: "Powerful performance for every need.",
    image: "/images/laptop.png",
    alt: "Laptop displaying a vibrant abstract wallpaper",
    Icon: LuLaptop,
  },
  {
    id: 2,
    title: "Tablets",
    description: "Portable power. Endless possibilities.",
    image: "/images/tablet.png",
    alt: "Tablet with a colorful gradient display",
    Icon: LuTablet,
  },
  {
    id: 3,
    title: "Phones",
    description: "Stay connected. Always ahead.",
    image: "/images/phone.png",
    alt: "Smartphone with a multi-lens camera",
    Icon: LuSmartphone,
  },
];

export default function CategorySection() {
  return (
    <section className="category-section">
      <header className="category-section__header">
        <h2 className="category-section__title">Shop by Category</h2>
        <a href="#" className="category-section__view-all">
          View All
          <LuArrowRight aria-hidden="true" />
        </a>
      </header>

      <div className="category-grid">
        {categories.map(({ id, title, description, image, alt, Icon }) => (
          <article className="category-card" key={id}>
            <div className="category-card__content">
              <span className="category-card__icon">
                <Icon aria-hidden="true" />
              </span>
              <h3 className="category-card__title">{title}</h3>
              <p className="category-card__description">{description}</p>
              <a href="#" className="category-card__link">
                Shop Now
                <LuArrowRight aria-hidden="true" />
              </a>
            </div>
            <div className="category-card__media">
              <img
                src={image}
                alt={alt}
                className="category-card__image"
                loading="lazy"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
