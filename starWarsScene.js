function spotEachRebel(rebels) {
  var spottedRebelCalls = []

  rebels.forEach( function() {
    spottedRebelCalls.push('Look! Rebel scum!')
  })

  return spottedRebelCalls
}

function seeRebelsEscape(rebels) {
  var escapedRebelCalls = []
  var i = 0

  while (rebels[i] && rebels[i]['plotArmor']){
    escapedRebelCalls.push("Oh no! They're getting away!")
    i++
  }

  return escapedRebelCalls
}

function shootAtNothing(shots) {
  var shotsAtNothing = []

  for (var i = 0; i < shots; i++) {
    shotsAtNothing.push('pew')
  }

  return shotsAtNothing
}

export function deliverStormTroopersEscapeScene(rebels) {
  var sceneSequence = []

  const spottedRebelCalls = spotEachRebel(rebels)
  sceneSequence = sceneSequence.concat(spottedRebelCalls)

  const escapedRebelCalls = seeRebelsEscape(rebels)
  sceneSequence = sceneSequence.concat(escapedRebelCalls)

  const shotsAtNothing = shootAtNothing(4)
  sceneSequence = sceneSequence.concat(shotsAtNothing)

  return sceneSequence
}
