import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';
import '../styles/Missions.css';

class Missions extends React.Component {
  render() {
    return (
      <main data-testid="missions">

        <Title headline="Missões" />

        <section className="missions-container">
          {missions.map((mission) => (
            <MissionCard
              key={ mission.name }
              name={ mission.name }
              year={ mission.year }
              country={ mission.country }
              destination={ mission.destination }
            />
          ))}
        </section>

      </main>
    );
  }
}

export default Missions;
