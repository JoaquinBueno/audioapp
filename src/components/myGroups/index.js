import React, {useState} from 'react'
import {FaArrowRight, FaArrowDown, FaComments} from 'react-icons/fa'
import {GroupNameContainer, GroupName,
 PName, ArrowCont, DescriptionCont,
IconsContainer, IconItems,
 DescriptionTxtCont, StrongDescription, PDescription, ComponentContainer} from './styles'
import {FiUsers} from 'react-icons/fi'
import {MdAttachMoney} from 'react-icons/md'


export const GroupItem = ({title, description, price, _private, members, debates}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [isPrivate, setIsPrivate] = useState(_private)

    const clickHandler = () => {
        setIsOpen(!isOpen)
    }

    return(
        <ComponentContainer>
            <GroupNameContainer>
                <GroupName>
                    <PName>{title}</PName>
                </GroupName>
                <ArrowCont onClick={clickHandler}>
                    {
                        !isOpen ?
                        <FaArrowRight size='20px'/>
                        :
                        <FaArrowDown size='20px'/>
                    }
                </ArrowCont>
            </GroupNameContainer>
            {

                isOpen ?
                <DescriptionCont>
                <DescriptionTxtCont>
                    <PDescription><StrongDescription>Descripcion:</StrongDescription> {description}
                    </PDescription>
                </DescriptionTxtCont>
                <IconsContainer>
                    <IconItems>
                        <FiUsers size='16px'/> <p>{members}</p>
                    </IconItems>
                    {
                        isPrivate ?
                        <IconItems>
                            <MdAttachMoney size='16px'/> <p>{price}</p>
                        </IconItems>
                        : <div></div>
                    }
                    <IconItems>
                        <FaComments size='16px'/> <p>{debates}</p>
                    </IconItems>
                </IconsContainer>
            </DescriptionCont>
                : <div></div>
            }    
        </ComponentContainer>
    )
}