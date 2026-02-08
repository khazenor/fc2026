const npcDialogDefs = (npcName, playerName) => {
  let dialogsByName = IoHelper.readObj('kubejs/startup_scripts/src/core_mechanics/npcs/common/dialogs/dialog_keys.json')
  let dialogDefs = {}
  for (let dialogNpcName in dialogsByName) {
    let transKeys = dialogsByName[dialogNpcName]
    for (let transKey of transKeys) {
      ArrayJs.addToObjectArray(dialogDefs, dialogNpcName, 
        Text.translate(transKey, npcName, playerName)
      )
    }
  }
  return dialogDefs
}