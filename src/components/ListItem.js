import React, { Component } from 'react'
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";

export default class ListItem extends Component {
    render() {
        return (
            <div class="listItem">
                <h2>Alyssa Blanco</h2>
                <p>(813)480-2369</p>
                <EditButton />
                <DeleteButton />
            </div>
        )
    }
}
