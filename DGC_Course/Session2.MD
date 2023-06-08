# Session #2 

## Quick Review of previous week

[Session 1](Session1.MD)

## Workshop session

In this first half we will be using primitive base shapes and basic modeling techniques to create a pair of Binoculars.

### 1. Creation of a cylinder primitive

* Press Shift + A to open the Add menu.
* In the Add menu, hover the cursor over "Mesh" to open the mesh options.
* Press C to access the "Cylinder" option.
* By default, Blender creates the cylinder at the origin (0, 0, 0) with a radius of 1 and a height of 2 units.

### 2. Flaring cylinder end(s)

* With the cylinder selected, navigate to the top menu bar and click on the "Edit" menu or by pressing "Tab".
* Press "3" this will activate face select mode.
* Now, click on one of the faces at the end of the cylinder that you want to enlarge. This will select the face.
* To enlarge the selected face, press the S keyboard shortcut for scale. 
* Move the mouse cursor away from the face to start enlarging it. As you move the mouse further away, the face will increase in size. 
* Once you are satisfied with the size of the face, left-click to confirm the transformation.
* Exit Edit mode by pressing Tab, this will bring you back to default object mode.

### 3. Positioning offset from centerline

* Select the object you want to move by clicking on it in the 3D viewport. You can also select multiple objects by holding down the Shift key and clicking on each object.
* Press the G key on your keyboard to activate the "Grab" or move tool. This allows you to move the selected object(s).
* Press the X key on your keyboard to constrain the movement to the X-axis.
* Now, you can use the mouse to move the object back and forth along the X-axis. Simply move the mouse in the desired direction.
* Alternatively, if you want to move the object on the Z-axis by a specific distance, you can type a numerical value on your keyboard. For example, if you want to move the object 2 units up on the X-axis, type "2" and then press Enter.
* Once you have positioned the object at the desired location on the Z-axis, left-click the mouse or press Enter to confirm the movement.

### 4. Adding Empty

* Make sure you are in Object Mode by selecting it from the mode selector dropdown at the top of the Blender interface.
* Right-click in the 3D viewport to ensure no object is selected. This step ensures that the new empty axis will be added as a separate object.
* Press the Shift + A keys on your keyboard. This brings up the Add menu.
* From the Add menu, select "Empty" under the "Mesh" section. You can use the mouse to navigate the menu or press the letter E on your keyboard to quickly jump to the "Empty" option.
* Once you select "Empty," a new empty axis object will be added to the scene at the location of the 3D cursor, which is represented as a small gray crosshair.
* To move the empty axis to a specific location, you can use the transformation tools. For example, you can press the G key to activate the "Grab" tool, then use the mouse to move the empty axis to the desired position.
* Additionally, you can modify the properties of the empty axis by selecting it in the 3D viewport and accessing its properties in the Object Properties panel.

### 5. Mirror Modifier (Using Empty)

* Select the cylinder object again by left-clicking on it in the 3D viewport.
* In the Properties Editor, locate the "Modifiers" tab (represented by a wrench icon).
* Click on the "Add Modifier" button and select "Mirror" from the dropdown menu.
* In the Mirror modifier settings, click on the "Mirror Object" dropdown menu and select the empty axis object that you created.
* Enable the "X" checkbox under the "Axes" section to mirror the cylinder along the X-axis.
* Adjust the other settings of the Mirror modifier as desired, such as the merge and clipping options.
* You should now see the cylinder mirrored about the empty axis along the X-axis.

### 6. Parenting an object to the Empty

* Select the object(s) that you want to parent to the empty axis. You can select multiple objects by holding down the Shift key while clicking on each object.
* Shift-select the empty axis object to make it the active object. The active object is the last object selected and will be the parent of the other selected objects.
* Press Ctrl + P on your keyboard to bring up the Parent menu.
* From the Parent menu, select "Object" to parent the selected objects to the empty axis.
* The selected objects will now be parented to the empty axis. You can verify this by moving or rotating the empty axis, and the child objects will follow along.

### 7. Applying subdivision surface modifier

* Select the object to which you want to apply the Subdivision Surface modifier.
* Make sure you are in Object Mode. You can switch to Object Mode by pressing the Tab key on your keyboard and selecting "Object Mode" from the mode selector in the bottom-left corner of the Blender interface.
* Press Ctrl+3 on your keyboard. This shortcut applies the Subdivision Surface modifier and sets the viewport subdivision level to 3. The object will now appear smoother and more subdivided.

Note: The Ctrl+3 shortcut is a quick way to set the subdivision level to 3, but you can also manually adjust the subdivision level in the modifier settings if desired.

### 8. Applying the objects scale

* Select the object you want to apply the scale to. You can select an object by right-clicking on it in the 3D Viewport.
* Make sure you are in Object Mode. You can switch to Object Mode by pressing the Tab key on your keyboard and selecting "Object Mode" from the mode selector in the bottom-left corner of the Blender interface.
* Go to the "Object" menu at the top of the Blender interface.
* From the "Object" menu, choose "Apply" and then select "Scale" from the submenu. Alternatively, you can use the shortcut Ctrl+A and then choose "Scale" from the options.
* After applying the scale, the object's scale will be set to 1, effectively resetting any scaling transformations that were previously applied to the object. The object's size will appear normalized based on its new scale.

### 9. Adding loop cuts

Select the cylinder object in Edit Mode. You can switch to Edit Mode by pressing the Tab key on your keyboard and selecting "Edit Mode" from the mode selector in the upper-left corner of the Blender interface. Or switch to edit mode using Tab.

Locate the area on the cylinder where you want to add the edge loop.

#### Using the regular method:

* Ensure you are in Edge Select mode. You can switch to Edge Select mode by pressing the 2 key on your keyboard or by selecting the "Edge Select" option from the selection mode dropdown in the header of the 3D Viewport.
* Right-click on one of the edges that surround the desired location for the edge loop to select it.
* With the edge selected, navigate to the Mesh menu at the top of the Blender interface and choose "Edge" -> "Edge Loop" -> "Slide" or simply press the Ctrl+R shortcut.
* Move your mouse to adjust the position of the edge loop and left-click to confirm its placement. You can also use the scroll wheel to add more edge loops.
* Left-click again or press Enter to finalize the edge loop.

#### Using shortcuts:

* Ensure you are in Edge Select mode.
* Select one of the edges surrounding the desired location.
* Press Ctrl+R to activate the Loop Cut tool.
* Move your mouse to adjust the position of the edge loop and left-click to confirm.
* Slide the edge loop to the desired location and left-click again to finalize.

### 10. Applying Bevels

* elect the cylinder object in Edit Mode (Tab).
* hoose the end faces you want to bevel using selection tools like right-clicking, box selection (B), or circle selection (C).
* o to the "Mesh" menu and select "Bevel" or "Bevel Faces".
* djust the bevel settings in the Bevel tool options.* Confirm the operation by left-clicking or pressing Enter.

Shortcut: Tab to switch to Edit Mode, B for box selection, C for circle selection.

### 10. Contiguous selections & Deselections

### 11. Duplicated and separating faces
### 12. Knife tools (Cut Through)
### 13. Isolation & Exit isolation
### 14. Applying the solidify modifier
### 15. Copying mirror modifier to other objects

# Break 15 min 

## Workshop

1. Creating & Naming Materials
2. Applying Single & Multiple materials to objects
3. Scene setup & Management (Grouping & Naming)
4. Lighting setup
5. Camera setup
6. Render settings (Passes, Denoising, Filetype)
7. Render output

# Resource Files

## [Download Binocular File](dl/Binoculars/bin.blend)
## [Download Example Render](dl/Binoculars/bin.png)