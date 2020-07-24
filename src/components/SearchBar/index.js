import React, {useState} from 'react'
import {FaSearch} from 'react-icons/fa'
import {SearchInput, SearchContainer, FilterContainer} from './styles'
import {Section} from '../Section'



export const SearchBar =({state})=> {
    const [filter, setFilter] = useState('')

    // const filteredJobs = jobs.filter(job => {
    //     return job.related.includes(search)})

    const filterHandler = state.filter(filt => {
        return filt.title.toLowerCase().includes(filter.toLowerCase())
    })

    return(
        <>
        <SearchContainer>
            <SearchInput onChange={e => setFilter(e.target.value)}/><FaSearch size='20px'/>
        </SearchContainer>
        <FilterContainer>
            {
                (filter !== '') ?
                filterHandler.map(section => 
                    <Section {...section}
                    src={section.src}
                    to={section.to}
                    title={section.title}
                    key={section.id}/>)
                    : <div> </div>
            }
        </FilterContainer>
        </>
    )
}