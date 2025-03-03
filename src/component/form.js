import "../component/Form.css"

function Form(){

    function Adding(evt){
        (evt,"<=====evt")
        alert("this is call back function ")

    }

    return(
       <>

        <form action="" className="form" onSubmit={Adding}>
            <label htmlFor="Name">Name : </label>
            <input type="text"/><br /><br />
            <label htmlFor="Mobile">Mobile : </label>
            <input type="number"/>
            <br /><br />
            <label htmlFor="email">email : </label>
            <input type="email"/><br /><br />
            <label htmlFor="password">password : </label>
            <input type="password"/><br /><br />
            <label htmlFor="d.o.b">d.o.b : </label>
            <input type="date"/>
            <input type="submit"></input>
        <br /><br />

            <label htmlFor="Name">Name : </label>
            <input type="text"/>
             <label htmlFor="Name">Name : </label>
             <input type="text"/>

        </form>

       </>
    )
}
export default Form;






  // import React, { useState, useEffect } from "react";
  // import axios from "axios";
  // import "../pages/text.css";
  // import Card from "react-bootstrap/Card";
  // import { Container, Row, Col, Spinner } from "react-bootstrap"; // Import Spinner for loading indicator
  // import Button from 'react-bootstrap/Button';
  // import Form from 'react-bootstrap/Form';

  // function Text() {
  //   const [index, setIndex] = useState([]); // State to hold the fetched movies
  //   const [selectedYear, setSelectedYear] = useState("2021"); // State to hold the selected year
  //   const [loading, setLoading] = useState(false); // State to track loading status
  //   const [SafeSearch,setSafeSearch] = useState()
  //   // Function to fetch movies based on the year
  //   async function handleClick(year) {
  //     setLoading(true); // Start loading
  //     try {
  //       const response = await axios.get(
  //         `https://omdbapi.com/?apikey=4e9e8ed7&s=series&y=${year}`
  //       );
  //       setIndex(response.data.Search || []); // Update state with the fetched data
  //     } catch (error) {
  //       console.error("Error fetching data", error);
  //       setIndex([]); // Reset the state if there is an error
  //     }
  //     setLoading(false); // End loading
  //   } 

  //   // Effect to run initially and whenever the selected year changes
  //   useEffect(() => {
  //     handleClick(selectedYear); // Fetch movies for the selected year
  //   }, [selectedYear]); // Dependency array with selectedYear to re-run when the year changes

   

  //   // Function to handle the year selection change
  //   const handleYearChange = (event) => {
  //     setSelectedYear(event.target.value); // Update selectedYear state
  //   };


    

  //   // Get the current year and create a range from 1947 to the current year
  //   const currentYear = new Date().getFullYear();
  //   const years = [];
  //   for (let year = 1947; year <= currentYear; year++) {
  //     years.push(year);
  //   }

  //   useEffect(() => {
  //     handleClick(SafeSearch); // Fetch movies for the selected year
  //   }, [SafeSearch]); 

  //   const HandleSafeSearch = (evt) => {
  //     evt.preventDefault(); 
  //     setSafeSearch(evt.target.value); // Update selectedYear state
  //   }; // Dependency array with selectedYear to re-run when the year changes

  //   return (
  //     <>
  //     <div className="background">

  //     <Form className="d-flex">
  //           <Form.Control
  //             type="search"
  //             placeholder="Search"
  //             className="me-2"
  //             aria-label="Search"
  //             onSubmit={HandleSafeSearch}
  //           />
  //           <Button className='button' variant="outline-success" type="submit">Search</Button> 
  //         </Form>

  //       {/* Year selector */}
  //       <select
  //         name="year"
  //         id="year"
  //         onChange={handleYearChange}
  //         value={selectedYear}
  //       >

       

  //         {years.map((year) => (
  //           <>
  //             <label htmlFor="year">select year</label>
  //             <option key={year} value={year}>
  //               {year}
  //             </option>
  //           </>
  //         ))}
  //       </select>

  //       {/* Loading spinner */}
  //       {loading ? (
  //         <div className="text-center">
  //           <Spinner animation="border" role="status" variant="primary" />
  //         </div>
  //       ) : (
  //         <Container>
  //           <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-4">
  //             {index.length > 0 ? (
  //               index.map((item, index) => (    
  //                 <Col key={index}>
  //                   <div className="card-container">
  //                     <Card className="custom-card">
  //                       <Card.Img variant="top" src={item.Poster} />
  //                       <Card.Body>
  //                         <Card.Title>{item.Title}</Card.Title>
  //                         <Card.Text>{item.Year}</Card.Text>
  //                       </Card.Body>
  //                     </Card>
  //                   </div>
  //                 </Col>
  //               ))
  //             ) : (
  //               <p>No movies found for this year</p>
  //             )}
  //           </Row>
  //         </Container>
  //       )}
  //     </div>
      
      
      
  //     </>
  //   );
  // }

  // export default Text;


  // // import Form from "../component/Form.css";

  // // function Text(){
  // //   return(
  // //     <>
  // //     <Form/>
  // //     </>
  // //   )
  // // }

  // // export default Text;

