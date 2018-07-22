export class CustomError {
  constructor(public type: string, public message: string, public status?: number) {}
}
