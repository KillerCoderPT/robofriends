import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    // This was for testing the ErrorBoundry
    // if (true) {
    //     throw new Error('NOOOO!!!!');
    // }

    return (
        <div>
            {
                robots.map(user => {
                    return (<Card 
                                key={user.id} 
                                id={user.id} 
                                name={user.name} 
                                email={user.email} 
                            />);
                })
            }
        </div>
    );
}

export default CardList;