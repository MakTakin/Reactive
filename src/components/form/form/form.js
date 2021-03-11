import React from 'react'
import styled from 'styled-components'
import { EditUserButton, FormButton } from '../../ui/buttons';
import { changeActivateUser } from '../../../redux/actions/actions';

const FormContainer = styled.form`
    margin-top: 5%;
    display: flex;
    flex-direction: column;
`

const FormColumn = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
`

const FormInput = styled.input`
    border: none;
    border: 1px solid #333333;
    border-radius: 5px;
    padding: 10px;
    outline: none;
    margin-bottom: 20px;
    
    &:focus {
        border: 1px solid #065bf9;
    }
    &:disabled {
        cursor: not-allowed;
    }
`

const FormFlex = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 20px;
`

const FormButtonContainer = styled.div`
    text-align: center;
`

const Form = ({ user, setUser, onSubmit, activateUser, dispatch }) => {

    const changeUser = (e) => {
        const editUser = { ...user }

        switch (e.target.name) {
            case 'street':
            case 'city':
            case 'suite':
                editUser.address[e.target.name] = e.target.value
                break

            default:
                editUser[e.target.name] = e.target.value
        }
        setUser(editUser)
    }

    return (
            <FormContainer onSubmit={(e) => onSubmit(e)}>
                <FormFlex>
                    <FormColumn>
                        <FormInput
                            placeholder='name'
                            name='name'
                            value={user.name}
                            onChange={(e) => changeUser(e)}
                            disabled={activateUser}
                        />
                        <FormInput
                            placeholder='username'
                            name='username'
                            value={user.username}
                            onChange={(e) => changeUser(e)}
                            disabled={activateUser}
                        />
                        <FormInput
                            placeholder='phone'
                            name='phone'
                            value={user.phone}
                            onChange={(e) => changeUser(e)}
                            disabled={activateUser}
                        />
                        <FormInput
                            placeholder='email'
                            name='email'
                            value={user.email}
                            onChange={(e) => changeUser(e)}
                            disabled={activateUser}
                        />
                    </FormColumn>
                    <FormColumn>
                        <FormInput
                            placeholder='city'
                            name='city'
                            value={user.address.city}
                            onChange={(e) => changeUser(e)}
                            disabled={activateUser}
                        />
                        <FormInput
                            placeholder='street'
                            name='street'
                            value={user.address.street}
                            onChange={(e) => changeUser(e)}
                            disabled={activateUser}
                        />
                        <FormInput
                            placeholder='suite'
                            name='suite'
                            value={user.address.suite}
                            onChange={(e) => changeUser(e)}
                            disabled={activateUser}
                        />
                        <FormInput
                            placeholder='website'
                            name='website'
                            value={user.website}
                            onChange={(e) => changeUser(e)}
                            disabled={activateUser}
                        />
                    </FormColumn>
                </FormFlex>
                <FormButtonContainer>
                    <FormButton
                        type='submit'
                        activateUser={activateUser}
                    >
                        Save
                    </FormButton>
                    <EditUserButton
                        type='button'
                        activateUser={activateUser}
                        onClick={() => dispatch(changeActivateUser(true))}
                    >
                        Edit User
                    </EditUserButton>
                </FormButtonContainer>
            </FormContainer>
    )
}
export default Form