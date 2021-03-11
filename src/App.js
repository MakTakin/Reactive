import React from 'react';
import styled from 'styled-components'
import Users from './components/users/users';
import Posts from './components/posts/posts';
import Modal from './components/modal/modal';
import { Redirect, Route, Switch } from 'react-router-dom';

const Container = styled.div`
    max-width: 1200px;
    height: 95vh;
    padding: 0 20px;
    background: #f9f9f9;
    margin: 10px auto;
    border-radius: 10px;
    border: 1px solid grey;
    box-shadow: 0px 0px 13px 3px #696868;
`

function App() {

    return (
    <Container>
        <Switch>
            <Route path='/'
                   render={() => <Users/>
                   }
                   exact
            />
            <Route path='/posts/:id'
                   render={(props) => <Posts {...props}/>
                   }
            />
            <Redirect to='/'/>
        </Switch>
        <Modal/>
    </Container>
    )
}

export default App;
