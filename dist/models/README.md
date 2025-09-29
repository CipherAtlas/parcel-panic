# 3D Models for Parcel Panic

## File Placement

Place your OBJ files in this directory:

- `house.obj` - House/delivery building model
- `truck.obj` - Delivery truck model

## File Requirements

- **Format:** OBJ files
- **Scale:** Models will be automatically scaled to fit the game
- **Materials:** Basic materials will be applied automatically
- **Fallback:** If OBJ files fail to load, the game will use generated meshes

## Usage

The game will automatically load these models when starting. Check the browser console for loading status messages.

## Troubleshooting

If models don't appear:
1. Check browser console for error messages
2. Ensure files are in the correct location
3. Verify OBJ file format is valid
4. Game will fallback to generated meshes if loading fails
