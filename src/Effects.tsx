import { subscribe, unsubscribe } from './resources/API';
import { useState, useEffect } from 'react';

export function Effects(props: { sourceId: string }) {
    const [message, newmessageset] = useState(-1);

    useEffect(() => {
        const a = (newMessage: number) => newmessageset(newMessage);
        subscribe(props.sourceId, a);
        return () => {
            unsubscribe(props.sourceId, a);
            newmessageset(-1);
        };
    }, [props.sourceId]);
    return (
        <div>
            {' '}
            {props.sourceId}: {message}{' '}
        </div>
    );
}
