import React, { Component, useState } from 'react'
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class UsersInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            date: '',
            time: '',
            location: '',
        }
    }

    handleChangeInputName = async event => {
        const date = event.target.value
        this.setState({ date })
    }

    handleChangeInputRating = async event => {
        const time = event.target.value

        this.setState({ time })
    }

    handleChangeInputTime = async event => {
        const location = event.target.value
        this.setState({ location })
    }

    handleIncludeUser = async () => {
        const { date, time, location } = this.state
        const payload = { date, time, location }
        
        

        await api.insertUser(payload).then(res => {
            window.alert(`예약 완료`)
            this.setState({
                date: '',
                time: '',
                location: '',
            })
        })
        console.log(payload);
    }

    render() {
        const { date, time, location } = this.state
        return (
            <Wrapper>
                <Title>Create User</Title>

                <Label>date: </Label>
                <InputText
                    type="text"
                    value={date}
                    onChange={this.handleChangeInputName}
                />

                <Label>time: </Label>
                <InputText
                    type="text"
                    min="0"
                    max="10"
                    pattern="[0-9]+([,\.][0-9]+)?"
                    value={time}
                    onChange={this.handleChangeInputRating}
                />

                <Label>location: </Label>
                <InputText
                    type="text"
                    value={location}
                    onChange={this.handleChangeInputTime}
                />

                <Button onClick={this.handleIncludeUser}>Add User</Button>
                <CancelButton href={'/users/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default UsersInsert