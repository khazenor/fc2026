const npcDialogDefs = (npcName, playerName) => {
  return {
    "Jess": {
      dialogs: [
        Text.translate("dialog.jessHi1", npcName),
        Text.translate("dialog.jessHi2Player", npcName, playerName),
        Text.translate("dialog.jessHi3", npcName, playerName),
        Text.translate("dialog.jessHi4", npcName)
      ]
    },
    "Pamela": {
      dialogs: [
        Text.translate("dialog.pamela1", npcName, playerName),
        Text.translate("dialog.pamela2", npcName, playerName),
        Text.translate("dialog.pamela3", npcName),
        Text.translate("dialog.pamela4", npcName)
      ]
    },
    "Sam": {
      dialogs: [
        Text.translate("dialog.sam1", npcName),
        Text.translate("dialog.sam2", npcName),
        Text.translate("dialog.sam3", npcName)
      ]
    },
    "Bernina": {
      dialogs: [
        Text.translate("dialog.bernina1", npcName),
        Text.translate("dialog.bernina2", npcName),
        Text.translate("dialog.bernina3", npcName, playerName),
        Text.translate("dialog.bernina4", npcName)
      ]
    },
    "Ren": {
      dialogs: [
        Text.translate("dialog.ren1", npcName),
        Text.translate("dialog.ren2", npcName),
        Text.translate("dialog.ren3", npcName),
        Text.translate("dialog.ren4", npcName)
      ]
    }
  }
}