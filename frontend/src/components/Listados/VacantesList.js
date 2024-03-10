import VacanteCard from '../Cards/VacanteCard';

function VacantesList({vacantes}) {

  return (
    <div>
    {vacantes.map ((vacante) => {
      return <VacanteCard  key={vacante.idVacante} vacante={vacante}/>
    })}
    </div>
  );
}

export default VacantesList;