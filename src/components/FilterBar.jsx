import { Button, Card, Col, Form, Row } from 'react-bootstrap';

function FilterBar({ filters, areas, formats, onFilterChange, onClearFilters }) {
  return (
    <Card className="filter-card border-0 shadow-sm mb-4">
      <Card.Body>
        <div className="d-flex flex-column flex-lg-row justify-content-between gap-3 mb-3">
          <div>
            <h2 className="h5 fw-bold mb-1">FilterBar</h2>
            <p className="text-muted mb-0">Filtra el catálogo sin recargar la página.</p>
          </div>
          <Button variant="outline-primary" onClick={onClearFilters}>
            Limpiar filtros
          </Button>
        </div>

        <Row className="g-3">
          <Col md={4}>
            <Form.Group controlId="searchText">
              <Form.Label className="fw-semibold">Buscar por texto</Form.Label>
              <Form.Control
                type="text"
                name="searchText"
                placeholder="Ej: React, seguridad, datos..."
                value={filters.searchText}
                onChange={onFilterChange}
              />
            </Form.Group>
          </Col>

          <Col md={4}>
            <Form.Group controlId="area">
              <Form.Label className="fw-semibold">Área de conocimiento</Form.Label>
              <Form.Select name="area" value={filters.area} onChange={onFilterChange}>
                <option value="">Todas las áreas</option>
                {areas.map((area) => (
                  <option key={area} value={area}>
                    {area}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>

          <Col md={4}>
            <Form.Group controlId="format">
              <Form.Label className="fw-semibold">Formato</Form.Label>
              <Form.Select name="format" value={filters.format} onChange={onFilterChange}>
                <option value="">Todos los formatos</option>
                {formats.map((format) => (
                  <option key={format} value={format}>
                    {format}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default FilterBar;
