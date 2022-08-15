import { Command } from "../struct/commandManager";
import { ping } from "../cmds/ping";
import { avatar } from "../cmds/avatar";

export const Commands: Command[] = [ping, avatar];