import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
   
  return (
    <div className="cards">
      <h1>Check out the Epic Destinations</h1>
      <div className="cards__contianer">
        <div className="cards__wrapper">
          <div className="cards__items">
            <CardItem
              src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              text="Famous for nurturing classical Keralan performing arts, religious edifices, and the famous Thrissur Pooram festival, Onam Festival, and Vadakkumnathan Temple," 
              
              label="Thrissur"
              path="/details"
            />
            <CardItem
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv-Y4kNX1kDgYJdq7j2CNE2ElPyeFBa_pJV1xHUemF0f98-2fQJMOQSaT_kN0TwLqn2uk&usqp=CAU"
              text="It’s a place where magnificent waterfalls, historical caves, exotic resorts rest. Famous for its spice plantations and wildlife, Wayanad is truly a nature’s abode"
              label="The Heartland / Wayanad"
              path="/details"
            />
            <CardItem
              src="https://images.thrillophilia.com/image/upload/s--_1mMPePZ--/c_fill,g_center,h_450,q_auto,w_753/dpr_1.0,f_auto,fl_strip_profile/v1/images/photos/000/171/539/original/1568888643_shutterstock_545452072.jpg.jpg"
              text="The village of Kumarakom lets you experience magic in several ways. It’s a huddle of little human-made islands situated on the Vembanad Lake"
              label="Kumarakom"
              path="/details"
            />
             <CardItem
              src="https://images.thrillophilia.com/image/upload/s--O1US4b0I--/c_fill,g_center,h_450,q_auto,w_753/dpr_1.0,f_auto,fl_strip_profile/v1/images/photos/000/171/536/original/1568887875_shutterstock_787943344.jpg.jpg"
              text="Popular as the beach lover’s first choice, Kovalam is one of the most beautiful tourist places to visit in Kerala. Kovalam is a peaceful village located at the coastlines of the Arabian Sea"
              label="Kovalam"
              path="/details"
            />

          </div>
          <div className="cards__items">
            <CardItem
              src="https://images.unsplash.com/photo-1593693397690-362cb9666fc2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8a2VyYWxhfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              text="A hub of Kerala's backwaters, Alleppey is the center of an immense net of waterways and coir industry. Officially called Alappuzha, this beautiful city borders the Laccadive Sea and revivified Ayurvedic resorts"
              label="Backwater / Alleppey"
              path="/details"
            />
             <CardItem
              src="https://images.thrillophilia.com/image/upload/s--_Fnau1WJ--/c_fill,g_center,h_450,q_auto,w_753/dpr_1.0,f_auto,fl_strip_profile/v1/images/photos/000/147/456/original/1551958647_kozhikode.jpg.jpg"
              text="Renowned for its history, Kozhikode is one of the most beautiful tourist places in Kerala. It was the place where Vasco-da-Gama first landed in India and the origins of the famous Spice route were mapped"
              label="Kozhikode"
              path="/details"
            />
             <CardItem
              src="https://images.thrillophilia.com/image/upload/s--7cBfvtEM--/c_fill,g_center,h_450,q_auto,w_753/dpr_1.0,f_auto,fl_strip_profile/v1/images/photos/000/171/538/original/1568888550_shutterstock_1053982895.jpg.jpg"
              text="Thekkady is one of the top-most visited tourist places in Kerala. It is the location of the largest Tiger Reserve in the country- Periyar Tiger Reserve. If you want to explore a jungle on your vacation"
              label="Thekkady"
              path="/details"
            />
             <CardItem
              src="https://images.thrillophilia.com/image/upload/s--1IXT2R9a--/c_fill,g_center,h_450,q_auto,w_753/dpr_1.0,f_auto,fl_strip_profile/v1/images/photos/000/171/540/original/1568888722_shutterstock_1083228824.jpg.jpg"
              text="Widely recognized as an “eco-village in the Western Ghats,” Idukki is one of the most vibrant and naturally lush places to visit in Kerala."
              label="Idukki"
              path="/details"
            />
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Cards;
