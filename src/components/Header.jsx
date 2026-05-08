import { Badge, Container } from 'react-bootstrap';

function Header() {
  return (
    <header className="hero-section text-white py-5 mb-4">
      <Container>
        <Badge bg="light" text="dark" className="mb-3 px-3 py-2">
          LearnStream
        </Badge>
        <h1 className="display-5 fw-bold mb-3">Explorador de Conferencias Técnicas</h1>
        <p className="lead mb-0 hero-description">
          Encuentra rápidamente ponencias por área de conocimiento, formato o palabras clave.
        </p>
      </Container>
    </header>
  );
}

export default Header;
