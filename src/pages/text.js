import React, { useState, useEffect } from "react";
import axios from "axios";
import "../pages/text.css";
import Card from "react-bootstrap/Card";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Text() {
  const [movies, setMovies] = useState([]); 
  const [selectedYear, setSelectedYear] = useState("2021");
  const [searchTerm, setSearchTerm] = useState(""); 
  const [loading, setLoading] = useState(false);
  
  const fetchMovies = async (title = "", year = "") => {
    setLoading(true);
    try {
      let query = `https://omdbapi.com/?apikey=4e9e8ed7&type=series`;
      
      if (title) {
        query += `&s=${title}`;
      } else {
        query += `&s=series`; 
      }
      
      if (year) {
        query += `&y=${year}`;
      }
      
      const response = await axios.get(query);
      setMovies(response.data.Search || []);
    } catch (error) {
      console.error("Error fetching data", error);
      setMovies([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMovies("", selectedYear);
  }, []);

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
    fetchMovies(searchTerm, event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    fetchMovies(searchTerm, event.target.value);
  };

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const currentYear = new Date().getFullYear();
  const years = [];
  for (let year = 1947; year <= currentYear; year++) {
    years.push(year);
  }

  return (
    <div className="background">
      
      <Form className="d-flex mb-3" onSubmit={handleSearch}>
        <Form.Control
          type="search"
          placeholder="Search by title"
          className="me-2"
          aria-label="Search"
          value={searchTerm}
          onChange={handleSearchInputChange}
        />
        <Button className='button' variant="outline-success" type="submit">
          Search
        </Button>
      </Form>

      <div className="mb-3">
        <label htmlFor="year" className="me-2">Select Year:</label>
        <select
          name="year"
          id="year"
          onChange={handleYearChange}
          value={selectedYear}
        >
          <option value="">All Years</option> 
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      {loading ? (
        <div className="text-center my-4">
          <Spinner animation="border" role="status" variant="primary" />
        </div>
      ) : (
        <Container>
          <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-4">
            {movies.length > 0 ? (
              movies.map((movie, index) => (
                <Col key={index}>
                  <div className="card-container">
                    <Card className="custom-card">
                      <Card.Img 
                        variant="top" 
                        src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450?text=No+Poster"} 
                      />
                      <Card.Body>
                        <Card.Title>{movie.Title}</Card.Title>
                        <Card.Text>{movie.Year}</Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
              ))
            ) : (
              <Col className="text-center my-4">
                <p>No movies found. Try a different search.</p>
              </Col>
            )}
          </Row>
        </Container>
      )}
    </div>
  );
}

export default Text;