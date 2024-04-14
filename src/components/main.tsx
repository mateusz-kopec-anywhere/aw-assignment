import { forwardRef } from 'react';

import { MAIN_ID } from '~/lib/constants';

type MainProps = Omit<React.HTMLAttributes<HTMLElement>, 'id'>;

export const Main = forwardRef<HTMLElement, MainProps>(function Main(
	{ children, ...consumerProps },
	forwardeRef
) {
	return (
		<main {...consumerProps} id={MAIN_ID} ref={forwardeRef}>
			{children}
		</main>
	);
});
