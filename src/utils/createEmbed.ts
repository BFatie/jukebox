import { MessageEmbed, MessageEmbedOptions } from "discord.js";

type hexColorsType = "info" | "warn" | "error";
const hexColors: Record<hexColorsType, string> = {
    info: "#00FF00",
    warn: "#FFFF00",
    error: "#FF0000"
};

export function createEmbed(type: hexColorsType, message?: string, MessageEmbedOptions?: MessageEmbedOptions): MessageEmbed {
    const embed = new MessageEmbed(MessageEmbedOptions)
        .setColor(hexColors[type]);

    if (message) embed.setDescription(message);

    return embed;
}
