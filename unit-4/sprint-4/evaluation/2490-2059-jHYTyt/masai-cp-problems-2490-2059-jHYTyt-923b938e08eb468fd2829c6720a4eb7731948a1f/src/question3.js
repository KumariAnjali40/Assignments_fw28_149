function Guest(name, age) {
  this.name=name;
  this.age=age;
}
Guest.prototype.displayInfo=function(){
  return  `Name: ${this.name} and Age: ${this.age}`
}

// add a method displayInfo here use protoype

//   // Example usage
//   const guest1 = new Guest('John', 25);
//   const guest2 = new Guest('Alice', 30);

//   console.log(guest1.displayInfo()); // Output: Name: John and Age: 25
//   console.log(guest2.displayInfo()); // Output: Name: Alice and Age: 30

function PartyGuest(name, age, role,gifts,invitationStatus) {
  Guest.call(this,name,age);
  this.role=role;
  this.gift=gifts;
  this.invitationStatus=invitationStatus;
}

// add method
PartyGuest.prototype.bringGift=function(gift){
  this.gift.push(gift);
}
PartyGuest.prototype.sendInvitation=function(){
  this.invitationStatus="Sent";
}
PartyGuest.prototype.acceptInvitation=function(){
  this.invitationStatus="Accepted";
}
PartyGuest.prototype.declineInvitation=function(){
  this.invitationStatus="Declined";
}
PartyGuest.prototype.organizeParty=function(){
  return `Party organized by ${this.name} with role ${this.role}.`
}
PartyGuest.prototype.displayInfo=function(){
  return `Name: ${this.name}, Age: ${this.age}, Role: ${this.role}`
}
//displayInfo (overrides Guest displayInfo method)
// bringGift (gift) here
// sendInvitation here
// acceptInvitation here
// declineInvitation here
// organizeParty here

  // // Example usage
  // const partyHost = new PartyGuest("Alice", 30, "Host");
  // partyHost.bringGift("watch");
  // console.log(partyHost.gifts); // [ 'watch' ]
  // partyHost.bringGift("Party Hats");
  // console.log(partyHost.gifts); //[ 'watch', 'Party Hats' ]

  // partyHost.sendInvitation();
  // console.log(partyHost.invitationStatus); // Sent

  // partyHost.acceptInvitation();
  // console.log(partyHost.invitationStatus); // Accepted

  // console.log(partyHost.displayInfo()) // Name: Alice, Age: 30, Role: Host

  // console.log(partyHost.organizeParty()); // Party organized by Alice with role Host.

//don't remove below export statement part
export { Guest, PartyGuest };
