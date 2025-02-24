// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "../pages/text.css";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";

// function Text() {
//   const [index, setIndex] = useState([]);

//   async function handleClick() {
//     let data = await axios.get("https://omdbapi.com/?apikey=4e9e8ed7&s=series");
//     console.log(data, "<=== data");
//     setIndex(data.data.Search);
//   }

//   useEffect(() => {
//     handleClick();
//   }, []);

//   return (
//     <>

//       <div className="background">
//         <div
//           style={{
//             display: "flex",
//             flexWrap: "wrap",
//             paddingInline: "auto",
//             margin: "auto",
//             color: "white",
//           }}
//         >
//           {index.length > 0 ? (
//             index.map((item, index) => (
//              <div className="card"> <Card style={{ width: "18rem" }}>
//                 <Card.Img variant="top" src={item.Poster} />
//                 <Card.Body>
//                   <Card.Title>{item.Title}</Card.Title>
//                   <Card.Text>{item.Year}</Card.Text>
                 
//                 </Card.Body>
//               </Card>
//               </div>
//             ))
//           ) : (
//             <p>No results found</p>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }

// export default Text;





import React, { useState, useEffect } from "react";
import axios from "axios";
import "../pages/text.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";

function Text() {
  const [index, setIndex] = useState([]);

  async function handleClick() {
    let data = await axios.get("https://omdbapi.com/?apikey=4e9e8ed7&s=series");
    console.log(data, "<=== data");
    setIndex(data.data.Search);
  }

  useEffect(() => {
    handleClick();
  }, []);

  return (
    <>
      <div className="background">
        <Container>
          <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-4">
            {index.length > 0 ? (
              index.map((item, index) => (
                <Col key={index}>
                  <div className="card-container">
                    <Card className="custom-card">
                      <Card.Img variant="top" src={item.Poster} />
                      <Card.Body>
                        <Card.Title>{item.Title}</Card.Title>
                        <Card.Text>{item.Year}</Card.Text>
                        {/* <Button variant="primary">More Info</Button> */}
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
              ))
            ) : (
              <p>No results found</p>
            )}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Text;
