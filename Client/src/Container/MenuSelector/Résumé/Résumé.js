import React, {useState} from 'react';
import './Résumé.css';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import haut from '../../../ressources/flechehaut.png';
import bas from '../../../ressources/flechebas.png';
import LayoutResume from './LayoutResume/LayoutResume';
import Test from '../../../ressources/mdauphin.jpg';

const bdd = {
  resume: [
      {id: 0,title: "PinkyPimp c'est quoi ?", image: Test, text1: "Généralement, on utilise un texte en faux latin (le texte ne veut rien dire, il a été modifié), le Lorem ipsum ou Lipsum, qui permet donc de faire office de texte d'attente. L'avantage de le mettre en latin est que l'opérateur sait au premier coup d'oeil que la page contenant ces lignes n'est pas valide, et surtout l'attention du client n'est pas dérangée par le contenu, il demeure concentré seulement sur l'aspect graphique.", text2: "Généralement, on utilise un texte en faux latin (le texte ne veut rien dire, il a été modifié), le Lorem ipsum ou Lipsum, qui permet donc de faire office de texte d'attente. L'avantage de le mettre en latin est que l'opérateur sait au premier coup d'oeil que la page contenant ces lignes n'est pas valide, et surtout l'attention du client n'est pas dérangée par le contenu, il demeure concentré seulement sur l'aspect graphique."},
      {id: 1,title: "PinkyPimp c'est quoi ?", image: Test, text1: "Généralement, on utilise un texte en faux latin (le texte ne veut rien dire, il a été modifié), le Lorem ipsum ou Lipsum, qui permet donc de faire office de texte d'attente. L'avantage de le mettre en latin est que l'opérateur sait au premier coup d'oeil que la page contenant ces lignes n'est pas valide, et surtout l'attention du client n'est pas dérangée par le contenu, il demeure concentré seulement sur l'aspect graphique.", text2: "Généralement, on utilise un texte en faux latin (le texte ne veut rien dire, il a été modifié), le Lorem ipsum ou Lipsum, qui permet donc de faire office de texte d'attente. L'avantage de le mettre en latin est que l'opérateur sait au premier coup d'oeil que la page contenant ces lignes n'est pas valide, et surtout l'attention du client n'est pas dérangée par le contenu, il demeure concentré seulement sur l'aspect graphique."},
      {id: 2,title: "PinkyPimp c'est quoi ?", image: Test, text1: "Généralement, on utilise un texte en faux latin (le texte ne veut rien dire, il a été modifié), le Lorem ipsum ou Lipsum, qui permet donc de faire office de texte d'attente. L'avantage de le mettre en latin est que l'opérateur sait au premier coup d'oeil que la page contenant ces lignes n'est pas valide, et surtout l'attention du client n'est pas dérangée par le contenu, il demeure concentré seulement sur l'aspect graphique.", text2: "Généralement, on utilise un texte en faux latin (le texte ne veut rien dire, il a été modifié), le Lorem ipsum ou Lipsum, qui permet donc de faire office de texte d'attente. L'avantage de le mettre en latin est que l'opérateur sait au premier coup d'oeil que la page contenant ces lignes n'est pas valide, et surtout l'attention du client n'est pas dérangée par le contenu, il demeure concentré seulement sur l'aspect graphique."},
      {id: 2,title: "PinkyPimp c'est quoi ?", image: Test, text1: "Généralement, on utilise un texte en faux latin (le texte ne veut rien dire, il a été modifié), le Lorem ipsum ou Lipsum, qui permet donc de faire office de texte d'attente. L'avantage de le mettre en latin est que l'opérateur sait au premier coup d'oeil que la page contenant ces lignes n'est pas valide, et surtout l'attention du client n'est pas dérangée par le contenu, il demeure concentré seulement sur l'aspect graphique.", text2: "Généralement, on utilise un texte en faux latin (le texte ne veut rien dire, il a été modifié), le Lorem ipsum ou Lipsum, qui permet donc de faire office de texte d'attente. L'avantage de le mettre en latin est que l'opérateur sait au premier coup d'oeil que la page contenant ces lignes n'est pas valide, et surtout l'attention du client n'est pas dérangée par le contenu, il demeure concentré seulement sur l'aspect graphique."},
  ]
}

const Resume = props => {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const moveUpCarousel = () => {
      if (carouselIndex < (bdd.resume.length - 1)){
        const numCarousel = carouselIndex + 1
        setCarouselIndex(numCarousel)
      }
    }

  const moveDownCarousel = () => {
      if (carouselIndex > 0){
        const numCarousel = carouselIndex - 1
        setCarouselIndex(numCarousel)
      }
    }
    let visibilityBack = null;
    carouselIndex === 0 ? visibilityBack = {visibility: 'hidden'} : visibilityBack = {visibility: 'visible'}

    let visibilityNext = null;
    carouselIndex === bdd.resume.length - 1 ? visibilityNext = {visibility: 'hidden'} : visibilityNext = {visibility: 'visible'}
    return (
        <div className="membre">
            <CarouselProvider
                naturalSlideWidth={940}
                naturalSlideHeight={520}
                totalSlides={bdd.resume.length}
                orientation="vertical"
                className="vertSlider"
                style={{height: 'calc(100vh - 150px)'}}>
                <span onClick={moveDownCarousel}><ButtonBack className="slideButton" style={visibilityBack}><img className="slideImgTop" src={haut} alt="back"/></ButtonBack></span>
                <Slider className="slide">
                  {bdd.resume.map((page, index) => {
                      return <Slide key={index} index={index}>
                                <LayoutResume 
                                  title={bdd.resume[1].title}
                                  img={bdd.resume[1].image}
                                  firstText={bdd.resume[1].text1}
                                  secondText={bdd.resume[1].text2}
                                  reverse={index % 2 === 0 ? true : false}/>
                            </Slide>
                  })}
                </Slider>
                <span onClick={moveUpCarousel}><ButtonNext className="slideButton" style={visibilityNext}><img className="slideImgBot" src={bas} alt="next"/></ButtonNext></span>
            </CarouselProvider>
        </div>
    );
};

export default Resume;