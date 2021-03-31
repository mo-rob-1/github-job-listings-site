import React, { useState } from 'react';
import useFetchJobs from './useFetchJobs';
import { Container, Spinner } from 'react-bootstrap';
import Job from './Job';

function App() {
  const [params, setParams] = useState({})
  const [page, setPage] = useState(1)
  const { jobs, loading, error } = useFetchJobs(params, page)

  return (
    <Container>
      {loading && <Spinner animation="border" variant="dark" />}
      {error && <h1>Error, Try Refreshing.</h1>}
      {jobs.map(job => {
        return <Job key={job.id} job={job} />
      })}
    </Container>
  );
}

export default App;
