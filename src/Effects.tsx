import { subscribe, unsubscribe } from './resources/API';
import { useState, useEffect } from 'react';

export function Effects(props: { sourceId: string }) {
    const [last_msg, last_msg_set] = useState(-1);

    useEffect(() => {
        const a = (newMessage: number) => last_msg_set(newMessage);
        subscribe(props.sourceId, a);
        return () => {
            unsubscribe(props.sourceId, a);
            last_msg_set(-1);
        };
    }, [props.sourceId]);
    return (
        <div>
            {props.sourceId}: {last_msg}
        </div>
    );
}
