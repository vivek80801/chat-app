export class myError {
	errors: string[];
	length: number;
	constructor() {
		this.errors = [];
		this.length = this.errors.length;
	}
	add(err: string) {
		this.errors.push(err);
	}
}
