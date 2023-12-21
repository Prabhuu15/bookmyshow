import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Link } from "react-router-dom";
import React from "react";
function Movies() {
  return (
    <>
      <Carousel
        interval={null}
        style={{
          width: "1200px",
          marginTop: "50px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Carousel.Item>
          <CardGroup>
            <Card>
              <Card.Img variant="top" src={"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC40LzEwICA0MzQuNUsgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00311762-zjjwutxtls-portrait.jpg"} />
              <Card.Body>
                <Card.Title>Animal</Card.Title>
                <Card.Text>This is a wider card with supporting</Card.Text>
                <Link to="/bookingmovie">
                
                  <Button style={{ cursor: "pointer" }} variant="danger">
               
                    Book
                  </Button>
                </Link>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC42LzEwICAyLjZLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00331568-bjypcwuvyz-portrait.jpg"} />
              <Card.Body>
                <Card.Title>Wonka</Card.Title>
                <Card.Text>This card has supporting</Card.Text>{" "}
                <Link to="/bookingmovie">
               
                  <Button style={{ cursor: "pointer" }} variant="danger">
             
                    Book
                  </Button>
                </Link>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4yLzEwICA1NS4zSyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00364503-ybandkparz-portrait.jpg"} />
              <Card.Body>
                <Card.Title>Nanna</Card.Title>
                <Card.Text>This card has supporting</Card.Text>
                <Link to="/bookingmovie">
              
                  <Button style={{ cursor: "pointer" }} variant="danger">
               
                    Book
                  </Button>
                </Link>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-My41SyBMaWtlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00374544-nvpqsuwtfu-portrait.jpg"} />
              <Card.Body>
                <Card.Title>Slient Night</Card.Title>
                <Card.Text>This is a wider card wit</Card.Text>
                <Link to="/bookingmovie">
                 
                  <Button style={{ cursor: "pointer" }} variant="danger">
                
                    Book
                  </Button>
                </Link>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC43LzEwICAyNy40SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00346319-hlsyvjavdx-portrait.jpg"} />
              <Card.Body>
                <Card.Title>Transformers</Card.Title>
                <Card.Text>This is a wider card with s</Card.Text>
                <Button style={{ cursor: "pointer" }} variant="danger">
                 
                  Book
                </Button>
              </Card.Body>
            </Card>
          </CardGroup>
        </Carousel.Item>
        <Carousel.Item>
          <CardGroup>
            <Card>
              <Card.Img variant="top" src={"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny4zLzEwICAxMC4ySyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00364208-tkgyrjgeqc-portrait.jpg"} />
              <Card.Body>
                <Card.Title>NAPOLEAN</Card.Title>
                <Card.Text>This is a wider card with supp</Card.Text>
                <Link to="/bookingmovie">
             
                  <Button style={{ cursor: "pointer" }} variant="danger">
                 
                    Book
                  </Button>
                </Link>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4zLzEwICA1Mi43SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00347275-hedwbuwmky-portrait.jpg"} />
              <Card.Body>
                <Card.Title>Spider man</Card.Title>
                <Card.Text>This card has supporting text below</Card.Text>
                <Link to="/bookingmovie">
                  
                  <Button style={{ cursor: "pointer" }} variant="danger">
                    
                    Book
                  </Button>
                </Link>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-OS45SyBMaWtlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00379120-uzbnyvbdru-portrait.jpg"} />
              <Card.Body>
                <Card.Title>Flight Club</Card.Title>
                <Card.Text>This is a wider card with supporting t</Card.Text>
                <Link to="/bookingmovie">
                  
                  <Button style={{ cursor: "pointer" }} variant="danger">
                    
                    Book
                  </Button>
                </Link>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-NUsgTGlrZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00379335-jjguhpxcba-portrait.jpg"} />
              <Card.Body>
                <Card.Title>MAYALo</Card.Title>
                <Card.Text>This is a wider card with supporting</Card.Text>
                <Link to="/bookingmovie">
                  
                  <Button style={{ cursor: "pointer" }} variant="danger">
                  
                    Book
                  </Button>
                </Link>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny4zLzEwICAyMTIuN0sgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00313411-pqjjjyaezl-portrait.jpg"} />
              <Card.Body>
                <Card.Title>Tiger 3</Card.Title>
                <Card.Text>This is a wider card with supporting</Card.Text>
                <Link to="/bookingmovie">
                
                  <Button style={{ cursor: "pointer" }} variant="danger">
               
                    Book
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </CardGroup>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Movies;