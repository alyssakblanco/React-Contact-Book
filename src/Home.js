import React, { Component } from 'react';
import ListItem from "./components/ListItem";
import AddButton from "./components/AddButton";

export default class Home extends Component {
    render() {
        return (
            <div>
              
              <h1>VISA Contact List</h1>
              <ListItem />
              <ListItem />
              <ListItem />
              <AddButton />

            </div>
          );
    }
}
