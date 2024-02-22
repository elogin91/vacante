import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function SolicitudCard() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Título del puesto</Card.Title>
        <Card.Subtitle>Nombre de la empresa</Card.Subtitle>
        <Card.Text>
        Provincia del puesto de trabajo
         Descripcion
        </Card.Text>
        <Button variant="primary">Responder</Button>
        <Button variant="primary">Modificar</Button>
        <Button variant="primary">Ver</Button>
      </Card.Body>
    </Card>
  );
}

export default SolicitudCard;