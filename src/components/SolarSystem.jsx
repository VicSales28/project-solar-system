import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import '../styles/SolarSystem.css';

class SolarSystem extends React.Component {
  render() {
    return (
      <main
        data-testid="solar-system"
        className="solar-system-container"
      >

        <Title headline="Planetas" />

        <section className="planets-container">
          {planets.map((planet) => (
            <PlanetCard
              key={ planet.name }
              planetName={ planet.name }
              planetImage={ planet.image }
            />
          ))}
        </section>

      </main>
    );
  }
}

export default SolarSystem;
