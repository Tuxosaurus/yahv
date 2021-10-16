## Yet Another Hitbox Viewer

Comparative hitbox viewer for Super Street Fighter 2X/Turbo

### How to use:

1. Select a character to act as player 1 (left)
2. Select a move from this character's moveset
3. Select an animation step from that move
4. Optionally do the same for player 2 (right)
5. Drag and drop the resulting images to better compare the hitboxes (refer to the legend at the bottom)

#### Controls

- **< Previous | Next >**: switch to previous or next step of animation for the selected move
- **Startup | Active | Recovery**: set the current step to the first of that category (if applicable)
- **Dark | Medium | Bright**: change the background color to a different shade of grey
- **1X | 2X | 3X**: set the level of zoom
- **CPS2 ON|OFF**: change the horizontal pixel ratio to approximately match the output on a CRT screen
- **Scanlines ON|OFF**: completely inaccurate CRT-like scanlines, for fun. CAUTION, when ON, you cannot drag and drop anymore...
- **Screenshot**: download a screenshot of the current scene
- **WWW**: open a new tab replicating the current scene, useful to share
- **Hotkeys**: show a list of available keyboard hotkeys you can use

#### Keyboard hotkeys

When the grid area is focused (white border), you can use keyboard shortcuts to control both players:

- Move player 1 by a pixel: **Ctrl + Left|Right|Up|Down**
- Move player 2 by a pixel: **Alt + Left|Right|Up|Down**
- Change player 1 step: **Shift + Left|Right**
- Change player 2 step: **Shift + Up|Down**

#### User settings

**Dark mode**: toggle less flashy/darker theme (defaults to system settings)  
**Notation**: display move names the logical way "**LP**", the nonsensical US way "**JAB**" or go for both "**LP (jab)**" - default  
**Disable tooltips**: disable tooltips that appear when hovering buttons, etc.

### Images & Data:

- [Shoryuken Wiki](https://srk.shib.live/w/Super_Street_Fighter_2_Turbo)

### Built using:

- [Create React App](https://create-react-app.dev/)
- [html2canvas](https://html2canvas.hertzen.com/)
- [react-draggable](https://github.com/react-grid-layout/react-draggable)
- [react-hot-keys](https://github.com/jaywcjlove/react-hotkeys)

### Alternatives:

- [Hitbox Theory Fighter](https://toufadev.github.io/ssf2st/)
- [DoctorGuile](https://doctorguile.github.io/ssf2st)
- [SSF2X Hitbox Guide - Android](https://play.google.com/store/apps/details?id=com.okerboriou.framedatassf2x)
