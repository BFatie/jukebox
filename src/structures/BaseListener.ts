import { Client } from "discord.js";
import { IEvent } from "../typings";

export class BaseListener implements IEvent {
    public constructor(public readonly client: Client, public name: IEvent["name"]) {}

    // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
    public execute(...args: any): void {}
}
