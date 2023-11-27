export function randelt<X>(xs: X[]): X {
	return xs[Math.floor(Math.random() * xs.length)];
}

export function randumb(x: number) {
	return Math.floor(Math.random() * x);
}
