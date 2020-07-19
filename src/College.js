import React, { Component }  from 'react';
import "./College.css";
import colleges from './colleges.json';
import InfiniteScroll from "react-infinite-scroll-component"

class College extends React.Component
{
  

  constructor(){
    super();
    this.state={colleges:[]}
  }

render() {
  this.state.colleges=Object.values(colleges.colleges);
  var data=this.state.colleges;
  var data1=JSON.stringify(data[0])
    return (  
<div>
<div class="row">
  <div class="column">
    <div class="card">
      <h3>Card 1</h3>
      <p>Some text</p>
      <p>Some text</p>
    </div>
  </div>
  <div class="column">
    <div class="card">
      <h3>Card 2</h3>
      <p>Some text</p>
      <p>Some text</p>
    </div>
  </div>
 </div>
 <div class="row">
  <div class="column">
    <div class="card">
      <h3>Card 3</h3>
      <p>Some text</p>
      <p>Some text</p>
    </div>
  </div>
  <div class="column">
    <div class="card">
      <h3>Card 4</h3>
      <p>Some text</p>
      <p>Some text</p>
    </div>
  </div>
</div>
 <div class="row">
  <div class="column">
    <div class="card">
      <h3>Card 5</h3>
      <p>Some text</p>
      <p>Some text</p>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
      <h3>Card 6</h3>
      <p>Some text</p>
      <p>Some text</p>
    </div>
  </div>
</div>
 <div class="row">
  <div class="column">
    <div class="card">
      <h3>Card 7</h3>
      <p>Some text</p>
      <p>Some text</p>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
      <h3>Card 8</h3>
      <p>Some text</p>
      <p>Some text</p>
    </div>
  </div>
</div>
 <div class="row">
  <div class="column">
    <div class="card">
      <h3>Card 9</h3>
      <p>Some text</p>
      <p>Some text</p>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
      <h3>Card 10</h3>
      <p>Some text</p>
      <p>Some text</p>
    </div>
  </div>
</div>
</div>
);}
}


export default College;