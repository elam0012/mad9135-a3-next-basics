import { createContext, useState, useContext, useEffect } from 'react';

const TeamContext = createContext(); 

function TeamProvider(props) {
  const [team, setTeam] = useState('');

  useEffect(()=>{
    fetch("/api/team")
      .then(response=>response.json())
      .then(data=>{setTeam(data);})
  }, []);

  return <TeamContext.Provider value={[team, setTeam]} {...props} />;
}

function useTeam() {
  const context = useContext(TeamContext);
  if (!context) throw new Error('Not inside the Provider');
  return context; // [team, setTeam]
}

export { useTeam, TeamProvider };