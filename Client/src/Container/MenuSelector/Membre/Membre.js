import React, { useState } from 'react';
import './Membre.css';
import Modal from 'react-modal';
import ListMembre from './ListMembre/ListMembre.js';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import alex from '../../../ressources/test.png';
import haut from '../../../ressources/flechehaut.png';
import bas from '../../../ressources/flechebas.png';

const bdd = {
    management: [
        {lvl: '24', org: '80', com: '69', dev: '15', son: '60', rap: '85', cam: '29',categorie: 'management',image: alex, id: 0, nom: 'JULIEN', prenom: 'Marius'},
        {lvl: '', org: '', com: '', dev: '', son: '', rap: '', cam: '',categorie: 'management',image: '', id: 1, nom: 'CAUSSE', prenom: 'Henri'},
        {lvl: '', org: '', com: '', dev: '', son: '', rap: '', cam: '',categorie: 'management',image: '', id: 2, nom: 'BAGHDASSARIAN', prenom: 'Marie'},
        {lvl: '', org: '', com: '', dev: '', son: '', rap: '', cam: '',categorie: 'management',image: '', id: 3, nom: 'HERISSON', prenom: 'Eva'},
        {lvl: '', org: '', com: '', dev: '', son: '', rap: '', cam: '',categorie: 'management',image: '', id: 4, nom: 'DE PHUOC', prenom: 'Thomas'},
        {lvl: '', org: '', com: '', dev: '', son: '', rap: '', cam: '',categorie: 'management',image: '', id: 5, nom: 'LASAGNA', prenom: 'Meghane'},
        {lvl: '', org: '', com: '', dev: '', son: '', rap: '', cam: '',categorie: 'management',image: '', id: 6, nom: 'MUELLER', prenom: 'Max'},
        {lvl: '', org: '', com: '', dev: '', son: '', rap: '', cam: '',categorie: 'management',image: '', id: 7, nom: 'COUTENSON', prenom: 'Joelle'},
    ],
    communication: [
        {lvl: '', org: '', com: '', dev: '', son: '', rap: '', cam: '',categorie: 'communication',image: alex, id: 0, nom: 'BLAVETTE', prenom: 'Adélie'},
        {lvl: '', org: '', com: '', dev: '', son: '', rap: '', cam: '',categorie: 'communication',image: '', id: 1, nom: 'Truc-en-sian', prenom: 'Bertrand'},
        {lvl: '', org: '', com: '', dev: '', son: '', rap: '', cam: '',categorie: 'communication',image: '', id: 2, nom: 'BERDAI', prenom: 'Tahra-May'},
        {lvl: '', org: '', com: '', dev: '', son: '', rap: '', cam: '',categorie: 'communication',image: '', id: 3, nom: 'PAJOT', prenom: 'Arthur'},
        {lvl: '', org: '', com: '', dev: '', son: '', rap: '', cam: '',categorie: 'communication',image: '', id: 4, nom: 'THOUMAZEAU', prenom: 'Nathan'},
        {lvl: '', org: '', com: '', dev: '', son: '', rap: '', cam: '',categorie: 'communication',image: '', id: 5, nom: 'AYANDHO', prenom: 'Earvin'},
        {lvl: '', org: '', com: '', dev: '', son: '', rap: '', cam: '',categorie: 'communication',image: '', id: 6, nom: 'DAUPHINOT', prenom: 'Maxime'},
    ],
    decoration: [
        {lvl: '', org: '', com: '', dev: '', son: '', rap: '', cam: '',categorie: 'decoration',image: alex, id: 0, nom: 'PETIT-KELLER', prenom: 'Paul'},
        {lvl: '', org: '', com: '', dev: '', son: '', rap: '', cam: '',categorie: 'decoration',image: '', id: 1, nom: 'RISTORI', prenom: 'Floriane'},
        {lvl: '', org: '', com: '', dev: '', son: '', rap: '', cam: '',categorie: 'decoration',image: '', id: 2, nom: 'LEROY', prenom: 'Anne-Claire'},
        {lvl: '', org: '', com: '', dev: '', son: '', rap: '', cam: '',categorie: 'decoration',image: '', id: 3, nom: 'VELFRINGER', prenom: 'Pierrick'},
        {lvl: '', org: '', com: '', dev: '', son: '', rap: '', cam: '',categorie: 'decoration',image: '', id: 4, nom: 'CISSOKHO', prenom: 'Ydrissa'},
    ],
    regie: [
        {lvl: '', org: '', com: '', dev: '', son: '', rap: '', cam: '',categorie: 'regie',image: alex, id: 0, nom: 'JULIEN', prenom: 'Guillaume'},
        {lvl: '', org: '', com: '', dev: '', son: '', rap: '', cam: '',categorie: 'regie',image: '', id: 1, nom: 'CAUSSE', prenom: 'Henri'},
        {lvl: '', org: '', com: '', dev: '', son: '', rap: '', cam: '',categorie: 'regie',image: '', id: 2, nom: 'LASNES', prenom: 'Jules'},
        {lvl: '', org: '', com: '', dev: '', son: '', rap: '', cam: '',categorie: 'regie',image: '', id: 3, nom: 'DOMBYA', prenom: 'Hervé'},
        {lvl: '', org: '', com: '', dev: '', son: '', rap: '', cam: '',categorie: 'regie',image: '', id: 4, nom: 'ESKENAZI', prenom: 'Thomas'},
        {lvl: '', org: '', com: '', dev: '', son: '', rap: '', cam: '',categorie: 'regie',image: '', id: 5, nom: 'ESKENAZI', prenom: 'Clément'},
        {lvl: '', org: '', com: '', dev: '', son: '', rap: '', cam: '',categorie: 'regie',image: '', id: 6, nom: 'IDZIOREK', prenom: 'Thomas'},
    ],
    video: [
        {lvl: '', org: '', com: '', dev: '', son: '', rap: '', cam: '',categorie: 'video',image: alex, id: 0, nom: 'PAJOT', prenom: 'Arthur'},
        {lvl: '', org: '', com: '', dev: '', son: '', rap: '', cam: '',categorie: 'video',image: '', id: 1, nom: 'JULIEN', prenom: 'Marius'},
        {lvl: '', org: '', com: '', dev: '', son: '', rap: '', cam: '',categorie: 'video',image: '', id: 2, nom: 'MOLINA', prenom: 'Jules'},
        {lvl: '', org: '', com: '', dev: '', son: '', rap: '', cam: '',categorie: 'video',image: '', id: 3, nom: 'JULIEN', prenom: 'Guillaume'},
        {lvl: '', org: '', com: '', dev: '', son: '', rap: '', cam: '',categorie: 'video',image: '', id: 4, nom: 'LAMAZE', prenom: 'Hugo'},
        {lvl: '', org: '', com: '', dev: '', son: '', rap: '', cam: '',categorie: 'video',image: '', id: 5, nom: 'THOMAZET', prenom: 'Nathan'},
        {lvl: '', org: '', com: '', dev: '', son: '', rap: '', cam: '',categorie: 'video',image: '', id: 6, nom: 'HERMITTE', prenom: 'Léa'},
    ],
    sound: [
        {lvl: '', org: '', com: '', dev: '', son: '', rap: '', cam: '',categorie: 'sound',image: alex, id: 0, nom: 'PIACENTINO', prenom: 'Léonard'},
        {lvl: '', org: '', com: '', dev: '', son: '', rap: '', cam: '',categorie: 'sound',image: '', id: 1, nom: 'CAUSSE', prenom: 'Henri'},
        {lvl: '', org: '', com: '', dev: '', son: '', rap: '', cam: '',categorie: 'sound',image: '', id: 2, nom: 'COLEN', prenom: 'Caroline'},
        {lvl: '', org: '', com: '', dev: '', son: '', rap: '', cam: '',categorie: 'sound',image: '', id: 3, nom: 'CONSTENTINI', prenom: 'Simon'},
        {lvl: '', org: '', com: '', dev: '', son: '', rap: '', cam: '',categorie: 'sound',image: '', id: 4, nom: 'XX', prenom: 'Louis'},
        {lvl: '', org: '', com: '', dev: '', son: '', rap: '', cam: '',categorie: 'sound',image: '', id: 5, nom: 'XX', prenom: "M'Hamed"},
        {lvl: '', org: '', com: '', dev: '', son: '', rap: '', cam: '',categorie: 'sound',image: '', id: 6, nom: 'IDZIOREK', prenom: 'Thomas'},
    
    ],
    prod: [
        {lvl: '', org: '', com: '', dev: '', son: '', rap: '', cam: '',categorie: 'prod',image: alex, id: 0, nom: 'SOW', prenom: 'Manu'},
        {lvl: '', org: '', com: '', dev: '', son: '', rap: '', cam: '',categorie: 'prod',image: '', id: 1, nom: 'MIKO', prenom: 'Arthur'},
        {lvl: '', org: '', com: '', dev: '', son: '', rap: '', cam: '',categorie: 'prod',image: '', id: 2, nom: 'ELLIS', prenom: 'Pablo'},
        {lvl: '', org: '', com: '', dev: '', son: '', rap: '', cam: '',categorie: 'prod',image: '', id: 3, nom: 'LOUWERSE', prenom: 'Jérémy'},
        {lvl: '', org: '', com: '', dev: '', son: '', rap: '', cam: '',categorie: 'prod',image: '', id: 4, nom: 'LAMPS', prenom: 'Romain'},
        {lvl: '', org: '', com: '', dev: '', son: '', rap: '', cam: '',categorie: 'prod',image: '', id: 5, nom: 'DABIJA', prenom: 'Manu'},
        {lvl: '', org: '', com: '', dev: '', son: '', rap: '', cam: '',categorie: 'prod',image: '', id: 6, nom: 'HAGUENAUER', prenom: 'Gary'},
        {lvl: '', org: '', com: '', dev: '', son: '', rap: '', cam: '',categorie: 'prod',image: '', id: 7, nom: 'PIACENTINO', prenom: 'Léonard'},
        {lvl: '', org: '', com: '', dev: '', son: '', rap: '', cam: '',categorie: 'prod',image: '', id: 8, nom: 'RIAD', prenom: 'Walid'},
        {lvl: '', org: '', com: '', dev: '', son: '', rap: '', cam: '',categorie: 'prod',image: '', id: 9, nom: 'MORTIER', prenom: 'Vincent'},
    
    ],
    rap: [
        {lvl: '', org: '', com: '', dev: '', son: '', rap: '', cam: '',categorie: 'rap',image: alex, id: 0, prenom: 'Marius', nom: ''},
        {lvl: '', org: '', com: '', dev: '', son: '', rap: '', cam: '',categorie: 'rap',image: '', id: 1, prenom: 'McDauph', nom: ''},
        {lvl: '', org: '', com: '', dev: '', son: '', rap: '', cam: '',categorie: 'rap',image: '', id: 2, prenom: 'Senken', nom: ''},
        {lvl: '', org: '', com: '', dev: '', son: '', rap: '', cam: '',categorie: 'rap',image: '', id: 3, prenom: 'Mabeck', nom: ''},
        {lvl: '', org: '', com: '', dev: '', son: '', rap: '', cam: '',categorie: 'rap',image: '', id: 4, prenom: 'Nastirik', nom: ''},
        {lvl: '', org: '', com: '', dev: '', son: '', rap: '', cam: '',categorie: 'rap',image: '', id: 5, prenom: 'Nicky Nelson', nom: ''},
        {lvl: '', org: '', com: '', dev: '', son: '', rap: '', cam: '',categorie: 'rap',image: '', id: 6, prenom: 'Shaiko', nom: ''},
        {lvl: '', org: '', com: '', dev: '', son: '', rap: '', cam: '',categorie: 'rap',image: '', id: 7, prenom: 'Big L', nom: ''},
        {lvl: '', org: '', com: '', dev: '', son: '', rap: '', cam: '',categorie: 'rap',image: '', id: 8, prenom: 'Dub El X', nom: ''},
        {lvl: '', org: '', com: '', dev: '', son: '', rap: '', cam: '',categorie: 'rap',image: '', id: 9, prenom: 'K-R', nom: ''},
        {lvl: '', org: '', com: '', dev: '', son: '', rap: '', cam: '',categorie: 'rap',image: '', id: 10, prenom: 'Bertrand', nom: 'BERNARD'},
        {lvl: '', org: '', com: '', dev: '', son: '', rap: '', cam: '',categorie: 'rap',image: '', id: 11, prenom: 'HDANTE', nom: ''},
        {lvl: '', org: '', com: '', dev: '', son: '', rap: '', cam: '',categorie: 'rap',image: '', id: 12, prenom: 'Woody', nom: ''},
        {lvl: '', org: '', com: '', dev: '', son: '', rap: '', cam: '',categorie: 'rap',image: '', id: 13, prenom: 'Toxik', nom: ''},
        {lvl: '', org: '', com: '', dev: '', son: '', rap: '', cam: '',categorie: 'rap',image: '', id: 14, prenom: 'Fayssal', nom: ''},
        {lvl: '', org: '', com: '', dev: '', son: '', rap: '', cam: '',categorie: 'rap',image: '', id: 15, prenom: 'Connor', nom: ''},
        {lvl: '', org: '', com: '', dev: '', son: '', rap: '', cam: '',categorie: 'rap',image: '', id: 16, prenom: 'Max Dell', nom: ''},
        {lvl: '', org: '', com: '', dev: '', son: '', rap: '', cam: '',categorie: 'rap',image: '', id: 17, prenom: 'Lorraine', nom: ''},
        {lvl: '', org: '', com: '', dev: '', son: '', rap: '', cam: '',categorie: 'rap',image: '', id: 18, prenom: 'Heol', nom: ''},
    ],
    streetArt: [
        {lvl: '', org: '', com: '', dev: '', son: '', rap: '', cam: '',categorie: 'streetArt',image: alex, id: 0, prenom: 'Cantara', nom: ''},
        {lvl: '', org: '', com: '', dev: '', son: '', rap: '', cam: '',categorie: 'streetArt',image: alex, id: 1, prenom: 'Reach the sky', nom: ''},
        {lvl: '', org: '', com: '', dev: '', son: '', rap: '', cam: '',categorie: 'streetArt',image: alex, id: 2, prenom: 'Meton', nom: ''},
    ],
    title:[
        {name: 'CONNARDS BOBOS'}, //titre pour page la team
        {name: 'GEEK ASOCIAUX'},
        {name: 'ARTISTES GALERIENS'}
    ],
    secondTitle:[
        {name: 'MANAGEMENT'},
        {name: 'COMMUNICATION'},
        {name: 'DECORATION'},
        {name: 'REGIE'},
        {name: 'VIDEO'},
        {name: 'SOUND DESIGN'},
        {name: "INSTRUMENTISTE"},
        {name: 'R.A.P'},
        {name: 'STREET ART'},
    ],
}

const Membre = props => {
    const [showModal, setShowModal] = useState(false);
    const [carouselIndex, setCarouselIndex] = useState(0);
    const [person, setPerson] = useState({
        id: 0,
        nom: '',
        prenom: '',
        image: '',
        lvl: '',
        org: '',
        com: '',
        dev: '',
        son: '',
        rap: '',
        cam: ''
        });

    const moveUpCarousel = () => {
        if (carouselIndex < (2)){
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
    carouselIndex === 2 ? visibilityNext = {visibility: 'hidden'} : visibilityNext = {visibility: 'visible'}

    const handleOpenModal = () => {
        setShowModal(true);
    }

    const setContentHandler = (index, categorie) => {
        const Bdd = bdd;

        switch (categorie) {
            case 'management':
                return  setPerson({...Bdd.management[index]})
            case 'communication':
                return  setPerson({...Bdd.communication[index]}) 
            case 'decoration':
                return  setPerson({...Bdd.decoration[index]}) 
            case 'regie':
                return  setPerson({...Bdd.regie[index]}) 
            case 'video':
                return  setPerson({...Bdd.video[index]}) 
            case 'sound':
                return  setPerson({...Bdd.sound[index]}) 
            case 'prod':
                return  setPerson({...Bdd.prod[index]}) 
            case 'rap':
                return  setPerson({...Bdd.rap[index]}) 
            case 'streetArt':
                return  setPerson({...Bdd.streetArt[index]}) 
            default:
                throw new Error('Something goes wrong !');
        }         
    }

    let contentModal = null

    contentModal = (
        <div className="modalcontent">
            <div className="nompinkedex">
                <div className="firstBand">
                    <div className="pinkyband">
                        <p className="titlemodal">{person.prenom}</p><p className="titlemodal">{person.nom}</p>
                    </div>
                </div>
                <div className="personTitle">
                        <p>MONTAGE VIDEO ★★</p>
                </div>
            </div>
            <div className="PictureAndContent">
                <div className="ContentModal">
                    <div className="titlecontentmodal">
                        <h1>LV. {person.lvl}</h1>
                    </div>
                    <div className="skillscontentmodal">
                        <table className="tableauModal">
                            <tbody>
                                <tr>
                                    <td>ORG <span>{person.org}</span></td>
                                    <td>SON <span>{person.son}</span></td>
                                </tr>
                                <tr>
                                    <td>COM <span>{person.com}</span></td>
                                    <td>RAP <span>{person.rap}</span></td>
                                </tr>
                                <tr>
                                    <td>DEV <span>{person.dev}</span></td>
                                    <td>CAM <span>{person.cam}</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="Picture">
                    <img className="imageModal" src={person.image} alt={person.prenom}/>
                </div>
            </div>
            <div className="Description">
                <p style={{fontSize: '1.8em', margin: '44px'}}>Luminosite, contraste et montage video</p>
            </div>
        </div>
    )
    return (
        <div className="membre">
            <CarouselProvider
                naturalSlideWidth={940}
                naturalSlideHeight={700}
                totalSlides={3}
                orientation="vertical"
                className="vertSlider"
                style={{height: 'calc(100vh - 150px)'}}>
                <span onClick={moveDownCarousel}><ButtonBack className="slideButton" style={visibilityBack}><img className="slideImgTop" src={haut} alt="back"/></ButtonBack></span>
                <Slider className="slide">
                    <Slide index={0}><ListMembre 
                                        membre={bdd.membre}
                                        open={handleOpenModal}
                                        index={setContentHandler}
                                        titleColumnOne={bdd.secondTitle[0]}
                                        memberColumnOne={bdd.management}
                                        titleColumnTwo={bdd.secondTitle[1]}
                                        memberColumnTwo={bdd.communication}
                                        titleColumnThree={bdd.secondTitle[2]}
                                        memberColumnThree={bdd.decoration}
                                        bigTitle={bdd.title[0].name}/></Slide>
                    <Slide index={1}><ListMembre 
                                        membre={bdd.membre}
                                        open={handleOpenModal}
                                        index={setContentHandler}
                                        titleColumnOne={bdd.secondTitle[3]}
                                        memberColumnOne={bdd.regie}
                                        titleColumnTwo={bdd.secondTitle[4]}
                                        memberColumnTwo={bdd.video}
                                        titleColumnThree={bdd.secondTitle[5]}
                                        memberColumnThree={bdd.sound}
                                        bigTitle={bdd.title[1].name}/></Slide>
                    <Slide index={2}><ListMembre 
                                        membre={bdd.membre}
                                        open={handleOpenModal}
                                        index={setContentHandler}
                                        titleColumnOne={bdd.secondTitle[6]}
                                        memberColumnOne={bdd.prod}
                                        titleColumnTwo={bdd.secondTitle[7]}
                                        memberColumnTwo={bdd.rap}
                                        titleColumnThree={bdd.secondTitle[8]}
                                        memberColumnThree={bdd.streetArt}
                                        bigTitle={bdd.title[2].name}/></Slide>
                </Slider>
                <span onClick={moveUpCarousel}><ButtonNext className="slideButton" style={visibilityNext}><img className="slideImgBot" src={bas} alt="next"/></ButtonNext></span>
            </CarouselProvider>
            <Modal 
                isOpen={showModal}
                overlayClassName="overlay"
                className="content"
                onRequestClose={() => {setShowModal(false)}}
                shouldCloseOnOverlayClick={true}
                contentLabel="Minimal Modal Example"
                ariaHideApp={false}
                >
                {contentModal}
            </Modal>
        </div>
    );  
};

export default Membre;