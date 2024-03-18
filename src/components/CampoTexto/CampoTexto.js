import { useState } from 'react'
import './CampoTexto.css'

export const CampoTexto = (props) => {

    const aoDigitar = (evento) => {
        props.aoAlterado (evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.value} onChange={aoDigitar} required={props.obrigatorio} placeholder={props.placeholder} />
        </div>
    )
}
