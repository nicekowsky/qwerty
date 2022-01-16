import React, { Component, FormEvent } from 'react'
import Autor from '../Autor';

type State = {
    firstNameInput: string,
    lastNameInput: string,
    emailInput: string
}

type Props = {
    addAutor: (autor: Autor) => void
}

export class Form extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            firstNameInput: "",
            lastNameInput: "",
            emailInput: ""
        }
    }

    formSubmitHandler = (e: FormEvent): void => {
        e.preventDefault();

        const newAutor: Autor = {
            firstName: this.state.firstNameInput,
            lastName: this.state.lastNameInput,
            email: this.state.emailInput
        }

        this.props.addAutor(newAutor);

        this.setState({ firstNameInput: "", lastNameInput: "", emailInput: "" })
    }

    render() {
        return (
            <form onSubmit={this.formSubmitHandler}>
                <label>First name</label>
                <input type="text" value={this.state.firstNameInput} onChange={(e) => this.setState({ ...this.state, firstNameInput: e.target.value })} required />

                <label>Last name</label>
                <input type="text" value={this.state.lastNameInput} onChange={(e) => this.setState({ ...this.state, lastNameInput: e.target.value })} required />
                
                <label>E-mail</label>
                <input type="email" value={this.state.emailInput} onChange={(e) => this.setState({ ...this.state, emailInput: e.target.value })} required />

                <button type='submit'>Save</button>
            </form>
        )
    }
}

export default Form
