# 3d

Dive into 5 different 3-D Worlds with this site: https://farohan.github.io/3d/

__Languages Used:__ HTML, CSS, Plain JavaScript

I used absolutely no libraries or frameworks for this project.

__Warning:__ Not intended for mobile devices.

## For Developers

Search for "high resolution equirectangular images."
When you find one that you like, go to this website: https://jaxry.github.io/panorama-to-cubemap/
and turn your downloaded image into a cubemap.

__Image download guidelines:__

nz - front - 0

pz - back - 1

nx - left - 2

px - right - 3

py - top - 4

ny - bottom - 5

When you click on the "cubemapped" images, they will be downloaded as such: nz.png, pz.png, etc.
Rename the images to numbers: 0, 1, 2, etc.

Then loop through the numbers, which will paste each image onto the screen.

This may seem difficult, but trust me: In the end, if everything goes as expected, you *will* get a smooth 3D experience.
