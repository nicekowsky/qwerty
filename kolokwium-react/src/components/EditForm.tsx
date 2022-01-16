import React, { Component, FormEvent } from 'react'
import Autor from '../Autor'

type State = {
    id: number,
    firstNameInput: string,
    lastNameInput: string,
    emailInput: string
}

type Props = {
    editAutor: (autor: Autor) => void,
    setIsEdited: (autorId: number) => void,
    autor: Autor
}

export class EditForm extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            id: this.props.autor.id!,
            firstNameInput: this.props.autor.firstName,
            lastNameInput: this.props.autor.lastName,
            emailInput: this.props.autor.email
        }
    }

    formSubmitHandler = (e: FormEvent): void => {
        e.preventDefault();

        const editedAutor: Autor = {
            id: this.state.id,
            firstName: this.state.firstNameInput,
            lastName: this.state.lastNameInput,
            email: this.state.emailInput
        }

        this.props.editAutor(editedAutor);

        this.setState({ firstNameInput: "", lastNameInput: "", emailInput: "" })
        this.props.setIsEdited(0);
    }

    render() {
        return (
            <form onSubmit={this.formSubmitHandler}>
                <label>First name</label>
                <input type="text" value={this.state.firstNameInput} onChange={(e) => this.setState({ ...this.state, firstNameInput: e.target.value })} required />

                <label>Last name</label>
                <input type="text" value={this.state.lastNameInput} onChange={(e) => this.setState({ ...this.state, lastNameInput: e.target.value })} required />
                
                <label>Email</label>
                <input type="email" value={this.state.emailInput} onChange={(e) => this.setState({ ...this.state, emailInput: e.target.value })} required />
                <br />
                <button type='submit'>Save</button>
                <button type='button' onClick={() => this.props.setIsEdited(0)}>Cancel</button>
            </form>
        )
    }
}

export default EditForm
