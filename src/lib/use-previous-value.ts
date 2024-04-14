import { useEffect, useRef } from 'react';

export function usePreviousValue<T>(newValue: T): T | undefined {
	const previousRef = useRef<T | undefined>(undefined);

	useEffect(() => {
		previousRef.current = newValue;
	}, [newValue]);

	return previousRef.current;
}
