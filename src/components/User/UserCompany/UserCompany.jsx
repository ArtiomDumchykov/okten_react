import React from 'react'


const companyList = {
    display: "flex",
    gap: "10px",
    paddingLeft: "15px"
}

const companyItem = {

}

export function UserCompany({ company }) {
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
