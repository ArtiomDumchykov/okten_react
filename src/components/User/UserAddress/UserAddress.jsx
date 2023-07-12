import React from 'react'


const addressList = {
    display: "flex",
    gap: "10px",
    paddingLeft: "15px"
}

const addressItem = {

}

export function UserAddress({ address }) {
    const { street, suite, city, zipcode } = address
    return (
        <div>
            <h3>Company</h3>
            <ul style={addressList}>
                <li style={addressItem}><strong>Street:</strong> {street}</li>
                <li style={addressItem}><strong>Suite:</strong> {suite}</li>
                <li style={addressItem}><strong>City:</strong> {city}</li>
                <li style={addressItem}><strong>Zipcode:</strong> {zipcode}</li>
            </ul>
        </div>
    )
}
