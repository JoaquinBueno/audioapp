import React, {useState} from 'react'
import {GroupItem} from '../myGroups'
import styled from 'styled-components'

const LOMG = styled.div`
    margin-bottom: 55px;
    margin-top: 10px;
`


export const ListOfMyGroups = () => {
    const [groups, setGroups] = useState([
        {
            title: 'Liberales en Chile',
            description: "Somos un grupo de individuos que cree en las libertades individuales, el libre mercado, la propiedad privada y que el estado deberia ser limitado.",
            price: 3.99,
            _private: true,
            members: 123,
            debates: 39,
            id: 0,
        },
        {
            title: 'Libros de Economia Austriaca',
            description: 'Aqui podras discutir sobre tus libros de economia austriaca preferidos. Por favor, mantener el respeto hacia los miembros del grupo',
            price: 0,
            _private: false,
            members: 1255,
            debates: 159,
            id: 1,
        },
        {
            title: 'Guerrilleros del Che',
            description: 'Aguante el Che Guevara, Fidel y la revolucion. Gorilas abstenerce. Aqui debatiremos sobre el sucio capitalismo',
            price: 29.99,
            _private: true,
            members: 205,
            debates: 1,
            id: 2,
        },
        {
            title: 'Los zurdos son putos',
            description: 'Los zurdos son todos putos, si estas de acuerdo te podes sumar, y si no estas de acuerdo tambien... siempre se necesita algun putito en el grupo',
            price: 0,
            _private: false,
            members: 1232,
            debates: 225,
            id: 3,
        },
        {
            title: 'Liberales en Chile',
            description: "Somos un grupo de individuos que cree en las libertades individuales, el libre mercado, la propiedad privada y que el estado deberia ser limitado.",
            price: 3.99,
            _private: true,
            members: 123,
            debates: 39,
            id: 4,
        },
        {
            title: 'Libros de Economia Austriaca',
            description: 'Aqui podras discutir sobre tus libros de economia austriaca preferidos. Por favor, mantener el respeto hacia los miembros del grupo',
            price: 0,
            _private: false,
            members: 1255,
            debates: 159,
            id: 5,
        },
        {
            title: 'Guerrilleros del Che',
            description: 'Aguante el Che Guevara, Fidel y la revolucion. Gorilas abstenerce. Aqui debatiremos sobre el sucio capitalismo',
            price: 29.99,
            _private: true,
            members: 205,
            debates: 1,
            id: 6,
        },
        {
            title: 'Los zurdos son putos',
            description: 'Los zurdos son todos putos, si estas de acuerdo te podes sumar, y si no estas de acuerdo tambien... siempre se necesita algun putito en el grupo',
            price: 0,
            _private: false,
            members: 1232,
            debates: 225,
            id: 7,
        },
        {
            title: 'Liberales en Chile',
            description: "Somos un grupo de individuos que cree en las libertades individuales, el libre mercado, la propiedad privada y que el estado deberia ser limitado.",
            price: 3.99,
            _private: true,
            members: 123,
            debates: 39,
            id: 8,
        },
        {
            title: 'Libros de Economia Austriaca',
            description: 'Aqui podras discutir sobre tus libros de economia austriaca preferidos. Por favor, mantener el respeto hacia los miembros del grupo',
            price: 0,
            _private: false,
            members: 1255,
            debates: 159,
            id: 9,
        },
        {
            title: 'Guerrilleros del Che',
            description: 'Aguante el Che Guevara, Fidel y la revolucion. Gorilas abstenerce. Aqui debatiremos sobre el sucio capitalismo',
            price: 29.99,
            _private: true,
            members: 205,
            debates: 1,
            id: 10,
        },
        {
            title: 'Los zurdos son putos',
            description: 'Los zurdos son todos putos, si estas de acuerdo te podes sumar, y si no estas de acuerdo tambien... siempre se necesita algun putito en el grupo',
            price: 0,
            _private: false,
            members: 1232,
            debates: 225,
            id: 11,
        },
    ])
    return(
        <LOMG>
            {groups.map(group => <GroupItem {...group} key={group.id}/>)}
        </LOMG>
    )
}