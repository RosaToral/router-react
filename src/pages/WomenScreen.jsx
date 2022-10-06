import React, {useState, useEffect} from 'react';
import {Characters} from '../models/Characters';
import {Card} from '../components/Card';

export const WomenScreen = () => {
  const [characters, setCharacters] = useState(Characters);

  useEffect(() => {
    const women = Characters.filter((e) => e.type === 'm');
    setCharacters(women);
  }, [])

  return (
    <div className="container my-5">
      <div className="row">
        { characters.map((e) => <Card charac={e} key={e.id} />) }
        
      </div>
    </div>
  )
};