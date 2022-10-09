######################################
#*****Discord Python Bot Example*****#
#*********Author:dragonyc1002********#
#***********Version:1.0.0************#
######################################
from os import listdir
import time
import discord
from discord.ext import commands
from discord.commands import Option

from dotenv import load_dotenv

client = discord.Bot(activity=discord.Game(name="你好，我是HBYC"))

cogs = [cog[:-3] for cog in listdir("./cmds") if cog.endswith(".py")]
[client.load_extension(f"cmds.{cog[:-3]}") for cog in listdir("./cmds") if cog.endswith(".py")]

@client.event
async def on_ready():
    print(f"Logged in as {client.user} (ID: {client.user.id})")
    print("Logged at", time.strftime("%Y-%m-%d %H:%M:%S", time.localtime()))
    print("------------------------")
    for guild in client.guilds:
        print(guild.id, guild.name)
    print("------------------------")


@client.slash_command(name="load", description="Load the Cog_Extension")
@commands.is_owner()
async def load(
    ctx: discord.ApplicationContext,
    extension: Option(str, "Enter Extension Name", choices=cogs)
):
    timestamp = time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())
    client.load_extension(f"cmds.{extension}")  
    await ctx.respond(f"`{extension}` 已完成加載")
    print(f"{ctx.author} Loaded {extension} at {timestamp}")


@client.slash_command(name="unload", description="Un-Load the Cog_Extension")
@commands.is_owner()
async def unload(
    ctx: discord.ApplicationContext,
    extension: Option(str, "Enter Extension Name", choices=cogs)
):
    timestamp = time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())
    client.unload_extension(f"cmds.{extension}")
    await ctx.respond(f"`{extension}` 已完成卸載")
    print(f"{ctx.author} Un-Loaded {extension} at {timestamp}")
      

@client.slash_command(name="reload", description="Re-Load the Cog_Extension")
@commands.is_owner()
async def reload(
    ctx: discord.ApplicationContext,
    extension: Option(str, "Enter Extension Name", choices=cogs)
):
    timestamp = time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())
    client.reload_extension(f"cmds.{extension}")
    await ctx.respond(f"`{extension}` 已完成重新載入")
    print(f"{ctx.author} Re-Loaded {extension} at {timestamp}")


@client.slash_command(name="activity", description="Change bot activity to the presence")
@commands.is_owner()
async def activity(
    ctx: discord.ApplicationContext,
    presence: Option(str, "Enter Presence Name")
):
    timestamp = time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())
    await client.change_presence(activity=discord.Game(name=presence))
    await ctx.respond(f"狀態已被更改為 `{presence}`")
    print(f"{ctx.author} Changed activity to {presence} at {timestamp}")
  

load_dotenv()
if __name__ == "__main__":
    client.run("ODkzNjg4NzY2MTk4MzI5MzQ0.YVfGhQ.1mdQZaJKMMN-c77IAkAxIqS0OgU")
