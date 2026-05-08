import { useMemo, useState } from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header.jsx';
import FilterBar from './components/FilterBar.jsx';
import VideoGrid from './components/VideoGrid.jsx';
import { videos } from './data/videos.js';

const initialFilters = {
  searchText: '',
  area: '',
  format: ''
};

function App() {
  const [filters, setFilters] = useState(initialFilters);

  const areas = useMemo(() => [...new Set(videos.map((video) => video.area))], []);
  const formats = useMemo(() => [...new Set(videos.map((video) => video.format))], []);

  const filteredVideos = useMemo(() => {
    const normalizedSearch = filters.searchText.toLowerCase().trim();

    return videos.filter((video) => {
      const matchesText =
        video.title.toLowerCase().includes(normalizedSearch) ||
        video.author.toLowerCase().includes(normalizedSearch) ||
        video.area.toLowerCase().includes(normalizedSearch) ||
        video.level.toLowerCase().includes(normalizedSearch);

      const matchesArea = filters.area === '' || video.area === filters.area;
      const matchesFormat = filters.format === '' || video.format === filters.format;

      return matchesText && matchesArea && matchesFormat;
    });
  }, [filters]);

  const handleFilterChange = (event) => {
    const { name, value } = event.target;

    setFilters((previousFilters) => ({
      ...previousFilters,
      [name]: value
    }));
  };

  const handleClearFilters = () => {
    setFilters(initialFilters);
  };

  return (
    <>
      <Header />
      <main>
        <Container className="pb-5">
          <FilterBar
            filters={filters}
            areas={areas}
            formats={formats}
            onFilterChange={handleFilterChange}
            onClearFilters={handleClearFilters}
          />

          <section className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <h2 className="h4 fw-bold mb-1">CardSystem</h2>
              <p className="text-muted mb-0">
                {filteredVideos.length} resultado(s) encontrado(s)
              </p>
            </div>
          </section>

          <VideoGrid videos={filteredVideos} />
        </Container>
      </main>
    </>
  );
}

export default App;
