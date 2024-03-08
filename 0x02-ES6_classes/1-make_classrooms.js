// 1-make_classrooms.js

import ClassRoom from './0-classroom.js'; // Update the import statement with the file extension

// Function to initialize rooms
function initializeRooms() {
  const sizes = [19, 20, 34];
  const rooms = sizes.map((size) => new ClassRoom(size));
  return rooms;
}

export default initializeRooms;
