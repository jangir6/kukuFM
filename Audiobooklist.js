import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Spinner, Alert } from 'react-bootstrap';

const AudiobookList = () => {
  const [audiobooks, setAudiobooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  if (loading) return <Spinner animation="border" />;
  if (error) return <Alert variant="danger">Error loading audiobooks</Alert>;

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {audiobooks.map(audiobook => (
        <div key={audiobook.id} className="col">
          <Card className="h-100">
            <Card.Img variant="top" src={audiobook.coverImage} alt={audiobook.title} />
            <Card.Body>
              <Card.Title>{audiobook.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{audiobook.author}</Card.Subtitle>
              <Link to={`/audiobooks/${audiobook.id}`} className="btn btn-primary">
                View Details
              </Link>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default AudiobookList;
