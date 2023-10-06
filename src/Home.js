import { data } from "./data/projects";
import { ItemCard } from "./ItemCard";

export const Home = () => {
  return (
    <div className="container">
      <h1 className="text-center mt-4 text-primary">Portfolio</h1>
      <h2 className="mt-4 text-dark">School Projects</h2>
      <p className="text-dark">
        Note: All sites were for my academic coursework at Noroff and were only
        for educational purposes, none of them are real websites.
      </p>
      <section className="py-4 container">
        <div className="row justify-content-center">
          {data.projectData.map((item, index) => {
            return (
              <ItemCard
                image={item.image}
                title={item.title}
                projectName={item.projectName}
                description={item.description}
                website={item.website}
                repository={item.repository}
                key={index}
                item={item}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};
