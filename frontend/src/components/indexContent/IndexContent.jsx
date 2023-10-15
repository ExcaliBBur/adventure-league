import React from 'react';
import AuthSection from './authSection/AuthSection'

const IndexContent = (props) => {
    return (
        <main className="main-container">
            <label>
                <AuthSection/>
            </label>
        </main>
    );
}

export default IndexContent;