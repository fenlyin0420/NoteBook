---
title: "Wiki Article - 01. Atom Control"
source: "https://hub.virtamate.com/wiki/atom_control_tab/"
author:
  - "[[AshAuryn]]"
published: 2024-06-28
created: 2025-02-08
description: "Atom Control “Isolate Edit This Atom” Opens an Isolated Atom Edit window with options for disabling other atoms in game to make it easier to edit the..."
tags:
  - "clippings"
---
**Atom Control**

![pasted image 0 (14).png](https://hub.virtamate.com/attachments/pasted-image-0-14-png.383190/ "pasted image 0 (14).png")

![pasted image 0.png](https://hub.virtamate.com/attachments/pasted-image-0-png.383191/ "pasted image 0.png")

“Isolate Edit This Atom” Opens an Isolated Atom Edit window with options for disabling other atoms in game to make it easier to edit the selected atom.

![pasted image 0 (1).png](https://hub.virtamate.com/attachments/pasted-image-0-1-png.383192/ "pasted image 0 (1).png")

"Name Space" in the corner of "Isolated Atom Edit" displays the name of your selected Atom

![pasted image 0 (3).png](https://hub.virtamate.com/attachments/pasted-image-0-3-png.383194/ "pasted image 0 (3).png")

“Freeze Physics: Freezes the physics on all atoms in the scene expect for the one currently in isolated edit mode.

![pasted image 0 (4).png](https://hub.virtamate.com/attachments/pasted-image-0-4-png.383195/ "pasted image 0 (4).png")

”Disable Render” Hides all atoms in the scene except for the one currently in isolated edit mode.

![pasted image 0 (5).png](https://hub.virtamate.com/attachments/pasted-image-0-5-png.383196/ "pasted image 0 (5).png")

”Disable Collision” Disables collision on all other atoms in the scene. This does not apply to the currently isolated atom.

![pasted image 0 (6).png](https://hub.virtamate.com/attachments/pasted-image-0-6-png.383197/ "pasted image 0 (6).png")

”Select Atom” selects the currently Isolated atom.

![pasted image 0 (7).png](https://hub.virtamate.com/attachments/pasted-image-0-7-png.383198/ "pasted image 0 (7).png")

”End Isolate Edit Mode” Ends the isolated edit mode and closes the dialog box.

![pasted image 0 (8).png](https://hub.virtamate.com/attachments/pasted-image-0-8-png.383199/ "pasted image 0 (8).png")

“Name Space” This will display the name of the currently selected Atom. You can rename it here as well.

![pasted image 0 (9).png](https://hub.virtamate.com/attachments/pasted-image-0-9-png.383200/ "pasted image 0 (9).png")

“On” Toggle the atom on/off in the scene. This does not delete the Atom. When a scene is reloaded with Atoms turned off, the model and texture are not loaded until the Atom is turned “On” again.  
For the Person Atom, the base mesh and material is loaded when the scene is loaded. However Clothes, Hair, and Textures are only brought in when the Atom is back “On”.

![pasted image 0 (10).png](https://hub.virtamate.com/attachments/pasted-image-0-10-png.383201/ "pasted image 0 (10).png")

“Hidden” Toggling this on hides the Atom’s UI Icon. Useful for cleaning up your interface when working with multiple atoms.  
You can still select them by toggling on “Show Hidden” in the “[Select](https://hub.virtamate.com/threads/05-select.55126/)” panel.

![pasted image 0 (11).png](https://hub.virtamate.com/attachments/pasted-image-0-11-png.383202/ "pasted image 0 (11).png")

“Interactable In Play” This allows an atom to be grabbed by a VR controller or Mouse while in Play Mode.  
Turning this off means that you will not accidentally grab that node while it is hidden in Play mode.

![pasted image 0 (12).png](https://hub.virtamate.com/attachments/pasted-image-0-12-png.383203/ "pasted image 0 (12).png")

“Possessable” This allows an atom to be” possessed” by the player's VR head gear or controllers. Useful for motion capture, be sure “Armed for Record” in the Animation tab is also turned on.

![pasted image 0 (13).png](https://hub.virtamate.com/attachments/pasted-image-0-13-png.383204/ "pasted image 0 (13).png")

“Remove” Deletes the atom completely from the scene. No Undo!

![pasted image 0 (15).png](https://hub.virtamate.com/attachments/pasted-image-0-15-png.383205/ "pasted image 0 (15).png")

”Load Preset...”

![pasted image 0 (16).png](https://hub.virtamate.com/attachments/pasted-image-0-16-png.383206/ "pasted image 0 (16).png")

”Save Preset...”

![pasted image 0 (17).png](https://hub.virtamate.com/attachments/pasted-image-0-17-png.383207/ "pasted image 0 (17).png")

”Reset Pose”

![pasted image 0 (18).png](https://hub.virtamate.com/attachments/pasted-image-0-18-png.383208/ "pasted image 0 (18).png")

”Reset Look”

![pasted image 0 (19).png](https://hub.virtamate.com/attachments/pasted-image-0-19-png.383209/ "pasted image 0 (19).png")

”Load Look...”

![pasted image 0 (20).png](https://hub.virtamate.com/attachments/pasted-image-0-20-png.383210/ "pasted image 0 (20).png")

”Save Look...”

![pasted image 0 (21).png](https://hub.virtamate.com/attachments/pasted-image-0-21-png.383211/ "pasted image 0 (21).png")

”Load Pose…”

![pasted image 0 (22).png](https://hub.virtamate.com/attachments/pasted-image-0-22-png.383212/ "pasted image 0 (22).png")

”Save Pose…”

Information about Presets available [here](https://hub.virtamate.com/threads/11-presets.55034/).

![pasted image 0 (23).png](https://hub.virtamate.com/attachments/pasted-image-0-23-png.383213/ "pasted image 0 (23).png")

“Select Parent Atom From Scene” This button allows you to select from available atom nodes within the scene that you can parent the root node to.  
This should be used primarily for linking to “Subscene” atoms.  
When hitting this button the UI will hide and available link Icons will become semi transparent.  
Clicking on the icon will then link your atom to the selected node.

![pasted image 0 (24).png](https://hub.virtamate.com/attachments/pasted-image-0-24-png.383214/ "pasted image 0 (24).png")

“Parent Atom” (Dropdown) This dropdown list will populate with all available atoms that you can parent to within the scene.

![pasted image 0 (25).png](https://hub.virtamate.com/attachments/pasted-image-0-25-png.383215/ "pasted image 0 (25).png")

![SelectLinkTo.gif](https://hub.virtamate.com/attachments/selectlinkto-gif.383217/ "SelectLinkTo.gif")

”Select Link To From Scene” This button is used to link your selected atom to another atom within the scene.

This is the primary way to hierarchy link within VaM.

Clicking this button will switch all available atoms to semi transparent spheres.

Clicking on one of them will link your atom.

![pasted image 0 (26).png](https://hub.virtamate.com/attachments/pasted-image-0-26-png.383218/ "pasted image 0 (26).png")

”Link To Atom” (Dropdown) This list will populate with the top level atoms within your scene that you can link to.

![pasted image 0 (27).png](https://hub.virtamate.com/attachments/pasted-image-0-27-png.383219/ "pasted image 0 (27).png")

”Link To” (Dropdown) This list will populate with the selected “Link to Atom” available sub objects.  
For example, selecting the atom “Person” to link to will list all Control joints and Objects within that person so that you can parent custom glasses to your person atom’s head.

![pasted image 0 (28).png](https://hub.virtamate.com/attachments/pasted-image-0-28-png.383221/ "pasted image 0 (28).png")

“Position/Rotation” options.

There are many ways that atoms can be manipulated within VaM.

These position rotation options can be used in many combinations of ways to lock, parent or otherwise influence how your atoms behave.

![pasted image 0 (29).png](https://hub.virtamate.com/attachments/pasted-image-0-29-png.383222/ "pasted image 0 (29).png")

![pasted image 0 (30).png](https://hub.virtamate.com/attachments/pasted-image-0-30-png.383224/ "pasted image 0 (30).png")

![AtomOn.gif](https://hub.virtamate.com/attachments/atomon-gif.383227/ "AtomOn.gif")

”On” Indicated with a green UI color.

This is the default setting for all atoms in game when first added to your scene.

It maintains its currently set position and rotation unless otherwise moved by you.

The example shows both objects with Physics turned “on”. If Physics is turned off on the book, it will not be affected by the ball pushing on it.

![pasted image 0 (31).png](https://hub.virtamate.com/attachments/pasted-image-0-31-png.383228/ "pasted image 0 (31).png")

![pasted image 0 (32).png](https://hub.virtamate.com/attachments/pasted-image-0-32-png.383229/ "pasted image 0 (32).png")

![AtomComply.gif](https://hub.virtamate.com/attachments/atomcomply-gif.383230/ "AtomComply.gif")

”Comply” Also Indicated with a green UI color.

Allows you to push atom nodes with active Physics around your scene.

This is very useful when posing a character or wanting a soft give to your props when interacting with them.

They will stay in their new location and not return to their starting rotation or position.

The example shows the comply effect on the book with physics turned on both atoms

![pasted image 0 (33).png](https://hub.virtamate.com/attachments/pasted-image-0-33-png.383231/ "pasted image 0 (33).png")

![pasted image 0 (34).png](https://hub.virtamate.com/attachments/pasted-image-0-34-png.383232/ "pasted image 0 (34).png")

![AtomOff.gif](https://hub.virtamate.com/attachments/atomoff-gif.383233/ "AtomOff.gif")

”Off” Indicated by a Red icon.

It is mostly used with “Physics” and “Use Gravity When Position Off” Toggled “On” allowing you to simulate physics interactions with the built in atoms.

If you are adding your own custom objects into VaM with an asset bundle and want them to work with physics inside VaM.

You will want the Unity Mesh Collider to be set to “convex”.

![pasted image 0 (35).png](https://hub.virtamate.com/attachments/pasted-image-0-35-png.383235/ "pasted image 0 (35).png")

![pasted image 0 (36).png](https://hub.virtamate.com/attachments/pasted-image-0-36-png.383236/ "pasted image 0 (36).png")

![ParentLinked.gif](https://hub.virtamate.com/attachments/parentlinked-gif.383238/ "ParentLinked.gif")

”Parent Link” Indicated by a Purple Icon.

A Parent Linked atom will move and rotate with the parent atom.

In this example the Book is parented to the Sphere’s Mesh Object. Both the book and The Sphere have physics turned on.

![pasted image 0 (37).png](https://hub.virtamate.com/attachments/pasted-image-0-37-png.383239/ "pasted image 0 (37).png")

![pasted image 0 (38).png](https://hub.virtamate.com/attachments/pasted-image-0-38-png.383240/ "pasted image 0 (38).png")

![PhysicsLinked.gif](https://hub.virtamate.com/attachments/physicslinked-gif.383241/ "PhysicsLinked.gif")

”Physics Link” Indicated by a Purple Icon.

A physics linked atom will influence it’s parent based on the settings within it’s “Physics Object” tab.

In this example you can see that the weight of the book is influencing the parent sphere object.

![pasted image 0 (39).png](https://hub.virtamate.com/attachments/pasted-image-0-39-png.383242/ "pasted image 0 (39).png")

![pasted image 0 (40).png](https://hub.virtamate.com/attachments/pasted-image-0-40-png.383243/ "pasted image 0 (40).png")

![AtomHold.gif](https://hub.virtamate.com/attachments/atomhold-gif.383244/ "AtomHold.gif")

”Hold” Indicated by an Orange color.

“Hold” is a legacy state that was used when traditional controllers (like XBOX 360) were supported.  
In the “Hold” state the controller could instead be used to apply a force to the atom rather than move it.

Now “Hold” is much like “On” state with one exception. The Person Animation system only moves nodes that are in “On” state.

You can therefore change a node to “Hold” and move it around independently of the animation system as shown in the example.

![pasted image 0 (41).png](https://hub.virtamate.com/attachments/pasted-image-0-41-png.383245/ "pasted image 0 (41).png")

![pasted image 0 (42).png](https://hub.virtamate.com/attachments/pasted-image-0-42-png.383246/ "pasted image 0 (42).png")

![AtomLock.gif](https://hub.virtamate.com/attachments/atomlock-gif.383247/ "AtomLock.gif")

”Lock” Indicated by a Brown color.

This locks the atom in place so that it is not influenced at all by other atoms within the scene.

This does not restrict you from grabbing and manipulating the atom yourself.

![pasted image 0 (43).png](https://hub.virtamate.com/attachments/pasted-image-0-43-png.383248/ "pasted image 0 (43).png")

”Allow Possess/Grab” Turning these off restricts you from moving or rotating the atom in VR or desktop mode.

You can still select the atom, you just can’t manipulate it.

The following Comply settings are specifically for the Atom Control node. To adjust the comply relationship between the Physics Object and the Atom Control are found in the [Physics Control](https://hub.virtamate.com/threads/04-physics-control.55164/) Tab

![pasted image 0 (44).png](https://hub.virtamate.com/attachments/pasted-image-0-44-png.383250/ "pasted image 0 (44).png")

”Comply Position Threshold” Sets the amount of force it takes to move the control node of the atom while in Comply mode.  
The Physics Object of the atom is unaffected by this, only the Atom Control.

![pasted image 0 (45).png](https://hub.virtamate.com/attachments/pasted-image-0-45-png.383251/ "pasted image 0 (45).png")

”Comply Rotation Threshold” Sets the amount of force it takes to rotate the control node of the atom while in Comply mode.  
The Physics Object of the atom is unaffected by this, only the Atom Control.

![pasted image 0 (46).png](https://hub.virtamate.com/attachments/pasted-image-0-46-png.383252/ "pasted image 0 (46).png")

”Comply Speed” Sets the speed that the control node will follow the complied atom mesh.  
Lower speeds are smoother than higher speeds.

![AtomComplySpeed.gif](https://hub.virtamate.com/attachments/atomcomplyspeed-gif.383253/ "AtomComplySpeed.gif")

An example of Comply speed set to “10”, “50” and “100”