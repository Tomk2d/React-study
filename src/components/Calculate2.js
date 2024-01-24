import React, {useState, useMemo} from 'react';
import calculatePrimes from './Calculate'

export default function PrimeCalculator(props){
    const [limit, setLimit] = useState(10);
    
    const primes = useMemo(()=> {
        return calculatePrimes(limit);
    },[limit])

    return (
        <div>
            <input
                type = "number"
                value = {limit}
                onChange={(e)=> setLimit(Number(e.target.value))}
            />
            <p>계산된 소수 : {primes.join(', ')}</p>
        </div>
    )
}