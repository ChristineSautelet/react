import React from 'react';

// import { render } from '@testing-library/react';

function GroupeType5 ({img, title, text}) {
    return  <React.Fragment>
    <div className="col-12 col-sm-2 col-md-3 col-lg-2">
        <img src={img} alt="logo-main"/>
        <h2>{title}</h2>
        <p>{text}</p>
    </div>
    </React.Fragment>
                
}
const Main = () => {
    return <div className="pt-5">

        <div className="row d-flex justify-content-center">

            <GroupeType5 
            img='img/main1.png' 
            title="Apprendre à apprendre" 
            text="Chez BeCode on n'apprend pas un langage en particulier, on apprend à apprendre."
            />

            <GroupeType5 
            img='img/main2.png' 
            title="Pédagogie active" 
            text="Pas de cours magistraux embêtants dont on ne retient rien. Ici, la pédagogie est active."
            />

            <GroupeType5 
            img='img/main3.png'
            title="Ouvert à tou.t.e.s" 
            text="Votre genre, votre religion, votre couleur de peau, votre âge, vos diplômes, ON S'EN FOUT !"
            />

            <GroupeType5 
            img='img/main4.png'
            title="Gratuit" 
            text="La formation est entièrement gratuite. Si vous n'avez pas de PC, on vous en prête un."
            />

            <GroupeType5 
            img='img/main5.png'
            title="Intensif" 
            text="Du lundi au vendredi, de 9h00 à 17h00, vous apprendrez comme si vous étiez en entreprise."
            />

        </div>

    </div>;
}

export default Main;