import React, { useState, useEffect } from "react";
import Dropdown from 'react-bootstrap/Dropdown';

function SearchFilterMovies() {

    return <div>
        hey
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Genres
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Documentary</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Comedy</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </div>
}

export default SearchFilterMovies