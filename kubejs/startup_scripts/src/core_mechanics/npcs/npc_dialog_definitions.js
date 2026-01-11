const npcDialogDefs = (npcName, playerName) => {
  return {
    "Jess": {
      dialogs: [
        Text.translate("npcs.dialog.jessHi1", npcName),
        Text.translate("npcs.dialog.jessHi2Player", npcName, playerName),
        Text.translate("npcs.dialog.jessHi3", npcName, playerName),
        Text.translate("npcs.dialog.jessHi4", npcName)
      ]
    },
    "Pamela": {
      dialogs: [
        Text.translate("npcs.dialog.pamela1", npcName, playerName),
        Text.translate("npcs.dialog.pamela2", npcName, playerName),
        Text.translate("npcs.dialog.pamela3", npcName),
        Text.translate("npcs.dialog.pamela4", npcName)
      ]
    },
    "Sam": {
      dialogs: [
        Text.translate("npcs.dialog.sam1", npcName),
        Text.translate("npcs.dialog.sam2", npcName),
        Text.translate("npcs.dialog.sam3", npcName)
      ]
    },
    "Bernina": {
      dialogs: [
        Text.translate("npcs.dialog.bernina1", npcName),
        Text.translate("npcs.dialog.bernina2", npcName),
        Text.translate("npcs.dialog.bernina3", npcName, playerName),
        Text.translate("npcs.dialog.bernina4", npcName)
      ]
    },
    "Ren": {
      dialogs: [
        Text.translate("npcs.dialog.ren1", npcName),
        Text.translate("npcs.dialog.ren2", npcName),
        Text.translate("npcs.dialog.ren3", npcName),
        Text.translate("npcs.dialog.ren4", npcName)
      ]
    },
    "Yukkie": {
      dialogs: [
        Text.translate('npcs.dialog.yukkie1', npcName),
        Text.translate('npcs.dialog.yukkie2', npcName),
        Text.translate('npcs.dialog.yukkie3', npcName, playerName)
      ]
    }
  }
}