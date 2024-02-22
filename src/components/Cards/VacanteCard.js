import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function VacanteCard({vacante}) {

  return (
    <div className="d-flex justify-content-center align-items-center" >

    <Card style={{ width: '75rem', margin: '8px' }}>
      <Card.Body>
        <Card.Title>{vacante.nombre}</Card.Title>
        <Card.Subtitle>{vacante.detalles}</Card.Subtitle>
        <Card.Text>{vacante.descripcion}</Card.Text>
        <Button variant="primary">Más detalle</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default VacanteCard;