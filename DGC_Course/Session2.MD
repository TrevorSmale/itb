# Session #2 

## Quick Review of previous week

[Session 1](Session1.MD)

## Workshop session

In this first half we will be using primitive base shapes and basic modeling techniques to create a pair of Binoculars.

## Binocular Cylinder

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

#### Using Sidebar Menu > Item > Transform Properties

* Select the object you want to manipulate by clicking on it in the 3D viewport.
* Locate the sidebar menu on the right-hand side of the Blender interface. If it's not visible, you can toggle it on and off by pressing the N key.
* In the sidebar, find the "Item" tab, which is represented by an icon with a cube shape.
* Within the "Item" tab, you will find various transformation options such as location, rotation, and scale.
* To change the position of the object, adjust the values under the "Location" section. You can enter specific numerical values or use the arrows to incrementally move the object * along the X, Y, and Z axes.

Or

#### By Using Grab (G)

* Select the object you want to move by clicking on it in the 3D viewport. You can also select multiple objects by holding down the Shift key and clicking on each object.
* Press the G key on your keyboard to activate the "Grab" or move tool. This allows you to move the selected object(s).
* Press the X key on your keyboard to constrain the movement to the X-axis.
* Now, you can use the mouse to move the object back and forth along the X-axis. Simply move the mouse in the desired direction.
* Alternatively, if you want to move the object on the Z-axis by a specific distance, you can type a numerical value on your keyboard. For example, if you want to move the object 2 units up on the X-axis, type "2" and then press Enter.
* Once you have positioned the object at the desired location on the Z-axis, left-click the mouse or press Enter to confirm the movement.

### 4. Adding Empty using for mirroring

* Make sure you are in Object Mode by selecting it from the mode selector dropdown at the top of the Blender interface.
* Right-click in the 3D viewport to ensure no object is selected. This step ensures that the new empty axis will be added as a separate object.
* Press the Shift + A keys on your keyboard. This brings up the Add menu.
* From the Add menu, select "Empty" under the "Mesh" section. You can use the mouse to navigate the menu or press the letter E on your keyboard to quickly jump to the "Empty" option.
* Once you select "Empty," a new empty axis object will be added to the scene at the location of the 3D cursor, which is represented as a small gray crosshair.
* To move the empty axis to a specific location, you can use the transformation tools. For example, you can press the G key to activate the "Grab" tool, then use the mouse to move the empty axis to the desired position.
* Additionally, you can modify the properties of the empty axis by selecting it in the 3D viewport and accessing its properties in the Object Properties panel.

### 5. Mirror Modifier (Using the Empty as a target)

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

### 8. Inseting, Extruding and Scaling faces

* Enter Edit Mode by selecting the object and pressing the Tab key.

* Select the face or faces you want to manipulate. You can use selection tools like right-clicking, box selection (B), or circle selection (C) to choose the desired faces.

* To inset the selected faces, press the I key. You can control the inset depth by moving the mouse or inputting specific numerical values. Left-click or press Enter to confirm the inset.

* To extrude the selected faces, press the E key. Move the mouse or enter numerical values to define the extrusion distance or direction. Left-click to confirm the extrusion.

* To scale the selected faces, press the S key. Move the mouse to scale the faces interactively or input numerical values for precise scaling. Left-click to confirm the scaling.

* You can also constrain the extrusion or scaling to a specific axis by pressing X, Y, or Z after initiating the extrusion or scaling operation. This constrains the operation to the corresponding axis.

* After performing the desired transformations, you can further manipulate the geometry by translating, rotating, or scaling the newly created faces or vertices.

* To exit Edit Mode, press the Tab key again.

### 9. Applying the objects scale

* Select the object you want to apply the scale to. You can select an object by right-clicking on it in the 3D Viewport.
* Make sure you are in Object Mode. You can switch to Object Mode by pressing the Tab key on your keyboard and selecting "Object Mode" from the mode selector in the bottom-left corner of the Blender interface.
* Go to the "Object" menu at the top of the Blender interface.
* From the "Object" menu, choose "Apply" and then select "Scale" from the submenu. Alternatively, you can use the shortcut Ctrl+A and then choose "Scale" from the options.
* After applying the scale, the object's scale will be set to 1, effectively resetting any scaling transformations that were previously applied to the object. The object's size will appear normalized based on its new scale.

### 10. Adding loop cuts

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

### 11. Applying Bevels

* elect the cylinder object in Edit Mode (Tab).
* hoose the end faces you want to bevel using selection tools like right-clicking, box selection (B), or circle selection (C).
* o to the "Mesh" menu and select "Bevel" or "Bevel Faces".
* djust the bevel settings in the Bevel tool options.* Confirm the operation by left-clicking or pressing Enter.

Shortcut: Tab to switch to Edit Mode, B for box selection, C for circle selection.

### 12. Contiguous selections & Deselections

#### Contiguous Selections

- Enter Edit Mode (Tab).
- Activate the selection tool (such as right-clicking, box selection (B), or circle selection (C)).
- Click on the starting vertex, edge, or face you want to select.
- While holding down the Shift key, click on the ending vertex, edge, or face of the desired selection range.
- Blender will select all the vertices, edges, or faces between the starting and ending points.

#### Contiguous Deselections

- Enter Edit Mode (Tab).
- Activate the selection tool (such as right-clicking, box selection (B), or circle selection (C)).
- Click on the starting vertex, edge, or face you want to deselect.
- While holding down the Shift key, click on the ending vertex, edge, or face of the desired deselection range.
- Blender will deselect all the vertices, edges, or faces between the starting and ending points.

### 13. Duplicating and separating faces

#### Duplicating Faces

- Enter Edit Mode (Tab).
- Select the faces you want to duplicate using the selection tools like right-clicking, box selection (B), or circle selection (C).
- Press Shift + D to duplicate the selected faces.
- Move the duplicated faces to the desired location by translating, rotating, or scaling them.
- Left-click or press Enter to confirm the placement of the duplicated faces.

#### Separating Faces

- Enter Edit Mode (Tab).
- Select the faces you want to separate using the selection tools like right-clicking, box selection (B), or circle selection (C).
- Press P to open the Separate menu.
- Choose "Selection" from the Separate menu options to separate the selected faces into a new object.
- The separated faces will now be in a new object, while the original object retains the remaining faces.

### 14. Knife Tool - Cutting Through

- Before starting, make sure the camera is in a projected view that allows you to accurately visualize the cutting path.
- Enter Edit Mode (Tab).
- Press K to activate the Knife tool.
- Click on the starting point of the cut on the object.
- Move the mouse cursor along the desired cutting path.
- Left-click to create a cut.
- Continue creating additional cuts as needed by left-clicking at different points along the cutting path.
- To finish the cut, press Enter or right-click.

### 15. Isolation & Exit isolation

#### Isolation Mode

- Select the object or objects you want to isolate.
- Press the forward slash key (/) on the keyboard.
- Blender will enter isolation mode, hiding all other objects except for the selected ones.

#### Exiting Isolation Mode

- To exit isolation mode, press the forward slash key (/) again.
- Blender will return to the regular view, showing all objects in the scene.

### 16. Applying the solidify modifier

### 17. Duplicating and separating the cut faces to create the grip

#### Duplicating Faces

- Enter Edit Mode (Tab).
- Select the faces you want to duplicate using the selection tools like right-clicking, box selection (B), or circle selection (C).
- Press Shift + D to duplicate the selected faces.
- Move the duplicated faces to the desired location by translating, rotating, or scaling them.
- Left-click or press Enter to confirm the placement of the duplicated faces.

#### Separating Faces

- Enter Edit Mode (Tab).
- Select the faces you want to separate using the selection tools like right-clicking, box selection (B), or circle selection (C).
- Press P to open the Separate menu.
- Choose "Selection" from the Separate menu options to separate the selected faces into a new object.
- The separated faces will now be in a new object, while the original object retains the remaining faces.

# Break 15 min 

## Workshop

### 17. Creating & Naming Materials

* Select the object or objects to which you want to assign a material by clicking on them in the 3D viewport.
* Go to the "Material" tab in the Properties panel (located in the sidebar on the right-hand side of the Blender interface, usually accessed by pressing the N key).
* If no material slots are available, click the "+" button next to the material list to add a new material slot for the selected object(s).
* With the material slot selected, click the "New" button to create a new material. By default, it will be named "Material".
* To rename the material, click on the material's name field (e.g., "Material") and enter a new name for the material. Press Enter to confirm the new name.
* Adjust the material's properties, such as its color, roughness, metallicness, or any other desired attributes, using the various options available in the material settings.
* If you want to assign the material to other objects, select the objects and click the material dropdown menu in the material slot. Choose the desired material name from the list.

Repeat the process to create and name additional materials as needed.

Naming materials is helpful for better organization and easy identification of materials when working on complex scenes with multiple objects. It allows you to assign different appearances, properties, and textures to specific materials, enhancing the overall visual quality of your work in Blender.

### 18. Applying Single & Multiple materials to a single objects

Applying a Single Material

* With the material slot selected, click the "New" button to create a new material. By default, it will be named "Material".

* Adjust the properties of the material, such as its color, roughness, or any other desired attributes, using the various options available in the material settings.

* The single material is automatically assigned to the entire object.

Applying Multiple Materials

* To apply multiple materials, click the "+" button next to the material list to add additional material slots for the selected object.

* With a new material slot selected, click the "New" button to create a new material. By default, it will be named "Material.001". Repeat this step for each additional material you want to apply.

* Adjust the properties of each material as desired.

* In Edit Mode, select the faces or parts of the object to which you want to assign a specific material.

* In the material slots, click the material dropdown menu for the selected faces or parts, and choose the desired material name from the list. Repeat this step for each material you want to assign to different parts of the object.

* The selected faces or parts will now have the assigned material(s), and you can adjust the properties of each material individually to achieve different visual effects.

By applying single or multiple materials to a single object, you can create complex and visually appealing models with varied appearances for different parts or components of the object.

### 19. Scene setup & Management (Grouping & Naming)

#### Grouping Objects:

4. Select the objects you want to group together. You can select multiple objects by holding down the Shift key while clicking on each object.

* Press Ctrl + G to create a new group. A pop-up window will appear, allowing you to name the group. Enter a descriptive name for the group and press Enter to confirm.

* The selected objects are now grouped together under the specified name.

#### Naming Objects:

* Select an object by clicking on it in the 3D viewport.

* In the "Object" tab of the Properties panel (located in the sidebar on the right-hand side of the Blender interface, usually accessed by pressing the N key), locate the "Object" section.

* Find the "Name" field under the "Object" section and enter a meaningful name for the object.

* Press Enter to confirm the new name.

* Repeat this process for each object in your scene, giving them descriptive names to help organize and identify them easily.

20. Lighting setup

* Open Blender and ensure you have a scene set up with objects.

* In the 3D viewport, make sure you are in "Object Mode" by pressing the Tab key if necessary.

* By default, Blender starts with a basic light source called "Lamp". You can adjust this light or add additional lights for more control and realism.

* To add a new light, go to the "Add" menu at the top of the 3D viewport or use the Shift + A shortcut. Choose "Light" and select the type of light you want to add (e.g., "Point", "Sun", "Area", "Spot", etc.). The new light will be placed at the origin (0, 0, 0) in the scene.

* Position the light source by selecting it and using the Move (shortcut: G) and Rotate (shortcut: R) tools to place it where you want. You can also adjust the light's properties in the "Light" tab of the Properties panel (located in the sidebar on the right-hand side of the Blender interface, usually accessed by pressing the N key).

* Experiment with different types of lights and their properties to achieve the desired lighting setup. For example, a "Point" light emits light in all directions, while a "Sun" light mimics the sun's directional light.

You can also adjust the strength (intensity) of the light source in the "Light" tab or directly in the 3D viewport by selecting the light and adjusting the Strength value.

21. Camera setup

* Demonstration

22. Render settings (Passes, Denoising, Filetype)

* Demonstration

23. Render output

* Demonstration

# Resource Files

## [Download Binocular File](dl/Binoculars/bin.blend)
## [Download Example Render](dl/Binoculars/bin.png)