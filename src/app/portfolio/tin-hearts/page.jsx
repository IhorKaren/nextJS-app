import ProductHero from "../../../../components/ProductHero/productHero";
import Looking from "../../../../components/Looking/looking";
import ProjectsSlider from "../../../../components/ProjectsSlider/projectsSlider";

import image from "../../../../public/Products/tinhearts.png";

const TinHearts = () => {
  return (
    <>
      <ProductHero
        img={image}
        title="Tin hearts"
        text="Behind every brilliant invention, hides an incredible story. 
        Guide a troop of tin soldiers through a magical toy-filled world, 
        in this immersive puzzle adventure game from members of the team 
        that brought you Fable."
        unity
        playstation
        nintendo
        xbox
        steam
      />
      <section></section>
      <Looking />
      <ProjectsSlider />
    </>
  );
};

export default TinHearts;
