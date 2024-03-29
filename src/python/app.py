######################################
#*****Discord Python Bot Example*****#
#*********Author:dragonyc1002********#
#***********Version:1.0.0************#
######################################
import discord
from discord.ext import commands
from discord.commands import slash_command, Option

import os
import time
import json

from dotenv import load_dotenv

intents = discord.Intents.default()
intents.message_content = True

client = commands.Bot(intents=intents)
client.remove_command("help")

@client.event
async def on_ready():
    print(f"Logged in as {client.user} (ID: {client.user.id})")
    print(f"Logged at", time.strftime("%Y-%m-%d %H:%M:%S", time.localtime()))
    print("------------------------")
    for guild in client.guilds:
        print(guild.id, guild.name)
    print("------------------------")
    await client.change_presence(activity=discord.Game(name="你好，我是HBYC"))    

@client.slash_command(name="load", descriptio="Load the Cog_Extension")
async def load(
    ctx: discord.ApplicationContext,
    extension: Option(str, "Enter Extension Name", choices=["chat", "event","music", "help", "user"]),
    password: Option(str, "passwd")
):
    PermessionDeniedFrom = (f"{ctx.author} at {ctx.author.guild.name}")
    timestamp = time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())

    if password == passwd:
        client.load_extension(f"cmds.{extension}")
        await ctx.respond(f"加載Cog: {extension} 完成!")
        print(f"Loaded {extension}")
        print("at:", timestamp)

    else:
        await ctx.respond("密碼錯誤，如錯誤超過3次將直接把你列入使用黑名單(ban)，未來將無法使用HBYC")
        print("###Someone tried to load the cog###", PermessionDeniedFrom)


@client.slash_command(name="unload", description="Un-Load the Cog_Extension")
async def unload(
    ctx: discord.ApplicationContext,
    extension: Option(str, "Enter Extension Name", choices=["chat", "event","music", "help", "user"]),
    password: Option(str, "passwd")
):
    PermessionDeniedFrom = (f"{ctx.author} at {ctx.author.guild.name}")
    timestamp = time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())
    if password == passwd :
        client.unload_extension(f"cmds.{extension}")
        await ctx.respond(f"關閉Cog: {extension} 完成!")
        print(f"Un-Loaded {extension}")
        print("at:", timestamp)
    else:
        await ctx.respond("密碼錯誤，如錯誤超過3次將直接把你列入使用黑名單(ban)，未來將無法使用HBYC")
        print("###Someone tried to unload the cog###", PermessionDeniedFrom)


@client.slash_command(name="reload", description="Re-Load the Cog_Extension")
async def reload(
    ctx: discord.ApplicationContext,
    extension: Option(str, "Enter Extension Name", choices=["chat", "event","music", "help", "user"]),
    password: Option(str, "passwd")
):
    PermessionDeniedFrom = (f"{ctx.author} at {ctx.author.guild.name}")
    timestamp = time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())
    if password == passwd:
        client.reload_extension(f"cmds.{extension}")
        await ctx.respond(f"重新加載Cog: {extension} 完成!")
        print(f"Re-Loaded {extension}")
        print("at:", timestamp)
    else:
        await ctx.respond("密碼錯誤，如錯誤超過3次將直接把你列入使用黑名單(ban)，未來將無法使用HBYC")
        print("###Someone tried to reload the cog###", PermessionDeniedFrom)


@client.slash_command(name="custom", description="owner only")
async def custom(
  ctx: discord.ApplicationContext, 
  presence: Option(str, "presence name"), 
  password: Option(str, "passwd")
):
    PermessionDeniedFrom = (f"{ctx.author} at {ctx.author.guild.name}")
    timestamp = time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())
    if password == passwd:
        await client.change_presence(activity=discord.Game(name=presence))
        await ctx.respond(f"changed presence to {presence} done.")
        print("/custom")
        print(f"Presence changed:", presence)
        print("from:", ctx.author.guild.name)
        print("by:", ctx.author)
        print(f"at:", timestamp)
        print("-------")
    else:
        await ctx.respond("密碼錯誤，如錯誤超過3次將直接把你列入使用黑名單(ban)，未來將無法使用HBYC")
        print("### Someone tried to use custom presence as non-owner failed ###", PermessionDeniedFrom)
        print("User:", ctx.author)
        print(f"at:", timestamp)
        print("-------")


with open("config.json") as config:
    conf = json.load(config)


for filename in os.listdir("./cmds"):
    if filename.endswith(".py"):
        client.load_extension(f"cmds.{filename[:-3]}")


load_dotenv()
token = os.getenv("DISCORD_TOKEN")
passwd = os.getenv("password")


if __name__ == "__main__":
    client.run(token)    
