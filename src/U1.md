# Session #1

## Course Intro

In this first part of the course, we will follow a lecture format with demonstrations. I strongly encourage you to actively participate by trying to mimic the demos as they are presented. This hands-on approach will enhance your learning experience and allow you to gain practical skills by actively engaging with the material. 

Given the extensive amount of concepts to cover during these three hours, it is highly recommended that you thoroughly review the notes before the next hands-on session. This review will help solidify your understanding of the material and prepare you for active participation in the upcoming session.

I encourage participants to ask questions at the end of each section. Don't hesitate to seek clarification or further information on any topic discussed.

## History of Blender

* **Ton Roosendaal** [LINK to Wikipedia](https://en.wikipedia.org/wiki/Ton_Roosendaal "Wikipedia")

Ton Roosendaal is a Dutch software developer and entrepreneur. He founded the Blender Foundation and developed Blender, a popular open-source 3D graphics software. Born on March 20, 1960, in Eindhoven, Netherlands, Roosendaal began his career as a digital artist and programmer. In 1998, he established Not a Number Technologies (NaN), the company behind Blender. 

* **Brief History** [LINK to Blender.org/History](https://www.blender.org/about/history/ "History")

Blender 3D was initially a commercial software developed by Ton Roosendaal's company, Not a Number Technologies (NaN), in the late 1990s. However, when NaN went bankrupt in 2002, Roosendaal made Blender open-source. He founded the Blender Foundation to oversee the project and used crowdfunding and sponsorships for its support. Blender's transition to open-source led to its widespread use in 3D modeling, animation, and visual effects, with a global community of users and contributors.

* **Port to Linux** [LINK to Wikipedia](https://en.wikipedia.org/wiki/Linux "Linux")

Blender was ported to Linux in the early 2000s as part of the open-source development process, which involved adapting its code to Linux's libraries and system calls. Blender was tested on various distributions and hardware configurations to address any issues, and it is now available on Linux, macOS, and Windows. The Linux version of Blender is popular among artists, designers, and developers who prefer open-source software and value the flexibility of Linux.

---

## Free & Open Source Software (F.O.S.S) 

* **Transparency** [LINK to Git Repository](https://projects.blender.org/blender/blender "Blender Repo")

Transparency in open source software refers to the practice of freely sharing the source code, enabling users to access, review, and modify it. It promotes collaboration and innovation, as developers can contribute to existing projects and improve them. The transparency fosters a community-driven approach, allowing for continuous improvement and evolution.

* **Unexpected outcomes** [Link to Mars Rover Project](https://www.blender.org/user-stories/nasas-experience-curiosity/ "NASA Curiosity Rover")

A controllable Rover web-app, Experience Curiosity, to simulated space exploration of Exoplanets, to mobile-based Augmented Reality.

Brian Kumanchik, Project Lead & Art Director of NASA Jet Propulsion Laboratory implemented Blender into the workflow of JPL because it has a mature WebGL engine for interactive 3D browswer experiences.

* **Unexpected outcomes** [Environmental Analysis Tool](https://www.researchgate.net/figure/Blender-interface-with-VI-Suite-elements_fig6_319700974 "Envrionemental Analysis Modification")

Background The VI-Suite is a free and open-source addon for the 3D content creation application Blender, developed primarily as a tool for the contextual and performative analysis of buildings. Its functionality has grown from simple, static lighting analysis to fully parametric lighting, shadowing, and building energy analyses.

* **Communication** [Link to Blender Official YT Channel](https://www.youtube.com/@BlenderOfficial/videos "Official Youtube Channel")

* **The licensing allows for**

1. The freedom to use the software for any purpose
2. The freedom to access and examine the source code
3. The freedom to modify the software and distribute modifications
4. The freedom to distribute copies of the software to others

Together, these four freedoms give users and developers the ability to understand, modify, and distribute open source software without any limitations, promoting transparency, collaboration, and innovation in the software industry.

---

## 3D Graphics concepts

* **Graphical Advantage** 

Polygon modeling offers several efficiencies over other forms of 3D graphics, such as NURBS and sculpting. Here are some advantages of polygon modeling:

1. Flexibility: Polygon modeling allows for great flexibility in terms of creating different shapes and structures. It is easier to create complex geometric shapes with polygon modeling than with other techniques, and it is also easier to make changes to the model if needed.

2. Real-time rendering: Polygon models are usually lightweight and easy to render in real-time, making them ideal for use in video games, virtual reality, and other real-time applications.

3. Texturing: Polygon models are easy to texture and UV map, making them ideal for creating detailed and realistic models for film and gaming.

4. Animation: Polygon models are easy to animate, and can be rigged and posed in a variety of ways, making them ideal for creating animated characters and objects.

5. Efficiency: Polygon modeling is a relatively fast and efficient way of creating 3D models, making it a popular choice for many industries. It requires less processing power than other techniques, making it more accessible to a wider range of users.

* **Polygon Mesh** [LINK to Wikipedia](https://en.wikipedia.org/wiki/Polygon_mesh)

Polygon modeling is a 3D computer graphics technique that uses interconnected flat polygons to define the shape of complex models. It offers flexibility and control, allowing for highly detailed and realistic designs with low processing requirements. 

* **Normals** [LINK to Wikipedia](https://en.wikipedia.org/wiki/Normal_(geometry))

Polygon normals are vectors that determine the orientation of a polygon in 3D space. They point outward from the polygon's surface and are calculated by taking the cross product of two edges. In computer graphics, polygon normals influence how light interacts with a model, affecting its shading, reflections, and specular highlights. They also determine the direction of surface-based effects.

* **Shaders** [LINK to Wikipedia](https://en.wikipedia.org/wiki/Shader)

Shaders are programs used in 3D computer graphics to control the appearance of surfaces and objects. They are written in a special programming language that allows them to manipulate the color, texture, and lighting of 3D models. Shaders are used to create a variety of visual effects, such as realistic lighting and shadows, reflections, and transparency. They can also be used to create special effects such as distortion, motion blur, and heat shimmer. 

* **Texture Mapping** [LINK to Wikipedia](https://en.wikipedia.org/wiki/Texture_mapping)

Texture mapping is a technique used in 3D computer graphics to apply a 2D image or texture onto a 3D model's surface. It involves mapping each point on the surface of the model to a corresponding point on the 2D texture, using UV coordinates. Texture mapping is used to add detail and realism to 3D models, by applying textures such as wood, metal, or fabric. The texture can be manipulated and adjusted to fit the model's surface precisely. 

* **UV Mapping** [LINK to Wikipedia](https://en.wikipedia.org/wiki/UV_mapping)

UV texture coordinates are a 2D coordinate system used to map a 2D image or texture onto a 3D model in 3D computer graphics. The letters "U" and "V" refer to the two dimensions of the coordinate system, which are perpendicular to each other and represent the horizontal and vertical axes of the texture image. The UV coordinates are assigned to each vertex of the 3D model, which allows the texture to be mapped onto the surface of the model in a precise and accurate way.

* **Types of Maps** [LINK to Wikipedia](https://en.wikipedia.org/wiki/Displacement_mapping)

There are several types of texture maps used in 3D computer graphics. Here are some of the most common types:

1. Diffuse map: This is the most basic type of texture map, and it defines the color and appearance of the surface of the 3D model.

2. Normal map: This type of texture map is used to add detail and depth to a 3D model's surface by simulating the appearance of bumps and creases.

3. Specular map: This type of texture map defines the reflective properties of a surface, determining how light interacts with the surface and creating the appearance of shiny or glossy materials.

4. Ambient occlusion map: This type of texture map is used to add depth and realism to a 3D model by simulating the way light is absorbed and scattered by surfaces in the environment.

5. Displacement map: This type of texture map is used to add highly detailed geometry to a 3D model's surface by creating the appearance of height and depth.

6. Emissive map: This type of texture map is used to add the appearance of self-illumination or glowing parts to a 3D model.

These are just a few examples of the types of texture maps used in 3D computer graphics. Different types of texture maps can be combined and used together to create highly detailed and realistic 3D models.

* **RayTracing** [LINK to Wikipedia](https://en.wikipedia.org/wiki/Ray_tracing_(graphics))

Ray tracing is a rendering technique that simulates the behavior of light as it interacts with objects in a scene. It works by tracing the path of light rays as they travel from a virtual camera through the scene and interact with objects, determining how the light is reflected and refracted by each object. 

---

## Installation & Testing

Installing and testing Blender before a course is important to ensure compatibility, familiarity, and efficiency.

---

* **Install** [LINK to Download](https://www.blender.org/download/lts/3-3/ "Blender 3.3 LTS Download page")
* **Open** You may get a security warning from Windows Defender and/or Mac OS
* **Test** [Custom test instructions](Install_and_Test.MD "Markdown Document")
* **Configure** [LINK to configuration manual](https://docs.blender.org/manual/en/latest/getting_started/configuration/index.html "Blender Manual")

---

## Interface Overview

---

* **Splash Screen** [LINK to Page](https://docs.blender.org/manual/en/latest/interface/window_system/splash.html "Blender Manual")

The splash screen is a graphical image or animation that is displayed when an application or software program is launched. 

* **Workspaces** [LINK to image](https://docs.blender.org/manual/en/3.4/_images/interface_window-system_workspaces_layout.png "Blender Manual")

A Blender workspace is a customized layout of windows and panels within the Blender interface that is designed to suit a particular workflow or task.

* **Workspace Layout** [LINK to image](https://docs.blender.org/manual/en/3.4/interface/window_system/workspaces.html "Blender Manual")

Workspaces are used to organize the various tools and features of Blender in a way that is most efficient and productive for the user. Each workspace can be customized to include different windows and panels, and can be saved and loaded for future use.

* **Top Bar** [LINK to image](https://docs.blender.org/manual/en/3.4/_images/interface_window-system_introduction_default-screen.png "Blender Manual")

The top bar in the Blender workspace is a horizontal bar located at the top of the interface, above the 3D viewport. It contains several menus and options that provide access to various features and settings in Blender. The top bar includes menus for file management, editing modes, object selection, view options, and rendering settings. It also includes buttons for adding objects, toggling between different modes, and accessing the preferences and add-ons. The top bar is a central location for many of Blender's most commonly used features and can be customized to include additional options or add-ons.

* **Status bar** [LINK to Page](https://docs.blender.org/manual/en/3.4/interface/window_system/status_bar.html "Blender Manual")

The status bar in Blender is a narrow horizontal panel located at the bottom of the interface, below the 3D viewport. It provides information about the current state of the program and the active tool or feature. The status bar displays important information such as the current mode, selected object or component, the number of vertices, edges, and faces in the active mesh, and the current frame number for animation playback. It also displays status messages and warnings, and provides access to various system settings and preferences. The status bar is a helpful tool for monitoring the progress of operations and keeping track of important information while working in Blender.

* **Tool Bar** [LINK to Page](https://docs.blender.org/manual/en/3.4/interface/tool_system.html?highlight=tool%20bar#ui-region-toolbar "Blender Manual")

(Hide & Reveal with 'T')

Located on the left-hand side of the Blender interface, the Blender Toolbar is a comprehensive collection of tools and functionalities. It offers quick access to a wide range of options for modeling, sculpting, texturing, animating, rendering, and more. 

* **Outliner** [LINK to Page](https://docs.blender.org/manual/en/3.4/editors/outliner/introduction.html "Blender Manual")

The Blender Outliner is a hierarchical list view that provides a visual representation and organizational structure of the objects, collections, and data within a Blender scene.

* **Panels** [LINK to Page](https://docs.blender.org/manual/en/3.4/interface/window_system/tabs_panels.html "Blender Manual")

Tabs in the Blender UI refer to the horizontal tabs at the top of the interface that allow users to switch between different editor types and workspaces, providing a flexible and customizable layout.

Panels in the Blender UI are vertical sections within editors that contain various settings, options, and tools related to specific functions, allowing users to access and modify specific aspects of their projects efficiently.

* **Modes** Demonstration

Blender modes are different editing contexts within the software that enable users to perform specific actions and manipulate objects, such as object mode for overall scene editing, edit mode for vertex-level modifications, and sculpt mode for more organic and detailed sculpting.

---

## Viewport Navigation

Viewport navigation in Blender refers to the methods and controls used to navigate and explore the 3D Viewport, which is the main window where users interact with their 3D scenes. 

* Orbit: To orbit the view around the scene, hold down the middle mouse button and drag the mouse in the desired direction. Alternatively, you can press and hold Shift and the middle mouse button, then drag.
* Pan: To pan the view horizontally or vertically, hold down Shift and the middle mouse button, then drag the mouse.
* Zoom: To zoom in or out, scroll the middle mouse button up or down. Alternatively, you can use the "+" and "-" keys on the keyboard to zoom in and out, respectively.

* **Pan** Shift + CMB (Centre Mouse Button)
* **Zoom** Scroll Wheel
* **Zoom to Section** Select item > View menu > Zoom to selection
* **Rotate** CMB and move

---

## Select & Transform

* **Selection** LMB (Left Mouse Button)
* **Multi Selection** SHIFT + LMB (Left Mouse Button)
* **Grab / Move** Select item > View menu > Zoom to selection
* **Rotate** Hold CMB (Centre Mouse Button) and move mouse
* **Scale** S
* **Axis locking** X, Y, Z
* **3D Curser** Shift + RMB (Right Mouse Button)

---

## Sidebar Menu

* **Hide Show Sidebar** N or Click Tab
* **About** [LINK to Page](https://docs.blender.org/manual/en/latest/interface/window_system/regions.html#sidebar “Manual”)
* **Item Menu** Demonstration
* **Tool Menu** Demonstration
* **View Menu** Demonstration

---

# Break (15 m)

## Tool Bar

* **Hide Show Tool Bar**T or Click Tab
* **About** [LINK to Page](https://docs.blender.org/manual/en/latest/interface/tool_system.html#ui-region-toolbar “Manual”)
* **Selection Tool** Demonstration
* **View Menu** Demonstration
* **Move** Demonstration
* **Rotate** Demonstration
* **Scale** Demonstration
* **Transform** Demonstration
* **Annotate** Demonstration
* **Measure** Demonstration
* **Add Primitive** Demonstration

---

## Add & Delete Items

In Blender, adding items is done by utilizing specific shortcuts to quickly create objects or elements within the scene, such as Shift + A to bring up the Add menu and choose from a variety of primitives or Shift + A, followed by M, to add a new material.

On the other hand, deleting items is typically done by selecting the desired object or element and pressing the Delete key or X key, which brings up a menu with options to delete the selected item, vertices, edges, or faces, depending on the active mode (Edit mode, Vertex mode, etc.). Additionally, using the shortcut Shift + X allows for deleting only the selected vertices, edges, or faces without deleting the entire object.

* **Adding items to scene** SHIFT + A
* **Deleting** X
* **Context Menu** Demonstration

---

## Outliner

The Blender Outliner is a powerful tool for managing objects, collections, and data within a scene. It provides an organized hierarchical view of the elements in the scene and allows for efficient selection, organization, and management.

Associated shortcuts for using the Outliner include:

* **Hiding/Showing** Pressing H to hide selected items or Alt + H to unhide all hidden items.
* **Selecting/Deselecting** Clicking on an item in the Outliner selects it, and Shift + Clicking allows for selecting multiple items. Pressing A selects or deselects all items.
* **Parenting** Dragging an item onto another in the Outliner establishes a parent-child relationship.
* **Renaming** Pressing F2 or double-clicking on an item's name allows for renaming it.
* **Deleting** Pressing X or Delete removes the selected item(s) from the scene.
* **Collection Operations** Right-clicking on a collection in the Outliner brings up a context menu with various collection-related operations, such as creating, linking, or* unlinking collections.
* **Adding scene items** SHIFT + A
* **Selecting multiple items** Shift + LMB
* **Creating a collection** M
* **Selecting collection** Demonstration


* **Intro** [LINK to Manual](https://docs.blender.org/manual/en/latest/scene_layout/view_layers/introduction.html?highlight=outliner)

---

## Areas & Windows

In Blender, areas and windows refer to the various panels and regions within the user interface where different editors and tools are displayed, providing a flexible workspace for working on different aspects of a project simultaneously.

Associated shortcuts for managing areas and windows in Blender include:

* Splitting Areas: To split an area into two, position the mouse cursor over the border between two areas and press the left mouse button. Alternatively, use the shortcut Ctrl + Alt + Q to split the active area vertically or Ctrl + Alt + W to split it horizontally.
* Joining Areas: To join two areas into one, position the mouse cursor over the border between them, press Ctrl + Alt + J, and click with the left mouse button.
* Switching Editor Types: To switch the active editor type within an area, use the shortcut Ctrl + Left/Right Arrow keys or Ctrl + Up/Down Arrow keys.
* Maximizing an Area: To maximize the active area, press Ctrl + Up Arrow or Ctrl + Down Arrow.
* Toggling Full Screen: Pressing Shift + Spacebar toggles the current area into full-screen mode.
* Zooming in/out: Use the middle mouse button scroll or the '+' and '-' keys to zoom in and out within an area.

* **Intro** [LINK to Manual](https://docs.blender.org/manual/en/latest/interface/window_system/areas.html?highlight=areas)
* **Resizing** RMB on edge / Demonstration
* **Splitting** RMB on edge / Demonstration
* **Joining** RMB on edge / Demonstration
* **Open Window** Demonstration

---

## Editor Types

### Edit Mode

The 1, 2, and 3 keyboard commands in Blender are used to quickly access different selection modes within Edit mode in the 3D Viewport editor. These shortcuts allow users to switch between selecting vertices, edges, and faces with ease.

**1: Vertex Selection Mode**

Pressing the `1` key enters Vertex selection mode in Edit mode. This allows users to select individual vertices of a mesh for editing or manipulation.

**2: Edge Selection Mode**

Pressing the `2` key activates Edge selection mode. In this mode, users can select edges of the mesh, which can be useful for tasks such as edge extrusion or creating sharp edges.

**3: Face Selection Mode**

Pressing the `3` key switches to Face selection mode. This mode enables users to select entire faces of the mesh, which is particularly handy for tasks like extruding or modifying large surface areas.

Edit mode in Blender is a specific mode within the 3D Viewport editor that allows users to modify the geometry of selected objects at the vertex, edge, or face level. It provides a range of tools and shortcuts for precise editing and manipulation of the mesh.

Here are some associated shortcuts commonly used in Edit mode:

**Selection:**
- Right-click: Selects a vertex, edge, or face under the cursor.
- `B`: Activates box selection, allowing users to drag a selection box to select multiple vertices, edges, or faces.
- `C`: Enables circle selection, where users can select vertices, edges, or faces within a circular area.
- `Ctrl + Left-click`: Adds or removes vertices, edges, or faces from the selection.
- `Ctrl + L`: Selects all connected vertices, edges, or faces to the currently selected element.

**Transformation:**
- `G`: Translates (moves) selected vertices, edges, or faces.
- `R`: Rotates selected vertices, edges, or faces.
- `S`: Scales selected vertices, edges, or faces.
- `Alt + G`: Resets the translation (moves) of selected vertices, edges, or faces.
- `Alt + R`: Resets the rotation of selected vertices, edges, or faces.
- `Alt + S`: Resets the scale of selected vertices, edges, or faces.

**Mesh Editing:**
- `E`: Extrudes selected vertices, edges, or faces to create new geometry.
- `F`: Creates an edge or face between selected vertices or edges.
- `Ctrl + R`: Activates the Loop Cut tool, allowing users to create new edge loops.
- `Ctrl + B`: Enables the Bevel tool, which creates beveled edges or faces.

**Vertex/Edge/Face Operations:**
- `Ctrl + V`: Opens the Vertex context menu with various vertex-related operations.
- `Ctrl + E`: Opens the Edge context menu with various edge-related operations.
- `Ctrl + F`: Opens the Face context menu with various face-related operations.

---

## Edit Mode Toolbar

The Editor Toolbar in Blender is a set of tools and options available within each editor window. It provides quick access to commonly used functions and settings specific to the active editor, enhancing productivity and workflow efficiency.

The Editor Toolbar typically appears at the top of the editor window and contains various icons, buttons, menus, and dropdowns. The specific tools and options present in the toolbar depend on the type of editor currently active.

For example, in the 3D Viewport editor, the toolbar may include tools for object manipulation (such as selection, transformation, and duplication), options for shading and display modes, rendering settings, and viewport navigation controls.

In the UV/Image Editor, the toolbar may offer tools for UV mapping, texture painting, image manipulation, and adjustment settings.

The Properties Editor has its own toolbar that displays options related to the selected object or scene properties, materials, textures, and more.

Similarly, other editor types in Blender have their respective toolbars tailored to the specific functionalities and tasks associated with them.

The Editor Toolbar serves as a convenient and easily accessible interface for performing actions and adjusting settings within the active editor. It allows users to efficiently navigate, manipulate, and customize their workflow, ensuring a smooth and intuitive experience in Blender.

* **Editor Toolbar** [LINK to Manual](https://docs.blender.org/manual/en/latest/modeling/meshes/tools/toolbar.html#mesh-toolbar-index)

---

# Homework (If possible)

Please take a moment to scroll back through this page and review each section, testing the techniques mentioned along the way. Additionally, Session #2 is available for your review if you are interested in previewing what we will be building next week. Feel free to explore and familiarize yourself with the upcoming content.