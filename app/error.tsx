"use client";

import { RouteErrorFallback } from "@/components/route-error";

export default function RootError({
	error,
	retry,
}: {
	error: Error & { digest?: string };
	retry: () => void;
}) {
	return (
		<RouteErrorFallback
			title="Something went wrong"
			description="An unexpected error occurred. Please try again or return to the store."
			error={error}
			retry={retry}
		/>
	);
}
