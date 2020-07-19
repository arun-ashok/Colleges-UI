import React, { Component }  from 'react';
import "./College.css";
import colleges from './colleges.json';
import InfiniteScroll from "react-infinite-scroll-component";
import { render } from "react-dom";

class College extends React.Component
{
  i=10;
  state = {
    colleges: colleges.colleges.slice(0,10),
    hasMore: true
  };

  fetchMoreData = () => {
    if(this.i==colleges.colleges.length){
      this.setState({hasMore:false});
      return;
    }
    this.setState({colleges:this.state.colleges.concat(colleges.colleges.slice(this.i,this.i+10))});
    this.i=this.i+10;
    console.log(this.state);

  };


render() {
    return (  
        <div>
          <InfiniteScroll
            dataLength={this.state.colleges.length}
            next={this.fetchMoreData}
            hasMore={this.state.hasMore}
            loader={<h4>Loading...</h4>}>
            {this.state.colleges.map((i, index) => (
              <div key={index}>
                <div class="column">
                  <div class="card">
                    <h3>{this.state.colleges[index]['college_name']}</h3>
                    <p>Some text</p>
                    <p>Some text</p>
                  </div>
                </div>
              </div>
            ))}
          </InfiniteScroll>
        </div>
    );}
}

export default College;