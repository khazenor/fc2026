const npcDialogDefs = (npcName, playerName) => {
  let dialogsByName = IoHelper.readObj('kubejs/startup_scripts/src/core_mechanics/npcs/dialogs/dialog_keys.json')
  console.log('dialogsByName', dialogsByName)
  let dialogDefs = {}
  for (let dialogNpcName in dialogsByName) {
    let transKeys = dialogsByName[dialogNpcName]
    for (let transKey of transKeys) {
      ArrayJs.addToObjectArray(dialogDefs, dialogNpcName, 
        Text.translate(transKey, npcName, playerName)
      )
    }
  }
  console.log('dialogDefs', dialogDefs)
  return dialogDefs
}