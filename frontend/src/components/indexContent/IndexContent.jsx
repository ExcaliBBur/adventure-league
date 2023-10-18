import React from 'react';
import AuthSection from './authSection/AuthSection'

const IndexContent = (props) => {
    return (
        <main className="pt-[15%] flex justify-center items-center">
            <label>
                <AuthSection/>
            </label>
        </main>
    );
}

export default IndexContent;