# pygame.Rect
Pygame object for storing rectangular coordinates.
## Attributes
- 
## Constructor
- `Rect(left, top, width, height) -> Rect` 
- `Rect((left, top), (width, height)) -> Rect`
- `Rect(object) -> Rect`
## Member Functoins
- [copy](Contents.md#copy)
- `move(x, y) -> Rect` Returns a new Rect that is moved by the given offset.x and y can be any Integer positive or negative.
# pygame.event.Event
## Attributes
- `type -> int` Event type identifier

## Constructor
- `Event(type, dict) -> Event`
- `Event(type, **attributes) -> Event`
## Member Functions
