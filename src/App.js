import React from 'react';
import styled from 'styled-components'
import Users from './components/users/users';
import Modal from './components/modal/modal';
import Posts from './components/posts/posts';
import { useSelector } from 'react-redux';
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
    const editUser = useSelector(state => state.users.editUser)
    const addUser = useSelector(state => state.users.addUser)

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
        { editUser || addUser ?
            <Modal
                editUser={editUser}
            /> :
            null
        }
    </Container>
    )
}

export default App;
