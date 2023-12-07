# Whiteboard App with Sticky Note Feature

## Overview

This project is an extension of a shared whiteboard app, introducing a sticky note feature inspired by [Miro](https://miro.com/index/). Users can now add sticky notes to the whiteboard canvas, facilitating collaborative brainstorming and idea sharing.

## Features

- **Sticky Note Creation:** Users can select the sticky note tool and click on the canvas to create a new sticky note.

- **Draggable Notes:** Implemented using the npm Draggable package, sticky notes are draggable, allowing users to reposition them on the canvas.

## Getting Started

To use this feature in your whiteboard app, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/aqdas77/sticky_notes.git
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Run the app:

    ```bash
    npm start
    ```

4. Open the app in your browser and start adding sticky notes!

## Implementation Details

The sticky note feature is implemented using the [Draggable](https://www.npmjs.com/package/react-draggable) package for React. The following steps provide an overview:

1. **Installation:**

    ```bash
    npm install react-draggable
    ```

2. **Usage:**

    Import the Draggable component:

    ```javascript
    import Draggable from 'react-draggable';
    ```

    Use it for each sticky note:

    ```javascript
    <Draggable>
        <div className="sticky-note">Your Sticky Note Content</div>
    </Draggable>
    ```



## Screenshots

![Screenshot (780)](https://github.com/aqdas77/sticky_notes/assets/95559517/116df175-2209-4f80-86cd-32f7278abef0)
![Screenshot (781)](https://github.com/aqdas77/sticky_notes/assets/95559517/4cd01961-975d-47fe-94ca-d52958c45986)
![Screenshot (778)](https://github.com/aqdas77/sticky_notes/assets/95559517/ebc88941-e325-4200-907b-2659e440bd35)
![Screenshot (779)](https://github.com/aqdas77/sticky_notes/assets/95559517/ddb5c326-d210-4f4b-af2d-c6db5eb076f0)

## Demo Video

Attach a video demonstrating how to use the sticky note feature in your whiteboard app. You can use screen recording tools like OBS Studio, Camtasia, or QuickTime Player (Mac) for this purpose.


https://github.com/aqdas77/sticky_notes/assets/95559517/eb172e12-9a8f-4344-b4f8-3bd09ec05f0c


## Repository

[Link to GitHub Repository](https://github.com/aqdas77/sticky_notes)



