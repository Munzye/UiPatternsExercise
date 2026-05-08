import { Alert, Col, Row } from 'react-bootstrap';
import VideoCard from './VideoCard.jsx';

function VideoGrid({ videos }) {
  if (videos.length === 0) {
    return (
      <Alert variant="warning" className="text-center border-0 shadow-sm py-4">
        <h3 className="h5 fw-bold">No hay coincidencias</h3>
        <p className="mb-0">Intenta cambiar el texto de búsqueda o seleccionar otros filtros.</p>
      </Alert>
    );
  }

  return (
    <Row className="g-4">
      {videos.map((video) => (
        <Col key={video.id} xs={12} md={6} lg={4}>
          <VideoCard video={video} />
        </Col>
      ))}
    </Row>
  );
}

export default VideoGrid;
