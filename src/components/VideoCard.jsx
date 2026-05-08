import { Badge, Card } from 'react-bootstrap';

function VideoCard({ video }) {
  return (
    <Card className="video-card h-100 border-0 shadow-sm">
      <div className="thumbnail-wrapper">
        <Card.Img variant="top" src={video.thumbnailUrl} alt={`Miniatura de ${video.title}`} />
        <Badge bg="dark" className="duration-badge">
          {video.duration}
        </Badge>
      </div>

      <Card.Body className="d-flex flex-column">
        <div className="d-flex justify-content-between align-items-start gap-2 mb-2">
          <Badge bg="primary" className="area-badge">
            {video.area}
          </Badge>
          <Badge bg="secondary">{video.format}</Badge>
        </div>

        <Card.Title className="h5 fw-bold">{video.title}</Card.Title>
        <Card.Text className="text-muted mb-2">Ponente: {video.author}</Card.Text>

        <div className="mt-auto d-flex justify-content-between align-items-center pt-3">
          <span className="level-label">Nivel: {video.level}</span>
          <button className="btn btn-sm btn-outline-primary">Ver detalles</button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default VideoCard;
