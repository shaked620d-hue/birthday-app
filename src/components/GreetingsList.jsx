import React from 'react'
import GreetingCard from './GreetingCard'

export default function GreetingsList({ greetings = [] }) {
    return (
        <section>
            <h2>ברכות ליום הולדת</h2>
            {greetings.map((greeting, index) => (
                <GreetingCard key={index} greeting={greeting} />
            ))}
        </section>
    );
}
