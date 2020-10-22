import React from 'react';
import RellaxWrapper from 'react-rellax-wrapper';
import './features.css';

// const Features = (props) => {
const Features = ({ name, height: { meters: hMeters, feet: hFeet }, diameter: { meters: dMeters, feet: dFeet },
    mass: { kg: massKg, lb: massLb }, payload_weights, description }) => {

    const rocketImages = {
        'Falcon 1': 'falcon-1',
        'Falcon 9': 'falcon-9',
        'Falcon Heavy': 'falcon-heavy',
        'Starship': 'starship',
    }

    return (
        <section className="features">
            <h2 className="features-title">{name}<br />Overview
    </h2>
            <div className="overview">

                <table className="table">
                    <caption className="table-title">
                        Size
        </caption>
                    <thead>
                        <tr>
                            <td className="table-column">HEIGHT</td>
                            <td className="table-column">{hMeters} m / {hFeet} ft</td>
                        </tr>
                        <tr>
                            <td className="table-column">DIAMETER</td>
                            <td className="table-column">{dMeters} m / {dFeet} ft</td>
                        </tr>
                        <tr>
                            <td className="table-column">MASS</td>
                            <td className="table-column">{massKg} kg / {massLb} lb</td>
                        </tr>
                        
                            {payload_weights.map((item, i) => (
                                <tr key={i}>
                                    <td className="table-column">PAYLOAD TO {item.id.toUpperCase()}</td>
                                    <td className="table-column">{item.kg} kg / {item.lb} lb</td>
                                </tr>
                            ))}

                        
                    </thead>
                </table>
                <RellaxWrapper speed={14}>
                    <img
                        src={`./img/${rocketImages[name]}.png`}
                        alt="rocket"
                        className="rocket" />
                </RellaxWrapper>

                <article>
                    <h3 className="features-subtitle">DESCRIPTION</h3>
                    <p className="features-text">{description}</p>
                </article>
            </div>
        </section>
    );
}

export default Features;