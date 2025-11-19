
if (typeof gdjs.evtsExt__Gamepads__A_Change_Vibration_Magnitude !== "undefined") {
  gdjs.evtsExt__Gamepads__A_Change_Vibration_Magnitude.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Gamepads__A_Change_Vibration_Magnitude = {};


gdjs.evtsExt__Gamepads__A_Change_Vibration_Magnitude.userFunc0xbc6158 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";

};
gdjs.evtsExt__Gamepads__A_Change_Vibration_Magnitude.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Gamepads__A_Change_Vibration_Magnitude.userFunc0xbc6158(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Gamepads__A_Change_Vibration_Magnitude.func = function(runtimeScene, Player_ID, StrongMagnitude, WeakMagnitude, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Player_ID") return Player_ID;
if (argName === "StrongMagnitude") return StrongMagnitude;
if (argName === "WeakMagnitude") return WeakMagnitude;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Gamepads__A_Change_Vibration_Magnitude.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__Gamepads__A_Change_Vibration_Magnitude.registeredGdjsCallbacks = [];