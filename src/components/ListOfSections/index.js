import React, {useState} from 'react'
import { Section } from '../Section'
import {ListOfSecContainer} from './styles'
import {SearchBar} from '../SearchBar'

export const ListOfSections = () => {
    const [sections, setSections] = useState([
        {
            src: '/assets/Sections/Books.jpg',
            to: '/Books',
            title: 'Libros',
            id: 0
        },
        {
            src: '/assets/Sections/Games.jpg',
            to: '/Games',
            title: 'Juegos/Esports',
            id: 1
        },
        {
            src: '/assets/Sections/MedioAmbiente.jpg',
            to: '/Medio-Ambiente',
            title: 'Medio Ambiente',
            id: 2
        },
        {
            src: '/assets/Sections/Movies.jpg',
            to: '/Movies',
            title: 'Peliculas',
            id: 3
        },
        {
            src: '/assets/Sections/Music.jpg',
            to: '/Music',
            title: 'Musica',
            id: 4
        },
        {
            src: '/assets/Sections/Sports.jpg',
            to: '/Sports',
            title: 'Deportes',
            id: 5
        },
        {
            src: '/assets/Sections/Tech.jpg',
            to: '/Tech',
            title: 'Tecnologia',
            id: 6
        },
        {
            src: '/assets/Sections/Vegans.jpg',
            to: '/Vegans',
            title: 'Veganismo/Vegetarianismo',
            id: 7
        },
        {
            src: '/assets/Feminismo.jpg',
            to: '/Politica',
            title: 'Politica',
            id: 8
        },
        {
            src: '/assets/Sections/Trending.jpg',
            to: '/Trending',
            title: 'Trending',
            id: 9
        }
    ])
    return(
        <>
        <SearchBar state={sections}/>
        <ListOfSecContainer>
            {
                sections.map(section => <Section {...section} key={section.id}/>)
            }
        </ListOfSecContainer>
        </>
    )
}