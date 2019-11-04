import React from 'react';
import { Grid, Row } from 'react-bootstrap';
import Navigation from '../Navaigation/Navigation.js'

const layout = (props) => {
    return (
        <Grid>
            <Row>
                <Navigation/>
            </Row>
            <main>
                {props.children}
            </main>
        </Grid>
    )
}
export default layout;