from discord import Option, ApplicationContext
from discord.ext import commands
from core.classes import Cog_Extension

import time
import json

with open("cmds/pyconfig.json", encoding="utf-8") as pyconfig:
    pyconf = json.load(pyconfig)

class Chat(Cog_Extension):
    @commands.slash_command(name="say", description="讓機器人說出一句話")
    async def say(
        self,
        ctx: ApplicationContext,
        *,
        content: Option(str, "訊息內容")
    ):
        await ctx.respond("你的訊息已經成功傳送", ephemeral=True)
        await ctx.send(content)

    @commands.slash_command(name="echo", description="讓機器人重複你說的一句話")
    async def echo(
        self,
        ctx: ApplicationContext,
        *,
        content: Option(str, "訊息內容")
    ):
        await ctx.respond(content)

    @commands.slash_command(name="thinking", description="w")
    async def thinking(
        self,
        ctx: ApplicationContext,
        種類: Option(str, "🤔", choices=pyconf["thinking"])
    ):
        timestamp = time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())
        print(f"{ctx.author} use /{ctx.command.name} {種類} at {timestamp}")
                
        if 種類 == None:
            await ctx.respond("<:thinking:974621588257398784>已傳送", ephemeral=True)
            await ctx.send("<:thinking:974621588257398784>")
      
        if 種類 == "normal":    
            await ctx.respond("<:thinking:974621588257398784>已傳送", ephemeral=True)
            await ctx.send("<:thinking:974621588257398784>")

        if 種類 == "cat":
            await ctx.respond("<:cathink:985794732926074900>已傳送", ephemeral=True)
            await ctx.send("<:cathink:985794732926074900>")

        if 種類 == "attano":
            await ctx.respond("<:attanothink:984310669425930251>已傳送", ephemeral=True)
            await ctx.send("<:attanothink:984310669425930251>")
                
        if 種類 == "thonk":
            await ctx.respond("<:thonk:984310370363645962>已傳送", ephemeral=True)
            await ctx.send("<:thonk:984310370363645962>")
                
        if 種類 == "superthonk":
            await ctx.respond("<:superthonk:984310368790781992>已傳送", ephemeral=True)
            await ctx.send("<:superthonk:984310368790781992>")

        if 種類 == "raythonk":
            await ctx.respond("<:raythonk:984310421072773170>已傳送", ephemeral=True)
            await ctx.send("<:raythonk:984310421072773170>")

        if 種類 == "rainbowhtonk":
            await ctx.respond("<:rainbowthonk:984310367276650546>已傳送", ephemeral=True)
            await ctx.send("<:rainbowthonk:984310367276650546>")

        if 種類 == "owothonk":
            await ctx.respond("<:owothonk:984310416672960553>已傳送", ephemeral=True)
            await ctx.send("<:owothonk:984310416672960553>")

        if 種類 == "thongk":
            await ctx.respond("<:thongk:984310425648779325>已傳送", ephemeral=True)
            await ctx.send("<:thongk:984310425648779325>")

        if 種類 == "smile1":
            await ctx.respond("<:smilethonk:984310424155611206>已傳送", ephemeral=True)
            await ctx.send("<:smilethonk:984310424155611206>")

        if 種類 == "smile2":
            await ctx.respond("<:w_:984310372091703296>已傳送", ephemeral=True)
            await ctx.send("<:w_:984310372091703296>")

        if 種類 == "rayteethonk":
            await ctx.respond("<:rayteethonk:984310422637281342>已傳送", ephemeral=True)
            await ctx.send("<:rayteethonk:984310422637281342>")

        if 種類 == "blue":
            await ctx.respond("<:bluethonk:984310412256358450>已傳送", ephemeral=True)
            await ctx.send("<:bluethonk:984310412256358450>")

        if 種類 == "10":
            await ctx.respond("<:10thonk:984310410738028604>已傳送", ephemeral=True)
            await ctx.send("<:10thonk:984310410738028604>")

        if 種類 == "distortion":
            await ctx.respond("<:distrotionthonk:984310414097657877>已傳送", ephemeral=True)
            await ctx.send("<:distrotionthonk:984310414097657877>")

        if 種類 == "pistol":
            await ctx.respond("<:pisthonk:984310418455539742>已傳送", ephemeral=True)
            await ctx.send("<:pisthonk:984310418455539742>")

        else:
            await ctx.respond(":thinking:已傳送", ephemeral=True)
            await ctx.send(":thinking:")


def setup(client):
    client.add_cog(Chat(client))
