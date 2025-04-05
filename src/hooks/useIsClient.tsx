"use client";

import { useSyncExternalStore } from "react";

const useIsClient = () => {
	const isClient = useSyncExternalStore(
		() => () => {},
		() => true,
		() => false,
	);
	return isClient;
};

export default useIsClient;
