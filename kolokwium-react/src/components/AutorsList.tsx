import React, { Component } from 'react'
import Autor from '../Autor'
import EditForm from './EditForm'

type Props = {
    autors: Autor[],
    editAutor: (autor: Autor) => void,
}

type State = {
    editedAutor: number
}

export class AutorsList extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            editedAutor: 0
        }
    }

    setIsEdited = (id: number): void => {
        this.setState({ editedAutor: id })
    }

    render() {
        return (
            <div className="table">
                <div className="head">
                    <div className="col">Id</div>
                    <div className="col">Imię</div>
                    <div className="col">Nazwisko</div>
                    <div className="col">E-mail</div>
                    <div className="col"></div>
                </div>
                {this.props.autors.map(p =>
                <div className="row" key={p.id}>
                    <div className="colt-1">{p.id}</div>
                    <div className="colt-2">{p.firstName}</div>
                    <div className="colt-3">{p.lastName}</div>
                    <div className="colt-4">{p.email}</div>
                    <div className="colt-5"><button style={{ margin: "5px" }} onClick={() => this.setIsEdited(p.id!)}>Edit</button></div>
                    <div className="colb">{this.state.editedAutor === p.id && <EditForm editAutor={this.props.editAutor} autor={p} setIsEdited={this.setIsEdited} />}</div>
                </div>
                )}
            </div>
        )
    }
}

export default AutorsList
