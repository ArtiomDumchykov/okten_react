import React, { useContext } from 'react'
import { UserContext } from '../User'


const companyList = {
    display: "flex",
    gap: "10px",
    paddingLeft: "15px"
}

const companyItem = {

}

export function UserCompany() {
    const {company} = useContext(UserContext)
    const { name, catchPhrase, bs } = company
    return (
        <div>
            <h3>Company</h3>
            <ul style={companyList}>
                <li style={companyItem}><strong>Name:</strong> {name}</li>
                <li style={companyItem}><strong>Catch Phrase:</strong> {catchPhrase}</li>
                <li style={companyItem}><strong>bs:</strong> {bs}</li>
            </ul>
        </div>
    )
}
